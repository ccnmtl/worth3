/* global $, updateProgressBar, initActivityPanels */

(function() {
    var resetActivity = function($container) {
        updateProgressBar($container, 0);
        $container.find('div.s0').removeClass('hidden');
        $container.find('button.myth-fact-correct,button.myth-fact-incorrect')
            .prop('disabled', false);
        $container.find('.alert.wrong-answer,.alert.right-answer')
            .addClass('hidden');
        $container.find('.alert.answer').addClass('hidden');
        $container.find('.learn-more').addClass('hidden');
    };

    $(document).ready(function() {
        var $container = $('.container.myth-fact');
        initActivityPanels($container);

        $container.find('button.myth-fact-correct').click(function(e) {
            e.preventDefault();
            var $panel = $(this).closest('.panel');
            $panel.find('.alert.answer').removeClass('hidden');
            $panel.find('button.myth-fact-correct,button.myth-fact-incorrect')
                .prop('disabled', true);
            $panel.find('.alert.right-answer').removeClass('hidden');
            $panel.find('.learn-more').removeClass('hidden');
        });
        $container.find('button.myth-fact-incorrect').click(function(e) {
            e.preventDefault();
            var $panel = $(this).closest('.panel');
            $panel.find('.alert.answer').removeClass('hidden');
            $panel.find('button.myth-fact-correct,button.myth-fact-incorrect')
                .attr('disabled', true);
            $panel.find('.alert.wrong-answer').removeClass('hidden');
            $panel.find('.learn-more').removeClass('hidden');
        });

        $container.find('button.s0').click(function(e) {
            e.preventDefault();
            $(this).closest('div.panel').addClass('hidden');
            resetActivity($container);
        });
    });
})();
