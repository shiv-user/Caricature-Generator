import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(4, "Username must be atleast 4 characters")
  .max(20, "Username must be no more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username cannot contain speacial character");

export const signUpSchemaValidation = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email Address" }),
  password: z
    .string()
    .min(6, { message: "password must be atleast 6 characters" }),
});
