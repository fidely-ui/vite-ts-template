import { defineConfig } from "@pandacss/dev"
import { fidelyPreset } from "@fidely-ui/panda-preset"
import { plum, mauve } from "@fidely-ui/panda-preset/colors/index"

export default defineConfig({
  presets: [fidelyPreset({
    accentColor: plum,
    grayColor: mauve,
    rounded: "md"
  })],

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  staticCss: {
    recipes: "*",
  },

  importMap: "@fidely-ui/styled-system",
  // The output directory for your css system
  outdir: "styled-system",

  jsxFramework: "react",

  plugins: [
    {
      name: "panda-headless-colors",
      hooks: {
        "preset:resolved": ({ utils, preset, name }) => {
          if (name === "@pandacss/preset-panda") {
            return utils.omit(preset, ["theme.tokens.colors", "theme.semanticTokens.colors"])
          }
          return preset
        }
      },
    },
  ],
});
