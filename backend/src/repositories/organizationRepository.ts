import { organizationRoles } from "../data/organizationData.js";
import type { Role } from "../types/Role.js";

// Temporary in-memory storage
let roles: Role[] = organizationRoles.map((person) => ({ ...person }));

export const organizationRepository = {
  // Get all organization members
  getAll(): Role[] {
    return roles.map((person) => ({ ...person }));
  },

  // Add a new organization member
  create(person: Role): Role {
    const newPerson = { ...person };
    roles.push(newPerson);
    return { ...newPerson };
  },

  // Update an existing organization member
  update(oldRole: string, updatedPerson: Role): boolean {
    const index = roles.findIndex(
      (person) => person.role === oldRole
    );

    if (index === -1) {
      return false;
    }

    roles[index] = { ...updatedPerson };
    return true;
  },

  // Delete an organization member
  delete(role: string): boolean {
    const index = roles.findIndex(
      (person) => person.role === role
    );

    if (index === -1) {
      return false;
    }

    roles.splice(index, 1);
    return true;
  }
};