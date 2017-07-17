/* global $, initActivityPanels, onClickGetAnswers */

(function() {
    $(document).ready(function() {
        var $container = $('.container-fluid.what-did-we-learn');
        initActivityPanels($container);

        $container.find('button.get-answers').click(onClickGetAnswers);
    });
})();
