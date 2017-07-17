/* global $ */
/* eslint-env es6 */
/* exported updateProgressBar, advanceToPanel, initActivityPanels */
/* exported pauseVideos, isFormComplete, onClickGetAnswers */

/*
 * Stop playback of any playing videos in the given container.
 */
var pauseVideos = function($container) {
    if ($container) {
        $.each($container.find('video'), function() {
            if (!this.paused) {
                this.pause();
            }
        });
    }
};

var updateProgressBar = function($container, percentage) {
    var $bar = $container.find('.progress-bar');
    $bar.css('width', percentage + '%');
    $bar.attr('aria-valuenow', percentage);
};

var advanceToPanel = function($container, i, total) {
    $container.find('div.panel:not(.s' + i + ')').addClass('hidden');
    $container.find('div.s' + i).removeClass('hidden');
    $container.find('.answers-required').hide();
    updateProgressBar($container, (i / total) * 100);
    $(document).scrollTop(0);

    pauseVideos($container);
};

var bindActivityButtons = function($container, idx, total) {
    $container.find('button.s' + idx).click(function(e) {
        e.preventDefault();

        // Only advance the panel of the activity where this
        // button was clicked.
        var $myContainer = $(this).closest('.container-fluid');

        advanceToPanel($myContainer, idx, total);
    });
};

/**
 * Sets up the panel advancement behavior for the given activity
 * container.
 */
var initActivityPanels = function($container) {
    $container.each(function() {
        var $this = $(this);
        var total = $this.find('.panel').length - 1;

        for (var i = 0; i <= total; i++) {
            bindActivityButtons($this, i, total);
        }
    });
};

/**
 * Common Quiz Patterns
 */

var isFormComplete = function($container) {
    var valid = true;

    var children = $container.find('input');
    $.each(children, function() {
        if (valid) {
            if (this.type === 'checkbox' || this.type === 'radio') {
                // one in the group needs to be checked
                var selector = 'input[name=' + $(this).attr('name') + ']';
                valid = $(selector).is(':checked');
            }
        }
    });

    return valid;
};

var onClickGetAnswers = function(e) {
    e.preventDefault();

    var $this = $(this);
    var $panel = $this.parents('.panel').first();

    if (!isFormComplete($panel)) {
        $panel.parent('section').find('.answers-required').show();
        return;
    }
            
    $panel.parent('section').find('.answers-required').hide();
    var chosen = $panel.find('input:checked').attr('value');
    
    $panel.find('.alert').addClass('hidden');
    $panel.find('.alert.' + chosen).removeClass('hidden');
    $panel.find('input').prop('disabled', true);

    $panel.find('input.show-correct')
        .parents('.form-check-label')
        .addClass('alert-success');
    
    $this.hide();
    $this.next().show();
};

