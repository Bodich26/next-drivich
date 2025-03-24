"use client";

import { useGetCart } from "@/features/cart/model/use-get-cart";
import { Container, SkeletonProduct } from "@/shared";
import { Footer, Header, ProductList } from "@/widgets";

export const CartPage = () => {
  const { products, isLoading, error } = useGetCart();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <Container className="flex flex-1 flex-col">
          <section className="flex flex-1 overflow-y-auto">
            <div className=" rounded-md ">
              <h3>Cart</h3>
              <p>Totals: 1 198 000 $</p>
            </div>
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
