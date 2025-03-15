"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorForm, SuccessForm } from "@/features";
import {
  Button,
  cn,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  LoaderLine,
} from "@/shared";
import { RegisterFormData, RegisterSchema } from "../model/auth-schema";
import { useRegister } from "../model/use-register";

type IProps = {
  setActive: () => void;
};

export const RegisterForm = ({ setActive }: IProps) => {
  const { success, setError, error, loading, handleRegister } = useRegister();
  const RegisterAccount = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      firstName: "",
      password: "",
    },
  });

  const RegisterErrorEmail = RegisterAccount.formState.errors.email;
  const RegisterErrorFirstName = RegisterAccount.formState.errors.firstName;
  const RegisterErrorPassword = RegisterAccount.formState.errors.password;

  return (
    <div className="flex justify-center items-center">
      <Form {...RegisterAccount}>
        <form
          className="w-[308px]"
          onSubmit={RegisterAccount.handleSubmit(handleRegister)}
        >
          <h2 className="text-3xl font-bold mb-6">Register Form</h2>
          <div className="flex flex-col gap-[20px]">
            <FormField
              name="email"
              control={RegisterAccount.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "font-medium text-lg",
                      RegisterErrorEmail && "text-primary"
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
                      onClick={() => setError("")}
                      disabled={loading}
                    />
                  </FormControl>
                  {RegisterErrorEmail && (
                    <p className="text-primary text-sm">
                      {RegisterErrorEmail.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              name="firstName"
              control={RegisterAccount.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "font-medium text-lg",
                      RegisterErrorFirstName && "text-primary"
                    )}
                  >
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-black/15 h-[32px] bg-transparent "
                      placeholder="enter your first name"
                      type="text"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                  {RegisterErrorFirstName && (
                    <p className="text-primary text-sm">
                      {RegisterErrorFirstName.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={RegisterAccount.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "font-medium text-lg",
                      RegisterErrorPassword && "text-primary"
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
                  {RegisterErrorPassword && (
                    <p className="text-primary text-sm">
                      {RegisterErrorPassword.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>
          {loading && <LoaderLine />}
          <ErrorForm message={error} />
          <SuccessForm message={success} />
          <Button
            className="font-medium text-base w-full px-2 mt-[22px]"
            type="submit"
            disabled={loading}
          >
            Create
          </Button>
          <Button
            type="button"
            disabled={loading}
            onClick={setActive}
            variant="link"
            className="h-[24px] mt-1"
          >
            Login account
          </Button>
        </form>
      </Form>
    </div>
  );
};
