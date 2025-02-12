import {
  CatalogProductCard,
  FavoriteProductCard,
  CartProductCard,
  ProductType,
} from "@/entities";

type ProductListProps = {
  products: ProductType[];
  variant: "catalog" | "cart" | "favorites";
};

export const ProductList = ({ products, variant }: ProductListProps) => {
  return (
    <div className="flex-1 overflow-y-auto">
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
