import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

test("não deve permitir email duplicado", async () => {
  const mockSubmit = vi.fn().mockRejectedValue({
    response: {
      status: 409,
    },
  });

  render(
    <button
      onClick={() => mockSubmit()}
    >
      Salvar
    </button>
  );

  await userEvent.click(
    screen.getByText(/salvar/i)
  );

  expect(mockSubmit).rejects.toMatchObject({
    response: {
      status: 409,
    },
  });
});
