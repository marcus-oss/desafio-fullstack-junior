import { z } from "zod";

export const volunteerSchema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(8, "Telefone obrigatório"),
  cargo_pretendido: z.string().min(1, "Cargo obrigatório"),
  disponibilidade: z.string().min(1, "Disponibilidade obrigatória"),
  status: z.string(),
});

export type VolunteerSchema = z.infer<typeof volunteerSchema>;
