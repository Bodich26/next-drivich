"use server";

import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/../auth";
import { CheckoutSchema } from "@/features/checkout/model/checkout-schema";
import { prisma } from "../../../../backend/prisma/prisma-client";

export async function POST(req: NextRequest) {
  const session = await auth();
  const userId = session?.user.id;

  if (!userId) {
    return NextResponse.json({ error: "LogIn to the site" });
  }

  const body = await req.json();
  const validationFailed = CheckoutSchema.safeParse(body);

  if (!validationFailed.success) {
    return NextResponse.json({ error: "Invalid fields" });
  }

  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      country,
      city,
      address,
      payment,
    } = validationFailed.data;

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

    if (!userCart || userCart.products.length === 0) {
      return NextResponse.json({ error: "No product in cart" });
    }

    const totalPrice = userCart.products.reduce((sum, cartItem) => {
      const product = cartItem.product;
      const discountMultiplier = (100 - (product.discount ?? 0)) / 100;
      const finalPrice = product.price * discountMultiplier;
      return sum + finalPrice * cartItem.quantity;
    }, 0);

    const order = await prisma.order.create({
      data: {
        userId,
        firstName,
        lastName,
        phoneNumber,
        country,
        city,
        address,
        payment,
        status: "PENDING",
        totalPrice,
        orderItems: {
          create: userCart.products.map((cartItem) => {
            const product = cartItem.product;
            const discountMultiplier = (100 - (product.discount ?? 0)) / 100;
            const discountedPrice = product.price * discountMultiplier;

            return {
              productId: product.id,
              quantity: cartItem.quantity,
              price: discountedPrice * cartItem.quantity,
            };
          }),
        },
      },
    });

    await prisma.cart.update({
      where: { userId },
      data: {
        products: {
          deleteMany: {},
        },
      },
    });

    return NextResponse.json({
      success: true,
      message: "The order was completed successfully",
      order,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
