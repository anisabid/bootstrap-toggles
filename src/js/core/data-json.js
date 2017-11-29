/* ========================================================================
 * jQuery Front End Utils: data-json.js v1.0.0
 * http://.../core/#data-json
 * ======================================================================== */

+(function ($) {

    "use strict";

    /**
     *  var/data-json.js
     */

    // ToDO
    // ...


    /**
     * @param
     *  index: string // specifically index in data
     *
     * @description
     *  This extend function used to get json data defined in tag element
     *
     * @define
     *  <div id="input-test-json" data-json='{"select2":{"maximumSelectionLength":2}}'>...<div>
     *
     * @used
     *  - Get all index
     *  $('#input-test-json').json()
     *
     *  - Get select2 index
     *  $('#input-test-json').json().select2
     *  $('#input-test-json').json('select2')
     *
     * @example
     *  <div id="input-test-json" data-json='{"select2":{"maximumSelectionLength":2}}'>...<div>
     *  $('[data-init-plugin="select2"]').select2(
     *   $('#input-test-json').json().select2
     *  )
     *
     */


    $.fn.extend({

        dataJson: function (index) {

            if (!$.isFunction($.obj)) {
                throw new Error('Callback requires Utils functions $.obj');
            }

            var data = $(this).data('json'),
                _data = {},
                _regBase64 = new RegExp(/^BASE64:/g),
                checkBase64 = function (object) {
                    for (var property in object) {
                        if (object.hasOwnProperty(property)) {
                            if (typeof object[property] == "object") {
                                checkBase64(object[property]);
                            } else {
                                if ((_regBase64.test(object[property]))) {
                                    object[property] = atob(object[property].replace(_regBase64, ''));
                                }

                            }
                        }
                    }
                };


            if (typeof  data !== typeof undefined) {
                // Get all data
                if (typeof data === 'object') {
                    _data = data;
                } else {
                    try {
                        _data = JSON.parse(data);

                        // Convert strings encoded in base64 if they exist
                        checkBase64(_data);
                    } catch (e) {
                        _data = {};
                        console.error("Parsing data error in element :", this, e);
                    }
                }
            }

            // Get specifically index
            if (index) {
                if ($.isFunction($.obj)) {
                    _data = $.obj(_data, index);
                } else {
                    if (window.console) {
                        console.error('data-json: jQuery obj function is not defined : cannot get [' + index + '] index !');
                    }
                }

            }

            // return _data
            return _data;

        }
    });

})(jQuery);