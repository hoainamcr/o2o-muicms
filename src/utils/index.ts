import { STORAGE_KEYS } from "@/constants";

// Storage utilities
export const storage = {
  get: (key: string) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  },

  set: (key: string, value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  },

  remove: (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing from localStorage:", error);
    }
  },

  clear: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  },
};

// Auth utilities
export const auth = {
  getToken: () => storage.get(STORAGE_KEYS.AUTH_TOKEN),
  setToken: (token: string) => storage.set(STORAGE_KEYS.AUTH_TOKEN, token),
  removeToken: () => storage.remove(STORAGE_KEYS.AUTH_TOKEN),

  getUser: () => storage.get(STORAGE_KEYS.USER_INFO),
  setUser: (user: any) => storage.set(STORAGE_KEYS.USER_INFO, user),
  removeUser: () => storage.remove(STORAGE_KEYS.USER_INFO),

  logout: () => {
    auth.removeToken();
    auth.removeUser();
  },
};

// Format utilities
export const format = {
  date: (date: string | Date, format: string = "DD/MM/YYYY") => {
    const d = new Date(date);
    return d.toLocaleDateString("vi-VN");
  },

  currency: (amount: number, currency: string = "VND") => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency,
    }).format(amount);
  },

  phone: (phone: string) => {
    return phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
  },
};

// Validation utilities
export const validation = {
  email: (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  phone: (phone: string) => {
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(phone);
  },

  password: (password: string) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  },
};

// Common utilities
export const common = {
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  },

  throttle: <T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): ((...args: Parameters<T>) => void) => {
    let lastCall = 0;
    return (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        lastCall = now;
        func(...args);
      }
    };
  },

  generateId: () => {
    return Math.random().toString(36).substr(2, 9);
  },

  copyToClipboard: async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      return false;
    }
  },
};
