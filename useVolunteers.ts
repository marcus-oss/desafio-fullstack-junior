import { useQuery } from "@tanstack/react-query";
import { getVolunteers } from "../services/volunteer.service";

export function useVolunteers() {
  return useQuery({
    queryKey: ["volunteers"],
    queryFn: getVolunteers,
  });
}
