"use server";
import { NextResponse } from "next/server";
import { auth } from "@/../auth";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET() {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return NextResponse.json({ error: "LogIn to the site", orderList: [] });
  }

  const orderList = await prisma.order.findMany({
    where: { userId },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!orderList) {
    return NextResponse.json({ error: "You have no orders", orderList: [] });
  }

  try {
    return NextResponse.json({ success: "Your orders list", orderList });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
