# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

10x MVP Tracker is a Model Context Protocol (MCP) tool for helping programming course students monitor their MVP web application project progress. It integrates with AI tools (Claude Code, Gemini CLI, Cursor, Windsurf) and is distributed as an NPM package (@przeprogramowani/10x-mvp-tracker).

## Development Commands

```bash
# Install dependencies
npm install

# Development mode with auto-reload
npm run dev

# Build TypeScript to JavaScript
npm run build

# Run the built application
npm start

# Linting and formatting
npm run lint          # Check for linting errors
npm run lint:fix      # Fix linting errors
npm run format        # Format code with Prettier
npm run format:check  # Check code formatting

# Run all checks (lint, format, build)
npm run check
```

## Architecture

- **MCP Server**: Built with FastMCP framework, communicates via stdio transport
- **Main Tool**: `check-mvp` - performs comprehensive project analysis
- **State Management**: Local `.tracker/` directory with `state.json` for persistence
- **Target Projects**: Currently supports only Astro-based projects (MVP phase)

## Key Implementation Details

The tool analyzes projects against 10 criteria including:

- Project documentation (README + PRD)
- Login functionality implementation
- Test presence
- Business logic implementation
- CI/CD configuration

Results are reported in Markdown format with:

- Checklist with emoji (✅/❌) for each criterion
- Project completion percentage
- Improvement hints for unmet criteria
- Section ready for submission form copying

## Testing MCP Tools

FastMCP provides development tools:

```bash
# Test the MCP server in development mode
npm run dev

# In another terminal, test the tool
npx fastmcp inspect
```

## Important Notes

- TypeScript strict mode is enabled
- ES modules (ESM) are used throughout
- Node.js 18+ is required
- Console logging is restricted (only warn/error allowed)
