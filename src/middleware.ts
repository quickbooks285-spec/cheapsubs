import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/dashboard") && !pathname.startsWith("/dashboard/login")) {
    const session = req.cookies.get("dashboard_session");
    if (!session || session.value !== process.env.DASHBOARD_SESSION_TOKEN) {
      return NextResponse.redirect(new URL("/dashboard/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
