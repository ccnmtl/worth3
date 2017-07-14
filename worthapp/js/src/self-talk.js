/* eslint-env es6 */
/* global $, initActivityPanels, onClickGetAnswers */

(function() {
    var initActivity = function($container) {
        initActivityPanels($container);

        $container.find('button.get-answers').click(onClickGetAnswers);
    };

    $(document).ready(function() {
        initActivity($('.container.self-talk-3'));
        initActivity($('.container.self-talk-4'));
    });
})();
