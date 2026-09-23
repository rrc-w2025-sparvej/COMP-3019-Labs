import { organizationRoles } from "../../data";
import "./Organization.css";

function Organization() {
  return (
    <main>
      <section className="organization">
        <h1>Organization</h1>

        <div className="organization-list">
          {organizationRoles.map((person, index) => (
            <div className="organization-row" key={index}>
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