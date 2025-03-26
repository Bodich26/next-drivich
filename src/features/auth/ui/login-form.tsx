"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  cn,
  ErrorForm,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  LoaderLine,
  SuccessForm,
} from "@/shared";
import { LoginFormData, LoginSchema } from "../model/auth-schema";
import { useLogin } from "../model/use-login";

type IProps = {
  setActive: () => void;
};

export const LoginForm = ({ setActive }: IProps) => {
  const { success, error, loading, handleLogin, setError } = useLogin();
  const loginAccount = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginErrorEmail = loginAccount.formState.errors.email;
  const loginErrorPassword = loginAccount.formState.errors.password;

  return (
    <div className="flex justify-center items-center">
      <Form {...loginAccount}>
        <form
          className="w-[308px]"
          onSubmit={loginAccount.handleSubmit(handleLogin)}
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
                      disabled={loading}
                      onClick={() => setError("")}
                    />
                  </FormControl>
                  <FormMessage className="text-primary text-sm" />
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
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage className="text-primary text-sm" />
                </FormItem>
              )}
            />
          </div>
          {loading && <LoaderLine />}
          <ErrorForm message={error} />
          <SuccessForm message={success} />
          <Button
            disabled={loading}
            className="font-medium text-base w-full px-2 mt-[22px]"
            type="submit"
          >
            Login
          </Button>
          <Button
            type="button"
            disabled={loading}
            onClick={setActive}
            variant="link"
            className="h-[24px] mt-1"
          >
            Create account
          </Button>
        </form>
      </Form>
    </div>
  );
};
