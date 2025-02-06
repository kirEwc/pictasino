import { z } from 'zod'

export const validationRegister = z
  .object({
    email: z
      .string()
      .email({ message: 'Email inválido.' })
      .trim(),
    password: z
      .string()
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/, {
        message: 'Contraseña inválida debe tener M,m, #,un caracter especial.',
      })
      .trim(),
    confirmPassword: z
      .string()
      .trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas no coinciden.',
  });

