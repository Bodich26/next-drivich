import { Skeleton } from "./skeleton";

export const SkeletonProductPage = () => {
  return (
    <div className="flex justify-between gap-8">
      <div className="flex flex-col gap-6 justify-between p-4 rounded-md basis-[70%] relative product-gradient">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-[330px] h-9 rounded-md" />
          <div className="flex flex-row justify-start gap-3 items-start mt-2">
            <Skeleton className="w-[200px] h-8 rounded-md" />
          </div>
        </div>
        <Skeleton className="w-[841px] h-[433px] rounded-md" />
        <div className="flex justify-between gap-28 items-end">
          <Skeleton className="w-full h-[100px] rounded-md" />
          <Skeleton className=" w-[420px] h-[130px] rounded-md" />
        </div>
      </div>
      <div className="rounded-md p-4 bg-color-white basis-[30%] ">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col justify-between items-start gap-6">
            <div className="flex flex-col gap-6">
              <Skeleton className="w-[342px] h-[72px] rounded-md" />
              <Skeleton className="w-[342px] h-[110px] rounded-md" />
            </div>
            <div className="flex flex-col gap-6">
              <Skeleton className="w-[342px] h-[241px] rounded-md" />
              <Skeleton className="w-[342px] h-[140px] rounded-md" />
            </div>
            <div className="flex justify-between flex-row w-full">
              <Skeleton className="w-[150px] h-[37px] rounded-md" />
              <Skeleton className="w-[150px] h-[37px] rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
