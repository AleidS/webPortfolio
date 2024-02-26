// Make sure tools are displayed nicely in mobile view

window.addEventListener('load', function () {
    const lists = document.getElementsByClassName('cardUl')


    function cardListItems() {

        // In mobile view, translate list items so theyre all in one line (while slanted)
        if (window.innerWidth < 430) {
            for (var i = 0; i < lists.length; i++) {
                const listItems = lists[i].getElementsByTagName('li')
                for (var j = 0; j < listItems.length; j++) {
                    listItems[j].style.transform = `translateX(-${(j / listItems.length) * 150 + (2 * (3 - listItems.length) * j)}%)`

                }
            }
        }
        else {
            for (var i = 0; i < lists.length; i++) {
                const listItems = lists[i].getElementsByTagName('li')
                for (var j = 0; j < listItems.length; j++) {
                    listItems[j].style.transform = `translateX(0%)`

                }
            }

        }
    }
    cardListItems()
    // On resize check if still small screen
    window.addEventListener('resize', function () {
        cardListItems()
    })
})