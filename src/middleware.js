import { getToken } from 'next-auth/jwt';
import { NextResponse } from "next/server";

export async function middleware(req) {
  const path = req.nextUrl.pathname;

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isProtected = path.includes('/profile') || path.includes('/admin');

  if (!session && isProtected) {
    return NextResponse.redirect(new URL('/home', req.url));
  } else if (session) {
    if (path === '/' && session.user.role !== "admin") {
      return NextResponse.redirect(new URL('/profile', req.url));
    } else if (path === '/' && session.user.role === "admin") {
      return NextResponse.redirect(new URL('/admin', req.url));
    } else if (path === '/admin' && session.user.role !== "admin") {
      return NextResponse.redirect(new URL('/profile', req.url));
    } 
  }
  return NextResponse.next();
}
