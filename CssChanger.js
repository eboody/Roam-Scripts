// ==UserScript==
// @name         CSS Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  change css stylesheets for roam with F9 and F10
// @author       @eboodnero
// @match        http://*/*
// @grant        none
// ==/UserScript==
const sheet = new CSSStyleSheet();
document.adoptedStyleSheets = [sheet];
document.onkeyup = function(e) {
  if (/*F9*/e.which == 120) {
      sheet.replaceSync("https://raw.githubusercontent.com/eboody/Roam-Scripts/master/stylesheet1.css");
  }
  else if (/*F10 */e.which == 121) {
      sheet.replaceSync("https://raw.githubusercontent.com/eboody/Roam-Scripts/master/stylesheet2.css");
  }
};
