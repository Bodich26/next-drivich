"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "@/features";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  cn,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from "@/shared";
import { LoginFormData, LoginSchema } from "../model/auth-schema";

export const LoginForm = () => {
  const [login, { isLoading, error }] = useLoginMutation();

  const loginAccount = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginErrorEmail = loginAccount.formState.errors.email;
  const loginErrorPassword = loginAccount.formState.errors.password;

  const handleSubmitFrom = async (values: LoginFormData) => {
    try {
      const response = await login(values).unwrap();

      if (response) {
        loginAccount.reset();
        console.log("Успешный вход:", response);
      }
      if (error) {
        console.log("Ошибка входа:", error);
      }
    } catch (err) {
      loginAccount.reset();
      console.error("Ошибка входа:", err);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Form {...loginAccount}>
        <form
          className="w-[308px]"
          onSubmit={loginAccount.handleSubmit(handleSubmitFrom)}
        >
          <h2 className="text-3xl font-bold mb-6">Login Form</h2>
          <div className="flex flex-col gap-[20px]">
            <FormField
              name="email"
              control={loginAccount.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "font-medium text-lg",
                      loginErrorEmail && "text-primary"
                    )}
                  >
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-black/15 h-[32px] bg-transparent "
                      placeholder="enter your email"
                      type="text"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  {loginErrorEmail && (
                    <p className="text-primary text-sm">
                      {loginErrorEmail.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={loginAccount.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "font-medium text-lg",
                      loginErrorPassword && "text-primary"
                    )}
                  >
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-black/15 h-[32px] bg-transparent "
                      placeholder="+6 characters"
                      type="password"
                      {...field}
                      disabled={isLoading}
                    />
                  </FormControl>
                  {loginErrorPassword && (
                    <p className="text-primary text-sm">
                      {loginErrorPassword.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={isLoading}
            className="font-medium text-base w-full px-2 mt-[36px]"
            type="submit"
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};
