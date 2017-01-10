# Simple Template

在無法使用 <a href="https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Template_literals" target="_blank">ES6 Template Literals</a> 的狀況下，
將 Template String 與 Object 結合成一個 String。

本工具不使用 `eval`，改用正規表示式，以減少不必要的麻煩（eval is evil）

## Usage

```JavaScript
var result = SimpleTemplate('I have a ${name}', { name: 'pen' });
console.log(result); // 'I have a pen'
```
