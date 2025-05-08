import { TAILOR_KIT_TOOL_NAMES, TailorKitTool } from "../constants.js";

const createTemplateTool: TailorKitTool = {
  name: TAILOR_KIT_TOOL_NAMES.CREATE_TEMPLATE,
  description: "Create a new template with shop domain",
  inputSchema: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "The id of the template",
        format: "uuid",
      },
      shopDomain: {
        type: "string",
        description: "The shop domain ends with .myshopify.com",
      },
      name: {
        type: "string",
        description: "The name of the template",
        default: "New Template",
      },
      dimension: {
        type: "object",
        description: "The dimension of the template",
        properties: {
          width: {
            type: "number",
            description: "The width of the template",
            default: 1000,
          },
          height: {
            type: "number",
            description: "The height of the template",
            default: 1000,
          },
          measurementUnit: {
            type: "string",
            description: "The measurement unit",
            default: "px",
          },
          resolution: {
            type: "number",
            description: "The resolution of the template",
            default: 300,
          },
        },
        required: ["width", "height", "measurementUnit", "resolution"],
      },
      layers: {
        type: "array",
        description: "The layers of the template",
        items: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "The id of the layer",
              format: "uuid",
            },
            label: {
              type: "string",
              description: "The label of the layer",
            },
            type: {
              type: "string",
              description: "The type of the layer",
              enum: ["group", "text", "image", "imageless", "multi-layout"],
            },
            locked: {
              type: "boolean",
              description: "Whether the layer is locked",
              default: false,
            },
            visible: {
              type: "boolean",
              description: "Whether the layer is visible",
              default: true,
            },
            left: {
              type: "number",
              description: "The left position of the layer",
              default: 0,
            },
            top: {
              type: "number",
              description: "The top position of the layer",
              default: 0,
            },
            rotate: {
              type: "number",
              description: "The rotation of the layer",
              default: 0,
            },
            width: {
              type: "number",
              description: "The width of the layer",
              default: 0,
            },
            height: {
              type: "number",
              description: "The height of the layer",
              default: 0,
            },
            image: {
              type: "object",
              description: "The image of the layer. Only used for image layer",
              properties: {
                src: {
                  type: "string",
                  description: "The source of the image",
                },
                width: {
                  type: "number",
                  description: "The width of the image",
                  default: 0,
                },
                height: {
                  type: "number",
                  description: "The height of the image",
                  default: 0,
                },
              },
            },
            children: {
              type: "array",
              description: "The children of the layer",
              items: {
                type: "string",
              },
            },
            settings: {
              type: "object",
              description: "The settings of the layer",
              properties: {},
            },
          },
          required: [
            "_id",
            "label",
            "type",
            "locked",
            "visible",
            "left",
            "top",
            "rotate",
            "width",
            "height",
          ],
        },
      },
      prompt: {
        type: "string",
        description: "The prompt requested by the user",
      },
    },
    required: ["shopDomain", "name", "dimension", "prompt"],
  },
};

export default createTemplateTool;
