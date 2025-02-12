import { ProductDate } from "@/entities";
import { Container } from "@/shared";
import { Footer, Header, ProductList } from "@/widgets";

export const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-1 overflow-hidden">
        <Container className="flex flex-1 flex-col">
          <section className="flex-1 overflow-y-auto">
            <ProductList products={ProductDate} variant="cart" />
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
