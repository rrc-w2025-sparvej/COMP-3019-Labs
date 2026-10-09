import type { FormEvent } from "react";
import { useFormInput } from "../../hooks/useFormInput";
import { employeeService } from "../../services/employeeService";

type EmployeeFormProps = {
  onEmployeeAdded: () => void;
};

function EmployeeForm({ onEmployeeAdded }: EmployeeFormProps) {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const department = useFormInput("");

  const departments = employeeService.getDepartments();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate form inputs using the custom hook
    const firstNameValid = firstName.validate((value) =>
      value.trim().length >= 3
        ? ""
        : "First name must contain at least 3 characters."
    );

    const departmentValid = department.validate((value) =>
      value !== ""
        ? ""
        : "Please select a valid department."
    );

    // Stop if input validation fails
    if (!firstNameValid || !departmentValid) {
      return;
    }

    // Service performs business validation and creates the employee
    const result = employeeService.createEmployee({
      firstName: firstName.value,
      lastName: lastName.value,
      departmentId: Number(department.value),
    });

    // Display any errors returned by the service
    if (!result.success) {
      firstName.setMessage(result.errors?.firstName ?? "");
      department.setMessage(result.errors?.department ?? "");
      return;
    }

    // Clear the form after successful creation
    firstName.reset();
    lastName.reset();
    department.reset();

    // Refresh employee data
    onEmployeeAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>

      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          type="text"
          value={firstName.value}
          onChange={(event) => firstName.setValue(event.target.value)}
        />

        {firstName.message && <p>{firstName.message}</p>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          type="text"
          value={lastName.value}
          onChange={(event) => lastName.setValue(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="department">Department: </label>

        <select
          id="department"
          value={department.value}
          onChange={(event) => department.setValue(event.target.value)}
        >
          <option value="">Select a department</option>

          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>

        {department.message && <p>{department.message}</p>}
      </div>

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;