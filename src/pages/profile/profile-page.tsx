"use client";

import { OrderList } from "@/features";
import { Container, useCurrentUser } from "@/shared";
import { Footer, Header } from "@/widgets";

import Image from "next/image";

const orders = [
  {
    id: 10,
    userId: "cm8a70f7o0000tgpw5g670znh",
    firstName: "Bogdan",
    lastName: "Zhukov",
    phoneNumber: "96045565643654",
    country: "432423423",
    city: "34234234",
    address: "4534534534534",
    payment: "Online",
    status: "PENDING",
    totalPrice: 512000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 122,
    userId: "cm8a70f7o0000tgpw5g670znh",
    firstName: "Bogdan",
    lastName: "Zhukov",
    phoneNumber: "96045565643654",
    country: "432423423",
    city: "34234234",
    address: "4534534534534",
    payment: "Online",
    status: "PENDING",
    totalPrice: 5122000,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const ProfilePage = () => {
  const currentUser = useCurrentUser();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <Container className="flex flex-1">
          <section className="flex justify-between gap-8 flex-1 overflow-hidden flex-col">
            <div className="bg-color-white p-4 rounded-md flex items-center justify-between">
              <div className="flex justify-between items-center flex-wrap w-full gap-2">
                <div className="flex items-center gap-4">
                  <Image
                    src="/profile.png"
                    alt="Img-profile"
                    width={128}
                    height={128}
                    className=" rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-2xl">Bodich</p>
                    <p className="text-black-opacity75">{currentUser?.email}</p>
                  </div>
                </div>
                <h1 className="font-bold text-4xl">Your Profile</h1>
              </div>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto gap-4">
              <OrderList orders={orders} />
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
