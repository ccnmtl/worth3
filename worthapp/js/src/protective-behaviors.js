/* global $, initActivityPanels */

(function() {
    var calculateRiskLevel = function($container) {
        var riskLevel = 0;
        if ($container.find('.btn-danger').length > 0) {
            riskLevel = 2;
        } else if ($container.find('.btn-warning').length > 0) {
            riskLevel = 1;
        }
        return riskLevel;
    };

    var updateRiskLevel = function($container, level) {
        var levels = [
            {
                'title': 'Not risky',
                'class': 'success',
                'text': 'Great! It doesn\'t sound like you\'re involved ' +
                    'in any of the dangerous sexual activity we addressed.'
            },
            {
                'title': 'A little risky',
                'class': 'warning',
                'text': 'Some of the stuff you do is mildly risky.'
            },
            {
                'title': 'Risky',
                'class': 'danger',
                'text': 'Some of the stuff you do is high risk. It ' +
                    'would be a good idea to think about some ways to keep ' +
                    'yourself safer.'
            }
        ];
        $container.find('.risk-level').removeClass(
            'alert-success alert-warning alert-danger');
        $container.find('.risk-level').addClass(
            'alert-' + levels[level]['class']);
        $container.find('.risk-level>.alert-heading').text(
            'Your risk level: ' + levels[level]['title']);
        $container.find('.risk-level>span').text(levels[level]['text']);
    };

    $(document).ready(function() {
        var $container = $('.container-fluid.protective-behaviors');
        initActivityPanels($container);

        $container.find('.pb-buttons button').click(function(e) {
            e.preventDefault();

            var $this = $(this);
            if ($this.hasClass('pb-red')) {
                $this.toggleClass('btn-danger');
            } else if ($this.hasClass('pb-yellow')) {
                $this.toggleClass('btn-warning');
            } else if ($this.hasClass('pb-green')) {
                $this.toggleClass('btn-success');
            }

            var $myContainer = $this.closest('.container-fluid');

            // Calculate risk level based on the user's answers
            var riskLevel = calculateRiskLevel($myContainer);

            // Update the risk level that's on the next panel
            updateRiskLevel($myContainer, riskLevel);
        });

        $container.find('.pb-buttons-risk-rating button').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $panel = $this.closest('.panel');

            // remove any existing selections
            var $button = $panel.find('div.pb-buttons-risk-rating>button');
            for (var i = 0; i < $button.length; i++) {
                $($button[i]).removeClass('btn-danger');
                $($button[i]).removeClass('btn-warning');
                $($button[i]).removeClass('btn-success');
            }

            if ($this.hasClass('pb-red')) {
                $this.toggleClass('btn-danger');
            } else if ($this.hasClass('pb-yellow')) {
                $this.toggleClass('btn-warning');
            } else if ($this.hasClass('pb-green')) {
                $this.toggleClass('btn-success');
            }

            $panel.find('div.pb-feedback,div.pb-feedback-button').removeClass('hidden');
        });
    });
})();
