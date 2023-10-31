import type { Config } from "tailwindcss";

import baseConfig from "@timmac/tailwind-config";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
    "../../packages/ui/tailwind.config.ts",
  ],
  presets: [baseConfig],
} satisfies Config;
