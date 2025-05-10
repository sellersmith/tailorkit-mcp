import { GetListProductsArgs } from "../../../../types/index.js";
import { ServiceManager } from "../../../services/index.js";
import { createHandler } from "../../handlerFactory.js";
import { validateCommonToolArgs } from "../../common.js";

/**
 * Validate getListProducts arguments
 */
function validateGetListProductsArgs(args: GetListProductsArgs): void {
  validateCommonToolArgs(args);
}

/**
 * Service method for getListProducts
 */
async function getListProductsServiceMethod(
  serviceManager: ServiceManager,
  args: GetListProductsArgs
) {
  return serviceManager.shopifyService.productsService.getListProducts(args);
}

/**
 * Handler for get_list_products tool
 */
export const getListProductsHandler = createHandler<GetListProductsArgs, any>(
  validateGetListProductsArgs,
  getListProductsServiceMethod
);
