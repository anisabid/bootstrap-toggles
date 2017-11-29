/**
 * Created by sarah.bo on 15/06/2017.
 */
(function ($, $$) {
    /**
     *  plugin/home.js
     */

    // ToDO
    // ...

    $$.$({
        home: {
            flip: function () {

                // Comment
                $('.card').hover(function () {
                    $(this).toggleClass('flipped');
                });

            },
            ready: function () {
                //console.log(this);
                this.flip();
            }
        }
    });

})(jQuery, KTJS);