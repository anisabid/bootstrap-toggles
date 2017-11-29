(function ($, $$) {
    /**
     *  plugin/datetimepicker.js
     */

        // ToDO
        // ...

    $$.$({
        datetimepicker: {
            init: function () {
                $('.datetimepicker').datetimepicker({
                    icons: {
                        time: 'fa fa-clock-o',
                        date: 'fa fa-calendar',
                        up: 'fa fa-chevron-up',
                        down: 'fa fa-chevron-down',
                        previous: 'fa fa-chevron-left',
                        next: 'fa fa-chevron-right',
                        today: 'glyphicon glyphicon-screenshot',
                        clear: 'fa fa-trash',
                        close: 'fa fa-times'
                    },
                    format: 'DD/MM/YYYY',
                    allowInputToggle: true,
                    showClear: true
                });
            },
            ready: function () {
                this.init();
            }
        }

    });

})(jQuery, KTJS);

