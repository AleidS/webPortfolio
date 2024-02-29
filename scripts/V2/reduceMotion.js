var reduced = false
function reduceMotion(id) {
    reduced = !reduced
    removeAnimations(id)
}
function removeAnimations(id) {
    el = document.getElementById(`${id}`)
    span = el.getElementsByTagName('span')[0]
    icon = el.getElementsByTagName('i')[0]

    if (reduced) {
        understand = false;
        span.innerHTML = 'activate <br/> motion'
        icon.classList.remove("fa-video");
        icon.classList.add("fa-video-slash");
        $('#reduceDetected').css('display', 'block');
        $('#reduceSlider').prop("checked", false);
        $('#reduceText').prop("innerHTML", 'Click here activate motion')
        $('.cardVideo').each(function () {
            $(this).get(0).pause();
            $(this).get(0).autoplay = false
            $(this).get(0).load()
        });
        $('#arrow').css('animation-name', 'none');
        $('#arrow').css('opacity', '1');
        $('.letter, .letters, .ml10, .animate').each(function () {
            this.style.opacity = 1;
        })
        $('.blinker').each(function () {
            this.style.opacity = 0;
            this.style.animation = 'none';
        })
        // Hide switches that enable 3D animations, unless one is already open
        // $('.learnmore').each(function () {

        //     // alert(this.querySelector('.switch3D'))
        //     if (this.querySelector('.switch3D').checked == false) {
        //         this.style.display = 'none'
        //     }
        // })

        $(' .playbutton').each(function () {

            this.classList.remove('fa-pause')
            this.classList.add('fa-play')
        })
        $('.cardTool').each(function () {
            this.style.opacity = 1;
            if (window.innerWidth > 430) {
                this.style.transform = 'none';
            }
            this.classList.add('active');
            this.style.transitionDelay = '0s';
        })
        AOS.init({
            duration: 0,
            disable: true,
        });
        document.documentElement.style.scrollBehavior = "auto";

    }
    if (!reduced) {

        icon.classList.remove("fa-video-slash");
        icon.classList.add("fa-video");
        $('#reduceSlider').prop("checked", true);
        $('#reduceText').prop("innerHTML", 'Click here reduce motion')
        $('#arrow').css('animation-name', 'example');
        $('#arrow').css('opacity', '0');
        $('#reduceDetected').css('display', 'none');
        span.innerHTML = 'reduce <br/> motion'
        $('.learnmore').each(function () {
            // alert(this.querySelector('.switch3D'))
            this.style.display = 'flex'
        })
        AOS.init({
            duration: 800,

        });
        $('.cardTool').each(function () {


        })
        document.documentElement.style.scrollBehavior = "smooth";
        $('.blinker').each(function () {
            this.style.opacity = 1;
            this.style.animation = 'blink 1s infinite steps(2, start)';
        })
        $(' .playbutton').each(function () {
            this.classList.add('fa-pause')
            this.classList.remove('fa-play')
        })
    }
}
window.addEventListener('load', () => {
    if (window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true) {
        // alert('reduced motion detected, animations are disabled')
        $('#reduceDetected').css('display', 'block');
        $('#reduceMotionSlider').css("display", 'none');
        reduced = true
    }
    removeAnimations('reduceMotion')

})
