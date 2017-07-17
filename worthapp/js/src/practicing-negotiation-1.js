/* global $, initActivityPanels, onClickGetAnswers */

(function() {
    $(document).ready(function() {
        var $container = $('.container-fluid.practicing-negotiation-1');
        initActivityPanels($container);

        $container.find('button.get-answers').click(onClickGetAnswers);
    });
})();
