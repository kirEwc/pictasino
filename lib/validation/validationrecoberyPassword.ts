import { z } from 'zod'

export const validationRecoberyPassword = z.object({
  email: z
    .string()
    .email({ message: 'Email inválido.' })
    .trim()
});
