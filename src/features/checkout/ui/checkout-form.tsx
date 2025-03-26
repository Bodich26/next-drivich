"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import { CheckoutFormData, CheckoutSchema } from "../model/checkout-schema";
import {
  Button,
  cn,
  DecorLine,
  ErrorForm,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
      phoneNumber: "",
      country: "",
      city: "",
      address: "",
      payment: "",
    },
  });

  const CheckoutErrorFirstName = checkoutForm.formState.errors.firstName;
  const CheckoutErrorLastName = checkoutForm.formState.errors.lastName;
  const CheckoutErrorPhoneNumber = checkoutForm.formState.errors.phoneNumber;
  const CheckoutErrorCity = checkoutForm.formState.errors.city;
  const CheckoutErrorCountry = checkoutForm.formState.errors.country;
  const CheckoutErrorAddress = checkoutForm.formState.errors.address;
  const CheckoutErrorPayment = checkoutForm.formState.errors.payment;

  return (
    <Form {...checkoutForm}>
      <form
        onSubmit={checkoutForm.handleSubmit(handleCheckout)}
        className="bg-color-white rounded-md p-4 max-w-[350px] "
      >
        <h1 className="text-2xl font-bold mb-6">Order Checkout</h1>
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-6">
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
                  <FormMessage className="text-primary text-sm" />
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
                  <FormMessage className="text-primary text-sm" />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              name="phoneNumber"
              control={checkoutForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "font-medium text-lg",
                      CheckoutErrorPhoneNumber && "text-primary"
                    )}
                  >
                    Phone number
                  </FormLabel>
                  <FormControl>
                    <PhoneInput
                      country={"us"}
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                      inputClass="ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-primary text-sm" />
                </FormItem>
              )}
            />
          </div>
          <DecorLine />
          <h3 className="text-2xl font-bold">Delivery Address</h3>
          <div className="flex gap-6">
            <FormField
              name="country"
              control={checkoutForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "font-medium text-lg",
                      CheckoutErrorCountry && "text-primary"
                    )}
                  >
                    Country
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-black/15 h-[32px] bg-transparent "
                      placeholder="your country"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-primary text-sm" />
                </FormItem>
              )}
            />
            <FormField
              name="city"
              control={checkoutForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "font-medium text-lg",
                      CheckoutErrorCity && "text-primary"
                    )}
                  >
                    City
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-black/15 h-[32px] bg-transparent "
                      placeholder="your city"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-primary text-sm" />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              name="address"
              control={checkoutForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "font-medium text-lg",
                      CheckoutErrorAddress && "text-primary"
                    )}
                  >
                    Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border border-black/15 h-[32px] bg-transparent w-full"
                      placeholder="7638 Town Cove Suite 924"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-primary text-sm" />
                </FormItem>
              )}
            />
          </div>
          <DecorLine />
          <h3 className="text-2xl font-bold">Payment</h3>
          <div>
            <FormField
              name="payment"
              control={checkoutForm.control}
              render={() => (
                <FormItem>
                  <FormLabel
                    className={cn(
                      "font-medium text-lg",
                      CheckoutErrorPayment && "text-primary"
                    )}
                  >
                    Select payment method
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full h-[32px] bg-color-white border border-black/15">
                        <SelectValue placeholder="payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Сash">Сash</SelectItem>
                        <SelectItem value="Online">Online</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="text-primary text-sm" />
                </FormItem>
              )}
            />
          </div>
          <DecorLine />
        </div>
        <ErrorForm message={error} />
        <SuccessForm message={success} />
        <Button
          className="font-medium text-base w-full px-2 mt-[4px]"
          type="submit"
        >
          Confirm the Order
        </Button>
      </form>
    </Form>
  );
};
