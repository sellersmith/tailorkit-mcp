import { TailorKitClient } from "../../sdk.js";
import { TailorKitToolName } from "../../tools.js";
import { getListTemplatesHandler } from "./getListTemplates.js";
import { getDetailTemplateHandler } from "./getDetailTemplate.js";
import { createTemplateHandler } from "./createTemplate.js";
import { getListLayersOfTemplateHandler } from "./getListLayersOfTemplate.js";
import { ToolHandlerResponse } from "./types.js";

/**
 * Type definition for tool handlers
 */
export type ToolHandler = (args: unknown) => Promise<ToolHandlerResponse>;

/**
 * Tool handler registry using Factory Pattern
 */
export class ToolHandlersRegistry {
  private registry: Map<TailorKitToolName, ToolHandler> = new Map();

  /**
   * Register a tool handler
   * @param toolName - The name of the tool
   * @param handler - The handler function
   */
  register(toolName: TailorKitToolName, handler: ToolHandler): void {
    this.registry.set(toolName, handler);
  }

  /**
   * Get a tool handler by name
   * @param toolName - The name of the tool
   * @returns The handler function
   * @throws Error if handler is not found
   */
  getHandler(toolName: TailorKitToolName): ToolHandler {
    const handler = this.registry.get(toolName);
    if (!handler) {
      throw new Error(`Handler not found for tool: ${toolName}`);
    }
    return handler;
  }

  /**
   * Check if a handler exists for a tool
   * @param toolName - The name of the tool
   * @returns Whether a handler exists
   */
  hasHandler(toolName: string): boolean {
    return this.registry.has(toolName as TailorKitToolName);
  }
}

/**
 * Initialize and register all tool handlers
 * @param client - The TailorKit client instance
 * @returns The populated handler registry
 */
export function initializeToolHandlers(client: TailorKitClient): ToolHandlersRegistry {
  const registry = new ToolHandlersRegistry();

  // Register all handlers
  registry.register("get_list_templates", (args: unknown) =>
    getListTemplatesHandler(client, args)
  );

  registry.register("get_detail_template", (args: unknown) =>
    getDetailTemplateHandler(client, args)
  );

  registry.register("create_template", (args: unknown) =>
    createTemplateHandler(client, args)
  );

  registry.register("get_list_layers_of_template", (args: unknown) =>
    getListLayersOfTemplateHandler(client, args)
  );

  return registry;
}
