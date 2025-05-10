import { GetTemplateArgs } from "../../../types/index.js";
import { ServiceManager } from "../../services/index.js";
import { createHandler } from "../handlerFactory.js";
import { validateCommonToolArgs } from "../common.js";

/**
 * Validate getDetailTemplate arguments
 */
function validateGetDetailTemplateArgs(args: GetTemplateArgs): void {
  if (!args._id) {
    throw new Error("Invalid arguments: _id is required");
  }

  validateCommonToolArgs(args);
}

/**
 * Service method for getDetailTemplate
 */
async function getDetailTemplateServiceMethod(
  serviceManager: ServiceManager,
  args: GetTemplateArgs
) {
  return serviceManager.templateService.getDetailTemplate(args);
}

/**
 * Handler for get_detail_template tool
 */
export const getDetailTemplateHandler = createHandler<GetTemplateArgs, any>(
  validateGetDetailTemplateArgs,
  getDetailTemplateServiceMethod
);
