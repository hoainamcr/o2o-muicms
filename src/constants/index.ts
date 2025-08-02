// API Configuration
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  USER_INFO: "user_info",
  THEME: "theme",
  LANGUAGE: "language",
} as const;

// Route Paths
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  USERS: "/users",
  SETTINGS: "/settings",
  PROFILE: "/profile",
} as const;

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

// Status
export const STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const;

// User Roles
export const USER_ROLES = {
  ADMIN: "admin",
  USER: "user",
  MODERATOR: "moderator",
} as const;

// Theme
export const THEME = {
  LIGHT: "light",
  DARK: "dark",
} as const;

// Language
export const LANGUAGE = {
  VI: "vi",
  EN: "en",
} as const;
