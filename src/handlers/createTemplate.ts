import { TailorKitClient } from "../../sdk.js";
import { CreateTemplateArgs } from "../../types/index.js";
import { ToolHandlerResponse } from "./types.js";

/**
 * Handler for create_template tool
 * @param client - The TailorKit client instance
 * @param args - The tool arguments
 * @returns The handler result
 */
export async function createTemplateHandler(
  client: TailorKitClient,
  args: unknown
): Promise<ToolHandlerResponse> {
  const typedArgs = args as CreateTemplateArgs;

  if (!typedArgs.shopDomain || !typedArgs.name || !typedArgs.dimension) {
    throw new Error("Invalid arguments: shopDomain, name, and dimension are required");
  }

  const createdTemplate = await client.createTemplate(typedArgs);

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(createdTemplate)
      },
    ],
  };
}
