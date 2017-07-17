/* eslint-env es6 */
/* global $, initActivityPanels, onClickGetAnswers */

(function() {
    $(document).ready(function() {
        var selector =
            '.container-fluid.popping-our-problems, ' +
            '.container-fluid.practicing-pop';
        var $container = $(selector);
        initActivityPanels($container);

        $container.find('button.get-answers').click(onClickGetAnswers);
    });
})();
