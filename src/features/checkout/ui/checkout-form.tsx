"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckoutFormData, CheckoutSchema } from "../model/checkout-schema";
import {
  Button,
  cn,
  ErrorForm,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  LoaderLine,
  SuccessForm,
} from "@/shared";
import { useCheckout } from "../model/use-checkout";

export const CheckoutForm = () => {
  const { success, error, loading, handleCheckout, setError } = useCheckout();
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      countryCode: "",
      phoneNumber: "",
      country: "",
      city: "",
      address: "",
      payment: "Online",
    },
  });

  const CheckoutErrorFirstName = checkoutForm.formState.errors.firstName;
  const CheckoutErrorLastName = checkoutForm.formState.errors.lastName;

  return (
    <div>
      <Form {...checkoutForm}>
        <form onSubmit={checkoutForm.handleSubmit(handleCheckout)}>
          <h1 className="text-3xl font-bold mb-6">Order Checkout</h1>
          <div className="flex flex-col gap-[20px]">
            <FormField
              name="firstName"
              control={checkoutForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "font-medium text-lg",
                      CheckoutErrorFirstName && "text-primary"
                    )}
                  >
                    First name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-black/15 h-[32px] bg-transparent "
                      placeholder="your first name"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  {CheckoutErrorFirstName && (
                    <p className="text-primary text-sm">
                      {CheckoutErrorFirstName.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
            <FormField
              name="lastName"
              control={checkoutForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "font-medium text-lg",
                      CheckoutErrorLastName && "text-primary"
                    )}
                  >
                    Last name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-black/15 h-[32px] bg-transparent "
                      placeholder="your last name"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  {CheckoutErrorLastName && (
                    <p className="text-primary text-sm">
                      {CheckoutErrorLastName.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>
          <ErrorForm message={error} />
          <SuccessForm message={success} />
          <Button
            className="font-medium text-base w-full px-2 mt-[22px]"
            type="submit"
          >
            Confirm the Order
          </Button>
        </form>
      </Form>
    </div>
  );
};
