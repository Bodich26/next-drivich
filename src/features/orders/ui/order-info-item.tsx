type Props = {
  label: string;
  value: string | null | undefined;
};
export const OrderInfoItem = ({ label, value }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <dt className="text-base font-medium">{label}:</dt>
      <dd className="text-base text-black-opacity75">{value}</dd>
    </div>
  );
};
