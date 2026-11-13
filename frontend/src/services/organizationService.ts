import { organizationRepo } from "../repositories/organizationRepo";
import type { Role } from "../types";

type CreateRoleResult = {
  success: boolean;
  person?: Role;
  errors?: {
    firstName?: string;
    role?: string;
  };
};

export const organizationService = {
  // Get organization members from the back-end
  async getAll(): Promise<Role[]> {
    return organizationRepo.getAll();
  },

  // Validate and create a new organization member
  async createPerson(
    firstName: string,
    lastName: string,
    role: string
  ): Promise<CreateRoleResult> {
    const errors: NonNullable<CreateRoleResult["errors"]> = {};

    if (firstName.trim().length < 3) {
      errors.firstName = "First name must have at least 3 characters.";
    }

    if (!role.trim()) {
      errors.role = "Please enter a role.";
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
      };
    }

    try {
      const person = await organizationRepo.create({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        role: role.trim(),
      });

      return {
        success: true,
        person,
      };
    } catch (error) {
      return {
        success: false,
        errors: {
          role:
            error instanceof Error
              ? error.message
              : "Unable to create organization member.",
        },
      };
    }
  },
};