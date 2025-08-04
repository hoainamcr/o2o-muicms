import { apiService } from "@/config";
import { ProductResponse } from "./product.interface";
import { useApiQuery } from "@/hooks/useApi";

class ProductService {
  async getProducts(page: number, pageSize: number): Promise<ProductResponse> {
    return (await apiService.get<ProductResponse>("/planogram/products", {
      params: {
        page: page.toString(),
        size: pageSize.toString(),
      },
    })) as unknown as ProductResponse;
  }
}

export const useGetProducts = (page: number, pageSize: number) => {
  return useApiQuery<ProductResponse>(
    ["products", page.toString(), pageSize.toString()],
    () => ProductService.prototype.getProducts(page, pageSize)
  );
};

export default new ProductService();
