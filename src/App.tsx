import React from "react";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Loading from "@/components/common/Loading";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import AppRouter from "./routes";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={viVN}>
        <ErrorBoundary>
          <Loading spinning={false}>
            <RouterProvider router={AppRouter} />
          </Loading>
        </ErrorBoundary>
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default App;
