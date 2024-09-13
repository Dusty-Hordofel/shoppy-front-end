import authenticated from "@/app/(auth)/auth/actions/authenticated.action";
import { NextRequest } from "next/server";

const unauthorizedRoutes = ["/auth/login", "/auth/register"];

export function middleware(request: NextRequest) {
  const auth = request.cookies.get("Authentication")?.value;

  if (
    // !auth &&
    !authenticated() &&
    !unauthorizedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    )
  ) {
    return Response.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
