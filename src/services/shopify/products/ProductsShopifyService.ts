import { GetDetailProductArgs, GetListProductsArgs } from "../../../../types/index.js";
import { TailorKitBaseClient } from "../../../core/TailorKitBaseClient.js";
import { API_ENDPOINTS } from "../../constants.js";

/**
 * Template data response interface
 */
export interface ProductsShopifyResponse<T> {
  data: T | null;
  error: Error | null;
}

/**
 * Template service for handling template operations
 */
export class ProductsShopifyService {
  private client: TailorKitBaseClient;

  /**
   * Create a new TemplateService
   * @param client - The TailorKit base client
   */
  constructor(client: TailorKitBaseClient) {
    this.client = client;
  }

  /**
   * Get list products from Shopify
   * @param args - The arguments for the get list products
   * @returns The list products
   */
  async getListProducts<T = any>(args: GetListProductsArgs): Promise<ProductsShopifyResponse<T>> {
    try {
      const data = await this.client.post<GetListProductsArgs, T>(API_ENDPOINTS.SHOPIFY.PRODUCT.GET_LIST_PRODUCTS, args);
      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error(String(error))
      };
    }
  }

  /**
   * Get detail product from Shopify
   * @param args - The arguments for the get detail product
   * @returns The detail product
   */
  async getDetailProduct<T = any>(args: GetDetailProductArgs): Promise<ProductsShopifyResponse<T>> {
    try {
      const data = await this.client.post<GetDetailProductArgs, T>(API_ENDPOINTS.SHOPIFY.PRODUCT.GET_DETAIL_PRODUCT, args);
      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: error instanceof Error ? error : new Error(String(error))
      };
    }
  }
}
