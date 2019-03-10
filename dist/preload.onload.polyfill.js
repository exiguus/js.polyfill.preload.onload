/* !
 * js.polyfill.preload.onload 1.0.0
 * https://github.com/exiguus/js.polyfill.preload.onload.git
 *
 * Simon Gattner <npm@0x38.de>
 * Released under the MIT license
 *
 * Date: 2019-03-10 23:03:21
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["preload.onload.polyfill"]=t():e["preload.onload.polyfill"]=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();
/**
 * @fileOverview Support Class.
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 1.0.0
 * @module {es6} Support
 */
var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.list=n}return r(e,[{key:"check",value:function(){if(!this.list||!this.list.supports)return!1;try{return this.list.supports(this.type)}catch(e){console.log("Support.check: error",e)}return!1}}]),e}(),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();
/**
 * @fileOverview Preload Class.
 * @author Simon Gattner <npm@0x38.de>
 * @license MIT
 * @version 1.0.0
 * @module {es6} Preload
 * @requires Support
 */
var i=new(function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,document.createElement("link").relList,"preload"))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o),u(t,[{key:"update",value:function(){for(var e=document.getElementsByTagName("link"),t=0;t<e.length;t++){var n=e[t];if("preload"===n.rel){var r=n.getAttribute("as");switch("function"==typeof n.onload&&n.onload(),!0){case"style"===r:n.setAttribute("rel","stylesheet")}}}return!0}}]),t}());i.check()||i.update()}])});