# 10x MVP Tracker

MCP (Model Context Protocol) tool for helping programming course students monitor their MVP web application project progress. It integrates with AI tools (Claude Code, Gemini CLI, Cursor, Windsurf) and is distributed as an NPM package.

## Features

- ✅ Analyzes Astro projects against 7 predefined criteria
- 📊 Generates progress reports with completion percentage
- 💡 Provides prioritized improvement recommendations
- 📝 Creates ready-to-copy submission summaries
- 🔄 Maintains state tracking in `.tracker/` directory
- 🚀 Zero configuration required

## Installation

### As an NPM Package

```bash
npm install -g @przeprogramowani/10x-mvp-tracker
```

### For Claude Desktop

Add to your Claude Desktop configuration (`claude_desktop_config.json`):

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

### In Claude Desktop

Once configured, you can ask Claude:

```
Please run check-mvp to analyze my project
```

### Command Line

```bash
# In your Astro project directory
10x-mvp-tracker
```

## Analysis Criteria

The tool checks your Astro project against these 7 criteria:

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

## State Management

- Creates `.tracker/state.json` to persist analysis state
- Automatically adds `.tracker/` to `.gitignore`
- Delete `.tracker/` directory to reset analysis state

## Requirements

- Node.js >= 18.0.0
- Astro-based project (checks `package.json` for Astro dependency)

## Troubleshooting

### "This tool only supports Astro projects"

- Verify your `package.json` contains Astro in dependencies or devDependencies
- Ensure you're running the command in the correct project directory

### Permission Errors

- Check write permissions for `.tracker/` directory creation
- Verify `.gitignore` is writable or can be created

### Tool Not Found

- Confirm NPM package installation: `npm list -g @przeprogramowani/10x-mvp-tracker`
- Verify Claude Desktop MCP configuration
- Restart Claude Desktop after configuration changes

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
npm run check  # Runs lint, format check, and build
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
