(function ($, $$, W) {

    "use strict";

    /**
     *  extend/callback.js
     */

    // ToDO
    // check documentation

    /**
     * @param
     *  _callback: String // the fn callback
     *
     * @description
     *  This extend function used to get property of obj
     *
     * @used
     *  - Get index
     *  $().callback('index.index2')
     *
     * @example
     *  var obj = {
     *              a : {
     *                 b:{
     *                     c: 2
     *                  }
     *              }
     *          };
     *
     * $.obj(obj, 'a.b.c')
     */


    $.fn.extend({
        callback: function (_callback) {
            var _func = _callback;

            if (typeof _callback === "string") {
                if (typeof W[_callback] === typeof undefined) {
                    _func = $().obj(W, _callback);
                } else {
                    _func = W[_callback];
                }
            }

            return _func;
        }
    });

})(jQuery, KTJS, window);