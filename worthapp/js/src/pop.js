/* eslint-env es6 */
/* global $, initActivityPanels, isFormComplete */

(function() {
    $(document).ready(function() {
        var $container =
            $('.container.popping-our-problems, .container.practicing-pop');
        initActivityPanels($container);

        $container.find('button.get-answers').click(onClickGetAnswers);
    });
})();
