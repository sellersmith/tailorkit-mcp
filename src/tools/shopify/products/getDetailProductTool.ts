import { TAILOR_KIT_TOOL_NAMES, TailorKitTool } from "../../constants.js";

const getDetailProductTool: TailorKitTool = {
  name: TAILOR_KIT_TOOL_NAMES.GET_DETAIL_PRODUCT,
  description: "Get detail product from Shopify with shop domain and product ID",
  inputSchema: {
    type: "object",
    properties: {
      shopDomain: {
        type: "string",
        description: "The shop domain ends with .myshopify.com",
      },
      productId: {
        type: "string",
        description: "The product ID",
      },
      prompt: {
        type: "string",
        description: "The prompt requested by the user",
      },
    },
    required: ["shopDomain", "productId", "prompt"],
  },
};

export default getDetailProductTool;
