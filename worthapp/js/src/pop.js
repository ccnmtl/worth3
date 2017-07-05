/* eslint-env es6 */
/* global $, initActivityPanels */

(function() {
    $(document).ready(function() {
        var $container =
            $('.container.popping-our-problems, .container.practicing-pop');
        initActivityPanels($container);

        $container.find('button[type="submit"]').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $panel = $this.parents('.panel').first();
            $panel.find('input.show-correct')
                .parents('.form-check-label')
                .addClass('alert-success');

            $panel.find('.alert').removeClass('hidden');
            $this.hide();
            $this.next().show();
        });
    });
})();
