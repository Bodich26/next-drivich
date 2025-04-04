"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { LoginFormData } from "./auth-schema";
import { useLoginMutation } from "../api/auth-api";

export const useLogin = () => {
  const [error, setError] = React.useState<string | undefined>("");
  const [success, setSuccess] = React.useState<string | undefined>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [login] = useLoginMutation();

  const handleLogin = async (values: LoginFormData) => {
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const response = await login(values).unwrap();
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
  return { handleLogin, error, loading, success, setError };
};
