import { useEffect, useState } from "react";
import { organizationService } from "../../services/organizationService";
import OrganizationForm from "./OrganizationForm";
import type { Role } from "../../types";
import "./Organization.css";

function Organization() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Retrieve organization members from the back-end
  const refreshOrganization = async () => {
    try {
      setError("");

      const people = await organizationService.getAll();
      setRoles(people);
    } catch {
      setError("Unable to load organization members.");
    } finally {
      setLoading(false);
    }
  };

  // Load organization members when the page opens
  useEffect(() => {
    void refreshOrganization();
  }, []);

  return (
    <main>
      <section className="organization">
        <h1>Organization</h1>

        <OrganizationForm
          onPersonAdded={() => {
            void refreshOrganization();
          }}
        />

        {loading && <p>Loading organization members...</p>}

        {error && <p role="alert">{error}</p>}

        <div className="organization-list">
          {roles.map((person) => (
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