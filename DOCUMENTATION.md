## Documentation

You can see below the API reference of this module.

### `jqueryEditable(opts)`
Make an element editable using double-click.

#### Params

- **Object** `opts`: An object containing the following fields:
   - `onChange` (Function): The function that will be triggered on change (`onChange (newValue, oldValue) => {...}`)
   - `inputHTML` (String|jQuery): The HTML of the input to use or the jQuery element itself (default: `<input type='text'>`)
   - `clickTarget` (String): If `parent`, the parent element will become the click target.

#### Return
- **jQuery** The selected element.

