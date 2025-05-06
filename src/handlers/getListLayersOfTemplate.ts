import { GetListLayersOfTemplateArgs } from "../../types/index.js";
import { ToolHandlerResponse } from "./types.js";
import { ServiceManager } from "../services/ServiceManager.js";
import { createHandler } from "./handlerFactory.js";

/**
 * Validate getListLayersOfTemplate arguments
 */
function validateGetListLayersOfTemplateArgs(args: GetListLayersOfTemplateArgs): void {
  if (!args._id || !args.shopDomain) {
    throw new Error("Invalid arguments: _id and shopDomain are required");
  }
}

/**
 * Service method for getListLayersOfTemplate
 */
async function getListLayersOfTemplateServiceMethod(
  serviceManager: ServiceManager,
  args: GetListLayersOfTemplateArgs
) {
  return serviceManager.layerService.getListLayersOfTemplate(args);
}

/**
 * Handler for get_list_layers_of_template tool
 */
export const getListLayersOfTemplateHandler = createHandler<GetListLayersOfTemplateArgs, any>(
  validateGetListLayersOfTemplateArgs,
  getListLayersOfTemplateServiceMethod
);
