"use client";

import { useCartTotal } from "@/features/cart/model/use-cart-total";
import { useGetCart } from "@/features/cart/model/use-get-cart";
import { Container, SkeletonProduct } from "@/shared";
import { Footer, Header, ProductList } from "@/widgets";

export const CartPage = () => {
  const { products, isLoading, error } = useGetCart();
  const { totalPrices } = useCartTotal();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <Container className="flex flex-1 flex-col">
          <div className=" rounded-md p-[12px] bg-color-white flex justify-between text-2xl font-bold mb-6">
            <h2>Cart</h2>
            <h3>Total Amount: {totalPrices}</h3>
          </div>
          <section className="flex flex-1 overflow-y-auto">
            {isLoading ? (
              <SkeletonProduct variant="cart" />
            ) : (
              <ProductList
                products={products}
                variant="cart"
                loadingError={error}
              />
            )}
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
