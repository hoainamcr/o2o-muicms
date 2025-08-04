import { apiService } from "@/config";
import { ProductResponse } from "./product.interface";

class ProductService {
  async getProducts(): Promise<ProductResponse> {
    const response = await apiService.get<ProductResponse>(
      "/planogram/products",
      {
        params: {
          page: 1,
          size: 10,
        },
      }
    );
    return response as unknown as ProductResponse;
  }
}

export default new ProductService();
