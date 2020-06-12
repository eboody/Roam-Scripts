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
    if (document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("class") != "roam-article"){
        Array.prototype.map.call(document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[1].childNodes, e => e.style.borderColor = 'DarkOrange')
        if (document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.nextElementSibling.innerText != "") {
            document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.querySelector(".simple-bullet-outer").style.backgroundColor = "DarkOrange"
        }
    }
    //document.querySelector("textarea").parentElement.parentElement.querySelector(".simple-bullet-inner").style.backgroundColor = "DarkOrange"
}
function normalize(){
    const oldColor = window.getComputedStyle(document.querySelector('.block-border-left')).borderColor
    const backgroundColor = window.getComputedStyle(document.querySelector(".simple-bullet-outer")).backgroundColor
    //const oldBulletColor = window.getComputedStyle(document.querySelector(".simple-bullet-inner")).backgroundColor
    Array.prototype.map.call(document.querySelectorAll(".block-border-left"), e => e.style.borderColor = oldColor)
    Array.prototype.map.call(document.querySelectorAll(".simple-bullet-outer"), e => e.style.backgroundColor = backgroundColor);
    //document.querySelector("textarea").parentElement.parentElement.querySelector(".simple-bullet-inner").style.backgroundColor = oldBulletColor
}


function initialize(){

    const oldColor = window.getComputedStyle(document.querySelector('.block-border-left')).borderColor

    document.onkeydown = function(e) {
        if( e.which == 8 || e.which == 9 || (e.shiftKey && e.which == 9) || e.which == 13 || e.which == 38 || e.which == 40 || (e.altKey && e.shiftKey && e.which == 37)|| (e.altKey && e.shiftKey && e.which == 38)|| (e.altKey && e.shiftKey && e.which == 39)|| (e.altKey && e.shiftKey && e.which == 40) ){
            normalize();
            setTimeout(normalize, 50);
        }
    };
    document.onkeyup = function(e) {
        if( e.which == 8 || e.which == 9 || (e.shiftKey && e.which == 9) || e.which == 13 || e.which == 38 || e.which == 40 || (e.altKey && e.shiftKey && e.which == 37)|| (e.altKey && e.shiftKey && e.which == 38)|| (e.altKey && e.shiftKey && e.which == 39)|| (e.altKey && e.shiftKey && e.which == 40) ){
            highlight();
            setTimeout(highlight, 50);
        }
    };
}

setTimeout(initialize, 5000);
