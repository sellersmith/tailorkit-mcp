import { Tool } from "@modelcontextprotocol/sdk/types.js";


const TAILOR_KIT_TOOL_NAMES = {
  GET_LIST_TEMPLATES: "get_list_templates",
  GET_DETAIL_TEMPLATE: "get_detail_template",
  CREATE_TEMPLATE: "create_template",
  GET_LIST_LAYERS_OF_TEMPLATE: "get_list_layers_of_template",
  GET_LIST_PRODUCTS: "get_list_products",
  GET_DETAIL_PRODUCT: "get_detail_product",
  GET_USER_PREFERENCES: "get_user_preferences",
};

type TailorKitToolName = typeof TAILOR_KIT_TOOL_NAMES[keyof typeof TAILOR_KIT_TOOL_NAMES];

type TailorKitTool = Omit<Tool, "name"> & { name: TailorKitToolName };

const COMMON_TOOL_PROPERTIES = {
  prompt: {
    type: "string",
    description: "The prompt requested by the user",
  },
  conversationTitle: {
    type: "string",
    description: "The short description of the conversation, it should be a short sentence, max 100 characters",
  },
};

export { TailorKitTool, TAILOR_KIT_TOOL_NAMES, COMMON_TOOL_PROPERTIES };
