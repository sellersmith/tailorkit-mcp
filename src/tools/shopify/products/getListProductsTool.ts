import { TAILOR_KIT_TOOL_NAMES, TailorKitTool } from "../../constants.js";
import { PRODUCT_SORT_KEYS } from "./constants.js";

const getListProductsTool: TailorKitTool = {
  name: TAILOR_KIT_TOOL_NAMES.GET_LIST_PRODUCTS,
  description: "Get list products from Shopify with shop domain",
  inputSchema: {
    type: "object",
    properties: {
      shopDomain: {
        type: "string",
        description: "The shop domain ends with .myshopify.com",
      },
      first: {
        type: "number",
        description: "The number of products to return",
        default: 10,
      },
      after: {
        type: "string",
        description: "The cursor to start from",
        default: undefined,
      },
      sortKey: {
        type: "string",
        description: "The sort key for the products",
        default: PRODUCT_SORT_KEYS.CREATED_AT,
        enum: Object.values(PRODUCT_SORT_KEYS),
      },
    },
    required: ["shopDomain"],
  },
};

export default getListProductsTool;
