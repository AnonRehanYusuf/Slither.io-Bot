// ==UserScript==
// @name         Cyber Hack
// @version      ???
// @namespace    www.hacker-cyberhack.net
// @description  This extension modifies Agar.io, adding many cool features designed to help improve your gameplay.
// @author       Rehan Yusuf
// @match        http://slither.io/
// @updateURL    
// @downloadURL  
// @run-at       document-start
// ==/UserScript==
 
window.stop();
document.documentElement.innerHTML = "";
var URL_SLITHER = "https://raw.githubusercontent.com/AnonRehanYusuf/Slither.io-Bot/master/Cyberhack.js"+new Date().getTime();
loadScript(URL_JQUERY, function() {
    loadScript(URL_SOCKET_IO, function() {
        if(location.hostname=='slither.io'){
            loadScript(URL_AGAR);
        }
    });
});
function loadScript(t, e) {
    var o = document.getElementsByTagName("head")[0];
    var a = document.createElement("script");
    a.type = "text/javascript", a.src = t, a.onload = e, o.appendChild(a);
}