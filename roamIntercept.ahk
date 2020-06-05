#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
SetTitleMatchMode, Regex
#Include, C:\Users\ebood\OneDrive\Documents\Code\AHK\Chrome.ahk

page := Chrome.getPageByTitle("Airtable", "contains")
roamPage := Chrome.getPageByURL("https://roamresearch.com/#/app", "startswith")

js = var clickedURL
page.Evaluate(js)

~^LButton::
    IfWinActive, .*Airtable
    {   

        ;this checks if the clicked link is to roam
        js = 
        (
            function interceptClickEvent(e) {
                var href;
                var target = e.target || e.srcElement;
                if (target.tagName === 'A') {
                    href = target.getAttribute('href');

                    clickedURL = target.innerText

                    if (clickedURL.includes("roamresearch")) {
                        noteAddress = clickedURL.split("/")[7]
                        userName = clickedURL.split("/")[5]
                        //tell the browser not to respond to the link click if the link is to roam
                        e.preventDefault();
                    }
                }
            }
            //listen for link click events at the document level
            if (document.addEventListener) {
                document.addEventListener('click', interceptClickEvent);
            } else if (document.attachEvent) {
                document.attachEvent('onclick', interceptClickEvent);
            }
        )
        page.Evaluate(js)

        noteAddress := page.Evaluate("noteAddress").value
        userName := page.Evaluate("userName").value

        roamPage.Call("Page.bringToFront")

        Clipboard := "https://roamresearch.com/#/app/" . userName . "/page/" . noteAddress

        Send ^l
        Sleep 50
        Send ^v
        send {Enter}   
    }
return


~^s::
reload
return