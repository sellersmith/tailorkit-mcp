# Core Layer

## Overview

The Core layer provides the fundamental infrastructure that the rest of the application builds upon. It includes basic HTTP functionality and low-level utilities that support the higher-level services.

## Key Components

### TailorKitBaseClient

The `TailorKitBaseClient` class is responsible for HTTP communication with the TailorKit API:

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

  // Other HTTP methods...
}
```

## Responsibilities

The Core layer is responsible for:

1. **HTTP Communication**: Making API requests and handling responses
2. **Authentication**: Managing access tokens and authentication headers
3. **Error Handling**: Standardizing error handling for API communication
4. **Request/Response Serialization**: Converting between JavaScript objects and API formats

## Design Principles

The Core layer follows these design principles:

1. **Separation of Concerns**: Focuses only on communication infrastructure
2. **Dependency Inversion**: Higher-level components depend on abstractions, not concrete implementations
3. **Single Responsibility**: Each component has a single, well-defined purpose

## Usage

The Core layer is typically not used directly by application code, but rather through the Services layer:

```typescript
// Direct usage (rare)
const baseClient = new TailorKitBaseClient(host, accessToken);
const response = await baseClient.post('/api/templates', data);

// Typical usage via services
const client = new TailorKitClient(host, accessToken);
const result = await client.templates.getListTemplates(args);
```

## Extension

When extending the Core layer:

1. Add new methods to the `TailorKitBaseClient` class as needed
2. Maintain consistent error handling patterns
3. Keep the API simple and focused on communication concerns
4. Document any new methods with JSDoc comments
