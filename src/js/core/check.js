/* ========================================================================
 * jQuery Front End Utils: check.js v1.0.0
 * http://.../core/#check
 * ======================================================================== */
+(function ($) {

    "use strict";

    /**
     *  var/check.js
     */

    /**
     * @param
     *  _param: any // the fn callback
     *
     * @description
     *  This extend function used to check if _param exist and not null
     *
     * @used
     *  - Check _param
     *  $.check([name_of_param])
     *
     * @example
     *  var param1 = '';
     *  var param2 = 'test';
     *
     * $.check(param1) // false
     * $.check(param2) // true
     * $.check(param3) // false
     */


    $.extend({
        check: function (_param) {
            return (typeof _param !== typeof undefined && _param !== '' && _param !== null);
        }
    });

})(jQuery);