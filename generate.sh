# Generate the data.
npx eslint --config .eslintrc.typescript.recommended.js --print-config test.ts > eslint-typescript-recommended.json
npx eslint --config .eslintrc.react.recommended.js --print-config test.ts > eslint-react-recommended.json
npx eslint --config .eslintrc.standard.js --print-config test.ts > standard.json
npx eslint --config .eslintrc.airbnb.js --print-config test.ts > airbnb.json
npx eslint --config .eslintrc.google.js --print-config test.ts > google.json

# Generate the report
node compare.js > docs/index.html
