import type { FormEvent } from "react";
import { useFormInput } from "./useFormInput";
import { organizationService } from "../services/organizationService";

export function useOrganizationForm(onPersonAdded: () => void) {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const role = useFormInput("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check the first name
    const firstNameValid = firstName.validate((value) =>
      value.trim().length >= 3
        ? ""
        : "First name must have at least 3 characters."
    );

    // Check that a role was entered
    const roleValid = role.validate((value) =>
      value.trim() !== ""
        ? ""
        : "Please enter a role."
    );

    if (!firstNameValid || !roleValid) {
      return;
    }

    // Ask the service to create the person
    const result = organizationService.createPerson(
      firstName.value,
      lastName.value,
      role.value
    );

    // Show errors returned by the service
    if (!result.success) {
      firstName.setMessage(result.errors?.firstName ?? "");
      role.setMessage(result.errors?.role ?? "");
      return;
    }

    // Clear the inputs after adding a person
    firstName.reset();
    lastName.reset();
    role.reset();

    // Update the Organization page
    onPersonAdded();
  };

  return {
    firstName,
    lastName,
    role,
    handleSubmit,
  };
}