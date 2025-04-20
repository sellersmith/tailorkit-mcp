import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import type { CallToolRequest } from "@modelcontextprotocol/sdk/types.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { TailorKitClient } from "./sdk.js";
import { TOOLS } from "./tools.js";
import {
  CreateTemplateArgs,
  GetListLayersOfTemplateArgs,
  GetListTemplatesArgs,
  GetTemplateArgs,
} from "./types.js";

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

  server.setRequestHandler(
    CallToolRequestSchema,
    async (request: CallToolRequest) => {
      try {
        if (!request.params.arguments) {
          throw new Error("No arguments provided");
        }

        switch (request.params.name) {
          case "get_list_templates": {
            const args = request.params
              .arguments as unknown as GetListTemplatesArgs;

            if (!args.shopDomain) {
              throw new Error("Invalid arguments");
            }

            const listTemplates = await tailorKitClient.getListTemplates(args);

            return {
              content: [
                {
                  type: "text",
                  text: JSON.stringify(listTemplates),
                },
              ],
            };
          }

          case "get_detail_template": {
            const args = request.params.arguments as unknown as GetTemplateArgs;

            if (!args._id || !args.shopDomain) {
              throw new Error("Invalid arguments");
            }

            const detailTemplate = await tailorKitClient.getDetailTemplate(
              args
            );
            return {
              content: [
                {
                  type: "text",
                  text: JSON.stringify(detailTemplate),
                },
              ],
            };
          }

          case "create_template": {
            const args = request.params
              .arguments as unknown as CreateTemplateArgs;

            if (!args.shopDomain || !args.name || !args.dimension) {
              throw new Error("Invalid arguments");
            }

            const createdTemplate = await tailorKitClient.createTemplate(args);

            return {
              content: [
                { type: "text", text: JSON.stringify(createdTemplate) },
              ],
            };
          }

          case "get_list_layers_of_template": {
            const args = request.params
              .arguments as unknown as GetListLayersOfTemplateArgs;

            if (!args._id || !args.shopDomain) {
              throw new Error("Invalid arguments");
            }

            const listLayersOfTemplate =
              await tailorKitClient.getListLayersOfTemplate(args);

            return {
              content: [
                {
                  type: "text",
                  text: JSON.stringify(listLayersOfTemplate),
                },
              ],
            };
          }

          default:
            throw new Error(`Unknown tool: ${request.params.name}`);
        }
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
