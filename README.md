# 10x MVP Tracker

10xMVP Tracker is a MCP (Model Context Protocol) server for helping [10xDevs.pl](https://10xdevs.pl) students monitor their MVP web application project progress. It integrates with AI tools and is distributed as an NPM package.

## Features

- ✅ Analyzes projects against 7 predefined criteria
- 📊 Generates progress reports with completion percentage
- 💡 Provides prioritized improvement recommendations
- 📝 Creates ready-to-copy submission summaries

## Quick Start

1.  **Install MCP server in your AI tool**

👉 Guidelines for most popular AI Tools below

2.  **Ask your AI assistant:**

    > "Please report status of my project with check-mvp tool"

We recommend using `grok-code-fast-1` model with this tool for best results (price to quality ratio).

## Installation & Setup

- [Cursor IDE](#cursor-ide)
- [Claude Code](#claude-code)
- [Jetbrains AI Assistant](#jetbrains-ai-assistant)
- [GitHub Copilot](#github-copilot)
- [Windsurf](#windsurf)

### Cursor IDE

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=10x-mvp-tracker&config=eyJ0cmFuc3BvcnQiOiJzdGRpbyIsImNvbW1hbmQiOiJucHggQHByemVwcm9ncmFtb3dhbmkvMTB4LW12cC10cmFja2VyIn0%3D)

Add the following configuration to your `.cursor/mcp.json` file:

```json
{
  "mcpServers": {
    "10x-mvp-tracker": {
      "command": "npx",
      "args": ["@przeprogramowani/10x-mvp-tracker"],
      "transport": "stdio"
    }
  }
}
```

You can also use "New MCP Server" button in Cursor Settings > Tools & MCP.

### Claude Code

**Run the following command in your project directory**:

```
claude mcp add 10x-mvp-tracker npx '@przeprogramowani/10x-mvp-tracker'
```

You can alternatively create `.mcp.json` file in your project directory with the following content:

```json
{
  "mcpServers": {
    "10x-mvp-tracker": {
      "command": "npx",
      "args": ["@przeprogramowani/10x-mvp-tracker"],
      "transport": "stdio"
    }
  }
}
```

### Jetbrains AI Assistant

Go to Settings | Tools | AI Assistant | Model Context Protocol (MCP) and add following "as JSON" configuration:

```json
{
  "mcpServers": {
    "10x-mvp-tracker": {
      "command": "npx",
      "args": ["@przeprogramowani/10x-mvp-tracker"]
    }
  }
}
```

For working directory, add path to project root.

### GitHub Copilot

Create a `.vscode/mcp.json` file in the root of your project with the following content:

```json
{
  "mcpServers": {
    "10x-mvp-tracker": {
      "command": "npx",
      "args": ["@przeprogramowani/10x-mvp-tracker"],
      "transport": "stdio"
    }
  }
}
```

### Windsurf

Create an `mcp_config.json` file in your project's root directory and add the following configuration:

```json
{
  "mcpServers": {
    "10x-mvp-tracker": {
      "command": "npx",
      "args": ["@przeprogramowani/10x-mvp-tracker"],
      "transport": "stdio"
    }
  }
}
```

## Usage

Once installed and configured, you can invoke the tool by asking your AI assistant:

> "Please report status of my project with check-mvp tool"

## Analysis Criteria

The tool checks your project against these 7 criteria:

1. **Documentation** - README + Product Requirements Document (PRD)
2. **Login functionality** - Authentication implementation
3. **Test presence** - Unit/integration tests
4. **Business logic** - Core application logic
5. **CI/CD configuration** - Continuous Integration/Deployment setup
6. **Database setup** - Data persistence layer
7. **API endpoints** - Backend API implementation

## Output Format

The tool generates a structured Markdown report that includes:

- ✅/❌ status for each criterion
- Overall completion percentage
- Priority improvements section
- Ready-to-copy submission summary
- Generation timestamp

## Development

### Prerequisites

```bash
npm install
```

### Development Mode

```bash
npm run dev
```

### Testing with FastMCP Inspector

```bash
npx fastmcp inspect src/index.ts
```

### Building

```bash
npm run build
```

### Running Tests

```bash
npm run check  # Runs lint and format check
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Przeprogramowani**

## Repository

[https://github.com/przeprogramowani/10x-mvp-tracker](https://github.com/przeprogramowani/10x-mvp-tracker)
