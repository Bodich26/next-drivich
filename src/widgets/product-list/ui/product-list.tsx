import {
  CatalogProductCard,
  FavoriteProductCard,
  CartProductCard,
  ProductType,
} from "@/entities";
import { cn } from "@/shared";

type ProductListProps = {
  products: ProductType[];
  variant: "catalog" | "cart" | "favorites";
  className?: string;
};

export const ProductList = ({
  products,
  variant,
  className,
}: ProductListProps) => {
  return (
    <div className={cn("flex-1 overflow-y-auto", className)}>
      <div className="flex flex-wrap gap-6">
        {products.map((product) => {
          if (variant === "catalog") {
            return <CatalogProductCard key={product.id} product={product} />;
          }
          if (variant === "favorites") {
            return <FavoriteProductCard key={product.id} product={product} />;
          }
          if (variant === "cart") {
            return <CartProductCard key={product.id} product={product} />;
          }
        })}
      </div>
    </div>
  );
};
