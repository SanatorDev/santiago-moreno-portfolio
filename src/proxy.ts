import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const truthyValues = new Set(["1", "true", "yes", "on"]);
const PUBLIC_FILE = /\.[^/]+$/;

function isFullSiteEnabled() {
  const raw = process.env.ENABLE_FULL_SITE ?? process.env.NEXT_PUBLIC_ENABLE_FULL_SITE;

  if (!raw) {
    return false;
  }

  return truthyValues.has(raw.toLowerCase());
}

export function proxy(request: NextRequest) {
  if (isFullSiteEnabled()) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  const isAllowedPath =
    pathname === "/coming-soon" ||
    pathname.startsWith("/coming-soon/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    PUBLIC_FILE.test(pathname);

  if (isAllowedPath) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  url.search = "";

  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/:path*",
};
