import { ToolHandler } from "../types.js";

/**
 * Tool handler registry using Factory Pattern
 */
export class ToolHandlersRegistry {
  private registry: Map<string, ToolHandler> = new Map();

  /**
   * Register a tool handler
   * @param toolName - The name of the tool
   * @param handler - The handler function
   */
  register(toolName: string, handler: ToolHandler): void {
    this.registry.set(toolName, handler);
  }

  /**
   * Get a tool handler by name
   * @param toolName - The name of the tool
   * @returns The handler function
   * @throws Error if handler is not found
   */
  getHandler(toolName: string): ToolHandler {
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
    return this.registry.has(toolName);
  }
}
