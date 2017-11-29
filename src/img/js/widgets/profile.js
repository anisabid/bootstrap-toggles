(function ($, $$) {

    "use strict";

    /**
     *  widgets/profile.js
     */

    $$.$({
        widgets_profile: {
            status: function () {
                $('.kt-profile').each(function () {
                    var $this = $(this);
                    $this.find('[data-status-value]').click(function (event) {
                        event.preventDefault();
                        $this.find('[data-status]').attr('data-status', $(this).data('status-value'));
                        return true;
                    });
                });
            },
            initial: function () {
                $('.kt-profile').each(function () {
                    var _profile = $(this).json('profile');
                    var firstname = _profile.name.substring(0, 1);
                    var lastname = _profile.lastname.substring(0, 1);
                    $(".img-circle").html(firstname + lastname);
                });
            },
            ready: function () {
                this.initial();
                this.status();
            }
        }

    });

})(J, KTJS);