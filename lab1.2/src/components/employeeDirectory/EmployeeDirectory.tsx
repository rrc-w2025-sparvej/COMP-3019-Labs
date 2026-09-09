import { departments } from "../../data";

function EmployeeDirectory() {
    return (
        <main>
            <h2>Employee Directory</h2>

            {departments.map((department) => (
                <section key={department.name}>
                    <h3>{department.name}</h3>

                    <ul>
                        {department.employees.map((employee) => (
                            <li key={`${employee.firstName}-${employee.lastName}`}>
                                {employee.firstName} {employee.lastName}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </main>
    );
}

export default EmployeeDirectory;