# Youtube-Shorts-Redirector Script

## Introduction

This is a Tampermonkey script for redirecting the user from the dedicated youtube shorts player to the default youtube video player when a short is played.

## How to use

This script can be installed via the [Tampermonkey browser extension](https://www.tampermonkey.net/) by creating a new script and copying the code into the file.

If Tampermonkey is installed, this script can also be installed via the [Greasyfork page](https://greasyfork.org/en/scripts/448009-youtube-shorts-redirector).

## Purpose

This script was created out of a hatred for the desktop youtube shorts player, which does not allow fullscreen, volume control, and many other features of the default video player.

Shorts videos can be changed via the url extension. Normal youtube videos have the url *youtube.com/*`watch?v=[video ID]`, whereas shorts have the url *youtube.com/*`shorts/[video ID]`. This script simply changes the url and redirects the user.

## Issues

Due to how youtube works, the shorts tab/browser does not work with this script. This is because there is no unique url for this page and it simply uses the url of the short currently being played. Because of this, the user is instantly redirected to a video of whatever the first short is. In the future I plan to address this and add a button on this player for redirecting.
