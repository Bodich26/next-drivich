"use client";

import React from "react";
import { CheckoutFormData } from "./checkout-schema";
import { useConfirmOrderMutation } from "../api/checkout-api";

export const useCheckout = () => {
  const [error, setError] = React.useState<string | undefined>("");
  const [success, setSuccess] = React.useState<string | undefined>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [confirmOrder] = useConfirmOrderMutation();

  const handleCheckout = async (values: CheckoutFormData) => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await confirmOrder(values).unwrap();
      if (response.success) {
        setSuccess(response.message);
        window.location.reload();
      } else {
        setLoading(false);
        setError(response.error);
      }
    } catch (err: unknown | string) {
      setLoading(false);
      setError(String((err as { message: string }).message));
    }
  };
  return { handleCheckout, error, loading, success, setError };
};
