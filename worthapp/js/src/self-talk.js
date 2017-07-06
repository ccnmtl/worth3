/* eslint-env es6 */
/* global $, initActivityPanels */

(function() {
    var initActivity = function($container) {
        initActivityPanels($container);

        $container.find('.s2 button[type="submit"]').click(function(e) {
            e.preventDefault();
            var $panel = $(this).closest('.panel');
            var correct = $container.find('input#optionsRadios3')
                .is(':checked');
            if (correct) {
                $panel.find('.alert-success').removeClass('hidden');
                $panel.find('.alert-danger').addClass('hidden');
            } else {
                $panel.find('.alert-success').addClass('hidden');
                $panel.find('.alert-danger').removeClass('hidden');
            }
            $(this).hide();
            $(this).next().show();
        });

        $container.find('button.get-answers').click(function(e) {
            e.preventDefault();
            var $panel = $(this).closest('.panel');
            $.each($panel.find('label'), function(k, v) {
                var $v = $(v);
                if ($v.hasClass('selftalk-correct')) {
                    $v.addClass('alert-success');
                }
            });
            $panel.find('.alert').removeClass('hidden');
            $(this).hide();
            $(this).next().show();
        });

        $container.find('button.self-talk-done').click(function(e) {
            e.preventDefault();
            var $panel = $(this).closest('.panel');
            $panel.find('.alert').removeClass('hidden');
            $(this).hide();
            $(this).next().show();
        });
    };

    $(document).ready(function() {
        initActivity($('.container.self-talk-3'));
        initActivity($('.container.self-talk-4'));
    });
})();
