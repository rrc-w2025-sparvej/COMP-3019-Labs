import {
  employeeRepository,
  type Employee,
  type Department
} from "../repositories/employeeRepository.js";

type CreateEmployeeResult = {
  success: boolean;
  employee?: Employee;
  errors?: {
    firstName?: string;
    lastName?: string;
    departmentId?: string;
  };
};

export const employeeService = {
  // Get all employees
  getEmployees(): Employee[] {
    return employeeRepository.getEmployees();
  },

  // Get all departments
  getDepartments(): Department[] {
    return employeeRepository.getDepartments();
  },

  // Get employees by department
  getEmployeesByDepartment(departmentId: number): Employee[] {
    return employeeRepository.getEmployeesByDepartment(departmentId);
  },

  // Validate and create an employee
  createEmployee(
    firstName: string,
    lastName: string,
    departmentId: number
  ): CreateEmployeeResult {
    const errors: NonNullable<CreateEmployeeResult["errors"]> = {};

    // Validate first name
    if (firstName.trim().length < 3) {
      errors.firstName = "First name must have at least 3 characters.";
    }

    // Validate last name
    if (!lastName.trim()) {
      errors.lastName = "Please enter a last name.";
    }

    // Check if department exists
    const departmentExists = employeeRepository
      .getDepartments()
      .some((department) => department.id === departmentId);

    if (!departmentExists) {
      errors.departmentId = "Please select a valid department.";
    }

    // Return errors if validation fails
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors
      };
    }

    // Save employee
    const employee = employeeRepository.createEmployee({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      departmentId
    });

    return {
      success: true,
      employee
    };
  }
};
