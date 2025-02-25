import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const cookie = request.cookies;

  // Literally primative, but we can do more logic later for requests to
  // reroute if user_id isnt actually associated with anything.
  // We dont realllly care if they exist
  const nextUrl = request.nextUrl;
  console.log(nextUrl.pathname);

  if (cookie.has('user_id')) {
    if (nextUrl.pathname === '/event') {
      return NextResponse.redirect(new URL('/event/list', request.url));
    }
    return;
  }
  // Not associated with a user, so bring them back to the earlier page
  return NextResponse.redirect(new URL('/event/login', request.url));
}
export const config = {
  matcher: ['/event/(.*)', '/event/'],
};
