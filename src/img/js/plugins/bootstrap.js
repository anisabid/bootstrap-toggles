(function ($, $$) {

    "use strict";

    /**
     *  plugin/bootstrap.js
     */

        // ToDO
        // ...

    $$.$({
        bootstrap: {

            noConflict: function () {
                $('[data-toggle="tooltip"]').tooltip({
                    template : '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-head"><h3><span class="glyphicon glyphicon-info-sign"></span> Tool Info</h3></div><div class="tooltip-inner"></div></div>'
                });

                $('[data-toggle="popover"]').popover({
                    html: true,
                    content: function () {
                        var _content = $(this).attr('title');
                        if ($(this).data('target')) {
                            _content = $($(this).data('target')).html();
                        }
                        return _content;
                    }
                });


                $('body').on('click', function (e) {
                    $('[data-toggle="popover"]').each(function () {
                        //the 'is' for buttons that trigger popups
                        //the 'has' for icons within a button that triggers a popup
                        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                            $(this).popover('hide');
                        }
                    });
                });

            },
            ready: function () {
                this.noConflict();
            }
        }

    });

})(J, KTJS);