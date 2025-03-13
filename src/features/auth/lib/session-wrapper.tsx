"use client";

import { SessionProvider } from "next-auth/react";

export default function SessionWrapper({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
