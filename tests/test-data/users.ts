export interface User {
  email: string;
  password: string;
}

export const users: User[] = [
  { email: "customer@practicesoftwaretesting.com", password: "welcome01" },
  { email: "another_user@example.com", password: "password123" }
];