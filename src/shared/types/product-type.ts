import { Product } from "@prisma/client";

type ProductWithQuantity = Product & { quantity: number | 0 };

export type { ProductWithQuantity };
