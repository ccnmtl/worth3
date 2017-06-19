/* eslint-env es6 */
/* global $, initActivityPanels */

(function() {
    var updateChoices = function(
        $container,
        closeness, influence,
        emotionalSupport, practicalSupport
    ) {
        $container.find('.ssnm-influence-choice').text(influence);
        $container.find('.ssnm-closeness-choice').text(closeness);

        if (emotionalSupport) {
            $container.find('.ssnm-emotional-choice').text('Emotional');
        } else {
            $container.find('.ssnm-emotional-choice').text('');
        }

        if (practicalSupport) {
            $container.find('.ssnm-practical-choice').text('Practical');
        } else {
            $container.find('.ssnm-practical-choice').text('');
        }
    };

    $(document).ready(function() {
        var $container = $('.container.ssnm');
        initActivityPanels($container);

        var closeness = 'Very Close';
        var influence = 'Positive';
        var emotionalSupport = true;
        var practicalSupport = true;

        $container.find('input[name="ssnm-closeness"]').change(function() {
            closeness = $.trim($(this).closest('label').text());
            updateChoices(
                $(this).closest('.container'), closeness,
                influence, emotionalSupport, practicalSupport);
        });

        $container.find('input[name="ssnm-influence"]').change(function() {
            influence = $.trim($(this).closest('label').text());
            updateChoices(
                $(this).closest('.container'), closeness,
                influence, emotionalSupport, practicalSupport);
        });

        $container.find('input[name="ssnm-emotional-support"]')
            .change(function() {
                emotionalSupport = this.checked;
                updateChoices(
                    $(this).closest('.container'), closeness,
                    influence, emotionalSupport, practicalSupport);
            });

        $container.find('input[name="ssnm-practical-support"]')
            .change(function() {
                emotionalSupport = this.checked;
                updateChoices(
                    $(this).closest('.container'), closeness,
                    influence, emotionalSupport, practicalSupport);
            });
    });
})();
