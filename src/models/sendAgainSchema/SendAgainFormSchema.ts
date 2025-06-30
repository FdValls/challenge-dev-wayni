import { z } from "zod";

export const SendAgainFormSchema = z.object({
    amount: z
        .string()
        .min(1, { message: "The 'amount' field cannot be empty" })
        .max(10, {
            message: "The 'amount' field cannot exceed 10 characters.",
        })
        .regex(/^[0-9]+$/, {
            message: "The 'amount' field must contain only positive numbers",
        }),
    valueTextArea: z
        .string()
        .max(255, {
            message: "The 'note' field cannot exceed 255 characters.",
        })
        .optional(),
});

export type SendAgainValidation = z.infer<typeof SendAgainFormSchema>;
