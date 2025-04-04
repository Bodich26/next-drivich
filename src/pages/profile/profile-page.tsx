"use client";

import { OrderList } from "@/features";
import { useGetOrders } from "@/features/orders/model/use-get-orders";
import { Container, SkeletonOrders, useCurrentUser } from "@/shared";
import { DisplayLoadingErrors, Footer, Header } from "@/widgets";
import Image from "next/image";

export const ProfilePage = () => {
  const currentUser = useCurrentUser();
  const { orders, isLoading, error } = useGetOrders();
  if (!orders) return null;

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
                    <p className="font-bold text-2xl">
                      {currentUser?.firstName}
                    </p>
                    <p className="text-black-opacity75">{currentUser?.email}</p>
                  </div>
                </div>
                <h1 className="font-bold text-4xl">Your Profile</h1>
              </div>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto gap-4">
              <div className="rounded-md p-[12px] bg-color-white flex justify-between text-2xl font-bold">
                <h3>My Orders</h3>
              </div>
              {isLoading ? (
                <SkeletonOrders />
              ) : error ? (
                <DisplayLoadingErrors entities="orders" error={error} />
              ) : (
                <OrderList orders={orders} />
              )}
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
