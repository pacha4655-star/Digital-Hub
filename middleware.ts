import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware() {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: { signIn: '/admin/login' },
  }
);

export const config = {
  // Protect /admin itself as well as every sub-route except /admin/login.
  // The previous matcher ('/admin/((?!login).*)') never matched the bare
  // '/admin' path, leaving the admin dashboard index publicly accessible.
  matcher: ['/admin', '/admin/((?!login).*)'],
};
