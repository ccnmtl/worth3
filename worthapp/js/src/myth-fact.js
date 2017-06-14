/* global $, updateProgressBar, initActivityPanels */

(function() {
    var resetActivity = function($container) {
        updateProgressBar($container, 0);
        $container.find('div.s0').removeClass('hidden');
        $container.find('button.s2-true,button.s2-false')
            .removeClass('disabled');
        $container.find('button.s2-true,button.s2-false')
            .removeAttr('disabled');
        $container.find('.alert.wrong-answer,.alert.right-answer')
            .addClass('hidden');
        $container.find('.alert.answer').addClass('hidden');
    };

    $(document).ready(function() {
        var $container = $('.container.myth-fact');
        initActivityPanels($container);

        $container.find('button.myth-fact-correct').click(function(e) {
            e.preventDefault();
            var $panel = $(this).closest('.panel');
            $panel.find('.alert.answer').removeClass('hidden');
            $panel.find('button.myth-fact-correct,button.myth-fact-incorrect')
                .attr('disabled', true)
                .addClass('disabled');
            $panel.find('.alert.right-answer').removeClass('hidden');
        });
        $container.find('button.myth-fact-incorrect').click(function(e) {
            e.preventDefault();
            var $panel = $(this).closest('.panel');
            $panel.find('.alert.answer').removeClass('hidden');
            $panel.find('button.myth-fact-correct,button.myth-fact-incorrect')
                .attr('disabled', true)
                .addClass('disabled');
            $panel.find('.alert.wrong-answer').removeClass('hidden');
        });

        $container.find('button.s0').click(function(e) {
            e.preventDefault();
            $(this).closest('div.panel').addClass('hidden');
            resetActivity($container);
        });
    });
})();
