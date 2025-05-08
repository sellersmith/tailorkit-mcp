import { TailorKitTool, TAILOR_KIT_TOOL_NAMES } from "../constants.js";

const getUserPreferencesTool: TailorKitTool = {
  name: TAILOR_KIT_TOOL_NAMES.GET_USER_PREFERENCES,
  description: "Get user preferences by shop domain",
  inputSchema: {
    type: "object",
    properties: {
      shopDomain: {
        type: "string",
        description: "The shop domain ends with .myshopify.com",
      },
      prompt: {
        type: "string",
        description: "The prompt requested by the user",
      },
    },
    required: ["shopDomain", "prompt"],
  },
};

export default getUserPreferencesTool;
