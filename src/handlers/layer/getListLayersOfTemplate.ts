import { GetListLayersOfTemplateArgs } from "../../../types/index.js";
import { ServiceManager } from "../../services/index.js";
import { validateCommonToolArgs } from "../common.js";
import { createHandler } from "../handlerFactory.js";

/**
 * Validate getListLayersOfTemplate arguments
 */
function validateGetListLayersOfTemplateArgs(args: GetListLayersOfTemplateArgs): void {
  if (!args._id) {
    throw new Error("Invalid arguments: _id is required");
  }

  validateCommonToolArgs(args);
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
