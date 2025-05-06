import { TailorKitClient } from "../../sdk.js";
import { GetListTemplatesArgs } from "../../types/index.js";
import { ToolHandlerResponse } from "./types.js";

/**
 * Handler for get_list_templates tool
 * @param client - The TailorKit client instance
 * @param args - The tool arguments
 * @returns The handler result
 */
export async function getListTemplatesHandler(
  client: TailorKitClient,
  args: unknown
): Promise<ToolHandlerResponse> {
  const typedArgs = args as GetListTemplatesArgs;

  if (!typedArgs.shopDomain) {
    throw new Error("Invalid arguments: shopDomain is required");
  }

  const listTemplates = await client.getListTemplates(typedArgs);

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(listTemplates),
      },
    ],
  };
}
