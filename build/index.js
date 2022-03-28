/*!
 * 
 *   @hodgef/ts-library-boilerplate-basic v1.1.83
 *   https://github.com/hodgef/ts-library-boilerplate-basic
 *
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef) and project contributors.
 *
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.MyLibrary=t():e.MyLibrary=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.r(t),e.d(t,{default:()=>i});var r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".updown",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"green",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"red";o(this,e),this.upColor=n,this.downColor=r,this.getElements(t),this.paint()}var t,r,i;return t=e,(r=[{key:"getElements",value:function(e){this.elements=document.querySelectorAll(e)}},{key:"paint",value:function(){var e=this;this.elements.forEach((function(t){if(0===t.children.length){var o=t.innerText,n=Number(o.replace(/[^0-9.-]+/g,""));if(!n)return;n>0?t.style.color=e.upColor:n<0&&(t.style.color=e.downColor)}}))}}])&&n(t.prototype,r),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();new r(".updown"),new r(".any-class-name-u-want");const i=r;return t})()}));
//# sourceMappingURL=index.js.map