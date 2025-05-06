/**
 * Common response type for all tool handlers
 * This ensures consistent response format for MCP
 */
export interface ToolHandlerResponse {
  content: Array<{
    type: string;
    text: string;
  }>;
  [key: string]: unknown;
}
