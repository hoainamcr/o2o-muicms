import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { message } from "antd";

// Generic hook for GET requests
export const useApiQuery = <T>(
  key: string[],
  fetcher: () => Promise<T>,
  options?: {
    enabled?: boolean;
    refetchOnWindowFocus?: boolean;
    retry?: number;
  }
) => {
  return useQuery({
    queryKey: key,
    queryFn: fetcher,
    enabled: options?.enabled ?? true,
    refetchOnWindowFocus: options?.refetchOnWindowFocus ?? false,
    retry: options?.retry ?? 1,
  });
};

// Generic hook for mutations (POST, PUT, DELETE)
export const useApiMutation = <TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: {
    onSuccess?: (data: TData) => void;
    onError?: (error: any) => void;
    successMessage?: string;
    errorMessage?: string;
    invalidateQueries?: string[][];
  }
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (data) => {
      if (options?.successMessage) {
        message.success(options.successMessage);
      }

      if (options?.invalidateQueries) {
        options.invalidateQueries.forEach((queryKey) => {
          queryClient.invalidateQueries({ queryKey });
        });
      }

      options?.onSuccess?.(data);
    },
    onError: (error) => {
      if (options?.errorMessage) {
        message.error(options.errorMessage);
      }
      options?.onError?.(error);
    },
  });
};

// Hook for paginated queries
export const usePaginatedQuery = <T>(
  key: string[],
  fetcher: (page: number, pageSize: number) => Promise<T>,
  page: number = 1,
  pageSize: number = 10,
  options?: {
    enabled?: boolean;
  }
) => {
  return useApiQuery(
    [...key, page.toString(), pageSize.toString()],
    () => fetcher(page, pageSize),
    {
      enabled: options?.enabled ?? true,
    }
  );
};
