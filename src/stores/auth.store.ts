import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { AuthState, User, LoginCredentials } from "@/types";
import { authService } from "@/services/authService/auth.service";
import { LoginResponse } from "@/services/authService/auth.interface";
import { auth as authUtils } from "@/utils";
import { message } from "antd";

interface AuthStore extends AuthState {
  // Actions
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: any) => Promise<void>;
  getCurrentUser: () => Promise<void>;
  updateUser: (user: User) => void;
  setLoading: (loading: boolean) => void;
  clearAuth: () => void;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
};

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        // Actions
        login: async (credentials: LoginCredentials) => {
          try {
            set({ isLoading: true });

            const response: LoginResponse = await authService.login(
              credentials
            );

            // Save to localStorage
            authUtils.setToken(response.token);
            authUtils.setUser(response.user);

            // Update store
            set({
              user: response.user,
              token: response.token,
              isAuthenticated: true,
              isLoading: false,
            });

            message.success("Đăng nhập thành công!");
          } catch (error) {
            set({ isLoading: false });
            throw error;
          }
        },

        logout: async () => {
          try {
            set({ isLoading: true });

            // Call logout API
            await authService.logout();

            // Clear localStorage
            authUtils.logout();

            // Update store
            set(initialState);

            message.success("Đăng xuất thành công!");
          } catch (error) {
            set({ isLoading: false });
            // Even if API fails, clear local auth
            authUtils.logout();
            set({
              user: null,
              token: null,
              isAuthenticated: false,
              isLoading: false,
            });
            throw error;
          }
        },

        register: async (data: any) => {
          try {
            set({ isLoading: true });

            const response: LoginResponse = await authService.register(data);

            // Save to localStorage
            authUtils.setToken(response.token);
            authUtils.setUser(response.user);

            // Update store
            set({
              user: response.user,
              token: response.token,
              isAuthenticated: true,
              isLoading: false,
            });

            message.success("Đăng ký thành công!");
          } catch (error) {
            set({ isLoading: false });
            throw error;
          }
        },

        getCurrentUser: async () => {
          try {
            set({ isLoading: true });

            const user = await authService.getCurrentUser();

            // Update store
            set({
              user,
              isAuthenticated: true,
              isLoading: false,
            });
          } catch (error) {
            set({ isLoading: false });
            // If get current user fails, clear auth
            get().clearAuth();
            throw error;
          }
        },

        updateUser: (user: User) => {
          set({ user });
          authUtils.setUser(user);
        },

        setLoading: (loading: boolean) => {
          set({ isLoading: loading });
        },

        clearAuth: () => {
          authUtils.logout();
          set(initialState);
        },
      }),
      {
        name: "auth-storage",
        partialize: (state) => ({
          user: state.user,
          token: state.token,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    {
      name: "auth-store",
    }
  )
);
