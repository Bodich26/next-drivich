import { Container } from "@/shared";
import { Footer, Header } from "@/widgets";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <Container className="flex flex-1 flex-col">
          <section className="flex-1 overflow-y-auto">{children}</section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
