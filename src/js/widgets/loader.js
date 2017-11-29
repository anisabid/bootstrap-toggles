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