export const calculateDiscountPrice = (price: number, discount?: number) => {
  if (!discount || discount <= 0) {
    return price;
  }
  return price - (price * discount) / 100;
};
