type Props = {
  error: string;
};
export const DisplayError = ({ error }: Props) => {
  return (
    <div className="flex justify-center items-center bg-color-white px-[6px] py-[1px] w-full h-10 rounded-md">
      <p className="text-xl text-center font-medium">{error}</p>
    </div>
  );
};
