import { GetListTemplatesArgs } from "../../types/index.js";
import { ToolHandlerResponse } from "./types.js";
import { ServiceManager } from "../services/ServiceManager.js";
import { createHandler } from "./handlerFactory.js";

/**
 * Validate getListTemplates arguments
 */
function validateGetListTemplatesArgs(args: GetListTemplatesArgs): void {
  if (!args.shopDomain) {
    throw new Error("Invalid arguments: shopDomain is required");
  }
}

/**
 * Service method for getListTemplates
 */
async function getListTemplatesServiceMethod(
  serviceManager: ServiceManager,
  args: GetListTemplatesArgs
) {
  return serviceManager.templateService.getTemplates(args);
}

/**
 * Handler for get_list_templates tool
 */
export const getListTemplatesHandler = createHandler<GetListTemplatesArgs, any>(
  validateGetListTemplatesArgs,
  getListTemplatesServiceMethod
);
