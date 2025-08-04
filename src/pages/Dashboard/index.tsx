import React from "react";
import { PageContainer } from "@ant-design/pro-components";
import { Card, Row, Col, Statistic } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

const Dashboard: React.FC = () => {
  return (
    <PageContainer title="Dashboard" subTitle="Tổng quan hệ thống">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Tổng người dùng"
              value={1128}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Đơn hàng hôm nay"
              value={93}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: "#cf1322" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Doanh thu tháng"
              value={11280}
              prefix={<DollarOutlined />}
              suffix="VNĐ"
              valueStyle={{ color: "#1890ff" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Tài liệu mới"
              value={28}
              prefix={<FileTextOutlined />}
              valueStyle={{ color: "#722ed1" }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
        <Col xs={24} lg={12}>
          <Card title="Hoạt động gần đây">
            <p>Chưa có dữ liệu</p>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Thống kê">
            <p>Chưa có dữ liệu</p>
          </Card>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default Dashboard;
