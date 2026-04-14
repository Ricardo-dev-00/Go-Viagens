import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function resolveBasePath() {
  const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];

  if (!process.env.GITHUB_ACTIONS || !repository) {
    return "/";
  }

  if (repository.endsWith(".github.io")) {
    return "/";
  }

  return `/${repository}/`;
}

export default defineConfig({
  base: resolveBasePath(),
  plugins: [react(), tailwindcss()],
});
