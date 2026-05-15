import { api } from "../api/axios";

export async function getVolunteers() {
  const response = await api.get("/volunteers");
  return response.data;
}
