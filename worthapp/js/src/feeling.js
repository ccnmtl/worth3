/* global $, updateProgressBar */

(function() {
    var resetActivity = function($container) {
        updateProgressBar($container, 0);
        $container.find('div.s0').removeClass('hidden');
    };

    $(document).ready(function() {
        var $container = $('.container.feelings');

        $container.on('click', 'figure', function(e) {
            e.preventDefault();
            var $myContainer = $(this).closest('.container');
            var feeling = $.trim($(this).attr('alt'));

            $myContainer.find('.my-feeling').text(feeling);

            $(this).closest('div.panel').addClass('hidden');
            $myContainer.find('div.s1').removeClass('hidden');
            updateProgressBar($myContainer, 100);
        });

        $container.find('button.s0').click(function(e) {
            e.preventDefault();
            var $myContainer = $(this).closest('.container');
            $(this).closest('div.panel').addClass('hidden');
            resetActivity($myContainer);
        });
    });
})();
