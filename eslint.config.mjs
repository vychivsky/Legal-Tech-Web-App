import eslint from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
  eslint.configs.recommended,
  ...nextVitals,
  ...nextTs,
  eslintConfigPrettier,
  prettierRecommended,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    "geo_data/**",
    "assets/**",
  ]),
]);

export default eslintConfig;
