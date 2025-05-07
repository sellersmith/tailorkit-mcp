import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import type { CallToolRequest } from "@modelcontextprotocol/sdk/types.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { TailorKitClient } from "./sdk.js";
import { TOOLS } from "./src/tools/index.js";
import { initializeToolHandlers } from "./src/handlers/index.js";

async function main() {
  const host = process.env.HOST;
  const accessToken = process.env.ACCESS_TOKEN;

  if (!host || !accessToken) {
    console.error("Please set HOST and ACCESS_TOKEN environment variables");
    process.exit(1);
  }

  console.error("Starting TailorKit MCP Server...");
  const server = new Server(
    {
      name: "TailorKit MCP Server",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );

  const tailorKitClient = new TailorKitClient(host, accessToken);

  // Initialize the tool handlers registry with the TailorKit client
  const toolHandlersRegistry = initializeToolHandlers(tailorKitClient);
  console.error("Tool handlers registry initialized.");

  server.setRequestHandler(
    CallToolRequestSchema,
    async (request: CallToolRequest) => {
      try {
        console.error(`Received tool call request for tool: ${request.params.name}`);

        if (!request.params.arguments) {
          throw new Error("No arguments provided");
        }

        const toolName = request.params.name as string;
        console.error(`Looking up handler for tool: ${toolName}`);

        // Check if the tool exists in the registry
        if (!toolHandlersRegistry.hasHandler(toolName)) {
          console.error(`Handler not found for tool: ${toolName}`);
          throw new Error(`Unknown tool: ${toolName}`);
        }

        console.error(`Found handler for tool: ${toolName}`);

        // Get the handler for the tool from the registry
        const handler = toolHandlersRegistry.getHandler(toolName);

        // Execute the handler with arguments
        console.error(`Executing handler for tool: ${toolName}`);
        const result = await handler(request.params.arguments);
        console.error(`Handler execution completed for tool: ${toolName}`);
        console.error(`Result: ${JSON.stringify(result)}`);

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result.data || {}),
            },
          ],
        };
      } catch (error) {
        console.error("Error executing tool:", error);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify({
                error: error instanceof Error ? error.message : String(error),
              }),
            },
          ],
        };
      }
    }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    console.error("Received ListToolsRequest");
    console.error(`Available tools: ${TOOLS.map(tool => tool.name).join(', ')}`);
    return {
      tools: TOOLS,
    };
  });

  const transport = new StdioServerTransport();
  console.error("Connecting server to transport...");
  await server.connect(transport);
  console.error("TailorKit MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
