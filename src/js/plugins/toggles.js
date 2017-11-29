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
