export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  departmentId: number;
};

export type Department = {
  id: number;
  name: string;
};

const API_URL = "http://localhost:3001/api/employees";

export const employeeRepo = {
  // Get all employees from the back-end
  async getEmployees(): Promise<Employee[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch employees.");
    }

    return response.json();
  },

  // Get all departments from the back-end
  async getDepartments(): Promise<Department[]> {
    const response = await fetch(`${API_URL}/departments`);

    if (!response.ok) {
      throw new Error("Failed to fetch departments.");
    }

    return response.json();
  },

  // Get employees belonging to a department
  async getEmployeesByDepartment(
    departmentId: number
  ): Promise<Employee[]> {
    const response = await fetch(
      `${API_URL}/department/${departmentId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch department employees.");
    }

    return response.json();
  },

  // Create an employee through the back-end
  async createEmployee(
    employee: Omit<Employee, "id">
  ): Promise<Employee> {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(
        result.errors?.firstName ||
        result.errors?.lastName ||
        result.errors?.departmentId ||
        result.errors?.general ||
        "Failed to create employee."
      );
    }

    return result.employee;
  },
};