import { z } from "zod";

export const volunteerSchema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  email: z.email("Email inválido"),
  telefone: z.string().min(8),
  cargo_pretendido: z.string().min(1),
  disponibilidade: z.string().min(1),
});

const form = useForm({
  resolver: zodResolver(volunteerSchema),
});
// mensagem de sucess para usuário cadastrado 
toast.success("Voluntário cadastrado!");

// se o usuário já for cadastrado 
catch (error: any) {
  if (error.response?.status === 409) {
    toast.error("Email já cadastrado");
  }
}
