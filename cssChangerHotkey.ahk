#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
FileEncoding, UTF-8-RAW
#Include, C:\Users\ebood\OneDrive\Documents\Code\AHK\Chrome.ahk

global page := Chrome.getPageByURL("https://roamresearch.com/#/app", "startswith")

F9::
    updateCSS(1)
return

F10::
    updateCSS(2)
return

F11::
    ;js = alert("hi")
    ; js = document.querySelectorAll("[data-tag='Live List']")[7].dispatchEvent(new Event("click"))
    ; js = document.querySelector("[class='rm-title-display']").click()
    js = document.querySelector("[class='rm-title-display']").dispatchEvent(new Event("click"))
    page.Evaluate(js)
    js = document.querySelector("[class='rm-title-display']").dispatchEvent(new Event("mouseup"))
    page.Evaluate(js)
return

updateCSS(cssstyle)
{
    ;page := Chrome.getPageByURL("https://roamresearch.com/#/app", "startswith")

    ;if there is the variable "sheet" is empty then create a new stylesheet and call it "sheet"
    js = 
    (   
    const sheet = new CSSStyleSheet();
    )
    page.Evaluate(js)

    ; ;get the page title
    ; js = document.querySelector("[class='rm-title-display']").innerText
    ; pageTitle := page.Evaluate(js).value

    
    if cssstyle = 1
        FileRead, stylesheet, stylesheet1.css
    else if cssstyle = 2
        FileRead, stylesheet, stylesheet2.css
    else if cssstyle = 3
        FileRead, stylesheet, stylesheet3.css
    
    
    ;I want to append a \ to the end of each line so that I can work with multi-line strings
    stylesheet:= StrReplace(stylesheet, "`r`n" , "\`r`n")
    stylesheet:= StrReplace(stylesheet, """" , "\""")

    js = 
    (
    sheet.replaceSync("%stylesheet%");
    )
    page.Evaluate(js)
    js = document.adoptedStyleSheets = [sheet];
    page.Evaluate(js)
}

~^s::
reload
return
