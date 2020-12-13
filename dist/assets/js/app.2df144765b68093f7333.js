!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),c=[];function u(t){for(var e=-1,n=0;n<c.length;n++)if(c[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],s=n[a]||0,f="".concat(a," ").concat(s);n[a]=s+1;var l=u(f),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(c[l].references++,c[l].updater(p)):c.push({identifier:f,updater:m(p,e),references:1}),r.push(f)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var c=i(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function h(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,y=0;function m(t,e){var n,r,o;if(e.singleton){var i=y++;n=d||(d=s(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=s(e),r=h.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=u(n[r]);c[o].references--}for(var i=a(t,e),s=0;s<n.length;s++){var f=u(n[s]);0===c[f].references&&(c[f].updater(),c.splice(f,1))}n=i}}}},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.events={}}var e,n,o;return e=t,(n=[{key:"subscribe",value:function(t,e){return this.events.hasOwnProperty(t)||(this.events[t]=[]),this.events[t].push(e)}},{key:"publish",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this;return n.events.hasOwnProperty(t)?n.events[t].map((function(t){return t(e)})):[]}}])&&r(e.prototype,n),o&&r(e,o),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=this;n.actions={},n.mutations={},n.state={},n.status="resting",n.events=new o,e.hasOwnProperty("actions")&&(n.actions=e.actions),e.hasOwnProperty("mutations")&&(n.mutations=e.mutations),n.state=new Proxy(e.state||{},{set:function(t,e,r){return t[e]=r,console.log("stateChange: ".concat(e,": ").concat(r)),n.events.publish("stateChange",n.state),"mutation"!==n.status&&console.warn("You should use a mutation to set ".concat(e)),n.status="resting",!0}})}var e,n,r;return e=t,(n=[{key:"dispatch",value:function(t,e){return"function"!=typeof this.actions[t]?(console.error('Action "'.concat(t," doesn't exist.")),!1):(console.groupCollapsed("ACTION: ".concat(t)),this.status="action",this.actions[t](this,e),console.groupEnd(),!0)}},{key:"commit",value:function(t,e){if("function"!=typeof this.mutations[t])return console.log('Mutation "'.concat(t,"\" doesn't exist")),!1;this.status="mutation";var n=this.mutations[t](this.state,e);return this.state=Object.assign(this.state,n),!0}}])&&i(e.prototype,n),r&&i(e,r),t}(),u=new c({actions:{addItem:function(t,e){t.commit("addItem",e)},clearItem:function(t,e){t.commit("clearItem",e)}},mutations:{addItem:function(t,e){return t.items.push(e),t},clearItem:function(t,e){return t.items.splice(e.index,1),t}},state:{items:["I made this","Another thing"]}});function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,t);var n=this;this.render=this.render||function(){},e.store instanceof c&&e.store.events.subscribe("stateChange",(function(){return n.render()})),e.hasOwnProperty("element")&&(this.element=e.element)};function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(i,t);var e,n,r,o=p(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,{store:u,element:document.querySelector(".js-count")})}return e=i,(n=[{key:"render",value:function(){var t=1!==u.state.items.length?"s":"",e=u.state.items.length>0?"🙌":"😢";this.element.innerHTML="\n      <small>You've done</small>\n      <span>".concat(u.state.items.length,"</span>\n      <small>thing").concat(t," today ").concat(e,"</small>\n    ")}}])&&f(e.prototype,n),r&&f(e,r),i}(s);function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=w(t);if(e){var o=w(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}(i,t);var e,n,r,o=b(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,{store:u,element:document.querySelector(".js-items")})}return e=i,(n=[{key:"render",value:function(){0!==u.state.items.length?(this.element.innerHTML='\n      <ul class="app__items">\n        '.concat(u.state.items.map((function(t){return"\n            <li>".concat(t,'<button aria-label="Delete this item">×</button></li>\n          ')})).join(""),"\n      </ul>\n    "),this.element.querySelectorAll("button").forEach((function(t,e){t.addEventListener("click",(function(){u.dispatch("clearItem",{index:e})}))}))):this.element.innerHTML='<p class="no-items">You\'ve done nothing yet 😢</p>'}}])&&m(e.prototype,n),r&&m(e,r),i}(s);function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=T(t);if(e){var o=T(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(i,t);var e,n,r,o=P(i);function i(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,{store:u,element:document.querySelector(".js-status")})}return e=i,(n=[{key:"render",value:function(){var t=1!==u.state.items.length?"s":"";this.element.innerHTML="".concat(u.state.items.length," item").concat(t)}}])&&j(e.prototype,n),r&&j(e,r),i}(s),C=document.querySelector(".js-form"),E=document.querySelector("#new-item-field");C.addEventListener("submit",(function(t){t.preventDefault();var e=E.value.trim();e.length&&(u.dispatch("addItem",e),E.value="",E.focus())}));var R=new y,M=new O,k=new x;R.render(),M.render(),k.render()}]);