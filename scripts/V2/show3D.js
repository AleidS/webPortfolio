// Toggle between regular contents and 3D contents

var previousHeaderBg = {}
var previousFooterBg = {}
// const stylle = getComputedStyle(document.getElementById('recipeApp-bound')).backgroundColor
// alert(stylle)


function show3D(id) {
    const bound = document.getElementById(`${id}-bound`)
    // document.getElementById(`${id}-bound`).style.display = 'block';
    const card = document.getElementById(`${id}`)
    const cardFooter = card.getElementsByClassName('cardFooter')[0]
    const cardHeader = card.getElementsByTagName('h2')[0]
    const contents = document.getElementById(`${id}`).getElementsByClassName('contents')[0]

    // because IOS has a different background color, save initial background-colors here before removing it, and re-appy on closing 3D view
    if (previousHeaderBg.id == undefined) {
        previousHeaderBg.id = getComputedStyle(card.getElementsByTagName('h2')[0]).background
    }
    if (previousFooterBg.id == undefined) {
        previousFooterBg.id = getComputedStyle(card.getElementsByClassName('cardFooter')[0]).background
    }
    // document.getElementById(`${id}-card`).getElementsByClassName('contents')[0].style.height = '0px';
    if (card.getElementsByClassName('3dCheckbox')[0].checked == true) {

        anime.timeline({ loop: false })
            .add({
                targets: contents,
                // translateX: [0, -200],
                opacity: [1, 0],
                duration: 1000,
                easing: 'easeInOutSine'
            })
        setTimeout(function () {
            anime.timeline({ loop: false })
                .add({
                    targets: bound,
                    opacity: [0, 1],
                    // translateX: [500, 0],
                    duration: 500,
                    easing: 'easeInOutSine'
                })
        }, 1000)
        setTimeout(function () {
            card.style.backgroundColor = "none!important";
            card.style.backdropFilter = "none";
            card.style.minHeight = "50vh";
            card.style.border = "none";
            card.style.width = "100vw"
            card.style.maxWidth = "100vw"
            contents.style.display = "none"
            bound.style.height = '5000px';
            bound.style.display = 'block';

            // cardHeader.style.backgroundImage = 'url(../Images/backgrounds/nazar-synytsia-0ybIsh4UPYk-unsplash-bg-min2.png)';
            cardHeader.style.background = 'none';

            cardHeader.style.position = 'sticky'
            cardHeader.style.top = '70px'
            cardHeader.style.zIndex = '20'
            // card.style.borderTop = 'none'

            // Using cssText overrides all styles, not just the ones listed
            cardFooter.style.position = 'sticky'
            cardFooter.style.top = '94vh'
            cardFooter.style.background = 'none';
            // cardFooter.style.backgroundImage = 'url(../Images/backgrounds/nazar-synytsia-0ybIsh4UPYk-unsplash-bg-min2.png)';

        }, 1000)
        setTimeout(function () {
            window.scrollBy({
                top: window.innerHeight / 2,
                left: 0,
                behavior: "smooth",
            });
        }, 3000)
    }
    else {

        anime.timeline({ loop: false })
            .add({
                targets: bound,
                opacity: 0,
                // translateX: [0, 500],
                height: 0,
                duration: 500,
                easing: 'easeInOutSine'
            })
        scrollAnchor = card.getElementsByClassName('scrollAnchor')[0];
        card.scrollIntoView();
        contents.style.display = "flex"
        anime.timeline({ loop: false })
            .add({
                targets: contents,
                // translateX: [-500, 0],
                opacity: 1,
                duration: 500,
                delay: 500,
                easing: 'easeInOutSine'
            })

        setTimeout(function () {
            bound.style.display = 'none';
            contents.style.display = "flex"
            contents.style.height = "auto"
            card.style.maxWidth = 'calc(min(860px, 100%))'
            card.getElementsByTagName('h2')[0].style.position = 'static'
            card.getElementsByTagName('h2')[0].style.top = 'auto'
            card.getElementsByTagName('h2')[0].style.zIndex = 'auto'
            card.getElementsByClassName('cardFooter')[0].style.position = 'static'
            card.getElementsByClassName('cardFooter')[0].style.bottom = 'none'
            card.getElementsByTagName('h2')[0].style.background = previousHeaderBg.id;
            card.getElementsByClassName('cardFooter')[0].style.background = previousFooterBg.id;
        }, 1000);


    }
}