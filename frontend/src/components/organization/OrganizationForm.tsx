import { useOrganizationForm } from "../../hooks/useOrganizationForm";

type OrganizationFormProps = {
  onPersonAdded: () => void;
};

function OrganizationForm({ onPersonAdded }: OrganizationFormProps) {
  const { firstName, lastName, role, handleSubmit } =
    useOrganizationForm(onPersonAdded);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Organization Member</h2>

      <div>
        <label htmlFor="orgFirstName">First Name: </label>
        <input
          id="orgFirstName"
          type="text"
          value={firstName.value}
          onChange={(event) => firstName.setValue(event.target.value)}
        />

        {firstName.message && <p>{firstName.message}</p>}
      </div>

      <div>
        <label htmlFor="orgLastName">Last Name: </label>
        <input
          id="orgLastName"
          type="text"
          value={lastName.value}
          onChange={(event) => lastName.setValue(event.target.value)}
        />

        {lastName.message && <p>{lastName.message}</p>}
      </div>

      <div>
        <label htmlFor="orgRole">Role: </label>
        <input
          id="orgRole"
          type="text"
          value={role.value}
          onChange={(event) => role.setValue(event.target.value)}
        />

        {role.message && <p>{role.message}</p>}
      </div>

      <button type="submit">Add Member</button>
    </form>
  );
}

export default OrganizationForm;