import { z } from "zod";

export const CheckoutSchema = z.object({
  firstName: z.string().trim().min(3, {
    message: "First Name must be at least 3 characters long.",
  }),
  lastName: z.string().trim().min(3, {
    message: "Last Name must be at least 3 characters long.",
  }),
  phoneNumber: z.string().trim().min(1, {
    message: "Please enter a phone number.",
  }),
  country: z.string().trim().min(3, {
    message: "Please enter your country.",
  }),
  city: z.string().trim().min(3, {
    message: "Please enter your city.",
  }),
  address: z.string().trim().min(3, {
    message: "Please enter a valid address.",
  }),
  payment: z.enum(["Сash", "Online", ""]),
});

export type CheckoutFormData = z.infer<typeof CheckoutSchema>;
