import { TriangleAlert } from "lucide-react";

type Props = {
  message?: string;
};
export const ErrorForm = ({ message }: Props) => {
  if (!message) {
    return null;
  }

  return (
    <div className="pt-1 rounded-lg flex  items-center gap-x-2 text-sm text-primary">
      <TriangleAlert className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
