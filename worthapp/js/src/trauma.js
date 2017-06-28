/* global $, initActivityPanels */

(function() {
    $(document).ready(function() {
        var $container = $('.container.sofias-trauma');
        initActivityPanels($container);

        $container.find('button.get-answers').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $panel = $this.closest('.panel');
            var chosen = $panel.find('input:checked').attr('value');

            $this.closest('.panel').find('.alert').addClass('hidden');
            $this.closest('.panel').find('.alert.' + chosen)
                .removeClass('hidden');
        });

        $container.find('button.get-answers-2').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $panel = $this.closest('.panel');
            var numberChosen = $panel.find('input:checked').length;

            $this.closest('.panel').find('.alert').addClass('hidden');

            if (numberChosen === 5) {
                $this.closest('.panel').find('.alert.answer-1')
                    .removeClass('hidden');
            } else if (numberChosen > 0) {
                $this.closest('.panel').find('.alert.answer-2')
                    .removeClass('hidden');
            } else {
                $this.closest('.panel').find('.alert.answer-3')
                    .removeClass('hidden');
            }
        });
    });
})();
