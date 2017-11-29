(function ($, $$) {

    "use strict";
    
    $$.$({
        pages_accueil_entreprise: {
            modal: function () {
                window.onload = function () {
                    if (localStorage.length === 0) {
                        $('#modal-info').modal('show');
                        localStorage.setItem("hasCodeRunBefore", true);
                    }else{
                        $('#information').css('display','block');
                    }
                    $("#modal-info").on("hidden.bs.modal", function () {
                        $('#information').css('display','block');
                    });
                };
            },
            map: function(){
                if (typeof onInitMap !== 'undefined' && $.isFunction(onInitMap)) {
                    $('body').append('<div class="tooltip top" role="map-tooltip" id="id-map-tooltip" style="opacity: 1; -webkit-transition: all .01s ease-in; -moz-transition: all .01s ease-in; -o-transition: all .01s ease-in; transition: all .01s ease-in;"> <div class="tooltip-arrow" style="-webkit-transition: all .01s ease-in; -moz-transition: all .01s ease-in; -o-transition: all .01s ease-in; transition: all .01s ease-in;"></div> <div class="tooltip-inner" style="-webkit-transition: all .01s ease-in; -moz-transition: all .01s ease-in; -o-transition: all .01s ease-in; transition: all .01s ease-in; border-style: solid; border-color: #000; border-width: 1px;"></div> </div>');
                    $('body').find('#id-map-tooltip').hide();
                    onInitMap();
                }
            },
            ready: function () {
                this.modal();
                this.map();
            }
        }

    });

})(jQuery, KTJS);

