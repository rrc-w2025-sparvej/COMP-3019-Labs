import type { Request, Response } from "express";
import { employeeService } from "../services/employeeService.js";

export const employeeController = {
  // GET: Retrieve all employees
  getEmployees(_req: Request, res: Response): void {
    const employees = employeeService.getEmployees();

    res.status(200).json(employees);
  },

  // GET: Retrieve all departments
  getDepartments(_req: Request, res: Response): void {
    const departments = employeeService.getDepartments();

    res.status(200).json(departments);
  },

  // GET: Retrieve employees by department
  getEmployeesByDepartment(req: Request, res: Response): void {
    const departmentId = Number(req.params.departmentId);

    if (!Number.isInteger(departmentId) || departmentId <= 0) {
      res.status(400).json({
        error: "Invalid department ID."
      });
      return;
    }

    const employees = employeeService.getEmployeesByDepartment(departmentId);

    res.status(200).json(employees);
  },

  // POST: Create a new employee
  createEmployee(req: Request, res: Response): void {
    const { firstName, lastName, departmentId } = req.body ?? {};

    // Validate incoming data types
    if (
      typeof firstName !== "string" ||
      typeof lastName !== "string" ||
      typeof departmentId !== "number"
    ) {
      res.status(400).json({
        success: false,
        errors: {
          general: "First name and last name must be strings, and department ID must be a number."
        }
      });
      return;
    }

    // Send data to the service for validation
    const result = employeeService.createEmployee(
      firstName,
      lastName,
      departmentId
    );

    if (!result.success) {
      res.status(400).json(result);
      return;
    }

    res.status(201).json(result);
  }
};
