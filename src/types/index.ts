// Common types
export interface ApiResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
  code?: number;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

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

// Auth types
export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Menu types
export interface MenuItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  path?: string;
  children?: MenuItem[];
  permission?: string;
}

// Error types
export interface ApiError {
  message: string;
  code?: number;
  details?: any;
}
