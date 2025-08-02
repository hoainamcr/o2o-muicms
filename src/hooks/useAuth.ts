import { useAuthStore } from "@/stores/auth.store";

export const useAuth = () => {
  const authStore = useAuthStore();

  return {
    // State
    user: authStore.user,
    isAuthenticated: authStore.isAuthenticated,
    isLoading: authStore.isLoading,
    token: authStore.token,

    // Actions
    login: authStore.login,
    logout: authStore.logout,
    register: authStore.register,
    getCurrentUser: authStore.getCurrentUser,
    updateUser: authStore.updateUser,
    clearAuth: authStore.clearAuth,

    // Computed
    isAdmin: authStore.user?.role === "admin",
    isUser: authStore.user?.role === "user",
    isModerator: authStore.user?.role === "moderator",
  };
};
