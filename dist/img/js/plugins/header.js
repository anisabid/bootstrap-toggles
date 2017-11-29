(function ($, $$) {
    /**
     *  plugin/header.js
     */

    // ToDO
    // ...

    $$.$({
        header: {
            affix: function () {

                $(window).scroll(function () {

                    $('.hero-section-affix').affix({
                        offset: {
                            top: 180
                        }
                    })
                        .on('affix.bs.affix', function () {
                            $('body').addClass('atx-hero-section-affix');
                        })
                        .on('affix-top.bs.affix', function () {
                            $('body').removeClass('atx-hero-section-affix');
                        });

                });

            },
            ready: function () {
                //console.log(this);
                this.affix();
            }
        }
    });

})(jQuery, KTJS);