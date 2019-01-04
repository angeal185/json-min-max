# json-min-max
##### json minify and beautify for nodejs or browser

### Installation

npm:
```sh
$ npm install json-min-max --save
```

#### server-side example

```js
const JMM = require('json-min-max');

// minify
fs.readFile('./unminified.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(JMM.minify(data));
});

// beautify
fs.readFile('./minified.json', 'utf8', (err, data) => {
  if (err) throw err;
  // default indentation is 2
  console.log(JMM.beautify(data,4));
});
```
#### browser example

```html
<script src="./dist/jsonMinMax.min.js">
<script>
// minify
let x = document.getElementById('unminifiedData').value;
console.log(JMM.minify(x));

// beautify
let y = document.getElementById('minifiedData').value
console.log(JMM.beautify(y,2));
</script>
```
