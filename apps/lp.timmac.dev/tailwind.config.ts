import type { Config } from "tailwindcss";

import baseConfig from "@timmac/tailwind-config";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
    "../../packages/ui/tailwind.config.ts",
  ],
  theme: {
    extend: {
      colors: {
        // Profile 1
        "text-profile1": "rgb(var(--text-profile1))",
        "background-profile1": "rgb(var(--background-profile1))",
        "primary-profile1": "rgb(var(--primary-profile1))",
        "secondary-profile1": "rgb(var(--secondary-profile1))",
        "accent-profile1": "rgb(var(--accent-profile1))",

        // Profile 2
        "text-profile2": "rgb(var(--text-profile2))",
        "background-profile2": "rgb(var(--background-profile2))",
        "primary-profile2": "rgb(var(--primary-profile2))",
        "secondary-profile2": "rgb(var(--secondary-profile2))",
        "accent-profile2": "rgb(var(--accent-profile2))",
      },
    },
  },
  presets: [baseConfig],
} satisfies Config;
