import {
  CatalogProductCard,
  FavoriteProductCard,
  CartProductCard,
} from "@/entities";
import { cn, ProductWithQuantity } from "@/shared";

type ProductListProps = {
  products: ProductWithQuantity[];
  variant: "catalog" | "cart" | "favorites";
  className?: string;
  loadingError?: string | undefined;
};

export const ProductList = ({
  products,
  variant,
  className,
}: ProductListProps) => {
  return (
    <div className={cn("flex-1 overflow-y-auto", className)}>
      <div className="flex flex-wrap gap-6 ">
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
          <div className="w-full bg-color-white rounded-md text-center p-4 hover-shadow-block">
            <h1 className="text-xl font-bold mb-1">No products</h1>
            <p>Oops, looks like you&apos;re out of groceries!</p>
          </div>
        )}
      </div>
    </div>
  );
};
