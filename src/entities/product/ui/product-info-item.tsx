type Props = {
  label: string;
  value: string | number | null | undefined;
  text: string;
};
export const ProductInfoItem = ({ value, label, text }: Props) => {
  return (
    <dl className="flex items-center gap-2">
      <dt className="text-black-opacity75 text-base">{label}:</dt>
      <dd className="font-bold text-base">{`${value} ${text}`}</dd>
    </dl>
  );
};
