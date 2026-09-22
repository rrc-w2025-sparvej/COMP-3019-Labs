const departments = [
    {
        name: "Administration",
        employees: [
            {
                firstName: "Zoë",
                lastName: "Robins"
            },
            {
                firstName: "Madeleine",
                lastName: "Madden"
            }
        ]
    },
    {
        name: "Audit",
        employees: [
            {
                firstName: "Josha",
                lastName: "Sadowski"
            },
            {
                firstName: "Kate",
                lastName: "Fleetwood"
            }
        ]
    },
    {
        name: "Banking Operations",
        employees: [
            {
                firstName: "Priyanka",
                lastName: "Bose"
            },
            {
                firstName: "Hammed",
                lastName: "Animashaun"
            },
            {
                firstName: "Álvaro",
                lastName: "Morte"
            },
            {
                firstName: "Taylor",
                lastName: "Napier"
            },
            {
                firstName: "Alan",
                lastName: "Simmonds"
            }
        ]
    },
    {
        name: "Communications",
        employees: [
            {
                firstName: "Gil",
                lastName: "Cardinal"
            },
            {
                firstName: "Richard J.",
                lastName: "Lewis"
            }
        ]
    },
    {
        name: "Corporate Services",
        employees: [
            {
                firstName: "Randy",
                lastName: "Bradshaw"
            },
            {
                firstName: "Tracey",
                lastName: "Cook"
            },
            {
                firstName: "Lubomir",
                lastName: "Mykytiuk"
            }
        ]
    },
    {
        name: "Facilities",
        employees: [
            {
                firstName: "Dakota",
                lastName: "House"
            },
            {
                firstName: "Lori Lea",
                lastName: "Okemah"
            },
            {
                firstName: "Renae",
                lastName: "Morrisseau"
            },
            {
                firstName: "Rick",
                lastName: "Belcourt"
            }
        ]
    },
    {
        name: "Financial Services",
        employees: [
            {
                firstName: "Selina",
                lastName: "Hanusa"
            },
            {
                firstName: "Buffy",
                lastName: "Gaudry"
            },
            {
                firstName: "Shaneen Ann",
                lastName: "Fox"
            },
            {
                firstName: "Allan",
                lastName: "Little"
            },
            {
                firstName: "Danny",
                lastName: "Rabbit"
            }
        ]
    },
    {
        name: "Human Resources",
        employees: [
            {
                firstName: "Jesse Ed",
                lastName: "Azure"
            },
            {
                firstName: "Stacy",
                lastName: "Da Silva"
            },
            {
                firstName: "Vladimír",
                lastName: "Valenta"
            },
            {
                firstName: "Samone",
                lastName: "Sayeses-Whitney"
            },
            {
                firstName: "Paul",
                lastName: "Coeur"
            }
        ]
    },
    {
        name: "Information Technology",
        employees: [
            {
                firstName: "Graham",
                lastName: "Greene"
            },
            {
                firstName: "Sandika",
                lastName: "Evergreen"
            },
            {
                firstName: "Jennifer Rodriguez",
                lastName: "(Software Developer)"
            }
        ]
    },
    {
        name: "IT Technician",
        employees: [
            {
                firstName: "Aiyana",
                lastName: "Littlebear"
            },
            {
                firstName: "Inara",
                lastName: "Thunderbird"
            },
            {
                firstName: "Kaya",
                lastName: "Runningbrook"
            },
            {
                firstName: "Elara",
                lastName: "Firehawk"
            },
            {
                firstName: "Siona",
                lastName: "Moonflower"
            },
            {
                firstName: "Kaiyu",
                lastName: "Greywolf"
            },
            {
                firstName: "Ayawamat",
                lastName: "Nightwind"
            },
            {
                firstName: "Tala",
                lastName: "Braveheart"
            },
            {
                firstName: "Iniko",
                lastName: "Stonebear"
            },
            {
                firstName: "Onatah",
                lastName: "Redhawk"
            }
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page content has loaded.");

    const employeeDirectory = document.getElementById("employee-directory");

    // Set the current year in the footer
    const currentYear = document.getElementById("current-year");
    currentYear.textContent = new Date().getFullYear();


    departments.forEach((department) => {
        const departmentSection = document.createElement("section");

        const departmentHeading = document.createElement("h2");
        departmentHeading.textContent = department.name;

        const employeeList = document.createElement("ul");

        department.employees.forEach((employee) => {
            const employeeItem = document.createElement("li");
            employeeItem.textContent = `${employee.firstName} ${employee.lastName}`;

            employeeList.appendChild(employeeItem);
        });

        departmentSection.appendChild(departmentHeading);
        departmentSection.appendChild(employeeList);

        employeeDirectory.appendChild(departmentSection);
    });
});

// Lab 2.1 - Add Employee Form

document.addEventListener("DOMContentLoaded", () => {
    const employeeDirectory = document.getElementById("employee-directory");

    // Create form section
    const formSection = document.createElement("section");

    // Form heading
    const formHeading = document.createElement("h2");
    formHeading.textContent = "Add Employee";

    // Create form
    const form = document.createElement("form");

    // First Name label
    const firstNameLabel = document.createElement("label");
    firstNameLabel.textContent = "First Name:";
    firstNameLabel.setAttribute("for", "first-name");

    // First Name input
    const firstNameInput = document.createElement("input");
    firstNameInput.type = "text";
    firstNameInput.id = "first-name";
    firstNameInput.name = "firstName";

    // Department label
    const departmentLabel = document.createElement("label");
    departmentLabel.textContent = "Department:";
    departmentLabel.setAttribute("for", "department");

    // Department dropdown
    const departmentSelect = document.createElement("select");
    departmentSelect.id = "department";
    departmentSelect.name = "department";

    // Default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select a department";

    departmentSelect.appendChild(defaultOption);

    // Add existing departments to dropdown
    departments.forEach((department, index) => {
        const option = document.createElement("option");

        option.value = index;
        option.textContent = department.name;

        departmentSelect.appendChild(option);
});

    // Submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Add Employee";

    // Add elements to form
    form.appendChild(firstNameLabel);
    form.appendChild(firstNameInput);
    form.appendChild(departmentLabel);
    form.appendChild(departmentSelect);
    form.appendChild(submitButton);

    // Add heading and form to section
    formSection.appendChild(formHeading);
    formSection.appendChild(form);

    // Add form at the bottom of the employee directory
    employeeDirectory.insertAdjacentElement("afterend", formSection);
});

