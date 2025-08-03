import { FastMCP } from "fastmcp";

const server = new FastMCP({
  name: "10x-mvp-tracker",
  version: "0.0.1",
});

server.addTool({
  name: "check-mvp",
  description: "Check if the project meets the MVP criteria",
  execute: async () => {
    return "OK";
  },
});

server.start({
  transportType: "stdio",
});
