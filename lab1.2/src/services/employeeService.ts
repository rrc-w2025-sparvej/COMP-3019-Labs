import {
  employeeRepo,
  type Employee,
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
    department?: string;
  };
};

export const employeeService = {
  createEmployee(
    employeeData: CreateEmployeeInput
  ): CreateEmployeeResult {
    const departments = employeeRepo.getDepartments();

    const departmentExists = departments.some(
      (department) => department.id === employeeData.departmentId
    );

    const errors: CreateEmployeeResult["errors"] = {};

    // Validate department
    if (!departmentExists) {
      errors.department = "Please select a valid department.";
    }

    // Validate first name
    if (employeeData.firstName.trim().length < 3) {
      errors.firstName =
        "First name must contain at least 3 characters.";
    }

    // Stop if validation failed
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
      };
    }

    // Repository handles actual data creation
    const employee = employeeRepo.createEmployee({
      firstName: employeeData.firstName.trim(),
      lastName: employeeData.lastName.trim(),
      departmentId: employeeData.departmentId,
    });

    return {
      success: true,
      employee,
    };
  },

  getEmployees(): Employee[] {
    return employeeRepo.getEmployees();
  },

  getDepartments() {
    return employeeRepo.getDepartments();
  },
};