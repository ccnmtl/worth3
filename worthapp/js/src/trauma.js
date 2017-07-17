/* global $, initActivityPanels, onClickGetAnswers */

(function() {
    $(document).ready(function() {
        var $container = $('.container-fluid.sofias-trauma');
        initActivityPanels($container);

        $container.find('button.get-answers').click(onClickGetAnswers);

        $container.find('button.get-answers-2').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $panel = $this.closest('.panel');
            
            var numberChosen = $panel.find('input:checked').length;
            if (numberChosen === 0) {
                $panel.parent('section').find('.answers-required').show();
                return;
            }
            
            $panel.parent('section').find('.answers-required').hide();                               
            $panel.find('.alert').addClass('hidden');

            if (numberChosen === 5) {
                $this.closest('.panel').find('.alert.answer-1')
                    .removeClass('hidden');
            } else if (numberChosen > 0) {
                $this.closest('.panel').find('.alert.answer-2')
                    .removeClass('hidden');
            } else {
                $this.closest('.panel').find('.alert.answer-3')
                    .removeClass('hidden');
            }
            $panel.find('input').prop('disabled', true);
            $this.hide();
            $this.next().show();
        });
    });
})();
