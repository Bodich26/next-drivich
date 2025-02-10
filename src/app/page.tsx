import { ProductDate } from "@/entities";
import { Container } from "@/shared";
import { Footer, Header, ProductList } from "@/widgets";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <ProductList products={ProductDate} variant="cart" />
      </Container>
      <Footer />
    </>
  );
}
