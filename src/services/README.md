# Services Layer

The services layer contains the business logic of the application. It's responsible for communication with external APIs and implementing domain-specific operations.

## Directory Structure

```
services/
├── integration/              # Integration service
│   └── IntegrationService.ts
├── layer/                    # Layer service
│   └── LayerService.ts
├── template/                 # Template service
│   └── TemplateService.ts
├── userPreferences/          # User preferences service
│   └── UserPreferencesService.ts
├── ServiceManager.ts         # Service manager (singleton)
└── constants.js              # Service constants and endpoints
```

## Service Pattern

Each service follows a standard pattern:

1. Constructor that takes a `TailorKitBaseClient`
2. Methods for each operation
3. Consistent error handling
4. Type-safe response format

Example:

```typescript
export class TemplateService {
  private client: TailorKitBaseClient;

  constructor(client: TailorKitBaseClient) {
    this.client = client;
  }

  async getListTemplates<T = any>(args: GetListTemplatesArgs): Promise<TemplateResponse<T>> {
    try {
      const data = await this.client.post<GetListTemplatesArgs, T>(
        API_ENDPOINTS.TEMPLATE.GET_LIST_TEMPLATES,
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

  // Other methods...
}
```

## Response Pattern

Services use a consistent response pattern:

```typescript
export interface TemplateResponse<T> {
  data: T | null;
  error: Error | null;
}
```

## Service Manager

The `ServiceManager` follows the singleton pattern and provides access to all services:

```typescript
// Get an instance
const serviceManager = ServiceManager.getInstance(client);

// Access a service
const templateService = serviceManager.templateService;
```

## Adding a New Service

1. Create a new directory for the service (e.g., `services/newFeature/`)
2. Create the service class (e.g., `services/newFeature/NewFeatureService.ts`)
3. Implement the service methods with proper error handling
4. Add the service to the `ServiceManager` class
5. Export any relevant types or interfaces
