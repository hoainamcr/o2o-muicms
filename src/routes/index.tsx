import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";

// Layouts
import AppLayout from "@/components/layout/AppLayout";

// Pages
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";

// Components
import ErrorBoundary from "@/components/common/ErrorBoundary";
import Loading from "@/components/common/Loading";

// Guards
import AuthGuard from "@/guards/AuthGuard";
import GuestGuard from "@/guards/GuestGuard";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Error boundary wrapper for router
const RouterErrorBoundary: React.FC = () => {
  return (
    <ErrorBoundary>
      <div>Something went wrong</div>
    </ErrorBoundary>
  );
};

const router = createBrowserRouter([
  {
    path: "/login",
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
    errorElement: <RouterErrorBoundary />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <div>Users Page</div>,
      },
      {
        path: "settings",
        element: <div>Settings Page</div>,
      },
      {
        path: "*",
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

const AppRouter: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={viVN}>
        <ErrorBoundary>
          <Loading spinning={false}>
            <RouterProvider router={router} />
          </Loading>
        </ErrorBoundary>
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default AppRouter;
