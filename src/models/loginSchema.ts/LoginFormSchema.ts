import { z } from "zod";

export const LoginFormSchema = z.object({
    username: z
        .string()
        .min(1, { message: "The 'code' field cannot be empty" })
        .max(255, {
            message: "The 'code' field cannot exceed 255 characters",
        })
        .regex(/^[a-zA-Z0-9]+$/, {
            message: "The 'code' field contains invalid characters",
        }),
    password: z
        .string()
        .min(1, { message: "The 'name' field cannot be empty" })
        .max(255, {
            message: "The 'name' field cannot exceed 255 characters.",
        })
        .regex(/^[a-zA-Z0-9]+$/, {
            message: "The 'name' field contains invalid characters",
        }),
});

export type CreateLogin = z.infer<typeof LoginFormSchema>;
