# Tools Layer

## Overview

The Tools layer defines the MCP tools that are exposed to the AI model. It focuses on how tools are presented to and used by the Model Context Protocol (MCP) system.

## Key Characteristics

- **Tool definition**: Defines metadata and parameters for each tool
- **Schema-focused**: Specifies detailed parameter schemas and types
- **User-facing descriptions**: Provides clear descriptions for the AI model

## Components

### Tool Definitions

Each tool is defined with specific metadata:

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
      page: {
        type: "number",
        description: "The page number",
        default: 1,
      },
      limit: {
        type: "number",
        description: "The limit of the templates",
        default: 5,
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
```

### Tools Index

The `tools/index.ts` file exports all available tools:

```typescript
import { getListTemplatesTool } from "./getListTemplatesTool.js";
import { getDetailTemplateTool } from "./getDetailTemplateTool.js";
// ... other tool imports

export const TOOLS = [
  getListTemplatesTool,
  getDetailTemplateTool,
  // ... other tools
];
```

## Tool Naming Convention

Tools follow a naming convention:

```
mcp_tailorkit-mcp_<action>_<resource>
```

Examples:
- `mcp_tailorkit-mcp_get_list_templates`
- `mcp_tailorkit-mcp_get_detail_template`
- `mcp_tailorkit-mcp_create_template`

## Parameter Schema Guidelines

When defining parameter schemas:

1. Use descriptive names
2. Provide clear descriptions
3. Specify data types
4. Include default values where appropriate
5. Mark required parameters
6. Use formats for specialized input patterns

## Tool Registration

Tools are registered with the MCP system through the `ListToolsRequest` handler:

```typescript
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: TOOLS,
  };
});
```

## Adding a New Tool

When adding a new tool:

1. Create a new file in the tools directory (e.g., `newToolName.ts`)
2. Define the tool with name, description, and parameters
3. Add the tool to the TOOLS array in `tools/index.ts`
4. Create a corresponding handler in the handlers layer
5. Register the handler in the appropriate registrar

## Relationship with Handlers

Each tool definition has a corresponding handler that is registered with the same name:

```typescript
// In TemplateHandlerRegistrar.ts
registerHandlers(): void {
  this.registry.registerHandler(
    "mcp_tailorkit-mcp_get_list_templates",
    getListTemplatesHandler
  );
  // ...other handlers
}
```

The MCP server routes tool calls to handlers based on the tool name.
