/* global $ */
/* eslint-env es6 */
/* exported updateProgressBar, advanceToPanel, initActivityPanels */

var updateProgressBar = function($container, percentage) {
    var $bar = $container.find('.progress-bar');
    $bar.css('width', percentage + '%');
    $bar.attr('aria-valuenow', percentage);
};

var advanceToPanel = function($container, i, total) {
    $container.find('div.panel:not(.s' + i + ')').addClass('hidden');
    $container.find('div.s' + i).removeClass('hidden');
    updateProgressBar($container, (i / total) * 100);
    $(document).scrollTop(0);
};

/**
 * Sets up the panel advancement behavior for the given activity
 * container.
 */
var initActivityPanels = function($container) {
    var total = $container.find('.panel').length - 1;

    for (let i = 0; i <= total; i++) {
        $container.find('button.s' + i).click(function(e) {
            e.preventDefault();

            // Only advance the panel of the activity where this
            // button was clicked.
            var $myContainer = $(this).closest('.container');

            advanceToPanel($myContainer, i, total);
        });
    }
};
