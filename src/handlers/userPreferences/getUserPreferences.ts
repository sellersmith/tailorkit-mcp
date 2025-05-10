import { GetUserPreferencesArgs } from "../../../types/index.js";
import { ServiceManager } from "../../services/index.js";
import { createHandler } from "../handlerFactory.js";
import { validateCommonToolArgs } from "../common.js";

/**
 * Validate getUserPreferences arguments
 */
function validateGetUserPreferencesArgs(args: GetUserPreferencesArgs): void {
  validateCommonToolArgs(args);
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
