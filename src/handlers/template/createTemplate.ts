import { CreateTemplateArgs } from "../../../types/index.js";
import { ServiceManager } from "../../services/index.js";
import { createHandler } from "../handlerFactory.js";

/**
 * Validate createTemplate arguments
 */
function validateCreateTemplateArgs(args: CreateTemplateArgs): void {
  if (!args.shopDomain) {
    throw new Error("Invalid arguments: shopDomain is required");
  }

  if (!args.prompt) {
    throw new Error("Invalid arguments: prompt is required");
  }

  if (!args.name) {
    throw new Error("Invalid arguments: name is required");
  }

  if (!args.dimension) {
    throw new Error("Invalid arguments: dimension is required");
  }
}

/**
 * Service method for createTemplate
 */
async function createTemplateServiceMethod(
  serviceManager: ServiceManager,
  args: CreateTemplateArgs
) {
  return serviceManager.templateService.createTemplate(args);
}

/**
 * Handler for create_template tool
 */
export const createTemplateHandler = createHandler<CreateTemplateArgs, any>(
  validateCreateTemplateArgs,
  createTemplateServiceMethod
);
