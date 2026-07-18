import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { submissionSchema } from '@/lib/validation';
import { checkRateLimit } from '@/lib/rateLimit';

export const runtime = 'nodejs';

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    const { allowed } = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute and try again.' },
        { status: 429 }
      );
    }

    const json = await req.json().catch(() => null);
    if (!json) {
      return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const parsed = submissionSchema.safeParse(json);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? 'Invalid submission.';
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = parsed.data;

    // Honeypot: if the hidden "website" field is filled in, silently
    // pretend success so bots don't learn to avoid the field, but
    // never write the record.
    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({
        message:
          data.type === 'newsletter'
            ? "You're subscribed! 🎉"
            : "Thanks — we'll be in touch within one business day!",
      });
    }

    await prisma.submission.create({
      data: {
        type: data.type,
        firstName: data.firstName,
        lastName: data.lastName || null,
        email: data.email.toLowerCase(),
        phone: data.phone || null,
        company: data.company || null,
        service: data.service || null,
        message: data.message || null,
        source: data.source || null,
      },
    });

    return NextResponse.json({
      message:
        data.type === 'newsletter'
          ? "You're subscribed! 🎉"
          : "Thanks — we'll be in touch within one business day!",
    });
  } catch (err) {
    console.error('Submission error:', err);
    return NextResponse.json(
      { error: 'Something went wrong on our end. Please try again shortly.' },
      { status: 500 }
    );
  }
}
