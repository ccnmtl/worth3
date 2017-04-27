/* global $ */
/* exported updateProgressBar, advanceToPanel */

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
