// ==UserScript==
// @name         CSS Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==
const sheet = new CSSStyleSheet();
document.adoptedStyleSheets = [sheet];
document.onkeyup = function(e) {
  if (/*e.ctrlKey && */e.which == 120) {
      // alert("CTRL + F7 was pressed");
      sheet.replaceSync("https://raw.githubusercontent.com/eboody/Roam-Scripts/master/stylesheet1.css");
  }
  else if (/*e.ctrlKey && */e.which == 121) {
      // alert("CTRL + F7 was pressed");
      sheet.replaceSync("https://raw.githubusercontent.com/eboody/Roam-Scripts/master/stylesheet2.css");
  }
};
