(function ($, $$) {

    "use strict";

    /**
     *  plugin/footer.js
     */

        // ToDO
        // Add message i18n

    $$.$({
        pages_entreprise_inscription_user: {
            etablissement: {
                callback: {
                    update: function (_arg) {

                        var $form = $('#modalEtablissement .form');

                        $.validator.setDefaults({
                            submitHandler: function () {

                                $.ajax({
                                    url: $form.attr('action'),
                                    data: $form.serialize(),
                                    success: function (data) {
                                        if ($().check(data)) {

                                            var _data_parse = JSON.parse(data);

                                            $('.kt-ajaxmodal')
                                                .modal('hide')
                                                .on('hidden.bs.modal', function () {

                                                    $.notify({
                                                        icon: 'fa fa-check',
                                                        message: 'La modification de vos donn&eacute;es a &eacute;t&eacute; effectu&eacute;e avec succ&egrave;s.'
                                                    });

                                                    //$('#row-etablissement-' + _data_parse.IdEtablissement).addClass('animated flash');
                                                    $(_arg.data.target).addClass('animated flash');

                                                    $.each(_data_parse, function (key, val) {
                                                        $('[data-binding=' + key + ']').text(val);
                                                    });


                                                });

                                        }
                                    }
                                });

                            }
                        });

                        $form.validator({
                            rules: {
                                codeEtablissement: "required",
                                EtablissementAddress1: "required",
                                Etablissementaddress2: "required",
                                cpEtablissement: "required",
                                villeEtablissement: "required",
                                paysEtablissement: "required"

                            },
                            messages: {
                                codeEtablissement: $.validator.messages.required,
                                EtablissementAddress1: $.validator.messages.required,
                                Etablissementaddress2: $.validator.messages.required,
                                cpEtablissement: $.validator.messages.required,
                                villeEtablissement: $.validator.messages.required,
                                paysEtablissement: $.validator.messages.required
                            }
                        });


                    },
                    add: function(){
                        var $form = $('#modalEtablissement .form');

                        $.validator.setDefaults({
                            submitHandler: function () {

                                $.ajax({
                                    url: $form.attr('action'),
                                    data: $form.serialize(),
                                    success: function (data) {
                                        if ($().check(data)) {

                                            var _data_parse = JSON.parse(data);

                                            $('.kt-ajaxmodal')
                                                .modal('hide')
                                                .on('hidden.bs.modal', function () {

                                                    $.notify({
                                                        icon: 'fa fa-check',
                                                        message: 'La modification de vos donn&eacute;es a &eacute;t&eacute; effectu&eacute;e avec succ&egrave;s.'
                                                    });

                                                    $('#row-etablissement-' + _data_parse.IdEtablissement).addClass('animated flash');

                                                    $.each(_data_parse, function (key, val) {
                                                        $('[data-binding=' + key + ']').text(val);
                                                    });


                                                });

                                        }
                                    }
                                });

                            }
                        });

                        $form.validator({
                            rules: {
                                codeEtablissement: "required",
                                EtablissementAddress1: "required",
                                Etablissementaddress2: "required",
                                cpEtablissement: "required",
                                villeEtablissement: "required",
                                paysEtablissement: "required"

                            },
                            messages: {
                                codeEtablissement: $.validator.messages.required,
                                EtablissementAddress1: $.validator.messages.required,
                                Etablissementaddress2: $.validator.messages.required,
                                cpEtablissement: $.validator.messages.required,
                                villeEtablissement: $.validator.messages.required,
                                paysEtablissement: $.validator.messages.required
                            }
                        });
                    }

                },
                init: function () {
                    // Delete etablissement
                    $('.table-etablissements-btn-delete-action').click(function () {

                        var $this = $(this),
                            _bootbox = $(this).json('bootbox'),
                            _data = $(this).json('data'),
                            _dialogDownload = null;

                        _dialogDownload = bootbox.confirm({
                            message: '<div class="' + _bootbox.class + '">' + _bootbox.message + '</div>',
                            className: _bootbox.class_name,
                            closeButton: false,
                            buttons: {
                                confirm: {
                                    label: _bootbox.btn_confirm,
                                    className: 'btn-primary btn-sm'
                                },
                                cancel: {
                                    label: _bootbox.btn_cancel,
                                    className: 'btn-default btn-sm'
                                }
                            },
                            callback: function (result) {
                                if (result) {
                                    $(_data.target).hide('slow');
                                }

                            }
                        });

                    });
                }
            },

            ready: function () {
                this.etablissement.init();
            }
        }

    });

})(jQuery, KTJS);

