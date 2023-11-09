// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: "eslint:recommended",
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "import", "react", "react-native"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "import/no-self-import": "error",
    "import/newline-after-import": "warn",
    "import/no-duplicates": "error",
    "import/no-unassigned-import": "warn",
    "react-native/no-unused-styles": 2,
    "sort-imports": [
      "error",
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          ["external", "builtin"],
          "internal",
          ["sibling", "parent"],
          "index",
        ],
        pathGroups: [
          {
            pattern: "@(react|react-native)",
            group: "external",
            position: "before",
          },
          {
            pattern:
              "@(src|assets|components|config|graphql|navigation|screens|types|utils)/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@src/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal", "react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [],
  settings: {
    "import/resolver": {
      "babel-module": {},
    },
  },
  env: {
    jasmine: true,
    jest: true,
  },
};
