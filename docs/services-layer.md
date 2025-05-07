# Services Layer

## Overview

The Services layer is the heart of the business logic in the TailorKit MCP application. It encapsulates all domain-specific operations and provides a clean API for the rest of the application to use.

## Key Characteristics

- **Domain-focused**: Implements business rules and operations
- **MCP-agnostic**: No knowledge of MCP tool system
- **Reusable**: Can be used in different contexts (web app, CLI, etc.)
- **API-communicating**: Responsible for communication with external APIs

## Components

### ServiceManager

The `ServiceManager` class serves as a central access point for all services. It follows the Singleton pattern to ensure only one instance exists across the application.

```typescript
// Example usage
const serviceManager = ServiceManager.getInstance(client);
const templates = serviceManager.templateService;
```

### TemplateService

Handles all template-related operations:
- Getting list of templates
- Getting template details
- Creating templates
- Updating templates
- Deleting templates

### LayerService

Manages operations related to template layers:
- Getting layers for a template
- Adding layers
- Modifying layers
- Removing layers

### IntegrationService

Manages integrations with external systems and third-party services.

### UserPreferencesService

Handles user preferences and settings management.

## Response Pattern

Services follow a consistent response pattern:

```typescript
export interface TemplateResponse<T> {
  data: T | null;
  error: Error | null;
}
```

This allows for:
- Consistent error handling
- Type-safe response data
- Clearer distinction between success and failure cases

## Extending Services

When adding a new service:

1. Create a new service class in a dedicated directory (e.g., `services/newFeature/NewFeatureService.ts`)
2. Add the service to the `ServiceManager` class
3. Implement methods for all required operations
4. Follow the established response pattern

## Service Method Pattern

Service methods should:
1. Accept typed input parameters
2. Return a consistent response type
3. Handle and transform API-specific errors
4. Document their purpose with JSDoc comments

```typescript
/**
 * Get detail template
 * @param args - The arguments for the get detail template
 * @returns The detail template
 */
async getDetailTemplate<T = any>(args: GetTemplateArgs): Promise<TemplateResponse<T>> {
  try {
    const data = await this.client.post<GetTemplateArgs, T>(
      API_ENDPOINTS.TEMPLATE.GET_DETAIL_TEMPLATE,
      args
    );
    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error : new Error(String(error))
    };
  }
}
```
