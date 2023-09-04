// StandardJS configuration with Typescript and React support.
//
// npm install --save-dev eslint-config-standard-with-typescript eslint-config-standard-jsx eslint-config-standard-react eslint-config-prettier

module.exports = {
  "extends": [
    "standard-with-typescript",
    "standard-jsx",
    "standard-react",

    // Turns off all code formatting rules, I just want to compare linting rules.
    "prettier",
  ],
}
