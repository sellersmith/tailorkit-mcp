import { ToolHandlersRegistry } from "../registry/ToolHandlersRegistry.js";
import { ServiceManager } from "../../services/index.js";

/**
 * Base handler registrar for service-specific handlers
 */
export abstract class ServiceHandlerRegistrar {
  protected registry: ToolHandlersRegistry;
  protected serviceManager: ServiceManager;

  constructor(registry: ToolHandlersRegistry, serviceManager: ServiceManager) {
    this.registry = registry;
    this.serviceManager = serviceManager;
  }

  /**
   * Register all service-specific handlers
   */
  abstract registerHandlers(): void;
}
