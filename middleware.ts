/* Runs before every request.
   Used for lightweight request filtering, redirects,
   rewrites, authentication checks,
   or blocking access to specific routes.
   
   Middleware normally runs before every request to handle redirects,
   rewrites, auth checks, or route filtering. 
   N.B. Next.js middleware cannot be used with `output: "export"` (static HTML export for GitHub Pages). */

import { NextResponse } from "next/server";

export function middleware(req: { nextUrl: { pathname: string; }; url: string | URL | undefined; }) {
  if (req.nextUrl.pathname === "/blocked") {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ['/blocked']
};
