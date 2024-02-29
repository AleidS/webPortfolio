// project tools and section titles revealed on scroll 

var string = `Portfolio`;
var array = string.split("");
var string2 = `Web development by Aleid`;
var array2 = string2.split("");
var timer;
var timer2;
let shownPassword = false;

function frameLooper() {
    if (!reduced) {
        if (array.length > 0 && document.getElementById("title") != null) {
            document.getElementById("title1").innerHTML += array.shift();
        } else {
            clearTimeout(timer);
            // When finished, type subtitle
            frameLooper2();
        }

        loopTimer = setTimeout('frameLooper()', 70);
    }
    else {
        document.getElementById("title1").innerHTML = string
        document.getElementById("subtitle").innerHTML = string2
    }
}
// Subtitle typing effect
function frameLooper2() {
    if (array2.length > 0 && document.getElementById("subtitle") != null) {
        document.getElementById("subtitle").innerHTML += array2.shift();
    } else {
        clearTimeout(timer2);
    }
    loopTimer = setTimeout('frameLooper2()', 70);
}
window.addEventListener('load', function () {
    frameLooper();

    var sectionTitles = document.querySelectorAll(".animated");
    // console.log(sectionTitles)
    var projectCards = document.querySelectorAll(".projectCard");
    var projectTools = document.querySelectorAll(".projectCard li");
    var projectSwiperVids = document.querySelectorAll(".contents video");
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var txts = document.getElementsByClassName('txt');

    // Split up text-to-be-animated into letters with spans

    for (var i = 0; i < sectionTitles.length; i++) {
        // Wraps each character
        sectionTitles[i].innerHTML = sectionTitles[i].textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        if (reduced) {
            $('.letter, .letters, .ml10, .animate').each(function () {
                this.style.opacity = 1;
            })
        }
    }


    // Split up text-to-be-animated into words with spans
    // for (var i = 0; i < txts.length; i++) {
    //     // Wraps each word, rather than each character (otherwise get stange word-breaks)
    //     txts[i].innerHTML = txts[i].textContent.replace(/\S+/g, "<span class='letter'>$&</span>");
    // }


    // Keep track of shown texts so they don't get rendered again on scroll
    let sectionTitleShown = []



    // Portfolio title and subtitle typing effects, top of page (so no intersection oberver needed)

    // Autoload is disabled because it infered with lazyload and increases file size.
    //  However, when video is visible, do autoplay
    function playVideos() {
        for (var i = 0; i < projectSwiperVids.length; i++) {
            var elementTop = projectSwiperVids[i].getBoundingClientRect().top;
            var elementVisible = 10;
            var windowHeight = window.innerHeight;
            var windowWidth = window.innerWidth;
            // Only load once
            if (elementTop < windowHeight - elementVisible && projectSwiperVids[i].autoplay == false && reduced == false && manuallyPaused != true) {
                projectSwiperVids[i].autoplay = true;
                projectSwiperVids[i].load();
            }
        }
    }
    function revealTools() {

        // Makes tools fade in from right
        for (var i = 0; i < projectTools.length; i++) {
            var elementTop = projectTools[i].getBoundingClientRect().top;
            var elementVisible = 10;
            var windowHeight = window.innerHeight;
            var windowWidth = window.innerWidth;
            if (elementTop < windowHeight - elementVisible) {
                projectTools[i].classList.add("active");
            } else {
                if (!reduced) {
                    projectTools[i].classList.remove("active");
                }
            }
        }

        // Each item in the list has increasing delay (so top one first, bottom last)
        for (var i = 0; i < projectCards.length; i++) {
            var projectTool = projectCards[i].querySelectorAll("li");
            for (var j = 0; j < projectTool.length; j++) {
                if (!reduced) {
                    projectTool[j].style.transitionDelay = (`${(j / 3)}s`);
                }
            }
        }

    }
    function revealExplanations() {
        var explanations = document.querySelectorAll(".explanation");
        // increase opacity/size of explanations when scrolling (mobile view)
        // https://alvarotrigo.com/blog/css-animations-scroll/

        for (var i = 0; i < explanations.length; i++) {
            var elementTop = explanations[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if ((window.innerWidth / window.innerHeight) < (5 / 8)) {
                explanations[i].style.opacity = `${1 - ((elementTop - 200) / (window.innerHeight - 500))}`;
                // explanations[i].style.scale = `${Math.cos((elementTop * 1.4 - 300) / 500)}`;
            }
            // If someone is resizing window from narrow->large, reset (otherwise they're all invisible)
            else {
                explanations[i].style.opacity = `${1}`;
                explanations[i].style.scale = `${1}`;
            }
        }
    }
    // Not working
    function explanationOnResize() {
        var explanations = document.querySelectorAll(".explanation");
        for (var i = 0; i < explanations.length; i++) {
            explanations[i].style.opacity = 0;
            explanations[i].style.scale = `${1}`;
        }

    }
    function revealSectionTitles() {

        // Animate section titles (Allows for more control than typing animation libraries)
        for (var i = 0; i < sectionTitles.length; i++) {
            var elementTop = sectionTitles[i].getBoundingClientRect().top;
            var elementVisible = -100;
            // var elementID = tlts[i].id
            var ml10 = sectionTitles[i].getElementsByClassName('ml10')
            var letter = sectionTitles[i].getElementsByClassName('letter')
            if (elementTop < windowHeight - elementVisible && !reduced) {
                if (sectionTitleShown[i] != true) {
                    // https://tobiasahlin.com/moving-letters/#10
                    anime.timeline({ loop: false })
                        .add({
                            targets: (sectionTitles[i].getElementsByClassName('ml10'), sectionTitles[i].getElementsByClassName('letter')),
                            translateY: [-20, 0],
                            opacity: [0, 1],
                            duration: 700,
                            easing: 'easeInOutSine',
                            delay: (el, i) => 20 * i
                        })
                    // Textilate messed up alignment of text
                    sectionTitleShown[i] = true
                }
            }
        }
    }

    window.addEventListener("scroll", () => {
        revealSectionTitles()
        revealExplanations()
        revealTools()
        playVideos()
    });
    window.addEventListener("resize", () => {
        explanationOnResize()
        revealSectionTitles()
        revealTools()
        playVideos()

    });;
    let loaded = 0;
    let smallestSize = false

})