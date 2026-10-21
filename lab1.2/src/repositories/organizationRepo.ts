import { organizationRoles } from "../data";
import type { Role } from "../types";

// Temporary organization data
let roles: Role[] = organizationRoles.map((person) => ({
  ...person,
}));

export const organizationRepo = {
  // Get all organization records
  getAll(): Role[] {
    return roles.map((person) => ({ ...person }));
  },

  // Add a new person
  create(person: Role): Role {
    const newPerson = { ...person };

    roles = [...roles, newPerson];

    return newPerson;
  },

  // Update a person's information
  update(oldRole: string, updatedPerson: Role): boolean {
    const index = roles.findIndex(
      (person) => person.role === oldRole
    );

    if (index === -1) {
      return false;
    }

    roles = roles.map((person, i) =>
      i === index ? { ...updatedPerson } : person
    );

    return true;
  },

  // Delete a person
  delete(role: string): boolean {
    const exists = roles.some(
      (person) => person.role === role
    );

    if (!exists) {
      return false;
    }

    roles = roles.filter(
      (person) => person.role !== role
    );

    return true;
  },
};