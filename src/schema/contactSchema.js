import { z } from "zod";

export const contactSchema = z.object({
    name: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long" }),
    email: z.string().email({message: "Invalid email"}),
    subject: z.string().optional(),
    description: z.string()
})