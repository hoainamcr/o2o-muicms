import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

// Layouts
import AppLayout from "@/components/layout/AppLayout";

// Pages
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";

// Components
import ErrorBoundary from "@/components/common/ErrorBoundary";

// Guards
import AuthGuard from "@/guards/AuthGuard";
import GuestGuard from "@/guards/GuestGuard";
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

// Error boundary wrapper for router
const RouterErrorBoundary: React.FC = () => {
  return (
    <ErrorBoundary>
      <div>Something went wrong</div>
    </ErrorBoundary>
  );
};

export const routeMenuItem: AppRouteMenuItem[] = [
  {
    path: "/login",
    name: "Login",
    hideInMenu: true,
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <AppLayout />
      </AuthGuard>
    ),
    hideInMenu: true,
    errorElement: <RouterErrorBoundary />,
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
