import { cn } from "../lib";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

export const Container = ({ children, className }: IProps) => {
  return (
    <div className={cn("max-w-[1310px] px-[15px] mx-auto", className)}>
      {children}
    </div>
  );
};
