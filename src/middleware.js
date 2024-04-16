import { getToken } from 'next-auth/jwt';
import { NextResponse } from "next/server";

export async function middleware(req) {
  const path = req.nextUrl.pathname;

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isProtected = path.includes('/profile');

  if (!session && isProtected) {
    return NextResponse.redirect(new URL('/home', req.url));
  } else if (session && (path === '/')) {
    return NextResponse.redirect(new URL('/profile', req.url));
  }
  return NextResponse.next();
}
