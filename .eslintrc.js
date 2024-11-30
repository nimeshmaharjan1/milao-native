// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  ignorePatterns: ["/dist/*"],
  extends: ["universe", "universe/native", "expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "import/order": 0,
    "react-native/no-inline-styles": 0,
    "import/namespace": 0,
    "no-duplicate-imports": "error",
    'prettier/prettier': 'error',
  },
};
