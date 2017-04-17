/* eslint-env es6 */
/* global $, advanceToPanel */

(function() {
    $(document).ready(function() {
        var $container = $('.container.safety');
        var total = $container.find('.panel').length;

        for (let i = 0; i <= total; i++) {
            $container.find('button.s' + i).click(function(e) {
                e.preventDefault();
                advanceToPanel($container, i + 1, total);
            });
        }
    });
})();
