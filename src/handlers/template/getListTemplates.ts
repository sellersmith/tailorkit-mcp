import { GetListTemplatesArgs } from "../../../types/index.js";
import { ServiceManager } from "../../services/index.js";
import { createHandler } from "../handlerFactory.js";
import { validateCommonToolArgs } from "../common.js";

/**
 * Validate getListTemplates arguments
 */
function validateGetListTemplatesArgs(args: GetListTemplatesArgs): void {
  validateCommonToolArgs(args);
}

/**
 * Service method for getListTemplates
 */
async function getListTemplatesServiceMethod(
  serviceManager: ServiceManager,
  args: GetListTemplatesArgs
) {
  return serviceManager.templateService.getListTemplates(args);
}

/**
 * Handler for get_list_templates tool
 */
export const getListTemplatesHandler = createHandler<GetListTemplatesArgs, any>(
  validateGetListTemplatesArgs,
  getListTemplatesServiceMethod
);
