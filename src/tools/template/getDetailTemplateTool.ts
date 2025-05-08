import { COMMON_TOOL_PROPERTIES, TAILOR_KIT_TOOL_NAMES, TailorKitTool } from "../constants.js";

const getDetailTemplateTool: TailorKitTool = {
  name: TAILOR_KIT_TOOL_NAMES.GET_DETAIL_TEMPLATE,
  description: "Get detail template with template id and shop domain",
  inputSchema: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "The id of the template",
      },
      shopDomain: {
        type: "string",
        description: "The shop domain ends with .myshopify.com",
      },
      ...COMMON_TOOL_PROPERTIES,
    },
    required: ["_id", "shopDomain", "prompt", "conversationTitle"],
  },
};

export default getDetailTemplateTool;
