# Handlers Layer

## Overview

The Handlers layer is the bridge between the MCP tool system and the Services layer. It adapts the service methods to be used as MCP tools and manages the tool registry.

## Key Characteristics

- **Adapter pattern**: Adapts services for use with the MCP tool system
- **Validation-focused**: Validates input parameters before calling services
- **Standardized responses**: Ensures consistent response format for all tools
- **Registry-based**: Uses a registry pattern to organize handlers

## Components

### ToolHandlersRegistry

A registry that stores all tool handlers and allows them to be looked up by tool name:

```typescript
const registry = new ToolHandlersRegistry();
registry.registerHandler("mcp_tailorkit-mcp_get_list_templates", getListTemplatesHandler);
const handler = registry.getHandler("mcp_tailorkit-mcp_get_list_templates");
```

### Handler Registrars

Classes responsible for registering related groups of handlers with the registry:

- `TemplateHandlerRegistrar`: Registers template-related handlers
- `LayerHandlerRegistrar`: Registers layer-related handlers
- `IntegrationHandlerRegistrar`: Registers integration-related handlers
- `UserPreferencesHandlerRegistrar`: Registers user preferences handlers

Each registrar implements a `registerHandlers()` method that registers its handlers with the provided registry.

### Individual Handlers

Each handler is responsible for a specific operation and follows a standard pattern:

1. Input validation function
2. Service call function
3. Handler creation using factory pattern

Example:

```typescript
// Input validation
function validateGetListTemplatesArgs(args: GetListTemplatesArgs): void {
  if (!args.shopDomain) {
    throw new Error("Invalid arguments: shopDomain is required");
  }
}

// Service call
async function getListTemplatesServiceMethod(
  serviceManager: ServiceManager,
  args: GetListTemplatesArgs
) {
  return serviceManager.templateService.getListTemplates(args);
}

// Handler creation
export const getListTemplatesHandler = createHandler<GetListTemplatesArgs, any>(
  validateGetListTemplatesArgs,
  getListTemplatesServiceMethod
);
```

### Factory Pattern

The `createHandler` factory function creates standardized handlers with consistent error handling and response formatting:

```typescript
export function createHandler<TArgs, TResult>(
  validateFn: (args: TArgs) => void,
  serviceFn: (serviceManager: ServiceManager, args: TArgs) => Promise<any>
): ToolHandler<TArgs> {
  return async (args: TArgs): Promise<ToolHandlerResponse<TResult>> => {
    try {
      validateFn(args);
      const result = await serviceFn(ServiceManager.getInstance(), args);
      return {
        success: !result.error,
        data: result.data,
        error: result.error ? result.error.message : null
      };
    } catch (error) {
      return {
        success: false,
        data: null,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  };
}
```

## Handler Response Pattern

All handlers return a standardized response object:

```typescript
export interface ToolHandlerResponse<T> {
  success: boolean;
  data: T | null;
  error: string | null;
}
```

## Adding a New Handler

When adding a new handler:

1. Create a new handler file in the handlers directory
2. Implement the validation function
3. Implement the service call function
4. Create the handler using `createHandler`
5. Add the handler to the appropriate registrar

## Initialization

The handlers system is initialized through the `initializeToolHandlers` function:

```typescript
export function initializeToolHandlers(client: TailorKitClient): ToolHandlersRegistry {
  const registry = new ToolHandlersRegistry();
  const serviceManager = ServiceManager.getInstance(client.getBaseClient());

  const registrars = [
    new TemplateHandlerRegistrar(registry, serviceManager),
    // Other registrars...
  ];

  // Register all handlers
  registrars.forEach(registrar => registrar.registerHandlers());

  return registry;
}
```
