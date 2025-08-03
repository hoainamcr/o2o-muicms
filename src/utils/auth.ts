import { STORAGE_KEYS } from "@/constants";
import { storage } from "./storage";

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
