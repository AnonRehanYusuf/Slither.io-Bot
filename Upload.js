// ==UserScript==
// @name         AgarInfinity
// @version      1.0.3
// @namespace    Agarinfinity.com
// @description  This extension modifies Agar.io, adding many cool features designed to help improve your gameplay.
// @author       Chris Pierce
// @match        http://agar.io/*
// @updateURL    http://agarinfinity.com/infinity.user.js
// @downloadURL  http://agarinfinity.com/infinity.user.js
// @run-at       document-start
// ==/UserScript==
 
window.stop();
document.documentElement.innerHTML = "";
var URL_JQUERY = "http://code.jquery.com/jquery-1.11.3.min.js";
var URL_SOCKET_IO = "https://cdn.socket.io/socket.io-1.3.5.js";
var URL_AGAR = "http://agarinfinity.com/agar.js?ts="+new Date().getTime();
var URL_SLITHER = "http://agarinfinity.com/slither.js?ts="+new Date().getTime();
loadScript(URL_JQUERY, function() {
    loadScript(URL_SOCKET_IO, function() {
        if(location.hostname=='agar.io'){
            loadScript(URL_AGAR);
        }
    });
});
function loadScript(t, e) {
    var o = document.getElementsByTagName("head")[0];
    var a = document.createElement("script");
    a.type = "text/javascript", a.src = t, a.onload = e, o.appendChild(a);
}
