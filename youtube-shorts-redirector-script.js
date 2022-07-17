// ==UserScript==
// @name         Youtube Shorts Redirector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  This script automatically redirects the page to the normal youtube video player when a short is loaded. Due to the nature of this script, this breaks the shorts browser from the menu button below the explore page.
// @author       You
// @match        https://youtube.com/*
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/shorts/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            onUrlChange();
        }
    }).observe(document, {subtree: true, childList: true});

    function onUrlChange(){
        if (/shorts\/+/.test(window.location.href)){
            window.location.replace(window.location.href.replace("shorts/", "watch?v="))
        }
    }
})();
