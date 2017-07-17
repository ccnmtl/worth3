/* global $, updateProgressBar */

(function() {
    var resetActivity = function($container) {
        updateProgressBar($container, 0);
        $container.find('div.s0').removeClass('hidden');
    };

    $(document).ready(function() {
        var $container = $('.container-fluid.feelings');

        $container.on('click', 'figure', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $myContainer = $this.closest('.container-fluid');
            var feeling = $.trim($this.find('img').attr('alt'));
            var src = $.trim($this.find('img').attr('src'));

            $myContainer.find('.my-feeling').text(feeling);
            $myContainer.find('.feelings-choice img').attr('src', src);

            $this.closest('div.panel').addClass('hidden');
            $myContainer.find('div.s1').removeClass('hidden');
            updateProgressBar($myContainer, 100);
        });

        $container.find('button.s0').click(function(e) {
            e.preventDefault();
            var $myContainer = $(this).closest('.container-fluid');
            $(this).closest('div.panel').addClass('hidden');
            resetActivity($myContainer);
        });
    });
})();
