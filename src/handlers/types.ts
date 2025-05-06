/**
 * Common response type for all tool handlers
 * This ensures consistent response format for MCP
 */
export interface ToolHandlerResponse {
  success: boolean;
  data?: any;
  error?: string;
}

/**
 * Type definition for tool handlers
 */
export type ToolHandler = (args: unknown) => Promise<ToolHandlerResponse>;
