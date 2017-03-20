var updateProgressBar = function(percentage) {
    var $bar = $('.progress-bar');
    $bar.css('width', percentage + '%');
    $bar.attr('aria-valuenow', percentage);
};

var resetActivity = function() {
    updateProgressBar(0);
    $('div.s0').removeClass('hidden');
    $('button.s2-true,button.s2-false').removeClass('disabled');
    $('button.s2-true,button.s2-false').removeAttr('disabled');
    $('.alert.wrong-answer,.alert.right-answer').addClass('hidden');
    $('.alert.answer').addClass('hidden');
};

$(document).ready(function() {
    $('button.s1').click(function(e) {
        e.preventDefault();
        $(this).closest('div.panel').addClass('hidden');
        $('div.s1').removeClass('hidden');
        updateProgressBar(20);
    });

    $('button.s2-true').click(function(e) {
        e.preventDefault();
        $('.alert.answer').removeClass('hidden');
        $('button.s2-true,button.s2-false').addClass('disabled');
        $('button.s2-true,button.s2-false').attr('disabled', true);
        $('.alert.wrong-answer').removeClass('hidden');
    });
    $('button.s2-false').click(function(e) {
        e.preventDefault();
        $('.alert.answer').removeClass('hidden');
        $('button.s2-true,button.s2-false').addClass('disabled');
        $('button.s2-true,button.s2-false').attr('disabled', true);
        $('.alert.right-answer').removeClass('hidden');
    });
    $('button.s2').click(function(e) {
        e.preventDefault();
        $(this).closest('div.panel').addClass('hidden');
        $('div.s2').removeClass('hidden');
        updateProgressBar(80);
    });

    $('button.s3').click(function(e) {
        e.preventDefault();
        $(this).closest('div.panel').addClass('hidden');
        $('div.s3').removeClass('hidden');
        updateProgressBar(100);
    });

    $('button.s0').click(function(e) {
        e.preventDefault();
        $(this).closest('div.panel').addClass('hidden');
        resetActivity();
    });
});
