"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "@/features";
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
import { RegisterFormData, RegisterSchema } from "../model/auth-schema";

export const RegisterForm = () => {
  const [register, { isLoading, error }] = useRegisterMutation();

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

  const handleSubmitFrom = async (values: RegisterFormData) => {
    try {
      const response = await register(values).unwrap();
      RegisterAccount.reset();
      console.log("успешная регистраци:", response);
      if (error) {
        console.log("Ошибка регистрации:", error);
      }
    } catch (err) {
      RegisterAccount.reset();
      console.error("Ошибка Регистрации:", err);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Form {...RegisterAccount}>
        <form
          className="w-[308px]"
          onSubmit={RegisterAccount.handleSubmit(handleSubmitFrom)}
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
                      disabled={isLoading}
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
                      disabled={isLoading}
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
                      disabled={isLoading}
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
          <Button
            className="font-medium text-base w-full px-2 mt-[36px]"
            type="submit"
            disabled={isLoading}
          >
            Create
          </Button>
        </form>
      </Form>
    </div>
  );
};
