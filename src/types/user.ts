// User types
export interface User {
  id: string;
  user_id: number;
  username: string;
  email: string;
  fullName: string;
  last_name: string;
  avatar?: string;
  role: string;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
}
