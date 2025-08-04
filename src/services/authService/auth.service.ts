import { apiService } from "../../config";
import { LoginCredentials, User } from "@/types";
import { LoginResponse, RegisterData } from "./auth.interface";

class AuthService {
  // Login
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const response = await apiService.post<LoginResponse>(
      "/auth/user/login",
      credentials
    );

    return response as unknown as LoginResponse;
  }

  // Register
  async register(data: RegisterData): Promise<LoginResponse> {
    const response = await apiService.post<LoginResponse>(
      "/auth/register",
      data
    );
    return response.data;
  }

  // Logout
  async logout(): Promise<void> {
    await apiService.post("/auth/user/logout");
  }

  // Get current user
  async getCurrentUser(): Promise<User> {
    const response = await apiService.get<User>("/auth/user/get-me");
    return response.data;
  }

  // Refresh token
  async refreshToken(): Promise<{ token: string }> {
    const response = await apiService.post<{ token: string }>("/auth/refresh");
    return response.data;
  }

  // Change password
  async changePassword(data: {
    currentPassword: string;
    newPassword: string;
  }): Promise<void> {
    await apiService.post("/auth/change-password", data);
  }

  // Forgot password
  async forgotPassword(email: string): Promise<void> {
    await apiService.post("/auth/forgot-password", { email });
  }

  // Reset password
  async resetPassword(data: {
    token: string;
    newPassword: string;
  }): Promise<void> {
    await apiService.post("/auth/reset-password", data);
  }

  // Update profile
  async updateProfile(data: Partial<User>): Promise<User> {
    const response = await apiService.put<User>("/auth/profile", data);
    return response.data;
  }

  // Upload avatar
  async uploadAvatar(file: File): Promise<{ avatar: string }> {
    const response = await apiService.upload<{ avatar: string }>(
      "/auth/avatar",
      file
    );
    return response.data;
  }
}

export const authService = new AuthService();
