import type { Role } from "../types";

const API_URL = "http://localhost:3001/api/organization";

export const organizationRepo = {
  // Get all organization members from the back-end
  async getAll(): Promise<Role[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch organization members.");
    }

    return response.json();
  },

  // Add a new organization member through the back-end
  async create(person: Role): Promise<Role> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(person),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.errors?.firstName ||
        result.errors?.role ||
        result.errors?.general ||
        "Failed to create organization member."
      );
    }

    return result.person;
  },
};