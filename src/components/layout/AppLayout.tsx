import React from "react";
import { Outlet } from "react-router-dom";
import { ProLayout } from "@ant-design/pro-components";
import { useAuthStore } from "@/stores/auth.store";
import { menuItems } from "@/config/menu";
import { Dropdown } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const AppLayout: React.FC = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <ProLayout
      title="O2O System Management"
      logo="/vite.svg"
      menu={{
        request: async () => menuItems,
      }}
      avatarProps={{
        src:
          user?.avatar ||
          "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
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
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [<div key="user-info">{user?.fullName}</div>];
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
      onMenuHeaderClick={(e) => console.log(e)}
      fixSiderbar={true}
      layout="mix"
    >
      <Outlet />
    </ProLayout>
  );
};

export default AppLayout;
