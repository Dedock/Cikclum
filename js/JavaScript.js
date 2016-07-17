function headerClick(id) {
    document.getElementById(id).classList.toggle("show");
}
function footerClick(id, className) {
    document.getElementById(id).classList.toggle(className);
}

window.onclick = function (event) {
    if (!event.target.matches('.headerProductButton')) {

        var dropdowns2 = document.getElementsByClassName("headerDropDownContent2"),
            i;
        for (i = 0; i < dropdowns2.length; i++) {
            var openDropdown2 = dropdowns2[i];
            if (openDropdown2.classList.contains('show')) {
                openDropdown2.classList.remove('show');
            }
        }
    }
};
