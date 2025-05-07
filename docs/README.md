# TailorKit MCP Documentation

Welcome to the TailorKit MCP documentation. This documentation provides a comprehensive overview of the project structure, architecture, and implementation details.

## Table of Contents

1. [Project Structure](./project-structure.md)
2. [Core Layer](./core-layer.md)
3. [Services Layer](./services-layer.md)
4. [Handlers Layer](./handlers-layer.md)
5. [Tools Layer](./tools-layer.md)

## Architecture Overview

TailorKit MCP is built using a clean architecture approach with clear separation of concerns:

```
Client Request → MCP Server → Tool Handler → Service → API
                                     ↑           ↑
                                     |           |
                              Tool Definition    Core Client
```

The architecture is designed to:
- Separate business logic from the MCP tool interface
- Provide clear responsibility boundaries
- Enable independent testing of each layer
- Support maintainability and extensibility

## Key Concepts

### Model Context Protocol (MCP)

The Model Context Protocol is the system that allows AI models to use tools for performing specific tasks. Tools must be defined with clear parameters and descriptions, and handler functions must process the tool calls and return standardized responses.

### Service-Handler Separation

The project maintains a clear separation between:
- **Services**: Implement business logic and API communication
- **Handlers**: Adapt services for use with the MCP tool system

This separation allows services to be reused outside of the MCP context and keeps business logic independent of the tool interface.

### Registry Pattern

Tool handlers are organized using a registry pattern:
- Handlers are registered with a central registry during initialization
- The MCP server looks up handlers in the registry by tool name
- Related handlers are grouped and registered by registrar classes

## Getting Started

To understand the codebase:

1. Start with the [Project Structure](./project-structure.md) document
2. Look at how the application initializes in the root `index.ts` file
3. Explore the different layers to understand their responsibilities

## Development Workflow

When adding a new feature:

1. Define the tool in the tools layer
2. Implement the business logic in a service
3. Create a handler that adapts the service for the tool system
4. Register the handler with the appropriate registrar
5. Add the tool to the exported tools list

## Documentation Updates

This documentation should be updated whenever:
- New architectural patterns are introduced
- Significant changes are made to existing components
- New layers or subsystems are added
