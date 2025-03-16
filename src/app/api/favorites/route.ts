"use server";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../backend/prisma/prisma-client";
import { auth } from "../../../../auth";

//--- Get Favorites product
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

//----Add Product in Favorites
export async function POST(req: NextRequest) {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return NextResponse.json({ error: "LogIn to the site" });
  }

  try {
    const { productId } = await req.json();

    let userFavorites = await prisma.favorites.findUnique({
      where: { userId },
    });

    if (!userFavorites) {
      userFavorites = await prisma.favorites.create({
        data: { userId },
      });
    }

    await prisma.favoritesOnProducts.create({
      data: {
        favoritesId: userFavorites.id,
        productId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Product added to favorites",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

//-------Remove from Favorites

export async function DELETE(req: NextRequest) {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return NextResponse.json({ error: "LogIn to the site", items: [] });
  }

  try {
    const { productId } = await req.json();

    await prisma.favoritesOnProducts.deleteMany({
      where: {
        productId,
        favorites: { userId },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Product removed from favorites",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
