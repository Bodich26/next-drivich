import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";
import { EngineType, Prisma } from "@prisma/client";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const priceMin = searchParams.get("priceMin");
    const priceMax = searchParams.get("priceMax");
    const engine = searchParams.get("engine");
    const electro = searchParams.get("electro");
    const model = searchParams.get("model");

    const filters: Prisma.ProductWhereInput = {};

    if (priceMin || priceMax) {
      filters.price = {
        ...(priceMin ? { gte: Number(priceMin) } : {}),
        ...(priceMax ? { lte: Number(priceMax) } : {}),
      };
    }

    if (engine === "true" && electro === "true") {
      filters.engineType = {
        in: [EngineType.ENGINE, EngineType.ELECTRO],
      };
    } else if (engine === "true") {
      filters.engineType = EngineType.ENGINE;
    } else if (electro === "true") {
      filters.engineType = EngineType.ELECTRO;
    }

    if (model) {
      filters.model = {
        contains: model,
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
