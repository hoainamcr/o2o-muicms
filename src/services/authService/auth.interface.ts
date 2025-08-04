import { User } from "@/types";

export interface LoginResponse {
  user: User;
  token: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  fullName: string;
}
