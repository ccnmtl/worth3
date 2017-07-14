/* eslint-env es6 */
/* global $, initActivityPanels, onClickGetAnswers */

(function() {
    $(document).ready(function() {
        var $container =
            $('.container.popping-our-problems, .container.practicing-pop');
        initActivityPanels($container);

        $container.find('button.get-answers').click(onClickGetAnswers);
    });
})();
