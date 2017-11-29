(function ($, $$, W) {

    "use strict";

    /**
     *  extend/check.js
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
     *  $().check([name_of_param])
     *
     * @example
     *  var param1 = '';
     *  var param2 = 'test';
     *
     * $().check(param1) // false
     * $().check(param2) // true
     * $().check(param3) // false
     */


    $.fn.extend({
        check: function (_param) {
            return (typeof _param !== undefined && _param !== '' && _param !== null);
        }
    });

})(jQuery, KTJS, window);