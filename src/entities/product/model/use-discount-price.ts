export const useDiscountTotalPrice = (
  productPrice: number,
  productDiscount: number,
  productQuantity: number
) => {
  const getDiscountedPrice = (price: number, discount?: number) => {
    return discount ? price - (price * discount) / 100 : price;
  };

  const discountedPrice = getDiscountedPrice(productPrice, productDiscount);
  const totalPrice = discountedPrice * productQuantity;

  return { totalPrice };
};
