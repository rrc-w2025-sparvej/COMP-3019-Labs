import {
  employeeRepo,
  type Employee,
  type Department,
} from "../repositories/employeeRepo";

type CreateEmployeeInput = {
  firstName: string;
  lastName: string;
  departmentId: number;
};

export type CreateEmployeeResult = {
  success: boolean;
  employee?: Employee;
  errors?: {
    firstName?: string;
    lastName?: string;
    department?: string;
    general?: string;
  };
};

export const employeeService = {
  // Validate and create a new employee
  async createEmployee(
    employeeData: CreateEmployeeInput
  ): Promise<CreateEmployeeResult> {
    const errors: NonNullable<CreateEmployeeResult["errors"]> = {};

    // Validate first name
    if (employeeData.firstName.trim().length < 3) {
      errors.firstName =
        "First name must contain at least 3 characters.";
    }

    // Validate last name
    if (!employeeData.lastName.trim()) {
      errors.lastName = "Please enter a last name.";
    }

    // Validate department selection
    if (
      !Number.isInteger(employeeData.departmentId) ||
      employeeData.departmentId <= 0
    ) {
      errors.department = "Please select a valid department.";
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
      };
    }

    try {
      // Send employee information to the back-end
      const employee = await employeeRepo.createEmployee({
        firstName: employeeData.firstName.trim(),
        lastName: employeeData.lastName.trim(),
        departmentId: employeeData.departmentId,
      });

      return {
        success: true,
        employee,
      };
    } catch (error) {
      return {
        success: false,
        errors: {
          general:
            error instanceof Error
              ? error.message
              : "Unable to create employee.",
        },
      };
    }
  },

  // Retrieve employees from Express
  async getEmployees(): Promise<Employee[]> {
    return employeeRepo.getEmployees();
  },

  // Retrieve departments from Express
  async getDepartments(): Promise<Department[]> {
    return employeeRepo.getDepartments();
  },

  // Retrieve employees by department
  async getEmployeesByDepartment(
    departmentId: number
  ): Promise<Employee[]> {
    return employeeRepo.getEmployeesByDepartment(departmentId);
  },
};