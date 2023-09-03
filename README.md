# ESLint configuration comparison

See [result.html](./result.html) for the output.

I created the data via

```shell
npx eslint --config .eslintrc.typescript.recommended.js --print-config test.ts > eslint-typescript-recommended.json
npx eslint --config .eslintrc.react.recommended.js --print-config test.ts > eslint-react-recommended.json
npx eslint --config .eslintrc.standard.js --print-config test.ts > standard.json
npx eslint --config .eslintrc.standard.js --print-config test.ts > standard.json
npx eslint --config .eslintrc.airbnb.js --print-config test.ts > airbnb.json
npx eslint --config .eslintrc.google.js --print-config test.ts > google.json
```

And then I generated the report from

```shell
node compare.js > result.html
```
