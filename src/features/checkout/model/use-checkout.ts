"use client";

import React from "react";
import { CheckoutFormData } from "./checkout-schema";

export const useCheckout = () => {
  const [error, setError] = React.useState<string | undefined>("");
  const [success, setSuccess] = React.useState<string | undefined>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleCheckout = async (values: CheckoutFormData) => {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      setSuccess("");
    } catch (err: any) {
      setLoading(false);
      setError(err?.message || "Unknown error!");
    }
  };
  return { handleCheckout, error, loading, success, setError };
};
