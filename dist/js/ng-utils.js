
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
/* ========================================================================
 * jQuery Front End Utils: obj.js v1.0.0
 * http://.../core/#obj
 * ======================================================================== */
+(function ($) {

    "use strict";

    /**
     *  var/obj.js
     */


    /**
     * @param
     *  o: Object // the object
     *  s: string // indexes to properties
     *  d: Any // default if not exist
     *
     * @description
     *  This extend function used to get property of obj
     *
     * @used
     *  - Get index
     *  $.obj(obj, 'index.index2')
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
        obj: function (o, s, d) {
            if (typeof(d) == 'undefined') {
                d = null;
            }
            s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
            s = s.replace(/^\./, '');           // strip a leading dot
            var a = s.split('.');
            for (var i = 0, n = a.length; i < n; ++i) {
                var k = a[i];
                if (k in o) {
                    o = o[k];
                } else {
                    return (d) ? d : {};
                }
            }
            return o;
        }
    });

})(jQuery);
/* ========================================================================
 * jQuery Front End Utils: ajaxModal.js v1.0.0
 * http://.../plugins/#ajaxModal
 * ======================================================================== */

/**
 * @MD
 * @description
 * -------------------------------
 *  AjaxModals are streamlined, but flexible, dialog prompts with asynchronous HTTP (Ajax) request.
 *
 * @used
 * -------------------------------
 * // ToDO
 *
 * @example
 * -------------------------------
 * // ToDO
 *
 * @Options
 * -------------------------------
 * // ToDo
 *
 * @Events
 * -------------------------------
 * jFE Utils ajaxmodal class exposes a few events for hooking into ajaxmodal functionality.
 * All ajaxmodal events are fired at the ajxmodal itself (i.e. at the <div class="modal ajaxmodal">).
 * ===========================================
 * | Event Type              | Description      |
 * | ----------------------- | ---------------- |
 * | before.bs.ajaxmodal     |                  |
 * | success.bs.ajaxmodal    |                  |
 * | show.bs.ajaxmodal       |                  |
 * | shown.bs.ajaxmodal      |                  |
 * | hide.bs.ajaxmodal       |                  |
 * | hidden.bs.ajaxmodal     |                  |
 * | error.bs.ajaxmodal      |                  |
 *
 */


if (typeof jQuery === 'undefined') {
    throw new Error('AjaxModal requires jQuery');
} else {
    if (!jQuery.isFunction(jQuery.obj) || !jQuery.isFunction(jQuery.callback)) {
        throw new Error('AjaxModal requires Utils functions $.obj or $.callback ');
    }
}

+function ($) {
    'use strict';

    // AFFIX CLASS DEFINITION
    // ======================

    var AjaxModal = function (element, options) {
        this.options = $.extend({}, AjaxModal.DEFAULTS, options);
        this.$element = $(element);
        this.target = ($.check(options.target)) ? options.target : ($.check(this.$element.attr('href')) ) ? this.$element.attr('href') : null;
        if (this.target) {
            this.ajax(this.target, this.options, this.$element);
        }


    };

    AjaxModal.VERSION = '1.0.0';

    AjaxModal.DEFAULTS = {};

    AjaxModal.prototype.ajax = function (target, options, $element) {
        if ($.isFunction($().loader)) {
            $('body').loader('show');
        }
        this.$element.trigger('before.bs.ajaxmodal', options);
        $.ajax({
            url: target,
            $element: this.$element,
            options: this.options,
            success: function (data) {
                var that = this,
                    options = this.options;

                options.$element = this.$element;
                options.data = data;

                that.$element.trigger('success.bs.ajaxmodal', options);

                $('body').append(data);

                that.$element.trigger('show.bs.ajaxmodal', options);
                if ($.isFunction($().loader)) {
                    $('body').loader('hide');
                }
                $('.ajaxmodal[role=dialog]')
                    .modal('show')
                    .on('hidden.bs.modal', function () {

                        that.$element.trigger('hide.bs.ajaxmodal', options);

                        $(this).remove();

                        that.$element.trigger('hidden.bs.ajaxmodal', options);

                    });

                that.$element.trigger('shown.bs.ajaxmodal', options);

                if (options && $.check(options.callback)) {
                    var callbacks = $.Callbacks("once");
                    callbacks.add($.callback(options.callback));
                    callbacks.fire(options);
                }

            },
            error: function () {

                if ($.isFunction($().loader)) {
                    $('body').loader('hide');
                }

                this.$element.trigger('error.bs.ajaxmodal');
            }
        });
    };

    // AJAXMODAL PLUGIN DEFINITION
    // =======================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this);
            var options = typeof option == 'object' && option;

            new AjaxModal(this, options);
        });
    }

    var old = $.fn.ajaxmodal;

    $.fn.ajaxmodal = Plugin;
    $.fn.ajaxmodal.Constructor = AjaxModal;


    // AJAXMODAL NO CONFLICT
    // =================

    $.fn.ajaxmodal.noConflict = function () {
        $.fn.ajaxmodal = old;
        return this;
    };


    // AJAXMODAL DATA-API
    // ==============

    $(document).ready(function () {
        var $this = $('[data-ajaxmodal]');
        Plugin.call($this);
    });

}(jQuery);

/* ========================================================================
 * jQuery Front End Utils: toggles.js v1.0.0
 * http://.../plugins/#toggles
 * ======================================================================== */

if (typeof jQuery === 'undefined') {
    throw new Error('Toggles requires jQuery');
} else {
    if (!jQuery.isFunction(jQuery.obj)) {
        throw new Error('Toggles requires Utils functions $.obj ');
    }
}

+function ($) {
    'use strict';

    // AFFIX CLASS DEFINITION
    // ======================

    var Toggles = function (element, options) {
        this.options = $.extend({}, Toggles.DEFAULTS, options);

        this.$element = $(element);
        this.attrToggles = this.$element.attr('data-toggles');
        this.dataJson = this.$element.dataJson();
        this.letMatch = (this.attrToggles.indexOf(this.options.separator) !== -1) ? this.attrToggles.replace('[', '').replace(']', '').split(this.options.separator) : this.attrToggles;

        if ($.isArray(this.letMatch)) {
            for (var i = 0; i < this.letMatch.length; i++) {
                this.widget($.trim(this.letMatch[i]));
            }
        } else {
            this.widget($.trim(this.letMatch));
        }

    };

    Toggles.VERSION = '1.0.0';

    Toggles.DEFAULTS = {
        separator: ","
    };

    Toggles.prototype.widget = function (letWidget) {

        // Get options from json config
        var options = this.$element.dataJson(letWidget),
            extendOptions = function (defaultsOption, options) {
                return $.extend(true, defaultsOption, options);
            };

        // if widget function is alread in jquery namespace, init widget
        if ($.isFunction(this.$element[letWidget])) {
            switch (letWidget) {
                case 'tooltip':
                    // Extend options
                    options = extendOptions({'html': true, "placement": "top"}, options);
                    this.$element[letWidget](options);
                    break;

                case 'modal':
                    // Extend options
                    options = extendOptions({}, options);
                    this.$element.click(function (e) {
                        var $this = $(this),
                            href = $this.attr('href'),
                            $target = $(options.target || (href && href.replace(/.*(?=#[^\s]+$)/, ''))); // strip for ie7

                        e.preventDefault();
                        $target.modal('show');
                    });

                    break;

                case 'ajaxmodal':
                    // Extend options
                    options = extendOptions({}, options);
                    this.$element.click(function (e) {
                        var $this = $(this),
                            href = $this.attr('href');

                        e.preventDefault();
                        $this.ajaxmodal(options);
                    });

                    break;
                default:
                    // Extend options
                    options = extendOptions(true, {}, options);
                    this.$element[letWidget](options);
                    break;
            }
        }


    };


    // TOGGLES PLUGIN DEFINITION
    // =======================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this);
            var options = typeof option == 'object' && option;

            new Toggles(this, options);
        });
    }

    var old = $.fn.toggles;

    $.fn.toggles = Plugin;
    $.fn.toggles.Constructor = Toggles;


    // TOGGLES NO CONFLICT
    // =================

    $.fn.toggles.noConflict = function () {
        $.fn.toggles = old;
        return this;
    };


    // TOGGLES DATA-API
    // ==============

    $(document).ready(function () {
        var $this = $('[data-toggles]');
        Plugin.call($this);
    });

}(jQuery);

/* ========================================================================
 * jQuery Front End Utils: loader.js v1.0.0
 * http://.../widgets/#loader
 * ======================================================================== */

if (typeof jQuery === 'undefined') {
    throw new Error('Loader requires jQuery');
}

+function ($) {

    'use strict';
    /**
     *  widgets/loader.js
     */

    var Loader = function (element, options) {

        this.$element = $(element);
        this.options = options;
        this.isShown = null;

    };


    Loader.prototype.show = function (e) {
        var that = this;


        if (!this.isShown) {

            this.$element.trigger('show.bs.loader');

            this.$element.find(this.options.selector).remove();

            var modalBackdrop = this.$element.append($('<div/>', {
                id: this.options.selector,
                class: this.options.cssClass + ' fade in'
            }));

            this.isShown = true;

            this.$element.trigger('shown.bs.loader', {$element: modalBackdrop});

        } else {
            this.hide();
            this.isShown = false;
        }

    };

    Loader.prototype.hide = function (e) {
        if (this.isShown) {
            this.$element.trigger('hide.bs.loader');

            this.$element.find(this.options.selector).remove();

            this.isShown = false;

            this.$element.trigger('hidden.bs.loader');

        }

    };

    Loader.VERSION = '1.0.0';

    Loader.DEFAULTS = {
        selector: '.modal-backdrop',
        cssClass: 'modal-backdrop loader'
    };

    // LOADER PLUGIN DEFINITION
    // =======================

    function Plugin(option, _relatedTarget) {

        return this.each(function () {
            var $this = $(this);
            var data = $this.data('bs.loader');
            var options = $.extend({}, Loader.DEFAULTS, $this.data(), typeof option == 'object' && option);
            if (!data) $this.data('bs.loader', (data = new Loader(this, options)));
            if (typeof option == 'string') data[option](_relatedTarget);
            else if (options.show) data.show(_relatedTarget);
        });
    }

    var old = $.fn.loader;

    $.fn.loader = Plugin;
    $.fn.loader.Constructor = Loader;


    // LOADER NO CONFLICT
    // =================

    $.fn.loader.noConflict = function () {
        $.fn.loader = old;
        return this;
    };

}(jQuery);