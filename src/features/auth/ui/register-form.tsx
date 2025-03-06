"use client";

import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from "@/shared";

export const RegisterForm = () => {
  const RegisterAccount = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex justify-center items-center">
      <Form {...RegisterAccount}>
        <form className="w-[308px]" onSubmit={RegisterAccount}>
          <h2 className="text-3xl font-bold mb-6">Register Form</h2>
          <div className="flex flex-col gap-[20px]">
            <FormField
              name="email"
              control={RegisterAccount.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-lg">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-black/15 h-[32px] bg-transparent "
                      placeholder="enter your email"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={RegisterAccount.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-lg">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-black/15 h-[32px] bg-transparent "
                      placeholder="+6 characters"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={RegisterAccount.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-lg">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-black/15 h-[32px] bg-transparent "
                      placeholder="+6 characters"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button
            className="font-medium text-base w-full px-2 mt-[36px]"
            type="submit"
          >
            Create
          </Button>
        </form>
      </Form>
    </div>
  );
};
