(function ($, $$) {

    "use strict";

    /**
     *  pages/entreprise/common.js
     */

        // ToDO
        // Add message i18n

    $$.$({
        pages_entreprise_common: {

            common: {

                init: function () {

                    // IsConnected
                    $('[href=isConnected]').click(function (event) {
                        event.preventDefault();

                        var $this = $(this),
                            _bootbox = $(this).json('bootbox'),
                            _data = $(this).json('data'),
                            _dialogIsConnected = null;

                        _dialogIsConnected = bootbox.confirm({
                            message: '<div class="' + _bootbox.class + '">' + atob(_bootbox.message) + '</div>',
                            className: _bootbox.class_name,
                            closeButton: false,
                            buttons: {
                                confirm: {
                                    label: atob(_bootbox.btn_confirm),
                                    className: 'btn-primary'
                                },
                                cancel: {
                                    label: atob(_bootbox.btn_cancel),
                                    className: 'btn-default'
                                }
                            },
                            callback: function (result) {
                                if (result) {
                                    //$(_data.target).hide('slow');
                                    document.location.href = "?page=entreprise.EntrepriseHome&goto=&page=entreprise.EntrepriseAccueilAuthentifie&inscription";
                                    return true;
                                }

                            }
                        });

                        return false;


                    });


                    $('.button-quickSearch').click(function (event) {
                        event.preventDefault();
                        var _input_val = $('.input-quickSearch').val();
                        if ($().check(_input_val)) {
                            document.location.href = "/?page=entreprise.EntrepriseAdvancedSearch&searchAnnCons&keyWord=" + _input_val;
                            return true;
                        }
                        return false;
                    });
                }


            },
            ready: function () {
                this.common.init();
            }
        }

    });

})(jQuery, KTJS);

