import { TailorKitBaseClient } from "../../core/TailorKitBaseClient.js";
import { ProductsShopifyService } from "./products/ProductsShopifyService.js";

/**
 * ShopifyService class to manage all Shopify-related services
 */
export class ShopifyService {
  private client: TailorKitBaseClient;
  private _productsService: ProductsShopifyService;

  /**
   * Create a new ShopifyService
   * @param client - The TailorKit base client
   */
  constructor(client: TailorKitBaseClient) {
    this.client = client;
    this._productsService = new ProductsShopifyService(this.client);
  }

  /**
   * Get the products service
   * @returns The products service
   */
  public get productsService(): ProductsShopifyService {
    return this._productsService;
  }
}
