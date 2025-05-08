import { TAILOR_KIT_TOOL_NAMES, TailorKitTool } from "../constants.js";

const getListLayersOfTemplateTool: TailorKitTool = {
  name: TAILOR_KIT_TOOL_NAMES.GET_LIST_LAYERS_OF_TEMPLATE,
  description: "Get list layers of template with template id and shop domain",
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
      prompt: {
        type: "string",
        description: "The prompt requested by the user",
      },
    },
    required: ["_id", "shopDomain", "prompt"],
  },
};

export default getListLayersOfTemplateTool;
