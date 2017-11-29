(function ($, $$) {
    /**
     *  plugin/apc.js
     */

        // ToDO
        // ...

    $$.$({
        apc: {
            options: {
                active: false
            },
            clean: function () {
                var _location_href = window.location.href,
                    _redirect_href = _location_href;
                _redirect_href += (_location_href.indexOf('?') !== -1) ? '&cleanAPC=clean' : '?&cleanAPC=clean';

                $.get(_redirect_href, function (data) {
                    window.location.reload();
                });
            },
            init: function () {
                if (this.options.active) {
                    var _btnCleanApc = '<a href="#" class="btn btn-danger btn-clean-apc"><i class="fa fa-refresh"></i> </a>';
                    $('.navbar.horizonatal-menu').append(_btnCleanApc);

                    this.action();
                }
                return true;
            },
            action: function () {
                var _this = this,
                    $btnCleanApc = $('.navbar.horizonatal-menu').find('.btn-clean-apc');

                $btnCleanApc.click(function (event) {
                    event.preventDefault();
                    $btnCleanApc.find('.fa-refresh').addClass('fa-spin');
                    _this.clean();
                    return false;
                });

                $(document).keydown(function (event) {
                    if (event.keyCode == 82 && event.ctrlKey) {
                        event.preventDefault();
                        $btnCleanApc.find('.fa-refresh').addClass('fa-spin');
                        _this.clean();
                    }
                });
            },
            ready: function () {
                this.init();
            }
        }

    });

})(jQuery, KTJS);

