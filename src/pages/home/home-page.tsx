"use client";

import { useGetProductsQuery } from "@/entities";
import { Container, SkeletonProduct } from "@/shared";
import { Footer, Header, ProductList } from "@/widgets";

export const HomePage = () => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();

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
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
