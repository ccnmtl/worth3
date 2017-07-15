/* eslint-env es6 */
/* global $, initActivityPanels */

(function() {
    $(document).ready(function() {
        var $container = $('.container.my-commitment-to-me');
        initActivityPanels($container);

        $container.find('input[name="support-type"]').change(function(e) {
            e.preventDefault();
            var choice = $.trim($(e.target).closest('label').text());
            $(this).closest('.container').find('.my-commitment-choice')
                .text('Your support need is: ' + choice);
            $(this).closest('.container').find('.set-goal-content').show();
        });
    });
})();
