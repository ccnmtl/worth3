/* eslint-env es6 */
/* global $, advanceToPanel */

(function() {
    $(document).ready(function() {
        var $container = $('.container.self-talk');
        var total = $container.find('.panel').length - 1;

        for (let i = 0; i <= total; i++) {
            $container.find('button.s' + i).click(function(e) {
                e.preventDefault();
                advanceToPanel($container, i, total);
            });
        }

        $container.find('button.s5').click(function(e) {
            e.preventDefault();
            $container.find('.alert.hidden').removeClass('hidden');
        });
    });
})();
