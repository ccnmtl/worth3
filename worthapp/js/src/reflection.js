/* eslint-env es6 */
/* global $, initActivityPanels */

(function() {
    /**
     * Return the given <input>'s label text.
     */
    var getText = function($input) {
        return $.trim($input.closest('label').text())
            .replace(/\n/, '')
            .replace(/ \s+/g, ' ');
    };

    var getSelectedReflections = function($container) {
        var reflections = [];
        $.each($container.find('input[type="checkbox"]'), function(k, v) {
            if (v.checked) {
                var s = getText($(v));
                reflections.push(s);
            }
        });
        return reflections;
    };

    var updateReflectionPoints = function($container, reflections) {
        var $c = $container.find('.reflection-points');
        $c.empty();
        reflections.forEach(function(v) {
            $c.append('<li>' + v + '</li>');
        });
    };

    $(document).ready(function() {
        var $container = $('.container.reflection');
        initActivityPanels($container);
        var reflections = [];

        $container.find('input[type="checkbox"]').change(function(e) {
            e.preventDefault();
            var $myContainer = $(this).closest('.container.reflection');
            reflections = getSelectedReflections($myContainer);
            updateReflectionPoints($myContainer, reflections);
        });
    });
})();
