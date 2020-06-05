#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
FileEncoding, UTF-8-RAW
#Include, C:\Users\ebood\OneDrive\Documents\Code\AHK\Chrome.ahk

oldTitle :=
jsTitle = document.querySelector("[class='rm-title-display']").innerText

#Persistent
SetTimer, checkTitle, 150
return

checkTitle:
    if !IsObject(page)
        global page := Chrome.getPageByURL("https://roamresearch.com/#/app", "startswith")
    pageTitle := page.Evaluate(jsTitle).value
    if pageTitle != oldTitle
    {
        updateCSS(pageTitle)
        oldTitle := pageTitle
    }
return  


updateCSS(pageTitle)
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

    
    if SubStr(pageTitle,1,2) = "P:"
        FileRead, stylesheet, stylesheet1.css
    else if SubStr(pageTitle,1,2) = "A:"
        FileRead, stylesheet, stylesheet2.css
    else if SubStr(pageTitle,1,2) = "E:"
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
