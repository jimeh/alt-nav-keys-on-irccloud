// ==UserScript==
// @name         alt-nav-keys-on-irccloud
// @namespace    jimeh.me
// @version      0.1
// @description  Navigate IRCCloud channels using cmd+[ and cmd+] on OS X.
// @include      https://www.irccloud.com/*
// @author       Jim Myhrberg
// @grant        none
// @homepage     https://github.com/jimeh/alt-nav-keys-on-irccloud
// @updateURL    https://github.com/jimeh/alt-nav-keys-on-irccloud/raw/master/alt-nav-keys-on-irccloud.user.js
// @downloadURL  https://github.com/jimeh/alt-nav-keys-on-irccloud/raw/master/alt-nav-keys-on-irccloud.user.js
// @license      CC0
// ==/UserScript==

(function () {
  'use strict';

  function init() {
    $(document).on('keydown', function(e) {
      if ([219, 221].indexOf(e.keyCode) != -1 && e.metaKey) {
        e.cancelBubble = true;
        e.stopImmediatePropagation();
        var event = $.Event("keydown");
        event.which = e.keyCode == 219 ? 38 : 40;
        event.altKey = true;
        $(document).trigger(event);
        return false;
      };
    });
  };

  (function checkSession () {
    if (window.hasOwnProperty('SESSION')) {
      window.SESSION.bind('init', function () {
        init();
      });
    } else {
      setTimeout(checkSession, 100);
    }
  })();
})();
