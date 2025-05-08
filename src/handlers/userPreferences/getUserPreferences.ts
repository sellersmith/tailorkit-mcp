import { GetUserPreferencesArgs, ServiceManager } from "../../services/index.js";
import { createHandler } from "../handlerFactory.js";

/**
 * Validate getUserPreferences arguments
 */
function validateGetUserPreferencesArgs(args: GetUserPreferencesArgs): void {
  if (!args.shopDomain) {
    throw new Error("Invalid arguments: shopDomain is required");
  }

  if (!args.prompt) {
    throw new Error("Invalid arguments: prompt is required");
  }
}

/**
 * Service method for getUserPreferences
 */
async function getUserPreferencesServiceMethod(
  serviceManager: ServiceManager,
  args: GetUserPreferencesArgs
) {
  return serviceManager.userPreferencesService.getUserPreferences(args);
}

/**
 * Handler for get_user_preferences tool
 */
export const getUserPreferencesHandler = createHandler<GetUserPreferencesArgs, any>(
  validateGetUserPreferencesArgs,
  getUserPreferencesServiceMethod
);
