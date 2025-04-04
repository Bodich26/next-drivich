import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { StoreProvider, Toaster } from "@/shared";
import { SessionWrapper } from "@/features/auth";
import { auth } from "../../auth";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Drivich Autos",
  description: "Your auto store",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <SessionWrapper session={session}>
          <StoreProvider>{children}</StoreProvider>
        </SessionWrapper>
        <Toaster />
      </body>
    </html>
  );
}
