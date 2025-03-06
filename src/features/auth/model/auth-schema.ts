import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "A valid email address is required.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "A valid email address is required.",
  }),
  name: z.string().min(3, {
    message: "Name must be at least 3 characters long.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long.",
  }),
});

export type LoginFormData = z.infer<typeof LoginSchema>;
export type RegisterFormData = z.infer<typeof RegisterSchema>;
