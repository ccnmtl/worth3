/* global $, updateProgressBar */

(function() {
    var resetActivity = function($container) {
        updateProgressBar($container, 0);
        $container.find('div.s0').removeClass('hidden');
    };

    $(document).ready(function() {
        var $container = $('.container.feeling');

        $container.find('figure').click(function(e) {
            e.preventDefault();
            $(this).closest('div.panel').addClass('hidden');
            $container.find('div.s1').removeClass('hidden');
            updateProgressBar($container, 100);
        });

        $container.find('button.s0').click(function(e) {
            e.preventDefault();
            $(this).closest('div.panel').addClass('hidden');
            resetActivity($container);
        });
    });
})();
