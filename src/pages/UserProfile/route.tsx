import { AppRouteMenuItem } from "@/types";
import UserProfile from ".";

export const USER_PATH = {
  PROFILE: "profile",
};

const route: AppRouteMenuItem = {
  path: USER_PATH.PROFILE,
  name: "Profile",
  hideInMenu: true,
  element: <UserProfile />,
};

export default route;
