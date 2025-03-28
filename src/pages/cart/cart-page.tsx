"use client";

import { CheckoutForm } from "@/features";
import { useCartTotal } from "@/features/cart/model/use-cart-total";
import { useGetCart } from "@/features/cart/model/use-get-cart";
import { Container, SkeletonProduct } from "@/shared";
import { Footer, Header, ProductList } from "@/widgets";

export const CartPage = () => {
  const { products, isLoading, error } = useGetCart();
  const { totalPrices } = useCartTotal();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <Container className="flex-1 flex">
          <section className="flex justify-between gap-8 flex-1 overflow-hidden">
            {/* Блок с формой */}
            <div className="min-h-0 overflow-y-auto">
              <CheckoutForm />
            </div>

            {/* Блок с корзиной */}
            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="rounded-md p-[12px] bg-color-white flex justify-between text-2xl font-bold mb-6">
                <h2>Cart</h2>
                <h3>Total Amount: {totalPrices}</h3>
              </div>
              <div className=" min-h-0 overflow-y-auto">
                {isLoading ? (
                  <SkeletonProduct variant="cart" />
                ) : (
                  <ProductList
                    products={products}
                    variant="cart"
                    loadingError={error}
                  />
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
