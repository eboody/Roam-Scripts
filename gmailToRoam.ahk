#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.
#Include, C:\Users\ebood\OneDrive\Documents\Code\AHK\Chrome.ahk


F7::
    gmailPage := Chrome.getPageByURL("https://mail.google.com/mail/u/", "startswith")

    js = document.querySelectorAll("[data-message-id]")[0].querySelector("[data-hovercard-id]").getAttribute("jid")
    from := gmailPage.Evaluate(js).value

    js = document.getElementsByTagName("H2")[4].innerText
    subject := gmailPage.Evaluate(js).value

    js = document.querySelectorAll("[data-message-id]")[0].querySelector("[class^='a3s']").innerText
    emailBody := gmailPage.Evaluate(js).value

    js = document.querySelectorAll("[data-message-id]")[0].querySelectorAll("[role='gridcell']")[1].getAttribute("alt")
    timeSent := gmailPage.Evaluate(js).value

    js = document.querySelectorAll("[data-message-id]")[0].querySelector("[data-hovercard-id]").getAttribute("src")
    img := gmailPage.Evaluate(js).value

    js = window.location.href
    url := gmailPage.Evaluate(js).value

    roamPage := Chrome.getPageByURL("https://roamresearch.com/#/app/", "startswith")

    roamPage.Call("Page.bringToFront")

    
    Send ^u
    Clipboard := subject
    Send ^v
    Sleep 100


    ;this is to wait the page to register that I pasted text into the search box
    js = document.querySelectorAll("[type='search']")[0].getAttribute("value");
    while !input
    { 
        sleep 25
        input := roamPage.Evaluate(js).value
    }
    Send {Enter}

    ;wait for the page to load
    js = document.getElementsByClassName('rm-title-display')[0].innerText
    title := roamPage.Evaluate(js).value
    while (title != subject)
    {   
        sleep 25
        title := roamPage.Evaluate(js).value
    }
    Send ^{Enter}

    f := FileOpen("email.txt", "a")
    importedStuff = 
        (
***From**: ![](%img%) [%from%](mailto:%from%)
***Source:** [Link to original email](%url%)
***Date:** %timeSent%
***Tags:** #[[Email]]
#[[linebreak]]
- # Links   
        )
    f.write(importedStuff)

    ;this is to paste all the links
    js = document.querySelectorAll("[data-message-id]")[0].querySelector("[class^='a3s']").querySelectorAll("[href]").length
    length := gmailPage.Evaluate(js).value
    i := 0
    while (i < length)
    {    

        js := "document.querySelectorAll(""[data-message-id]"")[0].querySelector(""[class^='a3s']"").querySelectorAll(""[href]"")[" i "].href"
        link := gmailPage.Evaluate(js).value
        js := "document.querySelectorAll(""[data-message-id]"")[0].querySelector(""[class^='a3s']"").querySelectorAll(""[href]"")[" i "].outerText"
        linkText := gmailPage.Evaluate(js).value
        StringReplace, linkText,linkText, `r,%A_Space%, All
        StringReplace, linkText,linkText, `n,%A_Space%, All
        i++
        if (linkText = "") || InStr(link, "unsubscribe") || inStr(link, "referral") || inStr(linkText, "preferences") || inStr(linkText, "add us") || inStr(linkText, "subscribe") || inStr(linkText, "click here") || inStr(linkText, "privacy statement") || (previousLink = link)|| (previousText = linkText)
            continue

        f.write("`t[" linkText "](" link ")`n")

        previousLink := link
        previousText := linkText
    }
    f.write("- # Body`n`t")

    emailBody := StrReplace(emailBody, "`n", "`n`t")
    f.write(emailBody "`n")
    f.write("- # Attachments`r`n`t")

    js = document.querySelectorAll("[download_url]")[0].querySelectorAll("[href]").length
    length := gmailPage.Evaluate(js).value
    js = document.querySelectorAll("[download_url]")[0].querySelectorAll("[href]")[0].firstChild.innerText
    attachmentName := gmailPage.Evaluate(js).value
    i := 0
    while (i < length)
    {
        js := "document.querySelectorAll(""[download_url]"")[0].querySelectorAll(""[href]"")[" i "].href"
        attachment := gmailPage.Evaluate(js).value

        js := "document.querySelectorAll(""[download_url]"")[0].querySelectorAll(""[href]"")[" i "].firstChild.innerText"
        attachmentName := gmailPage.Evaluate(js).value 

        i++

        f.write("[" attachmentName "](" attachment ")`r`n")

    }



    f.close()

    FileRead, Clipboard, email.txt
    ClipWait, 1
    Send ^v
    FileDelete, email.txt
    Sleep 50
    Send {Esc 2}
    reload
return

^Delete::
roamPage := Chrome.getPageByURL("https://roamresearch.com/#/app/", "startswith")
js = document.querySelector("[class='bp3-button bp3-minimal bp3-small bp3-icon-more']").click()
roamPage.Evaluate(js)
js = document.querySelector("[class='bp3-popover-content']").querySelector("[class='bp3-menu']").children[6].firstChild.click()
roamPage.Evaluate(js)
js = document.querySelector(".bp3-dialog > div").children[2].click()
roamPage.Evaluate(js)
return

~^s::
reload
return