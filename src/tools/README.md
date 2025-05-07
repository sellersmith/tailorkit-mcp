# Tools Layer

The tools layer defines the MCP tools that are exposed to the model. It specifies the parameters, descriptions, and metadata for each tool.

## Directory Structure

```
tools/
├── constants.ts             # Tool name constants
├── index.ts                 # Exports all tools
├── getListTemplatesTool.ts  # Definition for get list templates tool
└── ...                      # Other tool definitions
```

## Tool Definition Pattern

Each tool follows a standard definition pattern:

```typescript
export const getListTemplatesTool = {
  name: "mcp_tailorkit-mcp_get_list_templates",
  description: "Get list templates with shop domain",
  parameters: {
    type: "object",
    properties: {
      shopDomain: {
        type: "string",
        description: "The shop domain ends with .myshopify.com",
      },
      // Other parameters...
    },
  },
};
```

## Tool Naming Convention

Tools follow a consistent naming convention:

```
mcp_tailorkit-mcp_<action>_<resource>
```

Examples:
- `mcp_tailorkit-mcp_get_list_templates`
- `mcp_tailorkit-mcp_get_detail_template`
- `mcp_tailorkit-mcp_create_template`

## Adding a New Tool

1. Create a new file for the tool definition (e.g., `newFeatureTool.ts`)
2. Define the tool with name, description, and parameter schema
3. Add the tool to the `TOOLS` array in `index.ts`
4. Create a corresponding handler in the handlers layer
5. Register the handler in the appropriate registrar

## Tool Registration

Tools are registered with the MCP server in the root `index.ts` file:

```typescript
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: TOOLS,
  };
});
```

## Relationship with Handlers

Each tool defined here has a corresponding handler in the handlers layer with the same name. When a tool is called, the MCP server routes the request to the handler with the matching name.
