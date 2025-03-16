"use server";

import { NextResponse } from "next/server";
import { prisma } from "../../../../backend/prisma/prisma-client";
import { auth } from "../../../../auth";

export async function GET() {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return NextResponse.json({ message: "LogIn to the site", items: [] });
  }

  const userFavorites = await prisma.favorites.findFirst({
    where: { userId },
    include: {
      products: {
        orderBy: {
          createdAt: "desc",
        },
        include: {
          product: true,
        },
      },
    },
  });

  if (!userFavorites || userFavorites.products.length === 0) {
    return NextResponse.json({ message: "No product in favorites", items: [] });
  }

  try {
    return NextResponse.json(userFavorites);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
