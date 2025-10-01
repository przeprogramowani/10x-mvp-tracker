#!/usr/bin/env node
import { FastMCP, UserError } from "fastmcp";
import { z } from "zod";
import { getAnalysisPrompt } from "./analysis-prompt.js";

// Create FastMCP instance
const mcp = new FastMCP({
  name: "10x-mvp-tracker",
  version: "1.0.0",
  instructions:
    "check-mvp is a MCP tool for tracking 10xDevs certification project completion status. Analyzes web projects against 6 criteria and generates progress reports. ",
});

// Define check-mvp tool with optional projectPath parameter
mcp.addTool({
  name: "check-mvp",
  description: "Check MVP project completion status",
  parameters: z.object({
    projectPath: z.string().optional().describe("Path to the project directory (defaults to current working directory)"),
  }),
  annotations: {
    readOnlyHint: true,
    destructiveHint: false, // Only creates/updates project state
    idempotentHint: false, // Results may change over time
    openWorldHint: true, // Analyzes arbitrary project structures
  },
  execute: async (args, { log }) => {
    try {
      log.info("Checking project type...");

      // Determine project directory
      const projectDir = args.projectPath || process.cwd();
      log.info(`Using project directory: ${projectDir}`);

      // Return analysis instructions for the host AI
      return generateAnalysisInstructions(projectDir);
    } catch (error) {
      if (error instanceof UserError) throw error;
      console.error("Error in check-mvp tool:", error);
      return "❌ An error occurred while analyzing the project.";
    }
  },
});

// Start server with stdio transport
mcp.start({
  transportType: "stdio",
});

// Helper function to generate analysis instructions
function generateAnalysisInstructions(projectDir: string): string {
  const timestamp = new Date().toISOString();
  return getAnalysisPrompt(projectDir, timestamp);
}
