# TailorKit MCP Project Structure

This document explains the project structure and the responsibilities of each component.

## Core Architecture

The project follows a clean architecture approach with clear separation of concerns:

```
src/
├── core/          # Core functionality and infrastructure
├── services/      # Business logic layer
├── handlers/      # Tool interface layer
├── tools/         # Tool definitions
└── utils/         # Utility functions
```

## Component Responsibilities

### Core Layer (`src/core/`)

This layer contains the fundamental infrastructure code that the rest of the application depends on.

- `TailorKitBaseClient.ts`: Basic HTTP client for API communication

### Services Layer (`src/services/`)

The services layer implements the core business logic of the application. It's responsible for:

- Encapsulating domain/business logic
- Communicating with external APIs
- Data transformation and processing
- Handling specific error cases related to business logic

Services are:
- **Independent of the MCP tool system**
- **Reusable** across different application contexts
- **Focused on domain logic**, not on tool interface details

Key components:
- `ServiceManager.ts`: Manages all services and provides a unified interface
- `template/TemplateService.ts`: Handles template-related operations
- `layer/LayerService.ts`: Handles layer-related operations
- `integration/IntegrationService.ts`: Handles integration with external systems
- `userPreferences/UserPreferencesService.ts`: Manages user preferences

### Handlers Layer (`src/handlers/`)

The handlers layer acts as an adapter between the MCP tool system and the services layer:

- Validates input parameters specific to each operation
- Calls the appropriate service methods
- Standardizes error handling and response format
- Registers handlers with the tool registry

Each handler represents a concrete tool operation and follows a standard pattern:
- Input validation function
- Service method call function
- Handler creation using the factory pattern

Key components:
- `registry/ToolHandlersRegistry.ts`: Registry for all tool handlers
- `registrars/`: Classes responsible for registering groups of related handlers
- Individual handler files (e.g., `getListTemplates.ts`)
- `types.ts`: TypeScript interfaces for the handler system
- `handlerFactory.ts`: Factory for creating standardized handlers

### Tools Layer (`src/tools/`)

The tools layer defines the MCP tools that are exposed to the model:

- Tool metadata and definitions
- Parameter schemas and descriptions
- Tool registration with the MCP system

This layer focuses on how tools are presented to the model context protocol system.

### Utils Layer (`src/utils/`)

Contains utility functions and helpers that are used across the application.

## Data Flow

1. MCP server receives a tool call request
2. Request is routed to the appropriate handler via the handler registry
3. Handler validates inputs and calls the appropriate service method
4. Service performs business logic and communicates with external APIs
5. Result flows back through the handler for formatting
6. Response is returned to the MCP server

## Clear Separation of Concerns

This architecture maintains a clear separation between:

- **Business Logic (Services)**: What the system does
- **Tool Interface (Handlers)**: How the system is exposed to MCP
- **Tool Definitions (Tools)**: How the tools are defined for the model

This separation allows for:
1. Independent testing of each layer
2. Reusability of services outside the MCP context
3. Clear responsibility boundaries
4. Easier maintenance and extension
