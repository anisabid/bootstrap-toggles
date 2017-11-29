(function ($, $$) {

    "use strict";

    /**
     *  pages/entreprise/AdvancedSearch.js
     */

        // ToDO
        // ...

    $$.$({
        pages_entreprise_advancedsearch: {

            // Togle type of search [Recherche avancee | Recherche d une procedure restreinte]
            toggle_search: function () {
                var url = $.jurlp(document.URL);

                if (url.query().type && url.query().type === 'restreinte') {
                    $('.content-advancedSearch a[aria-controls=restreinte]').tab('show');
                }
            },
            
            search:{
                callback:{
                    add_lieu_execution: function () {
                        console.log('lieu d execution ');
                    }      
                }
                
            },

            consultation: {
                callback: {
                    add: function (_args) {
                        _args.$elem.parent().remove();
                        return true;
                    },
                    delete: function (_args) {
                        $$.ajaxModal.scope('#modalGestionPanier ');
                    },
                    deleteConfirmation: function (_args) {
                        var _response;
                        $(_args.data.target).hide('slow');
                        $('#modalGestionPanier').modal('hide');
                        $.notify({
                            icon: 'fa fa-check',
                            message: 'La consultation a été supprimé !'
                        });
                    }
                },

                init: function () {

                }
            },

            ready: function () {
                this.toggle_search();
                this.consultation.init();
            }
        }

    });

})(jQuery, KTJS);

