window.addEventListener('load', function () {

    allCards = document.getElementsByClassName('projectCard')

    for (var i = 0; i < allCards.length; i++) {
        const img = allCards[i].getElementsByClassName('swiperImg')[0];
        const txt = allCards[i].getElementsByClassName('swiperText')[0];
        const txtShown = [[], [], [], [], [], []]
        let horizontal = false
        // txt.getElementsByClassName('letter')[0].style.opacity = '1'
        const swiper = new Swiper(img, {
            // Optional parameters
            direction: 'horizontal',
            // loop: true,
            effect: 'coverflow',
            mousewheelControl: true,
            mousewheel: true,
            keyboardControl: true,
            delay: 5000,
            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: img.getElementsByClassName('swiper-button-next')[0],
                prevEl: img.getElementsByClassName('swiper-button-prev')[0],
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },

            on: {
                transitionStart: function () {

                    var videos = img.querySelectorAll('video');

                    Array.prototype.forEach.call(videos, function (video) {
                        video.pause();
                    });
                },
                transitionEnd: function () {
                    var activeIndex = this.activeIndex;
                    var activeSlide = img.getElementsByClassName('swiper-slide')[activeIndex];
                    var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
                    if (activeSlideVideo != null) {
                        activeSlideVideo.play();
                    }
                },

                slideChange: function () {
                    var activeIndex = this.activeIndex;
                    var activeSlide = img.getElementsByClassName('swiper-slide')[activeIndex];
                    var activeText = txt.getElementsByClassName('pContainer')[activeIndex];
                    var activeTxts = activeText.getElementsByClassName('txt');
                    for (var i = 0; i < activeTxts.length; i++) {
                        // https://tobiasahlin.com/moving-letters/#10

                        if (txtShown[activeIndex][i] == undefined && activeIndex != 0) {
                            anime.timeline({ loop: false })
                                .add({
                                    targets: (txt.getElementsByClassName('ml10'), txt.getElementsByClassName('letter')),
                                    translateX: [0, 0],
                                    opacity: [0, 1],
                                    duration: 500,
                                    easing: 'easeInOutSine',
                                    delay: (el, i) => 80 * i
                                })
                            txtShown[activeIndex][i] += 1

                        }
                        if (txtShown[activeIndex][i] == undefined) {
                            txtShown[activeIndex][i] = 0
                        }

                    }

                },

            }
        });

        const swiperText = new Swiper(txt, {
            // Optional parameters
            direction: 'horizontal',
            // loop: true,
            effect: 'slide',
            mousewheelControl: true,
            keyboardControl: true,

            // If we need pagination
            pagination: {
                el: img.getElementsByClassName('.swiper-pagination')[0],
            },


            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },

        });
        // Syncs also the touch moves!
        swiperText.controller.control = swiper;
        swiper.controller.control = swiperText;

    }


    // show obstruction screen over swipers when scrolling in horizontal direction
    screens = document.getElementsByClassName('verticalScrollScreen')

    document.addEventListener('wheel', e => {
        // When scrolling direction is horizontal, hide screens so that controls can be used

        // When scrolling is vertical, show screens
        if (Math.abs(e.deltaY) > (Math.abs(e.deltaX) * 0.5)) {
            for (var i = 0; i < screens.length; i++) {
                screens[i].style.opacity = "1";
                screens[i].style.display = "block";
                screens[i].style.pointerEvents = "auto";

            }
        }
        else {
            for (var i = 0; i < screens.length; i++) {
                screens[i].style.opacity = "0";
                screens[i].style.display = "none";
                screens[i].style.pointerEvents = "none";
            }
        }
    })
    // Hide obstruction on click events
    document.addEventListener('click', e => {
        for (var i = 0; i < screens.length; i++) {
            screens[i].style.opacity = "0";
            screens[i].style.display = "none";
            screens[i].style.pointerEvents = "none";
        }
        // Re-do the click event
        // document.elementFromPoint(e.x, e.y).click();
    })
    document.addEventListener('touchmove', e => {

        for (var i = 0; i < screens.length; i++) {
            screens[i].style.opacity = "0";
            screens[i].style.display = "none";
            screens[i].style.pointerEvents = "none";
        }
    })
    document.addEventListener('mousemove', e => {

        for (var i = 0; i < screens.length; i++) {
            screens[i].style.opacity = "0";
            screens[i].style.display = "none";
            screens[i].style.pointerEvents = "none";
        }
    })

    //Load first explanations by default
    var projectCards = document.getElementsByClassName('projectCard')
    // Animate section titles (Allows for more control than typing animation libraries)
    for (var i = 0; i < projectCards.length; i++) {
        var projectCard = projectCards[i]
        var firstExplanation = projectCard.getElementsByClassName('textContainerInner')[0]
        letters = firstExplanation.getElementsByClassName('letter')
        for (var j = 0; j < letters.length; j++) {
            letters[j].style.opacity = 1;
        }
    }

})

