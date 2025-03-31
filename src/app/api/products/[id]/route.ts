import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../backend/prisma/prisma-client";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const productId = parseInt(id);

  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json({ message: "Product not found" });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Ошибка при получении продуктов по id в API роуте:", error);
    return NextResponse.json({ error: "Не удалось загрузить продукты по id" });
  }
}
