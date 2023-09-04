// AirBnB configuration with Typescript and React support.
//
// npm install --save-dev eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-prettier

module.exports = {
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",

    // Turns off all code formatting rules, I just want to compare linting rules.
    "prettier",
  ],
}
