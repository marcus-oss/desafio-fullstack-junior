import { useNavigate } from "react-router-dom";
import { VolunteerForm } from "../../components/VolunteerForm";
import { createVolunteer } from "../../services/volunteer.service";
import { toast } from "sonner";

export function CreateVolunteer() {
  const navigate = useNavigate();

  async function handleCreate(data: any) {
    try {
      await createVolunteer(data);

      toast.success("Voluntário criado");

      navigate("/");
    } catch (error: any) {
      if (error.response?.status === 409) {
        toast.error("Email já cadastrado");
        return;
      }

      toast.error("Erro ao cadastrar");
    }
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Novo voluntário
      </h1>

      <VolunteerForm
        onSubmit={handleCreate}
      />
    </div>
  );
}
