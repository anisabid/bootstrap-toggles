(function ($, $$, W) {

    "use strict";

    /**
     *  extend/validator.js
     */

        // ToDO
        // ...

    $.fn.extend({
        validator: function (_args) {

            var _param = (!_args) ? {} : _args,
                _arg = {
                    errorElement: "em",
                    errorPlacement: function (error, element) {
                        // Add the `help-block` class to the error element
                        error.addClass("help-block");
                        // Add `has-feedback` class to the parent div.form-group
                        // in order to add icons to inputs
                        element.parents(".form-group").addClass("has-feedback");
                        if (element.prop("type") === "checkbox") {
                            error.insertAfter(element.parent("label"));
                        } else {
                            error.insertAfter(element);
                        }
                        // Add the span element, if doesn't exists, and apply the icon classes to it.
                        if (!element.next("span")[0]) {
                            $("<span class='fa fa-times form-control-feedback'></span>").insertAfter(element);
                        }
                    },
                    success: function (label, element) {
                        // Add the span element, if doesn't exists, and apply the icon classes to it.
                        if (!$(element).next("span")[0]) {
                            $("<span class='fa fa-check form-control-feedback'></span>").insertAfter($(element));
                        }
                    },
                    highlight: function (element, errorClass, validClass) {
                        $(element).closest(".form-group").addClass("has-error has-feedback").removeClass("has-success");
                        $(element).next("span").addClass("fa-times").removeClass("fa-check");
                    },
                    unhighlight: function (element, errorClass, validClass) {
                        $(element).closest(".form-group").addClass("has-success has-feedback").removeClass("has-error");
                        $(element).next("span").addClass("fa-check").removeClass("fa-times");
                    }
                };

            $.extend(true, _arg, _param);

            return $(this).validate(_arg);
        }
    });

})(jQuery, KTJS, window);