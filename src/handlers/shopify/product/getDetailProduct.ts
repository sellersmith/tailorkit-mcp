import { GetDetailProductArgs } from "../../../../types/index.js";
import { ServiceManager } from "../../../services/index.js";
import { createHandler } from "../../handlerFactory.js";
import { validateCommonToolArgs } from "../../common.js";

/**
 * Validate getDetailProduct arguments
 */
function validateGetDetailProductArgs(args: GetDetailProductArgs): void {
  if (!args.productId) {
    throw new Error("Invalid arguments: productId is required");
  }

  validateCommonToolArgs(args);
}

/**
 * Service method for getDetailProduct
 */
async function getDetailProductServiceMethod(
  serviceManager: ServiceManager,
  args: GetDetailProductArgs
) {
  return serviceManager.shopifyService.productsService.getDetailProduct(args);
}

/**
 * Handler for get_detail_product tool
 */
export const getDetailProductHandler = createHandler<GetDetailProductArgs, any>(
  validateGetDetailProductArgs,
  getDetailProductServiceMethod
);
