const video = document.getElementById('recipeAppVideo'); // Replace with your video element's ID
let metadataLoaded = false; // Initialize a flag variable

if (video) {
    video.addEventListener('loadedmetadata', function () {
        metadataLoaded = true; // Set the flag to true when metadata is loaded
    });
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

        // Only completely visible elements return true:
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        // Partially visible elements return true:
        //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
        return isVisible;
    }


    // Only load videos when the element above them is in the viewport (reduced page size)
    // Check everytime a user scrolls

    // Prevent video from loading more than once (because on IOS this causes issues)
    let recipeAppShown = false
    window.addEventListener("scroll", (event) => {
        // alert(observer.observe(document.getElementById('savingAidVideo')))

        if (isInViewport(document.getElementById('drawingAppVideo')) && recipeAppShown == false) {
            if (screen.width < 500) {
                document.getElementById('recipeAppVideo').innerHTML =
                    ' <source src="videos/saving_aid_shorter_mobile.webm" type="video/webm"> \
                        <source src="videos/saving_aid_shorter_mobile.mp4" type="video/mp4">'
            }
            else {
                document.getElementById('recipeAppVideo').innerHTML =
                    '<source src="videos/saving_aid_shorter_mobile.webm" type="video/webm"> \
                    < source src = "videos/saving_aid_shorter_mobile.mp4" type = "video/mp4" >'
            }
            recipeAppShown = true;
        }

    });
    //Play videos on scroll (from a codepen)
    // const registerVideo = (bound, video) => {
    //     bound = document.querySelector(bound);
    //     video = document.querySelector(video);
    //     const scrollVideo = () => {
    //         if (video.duration) {
    //             const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
    //             const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
    //             const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

    //             video.currentTime = video.duration * percentScrolled;
    //         }
    //         requestAnimationFrame(scrollVideo);
    //     }
    //     requestAnimationFrame(scrollVideo);
    // }


    // registerVideo("#bound-one", "#bound-one video");

    // registerVideo("#bound-two", "#bound-two video")

    // chatGTP modification for IOS



    const registerVideo = (boundSelector, videoSelector) => {

        if (metadataLoaded = true) {

            // alert('yay2');
            const bound = document.querySelector(boundSelector);
            const video = document.querySelector(videoSelector);

            if (!bound || !video) {
                return; // Check if the elements exist
            }

            const scrollVideo = () => {
                // alert('test');
                if (video.duration) {
                    const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
                    const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
                    const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
                    // document.getElementsByTagName('video').pause();
                    video.currentTime = video.duration * percentScrolled;

                }
            };

            window.addEventListener('scroll', scrollVideo);
        };
    }



    // document.getElementById('recipeAppVideo').addEventListener('loadedmetadata', function () {
    //     registerVideo("#bound-one", "#bound-one video");
    //     console.log('test')
    // });

    registerVideo("#bound-two", "#bound-two video");


})

// document.getElementsByTagName('video').removeAttribute('autoplay');
var video2 = document.getElementsByTagName('video');
// videoAutoPlay = video2.play();


// videos must autoplay on IOS to work, but immediately pause them for the play on scroll effect
window.addEventListener('scroll', () => {
    // this.classList.toggle('is-playing');
    // if (this.classList.contains('is-playing')) {
    //     this.innerHTML = "Play"
    Array.prototype.forEach.call(document.getElementsByTagName('video'), function (videoInstance) {
        videoInstance.pause();
    })
    // } else {
    //     this.innerHTML = "Pause";
    //     video2.play();
    // }
});
window.addEventListener('touchmove', () => {
    // this.classList.toggle('is-playing');
    // if (this.classList.contains('is-playing')) {
    //     this.innerHTML = "Play"
    Array.prototype.forEach.call(document.getElementsByTagName('video'), function (videoInstance) {
        videoInstance.pause();
    })
    // } else {
    //     this.innerHTML = "Pause";
    //     video2.play();
    // }
});
