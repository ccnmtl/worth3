/* eslint-env es6 */
/* global $, initActivityPanels, isFormComplete */

(function() {
    $(document).ready(function() {
        var $container =
            $('.container.popping-our-problems, .container.practicing-pop');
        initActivityPanels($container);

        $container.find('button[type="submit"]').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $panel = $this.parents('.panel').first();

            if (!isFormComplete($panel)) {
                $panel.parent('section').find('.answers-required').show();
                return;
            }
            
            $panel.parent('section').find('.answers-required').hide();            
            $panel.find('input.show-correct')
                .parents('.form-check-label')
                .addClass('alert-success');

            $panel.find('.alert').removeClass('hidden');
            $this.hide();
            $this.next().show();
            $panel.find('input').prop('disabled', true);
        });
    });
})();
