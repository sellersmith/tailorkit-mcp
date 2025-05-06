import createTemplateTool from "./createTemplateTool.js";
import getDetailTemplateTool from "./getDetailTemplateTool.js";
import getListLayersOfTemplateTool from "./getListLayersOfTemplateTool.js";
import getListTemplatesTool from "./getListTemplatesTool.js";

const TOOLS = [
  getListTemplatesTool,
  getDetailTemplateTool,
  createTemplateTool,
  getListLayersOfTemplateTool,
];

export { TOOLS };
