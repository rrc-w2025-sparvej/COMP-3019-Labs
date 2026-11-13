import type { Department, Role } from "./types";

export const departments: Department[] = [
    {
        name: "Administration",
        employees: [
            { firstName: "Zoë", lastName: "Robins" },
            { firstName: "Madeleine", lastName: "Madden" }
        ]
    },
    {
        name: "Audit",
        employees: [
            { firstName: "Josha", lastName: "Sadowski" },
            { firstName: "Kate", lastName: "Fleetwood" }
        ]
    },
    {
        name: "Banking Operations",
        employees: [
            { firstName: "Priyanka", lastName: "Bose" },
            { firstName: "Hammed", lastName: "Animashaun" },
            { firstName: "Álvaro", lastName: "Morte" },
            { firstName: "Taylor", lastName: "Napier" },
            { firstName: "Alan", lastName: "Simmonds" }
        ]
    },
    {
        name: "Communications",
        employees: [
            { firstName: "Gil", lastName: "Cardinal" },
            { firstName: "Richard J.", lastName: "Lewis" }
        ]
    },
    {
        name: "Corporate Services",
        employees: [
            { firstName: "Randy", lastName: "Bradshaw" },
            { firstName: "Tracey", lastName: "Cook" },
            { firstName: "Lubomir", lastName: "Mykytiuk" }
        ]
    },
    {
        name: "Facilities",
        employees: [
            { firstName: "Dakota", lastName: "House" },
            { firstName: "Lori Lea", lastName: "Okemah" },
            { firstName: "Renae", lastName: "Morrisseau" },
            { firstName: "Rick", lastName: "Belcourt" }
        ]
    },
    {
        name: "Financial Services",
        employees: [
            { firstName: "Selina", lastName: "Hanusa" },
            { firstName: "Buffy", lastName: "Gaudry" },
            { firstName: "Shaneen Ann", lastName: "Fox" },
            { firstName: "Allan", lastName: "Little" },
            { firstName: "Danny", lastName: "Rabbit" }
        ]
    },
    {
        name: "Human Resources",
        employees: [
            { firstName: "Jesse Ed", lastName: "Azure" },
            { firstName: "Stacy", lastName: "Da Silva" },
            { firstName: "Vladimír", lastName: "Valenta" },
            { firstName: "Samone", lastName: "Sayeses-Whitney" },
            { firstName: "Paul", lastName: "Coeur" }
        ]
    },
    {
        name: "Information Technology",
        employees: [
            { firstName: "Graham", lastName: "Greene" },
            { firstName: "Sandika", lastName: "Evergreen" },
            { firstName: "Jennifer Rodriguez", lastName: "(Software Developer)" }
        ]
    },
    {
        name: "IT Technician",
        employees: [
            { firstName: "Aiyana", lastName: "Littlebear" },
            { firstName: "Inara", lastName: "Thunderbird" },
            { firstName: "Kaya", lastName: "Runningbrook" },
            { firstName: "Elara", lastName: "Firehawk" },
            { firstName: "Siona", lastName: "Moonflower" },
            { firstName: "Kaiyu", lastName: "Greywolf" },
            { firstName: "Ayawamat", lastName: "Nightwind" },
            { firstName: "Tala", lastName: "Braveheart" },
            { firstName: "Iniko", lastName: "Stonebear" },
            { firstName: "Onatah", lastName: "Redhawk" }
        ]
    }
];

export const organizationRoles: Role[] = [
  {
    role: "CEO/Chair of Board",
    firstName: "Jo-Anne",
    lastName: "Sinclair",
  },
  {
    role: "COO/VP Operations",
    firstName: "Jackson",
    lastName: "Smith",
  },
  {
    role: "CFO/VP Administration",
    firstName: "Susan",
    lastName: "Thomas",
  },
  {
    role: "VP Client Services",
    firstName: "Richa",
    lastName: "Kaur",
  },
  {
    role: "CIO",
    firstName: "Josee",
    lastName: "Benjamin",
  },
  {
    role: "VP Sales & Marketing",
    firstName: "Vincent",
    lastName: "Grey",
  },
  {
    role: "Director Financial and Audit Svcs",
    firstName: "Rupa",
    lastName: "Kharki (she/her/hers)",
  },
  {
    role: "Director Human Resources",
    firstName: "Xun",
    lastName: "Kuang",
  },
  {
    role: "Director Legal Services/General Counsel",
    firstName: "Stien",
    lastName: "Pedersen",
  },
  {
    role: "Director Information Technology",
    firstName: "Sandra",
    lastName: "Bear",
  },
  {
    role: "Director Information Security and CISO",
    firstName: "Gus",
    lastName: "Blue",
  },
  {
    role: "Director Accounting",
    firstName: "Sam",
    lastName: "Kong",
  },
  {
    role: "Director Physical Security",
    firstName: "Valentine",
    lastName: "Smith",
  },
  {
    role: "Director Facilities",
    firstName: "Mariya",
    lastName: "Kaperski",
  },
  {
    role: "Manager, Business Continuity and Disaster Recovery",
    firstName: "Abd al-Hamid",
    lastName: "Alami",
  },
  {
    role: "Manager, Internal Audit",
    firstName: "Victoria",
    lastName: "Gray",
  },
  {
    role: "Chief Architect",
    firstName: "Cheryl",
    lastName: "Guru",
  },
  {
    role: "Manager, Security Architecture",
    firstName: "Jean",
    lastName: "Ngoy",
  },
  {
    role: "Solution Architect, Online Banking",
    firstName: "Kris",
    lastName: "Gold",
  },
  {
    role: "Manager, Application Solutions",
    firstName: "Isaac",
    lastName: "Smith",
  },
  {
    role: "Lead Developer, Online Banking",
    firstName: "Payton",
    lastName: "Frost",
  },
  {
    role: "Manager, Operational Risk",
    firstName: "Samantha",
    lastName: "Nettle",
  },
  {
    role: "Manager, Vendor Relations",
    firstName: "Yolanda",
    lastName: "Ferreira",
  },
  {
    role: "Manager, Purchasing",
    firstName: "Samir",
    lastName: "Hassan",
  },
  {
    role: "Manager, Communications",
    firstName: "Yuna",
    lastName: "Aikawa",
  },
  {
    role: "Manager Customer Experience and Community Eng.",
    firstName: "Jonathan",
    lastName: "Carberry",
  },
];