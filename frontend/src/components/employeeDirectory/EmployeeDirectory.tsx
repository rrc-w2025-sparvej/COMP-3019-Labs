import { useEffect, useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { employeeService } from "../../services/employeeService";
import type {
  Employee,
  Department,
} from "../../repositories/employeeRepo";

function EmployeeDirectory() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load employees and departments from the back-end
  const loadData = async () => {
    try {
      setError("");

      const [employeeData, departmentData] = await Promise.all([
        employeeService.getEmployees(),
        employeeService.getDepartments(),
      ]);

      setEmployees(employeeData);
      setDepartments(departmentData);
    } catch {
      setError("Unable to load employee data.");
    } finally {
      setLoading(false);
    }
  };

  // Load data when the page opens
  useEffect(() => {
    void loadData();
  }, []);

  // Refresh the list after adding an employee
  const refreshEmployees = () => {
    void loadData();
  };

  return (
    <main>
      <h2>Employee Directory</h2>

      <EmployeeForm onEmployeeAdded={refreshEmployees} />

      {loading && <p>Loading employees...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading &&
        departments.map((department) => {
          const departmentEmployees = employees.filter(
            (employee) =>
              employee.departmentId === department.id
          );

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