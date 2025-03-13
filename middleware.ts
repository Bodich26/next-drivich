import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;

  const isAuthRoute = nextUrl.pathname.includes("/auth");

  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect("/");
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*", "/", "/(api|trpc)(.*)"],
};
