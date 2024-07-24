/* eslint-env es6 */
// eslint-disable-next-line no-redeclare
/* global $, initActivityPanels */

(function() {
    $(document).ready(function() {
        var $container = $('.container-fluid.basic-activity-nav');
        initActivityPanels($container);
    });
})();
