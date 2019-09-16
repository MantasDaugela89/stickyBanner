$(document).ready(function() {
    var $banner = $('#the-target')
    var $bannerCol = $banner.parent()
    var $bannerRow = $banner.closest('.row')
    var $pageContent = $bannerRow.find('.page-content')
    var $accordion = $bannerRow.find('#accordion')
    var navbarHeight = $('.navbar').height()

    // save default values for reset
    var defaultPosition = $banner.css('position')
    var defaultTop = $banner.css('top')

    // get position of bottom trigger line
    function getBottomLinePosition() {
        return $pageContent.offset().top + $pageContent.height()
    }

    // get position of top trigger line
    function getTopLinePosition() {
        return $accordion.offset().top + $accordion.outerHeight(true)
    }

    function stickBannerToBottom() {
        // bottom line position of content
        var bottomLinePosition = getBottomLinePosition()
        // banner position is relative to it's column
        var bannerColTopPosition = $bannerCol.offset().top
        // calculate banner top
        var bannerTop = bottomLinePosition - bannerColTopPosition - $banner.height()

        $banner.css({ position: 'absolute', top: bannerTop })
    }

    function stickBannerToTop() {
        $banner.css({ position: 'fixed', top: navbarHeight })
    }

    function resetBanner() {
        $banner.css({ position: defaultPosition, top: defaultTop })
    }

    function checkBannerPosition() {
        var scrollTop = $(window).scrollTop()
        var topLinePosition = getTopLinePosition()
        var bottomLinePosition = getBottomLinePosition()

        var topTrigger = scrollTop + navbarHeight > topLinePosition
        var bottomTrigger = scrollTop + $banner.height() + navbarHeight > bottomLinePosition

        if (bottomLinePosition < topLinePosition + $banner.height()) {
            resetBanner()
        } else if (bottomTrigger) {
            stickBannerToBottom()
        } else if (topTrigger) {
            stickBannerToTop()
        } else {
            resetBanner()
        }
    }

    // check on document load
    checkBannerPosition()

    // check on window scroll
    $(window).scroll(checkBannerPosition)

    // check on window resize
    $(window).resize(checkBannerPosition)
})
