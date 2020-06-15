var style1 = (<><![CDATA[
.roam-center{background: #DFDFDF !important;}
/* change main font */
body,
html,
div,
textarea {
    font-family: Roboto;
}

/* change font for all headings */
h1,
h1 div,
h1 textarea,
.rm-level1 div,
#right-sidebar .rm-level2,
/* page headings in right sidebar */
.rm-reference-main .rm-level3,
/* page headings in referenced items */
.rm-level1 textarea,
.roam-log-preview h1,
h1.rm-title-display,
h1.rm-title-display textarea,
.level1,
.level2 {
    font-family: "Fira Code", Menlo, monospace;
    font-weight: 300 !important;
    letter-spacing: -0.08em;
}

h2,
h2 div,
h2 textarea,
h3,
h3 div,
h3 textarea {
    font-family: "Fira Code", Menlo, monospace;
    font-weight: 600 !important;
}
/* move the sync popup to the right */
.bp3-popover.bp3-tooltip > .bp3-popover-content{
	padding-left: 150px;
}

.rm-embed-inner-block-hide {
    //cursor: auto;
    margin-left: -20px;
    padding-left: 15px;
    //transition: all 100ms ease-in;
}


.flex-v-box .starred-pages-wrapper {
	padding: 0px 0px 0px 0px !important; 
}
.flex-v-box .starred-pages-wrapper > div{
    background-color: transparent !important;
}
.starred-pages > a > div{
	padding-left: 20px !important;
}
.roam-body .roam-app .roam-main .roam-article {
    position: relative;
    padding: 16px 42px 120px;
}
.starred-pages > a[href="/#/app/Eran/page/6ZSLiTyEr"] > div:hover,
.starred-pages > a[href="/#/app/Eran/page/F4G9dSpib"] > div:hover,
.starred-pages > a[href="/#/app/Eran/page/3nFQAAs5z"] > div:hover,
.starred-pages > a[href="/#/app/Eran/page/743AcGV4T"] > div:hover {
	background-color: transparent !important;   
}
/* less space below page heading */
.roam-body .roam-app .roam-main .roam-article .rm-title-display {
    margin-bottom: 25px;
}

/* lighter bullets */
#right-sidebar .controls .roam-bullet-closed,
.controls .roam-bullet-closed {
    background: none;
    border: 1px solid silver;
}

.simple-bullet-inner {
    opacity: 0.5;
}

/* lighter vertical guides */
.block-border-left {
    border-color: #cfcfcf;
}

/* blocks as headings */
.roam-block-container h1 {
    font-weight: 300;
    font-size: 26px;
    color: black;
}

.roam-block-container h2 {
    font-weight: 600;
    font-size: 18px;
    color: black;
}

.roam-block-container h3 {
    font-weight: 600;
    font-size: 14px;
    color: black;
}

/* align checkboxes better */
label.check-container {
    margin-bottom: 11px;
    margin-right: 3px;
}

/* align checkboxes in zoomed-in headings */
.rm-level1 label.check-container {
    margin-bottom: 17px;
    margin-right: -3px;
}
/* don't shrink block references */
.rm-block-ref {
    font-size: 1em;
    padding: 0;
    margin: 0;
}

.rm-block-ref label.check-container {
    margin-bottom: 12px;
}

/* lighter block text */
.roam-block-container div {
    color: #555;
}

/* don't need "SHORTCUTS" heading */
.starred-pages-wrapper .flex-h-box {
    display: none;
}

.starred-pages-wrapper > div:first-child {
    margin: 0 -18px;
}

/* more subtle logo */
#roam-sidebar-logo img {
    opacity: 0.4;
}
#roam-sidebar-logo span {
    display: none;
}

/* fade loading astrolabe */
.loading-astrolabe img {
    opacity: 0.2;
}

/* lighter sidebar background */
#right-sidebar {
    background-color: #718899 !important;
    //flex: 1 0 43% !important;
    box-shadow: 1px 12px 12px -6px rgba(0,0,0, .4);
}

/* sidebar sections */
#roam-right-sidebar-content > div {
    border-bottom: 1px solid #ddd !important;
    margin: 0 !important;
    padding: 10px 4px 10px 14px;
}

/* sidebar section headings */
#roam-right-sidebar-content > div > div:first-child {
    margin-left: -10px;
}

/* smaller sidebar headings */
#right-sidebar strong {
    color: #718899;
    font-size: 0.8em;
}

/* rule under top section of left sidebar */
.roam-sidebar-content > div:first-child {
    padding: 4px 16px !important;
    margin-bottom: 8px;
    border-bottom: 1px solid rgb(57, 75, 89);
}

/* rule under topbar */
.roam-topbar {
    border-bottom: 1px solid #eee;
}

/* crumbs */
.rm-reference-item > div:first-child > div:first-child div span:not(.bp3-icon-chevron-right),
.roam-article > div:first-child:not(.roam-log-container) > div:first-child div span:not(.bp3-icon-chevron-right) {
    font-size: 12px;
    line-height: 1.3;
    //color: #bbb !important;
    /* truncate to smaller width, use css for ellipsis */
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 2px !important;
}

.rm-reference-item > div:first-child > div:first-child div span:hover:not(.bp3-icon-chevron-right),
.roam-article > div:first-child:not(.roam-log-container) > div:first-child div span:hover:not(.bp3-icon-chevron-right) {
    color: black !important;
}

/* chevrons in crumbs */
.roam-reference-item > div > div:first-child .bp3-icon-chevron-right,
.roam-article > div > div:first-child:not(.roam-log-container) .bp3-icon-chevron-right {
    font-size: 1em;
    margin: 0 3px;
    color: #ddd !important;
}

/* no checkboxes in crumbs */
.roam-reference-item > div:first-child:not(.roam-log-container) > div:first-child label.check-container,
.roam-article > div:first-child:not(.roam-log-container) > div:first-child label.check-container {
    display: none;
}

/* link buttons for referenced items */
.rm-reference-main button {
    border: 1px solid #eee;
    border-radius: 0.3em;
    font-size: 0.8em;
}

.rm-reference-main button:hover {
    border-color: #ccc;
}

/* referenced item section headings */
.rm-reference-main {
    border-top: 0px solid #d4d4d4;
}

.rm-reference-main .flex-h-box {
    min-height: 30px;
}

.rm-reference-main strong {
    color: #666;
    font-size: 0.8em;
}

/* remove background from referenced items */
.rm-reference-item {
    padding: 12px 0 0 0;
    margin: 12px 0 0 0;
    border-top: 1px solid #eee;
    background: none;
    
}

/* slightly bigger page headings under referenced items */
.rm-reference-main .rm-level3 {
    font-size: 1.6em;
}

/* search */
.rm-find-or-create-wrapper {
    flex: 0 1 100% !important;
}

.rm-find-or-create-wrapper .bp3-input {
    border: none !important;
    box-shadow: none !important;
}

/* wider blocks */
.rm-block-text {
    max-width: 100%;
}

/* inline code */
code {
    border: none;
    font-size: .8em;
    background-color: rgba(0, 0, 0, .03);
    padding: .2em .35em;
    font-family: "Fira Code", Menlo, monospace;
}

/* CodeMirror */
.CodeMirror {
    background-color: rgba(0, 0, 0, .03);
}

.CodeMirror div {
    line-height: 16px;
}

.CodeMirror-hscrollbar {
    opacity: .1;
}

.CodeMirror-gutters {
    background: none;
    border: none;
}

.CodeMirror-linenumber {
    font-size: 11px;
    font-family: "Fira Code", Menlo, monospace;
    color: #ddd!important;
}

.CodeMirror .CodeMirror-code pre {
    font-size: .8em;
    font-family: "Fira Code", Menlo, monospace;
}

.CodeMirror-activeline-background {
    background: none;
}
#buffer {
    visibility: hidden;
}
.roam-body .roam-app .roam-sidebar-container .roam-sidebar-content .starred-pages-wrapper .starred-pages .page {
 	font-size: 18px;
        color: white;
    font-weight: 200;
}

.roam-block-container {
    max-width: 1000px;
}
.rm-query {
    border: 0.5px solid #e4e9ec;
    border-radius: 5px;
}
.rm-query .rm-query-title {
    background-color: #f7f8f8;
    padding: 0.8em;
    color: #d1dbe2;
    font-size: 80%;
}
.rm-reference-main.rm-query-content {
    padding: 0.8em;
}
.rm-reference-main .rm-reference-item .rm-block-text {
    font-size: 90%;
}
.rm-ref-page-view-title span {
}
.rm-reference-main .rm-reference-item .controls {
    margin-left: -1em;
}
.rm-ref-page-view {
    padding: 0.4em 0.2em;
    
}
div.flex-v-box.starred-pages-wrapper > div.flex-h-box > span {
    font-size: 14px;
    opacity: 80%;
    letter-spacing: 0.04em;
    color: #666;
}
div.roam-sidebar-container.noselect > div > div {
    font-size: 14px;
    letter-spacing: 0.03em;
    
}
#block-input {
    background: white;
}
.roam-body #block-input > span > div {
    padding: 6px 24px;
    background: white;
}
span.bp3-icon-small.bp3-icon-star {
    display: none;
    visibility: hidden;
}
.roam-block {
    max-width: 850px;
    
}
#right-sidebar > div {
    background-color: #f7f8fa;
    border-left: 1px solid #e9ebef;
    
}
.rm-page-ref-brackets {
    display: none;
}
.controls .simple-bullet-outer .simple-bullet-inner {
    // background-color: #e5e9f2;
}
.block-border-left {
    // border-left: 1px solid #fff;
}
.kanban-board {
    background-color: #fff;
}
.kanban-card {
    background-color: white;
    margin: 8px;
    box-shadow: 0px 1px 2px #9EB3C0;
    padding: 10px;
    border-radius: 2px;
    line-height: 1.3em;
}
.kanban-title {
    text-align: center;
    font-weight: bold;
    padding-top: 6px;
}
.kanban-column {
    background-color: #E4EDF2;
    margin: 0px 4px 0px 4px;
    padding: 4px;
    min-width: 200px;
    border-radius: 3px;
}
.rm-block-ref::before {
    content:'';
    display: inline-block;
    width: 12px;
    border-radius: 40px;
    height: 12px;
    background: #ff913c;
    margin-right: 7px;
}
.rm-block-ref {
    border-bottom: none;
    font-size: 1em;
    color: #627a9d;

}
.rm-block-ref:hover {
    background: none;
    cursor: pointer;
    
}

.checkmark {
    background: #fff;
}
.check-container input:checked ~ .checkmark {
    background: #33bdea;
}
.check-container input:checked ~ .checkmark:after {
    border-color: #fff;
}
.rm-reference-item {
    margin-top: 8px;
    border-radius: 6px;
    border: 1px solid #e4e9ee;
    margin-right: 8px;
    flex: 1 1 100%;
    word-break: break-word;
    background-color: #f7f9fb;
    padding: 8px;
    box-shadow: 0px 7px 7px -6px rgba(0,0,0, .2);
    //box-shadow: 3px 3px 9px -3px #ddd;
}
.rm-level2 {
    font-size: 1.5em;
}
.rm-level3 {
    color: #939aae;
    font-weight: 400;
    font-size: 1.3em;
}
.rm-page-ref {
    color: #9aabd0;
    transform: scale(1);
    transition: transform ease-in-out 250ms box-shadow ease-in-out 250ms;
}
/* page link color */ 
.rm-page-ref-link-color {
    color: #00960f;
    font-weight: 600;
}
/* reference page color*/
a {
    color: #8144ad;
    font-weight: 500;
}
.intercom-app, .intercom-launcher-frame, #intercom-container {
    display: none;
}
.roam-body .roam-app .roam-sidebar-container {
    //background-color: #313642;
    //border-right: 1px #eee solid;
    box-shadow: 6px 0px 6px -6px rgba(0,0,0, .8);
    
}
.roam-body .roam-app .roam-sidebar-container .roam-sidebar-content .starred-pages-wrapper .starred-pages .page, .roam-body .roam-app .roam-sidebar-container > * {
    opacity: 100%;
    box-shadow: none;
    font-family: "Fira Code", Menlo, monospace;
    //letter-spacing: -.04em;
    
}
.roam-body .roam-app .roam-sidebar-container .roam-sidebar-content .starred-pages-wrapper .starred-pages .page:hover, .roam-body .roam-app .roam-sidebar-container .roam-sidebar-content .log-button:hover {
    background: white;
    color: black;
    opacity: 100%;
    //font-weight: 500;
    box-shadow: 0px 12px 12px -6px rgba(0,0,0, .5);
}
#buffer.tall {
    height: calc(100vh - 50px);
}
.check-container {
    padding-right: 4px;
}
span.rm-page-ref {
    border-radius: 2px;
    padding-left: 1px;
    padding-right: 1px;
}
.content span.rm-page-ref {
    padding: 4px 1px 1px;
    /* required for fixing azo */
}
.center-proj {
    text-align: center;
}
/* Custom data tags */
/* Background */
span.rm-page-ref[data-tag="Project Todos"], 
span.rm-page-ref[data-tag="Work Todos"], 
span.rm-page-ref[data-tag="Personal Todos"], 
span.rm-page-ref[data-tag="Scheduled"], 
span.rm-page-ref[data-tag="Someday Maybe"], 
span.rm-page-ref[data-tag="Waiting For"], 
span.rm-page-ref[data-tag="Weekly Review"], 
span.rm-page-ref[data-tag="Outline"], 
span.rm-page-ref[data-tag="Notes"], 
span.rm-page-ref[data-tag="Projects"], 
span.rm-page-ref[data-tag="Completed"], 
span.rm-page-ref[data-tag="Sub-Projects"], 
span.rm-page-ref[data-tag="Archive"], 
span.rm-page-ref[data-tag="Areas"], 
span.rm-page-ref[data-tag="Postponed"],
span.rm-page-ref[data-tag="Article"],
span.rm-page-ref[data-tag="Video"],
span.rm-page-ref[data-tag="Vault"],
span.rm-page-ref[data-tag="Blog Post"],
span.rm-page-ref[data-tag="Email"] {
    color: white;
    padding: 3px 9px 3px 6px;
    line-height: 1.2em;
    font-weight: 500;
	font-size: 1em;
    box-shadow: 0px 6px 6px -6px rgba(0,0,0, .6);
}

span.rm-page-ref[data-tag="Project Todos"] {
    background: #F94144;
}
span.rm-page-ref[data-tag="Project Todos"]:before {
    content: '📌 '
}
span.rm-page-ref[data-tag="Work Todos"] {
    background: #F3722C;
}
span.rm-page-ref[data-tag="Work Todos"]:before {
    content: '👷‍♂️ '
}
span.rm-page-ref[data-tag="Personal Todos"] {
    background: #F8961E;
}
span.rm-page-ref[data-tag="Personal Todos"]:before {
    content: '🏡 '
}
span.rm-page-ref[data-tag="Scheduled"] {
    background: #F9C74F;
}
span.rm-page-ref[data-tag="Scheduled"]:before {
    content: '📆 '
}
span.rm-page-ref[data-tag="Someday Maybe"] {
    background: #90BE6D;
}
span.rm-page-ref[data-tag="Someday Maybe"]:before {
    content: '🔮 '
}
span.rm-page-ref[data-tag="Waiting For"] {
    background: #43AA8B;
}
span.rm-page-ref[data-tag="Waiting For"]:before {
    content: '⌛ '
}
span.rm-page-ref[data-tag="Weekly Review"] {
    background: #577590;
}
span.rm-page-ref[data-tag="Weekly Review"]:before {
    content: '👁‍🗨 '
}
span.rm-page-ref[data-tag="Outline"] {
    background: #f6bd60;
}
span.rm-page-ref[data-tag="Outline"]:before {
    content: '📜 '
}
span.rm-page-ref[data-tag="Notes"] {
    background: #718899;
}
span.rm-page-ref[data-tag="Notes"]:before {
    content: '📓 '
}
span.rm-page-ref[data-tag="Projects"] {
    background: #1982C4;
}
span.rm-page-ref[data-tag="Projects"]:before {
    content: '🛠 '
}
span.rm-page-ref[data-tag="Areas"] {
    background: #FFCA3A;
}
span.rm-page-ref[data-tag="Areas"]:before {
    content: '🔎 '
}
span.rm-page-ref[data-tag="Archive"] {
    background: #6A4C93;
}
span.rm-page-ref[data-tag="Archive"]:before {
	content: '📦 '
}
span.rm-page-ref[data-tag="Sub-Projects"] {
    background: #8AC926;
}
span.rm-page-ref[data-tag="Sub-Projects"]:before {
	content: '🔨 '
}
span.rm-page-ref[data-tag="Completed"] {
    background: #3fe012;
}
span.rm-page-ref[data-tag="Completed"]:before {
    content: '☑ '
}
span.rm-page-ref[data-tag="Postponed"] {
    background: #b6b1ba;
}
span.rm-page-ref[data-tag="Postponed"]:before {
    content: '⏳ '
}
span.rm-page-ref[data-tag="Article"]{
    background: #1982c4;
}
span.rm-page-ref[data-tag="Article"]:before {
    content: '📰 '
}
span.rm-page-ref[data-tag="Video"]{
 	background: #6a4c93;   
}
span.rm-page-ref[data-tag="Video"]:before{
	content: '📽 ' 
}
span.rm-page-ref[data-tag="Blog Post"]{
	background: #06d6a0;
}
span.rm-page-ref[data-tag="Blog Post"]:before {
	content: '📝 '
}
span.rm-page-ref[data-tag="Vault"]{
	background: #43aa8b;
}
span.rm-page-ref[data-tag="Vault"]:before {
	content: '📂 '
}
span.rm-page-ref[data-tag="Email"]{
	background: #fc0320;
}
span.rm-page-ref[data-tag="Email"]:before {
	content: '📧 '
}

span.rm-page-ref[data-tag="Garden Notes"] {
    color: #9DBC13;
    padding: 3px 4px;
    font-weight: 700;
    line-height: 1.4em;
}


a[href="/#/app/Eran/page/9kanlhZjE"] > div:before{
	content: '✅ '
}
a[href="/#/app/Eran/page/-cm0FiEj9"] > div:before{
	content: '📂 '
}
a[href="/#/app/Eran/page/KAmh4X6oC"] > div:before{
	content: '🎯 '
}
a[href="/#/app/Eran/page/e4bg5our_"] > div:before{
	content: '📋 '
}
a[href="/#/app/Eran/page/bKhtywMNr"] > div:before{
	content: '👁‍🗨 '
}
a[href="/#/app/Eran/page/089ezWoye"] > div:before{
	content: '🎨 '
}
a[href="/#/app/Eran/page/HckrfMOHt"] > div:before{
	content: '🔎 '
}
a[href="/#/app/Eran/page/d8j2DQVE-"] > div:before{
	content: '📦 '
}
a[href="/#/app/Eran/page/JE6pWS5Jy"] > div:before{
	content: '📅 '
}
a[href="/#/app/Eran/page/I0em2jlyF"] > div:before{
	content: '🍪 '
}

span.rm-page-ref[data-tag=\"linebreak\"] {    
    background: #b7b7b7;    
    color: #b7b7b7;    
    padding:0px 500px 0px 0px;    
    box-shadow: 0px 8px 8px -6px rgba(0,0,0, .7);
}

/* ------------- Red Pomodoro ------------- */
.rm-pomodoro {
  background: #ff6956 !important;
  color: #fff !important;
  padding: 4px 14px;
  line-height: 2em;
  font-weight: 600;
  border-radius: 2em;
  border: 1px solid #ed5845;
box-shadow: 0px 12px 12px -6px rgba(0,0,0, .5);
}

.rm-pomodoro::first-letter {
  margin-right: 8px;
}
textarea{
    background-color: White !important;
    box-shadow: 3px 12px 12px -3px rgba(150,150,150,0.5);
    padding-left: 10px;
}
]]></>).toString();