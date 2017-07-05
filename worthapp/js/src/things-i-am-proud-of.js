/* global $, updateProgressBar, initActivityPanels */

(function() {
    var resetActivity = function($container) {
        updateProgressBar($container, 0);
        $container.find('div.s0').removeClass('hidden');
    };

    var updateThingsImProudOf = function($container) {
        $container.find('.proud-of').empty();

        var $buttons = $container.find('button.active.btn-success');
        $.each($buttons, function(k, v) {
            var txt = $.trim($(v).text());
            $container.find('ul.proud-of')
                .append('<li>' + txt + '</li>');
        });
    };

    $(document).ready(function() {
        var $container = $('.container.things-i-am-proud-of');
        initActivityPanels($container);

        $container.on('click', '.d-flex button', function(e) {
            e.preventDefault();

            $(this).toggleClass('active btn-success');

            updateThingsImProudOf($(this).closest('.container'));
        });

        $container.find('button.s0').click(function(e) {
            e.preventDefault();
            var $myContainer = $(this).closest('.container');
            $(this).closest('div.panel').addClass('hidden');
            resetActivity($myContainer);
        });
    });
})();
