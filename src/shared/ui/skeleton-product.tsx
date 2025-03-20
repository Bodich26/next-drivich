import { cn } from "../lib";
import { Skeleton } from "./skeleton";

type Props = {
  variant: "catalog" | "favorites" | "cart";
  className?: string;
};
export const SkeletonProduct = ({ variant, className }: Props) => {
  return (
    <div className={cn("flex-1 overflow-y-auto", className)}>
      <div className="flex flex-wrap gap-6">
        {Array.from({ length: 6 }).map((_, index) => {
          if (variant === "catalog") {
            return (
              <div className="max-w-[300px] relative" key={index}>
                <Skeleton className="w-[300px] h-[148px] rounded-t-md rounded-b-[0px]" />
                <div className="pt-2 pb-4 pr-4 pl-4 bg-color-white rounded-b-md">
                  <Skeleton className="w-full h-[32px] rounded-t-md mb-[18px] mt-[3px]" />
                  <div className="flex flex-col gap-3">
                    {Array.from({ length: 4 }).map((_, index) => {
                      return (
                        <Skeleton
                          key={index}
                          className="w-full h-[18px] rounded-t-md"
                        />
                      );
                    })}
                  </div>
                  <div className="flex items-end justify-between mt-4 gap-[30px]">
                    <Skeleton className="w-[180px] h-[37px] rounded-t-md" />
                    <Skeleton className="w-[160px] h-[27px] rounded-t-md" />
                  </div>
                </div>
              </div>
            );
          }
          if (variant === "favorites") {
            return (
              <div className="w-[245px]" key={index}>
                <Skeleton className="w-[245px] h-[130px] rounded-t-md rounded-b-[0px] bg-color-white" />
                <div className=" pt-2 pb-4 pr-4 pl-4 bg-color-minimal-light-white rounded-b-md">
                  <Skeleton className="w-full h-[32px] rounded-t-md mb-[18px] mt-[3px] bg-color-white" />
                  <div className="flex flex-row justify-between mt-[8px]">
                    <div className="flex justify-between gap-3">
                      <Skeleton className="w-[44px] h-[22px] rounded-t-md bg-color-white" />
                      <Skeleton className="w-[100px] h-[22px] rounded-t-md bg-color-white" />
                    </div>
                    <Skeleton className="w-[22px] h-[22px] rounded-t-md bg-color-white" />
                  </div>
                </div>
              </div>
            );
          }
          if (variant === "cart") {
            return (
              <div className="w-full" key={index}>
                <div className="w-full flex justify-between p-[12px] bg-color-minimal-light-white rounded-md">
                  <div className="flex justify-between items-start flex-col gap-7">
                    <Skeleton className="w-[35px] h-[19px] rounded-t-md bg-color-white" />
                    <Skeleton className="w-[210px] h-[30px] rounded-t-md bg-color-white mb-[19px]" />
                  </div>
                  <div className="flex gap-6 basis-[65%] justify-end items-center">
                    <div className="flex justify-between items-start flex-col gap-7">
                      <Skeleton className="w-[65px] h-[19px] rounded-t-md bg-color-white" />
                      <Skeleton className="w-[120px] h-[30px] rounded-t-md bg-color-white mb-[19px]" />
                    </div>
                    <div className="flex justify-between items-start flex-col gap-7">
                      <Skeleton className="w-[65px] h-[19px] rounded-t-md bg-color-white" />
                      <Skeleton className="w-[120px] h-[30px] rounded-t-md bg-color-white mb-[19px]" />
                    </div>
                    <div className="flex justify-between items-start flex-col gap-7">
                      <Skeleton className="w-[100px] h-[19px] rounded-t-md bg-color-white" />
                      <Skeleton className="w-[115px] h-[30px] rounded-t-md bg-color-white mb-[19px]" />
                    </div>
                    <div className="flex justify-between items-start flex-col gap-7">
                      <Skeleton className="w-[60px] h-[19px] rounded-t-md bg-color-white" />
                      <Skeleton className="w-[40px] h-[30px] rounded-t-md bg-color-white mb-[19px]" />
                    </div>
                  </div>
                  <div>
                    <Skeleton className="w-[175px] h-[82px] rounded-t-md bg-color-white" />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
