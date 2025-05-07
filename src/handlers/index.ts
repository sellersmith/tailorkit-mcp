import { TailorKitClient } from "../../sdk.js";
import { ToolHandlersRegistry } from "./registry/ToolHandlersRegistry.js";
import {
  TemplateHandlerRegistrar,
  LayerHandlerRegistrar,
  IntegrationHandlerRegistrar,
  UserPreferencesHandlerRegistrar
} from "./registrars/index.js";
import { ServiceManager } from "../services/index.js";

/**
 * Initialize and register all tool handlers
 * @param client - The TailorKit client instance
 * @returns The populated handler registry
 */
export function initializeToolHandlers(client: TailorKitClient): ToolHandlersRegistry {
  const registry = new ToolHandlersRegistry();
  const serviceManager = ServiceManager.getInstance(client.getBaseClient());

  // Register handlers by service type
  const registrars = [
    new TemplateHandlerRegistrar(registry, serviceManager),
    new LayerHandlerRegistrar(registry, serviceManager),
    new IntegrationHandlerRegistrar(registry, serviceManager),
    new UserPreferencesHandlerRegistrar(registry, serviceManager),
  ];

  // Register all handlers from each service registrar
  registrars.forEach(registrar => registrar.registerHandlers());

  return registry;
}
