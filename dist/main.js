(()=>{"use strict";var e={917:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n   scroll-behavior: auto;\n  }\n  \n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n",""]);const s=i},426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),c=t.n(s),l=new URL(t(541),t.b),d=new URL(t(877),t.b),u=i()(o()),m=c()(l),f=c()(d);u.push([e.id,":root {\n    --main-blue: #1161e4;\n    --main-pink: #f5afbb;\n    --off-white: #f1f5fc;\n}\n@font-face {\n    font-family: 'ralewaythin';\n    src: url("+m+") format('woff2'),\n         url("+f+") format('woff');\n    font-weight: normal;\n    font-style: normal;\n\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nheader > img {\n    width: 250px;\n    height: 250px;\n}\n\nheader {\n    flex: 0;\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    background-color: var(--main-blue);\n    font-family: 'Raleway', 'Times New Roman', Times, serif;\n    font-size: 2rem;\n    font-weight: 900;\n    color: var(--main-blue);\n}\n\n.sidebar {\n    position: relative;\n    display: flex;\n    gap: 1.5rem;\n    padding: 0.5rem 1rem;\n    background-color: var(--main-pink);\n    border-radius: 0.5rem;\n}\n\n.sidebar > div {\n    cursor: pointer;\n    position: relative;\n}\n.sidebar > div::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 3px;\n    transform: scaleX(0);\n    background-color: var(--main-blue);\n\n    transition: transform 0.3s;\n}\n.sidebar > div:hover::after {\n    transform: scaleX(1);\n}\n\n#content {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Raleway';\n    background-color: var(--off-white);\n}\n\n#content > div {\n    align-self: center;\n    padding: 1rem 3rem;\n    max-width: 70ch;\n    min-width: 35ch;\n}\n\n.contentHeader {\n    font-size: 1.5rem;\n    font-weight: 500;\n}\n\n.testimonials {\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n}",""]);const p=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var m=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)n[m].references++,n[m].updater(f);else{var p=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:p,references:1})}i.push(u)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},236:(e,n,t)=>{e.exports=t.p+"dc80b49438d27c21d24c.png"},877:(e,n,t)=>{e.exports=t.p+"232c98ea40cb0c997d27.woff"},541:(e,n,t)=>{e.exports=t.p+"e3a1bf0d85a1c9d49988.woff2"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),m=t.n(u),f=t(917),p={};p.styleTagTransform=m(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=d(),n()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;var h=t(426),v={};v.styleTagTransform=m(),v.setAttributes=c(),v.insert=i().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=d(),n()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;var y=t(236);document.querySelector("body");const b=document.querySelector("header"),g=document.querySelector("#content"),w=()=>{const e=document.createElement("div");e.classList.add("testimonials");const n=document.createElement("div");n.classList.add("contentHeader"),n.innerText="Testimonials",e.appendChild(n);const t=n=>{const t=document.createElement("div");t.innerText=n,e.appendChild(t)};t("Some of the best damn burgers I've ever had. My jelly was just squirting everywhere. -Jimmy (no relation)"),t("Well I guess it was fine. -Remy"),t("I asked for a burger with no jelly and they kicked me out. I came back the next day though and got a burger with jelly. They were right to kick me out before -- I'll never have a burger without jelly again! -Anonymous"),t("Better than the Krabby Patty -Gary"),t("I sure got some jelly in my burg! -Baron von Jellington"),g.appendChild(e)},x=document.querySelector("#content");(()=>{const e=new Image;e.src=y,e.alt="Jim and Bob's Jellys and Burgers: Get some jelly in your burg",b.appendChild(e);const n=document.createElement("div");n.classList.add("sidebar");const t=e=>{const t=document.createElement("div");t.innerText=e,t.classList.add(e.toLowerCase()),n.appendChild(t)};t("Home"),t("Menu"),t("Contact"),b.appendChild(n)})(),w();const S=document.querySelector("#content"),k=(document.querySelector(".sidebar"),document.querySelector(".home")),T=document.querySelector(".menu"),C=document.querySelector(".contact"),E=()=>{for(;S.lastChild;)S.lastChild.remove()};k.addEventListener("click",(()=>{E(),w()})),T.addEventListener("click",(()=>{E(),(()=>{const e=document.createElement("div"),n=n=>{const t=document.createElement("div");t.innerText=n,e.appendChild(t)};n("Appetizers"),n("Burgers"),n("Sides"),n("Jellies and Desserts"),x.appendChild(e)})()})),C.addEventListener("click",(()=>{E()}))})()})();