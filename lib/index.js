"use strict";

/**
 * jqueryEditable
 * Make an element editable using double-click.
 *
 * @name jqueryEditable
 * @function
 * @param {Object} opts An object containing the following fields:
 *
 *    - `onChange` (Function): The function that will be triggered on change (`onChange (newValue, oldValue) => {...}`)
 *    - `inputHTML` (String|jQuery): The HTML of the input to use or the jQuery element itself (default: `<input type='text'>`)
 *    - `clickTarget` (String): If `parent`, the parent element will become the click target.
 *
 * @return {jQuery} The selected element.
 */
const jQueryEditable = function (opts) {
  if (this.length > 1) {
    return this.each(function () {
      $(this).editable(opts);
    });
  }

  opts = opts || {};
  opts.onChange = opts.onChange || (() => {});
  opts.inputHTML = opts.inputHTML || "<input type='text'>";

  var $self = this;
  var oriVal;
  const $clickTarget = opts.clickTarget === "parent" ? $self.parent() : $self;

  $clickTarget.on("dblclick", function () {
    oriVal = $self.text();
    $self.text("");
    var $input = $(opts.inputHTML);
    $input.appendTo($self);
    $input.focus().val(oriVal);
  });

  const submitInput = (inp, reset) => {
    var $this = $(inp);

    var newValue = $this.val().trim();
    let retVal = null;

    if (!newValue && !reset) {
      reset = true;
    }

    if (!reset && newValue !== oriVal) {
      retVal = opts.onChange.call($self, newValue, oriVal);
    }

    if (!reset && retVal !== false) {
      const valToSet = retVal || $this.val() || oriVal;
      $this.parent().text(valToSet);
    } else {
      $this.parent().text(oriVal);
    }

    $this.remove();
  };

  $self.on("keyup", "input", function (e) {
    if (e.keyCode === 13) {
      submitInput(this);
    }
    if (e.keyCode === 27) {
      submitInput(this, true);
    }
  });

  $self.on("focusout", "input", function (e) {
    submitInput(this);
  });
}


if (typeof window !== "undefined" && typeof window.$ !== "undefined") {
    $.fn.editable = jQueryEditable
}

module.exports = jQueryEditable
