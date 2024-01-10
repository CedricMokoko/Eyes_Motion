import { NextResponse } from "next/server";
import withAuth from "next-auth/middleware";

export function middleware(request) {
  if (/\/homepage$/.test(request.nextUrl.pathname)) {
    return withAuth(request);
  }
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
