import { z } from 'zod'

export const validationLogin = z.object({
  email: z
    .string()
    .email({ message: 'Email inválido.' })
    .trim(),
  password: z
    .string()
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/, {
      message: 'Contraseña inválida.',
    })
    .trim(),
});
