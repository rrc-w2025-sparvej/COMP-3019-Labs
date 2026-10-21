import { useState } from "react";
import OrganizationForm from "./OrganizationForm";
import { organizationService } from "../../services/organizationService";
import "./Organization.css";

function Organization() {
  // Get organization data when the page loads
  const [organizationRoles, setOrganizationRoles] = useState(() =>
    organizationService.getAll()
  );

  // Update the list after adding a new member
  const refreshOrganization = () => {
    setOrganizationRoles(organizationService.getAll());
  };

  return (
    <main>
      <section className="organization">
        <h1>Organization</h1>

        {/* Form for adding a new member */}
        <OrganizationForm onPersonAdded={refreshOrganization} />

        <h2>Organization Members</h2>

        <div className="organization-list">
          {organizationRoles.map((person) => (
            <div className="organization-row" key={person.role}>
              <span className="organization-name">
                {person.firstName} {person.lastName}
              </span>

              <span className="organization-role">
                {person.role}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Organization;