import { apiService } from "@/config";
import { ProductRequest, ProductResponse } from "./product.interface";
import { useApiQuery } from "@/hooks/useApi";

class ProductService {
  async getProducts(params: ProductRequest): Promise<ProductResponse> {
    return (await apiService.get<ProductResponse>("/planogram/products", {
      params,
    })) as unknown as ProductResponse;
  }
}

export const useGetProducts = (params: ProductRequest) => {
  return useApiQuery<ProductResponse>(
    ["products", JSON.stringify(params)],
    () => ProductService.prototype.getProducts(params)
  );
};

export default new ProductService();
