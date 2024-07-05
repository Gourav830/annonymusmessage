import { z } from "zod";

export const acceptMessageSchema = z.object({
  acceptingMessage:z.boolean()
});
