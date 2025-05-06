import { TailorKitClient } from "../../sdk.js";
import { GetTemplateArgs } from "../../types/index.js";
import { ToolHandlerResponse } from "./types.js";

/**
 * Handler for get_detail_template tool
 * @param client - The TailorKit client instance
 * @param args - The tool arguments
 * @returns The handler result
 */
export async function getDetailTemplateHandler(
  client: TailorKitClient,
  args: unknown
): Promise<ToolHandlerResponse> {
  const typedArgs = args as GetTemplateArgs;

  if (!typedArgs._id || !typedArgs.shopDomain) {
    throw new Error("Invalid arguments: _id and shopDomain are required");
  }

  const detailTemplate = await client.getDetailTemplate(typedArgs);

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(detailTemplate),
      },
    ],
  };
}
