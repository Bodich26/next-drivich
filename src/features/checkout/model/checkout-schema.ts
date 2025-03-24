import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const CheckoutSchema = z
  .object({
    firstName: z.string().trim().min(3, {
      message: "First Name must be at least 3 characters long.",
    }),
    lastName: z.string().trim().min(3, {
      message: "Last Name must be at least 3 characters long.",
    }),
    countryCode: z.string().trim().min(1, {
      message: "Please select a country code.",
    }),
    phoneNumber: z.string().trim(),
    country: z.string().trim().min(3, {
      message: "Please enter a valid country name.",
    }),
    city: z.string().trim().min(3, {
      message: "Please enter a valid city name.",
    }),
    address: z.string().trim().min(3, {
      message: "Please enter a valid address.",
    }),
    payment: z.enum(["Сash", "Online"]),
  })
  .superRefine(({ countryCode, phoneNumber }, ctx) => {
    const fullNumber = countryCode + phoneNumber;
    const parsedPhone = parsePhoneNumberFromString(fullNumber);

    if (!parsedPhone || !parsedPhone.isValid()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phoneNumber"],
        message: "Invalid phone number.",
      });
    }
  });

export type CheckoutFormData = z.infer<typeof CheckoutSchema>;
