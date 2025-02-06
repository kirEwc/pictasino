import { z } from 'zod';

// Definición del esquema de validación para añadir un ticket
export const validationAddTicket = z.object({
    nameAirline: z.string().min(1, {
        message: "Elija una aerolínea"
    }),
    origin: z.string().min(1, {
        message: "El origen no puede estar vacío"
    }),
    destination: z.string().min(1, {
        message: "El destino no puede estar vacío"
    }),
    selectedDates: z.array(z.unknown()).nonempty({
        message: "Seleccione al menos una fecha", // Asegúrate de que el arreglo no esté vacío
    }),
    price: z.array(  z.object({
        value: z.number().min(1, {
          message: "Debe llenar todos los campos de precio"
        })
      })
    ).refine((prices) => prices.length === 4, {
      message: "Debe haber exactamente cuatro precios, uno por cada moneda"
    })
});


