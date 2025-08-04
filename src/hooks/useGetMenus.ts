import { MenuDataItem } from "@ant-design/pro-components";
import { AppRouteMenuItem } from "@/types";
import { routeMenuItem as routes } from "@/routes";

const useGetMenus = (): MenuDataItem[] => {
  // const { t } = useTranslation();
  // const { permissions: userPermissions, user } = useAuthStore.getState();

  const filterOutMenu = (menuItems: AppRouteMenuItem[]) => {
    return menuItems.filter(
      (menuItem) => !(menuItem.hideInMenu || menuItem.index || !menuItem.name)
    );
  };

  const getMenu = (menu: AppRouteMenuItem): MenuDataItem => {
    return {
      path: menu.path,
      name: menu.name,
      icon: menu.icon,
      // target: menu.target,
      children:
        menu.children && !menu.hideChildrenInMenu
          ? filterOutMenu(menu.children).map((child) => getMenu(child))
          : undefined,
      // permissions: menu.permissions,
    };
  };

  const menus = filterOutMenu(
    routes.find((r) => r.path === "/")?.children || []
  );

  return menus.map((route) => getMenu(route));
};

export default useGetMenus;
