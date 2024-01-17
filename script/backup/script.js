
function checkLoaded(video) {
    if (video) {
        video.addEventListener('loadedmetadata', function () {
            return (true); // Set the flag to true when metadata is loaded
        });
    }
    else {
        return (false);
    }
}



document.addEventListener("DOMContentLoaded", function () {

    //Change videos to mobile version for smaller screens.
    // function isInViewport(element) {
    //     const rect = element.getBoundingClientRect();

    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //     );
    // }

    // Above didn't work on mobile, below does; 
    // https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling
    function isInViewport(el) {
        var rect = el.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        // when user is 2000px above video, start loading video.
        var isVisible = (elemTop >= 2000);
        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }





    // Prevent video from loading more than once (because on IOS this causes issues)
    let savingAidVideoShown = false;
    let drawingAppVideoShown = false;
    let recipeAppVideoShown = false;
    let artPortfolioVideoShown = false;

    // Only load videos when they are in the viewport (reduces page size)
    // Check everytime a user scrolls wether videos are in viewport
    window.addEventListener("scroll", (event) => {
        // alert(observer.observe(document.getElementById('savingAidVideo')))
        if (isInViewport(document.getElementById('savingAidVideo'))) {

            if ($(window).width() < 500 && savingAidVideoShown == false) {
                document.getElementById('savingAidVideo').innerHTML =
                    '<source src= "videos/saving_aid_shorter_mobile.webm" type="video/webm"> \
                    <source src= "videos/saving_aid_shorter_mobile.mp4" type="video/mp4">'
            }
            else {
                document.getElementById('savingAidVideo').innerHTML =
                    '<source src= "videos/saving_aid_shorter_desktop_stepsize2.webm" type="video/webm"> \
                <source src= "videos/saving_aid_shorter_desktop3.mp4" type="video/mp4">'
            }
            savingAidVideoShown = true;
        }

        if (isInViewport(document.getElementById('drawingAppVideo'))) {
            if (screen.width < 500 && drawingAppVideoShown == false) {
                document.getElementById('drawingAppVideo').innerHTML =
                    '<source src="videos/drawingApp3_mobile_stepsize4.webm" type="video/webm"> \
                <source src="videos/drawingApp3_mobile.mp4">'
            }
            else {
                document.getElementById('drawingAppVideo').innerHTML =
                    '<source src="videos/drawingApp3_desktop.webm" type="video/webm"> \
        <source src="videos/drawingApp3_desktop.mp4" type="video/mp4">'
            }
            drawingAppVideoShown = true;
        }

        if (isInViewport(document.getElementById('recipeAppVideo'))) {
            if ($(window).width() < 500 && recipeAppVideoShown == false) {
                document.getElementById('recipeAppVideo').innerHTML =
                    '<source src="videos/recipes_shorter_mobile.webm" type="video/webm"> \
        <source src="videos/recipes_shorter_mobile.mp4" type="video/mp4">'
            }
            else {
                document.getElementById('recipeAppVideo').innerHTML =
                    '<source src="videos/recipes_shorter_desktop.webm" type="video/webm"> \
        <source src="videos/recipes_shorter_rendered.mp4" type="video/mp4">'
            }
            recipeAppVideoShown = true;
        }

        if (isInViewport(document.getElementById('artPortfolioVideo'))) {
            if ($(window).width() < 500 && artPortfolioVideoShown == false) {
                document.getElementById('artPortfolioVideo').innerHTML =
                    '<source src="videos/artPortfolio2Mobile.webm" type="video/webm"> \
        <source src="videos/artPortfolio2Mobile.mp4" type="video/mp4">'
            }
            else {
                document.getElementById('artPortfolioVideo').innerHTML =
                    '<source src="videos/artPortfolio2Desktop.webm" type="video/webm"> \
        <source src="videos/artPortfolio2Desktop.mp4" type="video/mp4">'
            }
            artPortfolioVideoShown = true;
        }

    });


    //Play videos on scroll (from a codepen)
    const registerVideo = (bound, video) => {
        bound = document.querySelector(bound);
        video = document.querySelector(video);
        const scrollVideo = () => {
            if (video.duration) {
                const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
                const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
                const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

                video.currentTime = video.duration * percentScrolled;
            }
            requestAnimationFrame(scrollVideo);
        }
        requestAnimationFrame(scrollVideo);
    }


    registerVideo("#bound-one", "#bound-one video");

    registerVideo("#bound-two", "#bound-two video")

    registerVideo("#bound-three", "#bound-three video")

    registerVideo("#bound-four", "#bound-four video")

});

// Disable the autoplay immediately again (tag needs to be present for IOS)
// videos must autoplay on IOS to work, but immediately pause them for the play on scroll effect
window.addEventListener('scroll', () => {
    Array.prototype.forEach.call(document.getElementsByTagName('video'), function (videoInstance) {
        videoInstance.pause();
    })
});
window.addEventListener('touchmove', () => {
    Array.prototype.forEach.call(document.getElementsByTagName('video'), function (videoInstance) {
        videoInstance.pause();
    })
});



// For background-attachment fixed on IOS (use attachment scroll, then compensate the scroll position)
// from: https://jsfiddle.net/QN9cH/1/


//Didn't work properly (image position relative to div, not screen)

$(window).scroll(function () {
    var scrolledY = $(document).scrollTop();
    // Array.prototype.forEach.call(document.getElementsByClassName('sectionTitle'), function (fixedBackground) {
    //     fixedBackground.css('background-position', 'left ' + ((scrolledY)) + 'px');
    // });
    // $('.sectionTitle, document.body').css('background-position', 'center ' + ((scrolledY)) + 'px');
    // $('.sectionBackground').css('background-position-y', ((scrolledY - 150)) + 'px');

});




// var frameNumber = 0, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst = 500,
//     // get page height from video duration
//     setHeight = document.getElementById("set-height"),
//     // select video element
//     vid = document.getElementById('v0');

// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function () {
//     setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });

// // Use requestAnimationFrame for smooth playback
// function scrollPlay() {
//     var frameNumber = window.pageYOffset / playbackConst;
//     vid.currentTime = frameNumber;
//     window.requestAnimationFrame(scrollPlay);
// }

// window.requestAnimationFrame(scrollPlay);



// $(document).ready(function () {
//     $(function () {
//         $("#welcome_placeholder").load("welcome.html");
//     });
//     $(function () {
//         $("#saving_aid_placeholder").load("savingAid.html");
//     });
//     $(function () {
//         $("#recipe_placeholder").load("recipes.html");
//     });

// });

// https://codepen.io/j-v-w/pen/ZEbGzyv
// const html = document.documentElement;
// const canvas = document.getElementById("hero-lightpass");
// const context = canvas.getContext("2d");

// const frameCount = 148;
// const currentFrame = index => (
//     `videos/saving_aid_sequence/${index.toString().padStart(4, '0')}.png`
// )

// const preloadImages = () => {
//     for (let i = 1; i < frameCount; i++) {
//         const img = new Image();
//         img.src = currentFrame(i);
//     }
// };

// const img = new Image()
// img.src = currentFrame(1);
// canvas.width = 1158;
// canvas.height = 770;
// img.onload = function () {
//     context.drawImage(img, 0, 0);
// }

// const updateImage = index => {
//     img.src = currentFrame(index);
//     // context.fillStyle = "rgba(0, 0, 0, 0)";
//     // context.clearRect(0, 0, width, height);
//     // context.beginPath();
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     context.drawImage(img, 0, 0);

// }

// window.addEventListener('scroll', () => {
//     const scrollTop = html.scrollTop;
//     const maxScrollTop = html.scrollHeight - window.innerHeight;
//     const scrollFraction = scrollTop / maxScrollTop;
//     const frameIndex = Math.min(
//         frameCount - 1,
//         Math.ceil(scrollFraction * frameCount)
//     );
//     if (frameIndex % 2 == 0) {
//         requestAnimationFrame(() => updateImage(frameIndex + 1))
//     }
// });
// window.addEventListener('touchmove', () => {
//     const scrollTop = html.scrollTop;
//     const maxScrollTop = html.scrollHeight - window.innerHeight;
//     const scrollFraction = scrollTop / maxScrollTop;
//     const frameIndex = Math.min(
//         frameCount - 1,
//         Math.ceil(scrollFraction * frameCount)
//     );
//     if (frameIndex % 2 == 0) {
//         requestAnimationFrame(() => updateImage(frameIndex + 1))
//     }
// });

// preloadImages()

// // A second canvas behind the first one, to avoid flickering

// const canvas2 = document.getElementById("hero-lightpass2");
// const context2 = canvas2.getContext("2d");

// const img2 = new Image()
// img2.src = currentFrame(1);
// canvas2.width = 1158;
// canvas2.height = 770;
// img.onload = function () {
//     context2.drawImage(img, 0, 0);
// }


// const currentFrame2 = index => (
//     `videos/saving_aid_sequence/${index.toString().padStart(4, '0')}.png`
// )

// const updateImage2 = index => {
//     img2.src = currentFrame(index);
//     // context.fillStyle = "rgba(0, 0, 0, 0)";
//     // context.clearRect(0, 0, width, height);
//     // context.beginPath();
//     context2.clearRect(0, 0, canvas2.width, canvas2.height);
//     context2.drawImage(img2, 0, 0);

// }

// window.addEventListener('scroll', () => {
//     const scrollTop = html.scrollTop;
//     const maxScrollTop = html.scrollHeight - window.innerHeight;
//     const scrollFraction = scrollTop / maxScrollTop;
//     const frameIndex = Math.min(
//         frameCount - 1,
//         Math.ceil(scrollFraction * frameCount)
//     );
//     if (frameIndex % 2 != 0) {
//         requestAnimationFrame(() => updateImage2(frameIndex + 2))
//     }
// });

// preloadImages()




// load a different video for mobile https://stackoverflow.com/questions/76142819/loading-different-videos-based-on-mobile-or-desktop
// var drawingAppVideo = $('#drawingAppVideo2');
// var recipeAppVideo = $('#recipeAppVideo');
// var videoSrc3 = $('#savingAidVideo');
// var videoSrc4 = $('#artPortfolioVideo');
// alert("Screen Width is: " + screen.width);

// Intersection observer
// const observer = new IntersectionObserver(entries => {
//     console.log(entries);
// })


// let callback = function () {
//     return (true);
// }

// const options = {
//     root: document.getElementById('savingAidVideo'),
//     rootMargin: '0px',
//     threshold: 1.0,
// };

// const observer = new IntersectionObserver(callback, options);
