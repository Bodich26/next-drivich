type Props = {
  price: number | string;
};

export const PriceFormat = ({ price }: Props) => {
  return <>${price.toLocaleString("en-US")}</>;
};
