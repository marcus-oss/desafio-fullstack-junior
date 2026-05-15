import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Volunteers } from "../pages/Volunteers";
import { CreateVolunteer } from "../pages/CreateVolunteer";
import { EditVolunteer } from "../pages/EditVolunteer";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Volunteers />}
        />

        <Route
          path="/novo"
          element={<CreateVolunteer />}
        />

        <Route
          path="/editar/:id"
          element={<EditVolunteer />}
        />
      </Routes>
    </BrowserRouter>
  );
        }
