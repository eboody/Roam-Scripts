// ==UserScript==
// @name         left-border-highlighter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  makes the line to the sibling block orange
// @author       @eboodnero
// @match        https://www.w3schools.com/tags/ref_colornames.asp
// @grant        none
// ==/UserScript==
function highlight (){
    if (document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("class") != "roam-log-page" &&
        document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[1].childNodes[0].style.borderColor == "rgb(207, 207, 207)"){
        Array.prototype.map.call(document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[1].childNodes, e => e.style.borderColor = 'DarkOrange')
    }
}
function normalize(){
    const oldColor = window.getComputedStyle(document.querySelector('.block-border-left')).borderColor
    Array.prototype.map.call(document.querySelectorAll(".block-border-left"), e => e.style.borderColor = oldColor)
}

function initialize(){

const oldColor = window.getComputedStyle(document.querySelector('.block-border-left')).borderColor
document.onkeyup = function(e) {
    if(e.which == 8 || e.which == 9 || (e.shiftKey && e.which == 9) || e.which == 13 || e.which == 38 || e.which == 40) {
        highlight();
        setTimeout(highlight, 50);
    }
};
document.onkeydown = function(e) {
    if(e.which == 8 || e.which == 9 || (e.shiftKey && e.which == 9) || e.which == 13 || e.which == 38 || e.which == 40) {
        normalize();
        setTimeout(normalize, 50);
    }
};
}
setTimeout(initialize, 5000);
