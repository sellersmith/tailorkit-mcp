import { ServiceHandlerRegistrar } from "./ServiceHandlerRegistrar.js";
import { getUserPreferencesHandler } from "../userPreferences/getUserPreferences.js";
import { TAILOR_KIT_TOOL_NAMES } from "../../tools/constants.js";

/**
 * User preferences service handler registrar
 */
export class UserPreferencesHandlerRegistrar extends ServiceHandlerRegistrar {
  registerHandlers(): void {
    this.registry.register(
      TAILOR_KIT_TOOL_NAMES.GET_USER_PREFERENCES,
      (args: unknown) => getUserPreferencesHandler(this.serviceManager, args)
    );
  }
}
