import React from "react";
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  FileTextOutlined,
  BarChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { MenuItem } from "@/types";

export const menuItems: MenuItem[] = [
  {
    key: "/dashboard",
    label: "Dashboard",
    icon: React.createElement(DashboardOutlined),
    path: "/dashboard",
  },
  {
    key: "/users",
    label: "Quản lý người dùng",
    icon: React.createElement(UserOutlined),
    path: "/users",
  },
  {
    key: "/reports",
    label: "Báo cáo",
    icon: React.createElement(BarChartOutlined),
    children: [
      {
        key: "/reports/sales",
        label: "Báo cáo bán hàng",
        path: "/reports/sales",
      },
      {
        key: "/reports/inventory",
        label: "Báo cáo tồn kho",
        path: "/reports/inventory",
      },
    ],
  },
  {
    key: "/documents",
    label: "Tài liệu",
    icon: React.createElement(FileTextOutlined),
    path: "/documents",
  },
  {
    key: "/teams",
    label: "Nhóm làm việc",
    icon: React.createElement(TeamOutlined),
    path: "/teams",
  },
  {
    key: "/settings",
    label: "Cài đặt",
    icon: React.createElement(SettingOutlined),
    path: "/settings",
  },
];
