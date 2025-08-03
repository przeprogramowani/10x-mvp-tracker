import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  {
    ignores: ["dist/**", "node_modules/**", "*.config.js", "*.config.mjs"],
  },
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/require-await": "off",
    },
  },
  eslintConfigPrettier,
  eslintPluginPrettier
);
