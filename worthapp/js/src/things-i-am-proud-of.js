/* global $, updateProgressBar */

(function() {
    var resetActivity = function($container) {
        updateProgressBar($container, 0);
        $container.find('div.s0').removeClass('hidden');
    };

    $(document).ready(function() {
        var $container = $('.container.things-i-am-proud-of');

        $container.on('click', '.d-flex button', function(e) {
            e.preventDefault();
            var $myContainer = $(this).closest('.container');
            var proudOf = $.trim($(this).text());

            $myContainer.find('.proud-of').text(proudOf);

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
