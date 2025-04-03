import { OrderStatus } from "@prisma/client";

type UseOrdersStatusReturn = {
  colorStatus: string;
  orderStatus: OrderStatus;
};

export const useOrdersStatus = (
  orderStatus: OrderStatus
): UseOrdersStatusReturn => {
  let colorStatus = "";

  if (orderStatus === "COMPLETED") {
    colorStatus = "bg-[#1A8E0F]";
  } else if (orderStatus === "PENDING") {
    colorStatus = "bg-[#D5CF25]";
  } else if (orderStatus === "CANCELLED") {
    colorStatus = "bg-[#8E0F0F]";
  }

  return {
    colorStatus,
    orderStatus,
  };
};
