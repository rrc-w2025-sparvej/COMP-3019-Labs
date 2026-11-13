import { organizationRepository } from "../repositories/organizationRepository.js";
import type { Role } from "../types/Role.js";

type CreateRoleResult = {
  success: boolean;
  person?: Role;
  errors?: {
    firstName?: string;
    role?: string;
  };
};

export const organizationService = {
  // Retrieve all organization members
  getAll(): Role[] {
    return organizationRepository.getAll();
  },

  // Validate and create a new organization member
  createPerson(
    firstName: string,
    lastName: string,
    role: string
  ): CreateRoleResult {
    const errors: CreateRoleResult["errors"] = {};

    // First name must contain at least 3 characters
    if (firstName.trim().length < 3) {
      errors.firstName = "First name must have at least 3 characters.";
    }

    // Role cannot be empty
    if (!role.trim()) {
      errors.role = "Please enter a role.";
    }

    // Prevent assigning an occupied role
    const roleExists = organizationRepository
      .getAll()
      .some(
        (person) =>
          person.role.toLowerCase() === role.trim().toLowerCase()
      );

    if (roleExists) {
      errors.role = "This role is already occupied.";
    }

    // Return validation errors
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors
      };
    }

    // Save the new member
    const person = organizationRepository.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      role: role.trim()
    });

    return {
      success: true,
      person
    };
  }
};