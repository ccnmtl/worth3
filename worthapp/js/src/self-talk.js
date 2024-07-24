/* eslint-env es6 */
// eslint-disable-next-line no-redeclare
/* global $, initActivityPanels, onClickGetAnswers */

(function() {
    var initActivity = function($container) {
        initActivityPanels($container);

        $container.find('button.get-answers').click(onClickGetAnswers);
    };

    $(document).ready(function() {
        initActivity($('.container-fluid.self-talk-3'));
        initActivity($('.container-fluid.self-talk-4'));
    });
})();
