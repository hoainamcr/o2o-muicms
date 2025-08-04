import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import { useGetProducts } from "@/services/masterDataService/product.services";
import { Product } from "@/services/masterDataService/product.interface";

const columns: TableProps<Product>["columns"] = [
  {
    title: "Product Name",
    dataIndex: "product_name",
    key: "product_name",
  },
  {
    title: "Category",
    dataIndex: "category_name",
    key: "category_name",
  },
  {
    title: "Brand",
    dataIndex: "brand_name",
    key: "brand_name",
  },
  {
    title: "Status",
    key: "status_name",
    dataIndex: "status_name",
  },
  {
    title: "Created At",
    key: "created_at",
    dataIndex: "created_at",
  },
  {
    title: "Created By",
    key: "created_by",
    dataIndex: "created_by",
  },
];

const App: React.FC = () => {
  const page = 1;
  const pageSize = 20;

  const { data, isLoading } = useGetProducts(page, pageSize);
  return (
    <Table<Product>
      rowKey={(record) => record.product_id.toString()}
      columns={columns}
      loading={isLoading}
      dataSource={data?.records}
      pagination={{
        total: data?.count,
        pageSize: pageSize,
        current: page,
      }}
    />
  );
};

export default App;
