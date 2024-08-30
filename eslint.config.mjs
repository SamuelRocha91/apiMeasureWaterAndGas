import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

const NUMBER_INDENT = 2;

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "indent": ["error", NUMBER_INDENT],
      "max-len": ["error", { "code": 100 }],
      "max-lines": ["warn", { "max": 300, "skipBlankLines": true, "skipComments": true }],
      "complexity": ["warn", { "max": 10 }],
      "no-magic-numbers": ["warn", { "ignore": [0, 1] }],
      "prefer-const": "warn",
      "eqeqeq": ["error", "always"],
      "consistent-return": "warn",
      "no-duplicate-imports": "error",
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "template-curly-spacing": ["error", "never"],
      "comma-dangle": ["error", "never"],
      "quotes": ["error", "double"],
      "semi": ["error", "always"]
    }
  }
];
