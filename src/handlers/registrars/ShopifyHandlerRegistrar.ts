import { ServiceHandlerRegistrar } from "./ServiceHandlerRegistrar.js";
import { getListProductsHandler, getDetailProductHandler } from "../shopify/index.js";
import { TAILOR_KIT_TOOL_NAMES } from "../../tools/constants.js";

/**
 * Shopify service handler registrar
 */
export class ShopifyHandlerRegistrar extends ServiceHandlerRegistrar {
  /**
   * Register handlers for Shopify tools
   */
  registerHandlers(): void {
    // Register handler for get list products
    this.registry.register(
      TAILOR_KIT_TOOL_NAMES.GET_LIST_PRODUCTS,
      (args: unknown) => getListProductsHandler(this.serviceManager, args)
    );

    // Register handler for get detail product
    this.registry.register(
      TAILOR_KIT_TOOL_NAMES.GET_DETAIL_PRODUCT,
      (args: unknown) => getDetailProductHandler(this.serviceManager, args)
    );
  }
}
