import { TailorKitTool } from "./constants.js";

const getDetailTemplateTool: TailorKitTool = {
  name: "get_detail_template",
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
    },
    required: ["_id", "shopDomain"],
  },
};

export default getDetailTemplateTool;
