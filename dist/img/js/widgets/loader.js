(function ($, $$) {

    "use strict";

    /**
     *  widgets/profile.js
     */

        // ToDO
        // ...

    $$.$({
        widgets_loader: {
            options: {
                selector: 'kt-loader-backdrop'
            },
            show: function () {
                if (!$('#' + this.options.selector).length) {
                    $('body').append($('<div/>', {
                        id: this.options.selector,
                        class: this.options.selector
                    }));
                }else{
                    this.hide();
                    console.log(this.hide());
                }
            },
            hide: function () {
                $('body').find('#' + this.options.selector).remove();
            },
            ready: function () {
            }
        }

    });

})(J, KTJS);