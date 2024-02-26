
function showElement(element2, id) {
    var x2 = document.getElementById(element2);
    if (x2.style.display != "block") {
        x2.style.display = "block";
        document.getElementById(id).classList.remove('fa-plus-circle')
        document.getElementById(id).classList.add('fa-minus-circle')
    } else {
        x2.style.display = "none";
        if (id) {
            document.getElementById(id).classList.remove('fa-minus-circle')
            document.getElementById(id).classList.add('fa-plus-circle')
        }
    }
    $("nav").find("li").on("click", "a", function () {
        $('.navbarCollapse').collapse('hide');
    });
}
