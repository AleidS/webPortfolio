// Make sure tools are displayed nicely in mobile view

window.addEventListener('load', function () {
    const lists = document.getElementsByClassName('cardUl')
    const listsIOS = document.getElementsByClassName('cardUlIOS')

    function cardListItemsIOS() {

        // In mobile view, translate list items so theyre all in one line (while slanted)
        if (window.innerWidth < 430) {
            for (var i = 0; i < listsIOS.length; i++) {
                const listItems = listsIOS[i].getElementsByTagName('li')
                for (var j = 0; j < listItems.length; j++) {
                    // listItems[j].style.webkitTransform = `translateX(-${(j / listItems.length) * 100}%)`
                    listItems[j].style.opacity = `0`

                }
                const listItemsActive = listsIOS[i].getElementsByClassName('active')
                for (var j = 0; j < listItemsActive.length; j++) {
                    listItems[j].style.opacity = `1`
                    listItemsActive[j].style.webkitTransform = `translateX(-${(j / listItemsActive.length) * 60 + (0 * (3 - listItemsActive.length) * j)}%)`
                }
            }
        }
        else {
            for (var i = 0; i < listsIOS.length; i++) {
                const listItems = listsIOS[i].getElementsByTagName('li')
                for (var j = 0; j < listItems.length; j++) {
                    listItems[j].style.transform = `translateX(-20%)`

                }
                const listItemsActive = listsIOS[i].getElementsByClassName('active')
                for (var j = 0; j < listItemsActive.length; j++) {
                    listItemsActive[j].style.transform = `translateX(0%)`
                }
            }

        }
    }
    function cardListItems() {

        // In mobile view, translate list items so theyre all in one line (while slanted)
        if (window.innerWidth < 430) {
            for (var i = 0; i < lists.length; i++) {
                const listItems = lists[i].getElementsByTagName('li')
                for (var j = 0; j < listItems.length; j++) {
                    listItems[j].style.webkitTransform = `translateX(-${(j / listItems.length) * 180 + (2 * (3 - listItems.length) * j)}%)`
                    listItems[j].style.transform = `translateX(-${(j / listItems.length) * 180 + (2 * (3 - listItems.length) * j)}%)`

                }
                const listItemsActive = lists[i].getElementsByClassName('active')
                for (var j = 0; j < listItemsActive.length; j++) {
                    listItemsActive[j].style.transform = `translateX(-${(j / listItemsActive.length) * 150 + (2 * (3 - listItemsActive.length) * j)}%)`
                    // listItemsActive[j].style.webkitTransform = `translateX(-${(j / listItemsActive.length) * 100 + (2 * (3 - listItemsActive.length) * j)}%)`
                }
            }
        }
        else {
            for (var i = 0; i < lists.length; i++) {
                const listItems = lists[i].getElementsByTagName('li')
                for (var j = 0; j < listItems.length; j++) {
                    listItems[j].style.webkitTransform = `translateX(-20%)`
                    listItems[j].style.transform = `translateX(-20%)`

                }
                const listItemsActive = lists[i].getElementsByClassName('active')
                for (var j = 0; j < listItemsActive.length; j++) {
                    listItemsActive[j].style.webkitTransform = `translateX(0%)`
                    listItemsActive[j].style.transform = `translateX(0%)`
                }
            }

        }
    }
    cardListItems()
    cardListItemsIOS()
    // On resize check if still small screen
    window.addEventListener('resize', function () {
        cardListItems();
        cardListItemsIOS();
    })
    window.addEventListener('scroll', function () {
        cardListItems();
        cardListItemsIOS();
    })
})