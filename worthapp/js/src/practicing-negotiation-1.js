/* global $, initActivityPanels */

(function() {
    $(document).ready(function() {
        var $container = $('.container.practicing-negotiation-1');
        initActivityPanels($container);

        $container.find('button.get-answers').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $panel = $this.closest('.panel');
            var chosen = $panel.find('input:checked').attr('value');

            $panel.find('.alert').addClass('hidden');
            $panel.find('.alert.' + chosen)
                .removeClass('hidden');
        });
    });
})();
