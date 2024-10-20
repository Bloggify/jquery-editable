"use strict";

const $ = require("jquery")
$.fn.editable = require("../lib");

$("span.editable-price").editable({
    inputHTML: "<input type='number' min='0.01' step='0.01' />",
    clickTarget: "parent",
    onChange(val, oldVal) {
        val = +val;
        // ...
    }
});
