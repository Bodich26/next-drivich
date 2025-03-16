"use server";

import { NextResponse } from "next/server";
import { prisma } from "../../../../backend/prisma/prisma-client";
import { auth } from "../../../../auth";

export async function GET() {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return NextResponse.json({ error: "LogIn to the site", items: [] });
  }

  const userFavorites = await prisma.favorites.findFirst({
    where: { userId },
    include: {
      products: {
        include: {
          product: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!userFavorites || userFavorites.products.length === 0) {
    return NextResponse.json({ error: "No product in favorites", items: [] });
  }

  try {
    const favoriteProducts = userFavorites.products.map((p) => p.product);

    return NextResponse.json({ items: favoriteProducts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
