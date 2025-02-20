import { NextResponse } from "next/server";
import { prisma } from "../../../../backend/prisma/prisma-client";

export async function GET() {
  try {
    const productsList = await prisma.product.findMany();
    return NextResponse.json(productsList);
  } catch (error) {
    console.log("Ошибка при получении списка продуктов в API роуте: ", error);
    return NextResponse.error();
  }
}
