type ConfirmOrderReq = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  city: string;
  address: string;
  payment: "Online" | "Сash";
};

type ConfirmOrderRes = {
  success: boolean;
  message?: string;
  error?: string;
  orderId?: number;
  totalPrice?: number;
};

export type { ConfirmOrderReq, ConfirmOrderRes };
