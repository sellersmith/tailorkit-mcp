# TailorKit MCP

[TailorKit MCP](https://apps.shopify.com/tailorkit) is a powerful product customization framework for e-commerce that enables merchants to create interactive personalization experiences. Features template management, layer control, and Shopify integration for offering customizable products with minimal development effort.

![TailorKit MCP](https://cdn.shopify.com/app-store/listing_images/958e5ec4440b11eb378c3c27a7a4097d/icon/CKPAh-fW_YYDEAE=.png)

## Overview

This MCP (Model Context Protocol) server connects Claude and other AI assistants to the TailorKit API, enabling them to manage customizable product templates for e-commerce platforms. With TailorKit MCP, AI assistants can create, retrieve, and manipulate product templates and their layers directly through natural language conversations.

## Tools

1. `get_list_templates`

   - Get a list of templates with shop domain
   - Required inputs:
     - `shopDomain` (string): The shop domain ending with .myshopify.com
   - Optional inputs:
     - `limit` (number, default: 5): Maximum number of templates to return
     - `page` (number, default: 1): Page number for pagination
     - `sort` (string, default: "updatedAt\_\_desc"): The sort order
     - `filter` (string): Filter string for template search
   - Returns: List of templates with their details

2. `get_detail_template`

   - Get detailed information about a specific template
   - Required inputs:
     - `_id` (string): The ID of the template
     - `shopDomain` (string): The shop domain ending with .myshopify.com
   - Returns: Detailed template information including layers and settings

3. `create_template`

   - Create a new template for a shop
   - Required inputs:
     - `shopDomain` (string): The shop domain ending with .myshopify.com
     - `name` (string, default: "New Template"): Name of the template
     - `dimensions` (object): Width, height, measurement unit, and resolution
   - Optional inputs:
     - `_id` (string, format: uuid): Custom ID for the template
     - `layers` (array): Initial layers configuration
   - Returns: Confirmation of template creation with template ID

4. `get_list_layers_of_template`
   - Get all layers for a specific template
   - Required inputs:
     - `_id` (string): The ID of the template
     - `shopDomain` (string): The shop domain ending with .myshopify.com
   - Returns: List of all layers in the template with their properties

## Setup

### Usage with Claude Desktop

Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "tailorkit-mcp": {
      "command": "node",
      "args": ["path/to/your/dist/index.js"],
      "env": {
        "HOST": "https://your-api-host.com",
        "ACCESS_TOKEN": "your-access-token"
      }
    }
  }
}
```

### Environment Variables

1. `HOST`: Required. The host URL for your TailorKit API.
2. `ACCESS_TOKEN`: Required. Your TailorKit API access token for authentication.

### Access Token

Go to `Settings` -> `Preferences` -> `Generate access token`

![TailorKit Access Token](https://img001.prntscr.com/file/img001/iHKoBGqbRuK9OxeiBqnxHA.png)

## Installation

### From npm

```bash
npm install @sellersmith/tailorkit-mcp
```

### From GitHub

```bash
git clone https://github.com/sellersmith/tailorkit-mcp.git
cd tailorkit-mcp
npm install
npm run build
```

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run the server locally
node dist/index.js
```

## License

This MCP server is licensed under the MIT License. This means you are free to use, modify, and distribute the software, subject to the terms and conditions of the MIT License. For more details, please see the LICENSE file in the project repository.
