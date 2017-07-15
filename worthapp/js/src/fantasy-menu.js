/* global $, initActivityPanels */

(function() {
    var updateFeedback = function($container) {
        var score = $container.find('input:checked').length;

        var title = '';
        var feedback = '';

        
        if (score <= 0) {
            title = 'learning to be adventurous!';
            feedback = 'When you\'re ready, you can pick a number of ' +
                'fun things from the list to spice things up while taking ' +
                'care of yourself and your body.';
        } else if (score <= 5) {
            title = 'A little adventurous!';
            feedback = 'You picked a number of ' +
                'fun things from the list, you\'re definitely not shy! ';
        } else if (score <= 10) {
            title = 'A little adventurous!';
            feedback = 'You picked a number of ' +
                'fun things from the list, you\'re definitely not shy!';
        } else if (score <= 20) {
            title = 'Ready for an adventure!';
            feedback = 'You are definitely up for fun while taking ' +
                'care of yourself and your body.';
        } else {
            title = 'Next level adventurous!';
            feedback = 'Your sexual ' +
                'playfulness is definitely on another level. You\'re up for '+
                'trying lots of new things to spice things up and aren\'t ' +
                'shy when it comes to exploring.';
        }

        $container.find('.fantasy-feedback-title').text(title);
        $container.find('.fantasy-feedback').text(feedback);

        var $special = $container.find('.fantasy-special-feedback');
        $special.empty();
        if ($container.find('input.risky:checked').length > 0) {
            $special.append(
                '<p>Some of the items you\'ve chosen are fun but a ' +
                    'little risky, so it\'s important to be extra ' +
                    'careful.</p>');
        }
        if ($container.find('input.special-1:checked').length > 0) {
            $special.append(
                '<p>While using a male condom during sexual intercourse ' +
                    'is generally safe and effective, condoms are not ' +
                    'foolproof. There\'s still a risk of getting HIV/an STI ' +
                    'or becoming pregnant when using a condom, especially ' +
                    'if it breaks or comes off during sex. In addition, ' +
                    'when you use a dental dam, be sure to ONLY use one ' +
                    'side. Don\'t flip the dam over for another round ' +
                    'because you will expose yourself to the very fluids ' +
                    'you\'re trying to avoid! And do not re-use a dam on ' +
                    'another body part (e.g. from anus to vulva or ' +
                    'vice-versa) because you can transfer germs from one ' +
                    'body area to another. Do not re-use a dam for another ' +
                    'act of oral sex later on either. Dams are for one-time ' +
                    'use only.</p>');
        }
        if ($container.find('input.special-2:checked').length > 0) {
            $special.append(
                '<p>The male condom can reduce, but does not eliminate, ' +
                    'the risk of HIV and STI transmission for oral, vaginal ' +
                    'and anal sex. Finding condoms with the right "fit and ' +
                    'feel" is important because it may help improve ' +
                    'consistent and correct use, and sexual pleasure.</p>');
        }
        if ($container.find('input.special-3:checked').length > 0) {
            $special.append(
                '<p>The effectiveness of condoms depends on how ' +
                    'consistently and correctly they are used. If female ' +
                    'condoms are not used consistently and correctly, then ' +
                    'the risk of an exposure to, and transmission of, HIV ' +
                    'and STIs increases. For example, an erect penis can ' +
                    'miss the outer ring and enter between the vaginal wall ' +
                    'and the condom. It is also possible for the outer ring ' +
                    'to be pushed, either partially or fully, into the ' +
                    'vagina.</p>');
        }
        if ($container.find('input.special-4:checked').length > 0) {
            $special.append(
                '<p>Tracing your partner\'s body with your tongue can be very ' +
                    'erotic and playful. It is ' +
                    'important however to use dental dams and condoms when ' +
                    'tracing vaginal and anal body parts. It is also ' +
                    'important to avoid any areas from which bodily fluids ' +
                    'may come (i.e. an open sore or cut).</p>');
        }
        if ($container.find('input.special-5:checked').length > 0) {
            $special.append(
                '<p>Playing sexy games or using sex toys can be lots of ' +
                    'fun and a great source of sexual stimulation. To have ' +
                    'fun in the safest way possible, games and the use of ' +
                    'toys should not include the sharing of bodily ' +
                    'fluids. If you share your toys with your partner, use ' +
                    'a condom on the toy when you use it, and change the ' +
                    'condom before your partner uses it.</p>');
        }
        if ($container.find('input.special-6:checked').length > 0) {
            $special.append(
                '<p>When coming up with new and even more adventurous ' +
                    'ways to be sexually intimate, be sure to consider the ' +
                    'most effective ways to protect yourself and your ' +
                    'partner. Using male and female condoms and dental dams ' +
                    'consistently to avoid coming in direct contact with ' +
                    'bodily fluids help to greatly reduce the risk of ' +
                    'transmission.</p>');
        }
    };

    $(document).ready(function() {
        var $container = $('.container.fantasy-menu');
        initActivityPanels($container);

        $container.find('input').change(function(e) {
            e.preventDefault();
            updateFeedback($(this).closest('.container'));
        });
    });
})();
