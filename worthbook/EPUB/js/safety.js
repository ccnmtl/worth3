/* eslint-env es6 */
/* global $, advanceToPanel */

(function() {
    $(document).ready(function() {
        var $container = $('.container.safety');
        var total = 21;

        for (let i = 1; i <= total; i++) {
            $container.find('button.s' + i).click(function(e) {
                e.preventDefault();
                advanceToPanel($container, i + 1, total);
            });
        }

        for (let i = 1; i <= 9; i++) {
            $container.find('input.inp' + i).change(function(e) {
                e.preventDefault();
                $container.find('div.summary' + i + '>strong').text(
                    this.value);
            });
        }
    });
})();
