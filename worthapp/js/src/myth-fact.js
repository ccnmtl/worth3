/* global $, updateProgressBar, advanceToPanel */

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

        $container.find('button.s1').click(function(e) {
            e.preventDefault();
            advanceToPanel($container, 1, 3);
        });

        $container.find('button.s2-true').click(function(e) {
            e.preventDefault();
            $container.find('.alert.answer').removeClass('hidden');
            $container.find('button.s2-true,button.s2-false').addClass('disabled');
            $container.find('button.s2-true,button.s2-false')
                .attr('disabled', true);
            $container.find('.alert.wrong-answer').removeClass('hidden');
        });
        $container.find('button.s2-false').click(function(e) {
            e.preventDefault();
            $container.find('.alert.answer').removeClass('hidden');
            $container.find('button.s2-true,button.s2-false')
                .addClass('disabled');
            $container.find('button.s2-true,button.s2-false')
                .attr('disabled', true);
            $container.find('.alert.right-answer').removeClass('hidden');
        });
        $container.find('button.s2').click(function(e) {
            e.preventDefault();
            advanceToPanel($container, 2, 3);
        });

        $container.find('button.s3').click(function(e) {
            e.preventDefault();
            advanceToPanel($container, 3, 3);
        });

        $container.find('button.s0').click(function(e) {
            e.preventDefault();
            $(this).closest('div.panel').addClass('hidden');
            resetActivity($container);
        });
    });
})();
