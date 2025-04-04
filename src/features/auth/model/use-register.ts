"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { RegisterFormData } from "./auth-schema";
import { useRegisterMutation } from "../api/auth-api";

export const useRegister = () => {
  const [error, setError] = React.useState<string | undefined>("");
  const [success, setSuccess] = React.useState<string | undefined>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [register] = useRegisterMutation();

  const handleRegister = async (values: RegisterFormData) => {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const response = await register(values).unwrap();
      if (response.success) {
        await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: true,
        });
        setSuccess(response.message);
      } else {
        setLoading(false);
        setError(response.error);
      }
    } catch (err: unknown | string) {
      setLoading(false);
      setError(String((err as { message: string }).message));
    }
  };
  return { error, success, loading, handleRegister, setError };
};
