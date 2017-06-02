/* eslint-env jquery */
/* globals Swiper, sessionLengths, utils */

(function() {
    var highlightTocItem = function($toc, id) {
        $toc.find('li').removeClass('highlight');
        $toc.find('a[href="#' + id + '"]')
            .closest('li')
            .addClass('highlight');
    };

    $(document).ready(function () {
        var swiper = new Swiper('.swiper-container', {
            onSlideChangeEnd: function(s) {
                highlightTocItem(
                    $('ol.nav-toc'),
                    utils.idx2id(s.activeIndex - 1, sessionLengths));
            },
            onSlideNextStart: function() {
                $(document).scrollTop(0);
            }
        });

        $('.toc li>a,.nav-toc li>a').click(function(e) {
            e.preventDefault();

            var idx = utils.id2idx(e.target.href, sessionLengths);

            $('.sidenav').width(0);
            swiper.slideTo(idx + 1);
        });

        var showing = false;

        $('.toggle-toc-icon>img').click(function() {
            if (showing) {
                $('.sidenav').width(0);
            } else {
                $('.sidenav').width('700px');
            }
            showing = !showing;
        });
    });
})();
