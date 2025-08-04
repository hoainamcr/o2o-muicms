import { Button, Result } from "antd";

const statusData = {
  "404": {
    title: "404",
    subTitle: "Sorry, the page you visited does not exist.",
  },
  "403": {
    title: "403",
    subTitle: "Sorry, you are not authorized to access this page.",
  },
  "500": {
    title: "500",
    subTitle: "Sorry, something went wrong.",
  },
};

export default () => {
  const status = "404";
  return (
    <Result
      status={statusData[status]?.title as any}
      title={statusData[status]?.title}
      subTitle={statusData[status]?.subTitle}
      extra={<Button type="primary">Back Home</Button>}
    />
  );
};
