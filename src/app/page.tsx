"use client";
import { useGetProducts } from "@/entities/product/model/use-get-products";
import { Filters, SortedProducts } from "@/features";
import { Container, SkeletonProduct } from "@/shared";
import { DisplayLoadingErrors, Footer, Header, ProductList } from "@/widgets";

export default function Home() {
  const {
    products,
    isLoading,
    error,
    setPriceRange,
    priceRange,
    setEngineTypes,
    setSearchModel,
    setPowerRanges,
    setSortOrder,
  } = useGetProducts();

  if (!products) return null;

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <Container className="flex-1 flex">
          <section className="flex justify-between gap-8 flex-1 overflow-hidden">
            <div className="min-h-0 overflow-y-auto">
              <Filters
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                setEngineTypes={setEngineTypes}
                setSearchText={setSearchModel}
                setPowerRanges={setPowerRanges}
              />
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto">
              <div className="flex justify-between mb-6 mt-2">
                <span>{products.length} result</span>
                <SortedProducts setSortOrder={setSortOrder} />
              </div>
              <div className=" min-h-0 overflow-y-auto">
                {isLoading ? (
                  <SkeletonProduct variant="catalog" />
                ) : (
                  <ProductList products={products} variant="catalog" />
                )}
                {error && (
                  <DisplayLoadingErrors entities="products" error={error} />
                )}
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
