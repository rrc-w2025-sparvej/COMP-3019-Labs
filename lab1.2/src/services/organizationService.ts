import { organizationRepo } from "../repositories/organizationRepo";
import type { Role } from "../types";

export type CreateRoleResult = {
  success: boolean;
  person?: Role;
  errors?: {
    firstName?: string;
    role?: string;
  };
};

export const organizationService = {
  // Get all organization records
  getAll(): Role[] {
    return organizationRepo.getAll();
  },

  // Check the information before adding a person
  createPerson(firstName: string, lastName: string, role: string): CreateRoleResult {
    const errors: CreateRoleResult["errors"] = {};

    // First name must have at least 3 characters
    if (firstName.trim().length < 3) {
      errors.firstName = "First name must have at least 3 characters.";
    }

    // Role cannot be empty
    if (role.trim() === "") {
      errors.role = "Please enter a role.";
    }

    // Check if someone already has this role
    const existingRoles = organizationRepo.getAll();

    const roleTaken = existingRoles.some(
      (person) =>
        person.role.trim().toLowerCase() === role.trim().toLowerCase()
    );

    if (roleTaken) {
      errors.role = "This role is already occupied.";
    }

    // Stop if there are validation errors
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
      };
    }

    // Add the person through the repository
    const newPerson = organizationRepo.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      role: role.trim(),
    });

    return {
      success: true,
      person: newPerson,
    };
  },
};