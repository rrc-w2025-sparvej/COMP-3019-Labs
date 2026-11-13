export type Role = {
  firstName: string;
  lastName: string;
  role: string;
};

export type Department = {
  name: string;
  employees: {
    firstName: string;
    lastName: string;
  }[];
};