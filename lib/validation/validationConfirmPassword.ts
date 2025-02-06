import { z } from 'zod'

export const validationConfirmPassword = z
  .object({
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

