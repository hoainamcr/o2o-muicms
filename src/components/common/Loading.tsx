import React from "react";
import { Spin } from "antd";

interface LoadingProps {
  size?: "small" | "default" | "large";
  tip?: string;
  spinning?: boolean;
  children?: React.ReactNode;
}

const Loading: React.FC<LoadingProps> = ({
  size = "default",
  tip = "Đang tải...",
  spinning = true,
  children,
}) => {
  if (children) {
    return (
      <Spin size={size} tip={tip} spinning={spinning}>
        {children}
      </Spin>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
      }}
    >
      <Spin size={size} tip={tip} />
    </div>
  );
};

export default Loading;
