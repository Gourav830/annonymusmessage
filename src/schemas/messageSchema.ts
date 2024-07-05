import { z } from "zod";

export const messageSchema = z.object({
  content: z.string()
  .min(5,{message:"content must be at min 5"})
  .max(300,{message:"content no longer than 300 characters"})
});
