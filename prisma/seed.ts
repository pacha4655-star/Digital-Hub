import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    console.log(
      'Skipping admin seed: set ADMIN_EMAIL and ADMIN_PASSWORD in .env to create the first admin user.'
    );
  } else {
    const passwordHash = await bcrypt.hash(password, 12);
    await prisma.adminUser.upsert({
      where: { email },
      update: { passwordHash },
      create: { email, passwordHash, name: 'Admin' },
    });
    console.log(`Admin user ready: ${email}`);
  }

  const existingPost = await prisma.post.findUnique({ where: { slug: 'welcome-to-digital-hub' } });
  if (!existingPost) {
    await prisma.post.create({
      data: {
        slug: 'welcome-to-digital-hub',
        title: 'Welcome to the Digital Hub Blog',
        excerpt: 'We are kicking off our blog with insights on web development, SEO, and paid growth.',
        content:
          '# Welcome\n\nThis is your first post. Edit or delete it from the admin panel at **/admin/blog**, and publish new posts on strategy, case studies, and marketing insight for your clients.\n\n## Getting started\n\nHead to `/admin/blog/new` to write your next article.',
        tag: 'Announcements',
        published: true,
        publishedAt: new Date(),
      },
    });
    console.log('Sample blog post created.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
