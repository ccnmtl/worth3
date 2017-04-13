/* eslint-env es6 */
/* global $, advanceToPanel */

(function() {
    $(document).ready(function() {
        var $container = $('.container.safety');
        var total = 4;

        for (let i = 1; i <= total; i++) {
            $container.find('button.s' + i).click(function(e) {
                e.preventDefault();
                advanceToPanel($container, i + 1, total);
            });
        }
    });
})();
