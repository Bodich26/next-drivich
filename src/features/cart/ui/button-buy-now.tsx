import { Button, cn } from "@/shared";

type ButtonBuyNowProps = {
  className?: string;
  onClick?: () => void;
};
export const ButtonBuyNow = ({ className, onClick }: ButtonBuyNowProps) => {
  return (
    <Button
      size="sm"
      variant="secondary"
      onClick={onClick}
      className={cn(
        "font-medium text-base w-[128px] px-2 bg-transparent text-primary border-primary border-[2px]",
        className
      )}
    >
      Buy Now
    </Button>
  );
};
