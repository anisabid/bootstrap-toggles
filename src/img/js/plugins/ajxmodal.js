(function ($, $$, W) {

    "use strict";

    /**
     *  plugin/ajaxmodal.js
     */

        // ToDO
        // ...

    $$.$({
        ajaxModal: {

            fn: function (_target, _ajax_modal, _args) {
                $$.widgets_loader.show();
                $.ajax({
                    url: _target,
                    success: function (data) {
                        $('body').append(data);
                        $$.widgets_loader.hide();
                        $('.kt-ajaxmodal')
                            .modal('show')
                            .on('hidden.bs.modal', function (e) {
                                $('.kt-ajaxmodal').remove();
                            });

                        _args.response = data;

                        if (_ajax_modal && $().check(_ajax_modal.callback)) {
                            var callbacks = $.Callbacks("once");
                            callbacks.add($().callback(_ajax_modal.callback));
                            callbacks.fire(_args);
                        }

                    },
                    error: function () {
                        $$.widgets_loader.hide();
                    }
                });
            },

            scope: function($_scope){
                $_scope = (typeof $_scope === typeof undefined)? '' : $_scope;
                $( $_scope + ' [data-toggle="ajaxmodal"]').each(function () {
                    var $this = $(this),
                        _target = (typeof $this.data('target') !== typeof undefined) ? $this.data('target') : (typeof $this.attr('href') !== typeof undefined) ? $this.attr('href') : null,
                        _ajax_modal = $(this).json('ajaxmodal'),
                        _args = $.extend($(this).json(), {$elem: $this});

                    if (_target) {
                        $this.click(function (event) {
                            event.preventDefault();
                            $$.ajaxModal.fn(_target, _ajax_modal, _args);
                        });
                    }
                });
            },

            init: function () {
                this.scope();


                $(document).ajaxSuccess(function () {
                    //console.log("Triggered ajaxSuccess handler.");
                });

                $(document).ajaxError(function () {
                    $.notify({
                            icon: 'fa fa-times',
                            message: 'Ajax Error !'
                        },
                        {
                            type: 'danger'
                        });
                });
            },

            ready: function () {
                this.init();
            }
        }

    });

})(J, KTJS, window);