# Core Layer

The core layer provides fundamental infrastructure for the application. It handles low-level concerns like HTTP communication and authentication.

## Directory Structure

```
core/
└── TailorKitBaseClient.ts  # Base HTTP client for API communication
```

## TailorKitBaseClient

The `TailorKitBaseClient` is responsible for:

1. Making HTTP requests to the TailorKit API
2. Handling authentication
3. Managing request/response serialization
4. Standardizing error handling

Example:

```typescript
export class TailorKitBaseClient {
  private host: string;
  private accessToken: string;

  constructor(host: string, accessToken: string) {
    this.host = host;
    this.accessToken = accessToken;
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    // Implementation of GET request
  }

  async post<TRequest, TResponse>(
    endpoint: string,
    data: TRequest
  ): Promise<TResponse> {
    // Implementation of POST request
  }

  // Other methods...
}
```

## Usage

The core layer is typically not used directly by application code, but rather through the Services layer:

```typescript
// Direct usage (rare)
const baseClient = new TailorKitBaseClient(host, accessToken);
const response = await baseClient.post('/api/templates', data);

// Typical usage via services
const client = new TailorKitClient(host, accessToken);
const result = await client.templates.getListTemplates(args);
```

## Extending

When extending the core layer:

1. Add new methods to the `TailorKitBaseClient` class as needed
2. Maintain consistent error handling patterns
3. Keep the API simple and focused on communication concerns
4. Document any new methods with JSDoc comments
