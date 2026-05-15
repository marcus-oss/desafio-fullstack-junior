import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { VolunteerForm } from "../components/VolunteerForm";

describe("VolunteerForm", () => {
  test("deve criar voluntário com dados válidos", async () => {
    const onSubmit = vi.fn();

    render(
      <VolunteerForm
        onSubmit={onSubmit}
      />
    );

    await userEvent.type(
      screen.getByLabelText(/nome/i),
      "João"
    );

    await userEvent.type(
      screen.getByLabelText(/email/i),
      "joao@email.com"
    );

    await userEvent.type(
      screen.getByLabelText(/telefone/i),
      "44999999999"
    );

    await userEvent.type(
      screen.getByLabelText(/cargo/i),
      "Designer"
    );

    await userEvent.selectOptions(
      screen.getByRole("combobox", {
        name: /disponibilidade/i,
      }),
      "manha"
    );

    await userEvent.click(
      screen.getByRole("button", {
        name: /salvar/i,
      })
    );

    expect(onSubmit).toHaveBeenCalled();
  });
});
