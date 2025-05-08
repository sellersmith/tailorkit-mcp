import createTemplateTool from "./template/createTemplateTool.js";
import getDetailTemplateTool from "./template/getDetailTemplateTool.js";
import getListLayersOfTemplateTool from "./layer/getListLayersOfTemplateTool.js";
import getListTemplatesTool from "./template/getListTemplatesTool.js";
import getDetailProductTool from "./shopify/products/getDetailProductTool.js";
import { getListProductsTool } from "./shopify/products/index.js";
import getUserPreferencesTool from "./userPreferences/getUserPreferencesTool.js";

const TOOLS = [
  getListTemplatesTool,
  getDetailTemplateTool,
  createTemplateTool,
  getListLayersOfTemplateTool,
  getListProductsTool,
  getDetailProductTool,
  getUserPreferencesTool,
];

export { TOOLS };
