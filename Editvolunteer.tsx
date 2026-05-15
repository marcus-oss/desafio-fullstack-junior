import { useParams, useNavigate } from "react-router-dom";
import { useVolunteers } from "../../hooks/useVolunteers";
import { VolunteerForm } from "../../components/VolunteerForm";
import { updateVolunteer } from "../../services/volunteer.service";
import { toast } from "sonner";

export function EditVolunteer() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data } = useVolunteers();

  const volunteer = data?.find(
    (item: any) => item.id === Number(id)
  );

  async function handleUpdate(data: any) {
    try {
      await updateVolunteer(Number(id), data);

      toast.success("Atualizado");

      navigate("/");
    } catch {
      toast.error("Erro ao atualizar");
    }
  }

  if (!volunteer) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Editar voluntário
      </h1>

      <VolunteerForm
        defaultValues={volunteer}
        onSubmit={handleUpdate}
      />
    </div>
  );
}
