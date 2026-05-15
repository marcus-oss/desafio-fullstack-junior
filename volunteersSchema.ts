import { z } from "zod";

export const volunteerSchema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  email: z.email("Email inválido"),
  telefone: z.string().min(8),
  cargo_pretendido: z.string().min(1),
  disponibilidade: z.string().min(1),
});
