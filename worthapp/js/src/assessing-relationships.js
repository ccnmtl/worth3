/* global $, initActivityPanels */

(function() {
    $(document).ready(function() {
        var $container = $('.container.assessing-relationships');
        initActivityPanels($container);

        $container.find('button.get-answers').click(function() {
            var $this = $(this);

            var $container = $this.parents('.container').first();
            if ($container.find('input[type="radio"][value="answer-1"]')
                .slice(0,3).is(':checked')) {
                $container.find('.serious-concerns').show();
                $container.find('.some-concerns').hide();
                $container.find('.no-concerns').hide();
            } else if ($container.find('input[type="radio"][value="answer-1"]')
                .is(':checked')) {
                $container.find('.some-concerns').show();
                $container.find('.serious-concerns').hide();
                $container.find('.no-concerns').hide();
            } else {
                $container.find('.no-concerns').show();
                $container.find('.some-concerns').hide();
                $container.find('.serious-concerns').hide();
            }
        });
    });
})();
