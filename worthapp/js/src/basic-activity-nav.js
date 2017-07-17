/* eslint-env es6 */
/* global $, initActivityPanels */

(function() {
    $(document).ready(function() {
        var $container = $('.container-fluid.basic-activity-nav');
        initActivityPanels($container);
    });
})();
