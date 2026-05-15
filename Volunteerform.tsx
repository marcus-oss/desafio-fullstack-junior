import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  volunteerSchema,
  VolunteerSchema,
} from "../schemas/volunteer.schema";

import { Input } from "./Input";
import { Button } from "./Button";

interface Props {
  onSubmit: (data: VolunteerSchema) => void;
  defaultValues?: VolunteerSchema;
}

export function VolunteerForm({
  onSubmit,
  defaultValues,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VolunteerSchema>({
    resolver: zodResolver(volunteerSchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-xl flex flex-col gap-4"
    >
      <Input
        label="Nome"
        {...register("nome")}
        error={errors.nome?.message}
      />

      <Input
        label="Email"
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        label="Telefone"
        {...register("telefone")}
        error={errors.telefone?.message}
      />

      <Input
        label="Cargo"
        {...register("cargo_pretendido")}
        error={errors.cargo_pretendido?.message}
      />

      <div className="flex flex-col gap-1">
        <label>Disponibilidade</label>

        <select
          {...register("disponibilidade")}
          className="border rounded-lg px-3 py-2"
        >
          <option value="">Selecione</option>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label>Status</label>

        <select
          {...register("status")}
          className="border rounded-lg px-3 py-2"
        >
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>
      </div>

      <Button type="submit">
        Salvar
      </Button>
    </form>
  );
  }
