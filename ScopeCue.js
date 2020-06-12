// ==UserScript==
// @name         left-border-highlighter
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  makes the line to the sibling block orange
// @author       @eboodnero
// @match        https://www.w3schools.com/tags/ref_colornames.asp
// @grant        none
// ==/UserScript==

var oldColor
var backgroundColor
var oldBulletColor

function addListenerToBlocks(){
    // make the colors normal on mouse down
    Array.prototype.map.call(document.querySelectorAll(".flex-v-box.roam-block-container.block-bullet-view"), e => e.onmousedown = function(e){
        normalize();
        setTimeout(normalize, 50);
    })
    //highlight elements on mouse up
    Array.prototype.map.call(document.querySelectorAll(".flex-v-box.roam-block-container.block-bullet-view"), e => e.onmouseup = function(e){
        highlight();
        setTimeout(highlight, 50);
    })
}
//highlight the text area bullet, the left border of children of the sibling and the bullet of the sibling
function highlight (){

    //make the bullet of the textarea orange
    document.querySelector("textarea").parentNode.parentNode.parentNode.querySelector(".simple-bullet-outer").style.backgroundColor = "DarkOrange"

    //check to see if this block is a header
    var check = document.querySelector("textarea").parentElement.parentElement.className.includes("level")
    //if the textarea isn't a header do this
    if (check == false){
        //make the left border of the children of the sibling above text area orange
        Array.prototype.map.call(document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[1].childNodes, e => e.style.borderColor = 'DarkOrange')
        //make bullet for sibling above text area orange for regular blocks
        document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.querySelector(".simple-bullet-outer").style.backgroundColor = "DarkOrange"
    }
    //if it's a header do this
    else {
        //make the borders of the children of the text area's sibling orange, if the text area is a header
        Array.prototype.map.call(document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.children[1].childNodes, e => e.style.borderColor = 'DarkOrange')
        document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.firstElementChild.querySelector(".simple-bullet-outer").style.backgroundColor = "DarkOrange"
    }
}
function normalize(){

    //make all borders normal color
    Array.prototype.map.call(document.querySelectorAll(".block-border-left"), e => e.style.borderColor = oldColor)
    //make all outer bullets normal color
    Array.prototype.map.call(document.querySelectorAll(".simple-bullet-outer"), e => e.style.backgroundColor = backgroundColor);
    //make all inner bullets normal
    document.querySelector("textarea").parentElement.parentElement.querySelector(".simple-bullet-inner").style.backgroundColor = oldBulletColor
}


function initialize(){
    //get the initial colors of inner, outer bullets and borders
    oldColor = window.getComputedStyle(document.querySelector('.block-border-left')).borderColor
    backgroundColor = window.getComputedStyle(document.querySelector(".simple-bullet-outer")).backgroundColor
    oldBulletColor = window.getComputedStyle(document.querySelector(".simple-bullet-inner")).backgroundColor

    //if I press any of these keys, normalize the colors of the elements
    document.onkeydown = function(e) {
        if( e.which == 8 || e.which == 9 || (e.shiftKey && e.which == 9) || e.which == 13 || e.which == 38 || e.which == 40 || (e.altKey && e.shiftKey && e.which == 37)|| (e.altKey && e.shiftKey && e.which == 38)|| (e.altKey && e.shiftKey && e.which == 39)|| (e.altKey && e.shiftKey && e.which == 40) || (e.which == 27)){
            normalize();
            setTimeout(normalize, 50);
        }
    };
    //if I press any of these keys highlight the colors of the elements mentioned above
    document.onkeyup = function(e) {
        if ( e.which == 8 || e.which == 9 || (e.shiftKey && e.which == 9) || e.which == 13 || e.which == 38 || e.which == 40 || (e.altKey && e.shiftKey && e.which == 37)|| (e.altKey && e.shiftKey && e.which == 38)|| (e.altKey && e.shiftKey && e.which == 39)|| (e.altKey && e.shiftKey && e.which == 40) ){
           // if (document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("class").includes("roam-article") || document.getElementsByTagName("textarea")[0].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute("class").includes("roam-log")){
                highlight();
                setTimeout(highlight, 50);
        }
    };
    //refresh the listeners on mouseup
    document.onmouseup = function(){
        addListenerToBlocks();
    }

    //normalize and refresh listeners on mousedown
    document.onmousedown = function(){
        normalize();
        setTimeout(normalize, 50);
    }

}

setTimeout(initialize, 5000);

