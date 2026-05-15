import { api } from "../api/axios";
import { Volunteer } from "../types/volunteer";

export async function getVolunteers() {
  const response = await api.get("/volunteers");
  return response.data;
}

export async function createVolunteer(data: Partial<Volunteer>) {
  const response = await api.post("/volunteers", data);
  return response.data;
}

export async function updateVolunteer(
  id: number,
  data: Partial<Volunteer>
) {
  const response = await api.put(`/volunteers/${id}`, data);
  return response.data;
}

export async function inactiveVolunteer(id: number) {
  const response = await api.patch(`/volunteers/${id}`, {
    status: "inativo",
  });

  return response.data;
}
