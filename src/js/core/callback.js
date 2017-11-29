/* ========================================================================
 * jQuery Front End Utils: callback.js v1.0.0
 * http://.../core/#acallback
 * ======================================================================== */
if (typeof jQuery === 'undefined') {
    throw new Error('Callback requires jQuery');
}
+(function ($, W) {

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
     *  $.callback('index.index2')
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


    $.extend({
        callback: function (_callback) {

            if (!$.isFunction($.obj)) {
                throw new Error('Callback requires Utils functions $.obj');
            }

            var _func = _callback;

            if (typeof _callback === "string") {
                if (typeof W[_callback] === typeof undefined) {
                    if ($.isFunction($.obj)) {
                        _func = $.obj(W, _callback);
                    } else {
                        if (window.console) {
                            console.error('calback.js: jQuery obj function is not defined : cannot get [' + index + '] index !');
                        }
                    }
                } else {
                    _func = W[_callback];
                }
            }

            return _func;
        }
    });

})(jQuery, window);