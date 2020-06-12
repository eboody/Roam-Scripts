var oldColor = window.getComputedStyle(document.querySelector('.block-border-left')).borderColor
document.onkeyup = function(e) {
    if(e.which == 8 || e.which == 9 || (e.shiftKey && e.which == 9) || e.which == 13 || e.which == 38 || e.which == 40) {
        var elements = document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[1].childNodes
        Array.prototype.map.call(elements, e => e.style.borderColor = 'DarkOrange')
    }
};
document.onkeydown = function(e) {
    if(e.which == 8 || e.which == 9 || (e.shiftKey && e.which == 9) || e.which == 13 || e.which == 38 || e.which == 40) {
        var elements = document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[1].querySelectorAll(".block-border-left")
        Array.prototype.map.call(elements, e => e.style.borderColor = oldColor)
    }
};