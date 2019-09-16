










$(document).ready(function(){


    $(window).scroll(function() {

        var stickyHeader = $('.navbar').height();

        var banner = $('#the-target');

        var bannerTop = banner.offset().top - $(window).scrollTop() - stickyHeader;

        var container = banner.closest('.row');

        var containerTop = container.offset().top - $(window).scrollTop();

        var containerBottom = $(window).scrollTop() - container.offset().top - container.height();

        var bannerContainer = $(banner).parent();

        var equalPoint = containerBottom + banner.height() + stickyHeader;

        alert(container.outerHeight())

        if (bannerTop <= 0) {

            // var banner = $('#the-target');

            $(banner).css({"position": "fixed", "top": stickyHeader + "px"});

            if (equalPoint >= 0)  {

                // var banner = $('#the-target');
                var columnHeight = bannerContainer.prev().height();

                $(bannerContainer).css({"height": columnHeight + "px"});
                $(banner).css({"position": "absolute", "top": "inherit", "bottom": "0px"});



            } else {

                $(banner).css({"position": "fixed", "top": stickyHeader + "px", "bottom": "inherit"});
                bannerContainer.css({"height": "inherit"});

                var bannerContainerTop = bannerContainer.offset().top - $(window).scrollTop();

                var bannerContainerBottom = $(window).scrollTop() - bannerContainer.offset().top - bannerContainer.height();

                if (bannerContainerBottom <= 0) {

                    $(banner).css({"position": "relative", "bottom": "inherit", "top": "inherit"});

                }



            }

        } else {
            $(banner).css({"position": "relative", "bottom": "inherit", "top": "inherit"});

        }





    });



});