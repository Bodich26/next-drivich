"use client";

import { CheckoutForm } from "@/features";
import { useCartTotal } from "@/features/cart/model/use-cart-total";
import { useGetCart } from "@/features/cart/model/use-get-cart";
import { Container, SkeletonProduct } from "@/shared";
import { DisplayLoadingErrors, Footer, Header, ProductList } from "@/widgets";

export const CartPage = () => {
  const { products, isLoading, error } = useGetCart();
  const { totalPrices } = useCartTotal();

  if (!products) return null;

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <Container className="flex-1 flex">
          <section className="flex justify-between gap-8 flex-1 overflow-hidden">
            <div className="min-h-0 overflow-y-auto">
              <CheckoutForm />
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="rounded-md p-[12px] bg-color-white flex justify-between text-2xl font-bold mb-6">
                <h2>Cart</h2>
                <h3>Total Amount: {totalPrices}</h3>
              </div>
              <div className=" min-h-0 overflow-y-auto">
                {isLoading ? (
                  <SkeletonProduct variant="cart" />
                ) : error ? (
                  <DisplayLoadingErrors entities="cart" error={error} />
                ) : (
                  <ProductList products={products} variant="cart" />
                )}
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
