const fs = require('fs');
const config = require("eslint-config-standard-with-typescript");

const configurations = [
  {
    name: "eslint:recommended & @typescript-eslint/recommended",
    rules: JSON.parse(fs.readFileSync('eslint-typescript-recommended.json')).rules
  },
  {
    name: "react/recommended & react-hooks/recommended",
    rules: JSON.parse(fs.readFileSync('eslint-react-recommended.json')).rules
  },
  {
    name: "airbnb",
    rules: JSON.parse(fs.readFileSync('airbnb.json')).rules
  },
  {
    name: "google",
    rules: JSON.parse(fs.readFileSync('google.json')).rules
  },
  {
    name: "standard with typescript and react",
    rules: JSON.parse(fs.readFileSync('standard.json')).rules
  },
];

console.log(`
<style>
table {
  border-collapse: collapse;
  
  & th, & td {
    border: 1px solid black;
    padding: 2px;
  }
}
</style>

<h1>Comparison of ESLint configurations</h1>
`);

// Get the unique list of rules, not including disabled rules.
// const rules = configurations.map(configuration => Object.keys(configuration.rules)).flat();
console.log(`
<h2>Summary</h2>

<table>
<tr><th>Config</th><th># of rules</th></tr>
`);
const rules = configurations.map(({name, rules}) => {
  const entries = Object.entries(rules);

  const enabledRules = entries.filter(([key, value]) => value[0] !== 0 && value[0] !== "off");

  console.log(`<tr><td>${name}</td><td>${enabledRules.length}</td></tr>`);

  return enabledRules.map(([key, value]) => key);
}).flat();
console.log(`</table>`);
rules.sort();
const uniqueRules = new Set(rules);


console.log(`
<h2>Details</h2>
<style>
.rulesTable {
  table-layout: fixed;
  
  & th, & td {
    width: 15%;
  }
}
</style>
<table class="rulesTable">
<tr><th>Rule</th>${configurations.map(({name}) => `<th>${name}</th>`).join("")}</tr>
`);
for (const rule of uniqueRules) {
  // This prints the whole rule, but it doesn't lay out well in HTML because some rules are really long.
  // const values = configurations.map(configuration =>
  //  `<td><pre>${JSON.stringify(configuration.rules[rule], null, "  ")}</pre></td>`).join("");
  const values = configurations.map(configuration => {
    const value = configuration.rules[rule]?.[0];
    return `<td>${!value || value === "off" ? "" : value}</td>`;
  }).join("");
  console.log(`<tr><td>${rule}</td>${values}</tr>`);
}
console.log(`</table>`);
