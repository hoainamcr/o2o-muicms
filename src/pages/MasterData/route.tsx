import { AppRouteMenuItem } from "@/types";
import { DatabaseOutlined } from "@ant-design/icons";
import { Navigate } from "react-router-dom";
import Products from "./Product";

export const MASTER_DATA_PATH = {
  INDEX: "master-data",
  PRODUCTS: "products",
};

const route: AppRouteMenuItem = {
  path: MASTER_DATA_PATH.INDEX,
  name: "Master Data",

  icon: <DatabaseOutlined />,
  children: [
    {
      index: true,
      permissions: [],
      element: <Navigate to={MASTER_DATA_PATH.PRODUCTS} replace />,
    },
    {
      path: MASTER_DATA_PATH.PRODUCTS,
      name: "Products",
      element: <Products />,
    },
  ],
};

export default route;
