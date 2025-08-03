// Common types
export interface ApiResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
  code?: number;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

// Error types
export interface ApiError {
  message: string;
  code?: number;
  details?: any;
}
