"use server";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../auth";
import { prisma } from "@/../backend/prisma/prisma-client";

//--Get user Cart
export async function GET() {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return NextResponse.json({ error: "LogIn to the site", items: [] });
  }

  const userCart = await prisma.cart.findUnique({
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

  if (!userCart) {
    return NextResponse.json({ items: [] });
  }

  try {
    const cartProducts = userCart.products.map((p) => ({
      ...p.product,
      quantity: p.quantity,
    }));

    return NextResponse.json({ items: cartProducts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

//---Add to Cart
export async function POST(req: NextRequest) {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return NextResponse.json({ error: "LogIn to the site" });
  }

  try {
    const { productId } = await req.json();

    let userCart = await prisma.cart.findUnique({
      where: { userId },
    });

    if (!userCart) {
      userCart = await prisma.cart.create({
        data: { userId },
      });
    }

    const existingProduct = await prisma.cartOnProducts.findFirst({
      where: {
        cartId: userCart.id,
        productId,
      },
    });

    if (existingProduct) {
      return NextResponse.json({
        success: false,
        error: "Product is already in the cart",
      });
    }

    await prisma.cartOnProducts.create({
      data: {
        cartId: userCart.id,
        productId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Product added to cart",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

//--Remove product from cart
export async function DELETE(req: NextRequest) {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return NextResponse.json({ error: "LogIn to the site" });
  }

  try {
    const { productId } = await req.json();

    const userCart = await prisma.cart.findUnique({
      where: { userId },
    });

    if (!userCart) {
      return NextResponse.json({ error: "Cart not found" });
    }

    await prisma.cartOnProducts.deleteMany({
      where: {
        productId,
        cartId: userCart.id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Product removed from cart",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

//--update user cart
export async function PUT(req: NextRequest) {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return NextResponse.json({ error: "LogIn to the site" });
  }

  try {
    const { productId, quantity } = await req.json();

    const userCart = await prisma.cart.findUnique({
      where: { userId },
    });

    if (!userCart) {
      return NextResponse.json({ error: "Cart not found" });
    }

    const cartItem = await prisma.cartOnProducts.findFirst({
      where: {
        cartId: userCart.id,
        productId,
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: "Product not in cart" });
    }

    if (quantity <= 0) {
      await prisma.cartOnProducts.delete({
        where: {
          productId_cartId: { productId, cartId: userCart.id },
        },
      });

      return NextResponse.json({
        success: true,
        message: "Product removed from cart",
      });
    }

    await prisma.cartOnProducts.update({
      where: {
        productId_cartId: { productId, cartId: userCart.id },
      },
      data: { quantity },
    });

    return NextResponse.json({
      success: true,
      message: " Quantity updated",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
