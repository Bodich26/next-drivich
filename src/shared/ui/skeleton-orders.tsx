import { Skeleton } from "./skeleton";

export const SkeletonOrders = () => {
  return (
    <div className="flex-1 min-h-0 overflow-y-auto ">
      <div className="flex flex-wrap gap-4 p-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton key={index} className="w-full p-4 h-[65px]" />
        ))}
      </div>
    </div>
  );
};
