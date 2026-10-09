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

// Temporary data storage
let departments: Department[] = [
  { id: 1, name: "Administration" },
  { id: 2, name: "Audit" },
  { id: 3, name: "Banking Operations" },
  { id: 4, name: "Communications" },
  { id: 5, name: "Corporate Services" },
  { id: 6, name: "Facilities" },
  { id: 7, name: "Financial Services" },
  { id: 8, name: "Human Resources" },
  { id: 9, name: "Information Technology" },
];

let employees: Employee[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Smith",
    departmentId: 1,
  },
  {
    id: 2,
    firstName: "Sarah",
    lastName: "Johnson",
    departmentId: 9,
  },
];

export const employeeRepo = {
  getEmployees(): Employee[] {
    return employees;
  },

  getDepartments(): Department[] {
    return departments;
  },

  getEmployeesByDepartment(departmentId: number): Employee[] {
    return employees.filter(
      (employee) => employee.departmentId === departmentId
    );
  },

  createEmployee(employee: Omit<Employee, "id">): Employee {
    const newEmployee: Employee = {
      ...employee,
      id: Date.now(),
    };

    employees = [...employees, newEmployee];

    return newEmployee;
  },
};