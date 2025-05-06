import { TailorKitClient } from "../../sdk.js";
import { GetListLayersOfTemplateArgs } from "../../types/index.js";
import { ToolHandlerResponse } from "./types.js";

/**
 * Handler for get_list_layers_of_template tool
 * @param client - The TailorKit client instance
 * @param args - The tool arguments
 * @returns The handler result
 */
export async function getListLayersOfTemplateHandler(
  client: TailorKitClient,
  args: unknown
): Promise<ToolHandlerResponse> {
  const typedArgs = args as GetListLayersOfTemplateArgs;

  if (!typedArgs._id || !typedArgs.shopDomain) {
    throw new Error("Invalid arguments: _id and shopDomain are required");
  }

  const listLayersOfTemplate = await client.getListLayersOfTemplate(typedArgs);

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(listLayersOfTemplate),
      },
    ],
  };
}
