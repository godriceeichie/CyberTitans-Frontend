import { z } from "zod";

export const reviewSchema = z.object({
    feedback: z.string().min(2, {message: "Message must have at least 2 characters"})
})