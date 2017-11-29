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
