(function () {
    if (typeof(Prototype) !== 'undefined') {
        if (Prototype.BrowserFeatures.ElementExtensions) {
            var disablePrototypeJS = function (method, pluginsToDisable) {
                    var handler = function (event) {
                        event.target[method] = undefined;
                        setTimeout(function () {
                            delete event.target[method];
                        }, 0);
                    };
                    pluginsToDisable.each(function (plugin) {
                        jQuery(window).on(method + '.bs.' + plugin, handler);
                    });
                },
                pluginsToDisable = ['collapse', 'dropdown', 'modal', 'tooltip', 'popover', 'tab'];
            disablePrototypeJS('show', pluginsToDisable);
            disablePrototypeJS('hide', pluginsToDisable);
        }
    }

})();


(function (window, document, $) {
    var EVENTS = {
        o: $({}),
        init: function () {
            $.each({
                trigger: 'publish',
                on: 'subscribe',
                off: 'unsubscribe'
            }, function (key, val) {
                jQuery[val] = function () {
                    EVENTS.o[key].apply(EVENTS.o, arguments);
                };
            });
        }
    };

    window.EVENTS = EVENTS.init();

})(window, window.document, jQuery);

(function (window, $) {

    var $$ = {
        $: function (obj) {
            $.extend($$, obj);
        },
        ready: function () {


            $.each(this, function (index, obj) {
                if (index !== '$' && index !== 'ready' && index !== 'fn' && index !== 'plugins') {
                    obj.ready();
                }
            });
        }
    };
    $(document).ready(function () {
        $$.ready();
    });

    window.KTJS = $$;

})(window, jQuery);