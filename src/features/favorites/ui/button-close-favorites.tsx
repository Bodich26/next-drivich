import { Button, cn } from "@/shared";

interface ButtonCloseFavoritesProps {
  className?: string;
  onClick?: () => void;
}

export const ButtonCloseFavorites = ({
  className,
  onClick,
}: ButtonCloseFavoritesProps) => {
  return (
    <Button
      className={cn("font-medium text-base w-full", className)}
      size="sm"
      onClick={onClick}
    >
      Close Favorites
    </Button>
  );
};
