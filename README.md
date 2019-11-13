# replacevars

Simple key/value based variable replacement in strings.

## Usage

```js
const {replaceVars} = require('replacevars');

console.log(replaceVars('Your name is ${name} and you are ${age} years old. How do you do, ${name}?', {name: 'Sally', age: 26}));
// 'Your name is Sally and you are 26 years old. How do you do, Sally?'
```
