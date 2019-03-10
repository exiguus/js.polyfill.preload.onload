/* eslint-disable no-var */
/**
 * @fileOverview <link> rel=preload onload event polyfill.
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 1.0.0
 * @module IIFE/preloadOnloadPolyfill
 * @description IIFE to Check <link> element rel=preload support.
 * @deprecated Please use the Preload Module instead.
 *  This is only for testing purpose.
 *  Note: Compared to an ES6 Module,
 *  this pattern has half of the size.
 */

(function() {
    'use strict';
    var preloadOnloadPolyfill = {
        init: function() {
            this._tokenList = document.createElement('link').relList;
            this._token = 'preload';
            this._support = this._check();

            if (!this._support) this._update();
        },
        // check <link> element rel=preload support
        _check: function() {
            if (!this._tokenList || !this._tokenList.supports) {
                return false;
            }
            try {
                return this._tokenList.supports(this._token);
            } catch (event) {
                // eslint-disable-next-line no-console
                console.log('preload.onload.polyfill: error', event);
            }
        },
        // update <link> element rel=preload onload event
        _update: function() {
            var links = document.getElementsByTagName('link');
            for (let i = 0; i < links.length; i++) {
                var link = links[i];
                if (link.rel === this._token) {
                    var as = link.getAttribute('as');
                    var onload = (typeof link.onload === 'function');
                    if (onload) link.onload();
                    switch (true) {
                        case as === 'style':
                            link.setAttribute('rel', 'stylesheet');
                            break;
                        default:
                            break;
                    }
                }
            }
        },
    };
    preloadOnloadPolyfill.init();
})();
