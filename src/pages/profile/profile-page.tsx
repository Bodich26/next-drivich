"use client";

import { Container, useCurrentUser } from "@/shared";
import { Footer, Header } from "@/widgets";

export const ProfilePage = () => {
  const currentUser = useCurrentUser();
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <Container className="flex-1 flex">
          <section className="flex justify-between gap-8 flex-1 overflow-hidden">
            <div>Email: {currentUser?.email}</div>
            <div>Id: {currentUser?.id}</div>
            <div> Role: {currentUser?.role}</div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
