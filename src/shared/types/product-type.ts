import { Product } from "@prisma/client";

type ProductWithQuantity = Product & { quantity: number };

export type { ProductWithQuantity };
