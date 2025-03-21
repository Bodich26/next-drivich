import { useToast } from "./use-toast";

type ToastType = "add" | "remove" | "error" | "auth";
type EntityType = "favorites" | "cart";

export const useHandleToast = () => {
  const { toast } = useToast();

  const showToast = (type: ToastType, entity: EntityType, error?: unknown) => {
    const entityLabel = entity === "favorites" ? "favorite" : "cart item";

    if (type === "add") {
      toast({
        title: `Added to ${entity}`,
        description: `Successfully added ${entityLabel} ❤️`,
      });
    } else if (type === "remove") {
      toast({
        title: `Removed from ${entity}`,
        description: `Successfully removed ${entityLabel} ❌`,
      });
    } else if (type === "error") {
      toast({
        title: `Something went wrong with ${entity}`,
        description:
          String(error) || "Oops, something went wrong. Try again later",
        variant: "destructive",
      });
    } else if (type === "auth") {
      toast({
        title: "Authorization required",
        description: `Please log in to manage your ${entity}`,
        variant: "destructive",
      });
    }
  };

  return { showToast };
};
