/* global $, initActivityPanels, onClickGetAnswers, isFormComplete */

(function() {
    $(document).ready(function() {
        var $container = $('.container-fluid.check-out-what-youve-learned');
        initActivityPanels($container);

        $container.find('button.get-answers').click(onClickGetAnswers);

        $container.find('button.get-answers-all-correct').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $panel = $this.closest('.panel');

            if (!isFormComplete($panel)) {
                $panel.parent('section').find('.answers-required').show();
                return;
            }

            $panel.parent('section').find('.answers-required').hide();
            var allChosen =
                $panel.find('input[type="checkbox"]:checked').length ===
                $panel.find('input[type="checkbox"]').length;

            $panel.find('.alert').addClass('hidden');
            if (allChosen) {
                $panel.find('.alert.answer-1').removeClass('hidden');
            } else {
                $panel.find('.alert.answer-2').removeClass('hidden');
            }

            $this.hide();
            $this.next().show();
        });

        $container.find('button.get-answers-checkbox-combination').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $panel = $this.closest('.panel');
            var $alert = $panel.find('.alert');

            if (!$alert.hasClass('hidden')) {
                return;
            }

            if (!isFormComplete($panel)) {
                $panel.parent('section').find('.answers-required').show();
                return;
            }

            $panel.parent('section').find('.answers-required').hide();
            $.each($panel.find('input[type="checkbox"]'), function(k, v) {
                if (v.value === 'correct') {
                    $(v).closest('.form-check-label')
                        .addClass('alert-success');
                }
            });

            $alert.removeClass('hidden');

            $this.hide();
            $this.next().show();
        });
    });
})();
