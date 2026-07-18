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

// Dedicated endpoint for the standalone /contact page. Functionally this
// mirrors POST /api/submissions (same schema, same table) but is scoped
// under /api/contact so the contact form doesn't depend on the homepage's
// endpoint naming, and callers can rely on `type` always being "booking".
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

    const parsed = submissionSchema.safeParse({ ...json, type: 'booking', source: json.source || 'contact-page' });
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? 'Invalid submission.';
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = parsed.data;

    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({ message: "Thanks — we'll be in touch within one business day!" });
    }

    await prisma.submission.create({
      data: {
        type: 'booking',
        firstName: data.firstName,
        lastName: data.lastName || null,
        email: data.email.toLowerCase(),
        phone: data.phone || null,
        company: data.company || null,
        service: data.service || null,
        message: data.message || null,
        source: data.source || 'contact-page',
      },
    });

    return NextResponse.json({ message: "Thanks — we'll be in touch within one business day!" });
  } catch (err) {
    console.error('Contact submission error:', err);
    return NextResponse.json(
      { error: 'Something went wrong on our end. Please try again shortly.' },
      { status: 500 }
    );
  }
}
