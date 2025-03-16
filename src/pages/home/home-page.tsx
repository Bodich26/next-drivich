"use client";

import { useGetProducts } from "@/entities/product/model/use-get-products";
import { Container, DisplayError, SkeletonProduct } from "@/shared";
import { Footer, Header, ProductList } from "@/widgets";

export const HomePage = () => {
  const { products, isLoading, error } = useGetProducts();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <Container className="flex flex-1 flex-col">
          <section className="flex flex-1 overflow-y-auto">
            {isLoading ? (
              <SkeletonProduct variant="catalog" />
            ) : (
              <ProductList products={products} variant="catalog" />
            )}
            {error && <DisplayError error="Failed loading product" />}
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
