import type { MenuDataItem } from "@ant-design/pro-components";
import type { RouteObject } from "react-router-dom";

export type AppRouteMenuItem = MenuDataItem &
  RouteObject & {
    /** Các custom field của riêng bạn, nếu có */
    name?: string; // name của menu
    path?: string; // path của route
    element?: React.ReactNode; // phần tử react router
    children?: AppRouteMenuItem[];
  };
