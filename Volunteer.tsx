import { useNavigate } from "react-router-dom";
import { useVolunteers } from "../../hooks/useVolunteers";
import { Button } from "../../components/Button";
import {
  inactiveVolunteer,
} from "../../services/volunteer.service";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

export function Volunteers() {
  const { data, isLoading, isError } = useVolunteers();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  async function handleInactive(id: number) {
    try {
      await inactiveVolunteer(id);

      toast.success("Voluntário inativado");

      queryClient.invalidateQueries({
        queryKey: ["volunteers"],
      });
    } catch {
      toast.error("Erro ao inativar");
    }
  }

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError) {
    return <p>Erro ao carregar voluntários</p>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">
          Voluntários
        </h1>

        <Button
          onClick={() => navigate("/novo")}
        >
          Novo voluntário
        </Button>
      </div>

      {data.length === 0 && (
        <div className="bg-white p-10 rounded-xl text-center">
          Nenhum voluntário encontrado
        </div>
      )}

      {data.length > 0 && (
        <div className="bg-white rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Cargo</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>

            <tbody>
              {data.map((volunteer: any) => (
                <tr
                  key={volunteer.id}
                  className="border-t"
                >
                  <td className="p-3">
                    {volunteer.nome}
                  </td>

                  <td>{volunteer.email}</td>

                  <td>{volunteer.telefone}</td>

                  <td>
                    {volunteer.cargo_pretendido}
                  </td>

                  <td>
                    {volunteer.status}
                  </td>

                  <td className="flex gap-2 p-3">
                    <Button
                      onClick={() =>
                        navigate(
                          `/editar/${volunteer.id}`
                        )
                      }
                    >
                      Editar
                    </Button>

                    <Button
                      onClick={() =>
                        handleInactive(
                          volunteer.id
                        )
                      }
                    >
                      Inativar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
    }
