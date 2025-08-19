import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Allow requests to public routes
  const isPublicRoute = 
    pathname === "/sign-in" ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/static") || // Static files
    pathname.startsWith("/_next") ||
    pathname.match(/\.(.*)$/) || // allow static file extensions like .png, .jpg, .css, etc.
    pathname === "/favicon.ico";

  if (isPublicRoute) {
    return NextResponse.next();
  }

  // Redirect to /sign-in if not authenticated
  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }


  return NextResponse.next();
}
