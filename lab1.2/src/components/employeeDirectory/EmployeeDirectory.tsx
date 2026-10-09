import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { employeeService } from "../../services/employeeService";

function EmployeeDirectory() {
  const [, setRefresh] = useState(0);

  const departments = employeeService.getDepartments();

  const refreshEmployees = () => {
    setRefresh((value) => value + 1);
  };

  return (
    <main>
      <h2>Employee Directory</h2>

      <EmployeeForm onEmployeeAdded={refreshEmployees} />

      {departments.map((department) => {
        const departmentEmployees =
          employeeService.getEmployeesByDepartment(department.id);

        return (
          <section key={department.id}>
            <h3>{department.name}</h3>

            {departmentEmployees.length === 0 ? (
              <p>No employees in this department.</p>
            ) : (
              <ul>
                {departmentEmployees.map((employee) => (
                  <li key={employee.id}>
                    {employee.firstName} {employee.lastName}
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}
    </main>
  );
}

export default EmployeeDirectory;