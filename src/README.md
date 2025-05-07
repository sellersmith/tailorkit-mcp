# TailorKit MCP Source Code

This directory contains the source code for the TailorKit MCP server.

## Directory Structure

```
src/
├── core/          # Core infrastructure
├── services/      # Business logic
├── handlers/      # Tool handlers (MCP interface)
│   ├── layer/     # Layer-related handlers
│   ├── template/  # Template-related handlers
│   ├── registry/  # Tool registry system
│   └── registrars/# Handler registration
├── tools/         # Tool definitions for MCP
└── utils/         # Utility functions
```

## Development Guidelines

1. **Business Logic**: Implement all business logic in the services layer
2. **Tool Interface**: Create handlers in the handlers layer to adapt services for MCP
3. **Tool Definitions**: Define tools in the tools layer with detailed parameter schemas
4. **Organization**: Group related handlers in subdirectories by service type

See the `docs/` directory at the project root for more detailed documentation.
