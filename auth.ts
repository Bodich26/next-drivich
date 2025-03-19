import NextAuth, { DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./backend/prisma/prisma-client";
import { Role } from "@prisma/client";
import authConfig from "./auth.config";

export type ExtendedUser = DefaultSession["user"] & {
  role: Role;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role?: Role;
    id?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as Role;
      }

      console.log(session);

      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;

        const existingUser = await prisma.user.findUnique({
          where: { id: user.id },
        });
        if (existingUser) {
          token.role = existingUser.role;
        }
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth",
  },
  ...authConfig,
});
