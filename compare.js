const fs = require('fs');
const config = require("eslint-config-standard-with-typescript");

const configurations = [
  {
    name: "airbnb",
    rules: JSON.parse(fs.readFileSync('airbnb.json')).rules
  },
  {
    name: "google",
    rules: JSON.parse(fs.readFileSync('google.json')).rules
  },
  {
    name: "standard",
    rules: JSON.parse(fs.readFileSync('standard.json')).rules
  },
];


// Get the unique list of rules, not including disabled rules.
// const rules = configurations.map(configuration => Object.keys(configuration.rules)).flat();
const rules = configurations.map(({name, rules}) => {
  const entries = Object.entries(rules);

  const enabledRules = entries.filter(([key, value]) => value[0] !== 0 && value[0] !== "off");

  console.log("<p>", name, entries.length, "rules total", enabledRules.length, "enabled rules", "</p>");

  return enabledRules.map(([key, value]) => key);
}).flat();
rules.sort();
const uniqueRules = new Set(rules);

console.log(`
<style>
table, th, td {
}
table {
  table-layout: fixed;
  border-collapse: collapse;
}
th, td {
  width: 30%;
  overflow: hidden;
    border: 1px solid black;

}
</style>
`)
console.log(`<table>`)
console.log(`<tr><th>Rule</th>${configurations.map(({name}) => `<th>${name}</th>`).join("")}</tr>`)
for (const rule of uniqueRules) {
  // This prints the whole rule, but it doesn't lay out well in HTML because some rules are really long.
  // const values = configurations.map(configuration =>
  //  `<td><pre>${JSON.stringify(configuration.rules[rule], null, "  ")}</pre></td>`).join("");
  const values = configurations.map(configuration =>
    `<td>${configuration.rules[rule]?.[0] || ""}</td>`).join("");
  console.log(`<tr><td>${rule}</td>${values}</tr>`)
}
console.log(`</table>`)
