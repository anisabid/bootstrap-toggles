(function ($, $$) {

    "use strict";

    /**
     *  widgets/profile.js
     */

        // ToDO
        // ...

    $$.$({
        widgets_notify: {
            init: function () {
                $.notifyDefaults({
                    element: 'body',
                    type: 'success',
                    delay: 5000,
                    placement: {
                        from: "bottom",
                        align: "right"
                    },
                    animate: {
                        enter: 'animated bounceInUp',
                        exit: 'animated bounceOutDown'
                    }
                });
            },
            ready: function () {
                this.init();
            }
        }

    });

})(J, KTJS);