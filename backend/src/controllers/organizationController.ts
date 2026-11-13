import type { Request, Response } from "express";
import { organizationService } from "../services/organizationService.js";

export const organizationController = {
  // GET: Retrieve all organization members
  getAll(_req: Request, res: Response): void {
    const people = organizationService.getAll();

    res.status(200).json(people);
  },

  // POST: Add a new organization member
  create(req: Request, res: Response): void {
    const { firstName, lastName, role } = req.body ?? {};

    // Check that all fields are strings
    if (
      typeof firstName !== "string" ||
      typeof lastName !== "string" ||
      typeof role !== "string"
    ) {
      res.status(400).json({
        success: false,
        errors: {
          general: "First name, last name, and role must be strings."
        }
      });
      return;
    }

    const result = organizationService.createPerson(
      firstName,
      lastName,
      role
    );

    if (!result.success) {
      res.status(400).json(result);
      return;
    }

    res.status(201).json(result);
  }
};