# ESLint configuration comparison

I created the data via

```shell
npx eslint --config .eslintrc.standard.js --print-config test.ts > standard.json
npx eslint --config .eslintrc.airbnb.js --print-config test.ts > airbnb.json
npx eslint --config .eslintrc.google.js --print-config test.ts > google.json
```

And then I generate the HTML report from

```shell
node compare.js > result.html
```
