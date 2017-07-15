/* eslint-env jquery */
/* globals Swiper, sessionLengths, utils, pauseVideos */

(function() {
    var highlightTocItem = function($toc, id) {
        $toc.find('li').removeClass('highlight');
        $toc.find('li ol li a[href="#' + id + '"]')
            .closest('li')
            .addClass('highlight');
    };

    $(document).ready(function () {
        var swiper = new Swiper('.swiper-container', {
            preloadImages: false,
            onSlideChangeStart: function(s) {
                pauseVideos($(s.slides[s.activeIndex]));
                pauseVideos($(s.slides[s.activeIndex - 1]));
                pauseVideos($(s.slides[s.activeIndex + 1]));
            },
            onSlideChangeEnd: function(s) {
                highlightTocItem(
                    $('ol.nav-toc'),
                    utils.idx2id(s.activeIndex, sessionLengths));
            },
            onSlideNextStart: function() {
                $(document).scrollTop(0);
            }
        });

        $('.toc li>a,.nav-toc li>a').click(function(e) {
            e.preventDefault();

            var idx = utils.id2idx(e.target.href, sessionLengths);

            pauseVideos($(swiper.slides[swiper.activeIndex]));

            $('.sidenav').width(0);
            swiper.slideTo(idx);
        });

        $('#logo').click(function(e) {
            e.preventDefault();
            $('.sidenav').width(0);
            swiper.slideTo(0);
        });

        $('.toggle-toc-icon>img').click(function(e) {
            e.stopPropagation();
            var showing = $('.sidenav').width() > 0;
            if (showing) {
                $('.sidenav').width(0);
            } else {
                $('.sidenav').width('700px');
            }
        });

        $('body').click(function(e) {
            if ($('.sidenav').width() > 0) {
                e.preventDefault();
                $('.sidenav').width(0);
            }
        });

    });
})();
