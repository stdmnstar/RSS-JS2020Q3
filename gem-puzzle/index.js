!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=83)}([function(t,e,n){(function(e){function n(t){return t&&t.Math==Math&&t}t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(44))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(0),o=n(23).f,i=n(8),a=n(10),c=n(19),u=n(52),s=n(59);t.exports=function(t,e){var n,f,l,p,d,v=t.target,m=t.global,h=t.stat;if(n=m?r:h?r[v]||c(v,{}):(r[v]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!s(m?f:v+(h?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,f,p,t)}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(0),o=n(20),i=n(4),a=n(27),c=n(34),u=n(61),s=o("wks"),f=r.Symbol,l=u?f:a;t.exports=function(t){return i(s,t)||(c&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(7),o=n(18),i=n(14);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(0),o=n(8),i=n(4),a=n(19),c=n(26),u=n(49),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,c){var u=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t!==r?(u?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=n:o(t,e,n)):s?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},function(t,e,n){var r=n(21),o=Math.min;t.exports=function(t){return 0<t?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(5);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";function r(t){if(!c(t))return!1;var e=t[m];return void 0!==e?!!e:a(t)}var o=n(2),i=n(1),a=n(32),c=n(3),u=n(12),s=n(11),f=n(60),l=n(33),p=n(62),d=n(6),v=n(35),m=d("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",b=51<=v||!i((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),y=p("concat");o({target:"Array",proto:!0,forced:!b||!y},{concat:function(t){var e,n,o,i,a,c=u(this),p=l(c,0),d=0;for(e=-1,o=arguments.length;e<o;e++)if(r(a=-1===e?c:arguments[e])){if(i=s(a.length),h<d+i)throw TypeError(g);for(n=0;n<i;n++,d++)n in a&&f(p,d,a[n])}else{if(h<=d)throw TypeError(g);f(p,d++,a)}return p.length=d,p}})},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(24),o=n(5);t.exports=function(t){return r(o(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(7),o=n(25),i=n(9),a=n(17),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(0),o=n(8);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(47),o=n(48);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.7",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?r:n)(t)}},function(t,e,n){var r={};r[n(6)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){var r=n(7),o=n(45),i=n(14),a=n(15),c=n(17),u=n(4),s=n(25),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=c(e,!0),s)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(1),o=n(16),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(7),o=n(1),i=n(46);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(20),o=Function.toString;t.exports=r("inspectSource",(function(t){return o.call(t)}))},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e){t.exports={}},function(t,e,n){function r(t){return"function"==typeof t?t:void 0}var o=n(54),i=n(0);t.exports=function(t,e){return arguments.length<2?r(o[t])||r(i[t]):o[t]&&o[t][e]||i[t]&&i[t][e]}},function(t,e,n){var r=n(4),o=n(15),i=n(56).indexOf,a=n(28);t.exports=function(t,e){var n,c=o(t),u=0,s=[];for(n in c)!r(a,n)&&r(c,n)&&s.push(n);for(;e.length>u;)r(c,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(16);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(3),o=n(32),i=n(6)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r,o,i=n(0),a=n(36),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||74<=r[1])&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=n(29);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(10),o=Date.prototype,i="Invalid Date",a="toString",c=o[a],u=o.getTime;new Date(NaN)+""!=i&&r(o,a,(function(){var t=u.call(this);return t==t?c.call(this):i}))},function(t,e,n){var r=n(22),o=n(10),i=n(65);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){"use strict";var r=n(10),o=n(9),i=n(1),a=n(67),c="toString",u=RegExp.prototype,s=u[c],f=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),l=s.name!=c;(f||l)&&r(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in u)?a.call(t):n)}),{unsafe:!0})},function(t,e,n){"use strict";var r=n(2),o=n(68).start;r({target:"String",proto:!0,forced:n(70)},{padStart:function(t,e){return o(this,t,1<arguments.length?e:void 0)}})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(0),o=n(3),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),o=n(19),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},function(t,e,n){var r,o,i,a=n(50),c=n(0),u=n(3),s=n(8),f=n(4),l=n(51),p=n(28),d=c.WeakMap;if(a){var v=new d,m=v.get,h=v.has,g=v.set;r=function(t,e){return g.call(v,t,e),e},o=function(t){return m.call(v,t)||{}},i=function(t){return h.call(v,t)}}else{var b=l("state");p[b]=!0,r=function(t,e){return s(t,b,e),e},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(0),o=n(26),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(20),o=n(27),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(4),o=n(53),i=n(23),a=n(18);t.exports=function(t,e){for(var n=o(e),c=a.f,u=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||c(t,f,u(e,f))}}},function(t,e,n){var r=n(29),o=n(55),i=n(58),a=n(9);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(30),o=n(31).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){function r(t){return function(e,n,r){var c,u=o(e),s=i(u.length),f=a(r,s);if(t&&n!=n){for(;f<s;)if((c=u[f++])!=c)return!0}else for(;f<s;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}}var o=n(15),i=n(11),a=n(57);t.exports={includes:r(!0),indexOf:r(!1)}},function(t,e,n){var r=n(21),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){function r(t,e){var n=c[a(t)];return n==s||n!=u&&("function"==typeof e?o(e):!!e)}var o=n(1),i=/#|\.prototype\./,a=r.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=r.data={},u=r.NATIVE="N",s=r.POLYFILL="P";t.exports=r},function(t,e,n){"use strict";var r=n(17),o=n(18),i=n(14);t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},function(t,e,n){var r=n(34);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol()},function(t,e,n){var r=n(1),o=n(6),i=n(35),a=o("species");t.exports=function(t){return 51<=i||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r=n(2),o=n(12),i=n(64);r({target:"Object",stat:!0,forced:n(1)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,e,n){var r=n(30),o=n(31);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){"use strict";var r=n(22),o=n(66);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){var r=n(22),o=n(16),i=n(6)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:a?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){"use strict";var r=n(9);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){function r(t){return function(e,n,r){var u,s,f=String(a(e)),l=f.length,p=void 0===r?" ":String(r),d=o(n);return d<=l||""==p?f:(u=d-l,(s=i.call(p,c(u/p.length))).length>u&&(s=s.slice(0,u)),t?f+s:s+f)}}var o=n(11),i=n(69),a=n(5),c=Math.ceil;t.exports={start:r(!1),end:r(!0)}},function(t,e,n){"use strict";var r=n(21),o=n(5);t.exports="".repeat||function(t){var e=String(o(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;0<i;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},function(t,e,n){var r=n(36);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},function(t,e,n){var r=n(72);"string"==typeof r&&(r=[[t.i,r,""]]);n(73)(r,{insert:"head",singleton:!1}),r.locals&&(t.exports=r.locals)},function(t,e,n){},function(t,e,n){"use strict";var r,o,i={},a=(o={},function(t){if(void 0===o[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}o[t]=e}return o[t]});function c(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function u(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],e))}else{for(var c=[];a<r.parts.length;a++)c.push(m(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:c}}}}function s(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}var d=null,v=0;function m(t,e){var n,r,o;if(e.singleton){var i=v++;n=d=d||s(e),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=s(e),r=function(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&t.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n,e),o=function(){!function(t){null!==t.parentNode&&t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(t,e);return u(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o],s=i[a.id];s&&(s.refs--,r.push(s))}t&&u(c(t,e),e);for(var f=0;f<r.length;f++){var l=r[f];if(0===l.refs){for(var p=0;p<l.parts.length;p++)l.parts[p]();delete i[l.id]}}}}},function(t,e,n){t.exports=n.p+"favicon.ico"},function(t,e,n){t.exports=n.p+"audio.mp3"},function(t,e,n){"use strict";var r=n(2),o=n(77).every;r({target:"Array",proto:!0,forced:n(42)("every")},{every:function(t,e){return o(this,t,1<arguments.length?e:void 0)}})},function(t,e,n){function r(t){var e=1==t,n=2==t,r=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,v,m,h){for(var g,b,y=a(d),x=i(y),S=o(v,m,3),w=c(x.length),C=0,E=h||u,T=e?E(d,w):n?E(d,0):void 0;C<w;C++)if((p||C in x)&&(b=S(g=x[C],C,y),t))if(e)T[C]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return C;case 2:s.call(T,g)}else if(f)return!1;return l?-1:r||f?f:T}}var o=n(78),i=n(24),a=n(12),c=n(11),u=n(33),s=[].push;t.exports={forEach:r(0),map:r(1),filter:r(2),some:r(3),every:r(4),find:r(5),findIndex:r(6)}},function(t,e,n){var r=n(41);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(2),o=n(80);r({global:!0,forced:parseInt!=o},{parseInt:o})},function(t,e,n){var r=n(0),o=n(81).trim,i=n(43),a=r.parseInt,c=/^[+-]?0[Xx]/,u=8!==a(i+"08")||22!==a(i+"0x16");t.exports=u?function(t,e){var n=o(String(t));return a(n,e>>>0||(c.test(n)?16:10))}:a},function(t,e,n){function r(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(c,"")),n}}var o=n(5),i="["+n(43)+"]",a=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$");t.exports={start:r(1),end:r(2),trim:r(3)}},function(t,e,n){"use strict";var r=n(2),o=n(41),i=n(12),a=n(1),c=n(42),u=[],s=u.sort,f=a((function(){u.sort(void 0)})),l=a((function(){u.sort(null)})),p=c("sort");r({target:"Array",proto:!0,forced:f||!l||p},{sort:function(t){return void 0===t?s.call(i(this)):s.call(i(this),o(t))}})},function(t,e,n){"use strict";function r(){var t=document.getElementById("alertBox"),e=document.getElementById("alertClose"),n=document.getElementById("alertClose2");t.parentNode.removeChild(t),e.parentNode.removeChild(e),n.parentNode.removeChild(n)}function o(t,e,n){var o=1<arguments.length&&void 0!==e?e:"200px",i=2<arguments.length&&void 0!==n?n:"100px",a=document.createElement("div");document.body.appendChild(a),a.id="alertBox",a.innerHTML=t,a.style.width=o,a.style.height=i;var c=document.createElement("div");c.id="alertClose",c.innerHTML="X",a.appendChild(c),c.onclick=r;var u=document.createElement("div");u.id="alertClose2",document.body.appendChild(u),u.onclick=r}function i(t,e){return t%e}function a(t,e){for(var n=t[e-1],r=[],o=0;o<e-1;o+=1){var i=t[o];Math.abs(n.column-i.column)+Math.abs(n.raw-i.raw)===1&&r.push(i)}return r}function c(t,e,n){var r=arguments.length<=0?void 0:t,o=arguments.length<=1?void 0:e,i=arguments.length<=2?void 0:n,a=o.column,c=o.raw;o.column=r.column,o.raw=r.raw,r.column=a,r.raw=c,r.element.style.left="".concat(r.column*i,"px"),r.element.style.top="".concat(r.raw*i,"px"),o.element.style.left="".concat(o.column*i,"px"),o.element.style.top="".concat(o.raw*i,"px")}function u(t){return"".concat(parseInt(t/60,10).toString().padStart(2,"0"),":").concat(parseInt(t%60,10).toString().padStart(2,"0"))}function s(t,e){for(var n=0;n<t.length-1;n+=1){var r=t[n].element;r.setAttribute("draggable","false"),r.style.cursor="default"}for(var o=a(t,e),i=0;i<o.length;i+=1)o[i].element.setAttribute("draggable","true"),o[i].element.style.cursor="grab"}function f(t){if(t){var e=new Audio;e.src="audio.mp3",e&&(e.currentTime=0,e.play())}}n.r(e),n(13),n(37),n(63),n(38),n(39),n(40),n(71),n(74),n(75),n(76),n(79),n(82);var l,p,d,v,m={"3x3":3,"4x4":4,"5x5":5,"6x6":6,"7x7":7,"8x8":8},h=0,g=0,b=0,y=!1,x=!1,S=!1,w=!1,C=!0,E=[],T=[];function O(t){var e=400;document.body.clientWidth<480&&(e=280),d=e/(l=t),v=3*(p=t*t)}O(m["4x4"]),document.body.innerHTML="";var M=document.createElement("main"),j=document.createElement("div"),L=document.createElement("div"),N=document.createElement("div"),A=document.createElement("div"),I=document.createElement("div");M.classList.add("wrapper"),I.classList.add("buttons"),j.classList.add("buttons"),L.classList.add("infoTop"),N.classList.add("field"),A.classList.add("sizeButtons"),M.appendChild(j),M.appendChild(L),M.appendChild(N),M.appendChild(A),M.appendChild(I),document.body.appendChild(M),I.innerHTML="";var k=document.createElement("button");k.textContent="Save",k.id="btn-save",k.setAttribute("title","Save current position"),k.classList.add("btn","btn-big"),I.appendChild(k);var P=document.createElement("button");P.textContent="Restore",P.id="btn-restore",P.setAttribute("title","Restore from last saved position"),P.classList.add("btn","btn-big"),I.appendChild(P);var R=document.createElement("button");R.textContent="Results",R.id="btn-results",R.setAttribute("title","Best of the Best"),R.classList.add("btn","btn-big"),I.appendChild(R),j.innerHTML="";var B=document.createElement("button");B.textContent="New game",B.id="btn-start",B.setAttribute("title","New game"),B.classList.add("btn-start","btn-big"),j.appendChild(B);var D=document.createElement("button");D.textContent="Solution",D.id="btn-solution",D.setAttribute("title","Solution"),D.classList.add("btn-start","btn-big"),j.appendChild(D),A.innerHTML="";for(var _=Object.keys(m),H=0;H<_.length;H+=1){var z=document.createElement("button");z.id=_[H],z.classList.add("btn","btn-small"),z.setAttribute("title","Create new ".concat(_[H]," game")),z.textContent=_[H],A.appendChild(z)}L.innerHTML="";var F=document.createElement("span");F.textContent="Moves: ",L.appendChild(F);var J=document.createElement("span");J.id="moves",J.textContent="000",L.appendChild(J);var W=document.createElement("button");W.textContent="🔊",W.id="btn-sound",W.setAttribute("title","Sound on/off"),W.classList.add("btn","btn-big"),L.appendChild(W);var U=document.createElement("span");U.textContent="Time: ",L.appendChild(U);var G=document.createElement("span");function q(t){J.textContent=t.toString().padStart(3,"0")}function V(t){if(x){var e=E[t],n=E[p-1];1<Math.abs(n.column-e.column)+Math.abs(n.raw-e.raw)||(c(e,n,d),T.push(e.value),f(C),q(h+=1),s(E,p),function(t,e){return t.every((function(t){return t.value===t.raw*e+t.column+1}))}(E,l)&&(x=!1,clearInterval(y),setTimeout((function(){return o("Ура! Вы решили головоломку за ".concat(G.textContent," и ").concat(h," ходов"))}),300),function(t,e,n){var r="gpResult".concat(t),o=JSON.parse(localStorage.getItem(r));if((o=o||[]).push({moves:e,time:n}),o.sort((function(t,e){return t.moves-e.moves})),10<o.length)for(var i=0;i<o.length-10;i+=1)o.pop();localStorage.setItem(r,JSON.stringify(o))}(l,h,G.textContent)))}else o("Игра не начата. Нажмите NEW GAME")}function X(t){V(t.target.id)}function K(t){t.dataTransfer.setData("id",t.target.id),setTimeout((function(){E[t.target.id].element.classList.add("hide")}),0)}function Y(t){setTimeout((function(){E[t.target.id].element.classList.remove("hide")}),0)}function $(t){V(t.dataTransfer.getData("id"))}function Q(t){t.preventDefault()}function Z(){var t;N.innerHTML="";for(var e=0;e<p;e+=1)(t=document.createElement("div")).style.width="".concat(d,"px"),t.style.height="".concat(d,"px"),t.style.height="".concat(d,"px"),(t.id=e)!==p-1?(t.className="cell",t.innerHTML=E[e].value,t.onclick=X,t.ondragstart=K,t.ondragend=Y):(t.className="cell-empty",t.ondragover=Q,t.ondrop=$),(E[e].element=t).style.left="".concat(E[e].column*d,"px"),t.style.top="".concat(E[e].raw*d,"px"),N.appendChild(t)}function tt(){for(var t=E.length=0;t<p;t+=1)E.push({value:t+1,column:i(t,l),raw:(e=t,n=l,(e-i(e,n))/n)});var e,n;Z()}function et(){y=setInterval((function(){g=(Date.now()-b)/1e3,G.textContent=u(g)}),1e3)}function nt(t,e,n){setTimeout((function(){c(e,n,d),f(C)}),300*t)}G.id="time",G.textContent="00:00",L.appendChild(G),tt(),B.addEventListener("click",(function(){return function(){if(w)o("Дождитесь завершения анимации");else{tt(),x=S=!0,T.length=0,q(h=0);for(var t=E[p-1],e=[],n=0;n<v;n+=1){e.length=0,e=a(E,p);var r=Math.floor(Math.random()*e.length);c(e[r],t,d),T.push(e[r].value),T[n]===T[n-1]&&(T.pop(),T.pop(),n-=2)}y&&(h=0,J.textContent="000",clearTimeout(y),G.textContent="00:00"),b=Date.now(),s(E,p),et()}}()})),D.addEventListener("click",(function(){return function(){if(w)o("Дождитесь завершения анимации");else if(S){w=!(x=!1),y&&(h=0,J.textContent="000",clearTimeout(y),G.textContent="00:00");for(var t=E[p-1],e=T.length-1;0<=e;e-=1)nt(T.length-e,E[T[e]-1],t);S=!1,setTimeout((function(){w=!1}),300*T.length)}else o("Нет игры для завершения")}()})),W.addEventListener("click",(function(){return W.textContent=C?"🔇":"🔊",void(C=!C)})),k.addEventListener("click",(function(){return function(){var t={moves:h,time:g,timerStart:b,isStarted:x,isSolution:S,size:l,cells:E,historyMoves:T};localStorage.setItem("lastSaved",JSON.stringify(t)),o("Текущая игра сохранена.")}()})),P.addEventListener("click",(function(){return function(){var t=JSON.parse(localStorage.getItem("lastSaved"));t?(y&&clearTimeout(y),q(h=t.moves),g=t.time,G.textContent=u(g),l=t.size,x=t.isStarted,S=t.isSolution,O(l=t.size),E=t.cells,T=t.historyMoves,Z(),s(E,p),x&&(b=Date.now()-1e3*g,et()),o("Восстановлена последняя сохраненная игра")):o("Сохраненной игры не обнаружено!")}()})),R.addEventListener("click",(function(){return function(t){var e="gpResult".concat(t),n=JSON.parse(localStorage.getItem(e));if(n){for(var r="ТОП-10 для поля ".concat(t,"x").concat(t,":<br>"),i=0;i<n.length;i+=1)r+="<br>".concat(i+1,". ").concat(n[i].moves," ходов."),r+=" Время: ".concat(n[i].time,".");o(r,"250px","".concat(20*n.length+50,"px"))}else o("Топ-10 для поля ".concat(t,"x").concat(t," пуст.<br> Возможно вы будете первым"))}(l)})),A.addEventListener("click",(function(t){if("BUTTON"===t.target.tagName){if(w)return void o("Дождитесь завершения анимации");O(m[t.target.id]),S=x=!1,y&&(h=0,J.textContent="000",clearTimeout(y),G.textContent="00:00"),tt()}})),window.onresize=function(){O(l);for(var t=0;t<E.length;t+=1)E[t].element.style.width="".concat(d,"px"),E[t].element.style.height="".concat(d,"px"),E[t].element.style.left="".concat(E[t].column*d,"px"),E[t].element.style.top="".concat(E[t].raw*d,"px")}}]);