<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# jquery-editable

 [![Version](https://img.shields.io/npm/v/jquery-editable.svg)](https://www.npmjs.com/package/jquery-editable) [![Downloads](https://img.shields.io/npm/dt/jquery-editable.svg)](https://www.npmjs.com/package/jquery-editable)







> Make an element editable using double-click.

















## :cloud: Installation


Check out the [`dist`](/dist) directory to download the needed files and include them on your page.

If you're using this module in a CommonJS environment, you can install it using `npm` or `yarn` and `require` it:

```sh
# Using npm
npm install --save jquery-editable

# Using yarn
yarn add jquery-editable
```













## :clipboard: Example



```js
const $ = require("jquery")
$.fn.editable = require("jquery-editable");

$("span.editable-price").editable({
    inputHTML: "<input type='number' min='0.01' step='0.01' />",
    clickTarget: "parent",
    onChange(val, oldVal) {
        val = +val;
        // ...
    }
});
```












## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:







## :memo: Documentation


### `jqueryEditable(opts)`
Make an element editable using double-click.

#### Params

- **Object** `opts`: An object containing the following fields:
   - `onChange` (Function): The function that will be triggered on change (`onChange (newValue, oldValue) => {...}`)
   - `inputHTML` (String|jQuery): The HTML of the input to use or the jQuery element itself (default: `<input type='text'>`)
   - `clickTarget` (String): If `parent`, the parent element will become the click target.

#### Return
- **jQuery** The selected element.














## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].
























## :scroll: License

[MIT][license] © [Bloggify][website]






[license]: /LICENSE
[website]: https://bloggify.org
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
