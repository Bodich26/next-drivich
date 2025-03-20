import {
  CatalogProductCard,
  FavoriteProductCard,
  CartProductCard,
} from "@/entities";
import { cn, DisplayError } from "@/shared";
import { Product } from "@prisma/client";

type ProductListProps = {
  products: Product[];
  variant: "catalog" | "cart" | "favorites";
  className?: string;
  loadingError?: string | undefined;
};

export const ProductList = ({
  products,
  variant,
  className,
  loadingError,
}: ProductListProps) => {
  return (
    <div className={cn("flex-1 overflow-y-auto", className)}>
      <div className="flex flex-wrap gap-6">
        {products.length > 0 ? (
          products.map((product) => {
            if (variant === "catalog") {
              return <CatalogProductCard key={product.id} product={product} />;
            }
            if (variant === "favorites") {
              return <FavoriteProductCard key={product.id} product={product} />;
            }
            if (variant === "cart") {
              return <CartProductCard key={product.id} product={product} />;
            }
          })
        ) : (
          <DisplayError error={loadingError || "Loading Error"} />
        )}
      </div>
    </div>
  );
};
