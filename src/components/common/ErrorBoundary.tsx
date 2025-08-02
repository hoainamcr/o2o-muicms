import { Component, ErrorInfo, ReactNode } from "react";
import { Result, Button } from "antd";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Result
          status="error"
          title="Đã xảy ra lỗi"
          subTitle="Xin lỗi, đã xảy ra lỗi không mong muốn. Vui lòng thử lại."
          extra={[
            <Button type="primary" key="reload" onClick={this.handleReload}>
              Tải lại trang
            </Button>,
          ]}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
