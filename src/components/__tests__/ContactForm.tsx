import { act, render } from "@testing-library/react";
import React from "react";
import ContactForm from "../Contact-form";
import userEvent from "@testing-library/user-event";

test("is should render the name, email and message input and validate them", async () => {
  const { findByLabelText, findByText, findByRole } = render(<ContactForm />);
  const inputName = await findByLabelText("Naam");
  act(() => {
    userEvent.type(inputName, "b");
  });
  const email = await findByLabelText("E-mail");
  act(() => {
    email.focus();
  });
  const nameError = await findByText(/dit is een verplicht veld/i);
  expect(nameError).toBeInTheDocument();
  act(() => {
    userEvent.type(email, "afgsdfg");
  });
  const message = await findByLabelText("Bericht");
  act(() => {
    message.focus();
  });
  const emailError = await findByText(/ongeldige e-mailadres/i);
  expect(emailError).toBeInTheDocument();
  act(() => {
    userEvent.type(message, "sdf");
  });
  const submitButton = await findByRole("button", {
    name: /verstuur >/i,
  });
  act(() => {
    submitButton.focus();
  });
  const messageError = await findByText(/het bericht is te kort of te lang/i);
  expect(messageError).toBeInTheDocument();
});

it("should have a data-netlify=true attribute and a hidden input", () => {
  const { getByRole, getByDisplayValue } = render(<ContactForm />);
  const form = getByRole("form");
  expect(form.getAttribute("data-netlify")).toBe("true");
  expect(form.getAttribute("method")).toBe("POST");
  expect(form.getAttribute("action")).toBe("/succes");

  const formName = form.getAttribute("name");
  const hiddenInput = getByDisplayValue(formName!);
  expect(hiddenInput.getAttribute("type")).toBe("hidden");
  expect(hiddenInput.getAttribute("name")).toBe("form-name");
});
