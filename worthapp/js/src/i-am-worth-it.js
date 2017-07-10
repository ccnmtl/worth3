/* global $, updateProgressBar */

(function() {
    var resetActivity = function($container) {
        updateProgressBar($container, 0);
        $container.find('div.s0').removeClass('hidden');
        $container.find('div.nametag').addClass('hidden');
    };

    $(document).ready(function() {
        var $container = $('.container.i-am-worth-it');

        $container.on('click', '.d-flex button', function(e) {
            e.preventDefault();
            var $myContainer = $(this).closest('.container');
            var attr = $.trim($(this).text()).toLowerCase();

            $myContainer.find('.worth-it-attr').text(attr + '.');

            $(this).closest('div.panel').addClass('hidden');
            $myContainer.find('div.nametag').removeClass('hidden');
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
