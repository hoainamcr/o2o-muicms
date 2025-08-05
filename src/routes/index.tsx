import { createBrowserRouter, Navigate } from "react-router-dom";

// Layouts
import AppLayout from "@/layouts/AppLayout";

// Pages
import Dashboard from "@/pages/Dashboard";

// Components
import { ErrorBoundary } from "@/components";

// Guards
import { AuthGuard } from "@/guards";
import Users from "@/pages/Users";
import Settings from "@/pages/Settings";
import ErrorPage from "@/pages/Errors";
import { AppRouteMenuItem } from "@/types";
import {
  DashboardOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import masterDataRoute from "@/pages/MasterData/route";
import authRoute from "@/pages/Auth/route";
import userProfileRoute from "@/pages/UserProfile/route";

export const routeMenuItem: AppRouteMenuItem[] = [
  ...authRoute, // auth route
  {
    path: "/",
    element: (
      <AuthGuard>
        <AppLayout />
      </AuthGuard>
    ),
    hideInMenu: true,
    errorElement: (
      <ErrorBoundary>
        <div>Something went wrong</div>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        name: "Dashboard",
        element: <Dashboard />,
        icon: <DashboardOutlined />,
      },
      userProfileRoute,
      masterDataRoute,
      {
        path: "users",
        name: "Users",
        icon: <UserOutlined />,
        children: [
          {
            index: true,
            element: <Navigate to="/users/list" replace />,
          },
          {
            path: "list",
            name: "Users List",
            element: <Users />,
          },
        ],
      },
      {
        path: "settings",
        name: "Settings",
        element: <Settings />,
        icon: <SettingOutlined />,
      },
      {
        path: "*",
        element: <ErrorPage />,
        hideInMenu: true,
      },
    ],
  },
];

export default createBrowserRouter(routeMenuItem);
