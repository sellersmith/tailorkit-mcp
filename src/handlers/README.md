# Handlers Layer

The handlers layer is responsible for adapting the services for use with the MCP tool system.

## Directory Structure

```
handlers/
├── layer/           # Layer-related handlers
│   ├── index.ts     # Exports all layer handlers
│   └── *.ts         # Individual layer handlers
├── template/        # Template-related handlers
│   ├── index.ts     # Exports all template handlers
│   └── *.ts         # Individual template handlers
├── registry/        # Tool registry system
│   └── ToolHandlersRegistry.ts
├── registrars/      # Handler registration
│   ├── LayerHandlerRegistrar.ts
│   ├── TemplateHandlerRegistrar.ts
│   └── ...
├── types.ts         # Handler type definitions
├── handlerFactory.ts # Factory for creating handlers
└── index.ts         # Main entry point
```

## Handler Pattern

Each handler follows a standard pattern:

1. Input validation function
2. Service method function
3. Handler creation using factory

Example:

```typescript
// 1. Validation function
function validateGetListTemplatesArgs(args: GetListTemplatesArgs): void {
  if (!args.shopDomain) {
    throw new Error("Invalid arguments: shopDomain is required");
  }
}

// 2. Service method function
async function getListTemplatesServiceMethod(
  serviceManager: ServiceManager,
  args: GetListTemplatesArgs
) {
  return serviceManager.templateService.getListTemplates(args);
}

// 3. Handler creation
export const getListTemplatesHandler = createHandler<GetListTemplatesArgs, any>(
  validateGetListTemplatesArgs,
  getListTemplatesServiceMethod
);
```

## Adding a New Handler

1. Create the handler file in the appropriate subdirectory (e.g., `template/newHandler.ts`)
2. Implement the validation function and service method function
3. Create the handler using the `createHandler` factory
4. Export the handler from the subdirectory's index.ts file
5. Register the handler in the appropriate registrar
