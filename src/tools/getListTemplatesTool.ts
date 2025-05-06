import { TailorKitTool } from "./constants.js";

const getListTemplatesTool: TailorKitTool = {
  name: "get_list_templates",
  description: "Get list templates with shop domain",
  inputSchema: {
    type: "object",
    properties: {
      shopDomain: {
        type: "string",
        description: "The shop domain ends with .myshopify.com",
      },
      limit: {
        type: "number",
        description: "The limit of the templates",
        default: 5,
      },
      page: {
        type: "number",
        description: "The page number",
        default: 1,
      },
      sort: {
        type: "string",
        description: "The sort order",
        default: "updatedAt__desc",
      },
      filter: {
        type: "string",
        description: "The filter",
        format: "string__has__",
      },
    },
  },
};

export default getListTemplatesTool;
