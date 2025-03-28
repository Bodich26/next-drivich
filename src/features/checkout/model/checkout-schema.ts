import { z } from "zod";

export const CheckoutSchema = z.object({
  firstName: z.string().trim().min(3, {
    message: "Must be at least 3 characters long.",
  }),
  lastName: z.string().trim().min(3, {
    message: "Must be at least 3 characters long.",
  }),
  phoneNumber: z.string().trim().min(1, {
    message: "Enter a phone number.",
  }),
  country: z.string().trim().min(3, {
    message: "Enter your country.",
  }),
  city: z.string().trim().min(3, {
    message: "Enter your city.",
  }),
  address: z.string().trim().min(3, {
    message: "Enter a valid address.",
  }),
  payment: z.enum(["Сash", "Online"]),
});

export type CheckoutFormData = z.infer<typeof CheckoutSchema>;
