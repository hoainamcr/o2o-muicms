import { AppRouteMenuItem } from "@/types";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import { GuestGuard } from "@/guards";

export const AUTH_PATH = {
  LOGIN: "login",
  REGISTER: "register",
  FORGOT_PASSWORD: "forgot-password",
};

const route: AppRouteMenuItem[] = [
  {
    path: AUTH_PATH.LOGIN,
    name: "Login",
    hideInMenu: true,
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: AUTH_PATH.REGISTER,
    name: "Register",
    hideInMenu: true,
    element: (
      <GuestGuard>
        <Register />
      </GuestGuard>
    ),
  },
  {
    path: AUTH_PATH.FORGOT_PASSWORD,
    name: "Forgot Password",
    hideInMenu: true,
    element: (
      <GuestGuard>
        <ForgotPassword />
      </GuestGuard>
    ),
  },
];

export default route;
