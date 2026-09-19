/** @type {import("prettier").Config} */
const config = {
  plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  endOfLine: "lf",
};

export default config;
