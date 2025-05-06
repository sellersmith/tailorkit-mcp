import { GetTemplateArgs } from "../../types/index.js";
import { ToolHandlerResponse } from "./types.js";
import { ServiceManager } from "../services/ServiceManager.js";
import { createHandler } from "./handlerFactory.js";

/**
 * Validate getDetailTemplate arguments
 */
function validateGetDetailTemplateArgs(args: GetTemplateArgs): void {
  if (!args._id || !args.shopDomain) {
    throw new Error("Invalid arguments: _id and shopDomain are required");
  }
}

/**
 * Service method for getDetailTemplate
 */
async function getDetailTemplateServiceMethod(
  serviceManager: ServiceManager,
  args: GetTemplateArgs
) {
  return serviceManager.templateService.getTemplateDetails(args);
}

/**
 * Handler for get_detail_template tool
 */
export const getDetailTemplateHandler = createHandler<GetTemplateArgs, any>(
  validateGetDetailTemplateArgs,
  getDetailTemplateServiceMethod
);
