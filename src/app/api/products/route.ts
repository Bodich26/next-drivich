import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const priceMin = searchParams.get("priceMin");
    const priceMax = searchParams.get("priceMax");

    const filters: { price?: { gte?: number; lte?: number } } = {};

    if (priceMin || priceMax) {
      filters.price = {
        ...(priceMin ? { gte: Number(priceMin) } : {}),
        ...(priceMax ? { lte: Number(priceMax) } : {}),
      };
    }

    const productsList = await prisma.product.findMany({
      where: filters,
    });

    return NextResponse.json(productsList);
  } catch (error) {
    console.log("Ошибка при получении списка продуктов в API роуте: ", error);
    return NextResponse.json({ error: "Не удалось загрузить продукты" });
  }
}
