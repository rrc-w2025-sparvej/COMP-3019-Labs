import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useFormInput } from "../../hooks/useFormInput";
import { employeeService } from "../../services/employeeService";
import type { Department } from "../../repositories/employeeRepo";

type EmployeeFormProps = {
  onEmployeeAdded: () => void;
};

function EmployeeForm({ onEmployeeAdded }: EmployeeFormProps) {
  const firstName = useFormInput("");
  const lastName = useFormInput("");
  const department = useFormInput("");

  const [departments, setDepartments] = useState<Department[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Load departments from the Express back-end
  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const data = await employeeService.getDepartments();
        setDepartments(data);
      } catch {
        setError("Unable to load departments.");
      } finally {
        setLoading(false);
      }
    };

    void loadDepartments();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    // Validate first name
    const firstNameValid = firstName.validate((value) =>
      value.trim().length >= 3
        ? ""
        : "First name must contain at least 3 characters."
    );

    // Validate department
    const departmentValid = department.validate((value) =>
      value !== ""
        ? ""
        : "Please select a valid department."
    );

    if (!firstNameValid || !departmentValid) {
      return;
    }

    setSubmitting(true);

    try {
      // Send employee data to the Express API
      const result = await employeeService.createEmployee({
        firstName: firstName.value,
        lastName: lastName.value,
        departmentId: Number(department.value),
      });

      if (!result.success) {
        firstName.setMessage(result.errors?.firstName ?? "");
        lastName.setMessage(result.errors?.lastName ?? "");
        department.setMessage(result.errors?.department ?? "");
        setError(result.errors?.general ?? "");
        return;
      }

      // Clear the form after successful creation
      firstName.reset();
      lastName.reset();
      department.reset();

      // Refresh employee list
      onEmployeeAdded();
    } catch {
      setError("Unable to add employee.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>

      {error && <p role="alert">{error}</p>}

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

        {lastName.message && <p>{lastName.message}</p>}
      </div>

      <div>
        <label htmlFor="department">Department: </label>

        <select
          id="department"
          value={department.value}
          onChange={(event) => department.setValue(event.target.value)}
          disabled={loading}
        >
          <option value="">
            {loading ? "Loading departments..." : "Select a department"}
          </option>

          {departments.map((dept) => (
            <option key={dept.id} value={dept.id}>
              {dept.name}
            </option>
          ))}
        </select>

        {department.message && <p>{department.message}</p>}
      </div>

      <button type="submit" disabled={loading || submitting}>
        {submitting ? "Adding..." : "Add Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;