import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ProLayout } from "@ant-design/pro-components";
import { useAuthStore } from "@/stores/auth.store";
import { Dropdown } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import useGetMenus from "@/hooks/useGetMenus";

const AppLayout: React.FC = () => {
  const { user, logout } = useAuthStore();
  const menus = useGetMenus();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <ProLayout
      fixSiderbar={true}
      layout="mix"
      title="O2O System Management"
      logo="/logo.png"
      menu={{
        request: async () => {
          return menus;
        },
      }}
      location={{
        pathname: location.pathname,
      }}
      onMenuHeaderClick={() => navigate("/")}
      menuItemRender={(item, dom) => (
        <div
          onClick={() => {
            if (item.path) {
              navigate(item.path);
            }
          }}
        >
          {dom}
        </div>
      )}
      avatarProps={{
        src:
          user?.avatar ||
          `https://avatar.iran.liara.run/public/boy?username=${user?.last_name}`,
        title: user?.last_name,
        size: "small",
        render: (_, dom) => {
          return (
            <Dropdown
              menu={{
                items: [
                  {
                    key: "logout",
                    icon: <LogoutOutlined />,
                    label: "Logout",
                    onClick: handleLogout,
                  },
                ],
              }}
            >
              {dom}
            </Dropdown>
          );
        },
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <div
            style={{
              textAlign: "center",
              paddingBlockStart: 12,
            }}
          >
            <div>© 2025 O2O</div>
            <div>by HASAKI & CLINIC</div>
          </div>
        );
      }}
    >
      <Outlet />
    </ProLayout>
  );
};

export default AppLayout;
