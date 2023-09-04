// Google configuration with Typescript
//
// npm install --save-dev gts eslint-config-prettier

module.exports = {
  "extends": [
    "./node_modules/gts",

    // Turns off all code formatting rules, I just want to compare linting rules.
    "prettier",
  ],
}
