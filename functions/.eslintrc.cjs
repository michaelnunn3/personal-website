module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
  },
  extends: ["eslint:recommended", "google", "plugin:prettier/recommended"],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
