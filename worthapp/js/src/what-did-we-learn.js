/* global $, initActivityPanels */

(function() {
    $(document).ready(function() {
        var $container = $('.container.what-did-we-learn');
        initActivityPanels($container);

        $container.find('button.get-answers').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $panel = $this.parents('.panel').first();
            var chosen = $panel.find('input:checked').attr('value');

            $panel.find('.alert').addClass('hidden');
            $panel.find('.alert.' + chosen).removeClass('hidden');
            
            $this.hide();
            $this.next().show();
        });
    });
})();
