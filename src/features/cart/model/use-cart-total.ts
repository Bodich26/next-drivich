import { useGetCart } from "./use-get-cart";

export const useCartTotal = () => {
  const { products } = useGetCart();

  const totalPrice = products.reduce((sum, item) => {
    const discountedPrice = item.price * (1 - (item.discount || 0) / 100);
    return sum + discountedPrice * item.quantity!;
  }, 0);

  const totalPrices = totalPrice
    ? `$${totalPrice.toLocaleString("en-US")}`
    : "$0";

  return { totalPrices };
};
