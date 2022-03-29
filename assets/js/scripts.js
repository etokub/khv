!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).LocomotiveScroll=e()}(this,(function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function i(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?c(t):e}function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,s=r(t);if(e){var n=r(this).constructor;i=Reflect.construct(s,arguments,n)}else i=s.apply(this,arguments);return h(this,i)}}function u(t,e,i){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var s=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}(t,e);if(s){var n=Object.getOwnPropertyDescriptor(s,e);return n.get?n.get.call(i):n.value}})(t,e,i||t)}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var i=[],s=!0,n=!1,o=void 0;try{for(var l,r=t[Symbol.iterator]();!(s=(l=r.next()).done)&&(i.push(l.value),!e||i.length!==e);s=!0);}catch(t){n=!0,o=t}finally{try{s||null==r.return||r.return()}finally{if(n)throw o}}return i}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||m(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return v(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var y={el:document,name:"scroll",offset:[0,0],repeat:!1,smooth:!1,initPosition:{x:0,y:0},direction:"vertical",gestureDirection:"vertical",reloadOnContextChange:!1,lerp:.1,class:"is-inview",scrollbarContainer:!1,scrollbarClass:"c-scrollbar",scrollingClass:"has-scroll-scrolling",draggingClass:"has-scroll-dragging",smoothClass:"has-scroll-smooth",initClass:"has-scroll-init",getSpeed:!1,getDirection:!1,scrollFromAnywhere:!1,multiplier:1,firefoxMultiplier:50,touchMultiplier:2,resetNativeScroll:!0,tablet:{smooth:!1,direction:"vertical",gestureDirection:"vertical",breakpoint:1024},smartphone:{smooth:!1,direction:"vertical",gestureDirection:"vertical"}},b=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),Object.assign(this,y,i),this.smartphone=y.smartphone,i.smartphone&&Object.assign(this.smartphone,i.smartphone),this.tablet=y.tablet,i.tablet&&Object.assign(this.tablet,i.tablet),this.namespace="locomotive",this.html=document.documentElement,this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.els={},this.currentElements={},this.listeners={},this.hasScrollTicking=!1,this.hasCallEventSet=!1,this.checkScroll=this.checkScroll.bind(this),this.checkResize=this.checkResize.bind(this),this.checkEvent=this.checkEvent.bind(this),this.instance={scroll:{x:0,y:0},limit:{x:this.html.offsetWidth,y:this.html.offsetHeight},currentElements:this.currentElements},this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",this.isMobile&&(this.direction=this[this.context].direction),"horizontal"===this.direction?this.directionAxis="x":this.directionAxis="y",this.getDirection&&(this.instance.direction=null),this.getDirection&&(this.instance.speed=0),this.html.classList.add(this.initClass),window.addEventListener("resize",this.checkResize,!1)}return i(e,[{key:"init",value:function(){this.initEvents()}},{key:"checkScroll",value:function(){this.dispatchScroll()}},{key:"checkResize",value:function(){var t=this;this.resizeTick||(this.resizeTick=!0,requestAnimationFrame((function(){t.resize(),t.resizeTick=!1})))}},{key:"resize",value:function(){}},{key:"checkContext",value:function(){if(this.reloadOnContextChange){this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||this.windowWidth<this.tablet.breakpoint,this.isTablet=this.isMobile&&this.windowWidth>=this.tablet.breakpoint;var t=this.context;if(this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",t!=this.context)("desktop"==t?this.smooth:this[t].smooth)!=("desktop"==this.context?this.smooth:this[this.context].smooth)&&window.location.reload()}}},{key:"initEvents",value:function(){var t=this;this.scrollToEls=this.el.querySelectorAll("[data-".concat(this.name,"-to]")),this.setScrollTo=this.setScrollTo.bind(this),this.scrollToEls.forEach((function(e){e.addEventListener("click",t.setScrollTo,!1)}))}},{key:"setScrollTo",value:function(t){t.preventDefault(),this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name,"-href"))||t.currentTarget.getAttribute("href"),{offset:t.currentTarget.getAttribute("data-".concat(this.name,"-offset"))})}},{key:"addElements",value:function(){}},{key:"detectElements",value:function(t){var e=this,i=this.instance.scroll.y,s=i+this.windowHeight,n=this.instance.scroll.x,o=n+this.windowWidth;Object.entries(this.els).forEach((function(l){var r=f(l,2),a=r[0],c=r[1];if(!c||c.inView&&!t||("horizontal"===e.direction?o>=c.left&&n<c.right&&e.setInView(c,a):s>=c.top&&i<c.bottom&&e.setInView(c,a)),c&&c.inView)if("horizontal"===e.direction){var h=c.right-c.left;c.progress=(e.instance.scroll.x-(c.left-e.windowWidth))/(h+e.windowWidth),(o<c.left||n>c.right)&&e.setOutOfView(c,a)}else{var d=c.bottom-c.top;c.progress=(e.instance.scroll.y-(c.top-e.windowHeight))/(d+e.windowHeight),(s<c.top||i>c.bottom)&&e.setOutOfView(c,a)}})),this.hasScrollTicking=!1}},{key:"setInView",value:function(t,e){this.els[e].inView=!0,t.el.classList.add(t.class),this.currentElements[e]=t,t.call&&this.hasCallEventSet&&(this.dispatchCall(t,"enter"),t.repeat||(this.els[e].call=!1))}},{key:"setOutOfView",value:function(t,e){var i=this;this.els[e].inView=!1,Object.keys(this.currentElements).forEach((function(t){t===e&&delete i.currentElements[t]})),t.call&&this.hasCallEventSet&&this.dispatchCall(t,"exit"),t.repeat&&t.el.classList.remove(t.class)}},{key:"dispatchCall",value:function(t,e){this.callWay=e,this.callValue=t.call.split(",").map((function(t){return t.trim()})),this.callObj=t,1==this.callValue.length&&(this.callValue=this.callValue[0]);var i=new Event(this.namespace+"call");this.el.dispatchEvent(i)}},{key:"dispatchScroll",value:function(){var t=new Event(this.namespace+"scroll");this.el.dispatchEvent(t)}},{key:"setEvents",value:function(t,e){this.listeners[t]||(this.listeners[t]=[]);var i=this.listeners[t];i.push(e),1===i.length&&this.el.addEventListener(this.namespace+t,this.checkEvent,!1),"call"===t&&(this.hasCallEventSet=!0,this.detectElements(!0))}},{key:"unsetEvents",value:function(t,e){if(this.listeners[t]){var i=this.listeners[t],s=i.indexOf(e);s<0||(i.splice(s,1),0===i.index&&this.el.removeEventListener(this.namespace+t,this.checkEvent,!1))}}},{key:"checkEvent",value:function(t){var e=this,i=t.type.replace(this.namespace,""),s=this.listeners[i];s&&0!==s.length&&s.forEach((function(t){switch(i){case"scroll":return t(e.instance);case"call":return t(e.callValue,e.callWay,e.callObj);default:return t()}}))}},{key:"startScroll",value:function(){}},{key:"stopScroll",value:function(){}},{key:"setScroll",value:function(t,e){this.instance.scroll={x:0,y:0}}},{key:"destroy",value:function(){var t=this;window.removeEventListener("resize",this.checkResize,!1),Object.keys(this.listeners).forEach((function(e){t.el.removeEventListener(t.namespace+e,t.checkEvent,!1)})),this.listeners={},this.scrollToEls.forEach((function(e){e.removeEventListener("click",t.setScrollTo,!1)})),this.html.classList.remove(this.initClass)}}]),e}(),g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function w(t,e){return t(e={exports:{}},e.exports),e.exports}var S=w((function(t,e){t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var i,s=t.HTMLElement||t.Element,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:s.prototype.scroll||r,scrollIntoView:s.prototype.scrollIntoView},o=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,l=(i=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(i)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?p.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(a(arguments[0])?n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},s.prototype.scroll=s.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==a(arguments[0])){var t=arguments[0].left,e=arguments[0].top;p.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},s.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==a(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},s.prototype.scrollIntoView=function(){if(!0!==a(arguments[0])){var i=u(this),s=i.getBoundingClientRect(),o=this.getBoundingClientRect();i!==e.body?(p.call(this,i,i.scrollLeft+o.left-s.left,i.scrollTop+o.top-s.top),"fixed"!==t.getComputedStyle(i).position&&t.scrollBy({left:s.left,top:s.top,behavior:"smooth"})):t.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function r(t,e){this.scrollLeft=t,this.scrollTop=e}function a(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(t,e){return"Y"===e?t.clientHeight+l<t.scrollHeight:"X"===e?t.clientWidth+l<t.scrollWidth:void 0}function h(e,i){var s=t.getComputedStyle(e,null)["overflow"+i];return"auto"===s||"scroll"===s}function d(t){var e=c(t,"Y")&&h(t,"Y"),i=c(t,"X")&&h(t,"X");return e||i}function u(t){for(;t!==e.body&&!1===d(t);)t=t.parentNode||t.host;return t}function f(e){var i,s,n,l,r=(o()-e.startTime)/468;l=r=r>1?1:r,i=.5*(1-Math.cos(Math.PI*l)),s=e.startX+(e.x-e.startX)*i,n=e.startY+(e.y-e.startY)*i,e.method.call(e.scrollable,s,n),s===e.x&&n===e.y||t.requestAnimationFrame(f.bind(t,e))}function p(i,s,l){var a,c,h,d,u=o();i===e.body?(a=t,c=t.scrollX||t.pageXOffset,h=t.scrollY||t.pageYOffset,d=n.scroll):(a=i,c=i.scrollLeft,h=i.scrollTop,d=r),f({scrollable:a,method:d,startTime:u,startX:c,startY:h,x:s,y:l})}}}})),x=(S.polyfill,function(e){l(n,e);var s=d(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,n),(e=s.call(this,i)).resetNativeScroll&&(history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0)),window.addEventListener("scroll",e.checkScroll,!1),void 0===window.smoothscrollPolyfill&&(window.smoothscrollPolyfill=S,window.smoothscrollPolyfill.polyfill()),e}return i(n,[{key:"init",value:function(){this.instance.scroll.y=window.pageYOffset,this.addElements(),this.detectElements(),u(r(n.prototype),"init",this).call(this)}},{key:"checkScroll",value:function(){var t=this;u(r(n.prototype),"checkScroll",this).call(this),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.instance.scroll.y=window.pageYOffset,Object.entries(this.els).length&&(this.hasScrollTicking||(requestAnimationFrame((function(){t.detectElements()})),this.hasScrollTicking=!0))}},{key:"addDirection",value:function(){window.pageYOffset>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):window.pageYOffset<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up")}},{key:"addSpeed",value:function(){window.pageYOffset!=this.instance.scroll.y?this.instance.speed=(window.pageYOffset-this.instance.scroll.y)/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"resize",value:function(){Object.entries(this.els).length&&(this.windowHeight=window.innerHeight,this.updateElements())}},{key:"addElements",value:function(){var t=this;this.els={},this.el.querySelectorAll("[data-"+this.name+"]").forEach((function(e,i){e.getBoundingClientRect();var s,n,o,l=e.dataset[t.name+"Class"]||t.class,r="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:i,a="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,c=e.dataset[t.name+"Repeat"],h=e.dataset[t.name+"Call"],d=e.dataset[t.name+"Target"],u=(o=void 0!==d?document.querySelector("".concat(d)):e).getBoundingClientRect();s=u.top+t.instance.scroll.y,n=u.left+t.instance.scroll.x;var f=s+o.offsetHeight,p=n+o.offsetWidth;c="false"!=c&&(null!=c||t.repeat);var m=t.getRelativeOffset(a),v={el:e,targetEl:o,id:r,class:l,top:s+=m[0],bottom:f-=m[1],left:n,right:p,offset:a,progress:0,repeat:c,inView:!1,call:h};t.els[r]=v,e.classList.contains(l)&&t.setInView(t.els[r],r)}))}},{key:"updateElements",value:function(){var t=this;Object.entries(this.els).forEach((function(e){var i=f(e,2),s=i[0],n=i[1],o=n.targetEl.getBoundingClientRect().top+t.instance.scroll.y,l=o+n.targetEl.offsetHeight,r=t.getRelativeOffset(n.offset);t.els[s].top=o+r[0],t.els[s].bottom=l-r[1]})),this.hasScrollTicking=!1}},{key:"getRelativeOffset",value:function(t){var e=[0,0];if(t)for(var i=0;i<t.length;i++)"string"==typeof t[i]?t[i].includes("%")?e[i]=parseInt(t[i].replace("%","")*this.windowHeight/100):e[i]=parseInt(t[i]):e[i]=t[i];return e}},{key:"scrollTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=parseInt(e.offset)||0,s=!!e.callback&&e.callback;if("string"==typeof t){if("top"===t)t=this.html;else if("bottom"===t)t=this.html.offsetHeight-window.innerHeight;else if(!(t=document.querySelector(t)))return}else if("number"==typeof t)t=parseInt(t);else if(!t||!t.tagName)return void console.warn("`target` parameter is not valid");i="number"!=typeof t?t.getBoundingClientRect().top+i+this.instance.scroll.y:t+i;var n=function(){return parseInt(window.pageYOffset)===parseInt(i)};if(s){if(n())return void s();var o=function t(){n()&&(window.removeEventListener("scroll",t),s())};window.addEventListener("scroll",o)}window.scrollTo({top:i,behavior:0===e.duration?"auto":"smooth"})}},{key:"update",value:function(){this.addElements(),this.detectElements()}},{key:"destroy",value:function(){u(r(n.prototype),"destroy",this).call(this),window.removeEventListener("scroll",this.checkScroll,!1)}}]),n}(b)),k=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;function A(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var O=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var s={};return"abcdefghijklmnopqrst".split("").forEach((function(t){s[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},s)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,s,n=A(t),o=1;o<arguments.length;o++){for(var l in i=Object(arguments[o]))T.call(i,l)&&(n[l]=i[l]);if(k){s=k(i);for(var r=0;r<s.length;r++)E.call(i,s[r])&&(n[s[r]]=i[s[r]])}}return n};function D(){}D.prototype={on:function(t,e,i){var s=this.e||(this.e={});return(s[t]||(s[t]=[])).push({fn:e,ctx:i}),this},once:function(t,e,i){var s=this;function n(){s.off(t,n),e.apply(i,arguments)}return n._=e,this.on(t,n,i)},emit:function(t){for(var e=[].slice.call(arguments,1),i=((this.e||(this.e={}))[t]||[]).slice(),s=0,n=i.length;s<n;s++)i[s].fn.apply(i[s].ctx,e);return this},off:function(t,e){var i=this.e||(this.e={}),s=i[t],n=[];if(s&&e)for(var o=0,l=s.length;o<l;o++)s[o].fn!==e&&s[o].fn._!==e&&n.push(s[o]);return n.length?i[t]=n:delete i[t],this}};var C=D,L=w((function(t,e){(function(){(null!==e?e:this).Lethargy=function(){function t(t,e,i,s){this.stability=null!=t?Math.abs(t):8,this.sensitivity=null!=e?1+Math.abs(e):100,this.tolerance=null!=i?1+Math.abs(i):1.1,this.delay=null!=s?s:150,this.lastUpDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.lastDownDeltas=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this),this.deltasTimestamp=function(){var t,e,i;for(i=[],t=1,e=2*this.stability;1<=e?t<=e:t>=e;1<=e?t++:t--)i.push(null);return i}.call(this)}return t.prototype.check=function(t){var e;return null!=(t=t.originalEvent||t).wheelDelta?e=t.wheelDelta:null!=t.deltaY?e=-40*t.deltaY:null==t.detail&&0!==t.detail||(e=-40*t.detail),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),e>0?(this.lastUpDeltas.push(e),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(e),this.lastDownDeltas.shift(),this.isInertia(-1))},t.prototype.isInertia=function(t){var e,i,s,n,o,l,r;return null===(e=-1===t?this.lastDownDeltas:this.lastUpDeltas)[0]?t:!(this.deltasTimestamp[2*this.stability-2]+this.delay>Date.now()&&e[0]===e[2*this.stability-1])&&(s=e.slice(0,this.stability),i=e.slice(this.stability,2*this.stability),r=s.reduce((function(t,e){return t+e})),o=i.reduce((function(t,e){return t+e})),l=r/s.length,n=o/i.length,Math.abs(l)<Math.abs(n*this.tolerance)&&this.sensitivity<Math.abs(n)&&t)},t.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},t.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},t}()}).call(g)})),M={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1},j=Object.prototype.toString,_=Object.prototype.hasOwnProperty;function B(t,e){return function(){return t.apply(e,arguments)}}var W=L.Lethargy,H="virtualscroll",R=V,P=37,Y=38,I=39,z=40,X=32;function V(t){!function(t){if(!t)return console.warn("bindAll requires at least one argument.");var e=Array.prototype.slice.call(arguments,1);if(0===e.length)for(var i in t)_.call(t,i)&&"function"==typeof t[i]&&"[object Function]"==j.call(t[i])&&e.push(i);for(var s=0;s<e.length;s++){var n=e[s];t[n]=B(t[n],t)}}(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,t&&t.el&&(this.el=t.el,delete t.el),this.options=O({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1,useKeyboard:!0,useTouch:!0},t),this.options.limitInertia&&(this._lethargy=new W),this._emitter=new C,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,void 0!==this.options.passive&&(this.listenerOptions={passive:this.options.passive})}function F(t,e,i){return(1-i)*t+i*e}function q(t){var e={};if(window.getComputedStyle){var i=getComputedStyle(t),s=i.transform||i.webkitTransform||i.mozTransform,n=s.match(/^matrix3d\((.+)\)$/);return n?(e.x=n?parseFloat(n[1].split(", ")[12]):0,e.y=n?parseFloat(n[1].split(", ")[13]):0):(n=s.match(/^matrix\((.+)\)$/),e.x=n?parseFloat(n[1].split(", ")[4]):0,e.y=n?parseFloat(n[1].split(", ")[5]):0),e}}function K(t){for(var e=[];t&&t!==document;t=t.parentNode)e.push(t);return e}V.prototype._notify=function(t){var e=this._event;e.x+=e.deltaX,e.y+=e.deltaY,this._emitter.emit(H,{x:e.x,y:e.y,deltaX:e.deltaX,deltaY:e.deltaY,originalEvent:t})},V.prototype._onWheel=function(t){var e=this.options;if(!this._lethargy||!1!==this._lethargy.check(t)){var i=this._event;i.deltaX=t.wheelDeltaX||-1*t.deltaX,i.deltaY=t.wheelDeltaY||-1*t.deltaY,M.isFirefox&&1==t.deltaMode&&(i.deltaX*=e.firefoxMultiplier,i.deltaY*=e.firefoxMultiplier),i.deltaX*=e.mouseMultiplier,i.deltaY*=e.mouseMultiplier,this._notify(t)}},V.prototype._onMouseWheel=function(t){if(!this.options.limitInertia||!1!==this._lethargy.check(t)){var e=this._event;e.deltaX=t.wheelDeltaX?t.wheelDeltaX:0,e.deltaY=t.wheelDeltaY?t.wheelDeltaY:t.wheelDelta,this._notify(t)}},V.prototype._onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t;this.touchStartX=e.pageX,this.touchStartY=e.pageY},V.prototype._onTouchMove=function(t){var e=this.options;e.preventTouch&&!t.target.classList.contains(e.unpreventTouchClass)&&t.preventDefault();var i=this._event,s=t.targetTouches?t.targetTouches[0]:t;i.deltaX=(s.pageX-this.touchStartX)*e.touchMultiplier,i.deltaY=(s.pageY-this.touchStartY)*e.touchMultiplier,this.touchStartX=s.pageX,this.touchStartY=s.pageY,this._notify(t)},V.prototype._onKeyDown=function(t){var e=this._event;e.deltaX=e.deltaY=0;var i=window.innerHeight-40;switch(t.keyCode){case P:case Y:e.deltaY=this.options.keyStep;break;case I:case z:e.deltaY=-this.options.keyStep;break;case t.shiftKey:e.deltaY=i;break;case X:e.deltaY=-i;break;default:return}this._notify(t)},V.prototype._bind=function(){M.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),M.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),M.hasTouch&&this.options.useTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),M.hasPointer&&M.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),M.hasKeyDown&&this.options.useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},V.prototype._unbind=function(){M.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),M.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),M.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),M.hasPointer&&M.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),M.hasKeyDown&&this.options.useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},V.prototype.on=function(t,e){this._emitter.on(H,t,e);var i=this._emitter.e;i&&i[H]&&1===i[H].length&&this._bind()},V.prototype.off=function(t,e){this._emitter.off(H,t,e);var i=this._emitter.e;(!i[H]||i[H].length<=0)&&this._unbind()},V.prototype.reset=function(){var t=this._event;t.x=0,t.y=0},V.prototype.destroy=function(){this._emitter.off(),this._unbind()};var N="function"==typeof Float32Array;function U(t,e){return 1-3*e+3*t}function $(t,e){return 3*e-6*t}function G(t){return 3*t}function J(t,e,i){return((U(e,i)*t+$(e,i))*t+G(e))*t}function Q(t,e,i){return 3*U(e,i)*t*t+2*$(e,i)*t+G(e)}function Z(t){return t}var tt=function(t,e,i,s){if(!(0<=t&&t<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&i===s)return Z;for(var n=N?new Float32Array(11):new Array(11),o=0;o<11;++o)n[o]=J(.1*o,t,i);function l(e){for(var s=0,o=1;10!==o&&n[o]<=e;++o)s+=.1;--o;var l=s+.1*((e-n[o])/(n[o+1]-n[o])),r=Q(l,t,i);return r>=.001?function(t,e,i,s){for(var n=0;n<4;++n){var o=Q(e,i,s);if(0===o)return e;e-=(J(e,i,s)-t)/o}return e}(e,l,t,i):0===r?l:function(t,e,i,s,n){var o,l,r=0;do{(o=J(l=e+(i-e)/2,s,n)-t)>0?i=l:e=l}while(Math.abs(o)>1e-7&&++r<10);return l}(e,s,s+.1,t,i)}return function(t){return 0===t?0:1===t?1:J(l(t),e,s)}},et=38,it=40,st=32,nt=9,ot=33,lt=34,rt=36,at=35,ct=function(e){l(n,e);var s=d(n);function n(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(this,n),history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0),(e=s.call(this,i)).inertia&&(e.lerp=.1*e.inertia),e.isScrolling=!1,e.isDraggingScrollbar=!1,e.isTicking=!1,e.hasScrollTicking=!1,e.parallaxElements={},e.stop=!1,e.scrollbarContainer=i.scrollbarContainer,e.checkKey=e.checkKey.bind(c(e)),window.addEventListener("keydown",e.checkKey,!1),e}return i(n,[{key:"init",value:function(){var t=this;this.html.classList.add(this.smoothClass),this.html.setAttribute("data-".concat(this.name,"-direction"),this.direction),this.instance=o({delta:{x:this.initPosition.x,y:this.initPosition.y},scroll:{x:this.initPosition.x,y:this.initPosition.y}},this.instance),this.vs=new R({el:this.scrollFromAnywhere?document:this.el,mouseMultiplier:navigator.platform.indexOf("Win")>-1?1:.4,firefoxMultiplier:this.firefoxMultiplier,touchMultiplier:this.touchMultiplier,useKeyboard:!1,passive:!0}),this.vs.on((function(e){t.stop||t.isDraggingScrollbar||requestAnimationFrame((function(){t.updateDelta(e),t.isScrolling||t.startScrolling()}))})),this.setScrollLimit(),this.initScrollBar(),this.addSections(),this.addElements(),this.checkScroll(!0),this.transformElements(!0,!0),u(r(n.prototype),"init",this).call(this)}},{key:"setScrollLimit",value:function(){if(this.instance.limit.y=this.el.offsetHeight-this.windowHeight,"horizontal"===this.direction){for(var t=0,e=this.el.children,i=0;i<e.length;i++)t+=e[i].offsetWidth;this.instance.limit.x=t-this.windowWidth}}},{key:"startScrolling",value:function(){this.startScrollTs=Date.now(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"stopScrolling",value:function(){cancelAnimationFrame(this.checkScrollRaf),this.startScrollTs=void 0,this.scrollToRaf&&(cancelAnimationFrame(this.scrollToRaf),this.scrollToRaf=null),this.isScrolling=!1,this.instance.scroll.y=Math.round(this.instance.scroll.y),this.html.classList.remove(this.scrollingClass)}},{key:"checkKey",value:function(t){var e=this;if(this.stop)t.keyCode==nt&&requestAnimationFrame((function(){e.html.scrollTop=0,document.body.scrollTop=0,e.html.scrollLeft=0,document.body.scrollLeft=0}));else{switch(t.keyCode){case nt:requestAnimationFrame((function(){e.html.scrollTop=0,document.body.scrollTop=0,e.html.scrollLeft=0,document.body.scrollLeft=0,e.scrollTo(document.activeElement,{offset:-window.innerHeight/2})}));break;case et:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]-=240);break;case it:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]+=240);break;case ot:this.instance.delta[this.directionAxis]-=window.innerHeight;break;case lt:this.instance.delta[this.directionAxis]+=window.innerHeight;break;case rt:this.instance.delta[this.directionAxis]-=this.instance.limit[this.directionAxis];break;case at:this.instance.delta[this.directionAxis]+=this.instance.limit[this.directionAxis];break;case st:this.isActiveElementScrollSensitive()&&(t.shiftKey?this.instance.delta[this.directionAxis]-=window.innerHeight:this.instance.delta[this.directionAxis]+=window.innerHeight);break;default:return}this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis]),this.stopScrolling(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}}},{key:"isActiveElementScrollSensitive",value:function(){return!(document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement||document.activeElement instanceof HTMLButtonElement||document.activeElement instanceof HTMLSelectElement)}},{key:"checkScroll",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||this.isScrolling||this.isDraggingScrollbar){this.hasScrollTicking||(this.checkScrollRaf=requestAnimationFrame((function(){return t.checkScroll()})),this.hasScrollTicking=!0),this.updateScroll();var i=Math.abs(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis]),s=Date.now()-this.startScrollTs;if(!this.animatingScroll&&s>100&&(i<.5&&0!=this.instance.delta[this.directionAxis]||i<.5&&0==this.instance.delta[this.directionAxis])&&this.stopScrolling(),Object.entries(this.sections).forEach((function(i){var s=f(i,2),n=(s[0],s[1]);n.persistent||t.instance.scroll[t.directionAxis]>n.offset[t.directionAxis]&&t.instance.scroll[t.directionAxis]<n.limit[t.directionAxis]?("horizontal"===t.direction?t.transform(n.el,-t.instance.scroll[t.directionAxis],0):t.transform(n.el,0,-t.instance.scroll[t.directionAxis]),n.inView||(n.inView=!0,n.el.style.opacity=1,n.el.style.pointerEvents="all",n.el.setAttribute("data-".concat(t.name,"-section-inview"),""))):((n.inView||e)&&(n.inView=!1,n.el.style.opacity=0,n.el.style.pointerEvents="none",n.el.removeAttribute("data-".concat(t.name,"-section-inview"))),t.transform(n.el,0,0))})),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.detectElements(),this.transformElements(),this.hasScrollbar){var o=this.instance.scroll[this.directionAxis]/this.instance.limit[this.directionAxis]*this.scrollBarLimit[this.directionAxis];"horizontal"===this.direction?this.transform(this.scrollbarThumb,o,0):this.transform(this.scrollbarThumb,0,o)}u(r(n.prototype),"checkScroll",this).call(this),this.hasScrollTicking=!1}}},{key:"resize",value:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.checkContext(),this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.update()}},{key:"updateDelta",value:function(t){var e,i=this[this.context]&&this[this.context].gestureDirection?this[this.context].gestureDirection:this.gestureDirection;e="both"===i?t.deltaX+t.deltaY:"vertical"===i?t.deltaY:"horizontal"===i?t.deltaX:t.deltaY,this.instance.delta[this.directionAxis]-=e*this.multiplier,this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis])}},{key:"updateScroll",value:function(t){this.isScrolling||this.isDraggingScrollbar?this.instance.scroll[this.directionAxis]=F(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis],this.lerp):this.instance.scroll[this.directionAxis]>this.instance.limit[this.directionAxis]?this.setScroll(this.instance.scroll[this.directionAxis],this.instance.limit[this.directionAxis]):this.instance.scroll.y<0?this.setScroll(this.instance.scroll[this.directionAxis],0):this.setScroll(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis])}},{key:"addDirection",value:function(){this.instance.delta.y>this.instance.scroll.y?"down"!==this.instance.direction&&(this.instance.direction="down"):this.instance.delta.y<this.instance.scroll.y&&"up"!==this.instance.direction&&(this.instance.direction="up"),this.instance.delta.x>this.instance.scroll.x?"right"!==this.instance.direction&&(this.instance.direction="right"):this.instance.delta.x<this.instance.scroll.x&&"left"!==this.instance.direction&&(this.instance.direction="left")}},{key:"addSpeed",value:function(){this.instance.delta[this.directionAxis]!=this.instance.scroll[this.directionAxis]?this.instance.speed=(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis])/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"initScrollBar",value:function(){if(this.scrollbar=document.createElement("span"),this.scrollbarThumb=document.createElement("span"),this.scrollbar.classList.add("".concat(this.scrollbarClass)),this.scrollbarThumb.classList.add("".concat(this.scrollbarClass,"_thumb")),this.scrollbar.append(this.scrollbarThumb),this.scrollbarContainer?this.scrollbarContainer.append(this.scrollbar):document.body.append(this.scrollbar),this.getScrollBar=this.getScrollBar.bind(this),this.releaseScrollBar=this.releaseScrollBar.bind(this),this.moveScrollBar=this.moveScrollBar.bind(this),this.scrollbarThumb.addEventListener("mousedown",this.getScrollBar),window.addEventListener("mouseup",this.releaseScrollBar),window.addEventListener("mousemove",this.moveScrollBar),this.hasScrollbar=!1,"horizontal"==this.direction){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,"horizontal"===this.direction?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"reinitScrollBar",value:function(){if(this.hasScrollbar=!1,"horizontal"==this.direction){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,"horizontal"===this.direction?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"destroyScrollBar",value:function(){this.scrollbarThumb.removeEventListener("mousedown",this.getScrollBar),window.removeEventListener("mouseup",this.releaseScrollBar),window.removeEventListener("mousemove",this.moveScrollBar),this.scrollbar.remove()}},{key:"getScrollBar",value:function(t){this.isDraggingScrollbar=!0,this.checkScroll(),this.html.classList.remove(this.scrollingClass),this.html.classList.add(this.draggingClass)}},{key:"releaseScrollBar",value:function(t){this.isDraggingScrollbar=!1,this.isScrolling&&this.html.classList.add(this.scrollingClass),this.html.classList.remove(this.draggingClass)}},{key:"moveScrollBar",value:function(t){var e=this;this.isDraggingScrollbar&&requestAnimationFrame((function(){var i=100*(t.clientX-e.scrollbarBCR.left)/e.scrollbarWidth*e.instance.limit.x/100,s=100*(t.clientY-e.scrollbarBCR.top)/e.scrollbarHeight*e.instance.limit.y/100;s>0&&s<e.instance.limit.y&&(e.instance.delta.y=s),i>0&&i<e.instance.limit.x&&(e.instance.delta.x=i)}))}},{key:"addElements",value:function(){var t=this;this.els={},this.parallaxElements={},this.el.querySelectorAll("[data-".concat(this.name,"]")).forEach((function(e,i){var s,n,o,l=K(e),r=Object.entries(t.sections).map((function(t){var e=f(t,2);e[0];return e[1]})).find((function(t){return l.includes(t.el)})),a=e.dataset[t.name+"Class"]||t.class,c="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:"el"+i,h=e.dataset[t.name+"Repeat"],d=e.dataset[t.name+"Call"],u=e.dataset[t.name+"Position"],p=e.dataset[t.name+"Delay"],m=e.dataset[t.name+"Direction"],v="string"==typeof e.dataset[t.name+"Sticky"],y=!!e.dataset[t.name+"Speed"]&&parseFloat(e.dataset[t.name+"Speed"])/10,b="string"==typeof e.dataset[t.name+"Offset"]?e.dataset[t.name+"Offset"].split(","):t.offset,g=e.dataset[t.name+"Target"],w=(o=void 0!==g?document.querySelector("".concat(g)):e).getBoundingClientRect();null===r||r.inView?(s=w.top+t.instance.scroll.y-q(o).y,n=w.left+t.instance.scroll.x-q(o).x):(s=w.top-q(r.el).y-q(o).y,n=w.left-q(r.el).x-q(o).x);var S=s+o.offsetHeight,x=n+o.offsetWidth,k={x:(x-n)/2+n,y:(S-s)/2+s};if(v){var T=e.getBoundingClientRect(),E=T.top,A=T.left,O={x:A-n,y:E-s};s+=window.innerHeight,n+=window.innerWidth,S=E+o.offsetHeight-e.offsetHeight-O[t.directionAxis],k={x:((x=A+o.offsetWidth-e.offsetWidth-O[t.directionAxis])-n)/2+n,y:(S-s)/2+s}}h="false"!=h&&(null!=h||t.repeat);var D=[0,0];if(b)if("horizontal"===t.direction){for(var C=0;C<b.length;C++)"string"==typeof b[C]?b[C].includes("%")?D[C]=parseInt(b[C].replace("%","")*t.windowWidth/100):D[C]=parseInt(b[C]):D[C]=b[C];n+=D[0],x-=D[1]}else{for(C=0;C<b.length;C++)"string"==typeof b[C]?b[C].includes("%")?D[C]=parseInt(b[C].replace("%","")*t.windowHeight/100):D[C]=parseInt(b[C]):D[C]=b[C];s+=D[0],S-=D[1]}var L={el:e,id:c,class:a,section:r,top:s,middle:k,bottom:S,left:n,right:x,offset:b,progress:0,repeat:h,inView:!1,call:d,speed:y,delay:p,position:u,target:o,direction:m,sticky:v};t.els[c]=L,e.classList.contains(a)&&t.setInView(t.els[c],c),(!1!==y||v)&&(t.parallaxElements[c]=L)}))}},{key:"addSections",value:function(){var t=this;this.sections={};var e=this.el.querySelectorAll("[data-".concat(this.name,"-section]"));0===e.length&&(e=[this.el]),e.forEach((function(e,i){var s="string"==typeof e.dataset[t.name+"Id"]?e.dataset[t.name+"Id"]:"section"+i,n=e.getBoundingClientRect(),o={x:n.left-1.5*window.innerWidth-q(e).x,y:n.top-1.5*window.innerHeight-q(e).y},l={x:o.x+n.width+2*window.innerWidth,y:o.y+n.height+2*window.innerHeight},r="string"==typeof e.dataset[t.name+"Persistent"];e.setAttribute("data-scroll-section-id",s);var a={el:e,offset:o,limit:l,inView:!1,persistent:r,id:s};t.sections[s]=a}))}},{key:"transform",value:function(t,e,i,s){var n;if(s){var o=q(t),l=F(o.x,e,s),r=F(o.y,i,s);n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(l,",").concat(r,",0,1)")}else n="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e,",").concat(i,",0,1)");t.style.webkitTransform=n,t.style.msTransform=n,t.style.transform=n}},{key:"transformElements",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=this.instance.scroll.x+this.windowWidth,n=this.instance.scroll.y+this.windowHeight,o={x:this.instance.scroll.x+this.windowMiddle.x,y:this.instance.scroll.y+this.windowMiddle.y};Object.entries(this.parallaxElements).forEach((function(l){var r=f(l,2),a=(r[0],r[1]),c=!1;if(t&&(c=0),a.inView||i)switch(a.position){case"top":c=e.instance.scroll[e.directionAxis]*-a.speed;break;case"elementTop":c=(n-a.top)*-a.speed;break;case"bottom":c=(e.instance.limit[e.directionAxis]-n+e.windowHeight)*a.speed;break;case"left":c=e.instance.scroll[e.directionAxis]*-a.speed;break;case"elementLeft":c=(s-a.left)*-a.speed;break;case"right":c=(e.instance.limit[e.directionAxis]-s+e.windowHeight)*a.speed;break;default:c=(o[e.directionAxis]-a.middle[e.directionAxis])*-a.speed}a.sticky&&(c=a.inView?"horizontal"===e.direction?e.instance.scroll.x-a.left+window.innerWidth:e.instance.scroll.y-a.top+window.innerHeight:"horizontal"===e.direction?e.instance.scroll.x<a.left-window.innerWidth&&e.instance.scroll.x<a.left-window.innerWidth/2?0:e.instance.scroll.x>a.right&&e.instance.scroll.x>a.right+100&&a.right-a.left+window.innerWidth:e.instance.scroll.y<a.top-window.innerHeight&&e.instance.scroll.y<a.top-window.innerHeight/2?0:e.instance.scroll.y>a.bottom&&e.instance.scroll.y>a.bottom+100&&a.bottom-a.top+window.innerHeight),!1!==c&&("horizontal"===a.direction||"horizontal"===e.direction&&"vertical"!==a.direction?e.transform(a.el,c,0,!t&&a.delay):e.transform(a.el,0,c,!t&&a.delay))}))}},{key:"scrollTo",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=parseInt(i.offset)||0,n=isNaN(parseInt(i.duration))?1e3:parseInt(i.duration),o=i.easing||[.25,0,.35,1],l=!!i.disableLerp,r=!!i.callback&&i.callback;if(o=tt.apply(void 0,p(o)),"string"==typeof t){if("top"===t)t=0;else if("bottom"===t)t=this.instance.limit.y;else if("left"===t)t=0;else if("right"===t)t=this.instance.limit.x;else if(!(t=document.querySelector(t)))return}else if("number"==typeof t)t=parseInt(t);else if(!t||!t.tagName)return void console.warn("`target` parameter is not valid");if("number"!=typeof t){var a=K(t).includes(this.el);if(!a)return;var c=t.getBoundingClientRect(),h=c.top,d=c.left,u=K(t),m=u.find((function(t){return Object.entries(e.sections).map((function(t){var e=f(t,2);e[0];return e[1]})).find((function(e){return e.el==t}))})),v=0;v=m?q(m)[this.directionAxis]:-this.instance.scroll[this.directionAxis],s="horizontal"===this.direction?d+s-v:h+s-v}else s=t+s;var y=parseFloat(this.instance.delta[this.directionAxis]),b=Math.max(0,Math.min(s,this.instance.limit[this.directionAxis])),g=b-y,w=function(t){l?"horizontal"===e.direction?e.setScroll(y+g*t,e.instance.delta.y):e.setScroll(e.instance.delta.x,y+g*t):e.instance.delta[e.directionAxis]=y+g*t};this.animatingScroll=!0,this.stopScrolling(),this.startScrolling();var S=Date.now(),x=function t(){var i=(Date.now()-S)/n;i>1?(w(1),e.animatingScroll=!1,0==n&&e.update(),r&&r()):(e.scrollToRaf=requestAnimationFrame(t),w(o(i)))};x()}},{key:"update",value:function(){this.setScrollLimit(),this.addSections(),this.addElements(),this.detectElements(),this.updateScroll(),this.transformElements(!0),this.reinitScrollBar(),this.checkScroll(!0)}},{key:"startScroll",value:function(){this.stop=!1}},{key:"stopScroll",value:function(){this.stop=!0}},{key:"setScroll",value:function(t,e){this.instance=o(o({},this.instance),{},{scroll:{x:t,y:e},delta:{x:t,y:e},speed:0})}},{key:"destroy",value:function(){u(r(n.prototype),"destroy",this).call(this),this.stopScrolling(),this.html.classList.remove(this.smoothClass),this.vs.destroy(),this.destroyScrollBar(),window.removeEventListener("keydown",this.checkKey,!1)}}]),n}(b);return function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.options=i,Object.assign(this,y,i),this.smartphone=y.smartphone,i.smartphone&&Object.assign(this.smartphone,i.smartphone),this.tablet=y.tablet,i.tablet&&Object.assign(this.tablet,i.tablet),this.smooth||"horizontal"!=this.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),this.tablet.smooth||"horizontal"!=this.tablet.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),this.smartphone.smooth||"horizontal"!=this.smartphone.direction||console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),this.init()}return i(e,[{key:"init",value:function(){if(this.options.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||window.innerWidth<this.tablet.breakpoint,this.options.isTablet=this.options.isMobile&&window.innerWidth>=this.tablet.breakpoint,this.smooth&&!this.options.isMobile||this.tablet.smooth&&this.options.isTablet||this.smartphone.smooth&&this.options.isMobile&&!this.options.isTablet?this.scroll=new ct(this.options):this.scroll=new x(this.options),this.scroll.init(),window.location.hash){var t=window.location.hash.slice(1,window.location.hash.length),e=document.getElementById(t);e&&this.scroll.scrollTo(e)}}},{key:"update",value:function(){this.scroll.update()}},{key:"start",value:function(){this.scroll.startScroll()}},{key:"stop",value:function(){this.scroll.stopScroll()}},{key:"scrollTo",value:function(t,e){this.scroll.scrollTo(t,e)}},{key:"setScroll",value:function(t,e){this.scroll.setScroll(t,e)}},{key:"on",value:function(t,e){this.scroll.setEvents(t,e)}},{key:"off",value:function(t,e){this.scroll.unsetEvents(t,e)}},{key:"destroy",value:function(){this.scroll.destroy()}}]),e}()}));

/*
────────╔╗───     ───────────╔═╗─────────
╔═╦╗╔═╗╔╝║╔═╗     ╔══╗╔═╗─╔╦╗║╬║╔╦╗╔═╗╔═╗
║║║║║╬║║╬║║╩╣     ║║║║║╬╚╗║╔╝╚╗║║║║║╩╣║╩╣
╚╩═╝╚═╝╚═╝╚═╝     ╚╩╩╝╚══╝╚╝──╚╝╚═╝╚═╝╚═╝

GitHub Repository: https://github.com/antonbobrov/node-marquee

Powered by Anthony Bobrov | https://github.com/antonbobrov
*/
(()=>{var e={473:()=>{},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=o[u]||0,d="".concat(u," ").concat(l);o[u]=l+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=i(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function i(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var s=n(o[a]);t[s].references--}for(var c=r(e,i),u=0;u<o.length;u++){var l=n(o[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=n(379),t=n.n(e),r=n(795),i=n.n(r),o=n(569),a=n.n(o),s=n(565),c=n.n(s),u=n(216),l=n.n(u),d=n(589),f=n.n(d),p=n(473),v=n.n(p),m={};m.styleTagTransform=f(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l();t()(v(),m);v()&&v().locals&&v().locals;function h(e,t){if(e instanceof Window)return e;if(function(e){return e instanceof HTMLElement||e instanceof Element}(e))return e;if(void 0!==t){const n=h(t);if(n)return n.querySelector(e)}return document.querySelector(e)}function y(e,t,n){const r=t.split(" ");for(let i=0;i<r.length;i++)void 0===n?e.classList.toggle(r[i]):n?e.classList.add(r[i]):e.classList.remove(r[i])}function g(e,t={}){const n=document.createElement(e);if(t.class&&function(e,t){if(e instanceof Element)y(e,t,!0);else for(let n=0;n<e.length;n++)y(e[n],t,!0)}(n,t.class),t.id&&n.setAttribute("id",t.id),t.attr)for(let r=0,i=t.attr.length;r<i;r++){const e=t.attr[r];n.setAttribute(e[0],e[1])}if(t.parent&&t.parent.appendChild(n),t.html&&(n.innerHTML=t.html),t.children)for(let r=0,i=t.children.length;r<i;r++)n.appendChild(t.children[r]);return n}const w=[];function b(e,t,n,r){if(void 0!==r){const i={passive:!1,once:!1};r.once&&(i.once=!0),r.passive&&(i.passive=!0),e.addEventListener(t,n,i)}else e.addEventListener(t,n);const i=`${Math.random()}-${+new Date}`;return w.push({id:i,el:e,target:t,callback:n}),{id:i,remove:M.bind(this,i)}}function M(e){const t=[];for(let n=0,r=w.length;n<r;n++){const r=w[n];r.id===e?r.el.removeEventListener(r.target,r.callback):t.push(r)}}function T(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={parent:"#node-marquee",speed:2,minQuantity:4,autoplay:!0,pauseOnHover:!1,useParentStyles:!0,prependWhitespace:!0,resize:!0},n=Object.assign(t,e),r="node-marquee",i=h(n.parent);if(!(i instanceof HTMLElement))return!1;i.classList.add(r);var o,a={width:window.innerWidth,height:window.innerHeight},s=!1,c=!1,u=0,l=!1,d=i.innerHTML,f=0,p=[],v=0,m=[b(window,"resize",M),b(i,"mouseenter",E),b(i,"mouseleave",L)];function y(){S(),f=0,p=[],i.innerHTML="",n.useParentStyles&&(i.style.position="relative",i.style.width="100%",i.style.overflow="hidden",i.style.whiteSpace="nowrap");var e=w();(v=e.clientWidth)<=0&&(v=window.innerWidth),v<i.clientWidth&&(f=Math.ceil((i.clientWidth+v)/v)),f<n.minQuantity&&(f=n.minQuantity);for(var t=1;t<f;t+=1)w(!0);I(),x(),setTimeout((function(){A()}),500)}function w(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=g("div",{class:"".concat(r,"__el"),html:"".concat(n.prependWhitespace?"&nbsp;":"").concat(d)});return e&&(t.style.position="absolute",t.style.top="0",t.style.left="0"),t.style.display="inline-block",i.appendChild(t),p.push(t),t}function M(){if(!1!==n.resize){var e=a.width,t=a.height,r=window.innerWidth,i=window.innerHeight;if(a.width=r,a.height=i,"string"==typeof n.resize)return"w"===n.resize&&e!==r||"h"===n.resize&&t!==i?void y():void 0;y()}}function E(){n.pauseOnHover&&W()}function L(){n.pauseOnHover&&O()}function x(){if(!o){(o=new MutationObserver((function(e){var t,n=T(e);try{for(n.s();!(t=n.n()).done;){"childList"===t.value.type&&(d=i.innerHTML,y())}}catch(r){n.e(r)}finally{n.f()}}))).observe(i,{childList:!0})}}function S(){o&&(o.disconnect(),o=void 0)}function A(){if(!s){for(var e=[],t=0;t<f;t+=1)e.push(p[t].clientWidth);v=Math.max.apply(Math,e)}}function H(){c&&(l=window.requestAnimationFrame(H)),I()}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.speed;u-=e;for(var t=v*(f-1),r=0;r<f;r+=1){var i=p[r],o=q(-v,t,u+v*r);i.style.transform="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0, ".concat(o,", 0, 0,1)")}}function q(e,t,n){var r=t-e;return C(n,(function(t){return(r+(t-e)%r)%r+e}))}function C(e,t){return e||0===e?t(e):t}function O(){l||(c=!0,l=window.requestAnimationFrame(H))}function W(){c=!1,l&&(window.cancelAnimationFrame(l),l=!1)}function j(){s=!0,W(),S(),m.forEach((function(e){e.remove()})),i.innerHTML=d}return y(),n.autoplay&&O(),{play:O,pause:W,isPlaying:function(){return c},render:I,recreate:y,updateSizes:A,destroy:j}}var x=document.getElementById("marquee-simple");x&&L({parent:x});var S=document.getElementById("marquee-pause");S&&L({parent:S,pauseOnHover:!0});var A=document.getElementById("marquee-reverse");A&&L({parent:A,speed:-1});var H=document.getElementById("marquee-mutation");H&&(L({parent:H,speed:-1}),setTimeout((function(){H.innerHTML="The text is changed -"}),5e3));var I=document.getElementById("marquee-destroy");if(I){var q=L({parent:I,speed:-1});setTimeout((function(){q&&q.destroy()}),5e3)}})()})();




var BB;
function init_infoBox() {
    (BB.gmap.infobox.prototype = new google.maps.OverlayView()),
        (BB.gmap.infobox.prototype.remove = function () {
            if (this._div) {
                try {
                    this._div.parentNode.removeChild(this._div);
                } catch (t) {}
                this._div = null;
            }
        }),
        (BB.gmap.infobox.prototype.set_position = function (t) {
            if (!t) return this;
            if (("string" == typeof t && (t = t.split(",")), !(t instanceof google.maps.LatLng))) {
                if (void 0 === t[0] || void 0 === t[1]) return this;
                t = new google.maps.LatLng(t[0], t[1]);
            }
            return (this.opts.position = t), this.map && this.draw(), this;
        }),
        (BB.gmap.infobox.prototype.set_map = function (t) {
            (this.__MAP = t), this.setMap(this.__MAP);
        }),
        (BB.gmap.infobox.prototype.draw = function () {
            this.createElement(), google.maps.event.trigger(this.__MAP, "infobox_opened", { elem: this });
            var t = this.getProjection().fromLatLngToDivPixel(this.opts.position);
            t &&
                ((this._div.style.width = this._width + "px"),
                (this._div.style.left = t.x + this._offsetX + "px"),
                (this._div.style.height = this._height + "px"),
                (this._div.style.top = t.y + this._offsetY + "px"),
                (this._div.style.display = "block"),
                (this._div.style.zIndex = 1));
        }),
        (BB.gmap.infobox.prototype.createElement = function () {
            this.generateInfoboxContent();
            var t = this.getPanes(),
                e = this._div;
            if (e && e.parentNode != t.floatPane)
                try {
                    e.parentNode.removeChild(e);
                } catch (t) {}
            e || (((e = this._div = document.createElement("div")).style.border = "0"), (e.style.position = "absolute")),
                (e.innerHTML = ""),
                e.appendChild(this.__ELEM),
                t.floatPane.appendChild(e),
                (this._height = this.__ELEM.offsetHeight),
                (this._width = this.__ELEM.offsetWidth),
                (e.style.width = this._width + "px"),
                (e.style.height = this._height + "px"),
                e.setAttribute("class", "gmap_infobox");
            var i = this.opts.placement.split(" ");
            switch (i[0]) {
                case "top":
                    this._offsetY = -parseFloat(this.opts.offsetY);
                    break;
                case "over":
                    this._offsetY = -parseFloat(this.opts.offsetY) - parseInt(this._height);
                    break;
                case "bottom":
                    this._offsetY = -parseFloat(this._height);
                    break;
                case "under":
                    this._offsetY = 0;
                    break;
                case "center":
                    this._offsetY = -parseFloat(this.opts.offsetY) / 2 - parseInt(this._height) / 2;
            }
            switch (i[1]) {
                case "right":
                    this._offsetX = parseFloat(this.opts.offsetX) - parseInt(this._width);
                    break;
                case "left":
                    this._offsetX = -parseFloat(this.opts.offsetX);
                    break;
                case "center":
                    this._offsetX = -parseInt(this._width) / 2;
                    break;
                case "out-right":
                    this._offsetX = parseFloat(this.opts.offsetX);
                    break;
                case "out-left":
                    this._offsetX = -parseFloat(this.opts.offsetX) - parseInt(this._width);
            }
        }),
        (BB.gmap.infobox.prototype.generateInfoboxContent = function () {
            var t = this.infoboxContent;
            if (("function" == typeof t && (t = t(this.__MARKER.data())), "number" == typeof t && (t = t.toString()), "string" == typeof t)) {
                var e = document.getElementById(t);
                e || (((e = document.createElement("div")).style.position = "absolute"), (e.innerHTML = t)), (t = e);
            }
            return "undefined" != typeof jQuery && t instanceof jQuery && (t = t.get(0)), (this.__ELEM = t), this;
        }),
        (BB.gmap.infobox.prototype.refresh = function () {
            this.generateInfoboxContent();
        });
}
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e() : "function" == typeof define && define.amd ? define(e) : e();
})(0, function () {
    "use strict";
    function t(t) {
        var e = !0,
            i = !1,
            s = null,
            r = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 };
        function a(t) {
            return !!(t && t !== document && "HTML" !== t.nodeName && "BODY" !== t.nodeName && "classList" in t && "contains" in t.classList);
        }
        function n(t) {
            t.classList.contains("focus-visible") || (t.classList.add("focus-visible"), t.setAttribute("data-focus-visible-added", ""));
        }
        function o(t) {
            e = !1;
        }
        function l() {
            document.addEventListener("mousemove", h),
                document.addEventListener("mousedown", h),
                document.addEventListener("mouseup", h),
                document.addEventListener("pointermove", h),
                document.addEventListener("pointerdown", h),
                document.addEventListener("pointerup", h),
                document.addEventListener("touchmove", h),
                document.addEventListener("touchstart", h),
                document.addEventListener("touchend", h);
        }
        function h(t) {
            (t.target.nodeName && "html" === t.target.nodeName.toLowerCase()) ||
                ((e = !1),
                document.removeEventListener("mousemove", h),
                document.removeEventListener("mousedown", h),
                document.removeEventListener("mouseup", h),
                document.removeEventListener("pointermove", h),
                document.removeEventListener("pointerdown", h),
                document.removeEventListener("pointerup", h),
                document.removeEventListener("touchmove", h),
                document.removeEventListener("touchstart", h),
                document.removeEventListener("touchend", h));
        }
        document.addEventListener(
            "keydown",
            function (i) {
                i.metaKey || i.altKey || i.ctrlKey || (a(t.activeElement) && n(t.activeElement), (e = !0));
            },
            !0
        ),
            document.addEventListener("mousedown", o, !0),
            document.addEventListener("pointerdown", o, !0),
            document.addEventListener("touchstart", o, !0),
            document.addEventListener(
                "visibilitychange",
                function (t) {
                    "hidden" === document.visibilityState && (i && (e = !0), l());
                },
                !0
            ),
            l(),
            t.addEventListener(
                "focus",
                function (t) {
                    var i, s, o;
                    a(t.target) && (e || ((s = (i = t.target).type), ("INPUT" === (o = i.tagName) && r[s] && !i.readOnly) || ("TEXTAREA" === o && !i.readOnly) || i.isContentEditable)) && n(t.target);
                },
                !0
            ),
            t.addEventListener(
                "blur",
                function (t) {
                    var e;
                    a(t.target) &&
                        (t.target.classList.contains("focus-visible") || t.target.hasAttribute("data-focus-visible-added")) &&
                        ((i = !0),
                        window.clearTimeout(s),
                        (s = window.setTimeout(function () {
                            i = !1;
                        }, 100)),
                        (e = t.target).hasAttribute("data-focus-visible-added") && (e.classList.remove("focus-visible"), e.removeAttribute("data-focus-visible-added")));
                },
                !0
            ),
            t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && t.host
                ? t.host.setAttribute("data-js-focus-visible", "")
                : t.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""));
    }
    if ("undefined" != typeof window && "undefined" != typeof document) {
        var e;
        window.applyFocusVisiblePolyfill = t;
        try {
            e = new CustomEvent("focus-visible-polyfill-ready");
        } catch (t) {
            (e = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {});
        }
        window.dispatchEvent(e);
    }
    "undefined" != typeof document && t(document);
}),
    ((BB = BB || {}).base = function () {
        (this.__BB_DEBUG__ = !1), (this.__PROTECTED__ = []), (this._data = void 0);
    }),
    (BB.base.prototype.set_data = function (t) {
        return void 0 === this._data && (this._data = new BB.data()), "object" != typeof t || this._data.set_data(t), this;
    }),
    (BB.base.prototype.remove_data = function (t) {
        return this._data.remove_data(t), this;
    }),
    (BB.base.prototype.get_data = function (t) {
        var e = this.data();
        return void 0 !== e[t] && e[t];
    }),
    (BB.base.prototype.data = function (t) {
        return this._data.get_data(t);
    }),
    (BB.base.prototype.sanitize = function () {
        var t = this.data();
        return (t = this._escape_data(t)), this.set_data(t), this;
    }),
    (BB.base.prototype._escape_data = function (t) {
        if (void 0 === t) return "";
        if ("object" == typeof t && t.length) for (var e = 0, i = t.length; e < i; e++) t[e] = this._escape_data(t[e]);
        if ("object" == typeof t) for (var s in t) t[s] = this._escape_data(t[s]);
        return "string" == typeof t ? escape(t) : t;
    }),
    (BB.base.prototype._unescape_data = function (t) {
        if (void 0 === t) return "";
        if ("object" == typeof t) for (var e in t) t[e] = this._unescape_data(t[e]);
        return "string" == typeof t ? unescape(t) : t;
    }),
    (BB.base.prototype.ident = function () {
        var t = this.data();
        return "string" != typeof t.ident ? (this.error("Ident is not a String which is odd. " + t.ident), "") : t.ident;
    }),
    (BB.base.prototype.set_ident = function (t) {
        return "string" != typeof t && ((t = "" + t), this.error("Ident must be a string. Automatically converted to : " + t)), this.set_data({ ident: t }), this;
    }),
    (BB.base.prototype.error = function (t) {
        if (this.__BB_DEBUG__) throw Error(t);
        return this;
    }),
    (BB.base.prototype.is_empty_object = function (t) {
        if ("object" != typeof t) return this.error("Invalid argument, Object expected at BB.base.is_empty_object()"), !0;
        for (var e in t) if (t.hasOwnProperty(e)) return !1;
        return !0;
    }),
    (BB.base.prototype.extend = function (t, e) {
        var i,
            s = {};
        for (i in t) Object.prototype.hasOwnProperty.call(t, i) && (s[i] = t[i]);
        for (i in e) Object.prototype.hasOwnProperty.call(e, i) && (s[i] = e[i]);
        return s;
    }),
    ((BB = BB || {}).data = function (t) {
        if (((this.__PROTECTED__ = []), (this.__HIDDEN_DATA__ = !0), this.__HIDDEN_DATA__)) {
            var e = t || {};
            return {
                set_data: function (t) {
                    for (var i in t) e[i] = t[i];
                },
                get_data: function (t) {
                    return t ? (void 0 !== e[t] ? e[t] : "") : e;
                },
                remove_data: function (t) {
                    t || (e = {}), void 0 !== e[t] && ((e[t] = void 0), delete e[t]);
                },
            };
        }
        return (
            (this.__DATA = t || {}),
            (this.set_data = function (t) {
                if (this.__DATA) {
                    if (t) for (var e in t) this.__DATA[e] = t[e];
                } else this.__DATA = t || {};
            }),
            (this.get_data = function (t) {
                return t ? (void 0 !== this.__DATA[t] ? this.__DATA[t] : void 0) : this.__DATA;
            }),
            (this.remove_data = function (t) {
                t || (this.__DATA = {}), void 0 !== this.__DATA[t] && ((this.__DATA[t] = void 0), delete this.__DATA[t]);
            }),
            this
        );
    }),
    ((BB = BB || {}).gmap = BB.gmap || {}),
    (BB.gmap.controller = function (t, e) {
        return (this._MAP = void 0), (this.__CONTAINER = t), (this.__PLACES = {}), (this.__FOCUSED_ITEM = void 0), (this.__CLUSTERER = void 0), (this.xhrs = void 0), this.set_data(e), this;
    }),
    (BB.gmap.controller.prototype = new BB.base()),
    (BB.gmap.controller.prototype.map = function () {
        return this._MAP ? this._MAP : (this.error("No map associated to the current controller at BB.gmap.controller.map()"), !1);
    }),
    (BB.gmap.controller.prototype.loading_place = function (t) {
        var e = this.get_place(t);
        return e && e.set_data({ loaded: !1 }), this;
    }),
    (BB.gmap.controller.prototype.place_loaded = function (t) {
        return t ? !t.data("loaded") && (t.set_data({ loaded: !0 }), this.check_loaded_places() && this.data("tiles_loaded") && this._ready(), this) : this;
    }),
    (BB.gmap.controller.prototype.check_loaded_places = function () {
        var t = !0;
        return (
            this._loop_all(function (e) {
                t = !(!t || !e.data("loaded"));
            }),
            t
        );
    }),
    (BB.gmap.controller.prototype.ready = function (t) {
        return "function" == typeof t && this.set_data({ map_ready: t }), this;
    }),
    (BB.gmap.controller.prototype._ready = function () {
        var t = this.data();
        return this.data("loaded") || ("function" == typeof t.map_ready && t.map_ready(this), this.set_data({ loaded: !0 })), this;
    }),
    (BB.gmap.controller.prototype.container = function () {
        return this.__CONTAINER;
    }),
    (BB.gmap.controller.prototype.init = function () {
        if (this.map()) return this;
        var t = this.data("options");
        return (this._MAP = new google.maps.Map(this.container(), t)), "object" != typeof this.data("places") ? this.error("You haven't set any places yet") : this.add_places(this.data("places")), this.listeners(), this;
    }),
    (BB.gmap.controller.prototype.set_styles = function (t) {
        "object" != typeof t && this.error("Invalid type styles in BB.gmap.set_styles()" + t);
        var e = this.data("map");
        return (e.styles = t), this.data("map", e), this.map() && this.map().setOptions({ styles: t }), this;
    }),
    (BB.gmap.controller.prototype.add_by_url = function (t, e, i) {
        function s(t, e) {
            var i, s, r, a;
            for (s = (i = e.split(".")).length, r = 0, a = t; r < s; r++) {
                if (void 0 === a[i[r]]) return t;
                a = a[i[r]];
            }
            return a;
        }
        function r(t, e) {
            var r = {};
            for (var a in i) r[a] = s(t, i[a]);
            return r;
        }
        i = { id: "id", type: "type", coords: "coords", raw: "raw.mLatitude", date: "raw.mDate" };
        var a = new XMLHttpRequest();
        (a.onreadystatechange = function () {
            if (4 == this.readyState && 200 == this.status) {
                var t = JSON.parse(this.responseText);
                "string" == typeof e && "" != e && (t = s(t, e)), t.hasOwnProperty("map") && (t = t.map(r));
            }
        }),
            a.open("GET", t, !0),
            a.setRequestHeader("Content-type", "application/json; charset=utf-8"),
            a.send();
    }),
    (BB.gmap.controller.prototype.add_places = function (t) {
        if ("object" != typeof t) return this.error("Invalid places specified :" + t), this;
        for (var e in t) this.add_place(e, t[e]);
        return this;
    }),
    (BB.gmap.controller.prototype.add_place = function (t, e) {
        if (!e) return this.error("Missing parameter BB.gmap.controller.prototype.add_place ( ident, data ) : ( " + t + ", " + e + " )"), this;
        if ("string" != typeof e.type) return this.error('Missing parameter "type" in BB.gmap.controller.prototype.add_place'), this;
        switch (((e.ident = t), e.type)) {
            case "marker":
                this.set_place(t, new BB.gmap.marker(e, this));
                break;
            case "richmarker":
                this.set_place(t, new BB.gmap.richmarker(e, this));
                break;
            case "line":
                var i = this.default_styles();
                void 0 === e.styles && (e.styles = i), this.set_place(t, new BB.gmap.line(e, this));
                break;
            case "polygon":
                (i = this.default_styles()), void 0 === e.styles && (e.styles = i), this.set_place(t, new BB.gmap.polygon(e, this));
        }
        return this;
    }),
    (BB.gmap.controller.prototype.set_place = function (t, e) {
        return t && e ? (e.set_ident(t), (this.__PLACES[t] = e)) : this.error("Missing parameters in BB.gmap.controller.set_place( " + t + ", " + e + ")"), this;
    }),
    (BB.gmap.controller.prototype.get_places = function () {
        return this.__PLACES;
    }),
    (BB.gmap.controller.prototype.get_place = function (t) {
        var e = this.get_places();
        return void 0 === e[t] ? (this.error("Invalid ident at BB.gmap.controller.get_place( ident ) : " + t), !1) : e[t];
    }),
    (BB.gmap.controller.prototype.add_place_by_address = function (t, e, i) {
        var s = this;
        this.geocode_address(e, function (e) {
            (i.coords = e), s.add_place(t, i);
        });
    }),
    (BB.gmap.controller.prototype.geocode_address = function (t, e) {
        var i = Array();
        if ("undefined" == typeof google) return error;
        new google.maps.Geocoder().geocode({ address: t }, function (t, s) {
            if (s === google.maps.GeocoderStatus.OK) {
                var r = t[0].geometry.location.lat(),
                    a = t[0].geometry.location.lng();
                "function" == typeof e && e([r, a]);
            }
            return i;
        });
    }),
    (BB.gmap.controller.prototype.remove_focus = function (t) {
        var e = this.focused(t);
        if (this.data("multiple") && !t) {
            for (var i in e) {
                var s = e[i];
                (this.__FOCUSED_ITEM[i] = void 0), delete this.__FOCUSED_ITEM[i], s.blur(), "function" == typeof this.data("onblur") && this.data("onblur")(s, this);
            }
            return this;
        }
        return e && (this.data("multiple") ? ((this.__FOCUSED_ITEM[t] = void 0), delete this.__FOCUSED_ITEM[t]) : (this.__FOCUSED_ITEM = void 0), e.blur(), "function" == typeof this.data("onblur") && this.data("onblur")(e, this)), this;
    }),
    (BB.gmap.controller.prototype.set_focus = function (t) {
        if ((this.data("multiple") || (this.remove_focus(), (this.__FOCUSED_ITEM = t)), this.data("multiple"))) {
            if ((this.__FOCUSED_ITEM || (this.__FOCUSED_ITEM = {}), void 0 !== this.__FOCUSED_ITEM[t.data("ident")])) return this.remove_focus(t.data("ident")), this;
            this.__FOCUSED_ITEM[t.data("ident")] = t;
        }
        return "function" == typeof this.data("onfocus") && this.data("onfocus")(t, this), this;
    }),
    (BB.gmap.controller.prototype.focused = function (t) {
        if (this.__FOCUSED_ITEM) {
            if (this.data("multiple") && t) {
                if (void 0 === this.__FOCUSED_ITEM) return;
                return void 0 !== this.__FOCUSED_ITEM[t] ? this.__FOCUSED_ITEM[t] : void 0;
            }
            return t ? (this.__FOCUSED_ITEM.data("ident") === t ? this.__FOCUSED_ITEM : void 0) : this.__FOCUSED_ITEM;
        }
    }),
    (BB.gmap.controller.prototype.translate_coords = function (t) {
        if ("object" == typeof t && 2 === t.length) return new google.maps.LatLng(t[0], t[1]);
    }),
    (BB.gmap.controller.prototype.listeners = function () {
        var t = this;
        return (
            google.maps.event.clearListeners(this.map(), "click"),
            google.maps.event.addListener(this.map(), "click", function (e) {
                t.map_click(e);
            }),
            google.maps.event.addListenerOnce(this.map(), "tilesloaded", function (e) {
                t.set_data({ tiles_loaded: !0 }), t.check_loaded_places() && t._ready();
            }),
            google.maps.event.addDomListener(document, "keyup", function (e) {
                switch (e.keyCode ? e.keyCode : e.which) {
                    case 46:
                        t.focused() && t.focused().data("editable") && (t.focused().delete(), t.remove_focus());
                        break;
                    case 27:
                        t.focused() && t.remove_focus();
                }
            }),
            this
        );
    }),
    (BB.gmap.controller.prototype.create_new = function (t, e) {
        var i = this;
        if (((e = e || "new_object"), this.get_place(e))) return !1;
        var s = this.default_styles();
        switch (t) {
            case "polygon":
                var r = { type: "polygon", editable: !0, styles: s },
                    a = new BB.gmap.polygon(r, i);
                i.set_place(e, a), i.set_focus(a);
                break;
            case "line":
                r = { type: "line", editable: !0, styles: s };
                var n = new BB.gmap.line(r, i);
                i.set_place(e, n), i.set_focus(n);
                break;
            default:
                this.set_data({ marker_creation: e });
        }
    }),
    (BB.gmap.controller.prototype.on = function (t, e) {
        var i = {};
        (i["on" + t] = e), this.set_data(i);
    }),
    (BB.gmap.controller.prototype.map_click = function (t) {
        this.data("marker_creation") &&
            (this.add_place(this.data("marker_creation"), { coords: [t.latLng.lat(), t.latLng.lng()], draggable: !0, editable: !0, type: "marker" }),
            this.set_focus(this.get_place(this.data("marker_creation"))),
            "function" == typeof this.data("marker_creation_callback") && this.data("marker_creation_callback")(this.get_place(this.data("marker_creation"))));
        var e = this.focused();
        if (!e) return this;
        if (e instanceof BB.gmap.object) e.map_click(t);
        else for (var i in e) e[i] instanceof BB.gmap.object && e[i].map_click(t);
        return this.remove_focus(), this;
    }),
    (BB.gmap.controller.prototype._loop_all = function (t) {
        if ("function" != typeof t) return this;
        var e = this.get_places();
        for (var i in e) t(e[i]);
        return this;
    }),
    (BB.gmap.controller.prototype.filter = function (t) {
        this._loop_all(function (e) {
            if (!t) return e.show(), !1;
            var i = e.data("categories");
            if (!i) return e.hide(), !1;
            "string" == typeof i && (i = i.split(",")), i || e.hide();
            var s = !1;
            for (var r in i) t === i[r] && (s = !0);
            s ? e.show() : e.hide();
        });
    }),
    (BB.gmap.controller.prototype.fit_bounds = function () {
        var t = new google.maps.LatLngBounds(),
            e = 0;
        if (
            (this._loop_all(function (i) {
                var s,
                    r = i.get_position();
                if (!r) return !1;
                if (r instanceof google.maps.LatLng) t.extend(r);
                else
                    for (var a = 0; a < r.getLength(); a++) {
                        s = r.getAt(a);
                        for (var n = 0; n < s.getLength(); n++) t.extend(s.getAt(n));
                    }
                e++;
            }),
            0 < e && (this.map().fitBounds(t), this.data("max_fitbounds_zoom")))
        ) {
            var i = this.data("max_fitbounds_zoom");
            i < this.map().getZoom() && this.map().setZoom(i);
        }
        return this;
    }),
    (BB.gmap.controller.prototype.get_all_markers = function () {
        var t = [],
            e = this.get_places();
        for (var i in e) {
            var s = e[i];
            "marker" === s.data("type") && t.push(s.object());
        }
        return t;
    }),
    (BB.gmap.controller.prototype.activate_clusterer = function () {
        this.clusterer() && this.clusterer().clearMarkers();
        var t = this.get_all_markers(),
            e = this.data("clusterer_options") || {};
        return this.set_clusterer(new MarkerClusterer(this.map(), t, e)), this;
    }),
    (BB.gmap.controller.prototype.set_clusterer = function (t) {
        this.__CLUSTERER = t;
    }),
    (BB.gmap.controller.prototype.clusterer = function () {
        return this.__CLUSTERER;
    }),
    (BB.gmap.controller.prototype._delete = function (t) {
        return void 0 !== this.__PLACES[t] && (delete this.__PLACES[t], !0);
    }),
    (BB.gmap.controller.prototype.export = function () {
        var t = this.data();
        void 0 !== t.places && delete t.places, void 0 !== t.center && delete t.center;
        var e = this.map().getCenter();
        return (
            (t.map.center.x = e.lat()),
            (t.map.center.y = e.lng()),
            (t.map.zoom = this.map().getZoom()),
            (t.places = {}),
            this._loop_all(function (e) {
                t.places[e.ident()] = e.export();
            }),
            t
        );
    }),
    (BB.gmap.controller.prototype.get_map_image = function () {
        var t = this.map().getCenter(),
            e = "https://maps.googleapis.com/maps/api/staticmap?",
            i = [];
        return (
            i.push("center=" + t.lat() + "," + t.lng()),
            i.push("zoom=" + this.map().getZoom()),
            i.push("size=640x400"),
            this._loop_all(function (t) {
                if ("marker" == t.data("type")) {
                    if (!t.data("icon").src) return !1;
                    var e = new Image();
                    e.src = t.data("icon").src;
                    var s = t.data("icon").width + "x" + t.data("icon").height,
                        r = t.data("coords"),
                        a = "markers=size:" + s + "|icon:" + e.src + "|" + r[0] + "," + r[1];
                    i.push(a);
                }
                if ("polygon" === t.data("type")) {
                    var n = t.data("paths");
                    if (!n) return !1;
                    var o = [],
                        l = t.data("styles"),
                        h = (l.strokeColor, l.strokeWeight);
                    l.fillColor, o.push("color:black"), o.push("weight:" + h), o.push("fillcolor:white");
                    for (var d = 0, u = n.length; d < u; d++) o.push(n[d].join(","));
                    o.push(n[0].join(",")), i.push("path=" + o.join("|"));
                }
            }),
            e + i.join("&")
        );
    }),
    (BB.gmap.controller.prototype.reset = function () {
        return (
            this._loop_all(function (t) {
                t.hide(), t.delete();
            }),
            this.set_data({ places: void 0 }),
            this.remove_focus(),
            this
        );
    }),
    (BB.gmap.controller.prototype.default_styles = function () {
        return this.data("default_styles")
            ? this.data("default_styles")
            : {
                  strokeColor: "#000000",
                  strokeOpacity: 0.8,
                  strokeWeight: 2,
                  fillColor: "#FFFFFF",
                  fillOpacity: 0.35,
                  hover: { strokeColor: "#000000", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#FFFFFF", fillOpacity: 1 },
                  focused: { fillOpacity: 1 },
              };
    }),
    ((BB = BB || {}).gmap = BB.gmap || {}),
    (BB.gmap.statics = BB.gmap.statics || {}),
    (BB.gmap.infobox = function (t, e, i) {
        (this.__MAP = void 0),
            (this.__MARKER = i),
            (this.infoboxContent = t),
            (this.__ELEM = void 0),
            google.maps.OverlayView.call(this),
            (e.offsetY = e.offsetY || 0),
            (e.offsetX = e.offsetX || 0),
            (e.multiple = e.multiple || !1),
            (this.opts = e),
            void 0 === this.opts.placement && (this.opts.placement = "top center"),
            (this.__MAP = e.map),
            this.set_map(e.map);
    }),
    ((BB = BB || {}).gmap = BB.gmap || {}),
    (BB.gmap.object = function (t, e) {
        return (this._controller = e), (this._options = this.parse_options(t)), (this.__DELETED = !1), this.set_data(this._options), this.set_object(this.create_object()), this.init(), this.controller().loading_place(this.ident()), this;
    }),
    (BB.gmap.object.prototype = new BB.base()),
    (BB.gmap.object.prototype.set_object = function (t) {
        return (this._object = t), this;
    }),
    (BB.gmap.object.prototype.object = function () {
        return this._object;
    }),
    (BB.gmap.object.prototype.controller = function () {
        return this._controller;
    }),
    (BB.gmap.object.prototype.set_controller = function (t) {
        return (this._controller = t), this;
    }),
    (BB.gmap.object.prototype.set_map = function (t) {
        return this.object().setMap(t), this;
    }),
    (BB.gmap.object.prototype.convert_recursive_array_to_lat_lng = function (t) {
        if (2 === t.length && "object" != typeof t[0] && "object" != typeof t[1]) return { lat: parseFloat(t[0]), lng: parseFloat(t[1]) };
        for (var e in t) "object" == typeof t[e] && (t[e] = this.convert_recursive_array_to_lat_lng(t[e]));
        return t;
    }),
    (BB.gmap.object.prototype.map_click = function (t) {
        return this;
    }),
    (BB.gmap.object.prototype.show = function () {
        return this.set_map(this.controller().map()), this;
    }),
    (BB.gmap.object.prototype.hide = function () {
        return this.set_map(null), this;
    }),
    (BB.gmap.object.prototype.delete = function () {
        if (((this.__DELETED = !0), void 0 === this.object())) return this.error("No object defined at BB.gmap.object.delete()"), this;
        this.clear_listeners(), this.set_map(null);
        var t = this.data();
        return "function" == typeof t.ondelete && t.ondelete(this), this.controller()._delete(this.ident()), this;
    }),
    (BB.gmap.object.prototype.parse_options = function (t) {
        return t;
    }),
    (BB.gmap.object.prototype.create_object = function () {}),
    (BB.gmap.object.prototype.init = function () {
        return this;
    }),
    (BB.gmap.object.prototype.display = function () {
        return this;
    }),
    (BB.gmap.object.prototype.focus = function () {
        return this;
    }),
    (BB.gmap.object.prototype.blur = function () {
        return this;
    }),
    (BB.gmap.object.prototype.get_bounds = function () {
        return this;
    }),
    (BB.gmap.object.prototype.get_position = function () {
        return this;
    }),
    (BB.gmap.object.prototype.clear_listeners = function () {
        return this;
    }),
    (BB.gmap.object.prototype.export = function () {
        return this.data();
    }),
    ((BB = BB || {}).gmap = BB.gmap || {}),
    (BB.gmap.statics = BB.gmap.statics || {}),
    (BB.gmap.marker = function (t, e) {
        return BB.gmap.object.call(this, t, e), (this._image = void 0), (this._ready = !1), (this._image_loaded = !1), (this._marker_loaded = !1), (this.__INFOBOX = void 0), (this._listeners = !1), this;
    }),
    (BB.gmap.marker.prototype = Object.create(BB.gmap.object.prototype)),
    (BB.gmap.marker.prototype.create_object = function () {
        return new google.maps.Marker(this._options);
    }),
    (BB.gmap.marker.prototype.parse_options = function (t) {
        return delete t.type, (t.position = this.convert_recursive_array_to_lat_lng(t.position)), t;
    }),
    (BB.gmap.marker.prototype.init = function () {
        return this.listeners(), this.show(), this;
    }),
    (BB.gmap.marker.prototype.set_image = function (t, e, i) {
        if (("string" == typeof t && (t = { src: t }), "object" != typeof t)) return this;
        var s = new Image();
        return (
            (s.data = this),
            (s.onload = function () {
                "function" == typeof e && e();
            }),
            (s.onerror = function () {
                "function" == typeof i && i();
            }),
            (s.src = t.src),
            void 0 !== t.width && (s.width = t.width),
            void 0 !== t.height && (s.height = t.height),
            (this._image = s),
            this
        );
    }),
    (BB.gmap.marker.prototype.icon = function () {
        return this._image ? this._image : { width: 27, height: 43 };
    }),
    (BB.gmap.marker.prototype.marker_loaded = function () {
        var t = this.data();
        return "function" == typeof t.loaded_callback && t.loaded_callback(this), this.controller().data("use_clusterer") && this.controller().activate_clusterer(), this.controller().place_loaded(this), this;
    }),
    (BB.gmap.marker.prototype.set_marker = function (t) {
        return this._marker_loaded ? this.error("There is already a marker affected to this instanciation of a [BB.gmap.marker] ( " + this.ident() + " )") : ((this._marker_loaded = !0), this.set_object(t)), this;
    }),
    (BB.gmap.marker.prototype.listeners = function () {
        var t = this.object();
        (t.bbobject = this).data("draggable") && google.maps.event.addListener(t, "dragend", this.dragend),
            google.maps.event.addListener(this.object(), "click", this.onclick),
            google.maps.event.addListener(this.object(), "mouseover", this.mouse_over),
            google.maps.event.addListener(this.object(), "mouseout", this.mouse_out);
    }),
    (BB.gmap.marker.prototype.clear_listeners = function () {
        return (
            google.maps.event.clearListeners(this.object(), "mouseover"),
            google.maps.event.clearListeners(this.object(), "mouseout"),
            google.maps.event.clearListeners(this.object(), "click"),
            this.data("draggable") && google.maps.event.clearListeners(this.object(), "dragend"),
            this
        );
    }),
    (BB.gmap.marker.prototype.dragend = function (t) {
        var e = this.bbobject,
            i = e.data();
        "function" == typeof i.ondragend && i.ondragend(e, t), e.set_data({ coords: [t.latLng.lat(), t.latLng.lng()] }), e.focus();
    }),
    (BB.gmap.marker.prototype.onclick = function (t) {
        var e = this.bbobject;
        if (e.controller().focused(e.ident())) return e.blur();
        var i = e.data();
        "function" == typeof i.onclick ? i.onclick(t, e) : "string" == typeof i.onclick && "function" == typeof window[i.onclick] && window[i.onclick](e, t), e.focus();
    }),
    (BB.gmap.marker.prototype.mouse_over = function (t) {
        var e = this.bbobject,
            i = e.data();
        "function" == typeof i.onmouseover && i.onmouseover(e, t);
    }),
    (BB.gmap.marker.prototype.mouse_out = function (t) {
        var e = this.bbobject,
            i = e.data();
        "function" == typeof i.onmouseout && i.onmouseout(e, t);
    }),
    (BB.gmap.marker.prototype.focus = function () {
        this.check_infobox(!0), this.controller().set_focus(this);
        var t = this.data();
        t.icon_selected && ("object" == typeof t.icon_selected ? this.set_icon(t.icon_selected) : this.set_image(t.icon_selected));
    }),
    (BB.gmap.marker.prototype.blur = function () {
        if ((this.check_infobox(!1), this.controller().remove_focus(this.ident()), !this.controller().get_place(this.ident()))) return !1;
        var t = this.data();
        t.icon_selected && ("object" == typeof t.icon ? this.set_icon(t.icon) : this.set_image(t.icon));
    }),
    (BB.gmap.marker.prototype.check_infobox = function (t) {
        var e = this,
            i = this.data();
        if (i.infobox) {
            if (e.__INFOBOX) return e.__INFOBOX.map && !t ? e.__INFOBOX.set_map(null) : t && (e.__INFOBOX.set_position(e.object().getPosition()), e.__INFOBOX.set_map(e.controller().map())), this;
            BB.gmap.statics.infobox_loaded || (init_infoBox(), (BB.gmap.statics.infobox_loaded = !0));
            var s = {};
            i.infobox_options && (s = i.infobox_options),
                !s.offsetY && e.icon() && (s.offsetY = e.icon().height),
                !s.offsetX && e.icon() && (s.offsetX = e.icon().width / 2),
                (s.map = e.controller().map()),
                (s.position = e.get_position()),
                (e.__INFOBOX = new BB.gmap.infobox(i.infobox, s, e));
        }
    }),
    (BB.gmap.marker.prototype.get_bounds = function () {
        var t = new google.maps.LatLngBounds();
        return t.extend(this.object().getPosition()), t;
    }),
    (BB.gmap.marker.prototype.get_position = function () {
        if (this.object()) return this.object().getPosition();
    }),
    (BB.gmap.marker.prototype.set_position = function (t) {
        if (!t) return this;
        if (("string" == typeof t && (t = t.split(",")), !(t instanceof google.maps.LatLng))) {
            if (void 0 === t[0] || void 0 === t[1]) return this;
            t = new google.maps.LatLng(t[0], t[1]);
        }
        return this.object().setPosition(t), this.set_data({ coords: [t.lat(), t.lng()] }), this.__INFOBOX && this.__INFOBOX.set_position(t), this;
    }),
    ((BB = BB || {}).gmap = BB.gmap || {}),
    (BB.gmap.statics = BB.gmap.statics || {}),
    (BB.gmap.richmarker = function (t, e) {
        return BB.gmap.marker.call(this, t, e), (this._listeners = !1), this;
    }),
    (BB.gmap.richmarker.prototype = Object.create(BB.gmap.marker.prototype)),
    (BB.gmap.richmarker.prototype.init = function () {
        var t = this.data();
        return this.set_content(t.content), this.setup_content(), this.show(), this;
    }),
    (BB.gmap.richmarker.prototype.setup_content = function () {
        var t = this.data(),
            e = { map: this.controller().map() };
        "function" == typeof (e = this.extend(e, t)).html && (e.html = e.html(t)), "function" == typeof e.selected_html && (e.selected_html = e.selected_html(t)), (e.position = this.get_position());
        var i = customMarker(e);
        this.set_marker(i), this._listeners || (this.listeners(), (this._listeners = !0), this.controller().place_loaded(this));
    }),
    (BB.gmap.richmarker.prototype.set_content = function (t) {
        return (this._content = t), this;
    }),
    (BB.gmap.richmarker.prototype.content = function () {
        return this._content;
    }),
    (BB.gmap.richmarker.prototype.listeners = function () {
        var t = this.object();
        (t.bbobject = this).data("draggable") && google.maps.event.addListener(t, "dragend", this.dragend), google.maps.event.addListener(t, "click", this.onclick);
    }),
    (BB.gmap.richmarker.prototype.clear_listeners = function () {
        var t = this.object();
        return google.maps.event.clearListeners(t, "dragend"), google.maps.event.clearListeners(t, "click"), this;
    }),
    (BB.gmap.richmarker.prototype.focus = function () {
        if ((this.check_infobox(!0), this.controller().focused() && this.controller().focused().ident() === this.ident())) return this;
        if ((this.controller().set_focus(this), this.data("selected_html"))) {
            var t = this.data("selected_html");
            "function" == typeof t && (t = t(this.data())), this.object().setHtml(t);
        }
    }),
    (BB.gmap.richmarker.prototype.blur = function () {
        if ((this.check_infobox(!1), this.controller().remove_focus(this.ident()), !this.controller().get_place(this.ident()))) return !1;
        var t = this.data("html");
        "function" == typeof t && (t = t(this.data())), this.object().setHtml(t);
    }),
    (BB.gmap.richmarker.prototype.icon = function () {
        return { height: this.object().div.offsetHeight, width: this.object().div.offsetWidth };
    }),
    (BB.gmap.richmarker.prototype.hide = function () {
        return this.set_map(null), (this.object().dirty = !1), this;
    }),
    (customMarker = function (t) {
        return (
            "function" != typeof BB.gmap.customMarker &&
                ((BB.gmap.customMarker = function (t) {
                    (this.dirty = !1), (this.MAP = t.map), void 0 !== t.map && this.setMap(this.MAP), void 0 !== t.position && (this.latlng = t.position), void 0 !== t.html && (this.html = t.html);
                }),
                (BB.gmap.customMarker.prototype = new google.maps.OverlayView()),
                (BB.gmap.customMarker.prototype.draw = function () {
                    this.dirty || (this.updateHtml(), (this.dirty = !0)), this.setPositionFromDraw();
                }),
                (BB.gmap.customMarker.prototype.setPositionFromDraw = function () {
                    var t = this.div;
                    if (!t) return this;
                    if (!this.getProjection()) return this;
                    var e = this.getProjection().fromLatLngToDivPixel(this.latlng);
                    if (e) {
                        var i = t.offsetHeight,
                            s = t.offsetWidth;
                        (t.style.left = e.x - s / 2 + "px"), (t.style.top = e.y - i + "px");
                    }
                    return (this.div = t), this;
                }),
                (BB.gmap.customMarker.prototype.updateHtml = function () {
                    var t = this,
                        e = this.div;
                    if (!e) {
                        ((e = document.createElement("div")).style.position = "absolute"),
                            (e.style.cursor = "pointer"),
                            google.maps.event.addDomListener(e, "click", function (e) {
                                e.stopPropagation(), e.preventDefault(), google.maps.event.trigger(t, "click");
                            });
                        var i = this.getPanes();
                        i && i.overlayImage.appendChild(e);
                    }
                    (e.innerHTML = this.html), (this.div = e);
                }),
                (BB.gmap.customMarker.prototype.setHtml = function (t) {
                    (this.html = t), (this.dirty = !1), this.updateHtml(), this.setPositionFromDraw();
                }),
                (BB.gmap.customMarker.prototype.remove = function () {
                    this.div && (this.div.parentNode.removeChild(this.div), (this.div = null));
                }),
                (BB.gmap.customMarker.prototype.setPosition = function (t) {
                    (this.latlng = t), this.draw();
                }),
                (BB.gmap.customMarker.prototype.getPosition = function () {
                    return this.latlng;
                })),
            new BB.gmap.customMarker(t)
        );
    }),
    ((BB = BB || {}).gmap = BB.gmap || {}),
    (BB.gmap.line = function (t, e) {
        return BB.gmap.object.call(this, t, e), this;
    }),
    (BB.gmap.line.prototype = Object.create(BB.gmap.object.prototype)),
    (BB.gmap.line.prototype.create_object = function () {
        return new google.maps.Polyline(this._options);
    }),
    (BB.gmap.line.prototype.parse_options = function (t) {
        delete t.type, (t.path = this.convert_recursive_array_to_lat_lng(t.path)), void 0 === t.styles && (t.styles = this.controller().default_styles());
        var e = t.styles;
        return this.extend(t, e);
    }),
    (BB.gmap.line.prototype.init = function () {
        return this.listeners(), this.show(), this.controller().place_loaded(this), this;
    }),
    (BB.gmap.line.prototype.get_path = function () {
        return this.object().getPath();
    }),
    (BB.gmap.line.prototype.set_path = function (t) {
        return (t = this.convert_recursive_array_to_lat_lng(t)), this.object().setPath(t), this;
    }),
    (BB.gmap.line.prototype.set_styles = function (t) {
        return this.object().setOptions(t), this;
    }),
    (BB.gmap.line.prototype.get_styles = function () {
        return this._options.styles;
    }),
    (BB.gmap.line.prototype.add_point = function (t, e) {
        if ("object" != typeof t) return !1;
        if ((t instanceof google.maps.LatLng && (t = [t.lat(), t.lng()]), !(t instanceof google.maps.LatLng || (void 0 !== t[0] && void 0 !== t[1])))) return !1;
        var i = this,
            s = this.get_path();
        if ((void 0 === s && this.set_path([[t.lat(), t.lng()]]), (s = this.get_path()), "number" != typeof e && (e = s.length), s.push(t), this.set_path(s), this.data("editable"))) {
            var r = new BB.gmap.marker(
                {
                    coords: t,
                    draggable: !0,
                    icon: { path: google.maps.SymbolPath.CIRCLE, scale: 4 },
                    editable: !0,
                    ondragend: function (t, e) {
                        i.move_point(t.object().index, [e.latLng.lat(), e.latLng.lng()]);
                    },
                    ondelete: function (t) {
                        i.remove_point(t.object().index), i.focus(), i.get_path().length || i.delete();
                    },
                    index: e,
                },
                i.controller()
            );
            this.__MARKERS || (this.__MARKERS = []), (this.__MARKERS[e] = r);
        }
        return this;
    }),
    (BB.gmap.line.prototype.map_click = function (t) {}),
    (BB.gmap.line.prototype.listeners = function () {
        (this.object().bbobject = this).clear_listeners(),
            google.maps.event.addListener(this.object(), "mouseover", this.mouse_over),
            google.maps.event.addListener(this.object(), "mouseout", this.mouse_out),
            google.maps.event.addListener(this.object(), "click", this.click);
    }),
    (BB.gmap.line.prototype.clear_listeners = function () {
        return google.maps.event.clearListeners(this.object(), "mouseover"), google.maps.event.clearListeners(this.object(), "mouseout"), google.maps.event.clearListeners(this.object(), "click"), this;
    }),
    (BB.gmap.line.prototype.mouse_over = function (t) {
        var e = this.bbobject,
            i = e.data();
        "function" == typeof i.onmouseover && i.onmouseover(e, t);
        var s = e.get_data("styles");
        "object" == typeof s.hover && e.set_styles(s.hover);
    }),
    (BB.gmap.line.prototype.mouse_out = function (t) {
        var e = this.bbobject,
            i = e.data();
        "function" == typeof i.onmouseout && i.onmouseout(e, t);
        var s = e.get_data("styles");
        e.controller().focused(e.data("ident")) ? "object" == typeof s.focused && e.set_styles(s.focused) : e.set_styles(s);
    }),
    (BB.gmap.line.prototype.mouse_down = function (t) {}),
    (BB.gmap.line.prototype.mouse_up = function (t) {}),
    (BB.gmap.line.prototype.click = function (t) {
        var e = this.bbobject,
            i = e.data();
        e.focus(), "function" == typeof i.onclick ? i.onclick(e, t) : "string" == typeof i.onclick && "function" == typeof window[i.onclick] && window[i.onclick](e, t);
    }),
    (BB.gmap.line.prototype.focus = function () {
        if (this.__DELETED) return !1;
        if (!this.controller().focused(this.data("ident"))) {
            var t = this.get_data("styles");
            "object" == typeof t.focused && this.set_styles(t.focused);
        }
        return this.controller().set_focus(this), this;
    }),
    (BB.gmap.line.prototype.blur = function () {
        return !this.__DELETED && (this.set_styles(this.get_data("styles")), this);
    }),
    (BB.gmap.line.prototype.get_bounds = function () {
        for (var t = new google.maps.LatLngBounds(), e = this.object().getPaths(), i = 0; i < e.getLength(); i++) {
            e.getAt(i);
            for (var s = 0; s < e.getLength(); s++) t.extend(e.getAt(s));
        }
        return t;
    }),
    (BB.gmap.line.prototype.get_position = function () {
        var t = new google.maps.MVCArray();
        return t.push(this.object().getPath()), t;
    }),
    (BB.gmap.line.prototype.export = function () {
        var t = this.data();
        return void 0 !== t.styles.path && delete t.styles.path, this.data();
    }),
    (BB.gmap.line.prototype.delete = function () {
        if ("object" == typeof this.__MARKERS) {
            var t = 0,
                e = this.__MARKERS.length;
            if (e) for (; t < e; t++) this.remove_point(t);
        }
        return BB.gmap.object.prototype.delete.call(this);
    }),
    ((BB = BB || {}).gmap = BB.gmap || {}),
    (BB.gmap.polygon = function (t, e) {
        return BB.gmap.line.call(this, t, e), this;
    }),
    (BB.gmap.polygon.prototype = Object.create(BB.gmap.line.prototype)),
    (BB.gmap.polygon.prototype.create_object = function () {
        return new google.maps.Polygon(this._options);
    }),
    (BB.gmap.polygon.prototype.parse_options = function (t) {
        return delete t.type, (t.paths = this.convert_recursive_array_to_lat_lng(t.paths)), void 0 === t.styles ? Object.assign(t, this.controller().default_styles()) : Object.assign(t, t.styles);
    }),
    (BB.gmap.polygon.prototype.get_paths = function () {
        return this.__PATHS;
    }),
    (BB.gmap.polygon.prototype.set_paths = function (t) {
        (this.__PATHS = this.convert_recursive_array_to_lat_lng(t)), this.object().setPaths(this.__PATHS);
    }),
    (BB.gmap.polygon.prototype.get_position = function () {
        return this.object().getPaths();
    }),
    (function () {
        var t,
            e = null;
        function i(t) {
            return function (e) {
                this[t] = e;
            };
        }
        function s(t) {
            return function () {
                return this[t];
            };
        }
        function r(t, i, s) {
            this.extend(r, google.maps.OverlayView),
                (this.c = t),
                (this.a = []),
                (this.f = []),
                (this.ca = [53, 56, 66, 78, 90]),
                (this.j = []),
                (this.A = !1),
                (s = s || {}),
                (this.g = s.gridSize || 60),
                (this.l = s.minimumClusterSize || 2),
                (this.J = s.maxZoom || e),
                (this.j = s.styles || []),
                (this.X = s.imagePath || this.Q),
                (this.W = s.imageExtension || this.P),
                (this.O = !0),
                null != s.zoomOnClick && (this.O = s.zoomOnClick),
                (this.r = !1),
                null != s.averageCenter && (this.r = s.averageCenter),
                (function (t) {
                    if (!t.j.length) for (var e, i = 0; (e = t.ca[i]); i++) t.j.push({ url: t.X + (i + 1) + "." + t.W, height: e, width: e });
                })(this),
                this.setMap(t),
                (this.K = this.c.getZoom());
            var a = this;
            google.maps.event.addListener(this.c, "zoom_changed", function () {
                var t = a.c.getZoom();
                a.K != t && ((a.K = t), a.m());
            }),
                google.maps.event.addListener(this.c, "idle", function () {
                    a.i();
                }),
                i && i.length && this.C(i, !1);
        }
        function a(t, e) {
            (e.s = !1),
                e.draggable &&
                    google.maps.event.addListener(e, "dragend", function () {
                        (e.s = !1), t.L();
                    }),
                t.a.push(e);
        }
        function n(t, i) {
            var s = -1;
            if (t.a.indexOf) s = t.a.indexOf(i);
            else
                for (var r, a = 0; (r = t.a[a]); a++)
                    if (r == i) {
                        s = a;
                        break;
                    }
            return -1 != s && (i.setMap(e), t.a.splice(s, 1), !0);
        }
        function o(t) {
            if (t.A)
                for (var i, s = t.v(new google.maps.LatLngBounds(t.c.getBounds().getSouthWest(), t.c.getBounds().getNorthEast())), r = 0; (i = t.a[r]); r++)
                    if (!i.s && s.contains(i.getPosition())) {
                        for (var a = t, n = 4e4, o = e, h = 0, d = void 0; (d = a.f[h]); h++)
                            if ((f = d.getCenter())) {
                                var u = i.getPosition();
                                if (f && u) {
                                    var p = ((u.lat() - f.lat()) * Math.PI) / 180,
                                        c = ((u.lng() - f.lng()) * Math.PI) / 180,
                                        f = Math.sin(p / 2) * Math.sin(p / 2) + Math.cos((f.lat() * Math.PI) / 180) * Math.cos((u.lat() * Math.PI) / 180) * Math.sin(c / 2) * Math.sin(c / 2);
                                    f = 12742 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f));
                                } else f = 0;
                                f < n && ((n = f), (o = d));
                            }
                        o && o.F.contains(i.getPosition()) ? o.q(i) : ((d = new l(a)).q(i), a.f.push(d));
                    }
        }
        function l(t) {
            (this.k = t), (this.c = t.getMap()), (this.g = t.w()), (this.l = t.l), (this.r = t.r), (this.d = e), (this.a = []), (this.F = e), (this.n = new d(this, t.z(), t.w()));
        }
        function h(t) {
            t.F = t.k.v(new google.maps.LatLngBounds(t.d, t.d));
        }
        function d(t, i, s) {
            t.k.extend(d, google.maps.OverlayView), (this.j = i), (this.fa = s || 0), (this.u = t), (this.d = e), (this.c = t.getMap()), (this.B = this.b = e), (this.t = !1), this.setMap(this.c);
        }
        function u(t, e) {
            var i = t.getProjection().fromLatLngToDivPixel(e);
            return (i.x -= parseInt(t.p / 2, 10)), (i.y -= parseInt(t.h / 2, 10)), i;
        }
        function p(t) {
            t.b && (t.b.style.display = "none"), (t.t = !1);
        }
        function c(t, e) {
            var i = [];
            return (
                i.push("background-image:url(" + t.da + ");"),
                i.push("background-position:" + (t.D ? t.D : "0 0") + ";"),
                "object" == typeof t.e
                    ? ("number" == typeof t.e[0] && 0 < t.e[0] && t.e[0] < t.h ? i.push("height:" + (t.h - t.e[0]) + "px; padding-top:" + t.e[0] + "px;") : i.push("height:" + t.h + "px; line-height:" + t.h + "px;"),
                      "number" == typeof t.e[1] && 0 < t.e[1] && t.e[1] < t.p ? i.push("width:" + (t.p - t.e[1]) + "px; padding-left:" + t.e[1] + "px;") : i.push("width:" + t.p + "px; text-align:center;"))
                    : i.push("height:" + t.h + "px; line-height:" + t.h + "px; width:" + t.p + "px; text-align:center;"),
                i.push("cursor:pointer; top:" + e.y + "px; left:" + e.x + "px; color:" + (t.M ? t.M : "black") + "; position:absolute; font-size:" + (t.N ? t.N : 11) + "px; font-family:Arial,sans-serif; font-weight:bold"),
                i.join("")
            );
        }
        ((t = r.prototype).Q = "https://raw.githubusercontent.com/googlemaps/js-marker-clusterer/gh-pages/images/m"),
            (t.P = "png"),
            (t.extend = function (t, e) {
                return function (t) {
                    for (var e in t.prototype) this.prototype[e] = t.prototype[e];
                    return this;
                }.apply(t, [e]);
            }),
            (t.onAdd = function () {
                this.A || ((this.A = !0), o(this));
            }),
            (t.draw = function () {}),
            (t.S = function () {
                for (var t, e = this.o(), i = new google.maps.LatLngBounds(), s = 0; (t = e[s]); s++) i.extend(t.getPosition());
                this.c.fitBounds(i);
            }),
            (t.z = s("j")),
            (t.o = s("a")),
            (t.V = function () {
                return this.a.length;
            }),
            (t.ba = i("J")),
            (t.I = s("J")),
            (t.G = function (t, e) {
                for (var i = 0, s = t.length, r = s; 0 !== r; ) (r = parseInt(r / 10, 10)), i++;
                return { text: s, index: (i = Math.min(i, e)) };
            }),
            (t.$ = i("G")),
            (t.H = s("G")),
            (t.C = function (t, e) {
                for (var i, s = 0; (i = t[s]); s++) a(this, i);
                e || this.i();
            }),
            (t.q = function (t, e) {
                a(this, t), e || this.i();
            }),
            (t.Y = function (t, e) {
                var i = n(this, t);
                return !(e || !i || (this.m(), this.i(), 0));
            }),
            (t.Z = function (t, e) {
                for (var i, s = !1, r = 0; (i = t[r]); r++) (i = n(this, i)), (s = s || i);
                if (!e && s) return this.m(), this.i(), !0;
            }),
            (t.U = function () {
                return this.f.length;
            }),
            (t.getMap = s("c")),
            (t.setMap = i("c")),
            (t.w = s("g")),
            (t.aa = i("g")),
            (t.v = function (t) {
                var e = this.getProjection(),
                    i = new google.maps.LatLng(t.getNorthEast().lat(), t.getNorthEast().lng()),
                    s = new google.maps.LatLng(t.getSouthWest().lat(), t.getSouthWest().lng());
                return (
                    ((i = e.fromLatLngToDivPixel(i)).x += this.g),
                    (i.y -= this.g),
                    ((s = e.fromLatLngToDivPixel(s)).x -= this.g),
                    (s.y += this.g),
                    (i = e.fromDivPixelToLatLng(i)),
                    (e = e.fromDivPixelToLatLng(s)),
                    t.extend(i),
                    t.extend(e),
                    t
                );
            }),
            (t.R = function () {
                this.m(!0), (this.a = []);
            }),
            (t.m = function (t) {
                for (var i, s = 0; (i = this.f[s]); s++) i.remove();
                for (s = 0; (i = this.a[s]); s++) (i.s = !1), t && i.setMap(e);
                this.f = [];
            }),
            (t.L = function () {
                var t = this.f.slice();
                (this.f.length = 0),
                    this.m(),
                    this.i(),
                    window.setTimeout(function () {
                        for (var e, i = 0; (e = t[i]); i++) e.remove();
                    }, 0);
            }),
            (t.i = function () {
                o(this);
            }),
            ((t = l.prototype).q = function (t) {
                var i;
                t: if (this.a.indexOf) i = -1 != this.a.indexOf(t);
                else {
                    i = 0;
                    for (var s; (s = this.a[i]); i++)
                        if (s == t) {
                            i = !0;
                            break t;
                        }
                    i = !1;
                }
                if (i) return !1;
                if (
                    (this.d
                        ? this.r && ((s = this.a.length + 1), (i = (this.d.lat() * (s - 1) + t.getPosition().lat()) / s), (s = (this.d.lng() * (s - 1) + t.getPosition().lng()) / s), (this.d = new google.maps.LatLng(i, s)), h(this))
                        : ((this.d = t.getPosition()), h(this)),
                    (t.s = !0),
                    this.a.push(t),
                    (i = this.a.length) < this.l && t.getMap() != this.c && t.setMap(this.c),
                    i == this.l)
                )
                    for (s = 0; s < i; s++) this.a[s].setMap(e);
                if ((i >= this.l && t.setMap(e), (t = this.c.getZoom()), (i = this.k.I()) && i < t)) for (t = 0; (i = this.a[t]); t++) i.setMap(this.c);
                else
                    this.a.length < this.l
                        ? p(this.n)
                        : ((i = this.k.H()(this.a, this.k.z().length)),
                          this.n.setCenter(this.d),
                          ((t = this.n).B = i),
                          (t.ga = i.text),
                          (t.ea = i.index),
                          t.b && (t.b.innerHTML = i.text),
                          (i = Math.max(0, t.B.index - 1)),
                          (i = Math.min(t.j.length - 1, i)),
                          (i = t.j[i]),
                          (t.da = i.url),
                          (t.h = i.height),
                          (t.p = i.width),
                          (t.M = i.textColor),
                          (t.e = i.anchor),
                          (t.N = i.textSize),
                          (t.D = i.backgroundPosition),
                          this.n.show());
                return !0;
            }),
            (t.getBounds = function () {
                for (var t, e = new google.maps.LatLngBounds(this.d, this.d), i = this.o(), s = 0; (t = i[s]); s++) e.extend(t.getPosition());
                return e;
            }),
            (t.remove = function () {
                this.n.remove(), (this.a.length = 0), delete this.a;
            }),
            (t.T = function () {
                return this.a.length;
            }),
            (t.o = s("a")),
            (t.getCenter = s("d")),
            (t.getMap = s("c")),
            ((t = d.prototype).onAdd = function () {
                (this.b = document.createElement("DIV")), this.t && ((this.b.style.cssText = c(this, u(this, this.d))), (this.b.innerHTML = this.B.text)), this.getPanes().overlayMouseTarget.appendChild(this.b);
                var t = this;
                google.maps.event.addDomListener(this.b, "click", function () {
                    var e = t.u.k;
                    google.maps.event.trigger(e, "clusterclick", t.u), e.O && t.c.fitBounds(t.u.getBounds());
                });
            }),
            (t.draw = function () {
                if (this.t) {
                    var t = u(this, this.d);
                    (this.b.style.top = t.y + "px"), (this.b.style.left = t.x + "px");
                }
            }),
            (t.show = function () {
                this.b && ((this.b.style.cssText = c(this, u(this, this.d))), (this.b.style.display = "")), (this.t = !0);
            }),
            (t.remove = function () {
                this.setMap(e);
            }),
            (t.onRemove = function () {
                this.b && this.b.parentNode && (p(this), this.b.parentNode.removeChild(this.b), (this.b = e));
            }),
            (t.setCenter = i("d")),
            ((window.MarkerClusterer = r).prototype.addMarker = r.prototype.q),
            (r.prototype.addMarkers = r.prototype.C),
            (r.prototype.clearMarkers = r.prototype.R),
            (r.prototype.fitMapToMarkers = r.prototype.S),
            (r.prototype.getCalculator = r.prototype.H),
            (r.prototype.getGridSize = r.prototype.w),
            (r.prototype.getExtendedBounds = r.prototype.v),
            (r.prototype.getMap = r.prototype.getMap),
            (r.prototype.getMarkers = r.prototype.o),
            (r.prototype.getMaxZoom = r.prototype.I),
            (r.prototype.getStyles = r.prototype.z),
            (r.prototype.getTotalClusters = r.prototype.U),
            (r.prototype.getTotalMarkers = r.prototype.V),
            (r.prototype.redraw = r.prototype.i),
            (r.prototype.removeMarker = r.prototype.Y),
            (r.prototype.removeMarkers = r.prototype.Z),
            (r.prototype.resetViewport = r.prototype.m),
            (r.prototype.repaint = r.prototype.L),
            (r.prototype.setCalculator = r.prototype.$),
            (r.prototype.setGridSize = r.prototype.aa),
            (r.prototype.setMaxZoom = r.prototype.ba),
            (r.prototype.onAdd = r.prototype.onAdd),
            (r.prototype.draw = r.prototype.draw),
            (l.prototype.getCenter = l.prototype.getCenter),
            (l.prototype.getSize = l.prototype.T),
            (l.prototype.getMarkers = l.prototype.o),
            (d.prototype.onAdd = d.prototype.onAdd),
            (d.prototype.draw = d.prototype.draw),
            (d.prototype.onRemove = d.prototype.onRemove);
    })(),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(((t = t || self).window = t.window || {}));
    })(this, function (t) {
        "use strict";
        function e(t, e) {
            (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
        }
        function i(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }
        function s(t) {
            return "string" == typeof t;
        }
        function r(t) {
            return "function" == typeof t;
        }
        function a(t) {
            return "number" == typeof t;
        }
        function n(t) {
            return void 0 === t;
        }
        function o(t) {
            return "object" == typeof t;
        }
        function l(t) {
            return !1 !== t;
        }
        function h() {
            return "undefined" != typeof window;
        }
        function d(t) {
            return r(t) || s(t);
        }
        function u(t) {
            return (gt = he(t, te)) && oi;
        }
        function p(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
        }
        function c(t, e) {
            return !e && console.warn(t);
        }
        function f(t, e) {
            return (t && (te[t] = e) && gt && (gt[t] = e)) || te;
        }
        function m() {
            return 0;
        }
        function v(t) {
            var e,
                i,
                s = t[0];
            if ((o(s) || r(s) || (t = [t]), !(e = (s._gsap || {}).harness))) {
                for (i = oe.length; i-- && !oe[i].targetTest(s); );
                e = oe[i];
            }
            for (i = t.length; i--; ) (t[i] && (t[i]._gsap || (t[i]._gsap = new Oe(t[i], e)))) || t.splice(i, 1);
            return t;
        }
        function g(t) {
            return t._gsap || v(fe(t))[0]._gsap;
        }
        function y(t, e) {
            var i = t[e];
            return r(i) ? t[e]() : (n(i) && t.getAttribute(e)) || i;
        }
        function b(t, e) {
            return (t = t.split(",")).forEach(e) || t;
        }
        function _(t) {
            return Math.round(1e5 * t) / 1e5 || 0;
        }
        function w(t, e) {
            for (var i = e.length, s = 0; t.indexOf(e[s]) < 0 && ++s < i; );
            return s < i;
        }
        function x(t, e, i) {
            var s,
                r = a(t[1]),
                n = (r ? 2 : 1) + (e < 2 ? 0 : 1),
                o = t[n];
            if ((r && (o.duration = t[1]), (o.parent = i), e)) {
                for (s = o; i && !("immediateRender" in s); ) (s = i.vars.defaults || {}), (i = l(i.vars.inherit) && i.parent);
                (o.immediateRender = l(s.immediateRender)), e < 2 ? (o.runBackwards = 1) : (o.startAt = t[n - 1]);
            }
            return o;
        }
        function E() {
            var t,
                e,
                i = ie.length,
                s = ie.slice(0);
            for (se = {}, t = ie.length = 0; t < i; t++) (e = s[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
        }
        function T(t, e, i, s) {
            ie.length && E(), t.render(e, i, s), ie.length && E();
        }
        function M(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(Jt).length < 2 ? e : t;
        }
        function S(t) {
            return t;
        }
        function C(t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t;
        }
        function B(t, e) {
            for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i]);
        }
        function k(t, e) {
            for (var i in e) t[i] = o(e[i]) ? k(t[i] || (t[i] = {}), e[i]) : e[i];
            return t;
        }
        function P(t, e) {
            var i,
                s = {};
            for (i in t) i in e || (s[i] = t[i]);
            return s;
        }
        function O(t) {
            var e = t.parent || ct,
                i = t.keyframes ? B : C;
            if (l(t.inherit)) for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
            return t;
        }
        function L(t, e, i, s) {
            void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
            var r = e._prev,
                a = e._next;
            r ? (r._next = a) : t[i] === e && (t[i] = a), a ? (a._prev = r) : t[s] === e && (t[s] = r), (e._next = e._prev = e.parent = null);
        }
        function A(t, e) {
            !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t), (t._act = 0);
        }
        function z(t) {
            for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
            return t;
        }
        function I(t) {
            return t._repeat ? de(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
        }
        function F(t, e) {
            return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
        }
        function D(t) {
            return (t._end = _(t._start + (t._tDur / Math.abs(t._ts || t._rts || $t) || 0)));
        }
        function N(t, e) {
            var i;
            if (((e._time || (e._initted && !e._dur)) && ((i = F(t.rawTime(), e)), (!e._dur || pe(0, e.totalDuration(), i) - e._tTime > $t) && e.render(i, !0)), z(t)._dp && t._initted && t._time >= t._dur && t._ts)) {
                if (t._dur < t.duration()) for (i = t; i._dp; ) 0 <= i.rawTime() && i.totalTime(i._tTime), (i = i._dp);
                t._zTime = -$t;
            }
        }
        function $(t, e, i, s) {
            return (
                e.parent && A(e),
                (e._start = _(i + e._delay)),
                (e._end = _(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
                (function (t, e, i, s, r) {
                    void 0 === i && (i = "_first"), void 0 === s && (s = "_last");
                    var a,
                        n = t[s];
                    if (r) for (a = e[r]; n && n[r] > a; ) n = n._prev;
                    n ? ((e._next = n._next), (n._next = e)) : ((e._next = t[i]), (t[i] = e)), e._next ? (e._next._prev = e) : (t[s] = e), (e._prev = n), (e.parent = e._dp = t);
                })(t, e, "_first", "_last", t._sort ? "_start" : 0),
                (t._recent = e),
                s || N(t, e),
                t
            );
        }
        function j(t, e) {
            return (te.ScrollTrigger || p("scrollTrigger", e)) && te.ScrollTrigger.create(e, t);
        }
        function R(t, e, i, s) {
            return Ne(t, e), t._initted ? (!i && t._pt && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && bt !== we.frame ? (ie.push(t), (t._lazy = [e, s]), 1) : void 0) : 1;
        }
        function G(t, e, i) {
            var s = t._repeat,
                r = _(e) || 0;
            return (t._dur = r), (t._tDur = s ? (s < 0 ? 1e10 : _(r * (s + 1) + t._rDelay * s)) : r), t._time > r && ((t._time = r), (t._tTime = Math.min(t._tTime, t._tDur))), i || z(t.parent), t.parent && D(t), t;
        }
        function X(t) {
            return t instanceof ze ? z(t) : G(t, t._dur);
        }
        function H(t, e) {
            var i,
                r,
                a = t.labels,
                n = t._recent || ue,
                o = t.duration() >= Nt ? n.endTime(!1) : t._dur;
            return s(e) && (isNaN(e) || e in a)
                ? "<" === (i = e.charAt(0)) || ">" === i
                    ? ("<" === i ? n._start : n.endTime(0 <= n._repeat)) + (parseFloat(e.substr(1)) || 0)
                    : (i = e.indexOf("=")) < 0
                    ? (e in a || (a[e] = o), a[e])
                    : ((r = +(e.charAt(i - 1) + e.substr(i + 1))), 1 < i ? H(t, e.substr(0, i - 1)) + r : o + r)
                : null == e
                ? o
                : +e;
        }
        function Y(t, e) {
            return t || 0 === t ? e(t) : e;
        }
        function V(t) {
            return (t + "").substr((parseFloat(t) + "").length);
        }
        function W(t, e) {
            return t && o(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && o(t[0]))) && !t.nodeType && t !== ft;
        }
        function q(t) {
            return t.sort(function () {
                return 0.5 - Math.random();
            });
        }
        function U(t) {
            if (r(t)) return t;
            var e = o(t) ? t : { each: t },
                i = Ce(e.ease),
                a = e.from || 0,
                n = parseFloat(e.base) || 0,
                l = {},
                h = 0 < a && a < 1,
                d = isNaN(a) || h,
                u = e.axis,
                p = a,
                c = a;
            return (
                s(a) ? (p = c = { center: 0.5, edges: 0.5, end: 1 }[a] || 0) : !h && d && ((p = a[0]), (c = a[1])),
                function (t, s, r) {
                    var o,
                        h,
                        f,
                        m,
                        v,
                        g,
                        y,
                        b,
                        w,
                        x = (r || e).length,
                        E = l[x];
                    if (!E) {
                        if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, Nt])[1])) {
                            for (y = -Nt; y < (y = r[w++].getBoundingClientRect().left) && w < x; );
                            w--;
                        }
                        for (E = l[x] = [], o = d ? Math.min(w, x) * p - 0.5 : a % w, h = d ? (x * c) / w - 0.5 : (a / w) | 0, b = Nt, g = y = 0; g < x; g++)
                            (f = (g % w) - o), (m = h - ((g / w) | 0)), (E[g] = v = u ? Math.abs("y" === u ? m : f) : Xt(f * f + m * m)), y < v && (y = v), v < b && (b = v);
                        "random" === a && q(E),
                            (E.max = y - b),
                            (E.min = b),
                            (E.v = x = (parseFloat(e.amount) || parseFloat(e.each) * (x < w ? x - 1 : u ? ("y" === u ? x / w : w) : Math.max(w, x / w)) || 0) * ("edges" === a ? -1 : 1)),
                            (E.b = x < 0 ? n - x : n),
                            (E.u = V(e.amount || e.each) || 0),
                            (i = i && x < 0 ? Se(i) : i);
                    }
                    return (x = (E[t] - E.min) / E.max || 0), _(E.b + (i ? i(x) : x) * E.v) + E.u;
                }
            );
        }
        function K(t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function (i) {
                return Math.floor(Math.round(parseFloat(i) / t) * t * e) / e + (a(i) ? 0 : V(i));
            };
        }
        function Q(t, e) {
            var i,
                s,
                n = Vt(t);
            return (
                !n && o(t) && ((i = n = t.radius || Nt), t.values ? ((t = fe(t.values)), (s = !a(t[0])) && (i *= i)) : (t = K(t.increment))),
                Y(
                    e,
                    n
                        ? r(t)
                            ? function (e) {
                                  return (s = t(e)), Math.abs(s - e) <= i ? s : e;
                              }
                            : function (e) {
                                  for (var r, n, o = parseFloat(s ? e.x : e), l = parseFloat(s ? e.y : 0), h = Nt, d = 0, u = t.length; u--; )
                                      (r = s ? (r = t[u].x - o) * r + (n = t[u].y - l) * n : Math.abs(t[u] - o)) < h && ((h = r), (d = u));
                                  return (d = !i || h <= i ? t[d] : e), s || d === e || a(e) ? d : d + V(e);
                              }
                        : K(t)
                )
            );
        }
        function Z(t, e, i, s) {
            return Y(Vt(t) ? !e : !0 === i ? !!(i = 0) : !s, function () {
                return Vt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (s = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / i) * i * s) / s;
            });
        }
        function J(t, e, i) {
            return Y(i, function (i) {
                return t[~~e(i)];
            });
        }
        function tt(t) {
            for (var e, i, s, r, a = 0, n = ""; ~(e = t.indexOf("random(", a)); )
                (s = t.indexOf(")", e)), (r = "[" === t.charAt(e + 7)), (i = t.substr(e + 7, s - e - 7).match(r ? Jt : Wt)), (n += t.substr(a, e - a) + Z(r ? i : +i[0], +i[1], +i[2] || 1e-5)), (a = s + 1);
            return n + t.substr(a, t.length - a);
        }
        function et(t, e, i) {
            var s,
                r,
                a,
                n = t.labels,
                o = Nt;
            for (s in n) (r = n[s] - e) < 0 == !!i && r && o > (r = Math.abs(r)) && ((a = s), (o = r));
            return a;
        }
        function it(t) {
            return A(t), t.progress() < 1 && ve(t, "onInterrupt"), t;
        }
        function st(t, e, i) {
            return ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * ge + 0.5) | 0;
        }
        function rt(t, e, i) {
            var s,
                r,
                n,
                o,
                l,
                h,
                d,
                u,
                p,
                c,
                f = t ? (a(t) ? [t >> 16, (t >> 8) & ge, t & ge] : 0) : ye.black;
            if (!f) {
                if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ye[t])) f = ye[t];
                else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (s = t.charAt(1)) + s + (r = t.charAt(2)) + r + (n = t.charAt(3)) + n), (f = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & ge, t & ge]);
                else if ("hsl" === t.substr(0, 3))
                    if (((f = c = t.match(Wt)), e)) {
                        if (~t.indexOf("=")) return (f = t.match(qt)), i && f.length < 4 && (f[3] = 1), f;
                    } else
                        (o = (+f[0] % 360) / 360),
                            (l = f[1] / 100),
                            (s = 2 * (h = f[2] / 100) - (r = h <= 0.5 ? h * (l + 1) : h + l - h * l)),
                            3 < f.length && (f[3] *= 1),
                            (f[0] = st(o + 1 / 3, s, r)),
                            (f[1] = st(o, s, r)),
                            (f[2] = st(o - 1 / 3, s, r));
                else f = t.match(Wt) || ye.transparent;
                f = f.map(Number);
            }
            return (
                e &&
                    !c &&
                    ((s = f[0] / ge),
                    (r = f[1] / ge),
                    (n = f[2] / ge),
                    (h = ((d = Math.max(s, r, n)) + (u = Math.min(s, r, n))) / 2),
                    d === u ? (o = l = 0) : ((p = d - u), (l = 0.5 < h ? p / (2 - d - u) : p / (d + u)), (o = d === s ? (r - n) / p + (r < n ? 6 : 0) : d === r ? (n - s) / p + 2 : (s - r) / p + 4), (o *= 60)),
                    (f[0] = ~~(o + 0.5)),
                    (f[1] = ~~(100 * l + 0.5)),
                    (f[2] = ~~(100 * h + 0.5))),
                i && f.length < 4 && (f[3] = 1),
                f
            );
        }
        function at(t) {
            var e = [],
                i = [],
                s = -1;
            return (
                t.split(be).forEach(function (t) {
                    var r = t.match(Ut) || [];
                    e.push.apply(e, r), i.push((s += r.length + 1));
                }),
                (e.c = i),
                e
            );
        }
        function nt(t, e, i) {
            var s,
                r,
                a,
                n,
                o = "",
                l = (t + o).match(be),
                h = e ? "hsla(" : "rgba(",
                d = 0;
            if (!l) return t;
            if (
                ((l = l.map(function (t) {
                    return (t = rt(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
                })),
                i && ((a = at(t)), (s = i.c).join(o) !== a.c.join(o)))
            )
                for (n = (r = t.replace(be, "1").split(Ut)).length - 1; d < n; d++) o += r[d] + (~s.indexOf(d) ? l.shift() || h + "0,0,0,0)" : (a.length ? a : l.length ? l : i).shift());
            if (!r) for (n = (r = t.split(be)).length - 1; d < n; d++) o += r[d] + l[d];
            return o + r[n];
        }
        function ot(t) {
            var e,
                i = t.join(" ");
            if (((be.lastIndex = 0), be.test(i))) return (e = _e.test(i)), (t[1] = nt(t[1], e)), (t[0] = nt(t[0], e, at(t[1]))), !0;
        }
        function lt(t, e) {
            for (var i, s = t._first; s; )
                s instanceof ze ? lt(s, e) : !s.vars.yoyoEase || (s._yoyo && s._repeat) || s._yoyo === e || (s.timeline ? lt(s.timeline, e) : ((i = s._ease), (s._ease = s._yEase), (s._yEase = i), (s._yoyo = e))), (s = s._next);
        }
        function ht(t, e, i, s) {
            void 0 === i &&
                (i = function (t) {
                    return 1 - e(1 - t);
                }),
                void 0 === s &&
                    (s = function (t) {
                        return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                    });
            var r,
                a = { easeIn: e, easeOut: i, easeInOut: s };
            return (
                b(t, function (t) {
                    for (var e in ((Ee[t] = te[t] = a), (Ee[(r = t.toLowerCase())] = i), a)) Ee[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ee[t + "." + e] = a[e];
                }),
                a
            );
        }
        function dt(t) {
            return function (e) {
                return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
            };
        }
        function ut(t, e, i) {
            function s(t) {
                return 1 === t ? 1 : r * Math.pow(2, -10 * t) * Yt((t - n) * a) + 1;
            }
            var r = 1 <= e ? e : 1,
                a = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
                n = (a / jt) * (Math.asin(1 / r) || 0),
                o =
                    "out" === t
                        ? s
                        : "in" === t
                        ? function (t) {
                              return 1 - s(1 - t);
                          }
                        : dt(s);
            return (
                (a = jt / a),
                (o.config = function (e, i) {
                    return ut(t, e, i);
                }),
                o
            );
        }
        function pt(t, e) {
            function i(t) {
                return t ? --t * t * ((e + 1) * t + e) + 1 : 0;
            }
            void 0 === e && (e = 1.70158);
            var s =
                "out" === t
                    ? i
                    : "in" === t
                    ? function (t) {
                          return 1 - i(1 - t);
                      }
                    : dt(i);
            return (
                (s.config = function (e) {
                    return pt(t, e);
                }),
                s
            );
        }
        var ct,
            ft,
            mt,
            vt,
            gt,
            yt,
            bt,
            _t,
            wt,
            xt,
            Et,
            Tt,
            Mt,
            St,
            Ct,
            Bt,
            kt,
            Pt,
            Ot,
            Lt,
            At,
            zt,
            It,
            Ft = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
            Dt = { duration: 0.5, overwrite: !1, delay: 0 },
            Nt = 1e8,
            $t = 1 / Nt,
            jt = 2 * Math.PI,
            Rt = jt / 4,
            Gt = 0,
            Xt = Math.sqrt,
            Ht = Math.cos,
            Yt = Math.sin,
            Vt = Array.isArray,
            Wt = /(?:-?\.?\d|\.)+/gi,
            qt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
            Ut = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
            Kt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
            Qt = /\(([^()]+)\)/i,
            Zt = /[+-]=-?[\.\d]+/,
            Jt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
            te = {},
            ee = {},
            ie = [],
            se = {},
            re = {},
            ae = {},
            ne = 30,
            oe = [],
            le = "",
            he = function (t, e) {
                for (var i in e) t[i] = e[i];
                return t;
            },
            de = function (t, e) {
                return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
            },
            ue = { _start: 0, endTime: m },
            pe = function (t, e, i) {
                return i < t ? t : e < i ? e : i;
            },
            ce = [].slice,
            fe = function (t, e) {
                return !s(t) || e || (!mt && xe())
                    ? Vt(t)
                        ? (function (t, e, i) {
                              return (
                                  void 0 === i && (i = []),
                                  t.forEach(function (t) {
                                      return (s(t) && !e) || W(t, 1) ? i.push.apply(i, fe(t)) : i.push(t);
                                  }) || i
                              );
                          })(t, e)
                        : W(t)
                        ? ce.call(t, 0)
                        : t
                        ? [t]
                        : []
                    : ce.call(vt.querySelectorAll(t), 0);
            },
            me = function (t, e, i, s, r) {
                var a = e - t,
                    n = s - i;
                return Y(r, function (e) {
                    return i + (((e - t) / a) * n || 0);
                });
            },
            ve = function (t, e, i) {
                var s,
                    r,
                    a = t.vars,
                    n = a[e];
                if (n) return (s = a[e + "Params"]), (r = a.callbackScope || t), i && ie.length && E(), s ? n.apply(r, s) : n.call(r);
            },
            ge = 255,
            ye = {
                aqua: [0, ge, ge],
                lime: [0, ge, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, ge],
                navy: [0, 0, 128],
                white: [ge, ge, ge],
                olive: [128, 128, 0],
                yellow: [ge, ge, 0],
                orange: [ge, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [ge, 0, 0],
                pink: [ge, 192, 203],
                cyan: [0, ge, ge],
                transparent: [ge, ge, ge, 0],
            },
            be = (function () {
                var t,
                    e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (t in ye) e += "|" + t + "\\b";
                return new RegExp(e + ")", "gi");
            })(),
            _e = /hsl[a]?\(/,
            we =
                ((St = Date.now),
                (Ct = 500),
                (Bt = 33),
                (kt = St()),
                (Pt = kt),
                (Lt = Ot = 1 / 240),
                (Mt = {
                    time: 0,
                    frame: 0,
                    tick: function () {
                        Be(!0);
                    },
                    wake: function () {
                        yt &&
                            (!mt &&
                                h() &&
                                ((ft = mt = window),
                                (vt = ft.document || {}),
                                (te.gsap = oi),
                                (ft.gsapVersions || (ft.gsapVersions = [])).push(oi.version),
                                u(gt || ft.GreenSockGlobals || (!ft.gsap && ft) || {}),
                                (Tt = ft.requestAnimationFrame)),
                            xt && Mt.sleep(),
                            (Et =
                                Tt ||
                                function (t) {
                                    return setTimeout(t, (1e3 * (Lt - Mt.time) + 1) | 0);
                                }),
                            (wt = 1),
                            Be(2));
                    },
                    sleep: function () {
                        (Tt ? ft.cancelAnimationFrame : clearTimeout)(xt), (wt = 0), (Et = m);
                    },
                    lagSmoothing: function (t, e) {
                        (Ct = t || 1e8), (Bt = Math.min(e, Ct, 0));
                    },
                    fps: function (t) {
                        (Ot = 1 / (t || 240)), (Lt = Mt.time + Ot);
                    },
                    add: function (t) {
                        At.indexOf(t) < 0 && At.push(t), xe();
                    },
                    remove: function (t) {
                        var e;
                        ~(e = At.indexOf(t)) && At.splice(e, 1);
                    },
                    _listeners: (At = []),
                })),
            xe = function () {
                return !wt && we.wake();
            },
            Ee = {},
            Te = /^[\d.\-M][\d.\-,\s]/,
            Me = /["']/g,
            Se = function (t) {
                return function (e) {
                    return 1 - t(1 - e);
                };
            },
            Ce = function (t, e) {
                return (
                    (t &&
                        (r(t)
                            ? t
                            : Ee[t] ||
                              (function (t) {
                                  var e = (t + "").split("("),
                                      i = Ee[e[0]];
                                  return i && 1 < e.length && i.config
                                      ? i.config.apply(
                                            null,
                                            ~t.indexOf("{")
                                                ? [
                                                      (function (t) {
                                                          for (var e, i, s, r = {}, a = t.substr(1, t.length - 3).split(":"), n = a[0], o = 1, l = a.length; o < l; o++)
                                                              (i = a[o]), (e = o !== l - 1 ? i.lastIndexOf(",") : i.length), (s = i.substr(0, e)), (r[n] = isNaN(s) ? s.replace(Me, "").trim() : +s), (n = i.substr(e + 1).trim());
                                                          return r;
                                                      })(e[1]),
                                                  ]
                                                : Qt.exec(t)[1].split(",").map(M)
                                        )
                                      : Ee._CE && Te.test(t)
                                      ? Ee._CE("", t)
                                      : i;
                              })(t))) ||
                    e
                );
            };
        function Be(t) {
            var e,
                i,
                s = St() - Pt,
                r = !0 === t;
            Ct < s && (kt += s - Bt),
                (Pt += s),
                (Mt.time = (Pt - kt) / 1e3),
                (0 < (e = Mt.time - Lt) || r) && (Mt.frame++, (Lt += e + (Ot <= e ? 0.004 : Ot - e)), (i = 1)),
                r || (xt = Et(Be)),
                i &&
                    At.forEach(function (e) {
                        return e(Mt.time, s, Mt.frame, t);
                    });
        }
        function ke(t) {
            return t < It ? zt * t * t : t < 0.7272727272727273 ? zt * Math.pow(t - 1.5 / 2.75, 2) + 0.75 : t < 0.9090909090909092 ? zt * (t -= 2.25 / 2.75) * t + 0.9375 : zt * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
        }
        b("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
            var i = e < 5 ? e + 1 : e;
            ht(
                t + ",Power" + (i - 1),
                e
                    ? function (t) {
                          return Math.pow(t, i);
                      }
                    : function (t) {
                          return t;
                      },
                function (t) {
                    return 1 - Math.pow(1 - t, i);
                },
                function (t) {
                    return t < 0.5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2;
                }
            );
        }),
            (Ee.Linear.easeNone = Ee.none = Ee.Linear.easeIn),
            ht("Elastic", ut("in"), ut("out"), ut()),
            (zt = 7.5625),
            (It = 1 / 2.75),
            ht(
                "Bounce",
                function (t) {
                    return 1 - ke(1 - t);
                },
                ke
            ),
            ht("Expo", function (t) {
                return t ? Math.pow(2, 10 * (t - 1)) : 0;
            }),
            ht("Circ", function (t) {
                return -(Xt(1 - t * t) - 1);
            }),
            ht("Sine", function (t) {
                return 1 === t ? 1 : 1 - Ht(t * Rt);
            }),
            ht("Back", pt("in"), pt("out"), pt()),
            (Ee.SteppedEase = Ee.steps = te.SteppedEase = {
                config: function (t, e) {
                    void 0 === t && (t = 1);
                    var i = 1 / t,
                        s = t + (e ? 0 : 1),
                        r = e ? 1 : 0;
                    return function (t) {
                        return (((s * pe(0, 0.99999999, t)) | 0) + r) * i;
                    };
                },
            }),
            (Dt.ease = Ee["quad.out"]),
            b("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
                return (le += t + "," + t + "Params,");
            });
        var Pe,
            Oe = function (t, e) {
                (this.id = Gt++), ((t._gsap = this).target = t), (this.harness = e), (this.get = e ? e.get : y), (this.set = e ? e.getSetter : qe);
            },
            Le =
                (((Pe = Ae.prototype).delay = function (t) {
                    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), (this._delay = t), this) : this._delay;
                }),
                (Pe.duration = function (t) {
                    return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
                }),
                (Pe.totalDuration = function (t) {
                    return arguments.length ? ((this._dirty = 0), G(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
                }),
                (Pe.totalTime = function (t, e) {
                    if ((xe(), !arguments.length)) return this._tTime;
                    var i = this.parent || this._dp;
                    if (i && i.smoothChildTiming && this._ts) {
                        for (this._start = _(i._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), D(this), i._dirty || z(i); i.parent; )
                            i.parent._time !== i._start + (0 <= i._ts ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), (i = i.parent);
                        !this.parent && this._dp.autoRemoveChildren && ((0 < this._ts && t < this._tDur) || (this._ts < 0 && 0 < t) || (!this._tDur && !t)) && $(this._dp, this, this._start - this._delay);
                    }
                    return (this._tTime !== t || (!this._dur && !e) || (this._initted && Math.abs(this._zTime) === $t) || (!t && !this._initted)) && (this._ts || (this._pTime = t), T(this, t, e)), this;
                }),
                (Pe.time = function (t, e) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + I(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
                }),
                (Pe.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
                }),
                (Pe.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + I(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
                }),
                (Pe.iteration = function (t, e) {
                    var i = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? de(this._tTime, i) + 1 : 1;
                }),
                (Pe.timeScale = function (t) {
                    if (!arguments.length) return this._rts === -$t ? 0 : this._rts;
                    if (this._rts === t) return this;
                    var e = this.parent && this._ts ? F(this.parent._time, this) : this._tTime;
                    return (
                        (this._rts = +t || 0),
                        (this._ts = this._ps || t === -$t ? 0 : this._rts),
                        (function (t) {
                            for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
                            return t;
                        })(this.totalTime(pe(0, this._tDur, e), !0))
                    );
                }),
                (Pe.paused = function (t) {
                    return arguments.length
                        ? (this._ps !== t &&
                              ((this._ps = t)
                                  ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                                  : (xe(),
                                    (this._ts = this._rts),
                                    this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= $t) && Math.abs(this._zTime) !== $t))),
                          this)
                        : this._ps;
                }),
                (Pe.startTime = function (t) {
                    if (arguments.length) {
                        this._start = t;
                        var e = this.parent || this._dp;
                        return !e || (!e._sort && this.parent) || $(e, this, t - this._delay), this;
                    }
                    return this._start;
                }),
                (Pe.endTime = function (t) {
                    return this._start + (l(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
                }),
                (Pe.rawTime = function (t) {
                    var e = this.parent || this._dp;
                    return e ? (t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1)) ? this._tTime % (this._dur + this._rDelay) : this._ts ? F(e.rawTime(t), this) : this._tTime) : this._tTime;
                }),
                (Pe.repeat = function (t) {
                    return arguments.length ? ((this._repeat = t), X(this)) : this._repeat;
                }),
                (Pe.repeatDelay = function (t) {
                    return arguments.length ? ((this._rDelay = t), X(this)) : this._rDelay;
                }),
                (Pe.yoyo = function (t) {
                    return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
                }),
                (Pe.seek = function (t, e) {
                    return this.totalTime(H(this, t), l(e));
                }),
                (Pe.restart = function (t, e) {
                    return this.play().totalTime(t ? -this._delay : 0, l(e));
                }),
                (Pe.play = function (t, e) {
                    return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
                }),
                (Pe.reverse = function (t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
                }),
                (Pe.pause = function (t, e) {
                    return null != t && this.seek(t, e), this.paused(!0);
                }),
                (Pe.resume = function () {
                    return this.paused(!1);
                }),
                (Pe.reversed = function (t) {
                    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -$t : 0)), this) : this._rts < 0;
                }),
                (Pe.invalidate = function () {
                    return (this._initted = 0), (this._zTime = -$t), this;
                }),
                (Pe.isActive = function (t) {
                    var e,
                        i = this.parent || this._dp,
                        s = this._start;
                    return !(i && !(this._ts && (this._initted || !t) && i.isActive(t) && (e = i.rawTime(!0)) >= s && e < this.endTime(!0) - $t));
                }),
                (Pe.eventCallback = function (t, e, i) {
                    var s = this.vars;
                    return 1 < arguments.length ? (e ? ((s[t] = e), i && (s[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete s[t], this) : s[t];
                }),
                (Pe.then = function (t) {
                    var e = this;
                    return new Promise(function (i) {
                        function s() {
                            var t = e.then;
                            (e.then = null), r(a) && (a = a(e)) && (a.then || a === e) && (e.then = t), i(a), (e.then = t);
                        }
                        var a = r(t) ? t : S;
                        (e._initted && 1 === e.totalProgress() && 0 <= e._ts) || (!e._tTime && e._ts < 0) ? s() : (e._prom = s);
                    });
                }),
                (Pe.kill = function () {
                    it(this);
                }),
                Ae);
        function Ae(t, e) {
            var i = t.parent || ct;
            (this.vars = t),
                (this._delay = +t.delay || 0),
                (this._repeat = t.repeat || 0) && ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
                (this._ts = 1),
                G(this, +t.duration, 1),
                (this.data = t.data),
                wt || we.wake(),
                i && $(i, this, e || 0 === e ? e : i._time, 1),
                t.reversed && this.reverse(),
                t.paused && this.paused(!0);
        }
        C(Le.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: !1, parent: null, _initted: !1, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -$t, _prom: 0, _ps: !1, _rts: 1 });
        var ze = (function (t) {
            function n(e, s) {
                var r;
                return (
                    void 0 === e && (e = {}),
                    ((r = t.call(this, e, s) || this).labels = {}),
                    (r.smoothChildTiming = !!e.smoothChildTiming),
                    (r.autoRemoveChildren = !!e.autoRemoveChildren),
                    (r._sort = l(e.sortChildren)),
                    r.parent && N(r.parent, i(r)),
                    e.scrollTrigger && j(i(r), e.scrollTrigger),
                    r
                );
            }
            e(n, t);
            var o = n.prototype;
            return (
                (o.to = function (t, e, i, s) {
                    return new Ge(t, x(arguments, 0, this), H(this, a(e) ? s : i)), this;
                }),
                (o.from = function (t, e, i, s) {
                    return new Ge(t, x(arguments, 1, this), H(this, a(e) ? s : i)), this;
                }),
                (o.fromTo = function (t, e, i, s, r) {
                    return new Ge(t, x(arguments, 2, this), H(this, a(e) ? r : s)), this;
                }),
                (o.set = function (t, e, i) {
                    return (e.duration = 0), (e.parent = this), O(e).repeatDelay || (e.repeat = 0), (e.immediateRender = !!e.immediateRender), new Ge(t, e, H(this, i), 1), this;
                }),
                (o.call = function (t, e, i) {
                    return $(this, Ge.delayedCall(0, t, e), H(this, i));
                }),
                (o.staggerTo = function (t, e, i, s, r, a, n) {
                    return (i.duration = e), (i.stagger = i.stagger || s), (i.onComplete = a), (i.onCompleteParams = n), (i.parent = this), new Ge(t, i, H(this, r)), this;
                }),
                (o.staggerFrom = function (t, e, i, s, r, a, n) {
                    return (i.runBackwards = 1), (O(i).immediateRender = l(i.immediateRender)), this.staggerTo(t, e, i, s, r, a, n);
                }),
                (o.staggerFromTo = function (t, e, i, s, r, a, n, o) {
                    return (s.startAt = i), (O(s).immediateRender = l(s.immediateRender)), this.staggerTo(t, e, s, r, a, n, o);
                }),
                (o.render = function (t, e, i) {
                    var s,
                        r,
                        a,
                        n,
                        o,
                        l,
                        h,
                        d,
                        u,
                        p,
                        c,
                        f,
                        m = this._time,
                        v = this._dirty ? this.totalDuration() : this._tDur,
                        g = this._dur,
                        y = this !== ct && v - $t < t && 0 <= t ? v : t < $t ? 0 : t,
                        b = this._zTime < 0 != t < 0 && (this._initted || !g);
                    if (y !== this._tTime || i || b) {
                        if (
                            (m !== this._time && g && ((y += this._time - m), (t += this._time - m)),
                            (s = y),
                            (u = this._start),
                            (l = !(d = this._ts)),
                            b && (g || (m = this._zTime), (!t && e) || (this._zTime = t)),
                            this._repeat &&
                                ((c = this._yoyo),
                                (g < (s = _(y % (o = g + this._rDelay))) || v === y) && (s = g),
                                (n = ~~(y / o)) && n === y / o && ((s = g), n--),
                                (p = de(this._tTime, o)),
                                !m && this._tTime && p !== n && (p = n),
                                c && 1 & n && ((s = g - s), (f = 1)),
                                n !== p && !this._lock))
                        ) {
                            var w = c && 1 & p,
                                x = w === (c && 1 & n);
                            if (
                                (n < p && (w = !w),
                                (m = w ? 0 : g),
                                (this._lock = 1),
                                (this.render(m || (f ? 0 : _(n * o)), e, !g)._lock = 0),
                                !e && this.parent && ve(this, "onRepeat"),
                                this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
                                m !== this._time || l != !this._ts)
                            )
                                return this;
                            if ((x && ((this._lock = 2), (m = w ? g + 1e-4 : -1e-4), this.render(m, !0), this.vars.repeatRefresh && !f && this.invalidate()), (this._lock = 0), !this._ts && !l)) return this;
                            lt(this, f);
                        }
                        if (
                            (this._hasPause &&
                                !this._forcing &&
                                this._lock < 2 &&
                                (h = (function (t, e, i) {
                                    var s;
                                    if (e < i)
                                        for (s = t._first; s && s._start <= i; ) {
                                            if (!s._dur && "isPause" === s.data && s._start > e) return s;
                                            s = s._next;
                                        }
                                    else
                                        for (s = t._last; s && s._start >= i; ) {
                                            if (!s._dur && "isPause" === s.data && s._start < e) return s;
                                            s = s._prev;
                                        }
                                })(this, _(m), _(s))) &&
                                (y -= s - (s = h._start)),
                            (this._tTime = y),
                            (this._time = s),
                            (this._act = !d),
                            this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t)),
                            m || !s || e || ve(this, "onStart"),
                            m <= s && 0 <= t)
                        )
                            for (r = this._first; r; ) {
                                if (((a = r._next), (r._act || s >= r._start) && r._ts && h !== r)) {
                                    if (r.parent !== this) return this.render(t, e, i);
                                    if ((r.render(0 < r._ts ? (s - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (s - r._start) * r._ts, e, i), s !== this._time || (!this._ts && !l))) {
                                        (h = 0), a && (y += this._zTime = -$t);
                                        break;
                                    }
                                }
                                r = a;
                            }
                        else {
                            r = this._last;
                            for (var E = t < 0 ? t : s; r; ) {
                                if (((a = r._prev), (r._act || E <= r._end) && r._ts && h !== r)) {
                                    if (r.parent !== this) return this.render(t, e, i);
                                    if ((r.render(0 < r._ts ? (E - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (E - r._start) * r._ts, e, i), s !== this._time || (!this._ts && !l))) {
                                        (h = 0), a && (y += this._zTime = E ? -$t : $t);
                                        break;
                                    }
                                }
                                r = a;
                            }
                        }
                        if (h && !e && (this.pause(), (h.render(m <= s ? 0 : -$t)._zTime = m <= s ? 1 : -1), this._ts)) return (this._start = u), D(this), this.render(t, e, i);
                        this._onUpdate && !e && ve(this, "onUpdate", !0),
                            ((y === v && v >= this.totalDuration()) || (!y && m)) &&
                                ((u !== this._start && Math.abs(d) === Math.abs(this._ts)) ||
                                    this._lock ||
                                    ((!t && g) || !((y === v && 0 < this._ts) || (!y && this._ts < 0)) || A(this, 1),
                                    e || (t < 0 && !m) || (!y && !m) || (ve(this, y === v ? "onComplete" : "onReverseComplete", !0), !this._prom || (y < v && 0 < this.timeScale()) || this._prom())));
                    }
                    return this;
                }),
                (o.add = function (t, e) {
                    var i = this;
                    if ((a(e) || (e = H(this, e)), !(t instanceof Le))) {
                        if (Vt(t))
                            return (
                                t.forEach(function (t) {
                                    return i.add(t, e);
                                }),
                                z(this)
                            );
                        if (s(t)) return this.addLabel(t, e);
                        if (!r(t)) return this;
                        t = Ge.delayedCall(0, t);
                    }
                    return this !== t ? $(this, t, e) : this;
                }),
                (o.getChildren = function (t, e, i, s) {
                    void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === s && (s = -Nt);
                    for (var r = [], a = this._first; a; ) a._start >= s && (a instanceof Ge ? e && r.push(a) : (i && r.push(a), t && r.push.apply(r, a.getChildren(!0, e, i)))), (a = a._next);
                    return r;
                }),
                (o.getById = function (t) {
                    for (var e = this.getChildren(1, 1, 1), i = e.length; i--; ) if (e[i].vars.id === t) return e[i];
                }),
                (o.remove = function (t) {
                    return s(t) ? this.removeLabel(t) : r(t) ? this.killTweensOf(t) : (L(this, t), t === this._recent && (this._recent = this._last), z(this));
                }),
                (o.totalTime = function (e, i) {
                    return arguments.length
                        ? ((this._forcing = 1),
                          this.parent || this._dp || !this._ts || (this._start = _(we.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
                          t.prototype.totalTime.call(this, e, i),
                          (this._forcing = 0),
                          this)
                        : this._tTime;
                }),
                (o.addLabel = function (t, e) {
                    return (this.labels[t] = H(this, e)), this;
                }),
                (o.removeLabel = function (t) {
                    return delete this.labels[t], this;
                }),
                (o.addPause = function (t, e, i) {
                    var s = Ge.delayedCall(0, e || m, i);
                    return (s.data = "isPause"), (this._hasPause = 1), $(this, s, H(this, t));
                }),
                (o.removePause = function (t) {
                    var e = this._first;
                    for (t = H(this, t); e; ) e._start === t && "isPause" === e.data && A(e), (e = e._next);
                }),
                (o.killTweensOf = function (t, e, i) {
                    for (var s = this.getTweensOf(t, i), r = s.length; r--; ) Fe !== s[r] && s[r].kill(t, e);
                    return this;
                }),
                (o.getTweensOf = function (t, e) {
                    for (var i, s = [], r = fe(t), a = this._first; a; ) a instanceof Ge ? !w(a._targets, r) || (e && !a.isActive("started" === e)) || s.push(a) : (i = a.getTweensOf(r, e)).length && s.push.apply(s, i), (a = a._next);
                    return s;
                }),
                (o.tweenTo = function (t, e) {
                    e = e || {};
                    var i = this,
                        s = H(i, t),
                        r = e.startAt,
                        a = e.onStart,
                        n = e.onStartParams,
                        o = Ge.to(
                            i,
                            C(e, {
                                ease: "none",
                                lazy: !1,
                                time: s,
                                duration: e.duration || Math.abs((s - (r && "time" in r ? r.time : i._time)) / i.timeScale()) || $t,
                                onStart: function () {
                                    i.pause();
                                    var t = e.duration || Math.abs((s - i._time) / i.timeScale());
                                    o._dur !== t && G(o, t).render(o._time, !0, !0), a && a.apply(o, n || []);
                                },
                            })
                        );
                    return o;
                }),
                (o.tweenFromTo = function (t, e, i) {
                    return this.tweenTo(e, C({ startAt: { time: H(this, t) } }, i));
                }),
                (o.recent = function () {
                    return this._recent;
                }),
                (o.nextLabel = function (t) {
                    return void 0 === t && (t = this._time), et(this, H(this, t));
                }),
                (o.previousLabel = function (t) {
                    return void 0 === t && (t = this._time), et(this, H(this, t), 1);
                }),
                (o.currentLabel = function (t) {
                    return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + $t);
                }),
                (o.shiftChildren = function (t, e, i) {
                    void 0 === i && (i = 0);
                    for (var s, r = this._first, a = this.labels; r; ) r._start >= i && (r._start += t), (r = r._next);
                    if (e) for (s in a) a[s] >= i && (a[s] += t);
                    return z(this);
                }),
                (o.invalidate = function () {
                    var e = this._first;
                    for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
                    return t.prototype.invalidate.call(this);
                }),
                (o.clear = function (t) {
                    void 0 === t && (t = !0);
                    for (var e, i = this._first; i; ) (e = i._next), this.remove(i), (i = e);
                    return (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), z(this);
                }),
                (o.totalDuration = function (t) {
                    var e,
                        i,
                        s,
                        r,
                        a = 0,
                        n = this,
                        o = n._last,
                        l = Nt;
                    if (arguments.length) return n.timeScale((n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -t : t));
                    if (n._dirty) {
                        for (r = n.parent; o; )
                            (e = o._prev),
                                o._dirty && o.totalDuration(),
                                l < (s = o._start) && n._sort && o._ts && !n._lock ? ((n._lock = 1), ($(n, o, s - o._delay, 1)._lock = 0)) : (l = s),
                                s < 0 && o._ts && ((a -= s), ((!r && !n._dp) || (r && r.smoothChildTiming)) && ((n._start += s / n._ts), (n._time -= s), (n._tTime -= s)), n.shiftChildren(-s, !1, -1 / 0), (l = 0)),
                                a < (i = D(o)) && o._ts && (a = i),
                                (o = e);
                        G(n, n === ct && n._time > a ? n._time : a, 1), (n._dirty = 0);
                    }
                    return n._tDur;
                }),
                (n.updateRoot = function (t) {
                    if ((ct._ts && (T(ct, F(t, ct)), (bt = we.frame)), we.frame >= ne)) {
                        ne += Ft.autoSleep || 120;
                        var e = ct._first;
                        if ((!e || !e._ts) && Ft.autoSleep && we._listeners.length < 2) {
                            for (; e && !e._ts; ) e = e._next;
                            e || we.sleep();
                        }
                    }
                }),
                n
            );
        })(Le);
        function Ie(t, e, i, a, n, l) {
            var h, d, u, p;
            if (
                re[t] &&
                !1 !==
                    (h = new re[t]()).init(
                        n,
                        h.rawVars
                            ? e[t]
                            : (function (t, e, i, a, n) {
                                  if ((r(t) && (t = $e(t, n, e, i, a)), !o(t) || (t.style && t.nodeType) || Vt(t))) return s(t) ? $e(t, n, e, i, a) : t;
                                  var l,
                                      h = {};
                                  for (l in t) h[l] = $e(t[l], n, e, i, a);
                                  return h;
                              })(e[t], a, n, l, i),
                        i,
                        a,
                        l
                    ) &&
                ((i._pt = d = new ii(i._pt, n, t, 0, 1, h.render, h, 0, h.priority)), i !== _t)
            )
                for (u = i._ptLookup[i._targets.indexOf(n)], p = h._props.length; p--; ) u[h._props[p]] = d;
            return h;
        }
        C(ze.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var Fe,
            De = function (t, e, i, a, n, o, l, h, d) {
                r(a) && (a = a(n || 0, t, o));
                var u,
                    c = t[e],
                    f = "get" !== i ? i : r(c) ? (d ? t[e.indexOf("set") || !r(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](d) : t[e]()) : c,
                    m = r(c) ? (d ? We : Ve) : Ye;
                if ((s(a) && (~a.indexOf("random(") && (a = tt(a)), "=" === a.charAt(1) && (a = parseFloat(f) + parseFloat(a.substr(2)) * ("-" === a.charAt(0) ? -1 : 1) + (V(f) || 0))), f !== a))
                    return isNaN(f + a)
                        ? (c || e in t || p(e, a),
                          function (t, e, i, s, r, a, n) {
                              var o,
                                  l,
                                  h,
                                  d,
                                  u,
                                  p,
                                  c,
                                  f,
                                  m = new ii(this._pt, t, e, 0, 1, Qe, null, r),
                                  v = 0,
                                  g = 0;
                              for (m.b = i, m.e = s, i += "", (c = ~(s += "").indexOf("random(")) && (s = tt(s)), a && (a((f = [i, s]), t, e), (i = f[0]), (s = f[1])), l = i.match(Kt) || []; (o = Kt.exec(s)); )
                                  (d = o[0]),
                                      (u = s.substring(v, o.index)),
                                      h ? (h = (h + 1) % 5) : "rgba(" === u.substr(-5) && (h = 1),
                                      d !== l[g++] &&
                                          ((p = parseFloat(l[g - 1]) || 0),
                                          (m._pt = { _next: m._pt, p: u || 1 === g ? u : ",", s: p, c: "=" === d.charAt(1) ? parseFloat(d.substr(2)) * ("-" === d.charAt(0) ? -1 : 1) : parseFloat(d) - p, m: h && h < 4 ? Math.round : 0 }),
                                          (v = Kt.lastIndex));
                              return (m.c = v < s.length ? s.substring(v, s.length) : ""), (m.fp = n), (Zt.test(s) || c) && (m.e = 0), (this._pt = m);
                          }.call(this, t, e, f, a, m, h || Ft.stringFilter, d))
                        : ((u = new ii(this._pt, t, e, +f || 0, a - (f || 0), "boolean" == typeof c ? Ke : Ue, 0, m)), d && (u.fp = d), l && u.modifier(l, this, t), (this._pt = u));
            },
            Ne = function t(e, i) {
                var s,
                    r,
                    a,
                    n,
                    o,
                    h,
                    d,
                    u,
                    p,
                    c,
                    f,
                    m,
                    y = e.vars,
                    b = y.ease,
                    _ = y.startAt,
                    w = y.immediateRender,
                    x = y.lazy,
                    T = y.onUpdate,
                    M = y.onUpdateParams,
                    S = y.callbackScope,
                    B = y.runBackwards,
                    k = y.yoyoEase,
                    O = y.keyframes,
                    L = y.autoRevert,
                    z = e._dur,
                    I = e._startAt,
                    F = e._targets,
                    D = e.parent,
                    N = D && "nested" === D.data ? D.parent._targets : F,
                    $ = "auto" === e._overwrite,
                    j = e.timeline;
                if ((!j || (O && b) || (b = "none"), (e._ease = Ce(b, Dt.ease)), (e._yEase = k ? Se(Ce(!0 === k ? b : k, Dt.ease)) : 0), k && e._yoyo && !e._repeat && ((k = e._yEase), (e._yEase = e._ease), (e._ease = k)), !j)) {
                    if (((m = (u = F[0] ? g(F[0]).harness : 0) && y[u.prop]), (s = P(y, ee)), I && I.render(-1, !0).kill(), _)) {
                        if ((A((e._startAt = Ge.set(F, C({ data: "isStart", overwrite: !1, parent: D, immediateRender: !0, lazy: l(x), startAt: null, delay: 0, onUpdate: T, onUpdateParams: M, callbackScope: S, stagger: 0 }, _)))), w))
                            if (0 < i) L || (e._startAt = 0);
                            else if (z) return;
                    } else if (B && z)
                        if (I) L || (e._startAt = 0);
                        else if ((i && (w = !1), (a = C({ overwrite: !1, data: "isFromStart", lazy: w && l(x), immediateRender: w, stagger: 0, parent: D }, s)), m && (a[u.prop] = m), A((e._startAt = Ge.set(F, a))), w)) {
                            if (!i) return;
                        } else t(e._startAt, $t);
                    for (e._pt = 0, x = (z && l(x)) || (x && !z), r = 0; r < F.length; r++) {
                        if (
                            ((d = (o = F[r])._gsap || v(F)[r]._gsap),
                            (e._ptLookup[r] = c = {}),
                            se[d.id] && E(),
                            (f = N === F ? r : N.indexOf(o)),
                            u &&
                                !1 !== (p = new u()).init(o, m || s, e, f, N) &&
                                ((e._pt = n = new ii(e._pt, o, p.name, 0, 1, p.render, p, 0, p.priority)),
                                p._props.forEach(function (t) {
                                    c[t] = n;
                                }),
                                p.priority && (h = 1)),
                            !u || m)
                        )
                            for (a in s) re[a] && (p = Ie(a, s, e, f, o, N)) ? p.priority && (h = 1) : (c[a] = n = De.call(e, o, a, "get", s[a], f, N, 0, y.stringFilter));
                        e._op && e._op[r] && e.kill(o, e._op[r]), $ && e._pt && ((Fe = e), ct.killTweensOf(o, c, "started"), (Fe = 0)), e._pt && x && (se[d.id] = 1);
                    }
                    h && ei(e), e._onInit && e._onInit(e);
                }
                (e._from = !j && !!y.runBackwards), (e._onUpdate = T), (e._initted = !!e.parent);
            },
            $e = function (t, e, i, a, n) {
                return r(t) ? t.call(e, i, a, n) : s(t) && ~t.indexOf("random(") ? tt(t) : t;
            },
            je = le + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
            Re = (je + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
            Ge = (function (t) {
                function r(e, s, r, n) {
                    var h;
                    "number" == typeof s && ((r.duration = s), (s = r), (r = null));
                    var u,
                        p,
                        f,
                        g,
                        y,
                        b,
                        w,
                        x,
                        E = (h = t.call(this, n ? s : O(s), r) || this).vars,
                        T = E.duration,
                        M = E.delay,
                        S = E.immediateRender,
                        B = E.stagger,
                        k = E.overwrite,
                        P = E.keyframes,
                        L = E.defaults,
                        A = E.scrollTrigger,
                        z = E.yoyoEase,
                        I = h.parent,
                        F = (Vt(e) ? a(e[0]) : "length" in s) ? [e] : fe(e);
                    if (((h._targets = F.length ? v(F) : c("GSAP target " + e + " not found. https://greensock.com", !Ft.nullTargetWarn) || []), (h._ptLookup = []), (h._overwrite = k), P || B || d(T) || d(M))) {
                        if (((s = h.vars), (u = h.timeline = new ze({ data: "nested", defaults: L || {} })).kill(), (u.parent = i(h)), P))
                            C(u.vars.defaults, { ease: "none" }),
                                P.forEach(function (t) {
                                    return u.to(F, t, ">");
                                });
                        else {
                            if (((g = F.length), (w = B ? U(B) : m), o(B))) for (y in B) ~je.indexOf(y) && ((x = x || {})[y] = B[y]);
                            for (p = 0; p < g; p++) {
                                for (y in ((f = {}), s)) Re.indexOf(y) < 0 && (f[y] = s[y]);
                                (f.stagger = 0),
                                    z && (f.yoyoEase = z),
                                    x && he(f, x),
                                    (b = F[p]),
                                    (f.duration = +$e(T, i(h), p, b, F)),
                                    (f.delay = (+$e(M, i(h), p, b, F) || 0) - h._delay),
                                    !B && 1 === g && f.delay && ((h._delay = M = f.delay), (h._start += M), (f.delay = 0)),
                                    u.to(b, f, w(p, b, F));
                            }
                            u.duration() ? (T = M = 0) : (h.timeline = 0);
                        }
                        T || h.duration((T = u.duration()));
                    } else h.timeline = 0;
                    return (
                        !0 === k && ((Fe = i(h)), ct.killTweensOf(F), (Fe = 0)),
                        I && N(I, i(h)),
                        (S ||
                            (!T &&
                                !P &&
                                h._start === _(I._time) &&
                                l(S) &&
                                (function t(e) {
                                    return !e || (e._ts && t(e.parent));
                                })(i(h)) &&
                                "nested" !== I.data)) &&
                            ((h._tTime = -$t), h.render(Math.max(0, -M))),
                        A && j(i(h), A),
                        h
                    );
                }
                e(r, t);
                var n = r.prototype;
                return (
                    (n.render = function (t, e, i) {
                        var s,
                            r,
                            a,
                            n,
                            o,
                            l,
                            h,
                            d,
                            u,
                            p = this._time,
                            c = this._tDur,
                            f = this._dur,
                            m = c - $t < t && 0 <= t ? c : t < $t ? 0 : t;
                        if (f) {
                            if (m !== this._tTime || !t || i || (this._startAt && this._zTime < 0 != t < 0)) {
                                if (((s = m), (d = this.timeline), this._repeat)) {
                                    if (
                                        ((f < (s = _(m % (n = f + this._rDelay))) || c === m) && (s = f),
                                        (a = ~~(m / n)) && a === m / n && ((s = f), a--),
                                        (l = this._yoyo && 1 & a) && ((u = this._yEase), (s = f - s)),
                                        (o = de(this._tTime, n)),
                                        s === p && !i && this._initted)
                                    )
                                        return this;
                                    a !== o && (d && this._yEase && lt(d, l), !this.vars.repeatRefresh || l || this._lock || ((this._lock = i = 1), (this.render(_(n * a), !0).invalidate()._lock = 0)));
                                }
                                if (!this._initted) {
                                    if (R(this, s, i, e)) return (this._tTime = 0), this;
                                    if (f !== this._dur) return this.render(t, e, i);
                                }
                                for (
                                    this._tTime = m,
                                        this._time = s,
                                        !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                                        this.ratio = h = (u || this._ease)(s / f),
                                        this._from && (this.ratio = h = 1 - h),
                                        !s || p || e || ve(this, "onStart"),
                                        r = this._pt;
                                    r;

                                )
                                    r.r(h, r.d), (r = r._next);
                                (d && d.render(t < 0 ? t : !s && l ? -$t : d._dur * h, e, i)) || (this._startAt && (this._zTime = t)),
                                    this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), ve(this, "onUpdate")),
                                    this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && ve(this, "onRepeat"),
                                    (m !== this._tDur && m) ||
                                        this._tTime !== m ||
                                        (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                                        (!t && f) || !((m === this._tDur && 0 < this._ts) || (!m && this._ts < 0)) || A(this, 1),
                                        e || (t < 0 && !p) || (!m && !p) || (ve(this, m === c ? "onComplete" : "onReverseComplete", !0), !this._prom || (m < c && 0 < this.timeScale()) || this._prom()));
                            }
                        } else
                            !(function (t, e, i, s) {
                                var r,
                                    a,
                                    n = t.ratio,
                                    o = e < 0 || (!e && n && !t._start && t._zTime > $t && !t._dp._lock) || t._ts < 0 || t._dp._ts < 0 ? 0 : 1,
                                    l = t._rDelay,
                                    h = 0;
                                if ((l && t._repeat && ((h = pe(0, t._tDur, e)), de(h, l) !== (a = de(t._tTime, l)) && ((n = 1 - o), t.vars.repeatRefresh && t._initted && t.invalidate())), t._initted || !R(t, e, s, i)))
                                    if (o !== n || s || t._zTime === $t || (!e && t._zTime)) {
                                        for (a = t._zTime, t._zTime = e || (i ? $t : 0), i = i || (e && !a), t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = h, i || ve(t, "onStart"), r = t._pt; r; ) r.r(o, r.d), (r = r._next);
                                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                                            t._onUpdate && !i && ve(t, "onUpdate"),
                                            h && t._repeat && !i && t.parent && ve(t, "onRepeat"),
                                            (e >= t._tDur || e < 0) && t.ratio === o && (o && A(t, 1), i || (ve(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
                                    } else t._zTime || (t._zTime = e);
                            })(this, t, e, i);
                        return this;
                    }),
                    (n.targets = function () {
                        return this._targets;
                    }),
                    (n.invalidate = function () {
                        return (this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0), (this._ptLookup = []), this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this);
                    }),
                    (n.kill = function (t, e) {
                        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))) return it(this);
                        if (this.timeline) {
                            var i = this.timeline.totalDuration();
                            return this.timeline.killTweensOf(t, e, Fe && !0 !== Fe.vars.overwrite)._first || it(this), this.parent && i !== this.timeline.totalDuration() && G(this, (this._dur * this.timeline._tDur) / i), this;
                        }
                        var r,
                            a,
                            n,
                            o,
                            l,
                            h,
                            d,
                            u = this._targets,
                            p = t ? fe(t) : u,
                            c = this._ptLookup,
                            f = this._pt;
                        if (
                            (!e || "all" === e) &&
                            (function (t, e) {
                                for (var i = t.length, s = i === e.length; s && i-- && t[i] === e[i]; );
                                return i < 0;
                            })(u, p)
                        )
                            return it(this);
                        for (
                            r = this._op = this._op || [],
                                "all" !== e &&
                                    (s(e) &&
                                        ((l = {}),
                                        b(e, function (t) {
                                            return (l[t] = 1);
                                        }),
                                        (e = l)),
                                    (e = (function (t, e) {
                                        var i,
                                            s,
                                            r,
                                            a,
                                            n = t[0] ? g(t[0]).harness : 0,
                                            o = n && n.aliases;
                                        if (!o) return e;
                                        for (s in ((i = he({}, e)), o)) if ((s in i)) for (r = (a = o[s].split(",")).length; r--; ) i[a[r]] = i[s];
                                        return i;
                                    })(u, e))),
                                d = u.length;
                            d--;

                        )
                            if (~p.indexOf(u[d]))
                                for (l in ((a = c[d]), "all" === e ? ((r[d] = e), (o = a), (n = {})) : ((n = r[d] = r[d] || {}), (o = e)), o))
                                    (h = a && a[l]) && (("kill" in h.d && !0 !== h.d.kill(l)) || L(this, h, "_pt"), delete a[l]), "all" !== n && (n[l] = 1);
                        return this._initted && !this._pt && f && it(this), this;
                    }),
                    (r.to = function (t, e, i) {
                        return new r(t, e, i);
                    }),
                    (r.from = function (t, e) {
                        return new r(t, x(arguments, 1));
                    }),
                    (r.delayedCall = function (t, e, i, s) {
                        return new r(e, 0, { immediateRender: !1, lazy: !1, overwrite: !1, delay: t, onComplete: e, onReverseComplete: e, onCompleteParams: i, onReverseCompleteParams: i, callbackScope: s });
                    }),
                    (r.fromTo = function (t, e, i) {
                        return new r(t, x(arguments, 2));
                    }),
                    (r.set = function (t, e) {
                        return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new r(t, e);
                    }),
                    (r.killTweensOf = function (t, e, i) {
                        return ct.killTweensOf(t, e, i);
                    }),
                    r
                );
            })(Le);
        function Xe(t, e, i) {
            return t.setAttribute(e, i);
        }
        function He(t, e, i, s) {
            s.mSet(t, e, s.m.call(s.tween, i, s.mt), s);
        }
        C(Ge.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
            b("staggerTo,staggerFrom,staggerFromTo", function (t) {
                Ge[t] = function () {
                    var e = new ze(),
                        i = ce.call(arguments, 0);
                    return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i);
                };
            });
        var Ye = function (t, e, i) {
                return (t[e] = i);
            },
            Ve = function (t, e, i) {
                return t[e](i);
            },
            We = function (t, e, i, s) {
                return t[e](s.fp, i);
            },
            qe = function (t, e) {
                return r(t[e]) ? Ve : n(t[e]) && t.setAttribute ? Xe : Ye;
            },
            Ue = function (t, e) {
                return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
            },
            Ke = function (t, e) {
                return e.set(e.t, e.p, !!(e.s + e.c * t), e);
            },
            Qe = function (t, e) {
                var i = e._pt,
                    s = "";
                if (!t && e.b) s = e.b;
                else if (1 === t && e.e) s = e.e;
                else {
                    for (; i; ) (s = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + s), (i = i._next);
                    s += e.c;
                }
                e.set(e.t, e.p, s, e);
            },
            Ze = function (t, e) {
                for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
            },
            Je = function (t, e, i, s) {
                for (var r, a = this._pt; a; ) (r = a._next), a.p === s && a.modifier(t, e, i), (a = r);
            },
            ti = function (t) {
                for (var e, i, s = this._pt; s; ) (i = s._next), (s.p === t && !s.op) || s.op === t ? L(this, s, "_pt") : s.dep || (e = 1), (s = i);
                return !e;
            },
            ei = function (t) {
                for (var e, i, s, r, a = t._pt; a; ) {
                    for (e = a._next, i = s; i && i.pr > a.pr; ) i = i._next;
                    (a._prev = i ? i._prev : r) ? (a._prev._next = a) : (s = a), (a._next = i) ? (i._prev = a) : (r = a), (a = e);
                }
                t._pt = s;
            },
            ii =
                ((si.prototype.modifier = function (t, e, i) {
                    (this.mSet = this.mSet || this.set), (this.set = He), (this.m = t), (this.mt = i), (this.tween = e);
                }),
                si);
        function si(t, e, i, s, r, a, n, o, l) {
            (this.t = e), (this.s = s), (this.c = r), (this.p = i), (this.r = a || Ue), (this.d = n || this), (this.set = o || Ye), (this.pr = l || 0), (this._next = t) && (t._prev = this);
        }
        b(
            le +
                "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
            function (t) {
                return (ee[t] = 1);
            }
        ),
            (te.TweenMax = te.TweenLite = Ge),
            (te.TimelineLite = te.TimelineMax = ze),
            (ct = new ze({ sortChildren: !1, defaults: Dt, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
            (Ft.stringFilter = ot);
        var ri = {
            registerPlugin: function () {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                e.forEach(function (t) {
                    return (function (t) {
                        var e = (t = (!t.name && t.default) || t).name,
                            i = r(t),
                            s =
                                e && !i && t.init
                                    ? function () {
                                          this._props = [];
                                      }
                                    : t,
                            a = { init: m, render: Ze, add: De, kill: ti, modifier: Je, rawVars: 0 },
                            n = { targetTest: 0, get: 0, getSetter: qe, aliases: {}, register: 0 };
                        if ((xe(), t !== s)) {
                            if (re[e]) return;
                            C(s, C(P(t, a), n)), he(s.prototype, he(a, P(t, n))), (re[(s.prop = e)] = s), t.targetTest && (oe.push(s), (ee[e] = 1)), (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
                        }
                        f(e, s), t.register && t.register(oi, s, ii);
                    })(t);
                });
            },
            timeline: function (t) {
                return new ze(t);
            },
            getTweensOf: function (t, e) {
                return ct.getTweensOf(t, e);
            },
            getProperty: function (t, e, i, r) {
                s(t) && (t = fe(t)[0]);
                var a = g(t || {}).get,
                    n = i ? S : M;
                return (
                    "native" === i && (i = ""),
                    t
                        ? e
                            ? n(((re[e] && re[e].get) || a)(t, e, i, r))
                            : function (e, i, s) {
                                  return n(((re[e] && re[e].get) || a)(t, e, i, s));
                              }
                        : t
                );
            },
            quickSetter: function (t, e, i) {
                if (1 < (t = fe(t)).length) {
                    var s = t.map(function (t) {
                            return oi.quickSetter(t, e, i);
                        }),
                        r = s.length;
                    return function (t) {
                        for (var e = r; e--; ) s[e](t);
                    };
                }
                t = t[0] || {};
                var a = re[e],
                    n = g(t),
                    o = (n.harness && (n.harness.aliases || {})[e]) || e,
                    l = a
                        ? function (e) {
                              var s = new a();
                              (_t._pt = 0), s.init(t, i ? e + i : e, _t, 0, [t]), s.render(1, s), _t._pt && Ze(1, _t);
                          }
                        : n.set(t, o);
                return a
                    ? l
                    : function (e) {
                          return l(t, o, i ? e + i : e, n, 1);
                      };
            },
            isTweening: function (t) {
                return 0 < ct.getTweensOf(t, !0).length;
            },
            defaults: function (t) {
                return t && t.ease && (t.ease = Ce(t.ease, Dt.ease)), k(Dt, t || {});
            },
            config: function (t) {
                return k(Ft, t || {});
            },
            registerEffect: function (t) {
                var e = t.name,
                    i = t.effect,
                    s = t.plugins,
                    r = t.defaults,
                    a = t.extendTimeline;
                (s || "").split(",").forEach(function (t) {
                    return t && !re[t] && !te[t] && c(e + " effect requires " + t + " plugin.");
                }),
                    (ae[e] = function (t, e, s) {
                        return i(fe(t), C(e || {}, r), s);
                    }),
                    a &&
                        (ze.prototype[e] = function (t, i, s) {
                            return this.add(ae[e](t, o(i) ? i : (s = i) && {}, this), s);
                        });
            },
            registerEase: function (t, e) {
                Ee[t] = Ce(e);
            },
            parseEase: function (t, e) {
                return arguments.length ? Ce(t, e) : Ee;
            },
            getById: function (t) {
                return ct.getById(t);
            },
            exportRoot: function (t, e) {
                void 0 === t && (t = {});
                var i,
                    s,
                    r = new ze(t);
                for (r.smoothChildTiming = l(t.smoothChildTiming), ct.remove(r), r._dp = 0, r._time = r._tTime = ct._time, i = ct._first; i; )
                    (s = i._next), (!e && !i._dur && i instanceof Ge && i.vars.onComplete === i._targets[0]) || $(r, i, i._start - i._delay), (i = s);
                return $(ct, r, 0), r;
            },
            utils: {
                wrap: function t(e, i, s) {
                    var r = i - e;
                    return Vt(e)
                        ? J(e, t(0, e.length), i)
                        : Y(s, function (t) {
                              return ((r + ((t - e) % r)) % r) + e;
                          });
                },
                wrapYoyo: function t(e, i, s) {
                    var r = i - e,
                        a = 2 * r;
                    return Vt(e)
                        ? J(e, t(0, e.length - 1), i)
                        : Y(s, function (t) {
                              return e + (r < (t = (a + ((t - e) % a)) % a || 0) ? a - t : t);
                          });
                },
                distribute: U,
                random: Z,
                snap: Q,
                normalize: function (t, e, i) {
                    return me(t, e, 0, 1, i);
                },
                getUnit: V,
                clamp: function (t, e, i) {
                    return Y(i, function (i) {
                        return pe(t, e, i);
                    });
                },
                splitColor: rt,
                toArray: fe,
                mapRange: me,
                pipe: function () {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return function (t) {
                        return e.reduce(function (t, e) {
                            return e(t);
                        }, t);
                    };
                },
                unitize: function (t, e) {
                    return function (i) {
                        return t(parseFloat(i)) + (e || V(i));
                    };
                },
                interpolate: function t(e, i, r, a) {
                    var n = isNaN(e + i)
                        ? 0
                        : function (t) {
                              return (1 - t) * e + t * i;
                          };
                    if (!n) {
                        var o,
                            l,
                            h,
                            d,
                            u,
                            p = s(e),
                            c = {};
                        if ((!0 === r && (a = 1) && (r = null), p)) (e = { p: e }), (i = { p: i });
                        else if (Vt(e) && !Vt(i)) {
                            for (h = [], d = e.length, u = d - 2, l = 1; l < d; l++) h.push(t(e[l - 1], e[l]));
                            d--,
                                (n = function (t) {
                                    t *= d;
                                    var e = Math.min(u, ~~t);
                                    return h[e](t - e);
                                }),
                                (r = i);
                        } else a || (e = he(Vt(e) ? [] : {}, e));
                        if (!h) {
                            for (o in i) De.call(c, e, o, "get", i[o]);
                            n = function (t) {
                                return Ze(t, c) || (p ? e.p : e);
                            };
                        }
                    }
                    return Y(r, n);
                },
                shuffle: q,
            },
            install: u,
            effects: ae,
            ticker: we,
            updateRoot: ze.updateRoot,
            plugins: re,
            globalTimeline: ct,
            core: { PropTween: ii, globals: f, Tween: Ge, Timeline: ze, Animation: Le, getCache: g, _removeLinkedListItem: L },
        };
        function ai(t, e) {
            for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; ) i = i._next;
            return i;
        }
        function ni(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function (t, i, r) {
                    r._onInit = function (t) {
                        var r, a;
                        if (
                            (s(i) &&
                                ((r = {}),
                                b(i, function (t) {
                                    return (r[t] = 1);
                                }),
                                (i = r)),
                            e)
                        ) {
                            for (a in ((r = {}), i)) r[a] = e(i[a]);
                            i = r;
                        }
                        !(function (t, e) {
                            var i,
                                s,
                                r,
                                a = t._targets;
                            for (i in e) for (s = a.length; s--; ) (r = (r = t._ptLookup[s][i]) && r.d) && (r._pt && (r = ai(r, i)), r && r.modifier && r.modifier(e[i], t, a[s], i));
                        })(t, i);
                    };
                },
            };
        }
        b("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
            return (ri[t] = Ge[t]);
        }),
            we.add(ze.updateRoot),
            (_t = ri.to({}, { duration: 0 }));
        var oi =
            ri.registerPlugin(
                {
                    name: "attr",
                    init: function (t, e, i, s, r) {
                        var a, n;
                        for (a in e) (n = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], s, r, 0, 0, a)) && (n.op = a), this._props.push(a);
                    },
                },
                {
                    name: "endArray",
                    init: function (t, e) {
                        for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
                    },
                },
                ni("roundProps", K),
                ni("modifiers"),
                ni("snap", Q)
            ) || ri;
        function li(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
        }
        function hi(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
        }
        function di(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
        }
        function ui(t, e) {
            var i = e.s + e.c * t;
            e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
        }
        function pi(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
        }
        function ci(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        }
        function fi(t, e, i) {
            return (t.style[e] = i);
        }
        function mi(t, e, i) {
            return t.style.setProperty(e, i);
        }
        function vi(t, e, i) {
            return (t._gsap[e] = i);
        }
        function gi(t, e, i) {
            return (t._gsap.scaleX = t._gsap.scaleY = i);
        }
        function yi(t, e, i, s, r) {
            var a = t._gsap;
            (a.scaleX = a.scaleY = i), a.renderTransform(r, a);
        }
        function bi(t, e, i, s, r) {
            var a = t._gsap;
            (a[e] = i), a.renderTransform(r, a);
        }
        function _i(t, e) {
            var i = Gi.createElementNS ? Gi.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Gi.createElement(t);
            return i.style ? i : Gi.createElement(t);
        }
        function wi(t, e, i) {
            var s = getComputedStyle(t);
            return s[e] || s.getPropertyValue(e.replace(gs, "-$1").toLowerCase()) || s.getPropertyValue(e) || (!i && wi(t, Ts(e) || e, 1)) || "";
        }
        function xi() {
            "undefined" != typeof window &&
                window.document &&
                ((Ri = window),
                (Gi = Ri.document),
                (Xi = Gi.documentElement),
                (Yi = _i("div") || { style: {} }),
                (Vi = _i("div")),
                (ws = Ts(ws)),
                (xs = Ts(xs)),
                (Yi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
                (qi = !!Ts("perspective")),
                (Hi = 1));
        }
        function Ei(t) {
            var e,
                i = _i("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                s = this.parentNode,
                r = this.nextSibling,
                a = this.style.cssText;
            if ((Xi.appendChild(i), i.appendChild(this), (this.style.display = "block"), t))
                try {
                    (e = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = Ei);
                } catch (t) {}
            else this._gsapBBox && (e = this._gsapBBox());
            return s && (r ? s.insertBefore(this, r) : s.appendChild(this)), Xi.removeChild(i), (this.style.cssText = a), e;
        }
        function Ti(t, e) {
            for (var i = e.length; i--; ) if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
        }
        function Mi(t) {
            var e;
            try {
                e = t.getBBox();
            } catch (i) {
                e = Ei.call(t, !0);
            }
            return (e && (e.width || e.height)) || t.getBBox === Ei || (e = Ei.call(t, !0)), !e || e.width || e.x || e.y ? e : { x: +Ti(t, ["x", "cx", "x1"]) || 0, y: +Ti(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
        }
        function Si(t) {
            return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Mi(t));
        }
        function Ci(t, e) {
            if (e) {
                var i = t.style;
                e in cs && (e = ws), i.removeProperty ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e), i.removeProperty(e.replace(gs, "-$1").toLowerCase())) : i.removeAttribute(e);
            }
        }
        function Bi(t, e, i, s, r, a) {
            var n = new ii(t._pt, e, i, 0, 1, a ? ci : pi);
            return ((t._pt = n).b = s), (n.e = r), t._props.push(i), n;
        }
        function ki(t, e, i, s) {
            var r,
                a,
                n,
                o,
                l = parseFloat(i) || 0,
                h = (i + "").trim().substr((l + "").length) || "px",
                d = Yi.style,
                u = ys.test(e),
                p = "svg" === t.tagName.toLowerCase(),
                c = (p ? "client" : "offset") + (u ? "Width" : "Height"),
                f = "px" === s,
                m = "%" === s;
            return s === h || !l || Ms[s] || Ms[h]
                ? l
                : ("px" === h || f || (l = ki(t, e, i, "px")),
                  (o = t.getCTM && Si(t)),
                  m && (cs[e] || ~e.indexOf("adius"))
                      ? _((l / (o ? t.getBBox()[u ? "width" : "height"] : t[c])) * 100)
                      : ((d[u ? "width" : "height"] = 100 + (f ? h : s)),
                        (a = ~e.indexOf("adius") || ("em" === s && t.appendChild && !p) ? t : t.parentNode),
                        o && (a = (t.ownerSVGElement || {}).parentNode),
                        (a && a !== Gi && a.appendChild) || (a = Gi.body),
                        (n = a._gsap) && m && n.width && u && n.time === we.time
                            ? _((l / n.width) * 100)
                            : ((!m && "%" !== h) || (d.position = wi(t, "position")),
                              a === t && (d.position = "static"),
                              a.appendChild(Yi),
                              (r = Yi[c]),
                              a.removeChild(Yi),
                              (d.position = "absolute"),
                              u && m && (((n = g(a)).time = we.time), (n.width = a[c])),
                              _(f ? (r * l) / 100 : r && l ? (100 / r) * l : 0))));
        }
        function Pi(t, e, i, s) {
            var r;
            return (
                Hi || xi(),
                e in _s && "transform" !== e && ~(e = _s[e]).indexOf(",") && (e = e.split(",")[0]),
                cs[e] && "transform" !== e
                    ? ((r = Ps(t, s)), (r = "transformOrigin" !== e ? r[e] : Os(wi(t, xs)) + " " + r.zOrigin + "px"))
                    : ((r = t.style[e]) && "auto" !== r && !s && !~(r + "").indexOf("calc(")) || (r = (Cs[e] && Cs[e](t, e, i)) || wi(t, e) || y(t, e) || ("opacity" === e ? 1 : 0)),
                i && !~(r + "").indexOf(" ") ? ki(t, e, r, i) + i : r
            );
        }
        function Oi(t, e, i, s) {
            if (!i || "none" === i) {
                var r = Ts(e, t, 1),
                    a = r && wi(t, r, 1);
                a && a !== i && ((e = r), (i = a));
            }
            var n,
                o,
                l,
                h,
                d,
                u,
                p,
                c,
                f,
                m,
                v,
                g,
                y = new ii(this._pt, t.style, e, 0, 1, Qe),
                b = 0,
                _ = 0;
            if (((y.b = i), (y.e = s), (i += ""), "auto" == (s += "") && ((t.style[e] = s), (s = wi(t, e) || s), (t.style[e] = i)), ot((n = [i, s])), (s = n[1]), (l = (i = n[0]).match(Ut) || []), (s.match(Ut) || []).length)) {
                for (; (o = Ut.exec(s)); )
                    (p = o[0]),
                        (f = s.substring(b, o.index)),
                        d ? (d = (d + 1) % 5) : ("rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5)) || (d = 1),
                        p !== (u = l[_++] || "") &&
                            ((h = parseFloat(u) || 0),
                            (v = u.substr((h + "").length)),
                            (g = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)),
                            (c = parseFloat(p)),
                            (m = p.substr((c + "").length)),
                            (b = Ut.lastIndex - m.length),
                            m || ((m = m || Ft.units[e] || v), b === s.length && ((s += m), (y.e += m))),
                            v !== m && (h = ki(t, e, u, m) || 0),
                            (y._pt = { _next: y._pt, p: f || 1 === _ ? f : ",", s: h, c: g ? g * c : c - h, m: d && d < 4 ? Math.round : 0 }));
                y.c = b < s.length ? s.substring(b, s.length) : "";
            } else y.r = "display" === e && "none" === s ? ci : pi;
            return Zt.test(s) && (y.e = 0), (this._pt = y);
        }
        function Li(t) {
            var e = t.split(" "),
                i = e[0],
                s = e[1] || "50%";
            return ("top" !== i && "bottom" !== i && "left" !== s && "right" !== s) || ((t = i), (i = s), (s = t)), (e[0] = Ss[i] || i), (e[1] = Ss[s] || s), e.join(" ");
        }
        function Ai(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var i,
                    s,
                    r,
                    a = e.t,
                    n = a.style,
                    o = e.u,
                    l = a._gsap;
                if ("all" === o || !0 === o) (n.cssText = ""), (s = 1);
                else for (r = (o = o.split(",")).length; -1 < --r; ) (i = o[r]), cs[i] && ((s = 1), (i = "transformOrigin" === i ? xs : ws)), Ci(a, i);
                s && (Ci(a, ws), l && (l.svg && a.removeAttribute("transform"), Ps(a, 1), (l.uncache = 1)));
            }
        }
        function zi(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        }
        function Ii(t) {
            var e = wi(t, ws);
            return zi(e) ? Bs : e.substr(7).match(qt).map(_);
        }
        function Fi(t, e) {
            var i,
                s,
                r,
                a,
                n = t._gsap || g(t),
                o = t.style,
                l = Ii(t);
            return n.svg && t.getAttribute("transform")
                ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",")
                    ? Bs
                    : l
                : (l !== Bs ||
                      t.offsetParent ||
                      t === Xi ||
                      n.svg ||
                      ((r = o.display),
                      (o.display = "block"),
                      ((i = t.parentNode) && t.offsetParent) || ((a = 1), (s = t.nextSibling), Xi.appendChild(t)),
                      (l = Ii(t)),
                      r ? (o.display = r) : Ci(t, "display"),
                      a && (s ? i.insertBefore(t, s) : i ? i.appendChild(t) : Xi.removeChild(t))),
                  e && 6 < l.length ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
        }
        function Di(t, e, i, s, r, a) {
            var n,
                o,
                l,
                h = t._gsap,
                d = r || Fi(t, !0),
                u = h.xOrigin || 0,
                p = h.yOrigin || 0,
                c = h.xOffset || 0,
                f = h.yOffset || 0,
                m = d[0],
                v = d[1],
                g = d[2],
                y = d[3],
                b = d[4],
                _ = d[5],
                w = e.split(" "),
                x = parseFloat(w[0]) || 0,
                E = parseFloat(w[1]) || 0;
            i
                ? d !== Bs && (o = m * y - v * g) && ((l = x * (-v / o) + E * (m / o) - (m * _ - v * b) / o), (x = x * (y / o) + E * (-g / o) + (g * _ - y * b) / o), (E = l))
                : ((x = (n = Mi(t)).x + (~w[0].indexOf("%") ? (x / 100) * n.width : x)), (E = n.y + (~(w[1] || w[0]).indexOf("%") ? (E / 100) * n.height : E))),
                s || (!1 !== s && h.smooth) ? ((b = x - u), (_ = E - p), (h.xOffset = c + (b * m + _ * g) - b), (h.yOffset = f + (b * v + _ * y) - _)) : (h.xOffset = h.yOffset = 0),
                (h.xOrigin = x),
                (h.yOrigin = E),
                (h.smooth = !!s),
                (h.origin = e),
                (h.originIsAbsolute = !!i),
                (t.style[xs] = "0px 0px"),
                a && (Bi(a, h, "xOrigin", u, x), Bi(a, h, "yOrigin", p, E), Bi(a, h, "xOffset", c, h.xOffset), Bi(a, h, "yOffset", f, h.yOffset)),
                t.setAttribute("data-svg-origin", x + " " + E);
        }
        function Ni(t, e, i) {
            var s = V(e);
            return _(parseFloat(e) + parseFloat(ki(t, "x", i + "px", s))) + s;
        }
        function $i(t, e, i, r, a, n) {
            var o,
                l,
                h = 360,
                d = s(a),
                u = parseFloat(a) * (d && ~a.indexOf("rad") ? fs : 1),
                p = n ? u * n : u - r,
                c = r + p + "deg";
            return (
                d && ("short" === (o = a.split("_")[1]) && (p %= h) != p % 180 && (p += p < 0 ? h : -h), "cw" === o && p < 0 ? (p = ((p + 36e9) % h) - ~~(p / h) * h) : "ccw" === o && 0 < p && (p = ((p - 36e9) % h) - ~~(p / h) * h)),
                (t._pt = l = new ii(t._pt, e, i, r, p, hi)),
                (l.e = c),
                (l.u = "deg"),
                t._props.push(i),
                l
            );
        }
        function ji(t, e, i) {
            var s,
                r,
                a,
                n,
                o,
                l,
                h,
                d = Vi.style,
                u = i._gsap;
            for (r in ((d.cssText = getComputedStyle(i).cssText + ";position:absolute;display:block;"), (d[ws] = e), Gi.body.appendChild(Vi), (s = Ps(Vi, 1)), cs))
                (a = u[r]) !== (n = s[r]) &&
                    "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
                    ((o = V(a) !== (h = V(n)) ? ki(i, r, a, h) : parseFloat(a)), (l = parseFloat(n)), (t._pt = new ii(t._pt, u, r, o, l - o, li)), (t._pt.u = h || 0), t._props.push(r));
            Gi.body.removeChild(Vi);
        }
        (Ge.version = ze.version = oi.version = "3.3.4"), (yt = 1), h() && xe();
        var Ri,
            Gi,
            Xi,
            Hi,
            Yi,
            Vi,
            Wi,
            qi,
            Ui = Ee.Power0,
            Ki = Ee.Power1,
            Qi = Ee.Power2,
            Zi = Ee.Power3,
            Ji = Ee.Power4,
            ts = Ee.Linear,
            es = Ee.Quad,
            is = Ee.Cubic,
            ss = Ee.Quart,
            rs = Ee.Quint,
            as = Ee.Strong,
            ns = Ee.Elastic,
            os = Ee.Back,
            ls = Ee.SteppedEase,
            hs = Ee.Bounce,
            ds = Ee.Sine,
            us = Ee.Expo,
            ps = Ee.Circ,
            cs = {},
            fs = 180 / Math.PI,
            ms = Math.PI / 180,
            vs = Math.atan2,
            gs = /([A-Z])/g,
            ys = /(?:left|right|width|margin|padding|x)/i,
            bs = /[\s,\(]\S/,
            _s = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
            ws = "transform",
            xs = ws + "Origin",
            Es = "O,Moz,ms,Ms,Webkit".split(","),
            Ts = function (t, e, i) {
                var s = (e || Yi).style,
                    r = 5;
                if (t in s && !i) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Es[r] + t in s); );
                return r < 0 ? null : (3 === r ? "ms" : 0 <= r ? Es[r] : "") + t;
            },
            Ms = { deg: 1, rad: 1, turn: 1 },
            Ss = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
            Cs = {
                clearProps: function (t, e, i, s, r) {
                    if ("isFromStart" !== r.data) {
                        var a = (t._pt = new ii(t._pt, e, i, 0, 0, Ai));
                        return (a.u = s), (a.pr = -10), (a.tween = r), t._props.push(i), 1;
                    }
                },
            },
            Bs = [1, 0, 0, 1, 0, 0],
            ks = {},
            Ps = function (t, e) {
                var i = t._gsap || new Oe(t);
                if ("x" in i && !e && !i.uncache) return i;
                var s,
                    r,
                    a,
                    n,
                    o,
                    l,
                    h,
                    d,
                    u,
                    p,
                    c,
                    f,
                    m,
                    v,
                    g,
                    y,
                    b,
                    w,
                    x,
                    E,
                    T,
                    M,
                    S,
                    C,
                    B,
                    k,
                    P,
                    O,
                    L,
                    A,
                    z,
                    I,
                    F = t.style,
                    D = i.scaleX < 0,
                    N = "deg",
                    $ = wi(t, xs) || "0";
                return (
                    (s = r = a = l = h = d = u = p = c = 0),
                    (n = o = 1),
                    (i.svg = !(!t.getCTM || !Si(t))),
                    (v = Fi(t, i.svg)),
                    i.svg && ((C = !i.uncache && t.getAttribute("data-svg-origin")), Di(t, C || $, !!C || i.originIsAbsolute, !1 !== i.smooth, v)),
                    (f = i.xOrigin || 0),
                    (m = i.yOrigin || 0),
                    v !== Bs &&
                        ((w = v[0]),
                        (x = v[1]),
                        (E = v[2]),
                        (T = v[3]),
                        (s = M = v[4]),
                        (r = S = v[5]),
                        6 === v.length
                            ? ((n = Math.sqrt(w * w + x * x)),
                              (o = Math.sqrt(T * T + E * E)),
                              (l = w || x ? vs(x, w) * fs : 0),
                              (u = E || T ? vs(E, T) * fs + l : 0) && (o *= Math.cos(u * ms)),
                              i.svg && ((s -= f - (f * w + m * E)), (r -= m - (f * x + m * T))))
                            : ((I = v[6]),
                              (A = v[7]),
                              (P = v[8]),
                              (O = v[9]),
                              (L = v[10]),
                              (z = v[11]),
                              (s = v[12]),
                              (r = v[13]),
                              (a = v[14]),
                              (h = (g = vs(I, L)) * fs),
                              g &&
                                  ((C = M * (y = Math.cos(-g)) + P * (b = Math.sin(-g))),
                                  (B = S * y + O * b),
                                  (k = I * y + L * b),
                                  (P = M * -b + P * y),
                                  (O = S * -b + O * y),
                                  (L = I * -b + L * y),
                                  (z = A * -b + z * y),
                                  (M = C),
                                  (S = B),
                                  (I = k)),
                              (d = (g = vs(-E, L)) * fs),
                              g && ((y = Math.cos(-g)), (z = T * (b = Math.sin(-g)) + z * y), (w = C = w * y - P * b), (x = B = x * y - O * b), (E = k = E * y - L * b)),
                              (l = (g = vs(x, w)) * fs),
                              g && ((C = w * (y = Math.cos(g)) + x * (b = Math.sin(g))), (B = M * y + S * b), (x = x * y - w * b), (S = S * y - M * b), (w = C), (M = B)),
                              h && 359.9 < Math.abs(h) + Math.abs(l) && ((h = l = 0), (d = 180 - d)),
                              (n = _(Math.sqrt(w * w + x * x + E * E))),
                              (o = _(Math.sqrt(S * S + I * I))),
                              (g = vs(M, S)),
                              (u = 2e-4 < Math.abs(g) ? g * fs : 0),
                              (c = z ? 1 / (z < 0 ? -z : z) : 0)),
                        i.svg && ((C = t.getAttribute("transform")), (i.forceCSS = t.setAttribute("transform", "") || !zi(wi(t, ws))), C && t.setAttribute("transform", C))),
                    90 < Math.abs(u) && Math.abs(u) < 270 && (D ? ((n *= -1), (u += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180)) : ((o *= -1), (u += u <= 0 ? 180 : -180))),
                    (i.x = ((i.xPercent = s && Math.round(t.offsetWidth / 2) === Math.round(-s) ? -50 : 0) ? 0 : s) + "px"),
                    (i.y = ((i.yPercent = r && Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0) ? 0 : r) + "px"),
                    (i.z = a + "px"),
                    (i.scaleX = _(n)),
                    (i.scaleY = _(o)),
                    (i.rotation = _(l) + N),
                    (i.rotationX = _(h) + N),
                    (i.rotationY = _(d) + N),
                    (i.skewX = u + N),
                    (i.skewY = p + N),
                    (i.transformPerspective = c + "px"),
                    (i.zOrigin = parseFloat($.split(" ")[2]) || 0) && (F[xs] = Os($)),
                    (i.xOffset = i.yOffset = 0),
                    (i.force3D = Ft.force3D),
                    (i.renderTransform = i.svg ? Ds : qi ? Fs : Ls),
                    (i.uncache = 0),
                    i
                );
            },
            Os = function (t) {
                return (t = t.split(" "))[0] + " " + t[1];
            },
            Ls = function (t, e) {
                (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), Fs(t, e);
            },
            As = "0deg",
            zs = "0px",
            Is = ") ",
            Fs = function (t, e) {
                var i = e || this,
                    s = i.xPercent,
                    r = i.yPercent,
                    a = i.x,
                    n = i.y,
                    o = i.z,
                    l = i.rotation,
                    h = i.rotationY,
                    d = i.rotationX,
                    u = i.skewX,
                    p = i.skewY,
                    c = i.scaleX,
                    f = i.scaleY,
                    m = i.transformPerspective,
                    v = i.force3D,
                    g = i.target,
                    y = i.zOrigin,
                    b = "",
                    _ = ("auto" === v && t && 1 !== t) || !0 === v;
                if (y && (d !== As || h !== As)) {
                    var w,
                        x = parseFloat(h) * ms,
                        E = Math.sin(x),
                        T = Math.cos(x);
                    (x = parseFloat(d) * ms), (a = Ni(g, a, E * (w = Math.cos(x)) * -y)), (n = Ni(g, n, -Math.sin(x) * -y)), (o = Ni(g, o, T * w * -y + y));
                }
                m !== zs && (b += "perspective(" + m + Is),
                    (s || r) && (b += "translate(" + s + "%, " + r + "%) "),
                    (!_ && a === zs && n === zs && o === zs) || (b += o !== zs || _ ? "translate3d(" + a + ", " + n + ", " + o + ") " : "translate(" + a + ", " + n + Is),
                    l !== As && (b += "rotate(" + l + Is),
                    h !== As && (b += "rotateY(" + h + Is),
                    d !== As && (b += "rotateX(" + d + Is),
                    (u === As && p === As) || (b += "skew(" + u + ", " + p + Is),
                    (1 === c && 1 === f) || (b += "scale(" + c + ", " + f + Is),
                    (g.style[ws] = b || "translate(0, 0)");
            },
            Ds = function (t, e) {
                var i,
                    s,
                    r,
                    a,
                    n,
                    o = e || this,
                    l = o.xPercent,
                    h = o.yPercent,
                    d = o.x,
                    u = o.y,
                    p = o.rotation,
                    c = o.skewX,
                    f = o.skewY,
                    m = o.scaleX,
                    v = o.scaleY,
                    g = o.target,
                    y = o.xOrigin,
                    b = o.yOrigin,
                    w = o.xOffset,
                    x = o.yOffset,
                    E = o.forceCSS,
                    T = parseFloat(d),
                    M = parseFloat(u);
                (p = parseFloat(p)),
                    (c = parseFloat(c)),
                    (f = parseFloat(f)) && ((c += f = parseFloat(f)), (p += f)),
                    p || c
                        ? ((p *= ms),
                          (c *= ms),
                          (i = Math.cos(p) * m),
                          (s = Math.sin(p) * m),
                          (r = Math.sin(p - c) * -v),
                          (a = Math.cos(p - c) * v),
                          c && ((f *= ms), (n = Math.tan(c - f)), (r *= n = Math.sqrt(1 + n * n)), (a *= n), f && ((n = Math.tan(f)), (i *= n = Math.sqrt(1 + n * n)), (s *= n))),
                          (i = _(i)),
                          (s = _(s)),
                          (r = _(r)),
                          (a = _(a)))
                        : ((i = m), (a = v), (s = r = 0)),
                    ((T && !~(d + "").indexOf("px")) || (M && !~(u + "").indexOf("px"))) && ((T = ki(g, "x", d, "px")), (M = ki(g, "y", u, "px"))),
                    (y || b || w || x) && ((T = _(T + y - (y * i + b * r) + w)), (M = _(M + b - (y * s + b * a) + x))),
                    (l || h) && ((T = _(T + (l / 100) * (n = g.getBBox()).width)), (M = _(M + (h / 100) * n.height))),
                    (n = "matrix(" + i + "," + s + "," + r + "," + a + "," + T + "," + M + ")"),
                    g.setAttribute("transform", n),
                    E && (g.style[ws] = n);
            };
        b("padding,margin,Width,Radius", function (t, e) {
            var i = "Right",
                s = "Bottom",
                r = "Left",
                a = (e < 3 ? ["Top", i, s, r] : ["Top" + r, "Top" + i, s + i, s + r]).map(function (i) {
                    return e < 2 ? t + i : "border" + i + t;
                });
            Cs[1 < e ? "border" + t : t] = function (t, e, i, s, r) {
                var n, o;
                if (arguments.length < 4)
                    return (
                        (n = a.map(function (e) {
                            return Pi(t, e, i);
                        })),
                        5 === (o = n.join(" ")).split(n[0]).length ? n[0] : o
                    );
                (n = (s + "").split(" ")),
                    (o = {}),
                    a.forEach(function (t, e) {
                        return (o[t] = n[e] = n[e] || n[((e - 1) / 2) | 0]);
                    }),
                    t.init(e, o, r);
            };
        });
        var Ns,
            $s,
            js = {
                name: "css",
                register: xi,
                targetTest: function (t) {
                    return t.style && t.nodeType;
                },
                init: function (t, e, i, s, r) {
                    var a,
                        n,
                        o,
                        l,
                        h,
                        d,
                        u,
                        c,
                        f,
                        m,
                        v,
                        g,
                        y,
                        b,
                        _,
                        w = this._props,
                        x = t.style;
                    for (u in (Hi || xi(), e))
                        if ("autoRound" !== u && ((n = e[u]), !re[u] || !Ie(u, e, i, s, t, r)))
                            if (((h = typeof n), (d = Cs[u]), "function" === h && (h = typeof (n = n.call(i, s, t, r))), "string" === h && ~n.indexOf("random(") && (n = tt(n)), d)) d(this, t, u, n, i) && (_ = 1);
                            else if ("--" === u.substr(0, 2)) this.add(x, "setProperty", getComputedStyle(t).getPropertyValue(u) + "", n + "", s, r, 0, 0, u);
                            else {
                                if (
                                    ((a = Pi(t, u)),
                                    (l = parseFloat(a)),
                                    (m = "string" === h && "=" === n.charAt(1) ? +(n.charAt(0) + "1") : 0) && (n = n.substr(2)),
                                    (o = parseFloat(n)),
                                    u in _s &&
                                        ("autoAlpha" === u && (1 === l && "hidden" === Pi(t, "visibility") && o && (l = 0), Bi(this, x, "visibility", l ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)),
                                        "scale" !== u && "transform" !== u && ~(u = _s[u]).indexOf(",") && (u = u.split(",")[0])),
                                    (v = u in cs))
                                )
                                    if ((g || ((y = t._gsap).renderTransform || Ps(t), (b = !1 !== e.smoothOrigin && y.smooth), ((g = this._pt = new ii(this._pt, x, ws, 0, 1, y.renderTransform, y, 0, -1)).dep = 1)), "scale" === u))
                                        (this._pt = new ii(this._pt, y, "scaleY", y.scaleY, m ? m * o : o - y.scaleY)), w.push("scaleY", u), (u += "X");
                                    else {
                                        if ("transformOrigin" === u) {
                                            (n = Li(n)), y.svg ? Di(t, n, 0, b, 0, this) : ((f = parseFloat(n.split(" ")[2]) || 0) !== y.zOrigin && Bi(this, y, "zOrigin", y.zOrigin, f), Bi(this, x, u, Os(a), Os(n)));
                                            continue;
                                        }
                                        if ("svgOrigin" === u) {
                                            Di(t, n, 1, b, 0, this);
                                            continue;
                                        }
                                        if (u in ks) {
                                            $i(this, y, u, l, n, m);
                                            continue;
                                        }
                                        if ("smoothOrigin" === u) {
                                            Bi(this, y, "smooth", y.smooth, n);
                                            continue;
                                        }
                                        if ("force3D" === u) {
                                            y[u] = n;
                                            continue;
                                        }
                                        if ("transform" === u) {
                                            ji(this, n, t);
                                            continue;
                                        }
                                    }
                                else u in x || (u = Ts(u) || u);
                                if (v || ((o || 0 === o) && (l || 0 === l) && !bs.test(n) && u in x))
                                    (c = (a + "").substr((l + "").length)) !== (f = (n + "").substr(((o = o || 0) + "").length) || (u in Ft.units ? Ft.units[u] : c)) && (l = ki(t, u, a, f)),
                                        (this._pt = new ii(this._pt, v ? y : x, u, l, m ? m * o : o - l, "px" !== f || !1 === e.autoRound || v ? li : ui)),
                                        (this._pt.u = f || 0),
                                        c !== f && ((this._pt.b = a), (this._pt.r = di));
                                else if (u in x) Oi.call(this, t, u, a, n);
                                else {
                                    if (!(u in t)) {
                                        p(u, n);
                                        continue;
                                    }
                                    this.add(t, u, t[u], n, s, r);
                                }
                                w.push(u);
                            }
                    _ && ei(this);
                },
                get: Pi,
                aliases: _s,
                getSetter: function (t, e, i) {
                    var s = _s[e];
                    return (
                        s && s.indexOf(",") < 0 && (e = s),
                        e in cs && e !== xs && (t._gsap.x || Pi(t, "x")) ? (i && Wi === i ? ("scale" === e ? gi : vi) : (Wi = i || {}) && ("scale" === e ? yi : bi)) : t.style && !n(t.style[e]) ? fi : ~e.indexOf("-") ? mi : qe(t, e)
                    );
                },
                core: { _removeProperty: Ci, _getMatrix: Fi },
            };
        (oi.utils.checkPrefix = Ts),
            ($s = b("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (Ns = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
                cs[t] = 1;
            })),
            b(Ns, function (t) {
                (Ft.units[t] = "deg"), (ks[t] = 1);
            }),
            (_s[$s[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Ns),
            b("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
                var e = t.split(":");
                _s[e[1]] = $s[e[0]];
            }),
            b("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
                Ft.units[t] = "px";
            }),
            oi.registerPlugin(js);
        var Rs = oi.registerPlugin(js) || oi,
            Gs = Rs.core.Tween;
        (t.Back = os),
            (t.Bounce = hs),
            (t.CSSPlugin = js),
            (t.Circ = ps),
            (t.Cubic = is),
            (t.Elastic = ns),
            (t.Expo = us),
            (t.Linear = ts),
            (t.Power0 = Ui),
            (t.Power1 = Ki),
            (t.Power2 = Qi),
            (t.Power3 = Zi),
            (t.Power4 = Ji),
            (t.Quad = es),
            (t.Quart = ss),
            (t.Quint = rs),
            (t.Sine = ds),
            (t.SteppedEase = ls),
            (t.Strong = as),
            (t.TimelineLite = ze),
            (t.TimelineMax = ze),
            (t.TweenLite = Ge),
            (t.TweenMax = Gs),
            (t.default = Rs),
            (t.gsap = Rs),
            "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", { value: !0 }) : delete t.default;
    }),
    (function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = t || self).Swiper = e());
    })(this, function () {
        "use strict";
        function t(t, e) {
            for (var i = 0; i < e.length; i++) {
                var s = e[i];
                (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
            }
        }
        function e() {
            return (e =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
                    }
                    return t;
                }).apply(this, arguments);
        }
        function i(t) {
            return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object;
        }
        function s(t, e) {
            void 0 === t && (t = {}),
                void 0 === e && (e = {}),
                Object.keys(e).forEach(function (r) {
                    void 0 === t[r] ? (t[r] = e[r]) : i(e[r]) && i(t[r]) && Object.keys(e[r]).length > 0 && s(t[r], e[r]);
                });
        }
        var r = {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: "" },
            querySelector: function () {
                return null;
            },
            querySelectorAll: function () {
                return [];
            },
            getElementById: function () {
                return null;
            },
            createEvent: function () {
                return { initEvent: function () {} };
            },
            createElement: function () {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function () {},
                    getElementsByTagName: function () {
                        return [];
                    },
                };
            },
            createElementNS: function () {
                return {};
            },
            importNode: function () {
                return null;
            },
            location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
        };
        function a() {
            var t = "undefined" != typeof document ? document : {};
            return s(t, r), t;
        }
        var n = {
            document: r,
            navigator: { userAgent: "" },
            location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
            history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
            CustomEvent: function () {
                return this;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
                return {
                    getPropertyValue: function () {
                        return "";
                    },
                };
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {},
            matchMedia: function () {
                return {};
            },
            requestAnimationFrame: function (t) {
                return "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0);
            },
            cancelAnimationFrame: function (t) {
                "undefined" != typeof setTimeout && clearTimeout(t);
            },
        };
        function o() {
            var t = "undefined" != typeof window ? window : {};
            return s(t, n), t;
        }
        function l(t) {
            return (l = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                  })(t);
        }
        function h(t, e) {
            return (h =
                Object.setPrototypeOf ||
                function (t, e) {
                    return (t.__proto__ = e), t;
                })(t, e);
        }
        function d() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
            } catch (t) {
                return !1;
            }
        }
        function u(t, e, i) {
            return (u = d()
                ? Reflect.construct
                : function (t, e, i) {
                      var s = [null];
                      s.push.apply(s, e);
                      var r = new (Function.bind.apply(t, s))();
                      return i && h(r, i.prototype), r;
                  }).apply(null, arguments);
        }
        function p(t) {
            var e = "function" == typeof Map ? new Map() : void 0;
            return (p = function (t) {
                if (null === t || ((i = t), -1 === Function.toString.call(i).indexOf("[native code]"))) return t;
                var i;
                if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                if (void 0 !== e) {
                    if (e.has(t)) return e.get(t);
                    e.set(t, s);
                }
                function s() {
                    return u(t, arguments, l(this).constructor);
                }
                return (s.prototype = Object.create(t.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } })), h(s, t);
            })(t);
        }
        var c = (function (t) {
            var e, i;
            function s(e) {
                return t.call.apply(t, [this].concat(e)) || this;
            }
            return (i = t), ((e = s).prototype = Object.create(i.prototype)), (e.prototype.constructor = e), (e.__proto__ = i), s;
        })(p(Array));
        function f(t) {
            void 0 === t && (t = []);
            var e = [];
            return (
                t.forEach(function (t) {
                    Array.isArray(t) ? e.push.apply(e, f(t)) : e.push(t);
                }),
                e
            );
        }
        function m(t, e) {
            return Array.prototype.filter.call(t, e);
        }
        function v(t, e) {
            var i = o(),
                s = a(),
                r = [];
            if (!e && t instanceof c) return t;
            if (!t) return new c(r);
            if ("string" == typeof t) {
                var n = t.trim();
                if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                    var l = "div";
                    0 === n.indexOf("<li") && (l = "ul"),
                        0 === n.indexOf("<tr") && (l = "tbody"),
                        (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (l = "tr"),
                        0 === n.indexOf("<tbody") && (l = "table"),
                        0 === n.indexOf("<option") && (l = "select");
                    var h = s.createElement(l);
                    h.innerHTML = n;
                    for (var d = 0; d < h.childNodes.length; d += 1) r.push(h.childNodes[d]);
                } else
                    r = (function (t, e) {
                        if ("string" != typeof t) return [t];
                        for (var i = [], s = e.querySelectorAll(t), r = 0; r < s.length; r += 1) i.push(s[r]);
                        return i;
                    })(t.trim(), e || s);
            } else if (t.nodeType || t === i || t === s) r.push(t);
            else if (Array.isArray(t)) {
                if (t instanceof c) return t;
                r = t;
            }
            return new c(
                (function (t) {
                    for (var e = [], i = 0; i < t.length; i += 1) -1 === e.indexOf(t[i]) && e.push(t[i]);
                    return e;
                })(r)
            );
        }
        v.fn = c.prototype;
        var g,
            y,
            b,
            _ = {
                addClass: function () {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    var s = f(
                        e.map(function (t) {
                            return t.split(" ");
                        })
                    );
                    return (
                        this.forEach(function (t) {
                            var e;
                            (e = t.classList).add.apply(e, s);
                        }),
                        this
                    );
                },
                removeClass: function () {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    var s = f(
                        e.map(function (t) {
                            return t.split(" ");
                        })
                    );
                    return (
                        this.forEach(function (t) {
                            var e;
                            (e = t.classList).remove.apply(e, s);
                        }),
                        this
                    );
                },
                hasClass: function () {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    var s = f(
                        e.map(function (t) {
                            return t.split(" ");
                        })
                    );
                    return (
                        m(this, function (t) {
                            return (
                                s.filter(function (e) {
                                    return t.classList.contains(e);
                                }).length > 0
                            );
                        }).length > 0
                    );
                },
                toggleClass: function () {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    var s = f(
                        e.map(function (t) {
                            return t.split(" ");
                        })
                    );
                    this.forEach(function (t) {
                        s.forEach(function (e) {
                            t.classList.toggle(e);
                        });
                    });
                },
                attr: function (t, e) {
                    if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
                    for (var i = 0; i < this.length; i += 1)
                        if (2 === arguments.length) this[i].setAttribute(t, e);
                        else for (var s in t) (this[i][s] = t[s]), this[i].setAttribute(s, t[s]);
                    return this;
                },
                removeAttr: function (t) {
                    for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
                    return this;
                },
                transform: function (t) {
                    for (var e = 0; e < this.length; e += 1) this[e].style.transform = t;
                    return this;
                },
                transition: function (t) {
                    for (var e = 0; e < this.length; e += 1) this[e].style.transition = "string" != typeof t ? t + "ms" : t;
                    return this;
                },
                on: function () {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    var s = e[0],
                        r = e[1],
                        a = e[2],
                        n = e[3];
                    function o(t) {
                        var e = t.target;
                        if (e) {
                            var i = t.target.dom7EventData || [];
                            if ((i.indexOf(t) < 0 && i.unshift(t), v(e).is(r))) a.apply(e, i);
                            else for (var s = v(e).parents(), n = 0; n < s.length; n += 1) v(s[n]).is(r) && a.apply(s[n], i);
                        }
                    }
                    function l(t) {
                        var e = (t && t.target && t.target.dom7EventData) || [];
                        e.indexOf(t) < 0 && e.unshift(t), a.apply(this, e);
                    }
                    "function" == typeof e[1] && ((s = e[0]), (a = e[1]), (n = e[2]), (r = void 0)), n || (n = !1);
                    for (var h, d = s.split(" "), u = 0; u < this.length; u += 1) {
                        var p = this[u];
                        if (r)
                            for (h = 0; h < d.length; h += 1) {
                                var c = d[h];
                                p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[c] || (p.dom7LiveListeners[c] = []), p.dom7LiveListeners[c].push({ listener: a, proxyListener: o }), p.addEventListener(c, o, n);
                            }
                        else
                            for (h = 0; h < d.length; h += 1) {
                                var f = d[h];
                                p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[f] || (p.dom7Listeners[f] = []), p.dom7Listeners[f].push({ listener: a, proxyListener: l }), p.addEventListener(f, l, n);
                            }
                    }
                    return this;
                },
                off: function () {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    var s = e[0],
                        r = e[1],
                        a = e[2],
                        n = e[3];
                    "function" == typeof e[1] && ((s = e[0]), (a = e[1]), (n = e[2]), (r = void 0)), n || (n = !1);
                    for (var o = s.split(" "), l = 0; l < o.length; l += 1)
                        for (var h = o[l], d = 0; d < this.length; d += 1) {
                            var u = this[d],
                                p = void 0;
                            if ((!r && u.dom7Listeners ? (p = u.dom7Listeners[h]) : r && u.dom7LiveListeners && (p = u.dom7LiveListeners[h]), p && p.length))
                                for (var c = p.length - 1; c >= 0; c -= 1) {
                                    var f = p[c];
                                    (a && f.listener === a) || (a && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === a)
                                        ? (u.removeEventListener(h, f.proxyListener, n), p.splice(c, 1))
                                        : a || (u.removeEventListener(h, f.proxyListener, n), p.splice(c, 1));
                                }
                        }
                    return this;
                },
                trigger: function () {
                    for (var t = o(), e = arguments.length, i = new Array(e), s = 0; s < e; s++) i[s] = arguments[s];
                    for (var r = i[0].split(" "), a = i[1], n = 0; n < r.length; n += 1)
                        for (var l = r[n], h = 0; h < this.length; h += 1) {
                            var d = this[h];
                            if (t.CustomEvent) {
                                var u = new t.CustomEvent(l, { detail: a, bubbles: !0, cancelable: !0 });
                                (d.dom7EventData = i.filter(function (t, e) {
                                    return e > 0;
                                })),
                                    d.dispatchEvent(u),
                                    (d.dom7EventData = []),
                                    delete d.dom7EventData;
                            }
                        }
                    return this;
                },
                transitionEnd: function (t) {
                    var e = this;
                    return (
                        t &&
                            e.on("transitionend", function i(s) {
                                s.target === this && (t.call(this, s), e.off("transitionend", i));
                            }),
                        this
                    );
                },
                outerWidth: function (t) {
                    if (this.length > 0) {
                        if (t) {
                            var e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
                        }
                        return this[0].offsetWidth;
                    }
                    return null;
                },
                outerHeight: function (t) {
                    if (this.length > 0) {
                        if (t) {
                            var e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
                        }
                        return this[0].offsetHeight;
                    }
                    return null;
                },
                styles: function () {
                    var t = o();
                    return this[0] ? t.getComputedStyle(this[0], null) : {};
                },
                offset: function () {
                    if (this.length > 0) {
                        var t = o(),
                            e = a(),
                            i = this[0],
                            s = i.getBoundingClientRect(),
                            r = e.body,
                            n = i.clientTop || r.clientTop || 0,
                            l = i.clientLeft || r.clientLeft || 0,
                            h = i === t ? t.scrollY : i.scrollTop,
                            d = i === t ? t.scrollX : i.scrollLeft;
                        return { top: s.top + h - n, left: s.left + d - l };
                    }
                    return null;
                },
                css: function (t, e) {
                    var i,
                        s = o();
                    if (1 === arguments.length) {
                        if ("string" != typeof t) {
                            for (i = 0; i < this.length; i += 1) for (var r in t) this[i].style[r] = t[r];
                            return this;
                        }
                        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(t);
                    }
                    if (2 === arguments.length && "string" == typeof t) {
                        for (i = 0; i < this.length; i += 1) this[i].style[t] = e;
                        return this;
                    }
                    return this;
                },
                each: function (t) {
                    return t
                        ? (this.forEach(function (e, i) {
                              t.apply(e, [e, i]);
                          }),
                          this)
                        : this;
                },
                html: function (t) {
                    if (void 0 === t) return this[0] ? this[0].innerHTML : null;
                    for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t;
                    return this;
                },
                text: function (t) {
                    if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
                    for (var e = 0; e < this.length; e += 1) this[e].textContent = t;
                    return this;
                },
                is: function (t) {
                    var e,
                        i,
                        s = o(),
                        r = a(),
                        n = this[0];
                    if (!n || void 0 === t) return !1;
                    if ("string" == typeof t) {
                        if (n.matches) return n.matches(t);
                        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(t);
                        if (n.msMatchesSelector) return n.msMatchesSelector(t);
                        for (e = v(t), i = 0; i < e.length; i += 1) if (e[i] === n) return !0;
                        return !1;
                    }
                    if (t === r) return n === r;
                    if (t === s) return n === s;
                    if (t.nodeType || t instanceof c) {
                        for (e = t.nodeType ? [t] : t, i = 0; i < e.length; i += 1) if (e[i] === n) return !0;
                        return !1;
                    }
                    return !1;
                },
                index: function () {
                    var t,
                        e = this[0];
                    if (e) {
                        for (t = 0; null !== (e = e.previousSibling); ) 1 === e.nodeType && (t += 1);
                        return t;
                    }
                },
                eq: function (t) {
                    if (void 0 === t) return this;
                    var e = this.length;
                    if (t > e - 1) return v([]);
                    if (t < 0) {
                        var i = e + t;
                        return v(i < 0 ? [] : [this[i]]);
                    }
                    return v([this[t]]);
                },
                append: function () {
                    for (var t, e = a(), i = 0; i < arguments.length; i += 1) {
                        t = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                        for (var s = 0; s < this.length; s += 1)
                            if ("string" == typeof t) {
                                var r = e.createElement("div");
                                for (r.innerHTML = t; r.firstChild; ) this[s].appendChild(r.firstChild);
                            } else if (t instanceof c) for (var n = 0; n < t.length; n += 1) this[s].appendChild(t[n]);
                            else this[s].appendChild(t);
                    }
                    return this;
                },
                prepend: function (t) {
                    var e,
                        i,
                        s = a();
                    for (e = 0; e < this.length; e += 1)
                        if ("string" == typeof t) {
                            var r = s.createElement("div");
                            for (r.innerHTML = t, i = r.childNodes.length - 1; i >= 0; i -= 1) this[e].insertBefore(r.childNodes[i], this[e].childNodes[0]);
                        } else if (t instanceof c) for (i = 0; i < t.length; i += 1) this[e].insertBefore(t[i], this[e].childNodes[0]);
                        else this[e].insertBefore(t, this[e].childNodes[0]);
                    return this;
                },
                next: function (t) {
                    return this.length > 0 ? (t ? (this[0].nextElementSibling && v(this[0].nextElementSibling).is(t) ? v([this[0].nextElementSibling]) : v([])) : this[0].nextElementSibling ? v([this[0].nextElementSibling]) : v([])) : v([]);
                },
                nextAll: function (t) {
                    var e = [],
                        i = this[0];
                    if (!i) return v([]);
                    for (; i.nextElementSibling; ) {
                        var s = i.nextElementSibling;
                        t ? v(s).is(t) && e.push(s) : e.push(s), (i = s);
                    }
                    return v(e);
                },
                prev: function (t) {
                    if (this.length > 0) {
                        var e = this[0];
                        return t ? (e.previousElementSibling && v(e.previousElementSibling).is(t) ? v([e.previousElementSibling]) : v([])) : e.previousElementSibling ? v([e.previousElementSibling]) : v([]);
                    }
                    return v([]);
                },
                prevAll: function (t) {
                    var e = [],
                        i = this[0];
                    if (!i) return v([]);
                    for (; i.previousElementSibling; ) {
                        var s = i.previousElementSibling;
                        t ? v(s).is(t) && e.push(s) : e.push(s), (i = s);
                    }
                    return v(e);
                },
                parent: function (t) {
                    for (var e = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (t ? v(this[i].parentNode).is(t) && e.push(this[i].parentNode) : e.push(this[i].parentNode));
                    return v(e);
                },
                parents: function (t) {
                    for (var e = [], i = 0; i < this.length; i += 1) for (var s = this[i].parentNode; s; ) t ? v(s).is(t) && e.push(s) : e.push(s), (s = s.parentNode);
                    return v(e);
                },
                closest: function (t) {
                    var e = this;
                    return void 0 === t ? v([]) : (e.is(t) || (e = e.parents(t).eq(0)), e);
                },
                find: function (t) {
                    for (var e = [], i = 0; i < this.length; i += 1) for (var s = this[i].querySelectorAll(t), r = 0; r < s.length; r += 1) e.push(s[r]);
                    return v(e);
                },
                children: function (t) {
                    for (var e = [], i = 0; i < this.length; i += 1) for (var s = this[i].children, r = 0; r < s.length; r += 1) (t && !v(s[r]).is(t)) || e.push(s[r]);
                    return v(e);
                },
                filter: function (t) {
                    return v(m(this, t));
                },
                remove: function () {
                    for (var t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
                    return this;
                },
            };
        function w(t, e) {
            return void 0 === e && (e = 0), setTimeout(t, e);
        }
        function x() {
            return Date.now();
        }
        function E(t, e) {
            void 0 === e && (e = "x");
            var i,
                s,
                r,
                a = o(),
                n = a.getComputedStyle(t, null);
            return (
                a.WebKitCSSMatrix
                    ? ((s = n.transform || n.webkitTransform).split(",").length > 6 &&
                          (s = s
                              .split(", ")
                              .map(function (t) {
                                  return t.replace(",", ".");
                              })
                              .join(", ")),
                      (r = new a.WebKitCSSMatrix("none" === s ? "" : s)))
                    : (i = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                "x" === e && (s = a.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                "y" === e && (s = a.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                s || 0
            );
        }
        function T(t) {
            return "object" == typeof t && null !== t && t.constructor && t.constructor === Object;
        }
        function M() {
            for (var t = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = 1; e < arguments.length; e += 1) {
                var i = e < 0 || arguments.length <= e ? void 0 : arguments[e];
                if (null != i)
                    for (var s = Object.keys(Object(i)), r = 0, a = s.length; r < a; r += 1) {
                        var n = s[r],
                            o = Object.getOwnPropertyDescriptor(i, n);
                        void 0 !== o && o.enumerable && (T(t[n]) && T(i[n]) ? M(t[n], i[n]) : !T(t[n]) && T(i[n]) ? ((t[n] = {}), M(t[n], i[n])) : (t[n] = i[n]));
                    }
            }
            return t;
        }
        function S(t, e) {
            Object.keys(e).forEach(function (i) {
                T(e[i]) &&
                    Object.keys(e[i]).forEach(function (s) {
                        "function" == typeof e[i][s] && (e[i][s] = e[i][s].bind(t));
                    }),
                    (t[i] = e[i]);
            });
        }
        function C() {
            return (
                g ||
                    (g = (function () {
                        var t = o(),
                            e = a();
                        return {
                            touch: !!("ontouchstart" in t || (t.DocumentTouch && e instanceof t.DocumentTouch)),
                            pointerEvents: !!t.PointerEvent && "maxTouchPoints" in t.navigator && t.navigator.maxTouchPoints >= 0,
                            observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
                            passiveListener: (function () {
                                var e = !1;
                                try {
                                    var i = Object.defineProperty({}, "passive", {
                                        get: function () {
                                            e = !0;
                                        },
                                    });
                                    t.addEventListener("testPassiveListener", null, i);
                                } catch (t) {}
                                return e;
                            })(),
                            gestures: "ongesturestart" in t,
                        };
                    })()),
                g
            );
        }
        function B(t) {
            return (
                void 0 === t && (t = {}),
                y ||
                    (y = (function (t) {
                        var e = (void 0 === t ? {} : t).userAgent,
                            i = C(),
                            s = o(),
                            r = s.navigator.platform,
                            a = e || s.navigator.userAgent,
                            n = { ios: !1, android: !1 },
                            l = s.screen.width,
                            h = s.screen.height,
                            d = a.match(/(Android);?[\s\/]+([\d.]+)?/),
                            u = a.match(/(iPad).*OS\s([\d_]+)/),
                            p = a.match(/(iPod)(.*OS\s([\d_]+))?/),
                            c = !u && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                            f = "Win32" === r,
                            m = "MacIntel" === r;
                        return (
                            !u &&
                                m &&
                                i.touch &&
                                ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768"].indexOf(l + "x" + h) >= 0 &&
                                ((u = a.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), (m = !1)),
                            d && !f && ((n.os = "android"), (n.android = !0)),
                            (u || c || p) && ((n.os = "ios"), (n.ios = !0)),
                            n
                        );
                    })(t)),
                y
            );
        }
        function k() {
            return (
                b ||
                    (b = (function () {
                        var t,
                            e = o();
                        return {
                            isEdge: !!e.navigator.userAgent.match(/Edge/g),
                            isSafari: ((t = e.navigator.userAgent.toLowerCase()), t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0),
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                        };
                    })()),
                b
            );
        }
        function P(t) {
            var e = a(),
                i = o(),
                s = this.touchEventsData,
                r = this.params,
                n = this.touches;
            if (!this.animating || !r.preventInteractionOnTransition) {
                var l = t;
                l.originalEvent && (l = l.originalEvent);
                var h = v(l.target);
                if (
                    ("wrapper" !== r.touchEventsTarget || h.closest(this.wrapperEl).length) &&
                    ((s.isTouchEvent = "touchstart" === l.type), (s.isTouchEvent || !("which" in l) || 3 !== l.which) && !((!s.isTouchEvent && "button" in l && l.button > 0) || (s.isTouched && s.isMoved)))
                )
                    if (r.noSwiping && h.closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) this.allowClick = !0;
                    else if (!r.swipeHandler || h.closest(r.swipeHandler)[0]) {
                        (n.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX), (n.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
                        var d = n.currentX,
                            u = n.currentY,
                            p = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                            c = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                        if (!p || !(d <= c || d >= i.screen.width - c)) {
                            if (
                                (M(s, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                                (n.startX = d),
                                (n.startY = u),
                                (s.touchStartTime = x()),
                                (this.allowClick = !0),
                                this.updateSize(),
                                (this.swipeDirection = void 0),
                                r.threshold > 0 && (s.allowThresholdMove = !1),
                                "touchstart" !== l.type)
                            ) {
                                var f = !0;
                                h.is(s.formElements) && (f = !1), e.activeElement && v(e.activeElement).is(s.formElements) && e.activeElement !== h[0] && e.activeElement.blur();
                                var m = f && this.allowTouchMove && r.touchStartPreventDefault;
                                (r.touchStartForcePreventDefault || m) && l.preventDefault();
                            }
                            this.emit("touchStart", l);
                        }
                    }
            }
        }
        function O(t) {
            var e = a(),
                i = this.touchEventsData,
                s = this.params,
                r = this.touches,
                n = this.rtlTranslate,
                o = t;
            if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
                if (!i.isTouchEvent || "touchmove" === o.type) {
                    var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                        h = "touchmove" === o.type ? l.pageX : o.pageX,
                        d = "touchmove" === o.type ? l.pageY : o.pageY;
                    if (o.preventedByNestedSwiper) return (r.startX = h), void (r.startY = d);
                    if (!this.allowTouchMove) return (this.allowClick = !1), void (i.isTouched && (M(r, { startX: h, startY: d, currentX: h, currentY: d }), (i.touchStartTime = x())));
                    if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                        if (this.isVertical()) {
                            if ((d < r.startY && this.translate <= this.maxTranslate()) || (d > r.startY && this.translate >= this.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
                        } else if ((h < r.startX && this.translate <= this.maxTranslate()) || (h > r.startX && this.translate >= this.minTranslate())) return;
                    if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && v(o.target).is(i.formElements)) return (i.isMoved = !0), void (this.allowClick = !1);
                    if ((i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1))) {
                        (r.currentX = h), (r.currentY = d);
                        var u,
                            p = r.currentX - r.startX,
                            c = r.currentY - r.startY;
                        if (!(this.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < this.params.threshold))
                            if (
                                (void 0 === i.isScrolling &&
                                    ((this.isHorizontal() && r.currentY === r.startY) || (this.isVertical() && r.currentX === r.startX)
                                        ? (i.isScrolling = !1)
                                        : p * p + c * c >= 25 && ((u = (180 * Math.atan2(Math.abs(c), Math.abs(p))) / Math.PI), (i.isScrolling = this.isHorizontal() ? u > s.touchAngle : 90 - u > s.touchAngle))),
                                i.isScrolling && this.emit("touchMoveOpposite", o),
                                void 0 === i.startMoving && ((r.currentX === r.startX && r.currentY === r.startY) || (i.startMoving = !0)),
                                i.isScrolling)
                            )
                                i.isTouched = !1;
                            else if (i.startMoving) {
                                (this.allowClick = !1),
                                    !s.cssMode && o.cancelable && o.preventDefault(),
                                    s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                                    i.isMoved ||
                                        (s.loop && this.loopFix(),
                                        (i.startTranslate = this.getTranslate()),
                                        this.setTransition(0),
                                        this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                        (i.allowMomentumBounce = !1),
                                        !s.grabCursor || (!0 !== this.allowSlideNext && !0 !== this.allowSlidePrev) || this.setGrabCursor(!0),
                                        this.emit("sliderFirstMove", o)),
                                    this.emit("sliderMove", o),
                                    (i.isMoved = !0);
                                var f = this.isHorizontal() ? p : c;
                                (r.diff = f), (f *= s.touchRatio), n && (f = -f), (this.swipeDirection = f > 0 ? "prev" : "next"), (i.currentTranslate = f + i.startTranslate);
                                var m = !0,
                                    g = s.resistanceRatio;
                                if (
                                    (s.touchReleaseOnEdges && (g = 0),
                                    f > 0 && i.currentTranslate > this.minTranslate()
                                        ? ((m = !1), s.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g)))
                                        : f < 0 && i.currentTranslate < this.maxTranslate() && ((m = !1), s.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))),
                                    m && (o.preventedByNestedSwiper = !0),
                                    !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                    !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                    s.threshold > 0)
                                ) {
                                    if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                    if (!i.allowThresholdMove)
                                        return (
                                            (i.allowThresholdMove = !0),
                                            (r.startX = r.currentX),
                                            (r.startY = r.currentY),
                                            (i.currentTranslate = i.startTranslate),
                                            void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                        );
                                }
                                s.followFinger &&
                                    !s.cssMode &&
                                    ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()),
                                    s.freeMode &&
                                        (0 === i.velocities.length && i.velocities.push({ position: r[this.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }),
                                        i.velocities.push({ position: r[this.isHorizontal() ? "currentX" : "currentY"], time: x() })),
                                    this.updateProgress(i.currentTranslate),
                                    this.setTranslate(i.currentTranslate));
                            }
                    }
                }
            } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
        }
        function L(t) {
            var e = this,
                i = e.touchEventsData,
                s = e.params,
                r = e.touches,
                a = e.rtlTranslate,
                n = e.$wrapperEl,
                o = e.slidesGrid,
                l = e.snapGrid,
                h = t;
            if ((h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", h), (i.allowTouchCallbacks = !1), !i.isTouched))
                return i.isMoved && s.grabCursor && e.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1);
            s.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
            var d,
                u = x(),
                p = u - i.touchStartTime;
            if (
                (e.allowClick && (e.updateClickedSlide(h), e.emit("tap click", h), p < 300 && u - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", h)),
                (i.lastClickTime = x()),
                w(function () {
                    e.destroyed || (e.allowClick = !0);
                }),
                !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate)
            )
                return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
            if (((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1), (d = s.followFinger ? (a ? e.translate : -e.translate) : -i.currentTranslate), !s.cssMode))
                if (s.freeMode) {
                    if (d < -e.minTranslate()) return void e.slideTo(e.activeIndex);
                    if (d > -e.maxTranslate()) return void (e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1));
                    if (s.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var c = i.velocities.pop(),
                                f = i.velocities.pop(),
                                m = c.position - f.position,
                                v = c.time - f.time;
                            (e.velocity = m / v), (e.velocity /= 2), Math.abs(e.velocity) < s.freeModeMinimumVelocity && (e.velocity = 0), (v > 150 || x() - c.time > 300) && (e.velocity = 0);
                        } else e.velocity = 0;
                        (e.velocity *= s.freeModeMomentumVelocityRatio), (i.velocities.length = 0);
                        var g = 1e3 * s.freeModeMomentumRatio,
                            y = e.velocity * g,
                            b = e.translate + y;
                        a && (b = -b);
                        var _,
                            E,
                            T = !1,
                            M = 20 * Math.abs(e.velocity) * s.freeModeMomentumBounceRatio;
                        if (b < e.maxTranslate())
                            s.freeModeMomentumBounce ? (b + e.maxTranslate() < -M && (b = e.maxTranslate() - M), (_ = e.maxTranslate()), (T = !0), (i.allowMomentumBounce = !0)) : (b = e.maxTranslate()),
                                s.loop && s.centeredSlides && (E = !0);
                        else if (b > e.minTranslate())
                            s.freeModeMomentumBounce ? (b - e.minTranslate() > M && (b = e.minTranslate() + M), (_ = e.minTranslate()), (T = !0), (i.allowMomentumBounce = !0)) : (b = e.minTranslate()),
                                s.loop && s.centeredSlides && (E = !0);
                        else if (s.freeModeSticky) {
                            for (var S, C = 0; C < l.length; C += 1)
                                if (l[C] > -b) {
                                    S = C;
                                    break;
                                }
                            b = -(b = Math.abs(l[S] - b) < Math.abs(l[S - 1] - b) || "next" === e.swipeDirection ? l[S] : l[S - 1]);
                        }
                        if (
                            (E &&
                                e.once("transitionEnd", function () {
                                    e.loopFix();
                                }),
                            0 !== e.velocity)
                        ) {
                            if (((g = a ? Math.abs((-b - e.translate) / e.velocity) : Math.abs((b - e.translate) / e.velocity)), s.freeModeSticky)) {
                                var B = Math.abs((a ? -b : b) - e.translate),
                                    k = e.slidesSizesGrid[e.activeIndex];
                                g = B < k ? s.speed : B < 2 * k ? 1.5 * s.speed : 2.5 * s.speed;
                            }
                        } else if (s.freeModeSticky) return void e.slideToClosest();
                        s.freeModeMomentumBounce && T
                            ? (e.updateProgress(_),
                              e.setTransition(g),
                              e.setTranslate(b),
                              e.transitionStart(!0, e.swipeDirection),
                              (e.animating = !0),
                              n.transitionEnd(function () {
                                  e &&
                                      !e.destroyed &&
                                      i.allowMomentumBounce &&
                                      (e.emit("momentumBounce"),
                                      e.setTransition(s.speed),
                                      setTimeout(function () {
                                          e.setTranslate(_),
                                              n.transitionEnd(function () {
                                                  e && !e.destroyed && e.transitionEnd();
                                              });
                                      }, 0));
                              }))
                            : e.velocity
                            ? (e.updateProgress(b),
                              e.setTransition(g),
                              e.setTranslate(b),
                              e.transitionStart(!0, e.swipeDirection),
                              e.animating ||
                                  ((e.animating = !0),
                                  n.transitionEnd(function () {
                                      e && !e.destroyed && e.transitionEnd();
                                  })))
                            : e.updateProgress(b),
                            e.updateActiveIndex(),
                            e.updateSlidesClasses();
                    } else if (s.freeModeSticky) return void e.slideToClosest();
                    (!s.freeModeMomentum || p >= s.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
                } else {
                    for (var P = 0, O = e.slidesSizesGrid[0], L = 0; L < o.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                        var A = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                        void 0 !== o[L + A] ? d >= o[L] && d < o[L + A] && ((P = L), (O = o[L + A] - o[L])) : d >= o[L] && ((P = L), (O = o[o.length - 1] - o[o.length - 2]));
                    }
                    var z = (d - o[P]) / O,
                        I = P < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                    if (p > s.longSwipesMs) {
                        if (!s.longSwipes) return void e.slideTo(e.activeIndex);
                        "next" === e.swipeDirection && (z >= s.longSwipesRatio ? e.slideTo(P + I) : e.slideTo(P)), "prev" === e.swipeDirection && (z > 1 - s.longSwipesRatio ? e.slideTo(P + I) : e.slideTo(P));
                    } else {
                        if (!s.shortSwipes) return void e.slideTo(e.activeIndex);
                        !e.navigation || (h.target !== e.navigation.nextEl && h.target !== e.navigation.prevEl)
                            ? ("next" === e.swipeDirection && e.slideTo(P + I), "prev" === e.swipeDirection && e.slideTo(P))
                            : h.target === e.navigation.nextEl
                            ? e.slideTo(P + I)
                            : e.slideTo(P);
                    }
                }
        }
        function A() {
            var t = this.params,
                e = this.el;
            if (!e || 0 !== e.offsetWidth) {
                t.breakpoints && this.setBreakpoint();
                var i = this.allowSlideNext,
                    s = this.allowSlidePrev,
                    r = this.snapGrid;
                (this.allowSlideNext = !0),
                    (this.allowSlidePrev = !0),
                    this.updateSize(),
                    this.updateSlides(),
                    this.updateSlidesClasses(),
                    ("auto" === t.slidesPerView || t.slidesPerView > 1) && this.isEnd && !this.isBeginning && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0),
                    this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(),
                    (this.allowSlidePrev = s),
                    (this.allowSlideNext = i),
                    this.params.watchOverflow && r !== this.snapGrid && this.checkOverflow();
            }
        }
        function z(t) {
            this.allowClick || (this.params.preventClicks && t.preventDefault(), this.params.preventClicksPropagation && this.animating && (t.stopPropagation(), t.stopImmediatePropagation()));
        }
        function I() {
            var t = this.wrapperEl,
                e = this.rtlTranslate;
            (this.previousTranslate = this.translate),
                this.isHorizontal() ? (this.translate = e ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft) : (this.translate = -t.scrollTop),
                -0 === this.translate && (this.translate = 0),
                this.updateActiveIndex(),
                this.updateSlidesClasses();
            var i = this.maxTranslate() - this.minTranslate();
            (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(e ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
        }
        Object.keys(_).forEach(function (t) {
            v.fn[t] = _[t];
        });
        var F = !1;
        function D() {}
        var N = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: 0.02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: 0.5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: 0.85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1,
            },
            $ = {
                modular: {
                    useParams: function (t) {
                        var e = this;
                        e.modules &&
                            Object.keys(e.modules).forEach(function (i) {
                                var s = e.modules[i];
                                s.params && M(t, s.params);
                            });
                    },
                    useModules: function (t) {
                        void 0 === t && (t = {});
                        var e = this;
                        e.modules &&
                            Object.keys(e.modules).forEach(function (i) {
                                var s = e.modules[i],
                                    r = t[i] || {};
                                s.on &&
                                    e.on &&
                                    Object.keys(s.on).forEach(function (t) {
                                        e.on(t, s.on[t]);
                                    }),
                                    s.create && s.create.bind(e)(r);
                            });
                    },
                },
                eventsEmitter: {
                    on: function (t, e, i) {
                        var s = this;
                        if ("function" != typeof e) return s;
                        var r = i ? "unshift" : "push";
                        return (
                            t.split(" ").forEach(function (t) {
                                s.eventsListeners[t] || (s.eventsListeners[t] = []), s.eventsListeners[t][r](e);
                            }),
                            s
                        );
                    },
                    once: function (t, e, i) {
                        var s = this;
                        if ("function" != typeof e) return s;
                        function r() {
                            s.off(t, r), r.__emitterProxy && delete r.__emitterProxy;
                            for (var i = arguments.length, a = new Array(i), n = 0; n < i; n++) a[n] = arguments[n];
                            e.apply(s, a);
                        }
                        return (r.__emitterProxy = e), s.on(t, r, i);
                    },
                    onAny: function (t, e) {
                        if ("function" != typeof t) return this;
                        var i = e ? "unshift" : "push";
                        return this.eventsAnyListeners.indexOf(t) < 0 && this.eventsAnyListeners[i](t), this;
                    },
                    offAny: function (t) {
                        if (!this.eventsAnyListeners) return this;
                        var e = this.eventsAnyListeners.indexOf(t);
                        return e >= 0 && this.eventsAnyListeners.splice(e, 1), this;
                    },
                    off: function (t, e) {
                        var i = this;
                        return i.eventsListeners
                            ? (t.split(" ").forEach(function (t) {
                                  void 0 === e
                                      ? (i.eventsListeners[t] = [])
                                      : i.eventsListeners[t] &&
                                        i.eventsListeners[t].forEach(function (s, r) {
                                            (s === e || (s.__emitterProxy && s.__emitterProxy === e)) && i.eventsListeners[t].splice(r, 1);
                                        });
                              }),
                              i)
                            : i;
                    },
                    emit: function () {
                        var t,
                            e,
                            i,
                            s = this;
                        if (!s.eventsListeners) return s;
                        for (var r = arguments.length, a = new Array(r), n = 0; n < r; n++) a[n] = arguments[n];
                        "string" == typeof a[0] || Array.isArray(a[0]) ? ((t = a[0]), (e = a.slice(1, a.length)), (i = s)) : ((t = a[0].events), (e = a[0].data), (i = a[0].context || s)), e.unshift(i);
                        var o = Array.isArray(t) ? t : t.split(" ");
                        return (
                            o.forEach(function (t) {
                                if (s.eventsListeners && s.eventsListeners[t]) {
                                    var r = [];
                                    s.eventsListeners[t].forEach(function (t) {
                                        r.push(t);
                                    }),
                                        r.forEach(function (t) {
                                            t.apply(i, e);
                                        });
                                }
                            }),
                            s
                        );
                    },
                },
                update: {
                    updateSize: function () {
                        var t,
                            e,
                            i = this.$el;
                        (t = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth),
                            (e = void 0 !== this.params.height && null !== this.params.width ? this.params.height : i[0].clientHeight),
                            (0 === t && this.isHorizontal()) ||
                                (0 === e && this.isVertical()) ||
                                ((t = t - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10)),
                                (e = e - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10)),
                                Number.isNaN(t) && (t = 0),
                                Number.isNaN(e) && (e = 0),
                                M(this, { width: t, height: e, size: this.isHorizontal() ? t : e }));
                    },
                    updateSlides: function () {
                        var t = o(),
                            e = this.params,
                            i = this.$wrapperEl,
                            s = this.size,
                            r = this.rtlTranslate,
                            a = this.wrongRTL,
                            n = this.virtual && e.virtual.enabled,
                            l = n ? this.virtual.slides.length : this.slides.length,
                            h = i.children("." + this.params.slideClass),
                            d = n ? this.virtual.slides.length : h.length,
                            u = [],
                            p = [],
                            c = [];
                        function f(t, i) {
                            return !e.cssMode || i !== h.length - 1;
                        }
                        var m = e.slidesOffsetBefore;
                        "function" == typeof m && (m = e.slidesOffsetBefore.call(this));
                        var v = e.slidesOffsetAfter;
                        "function" == typeof v && (v = e.slidesOffsetAfter.call(this));
                        var g = this.snapGrid.length,
                            y = this.snapGrid.length,
                            b = e.spaceBetween,
                            _ = -m,
                            w = 0,
                            x = 0;
                        if (void 0 !== s) {
                            var E, T;
                            "string" == typeof b && b.indexOf("%") >= 0 && (b = (parseFloat(b.replace("%", "")) / 100) * s),
                                (this.virtualSize = -b),
                                r ? h.css({ marginLeft: "", marginTop: "" }) : h.css({ marginRight: "", marginBottom: "" }),
                                e.slidesPerColumn > 1 &&
                                    ((E = Math.floor(d / e.slidesPerColumn) === d / this.params.slidesPerColumn ? d : Math.ceil(d / e.slidesPerColumn) * e.slidesPerColumn),
                                    "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
                            for (var S, C = e.slidesPerColumn, B = E / C, k = Math.floor(d / e.slidesPerColumn), P = 0; P < d; P += 1) {
                                T = 0;
                                var O = h.eq(P);
                                if (e.slidesPerColumn > 1) {
                                    var L = void 0,
                                        A = void 0,
                                        z = void 0;
                                    if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
                                        var I = Math.floor(P / (e.slidesPerGroup * e.slidesPerColumn)),
                                            F = P - e.slidesPerColumn * e.slidesPerGroup * I,
                                            D = 0 === I ? e.slidesPerGroup : Math.min(Math.ceil((d - I * C * e.slidesPerGroup) / C), e.slidesPerGroup);
                                        (L = (A = F - (z = Math.floor(F / D)) * D + I * e.slidesPerGroup) + (z * E) / C),
                                            O.css({ "-webkit-box-ordinal-group": L, "-moz-box-ordinal-group": L, "-ms-flex-order": L, "-webkit-order": L, order: L });
                                    } else "column" === e.slidesPerColumnFill ? ((z = P - (A = Math.floor(P / C)) * C), (A > k || (A === k && z === C - 1)) && (z += 1) >= C && ((z = 0), (A += 1))) : (A = P - (z = Math.floor(P / B)) * B);
                                    O.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== z && e.spaceBetween && e.spaceBetween + "px");
                                }
                                if ("none" !== O.css("display")) {
                                    if ("auto" === e.slidesPerView) {
                                        var N = t.getComputedStyle(O[0], null),
                                            $ = O[0].style.transform,
                                            j = O[0].style.webkitTransform;
                                        if (($ && (O[0].style.transform = "none"), j && (O[0].style.webkitTransform = "none"), e.roundLengths)) T = this.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);
                                        else if (this.isHorizontal()) {
                                            var R = parseFloat(N.getPropertyValue("width") || 0),
                                                G = parseFloat(N.getPropertyValue("padding-left") || 0),
                                                X = parseFloat(N.getPropertyValue("padding-right") || 0),
                                                H = parseFloat(N.getPropertyValue("margin-left") || 0),
                                                Y = parseFloat(N.getPropertyValue("margin-right") || 0),
                                                V = N.getPropertyValue("box-sizing");
                                            T = V && "border-box" === V ? R + H + Y : R + G + X + H + Y;
                                        } else {
                                            var W = parseFloat(N.getPropertyValue("height") || 0),
                                                q = parseFloat(N.getPropertyValue("padding-top") || 0),
                                                U = parseFloat(N.getPropertyValue("padding-bottom") || 0),
                                                K = parseFloat(N.getPropertyValue("margin-top") || 0),
                                                Q = parseFloat(N.getPropertyValue("margin-bottom") || 0),
                                                Z = N.getPropertyValue("box-sizing");
                                            T = Z && "border-box" === Z ? W + K + Q : W + q + U + K + Q;
                                        }
                                        $ && (O[0].style.transform = $), j && (O[0].style.webkitTransform = j), e.roundLengths && (T = Math.floor(T));
                                    } else (T = (s - (e.slidesPerView - 1) * b) / e.slidesPerView), e.roundLengths && (T = Math.floor(T)), h[P] && (this.isHorizontal() ? (h[P].style.width = T + "px") : (h[P].style.height = T + "px"));
                                    h[P] && (h[P].swiperSlideSize = T),
                                        c.push(T),
                                        e.centeredSlides
                                            ? ((_ = _ + T / 2 + w / 2 + b),
                                              0 === w && 0 !== P && (_ = _ - s / 2 - b),
                                              0 === P && (_ = _ - s / 2 - b),
                                              Math.abs(_) < 0.001 && (_ = 0),
                                              e.roundLengths && (_ = Math.floor(_)),
                                              x % e.slidesPerGroup == 0 && u.push(_),
                                              p.push(_))
                                            : (e.roundLengths && (_ = Math.floor(_)), (x - Math.min(this.params.slidesPerGroupSkip, x)) % this.params.slidesPerGroup == 0 && u.push(_), p.push(_), (_ = _ + T + b)),
                                        (this.virtualSize += T + b),
                                        (w = T),
                                        (x += 1);
                                }
                            }
                            if (
                                ((this.virtualSize = Math.max(this.virtualSize, s) + v),
                                r && a && ("slide" === e.effect || "coverflow" === e.effect) && i.css({ width: this.virtualSize + e.spaceBetween + "px" }),
                                e.setWrapperSize && (this.isHorizontal() ? i.css({ width: this.virtualSize + e.spaceBetween + "px" }) : i.css({ height: this.virtualSize + e.spaceBetween + "px" })),
                                e.slidesPerColumn > 1 &&
                                    ((this.virtualSize = (T + e.spaceBetween) * E),
                                    (this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween),
                                    this.isHorizontal() ? i.css({ width: this.virtualSize + e.spaceBetween + "px" }) : i.css({ height: this.virtualSize + e.spaceBetween + "px" }),
                                    e.centeredSlides))
                            ) {
                                S = [];
                                for (var J = 0; J < u.length; J += 1) {
                                    var tt = u[J];
                                    e.roundLengths && (tt = Math.floor(tt)), u[J] < this.virtualSize + u[0] && S.push(tt);
                                }
                                u = S;
                            }
                            if (!e.centeredSlides) {
                                S = [];
                                for (var et = 0; et < u.length; et += 1) {
                                    var it = u[et];
                                    e.roundLengths && (it = Math.floor(it)), u[et] <= this.virtualSize - s && S.push(it);
                                }
                                (u = S), Math.floor(this.virtualSize - s) - Math.floor(u[u.length - 1]) > 1 && u.push(this.virtualSize - s);
                            }
                            if (
                                (0 === u.length && (u = [0]),
                                0 !== e.spaceBetween && (this.isHorizontal() ? (r ? h.filter(f).css({ marginLeft: b + "px" }) : h.filter(f).css({ marginRight: b + "px" })) : h.filter(f).css({ marginBottom: b + "px" })),
                                e.centeredSlides && e.centeredSlidesBounds)
                            ) {
                                var st = 0;
                                c.forEach(function (t) {
                                    st += t + (e.spaceBetween ? e.spaceBetween : 0);
                                });
                                var rt = (st -= e.spaceBetween) - s;
                                u = u.map(function (t) {
                                    return t < 0 ? -m : t > rt ? rt + v : t;
                                });
                            }
                            if (e.centerInsufficientSlides) {
                                var at = 0;
                                if (
                                    (c.forEach(function (t) {
                                        at += t + (e.spaceBetween ? e.spaceBetween : 0);
                                    }),
                                    (at -= e.spaceBetween) < s)
                                ) {
                                    var nt = (s - at) / 2;
                                    u.forEach(function (t, e) {
                                        u[e] = t - nt;
                                    }),
                                        p.forEach(function (t, e) {
                                            p[e] = t + nt;
                                        });
                                }
                            }
                            M(this, { slides: h, snapGrid: u, slidesGrid: p, slidesSizesGrid: c }),
                                d !== l && this.emit("slidesLengthChange"),
                                u.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")),
                                p.length !== y && this.emit("slidesGridLengthChange"),
                                (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
                        }
                    },
                    updateAutoHeight: function (t) {
                        var e,
                            i = [],
                            s = 0;
                        if (("number" == typeof t ? this.setTransition(t) : !0 === t && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1))
                            if (this.params.centeredSlides)
                                this.visibleSlides.each(function (t) {
                                    i.push(t);
                                });
                            else
                                for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
                                    var r = this.activeIndex + e;
                                    if (r > this.slides.length) break;
                                    i.push(this.slides.eq(r)[0]);
                                }
                        else i.push(this.slides.eq(this.activeIndex)[0]);
                        for (e = 0; e < i.length; e += 1)
                            if (void 0 !== i[e]) {
                                var a = i[e].offsetHeight;
                                s = a > s ? a : s;
                            }
                        s && this.$wrapperEl.css("height", s + "px");
                    },
                    updateSlidesOffset: function () {
                        for (var t = this.slides, e = 0; e < t.length; e += 1) t[e].swiperSlideOffset = this.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop;
                    },
                    updateSlidesProgress: function (t) {
                        void 0 === t && (t = (this && this.translate) || 0);
                        var e = this.params,
                            i = this.slides,
                            s = this.rtlTranslate;
                        if (0 !== i.length) {
                            void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                            var r = -t;
                            s && (r = t), i.removeClass(e.slideVisibleClass), (this.visibleSlidesIndexes = []), (this.visibleSlides = []);
                            for (var a = 0; a < i.length; a += 1) {
                                var n = i[a],
                                    o = (r + (e.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + e.spaceBetween);
                                if (e.watchSlidesVisibility || (e.centeredSlides && e.autoHeight)) {
                                    var l = -(r - n.swiperSlideOffset),
                                        h = l + this.slidesSizesGrid[a];
                                    ((l >= 0 && l < this.size - 1) || (h > 1 && h <= this.size) || (l <= 0 && h >= this.size)) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(a), i.eq(a).addClass(e.slideVisibleClass));
                                }
                                n.progress = s ? -o : o;
                            }
                            this.visibleSlides = v(this.visibleSlides);
                        }
                    },
                    updateProgress: function (t) {
                        if (void 0 === t) {
                            var e = this.rtlTranslate ? -1 : 1;
                            t = (this && this.translate && this.translate * e) || 0;
                        }
                        var i = this.params,
                            s = this.maxTranslate() - this.minTranslate(),
                            r = this.progress,
                            a = this.isBeginning,
                            n = this.isEnd,
                            o = a,
                            l = n;
                        0 === s ? ((r = 0), (a = !0), (n = !0)) : ((a = (r = (t - this.minTranslate()) / s) <= 0), (n = r >= 1)),
                            M(this, { progress: r, isBeginning: a, isEnd: n }),
                            (i.watchSlidesProgress || i.watchSlidesVisibility || (i.centeredSlides && i.autoHeight)) && this.updateSlidesProgress(t),
                            a && !o && this.emit("reachBeginning toEdge"),
                            n && !l && this.emit("reachEnd toEdge"),
                            ((o && !a) || (l && !n)) && this.emit("fromEdge"),
                            this.emit("progress", r);
                    },
                    updateSlidesClasses: function () {
                        var t,
                            e = this.slides,
                            i = this.params,
                            s = this.$wrapperEl,
                            r = this.activeIndex,
                            a = this.realIndex,
                            n = this.virtual && i.virtual.enabled;
                        e.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass),
                            (t = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : e.eq(r)).addClass(i.slideActiveClass),
                            i.loop &&
                                (t.hasClass(i.slideDuplicateClass)
                                    ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass)
                                    : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass));
                        var o = t
                            .nextAll("." + i.slideClass)
                            .eq(0)
                            .addClass(i.slideNextClass);
                        i.loop && 0 === o.length && (o = e.eq(0)).addClass(i.slideNextClass);
                        var l = t
                            .prevAll("." + i.slideClass)
                            .eq(0)
                            .addClass(i.slidePrevClass);
                        i.loop && 0 === l.length && (l = e.eq(-1)).addClass(i.slidePrevClass),
                            i.loop &&
                                (o.hasClass(i.slideDuplicateClass)
                                    ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass)
                                    : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass),
                                l.hasClass(i.slideDuplicateClass)
                                    ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)
                                    : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)),
                            this.emitSlidesClasses();
                    },
                    updateActiveIndex: function (t) {
                        var e,
                            i = this.rtlTranslate ? this.translate : -this.translate,
                            s = this.slidesGrid,
                            r = this.snapGrid,
                            a = this.params,
                            n = this.activeIndex,
                            o = this.realIndex,
                            l = this.snapIndex,
                            h = t;
                        if (void 0 === h) {
                            for (var d = 0; d < s.length; d += 1) void 0 !== s[d + 1] ? (i >= s[d] && i < s[d + 1] - (s[d + 1] - s[d]) / 2 ? (h = d) : i >= s[d] && i < s[d + 1] && (h = d + 1)) : i >= s[d] && (h = d);
                            a.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
                        }
                        if (r.indexOf(i) >= 0) e = r.indexOf(i);
                        else {
                            var u = Math.min(a.slidesPerGroupSkip, h);
                            e = u + Math.floor((h - u) / a.slidesPerGroup);
                        }
                        if ((e >= r.length && (e = r.length - 1), h !== n)) {
                            var p = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
                            M(this, { snapIndex: e, realIndex: p, previousIndex: n, activeIndex: h }),
                                this.emit("activeIndexChange"),
                                this.emit("snapIndexChange"),
                                o !== p && this.emit("realIndexChange"),
                                (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
                        } else e !== l && ((this.snapIndex = e), this.emit("snapIndexChange"));
                    },
                    updateClickedSlide: function (t) {
                        var e = this.params,
                            i = v(t.target).closest("." + e.slideClass)[0],
                            s = !1;
                        if (i) for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (s = !0);
                        if (!i || !s) return (this.clickedSlide = void 0), void (this.clickedIndex = void 0);
                        (this.clickedSlide = i),
                            this.virtual && this.params.virtual.enabled ? (this.clickedIndex = parseInt(v(i).attr("data-swiper-slide-index"), 10)) : (this.clickedIndex = v(i).index()),
                            e.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
                    },
                },
                translate: {
                    getTranslate: function (t) {
                        void 0 === t && (t = this.isHorizontal() ? "x" : "y");
                        var e = this.params,
                            i = this.rtlTranslate,
                            s = this.translate,
                            r = this.$wrapperEl;
                        if (e.virtualTranslate) return i ? -s : s;
                        if (e.cssMode) return s;
                        var a = E(r[0], t);
                        return i && (a = -a), a || 0;
                    },
                    setTranslate: function (t, e) {
                        var i = this.rtlTranslate,
                            s = this.params,
                            r = this.$wrapperEl,
                            a = this.wrapperEl,
                            n = this.progress,
                            o = 0,
                            l = 0;
                        this.isHorizontal() ? (o = i ? -t : t) : (l = t),
                            s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                            s.cssMode ? (a[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l) : s.virtualTranslate || r.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
                            (this.previousTranslate = this.translate),
                            (this.translate = this.isHorizontal() ? o : l);
                        var h = this.maxTranslate() - this.minTranslate();
                        (0 === h ? 0 : (t - this.minTranslate()) / h) !== n && this.updateProgress(t), this.emit("setTranslate", this.translate, e);
                    },
                    minTranslate: function () {
                        return -this.snapGrid[0];
                    },
                    maxTranslate: function () {
                        return -this.snapGrid[this.snapGrid.length - 1];
                    },
                    translateTo: function (t, e, i, s, r) {
                        void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
                        var a = this,
                            n = a.params,
                            o = a.wrapperEl;
                        if (a.animating && n.preventInteractionOnTransition) return !1;
                        var l,
                            h = a.minTranslate(),
                            d = a.maxTranslate();
                        if (((l = s && t > h ? h : s && t < d ? d : t), a.updateProgress(l), n.cssMode)) {
                            var u,
                                p = a.isHorizontal();
                            return 0 === e ? (o[p ? "scrollLeft" : "scrollTop"] = -l) : o.scrollTo ? o.scrollTo((((u = {})[p ? "left" : "top"] = -l), (u.behavior = "smooth"), u)) : (o[p ? "scrollLeft" : "scrollTop"] = -l), !0;
                        }
                        return (
                            0 === e
                                ? (a.setTransition(0), a.setTranslate(l), i && (a.emit("beforeTransitionStart", e, r), a.emit("transitionEnd")))
                                : (a.setTransition(e),
                                  a.setTranslate(l),
                                  i && (a.emit("beforeTransitionStart", e, r), a.emit("transitionStart")),
                                  a.animating ||
                                      ((a.animating = !0),
                                      a.onTranslateToWrapperTransitionEnd ||
                                          (a.onTranslateToWrapperTransitionEnd = function (t) {
                                              a &&
                                                  !a.destroyed &&
                                                  t.target === this &&
                                                  (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                                                  a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd),
                                                  (a.onTranslateToWrapperTransitionEnd = null),
                                                  delete a.onTranslateToWrapperTransitionEnd,
                                                  i && a.emit("transitionEnd"));
                                          }),
                                      a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                                      a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))),
                            !0
                        );
                    },
                },
                transition: {
                    setTransition: function (t, e) {
                        this.params.cssMode || this.$wrapperEl.transition(t), this.emit("setTransition", t, e);
                    },
                    transitionStart: function (t, e) {
                        void 0 === t && (t = !0);
                        var i = this.activeIndex,
                            s = this.params,
                            r = this.previousIndex;
                        if (!s.cssMode) {
                            s.autoHeight && this.updateAutoHeight();
                            var a = e;
                            if ((a || (a = i > r ? "next" : i < r ? "prev" : "reset"), this.emit("transitionStart"), t && i !== r)) {
                                if ("reset" === a) return void this.emit("slideResetTransitionStart");
                                this.emit("slideChangeTransitionStart"), "next" === a ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
                            }
                        }
                    },
                    transitionEnd: function (t, e) {
                        void 0 === t && (t = !0);
                        var i = this.activeIndex,
                            s = this.previousIndex,
                            r = this.params;
                        if (((this.animating = !1), !r.cssMode)) {
                            this.setTransition(0);
                            var a = e;
                            if ((a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), t && i !== s)) {
                                if ("reset" === a) return void this.emit("slideResetTransitionEnd");
                                this.emit("slideChangeTransitionEnd"), "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
                            }
                        }
                    },
                },
                slide: {
                    slideTo: function (t, e, i, s) {
                        void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                        var r = this,
                            a = t;
                        a < 0 && (a = 0);
                        var n = r.params,
                            o = r.snapGrid,
                            l = r.slidesGrid,
                            h = r.previousIndex,
                            d = r.activeIndex,
                            u = r.rtlTranslate,
                            p = r.wrapperEl;
                        if (r.animating && n.preventInteractionOnTransition) return !1;
                        var c = Math.min(r.params.slidesPerGroupSkip, a),
                            f = c + Math.floor((a - c) / r.params.slidesPerGroup);
                        f >= o.length && (f = o.length - 1), (d || n.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
                        var m,
                            v = -o[f];
                        if ((r.updateProgress(v), n.normalizeSlideIndex)) for (var g = 0; g < l.length; g += 1) -Math.floor(100 * v) >= Math.floor(100 * l[g]) && (a = g);
                        if (r.initialized && a !== d) {
                            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                            if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (d || 0) !== a) return !1;
                        }
                        if (((m = a > d ? "next" : a < d ? "prev" : "reset"), (u && -v === r.translate) || (!u && v === r.translate)))
                            return r.updateActiveIndex(a), n.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== n.effect && r.setTranslate(v), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
                        if (n.cssMode) {
                            var y,
                                b = r.isHorizontal(),
                                _ = -v;
                            return (
                                u && (_ = p.scrollWidth - p.offsetWidth - _),
                                0 === e ? (p[b ? "scrollLeft" : "scrollTop"] = _) : p.scrollTo ? p.scrollTo((((y = {})[b ? "left" : "top"] = _), (y.behavior = "smooth"), y)) : (p[b ? "scrollLeft" : "scrollTop"] = _),
                                !0
                            );
                        }
                        return (
                            0 === e
                                ? (r.setTransition(0), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, s), r.transitionStart(i, m), r.transitionEnd(i, m))
                                : (r.setTransition(e),
                                  r.setTranslate(v),
                                  r.updateActiveIndex(a),
                                  r.updateSlidesClasses(),
                                  r.emit("beforeTransitionStart", e, s),
                                  r.transitionStart(i, m),
                                  r.animating ||
                                      ((r.animating = !0),
                                      r.onSlideToWrapperTransitionEnd ||
                                          (r.onSlideToWrapperTransitionEnd = function (t) {
                                              r &&
                                                  !r.destroyed &&
                                                  t.target === this &&
                                                  (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                                  r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                                                  (r.onSlideToWrapperTransitionEnd = null),
                                                  delete r.onSlideToWrapperTransitionEnd,
                                                  r.transitionEnd(i, m));
                                          }),
                                      r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                      r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))),
                            !0
                        );
                    },
                    slideToLoop: function (t, e, i, s) {
                        void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
                        var r = t;
                        return this.params.loop && (r += this.loopedSlides), this.slideTo(r, e, i, s);
                    },
                    slideNext: function (t, e, i) {
                        void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                        var s = this.params,
                            r = this.animating,
                            a = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
                        if (s.loop) {
                            if (r && s.loopPreventsSlide) return !1;
                            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                        }
                        return this.slideTo(this.activeIndex + a, t, e, i);
                    },
                    slidePrev: function (t, e, i) {
                        void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
                        var s = this.params,
                            r = this.animating,
                            a = this.snapGrid,
                            n = this.slidesGrid,
                            o = this.rtlTranslate;
                        if (s.loop) {
                            if (r && s.loopPreventsSlide) return !1;
                            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                        }
                        function l(t) {
                            return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t);
                        }
                        var h,
                            d = l(o ? this.translate : -this.translate),
                            u = a.map(function (t) {
                                return l(t);
                            }),
                            p = (a[u.indexOf(d)], a[u.indexOf(d) - 1]);
                        return (
                            void 0 === p &&
                                s.cssMode &&
                                a.forEach(function (t) {
                                    !p && d >= t && (p = t);
                                }),
                            void 0 !== p && (h = n.indexOf(p)) < 0 && (h = this.activeIndex - 1),
                            this.slideTo(h, t, e, i)
                        );
                    },
                    slideReset: function (t, e, i) {
                        return void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), this.slideTo(this.activeIndex, t, e, i);
                    },
                    slideToClosest: function (t, e, i, s) {
                        void 0 === t && (t = this.params.speed), void 0 === e && (e = !0), void 0 === s && (s = 0.5);
                        var r = this.activeIndex,
                            a = Math.min(this.params.slidesPerGroupSkip, r),
                            n = a + Math.floor((r - a) / this.params.slidesPerGroup),
                            o = this.rtlTranslate ? this.translate : -this.translate;
                        if (o >= this.snapGrid[n]) {
                            var l = this.snapGrid[n];
                            o - l > (this.snapGrid[n + 1] - l) * s && (r += this.params.slidesPerGroup);
                        } else {
                            var h = this.snapGrid[n - 1];
                            o - h <= (this.snapGrid[n] - h) * s && (r -= this.params.slidesPerGroup);
                        }
                        return (r = Math.max(r, 0)), (r = Math.min(r, this.slidesGrid.length - 1)), this.slideTo(r, t, e, i);
                    },
                    slideToClickedSlide: function () {
                        var t,
                            e = this,
                            i = e.params,
                            s = e.$wrapperEl,
                            r = "auto" === i.slidesPerView ? e.slidesPerViewDynamic() : i.slidesPerView,
                            a = e.clickedIndex;
                        if (i.loop) {
                            if (e.animating) return;
                            (t = parseInt(v(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
                                i.centeredSlides
                                    ? a < e.loopedSlides - r / 2 || a > e.slides.length - e.loopedSlides + r / 2
                                        ? (e.loopFix(),
                                          (a = s
                                              .children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")")
                                              .eq(0)
                                              .index()),
                                          w(function () {
                                              e.slideTo(a);
                                          }))
                                        : e.slideTo(a)
                                    : a > e.slides.length - r
                                    ? (e.loopFix(),
                                      (a = s
                                          .children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")")
                                          .eq(0)
                                          .index()),
                                      w(function () {
                                          e.slideTo(a);
                                      }))
                                    : e.slideTo(a);
                        } else e.slideTo(a);
                    },
                },
                loop: {
                    loopCreate: function () {
                        var t = this,
                            e = a(),
                            i = t.params,
                            s = t.$wrapperEl;
                        s.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                        var r = s.children("." + i.slideClass);
                        if (i.loopFillGroupWithBlank) {
                            var n = i.slidesPerGroup - (r.length % i.slidesPerGroup);
                            if (n !== i.slidesPerGroup) {
                                for (var o = 0; o < n; o += 1) {
                                    var l = v(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                                    s.append(l);
                                }
                                r = s.children("." + i.slideClass);
                            }
                        }
                        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length),
                            (t.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10))),
                            (t.loopedSlides += i.loopAdditionalSlides),
                            t.loopedSlides > r.length && (t.loopedSlides = r.length);
                        var h = [],
                            d = [];
                        r.each(function (e, i) {
                            var s = v(e);
                            i < t.loopedSlides && d.push(e), i < r.length && i >= r.length - t.loopedSlides && h.push(e), s.attr("data-swiper-slide-index", i);
                        });
                        for (var u = 0; u < d.length; u += 1) s.append(v(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
                        for (var p = h.length - 1; p >= 0; p -= 1) s.prepend(v(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    },
                    loopFix: function () {
                        this.emit("beforeLoopFix");
                        var t,
                            e = this.activeIndex,
                            i = this.slides,
                            s = this.loopedSlides,
                            r = this.allowSlidePrev,
                            a = this.allowSlideNext,
                            n = this.snapGrid,
                            o = this.rtlTranslate;
                        (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
                        var l = -n[e] - this.getTranslate();
                        e < s
                            ? ((t = i.length - 3 * s + e), (t += s), this.slideTo(t, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l))
                            : e >= i.length - s && ((t = -i.length + e + s), (t += s), this.slideTo(t, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)),
                            (this.allowSlidePrev = r),
                            (this.allowSlideNext = a),
                            this.emit("loopFix");
                    },
                    loopDestroy: function () {
                        var t = this.$wrapperEl,
                            e = this.params,
                            i = this.slides;
                        t.children("." + e.slideClass + "." + e.slideDuplicateClass + ",." + e.slideClass + "." + e.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
                    },
                },
                grabCursor: {
                    setGrabCursor: function (t) {
                        if (!(this.support.touch || !this.params.simulateTouch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode)) {
                            var e = this.el;
                            (e.style.cursor = "move"), (e.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab"), (e.style.cursor = t ? "-moz-grabbin" : "-moz-grab"), (e.style.cursor = t ? "grabbing" : "grab");
                        }
                    },
                    unsetGrabCursor: function () {
                        this.support.touch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode || (this.el.style.cursor = "");
                    },
                },
                manipulation: {
                    appendSlide: function (t) {
                        var e = this.$wrapperEl,
                            i = this.params;
                        if ((i.loop && this.loopDestroy(), "object" == typeof t && "length" in t)) for (var s = 0; s < t.length; s += 1) t[s] && e.append(t[s]);
                        else e.append(t);
                        i.loop && this.loopCreate(), (i.observer && this.support.observer) || this.update();
                    },
                    prependSlide: function (t) {
                        var e = this.params,
                            i = this.$wrapperEl,
                            s = this.activeIndex;
                        e.loop && this.loopDestroy();
                        var r = s + 1;
                        if ("object" == typeof t && "length" in t) {
                            for (var a = 0; a < t.length; a += 1) t[a] && i.prepend(t[a]);
                            r = s + t.length;
                        } else i.prepend(t);
                        e.loop && this.loopCreate(), (e.observer && this.support.observer) || this.update(), this.slideTo(r, 0, !1);
                    },
                    addSlide: function (t, e) {
                        var i = this.$wrapperEl,
                            s = this.params,
                            r = this.activeIndex;
                        s.loop && ((r -= this.loopedSlides), this.loopDestroy(), (this.slides = i.children("." + s.slideClass)));
                        var a = this.slides.length;
                        if (t <= 0) this.prependSlide(e);
                        else if (t >= a) this.appendSlide(e);
                        else {
                            for (var n = r > t ? r + 1 : r, o = [], l = a - 1; l >= t; l -= 1) {
                                var h = this.slides.eq(l);
                                h.remove(), o.unshift(h);
                            }
                            if ("object" == typeof e && "length" in e) {
                                for (var d = 0; d < e.length; d += 1) e[d] && i.append(e[d]);
                                n = r > t ? r + e.length : r;
                            } else i.append(e);
                            for (var u = 0; u < o.length; u += 1) i.append(o[u]);
                            s.loop && this.loopCreate(), (s.observer && this.support.observer) || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
                        }
                    },
                    removeSlide: function (t) {
                        var e = this.params,
                            i = this.$wrapperEl,
                            s = this.activeIndex;
                        e.loop && ((s -= this.loopedSlides), this.loopDestroy(), (this.slides = i.children("." + e.slideClass)));
                        var r,
                            a = s;
                        if ("object" == typeof t && "length" in t) {
                            for (var n = 0; n < t.length; n += 1) (r = t[n]), this.slides[r] && this.slides.eq(r).remove(), r < a && (a -= 1);
                            a = Math.max(a, 0);
                        } else (r = t), this.slides[r] && this.slides.eq(r).remove(), r < a && (a -= 1), (a = Math.max(a, 0));
                        e.loop && this.loopCreate(), (e.observer && this.support.observer) || this.update(), e.loop ? this.slideTo(a + this.loopedSlides, 0, !1) : this.slideTo(a, 0, !1);
                    },
                    removeAllSlides: function () {
                        for (var t = [], e = 0; e < this.slides.length; e += 1) t.push(e);
                        this.removeSlide(t);
                    },
                },
                events: {
                    attachEvents: function () {
                        var t = a(),
                            e = this.params,
                            i = this.touchEvents,
                            s = this.el,
                            r = this.wrapperEl,
                            n = this.device,
                            o = this.support;
                        (this.onTouchStart = P.bind(this)), (this.onTouchMove = O.bind(this)), (this.onTouchEnd = L.bind(this)), e.cssMode && (this.onScroll = I.bind(this)), (this.onClick = z.bind(this));
                        var l = !!e.nested;
                        if (!o.touch && o.pointerEvents) s.addEventListener(i.start, this.onTouchStart, !1), t.addEventListener(i.move, this.onTouchMove, l), t.addEventListener(i.end, this.onTouchEnd, !1);
                        else {
                            if (o.touch) {
                                var h = !("touchstart" !== i.start || !o.passiveListener || !e.passiveListeners) && { passive: !0, capture: !1 };
                                s.addEventListener(i.start, this.onTouchStart, h),
                                    s.addEventListener(i.move, this.onTouchMove, o.passiveListener ? { passive: !1, capture: l } : l),
                                    s.addEventListener(i.end, this.onTouchEnd, h),
                                    i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, h),
                                    F || (t.addEventListener("touchstart", D), (F = !0));
                            }
                            ((e.simulateTouch && !n.ios && !n.android) || (e.simulateTouch && !o.touch && n.ios)) &&
                                (s.addEventListener("mousedown", this.onTouchStart, !1), t.addEventListener("mousemove", this.onTouchMove, l), t.addEventListener("mouseup", this.onTouchEnd, !1));
                        }
                        (e.preventClicks || e.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0),
                            e.cssMode && r.addEventListener("scroll", this.onScroll),
                            e.updateOnWindowResize ? this.on(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : this.on("observerUpdate", A, !0);
                    },
                    detachEvents: function () {
                        var t = a(),
                            e = this.params,
                            i = this.touchEvents,
                            s = this.el,
                            r = this.wrapperEl,
                            n = this.device,
                            o = this.support,
                            l = !!e.nested;
                        if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, this.onTouchStart, !1), t.removeEventListener(i.move, this.onTouchMove, l), t.removeEventListener(i.end, this.onTouchEnd, !1);
                        else {
                            if (o.touch) {
                                var h = !("onTouchStart" !== i.start || !o.passiveListener || !e.passiveListeners) && { passive: !0, capture: !1 };
                                s.removeEventListener(i.start, this.onTouchStart, h),
                                    s.removeEventListener(i.move, this.onTouchMove, l),
                                    s.removeEventListener(i.end, this.onTouchEnd, h),
                                    i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, h);
                            }
                            ((e.simulateTouch && !n.ios && !n.android) || (e.simulateTouch && !o.touch && n.ios)) &&
                                (s.removeEventListener("mousedown", this.onTouchStart, !1), t.removeEventListener("mousemove", this.onTouchMove, l), t.removeEventListener("mouseup", this.onTouchEnd, !1));
                        }
                        (e.preventClicks || e.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0),
                            e.cssMode && r.removeEventListener("scroll", this.onScroll),
                            this.off(n.ios || n.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A);
                    },
                },
                breakpoints: {
                    setBreakpoint: function () {
                        var t = this.activeIndex,
                            e = this.initialized,
                            i = this.loopedSlides,
                            s = void 0 === i ? 0 : i,
                            r = this.params,
                            a = this.$el,
                            n = r.breakpoints;
                        if (n && (!n || 0 !== Object.keys(n).length)) {
                            var o = this.getBreakpoint(n);
                            if (o && this.currentBreakpoint !== o) {
                                var l = o in n ? n[o] : void 0;
                                l &&
                                    ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (t) {
                                        var e = l[t];
                                        void 0 !== e && (l[t] = "slidesPerView" !== t || ("AUTO" !== e && "auto" !== e) ? ("slidesPerView" === t ? parseFloat(e) : parseInt(e, 10)) : "auto");
                                    });
                                var h = l || this.originalParams,
                                    d = r.slidesPerColumn > 1,
                                    u = h.slidesPerColumn > 1;
                                d && !u
                                    ? (a.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), this.emitContainerClasses())
                                    : !d && u && (a.addClass(r.containerModifierClass + "multirow"), "column" === h.slidesPerColumnFill && a.addClass(r.containerModifierClass + "multirow-column"), this.emitContainerClasses());
                                var p = h.direction && h.direction !== r.direction,
                                    c = r.loop && (h.slidesPerView !== r.slidesPerView || p);
                                p && e && this.changeDirection(),
                                    M(this.params, h),
                                    M(this, { allowTouchMove: this.params.allowTouchMove, allowSlideNext: this.params.allowSlideNext, allowSlidePrev: this.params.allowSlidePrev }),
                                    (this.currentBreakpoint = o),
                                    c && e && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(t - s + this.loopedSlides, 0, !1)),
                                    this.emit("breakpoint", h);
                            }
                        }
                    },
                    getBreakpoint: function (t) {
                        var e = o();
                        if (t) {
                            var i = !1,
                                s = Object.keys(t).map(function (t) {
                                    if ("string" == typeof t && 0 === t.indexOf("@")) {
                                        var i = parseFloat(t.substr(1));
                                        return { value: e.innerHeight * i, point: t };
                                    }
                                    return { value: t, point: t };
                                });
                            s.sort(function (t, e) {
                                return parseInt(t.value, 10) - parseInt(e.value, 10);
                            });
                            for (var r = 0; r < s.length; r += 1) {
                                var a = s[r],
                                    n = a.point;
                                a.value <= e.innerWidth && (i = n);
                            }
                            return i || "max";
                        }
                    },
                },
                checkOverflow: {
                    checkOverflow: function () {
                        var t = this.params,
                            e = this.isLocked,
                            i = this.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                        t.slidesOffsetBefore && t.slidesOffsetAfter && i ? (this.isLocked = i <= this.size) : (this.isLocked = 1 === this.snapGrid.length),
                            (this.allowSlideNext = !this.isLocked),
                            (this.allowSlidePrev = !this.isLocked),
                            e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
                            e && e !== this.isLocked && ((this.isEnd = !1), this.navigation && this.navigation.update());
                    },
                },
                classes: {
                    addClasses: function () {
                        var t = this.classNames,
                            e = this.params,
                            i = this.rtl,
                            s = this.$el,
                            r = this.device,
                            a = [];
                        a.push("initialized"),
                            a.push(e.direction),
                            e.freeMode && a.push("free-mode"),
                            e.autoHeight && a.push("autoheight"),
                            i && a.push("rtl"),
                            e.slidesPerColumn > 1 && (a.push("multirow"), "column" === e.slidesPerColumnFill && a.push("multirow-column")),
                            r.android && a.push("android"),
                            r.ios && a.push("ios"),
                            e.cssMode && a.push("css-mode"),
                            a.forEach(function (i) {
                                t.push(e.containerModifierClass + i);
                            }),
                            s.addClass(t.join(" ")),
                            this.emitContainerClasses();
                    },
                    removeClasses: function () {
                        var t = this.$el,
                            e = this.classNames;
                        t.removeClass(e.join(" ")), this.emitContainerClasses();
                    },
                },
                images: {
                    loadImage: function (t, e, i, s, r, a) {
                        var n,
                            l = o();
                        function h() {
                            a && a();
                        }
                        v(t).parent("picture")[0] || (t.complete && r) ? h() : e ? (((n = new l.Image()).onload = h), (n.onerror = h), s && (n.sizes = s), i && (n.srcset = i), e && (n.src = e)) : h();
                    },
                    preloadImages: function () {
                        var t = this;
                        function e() {
                            null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")));
                        }
                        t.imagesToLoad = t.$el.find("img");
                        for (var i = 0; i < t.imagesToLoad.length; i += 1) {
                            var s = t.imagesToLoad[i];
                            t.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, e);
                        }
                    },
                },
            },
            j = {},
            R = (function () {
                function e() {
                    for (var t, i, s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];
                    1 === r.length && r[0].constructor && r[0].constructor === Object ? (i = r[0]) : ((t = r[0]), (i = r[1])), i || (i = {}), (i = M({}, i)), t && !i.el && (i.el = t);
                    var n = this;
                    (n.support = C()),
                        (n.device = B({ userAgent: i.userAgent })),
                        (n.browser = k()),
                        (n.eventsListeners = {}),
                        (n.eventsAnyListeners = []),
                        Object.keys($).forEach(function (t) {
                            Object.keys($[t]).forEach(function (i) {
                                e.prototype[i] || (e.prototype[i] = $[t][i]);
                            });
                        }),
                        void 0 === n.modules && (n.modules = {}),
                        Object.keys(n.modules).forEach(function (t) {
                            var e = n.modules[t];
                            if (e.params) {
                                var s = Object.keys(e.params)[0],
                                    r = e.params[s];
                                if ("object" != typeof r || null === r) return;
                                if (!(s in i) || !("enabled" in r)) return;
                                !0 === i[s] && (i[s] = { enabled: !0 }), "object" != typeof i[s] || "enabled" in i[s] || (i[s].enabled = !0), i[s] || (i[s] = { enabled: !1 });
                            }
                        });
                    var o = M({}, N);
                    n.useParams(o),
                        (n.params = M({}, o, j, i)),
                        (n.originalParams = M({}, n.params)),
                        (n.passedParams = M({}, i)),
                        n.params &&
                            n.params.on &&
                            Object.keys(n.params.on).forEach(function (t) {
                                n.on(t, n.params.on[t]);
                            }),
                        (n.$ = v);
                    var l = v(n.params.el);
                    if ((t = l[0])) {
                        if (l.length > 1) {
                            var h = [];
                            return (
                                l.each(function (t) {
                                    var s = M({}, i, { el: t });
                                    h.push(new e(s));
                                }),
                                h
                            );
                        }
                        var d, u, p;
                        return (
                            (t.swiper = n),
                            t && t.shadowRoot && t.shadowRoot.querySelector
                                ? ((d = v(t.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function (t) {
                                      return l.children(t);
                                  })
                                : (d = l.children("." + n.params.wrapperClass)),
                            M(n, {
                                $el: l,
                                el: t,
                                $wrapperEl: d,
                                wrapperEl: d[0],
                                classNames: [],
                                slides: v(),
                                slidesGrid: [],
                                snapGrid: [],
                                slidesSizesGrid: [],
                                isHorizontal: function () {
                                    return "horizontal" === n.params.direction;
                                },
                                isVertical: function () {
                                    return "vertical" === n.params.direction;
                                },
                                rtl: "rtl" === t.dir.toLowerCase() || "rtl" === l.css("direction"),
                                rtlTranslate: "horizontal" === n.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === l.css("direction")),
                                wrongRTL: "-webkit-box" === d.css("display"),
                                activeIndex: 0,
                                realIndex: 0,
                                isBeginning: !0,
                                isEnd: !1,
                                translate: 0,
                                previousTranslate: 0,
                                progress: 0,
                                velocity: 0,
                                animating: !1,
                                allowSlideNext: n.params.allowSlideNext,
                                allowSlidePrev: n.params.allowSlidePrev,
                                touchEvents:
                                    ((u = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                                    (p = ["mousedown", "mousemove", "mouseup"]),
                                    n.support.pointerEvents && (p = ["pointerdown", "pointermove", "pointerup"]),
                                    (n.touchEventsTouch = { start: u[0], move: u[1], end: u[2], cancel: u[3] }),
                                    (n.touchEventsDesktop = { start: p[0], move: p[1], end: p[2] }),
                                    n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
                                touchEventsData: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    allowTouchCallbacks: void 0,
                                    touchStartTime: void 0,
                                    isScrolling: void 0,
                                    currentTranslate: void 0,
                                    startTranslate: void 0,
                                    allowThresholdMove: void 0,
                                    formElements: "input, select, option, textarea, button, video, label",
                                    lastClickTime: x(),
                                    clickTimeout: void 0,
                                    velocities: [],
                                    allowMomentumBounce: void 0,
                                    isTouchEvent: void 0,
                                    startMoving: void 0,
                                },
                                allowClick: !0,
                                allowTouchMove: n.params.allowTouchMove,
                                touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                                imagesToLoad: [],
                                imagesLoaded: 0,
                            }),
                            n.useModules(),
                            n.emit("_swiper"),
                            n.params.init && n.init(),
                            n
                        );
                    }
                }
                var i,
                    s,
                    r = e.prototype;
                return (
                    (r.emitContainerClasses = function () {
                        var t = this;
                        if (t.params._emitClasses && t.el) {
                            var e = t.el.className.split(" ").filter(function (e) {
                                return 0 === e.indexOf("swiper-container") || 0 === e.indexOf(t.params.containerModifierClass);
                            });
                            t.emit("_containerClasses", e.join(" "));
                        }
                    }),
                    (r.emitSlidesClasses = function () {
                        var t = this;
                        t.params._emitClasses &&
                            t.el &&
                            t.slides.each(function (e) {
                                var i = e.className.split(" ").filter(function (e) {
                                    return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
                                });
                                t.emit("_slideClass", e, i.join(" "));
                            });
                    }),
                    (r.slidesPerViewDynamic = function () {
                        var t = this.params,
                            e = this.slides,
                            i = this.slidesGrid,
                            s = this.size,
                            r = this.activeIndex,
                            a = 1;
                        if (t.centeredSlides) {
                            for (var n, o = e[r].swiperSlideSize, l = r + 1; l < e.length; l += 1) e[l] && !n && ((a += 1), (o += e[l].swiperSlideSize) > s && (n = !0));
                            for (var h = r - 1; h >= 0; h -= 1) e[h] && !n && ((a += 1), (o += e[h].swiperSlideSize) > s && (n = !0));
                        } else for (var d = r + 1; d < e.length; d += 1) i[d] - i[r] < s && (a += 1);
                        return a;
                    }),
                    (r.update = function () {
                        var t = this;
                        if (t && !t.destroyed) {
                            var e = t.snapGrid,
                                i = t.params;
                            i.breakpoints && t.setBreakpoint(),
                                t.updateSize(),
                                t.updateSlides(),
                                t.updateProgress(),
                                t.updateSlidesClasses(),
                                t.params.freeMode
                                    ? (s(), t.params.autoHeight && t.updateAutoHeight())
                                    : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || s(),
                                i.watchOverflow && e !== t.snapGrid && t.checkOverflow(),
                                t.emit("update");
                        }
                        function s() {
                            var e = t.rtlTranslate ? -1 * t.translate : t.translate,
                                i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                            t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses();
                        }
                    }),
                    (r.changeDirection = function (t, e) {
                        void 0 === e && (e = !0);
                        var i = this.params.direction;
                        return (
                            t || (t = "horizontal" === i ? "vertical" : "horizontal"),
                            t === i ||
                                ("horizontal" !== t && "vertical" !== t) ||
                                (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + t),
                                this.emitContainerClasses(),
                                (this.params.direction = t),
                                this.slides.each(function (e) {
                                    "vertical" === t ? (e.style.width = "") : (e.style.height = "");
                                }),
                                this.emit("changeDirection"),
                                e && this.update()),
                            this
                        );
                    }),
                    (r.init = function () {
                        this.initialized ||
                            (this.emit("beforeInit"),
                            this.params.breakpoints && this.setBreakpoint(),
                            this.addClasses(),
                            this.params.loop && this.loopCreate(),
                            this.updateSize(),
                            this.updateSlides(),
                            this.params.watchOverflow && this.checkOverflow(),
                            this.params.grabCursor && this.setGrabCursor(),
                            this.params.preloadImages && this.preloadImages(),
                            this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
                            this.attachEvents(),
                            (this.initialized = !0),
                            this.emit("init"));
                    }),
                    (r.destroy = function (t, e) {
                        void 0 === t && (t = !0), void 0 === e && (e = !0);
                        var i,
                            s = this,
                            r = s.params,
                            a = s.$el,
                            n = s.$wrapperEl,
                            o = s.slides;
                        return (
                            void 0 === s.params ||
                                s.destroyed ||
                                (s.emit("beforeDestroy"),
                                (s.initialized = !1),
                                s.detachEvents(),
                                r.loop && s.loopDestroy(),
                                e &&
                                    (s.removeClasses(),
                                    a.removeAttr("style"),
                                    n.removeAttr("style"),
                                    o && o.length && o.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                                s.emit("destroy"),
                                Object.keys(s.eventsListeners).forEach(function (t) {
                                    s.off(t);
                                }),
                                !1 !== t &&
                                    ((s.$el[0].swiper = null),
                                    (i = s),
                                    Object.keys(i).forEach(function (t) {
                                        try {
                                            i[t] = null;
                                        } catch (t) {}
                                        try {
                                            delete i[t];
                                        } catch (t) {}
                                    })),
                                (s.destroyed = !0)),
                            null
                        );
                    }),
                    (e.extendDefaults = function (t) {
                        M(j, t);
                    }),
                    (e.installModule = function (t) {
                        e.prototype.modules || (e.prototype.modules = {});
                        var i = t.name || Object.keys(e.prototype.modules).length + "_" + x();
                        e.prototype.modules[i] = t;
                    }),
                    (e.use = function (t) {
                        return Array.isArray(t)
                            ? (t.forEach(function (t) {
                                  return e.installModule(t);
                              }),
                              e)
                            : (e.installModule(t), e);
                    }),
                    (i = e),
                    (s = [
                        {
                            key: "extendedDefaults",
                            get: function () {
                                return j;
                            },
                        },
                        {
                            key: "defaults",
                            get: function () {
                                return N;
                            },
                        },
                    ]),
                    null && t(i.prototype, null),
                    s && t(i, s),
                    e
                );
            })(),
            G = {
                name: "resize",
                create: function () {
                    var t = this;
                    M(t, {
                        resize: {
                            resizeHandler: function () {
                                t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize"));
                            },
                            orientationChangeHandler: function () {
                                t && !t.destroyed && t.initialized && t.emit("orientationchange");
                            },
                        },
                    });
                },
                on: {
                    init: function (t) {
                        var e = o();
                        e.addEventListener("resize", t.resize.resizeHandler), e.addEventListener("orientationchange", t.resize.orientationChangeHandler);
                    },
                    destroy: function (t) {
                        var e = o();
                        e.removeEventListener("resize", t.resize.resizeHandler), e.removeEventListener("orientationchange", t.resize.orientationChangeHandler);
                    },
                },
            },
            X = {
                attach: function (t, e) {
                    void 0 === e && (e = {});
                    var i = o(),
                        s = this,
                        r = new (i.MutationObserver || i.WebkitMutationObserver)(function (t) {
                            if (1 !== t.length) {
                                var e = function () {
                                    s.emit("observerUpdate", t[0]);
                                };
                                i.requestAnimationFrame ? i.requestAnimationFrame(e) : i.setTimeout(e, 0);
                            } else s.emit("observerUpdate", t[0]);
                        });
                    r.observe(t, { attributes: void 0 === e.attributes || e.attributes, childList: void 0 === e.childList || e.childList, characterData: void 0 === e.characterData || e.characterData }), s.observer.observers.push(r);
                },
                init: function () {
                    if (this.support.observer && this.params.observer) {
                        if (this.params.observeParents) for (var t = this.$el.parents(), e = 0; e < t.length; e += 1) this.observer.attach(t[e]);
                        this.observer.attach(this.$el[0], { childList: this.params.observeSlideChildren }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
                    }
                },
                destroy: function () {
                    this.observer.observers.forEach(function (t) {
                        t.disconnect();
                    }),
                        (this.observer.observers = []);
                },
            },
            H = {
                name: "observer",
                params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
                create: function () {
                    S(this, { observer: e(e({}, X), {}, { observers: [] }) });
                },
                on: {
                    init: function (t) {
                        t.observer.init();
                    },
                    destroy: function (t) {
                        t.observer.destroy();
                    },
                },
            },
            Y = {
                update: function (t) {
                    var e = this,
                        i = e.params,
                        s = i.slidesPerView,
                        r = i.slidesPerGroup,
                        a = i.centeredSlides,
                        n = e.params.virtual,
                        o = n.addSlidesBefore,
                        l = n.addSlidesAfter,
                        h = e.virtual,
                        d = h.from,
                        u = h.to,
                        p = h.slides,
                        c = h.slidesGrid,
                        f = h.renderSlide,
                        m = h.offset;
                    e.updateActiveIndex();
                    var v,
                        g,
                        y,
                        b = e.activeIndex || 0;
                    (v = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top"), a ? ((g = Math.floor(s / 2) + r + l), (y = Math.floor(s / 2) + r + o)) : ((g = s + (r - 1) + l), (y = r + o));
                    var _ = Math.max((b || 0) - y, 0),
                        w = Math.min((b || 0) + g, p.length - 1),
                        x = (e.slidesGrid[_] || 0) - (e.slidesGrid[0] || 0);
                    function E() {
                        e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load();
                    }
                    if ((M(e.virtual, { from: _, to: w, offset: x, slidesGrid: e.slidesGrid }), d === _ && u === w && !t)) return e.slidesGrid !== c && x !== m && e.slides.css(v, x + "px"), void e.updateProgress();
                    if (e.params.virtual.renderExternal)
                        return (
                            e.params.virtual.renderExternal.call(e, {
                                offset: x,
                                from: _,
                                to: w,
                                slides: (function () {
                                    for (var t = [], e = _; e <= w; e += 1) t.push(p[e]);
                                    return t;
                                })(),
                            }),
                            void (e.params.virtual.renderExternalUpdate && E())
                        );
                    var T = [],
                        S = [];
                    if (t) e.$wrapperEl.find("." + e.params.slideClass).remove();
                    else for (var C = d; C <= u; C += 1) (C < _ || C > w) && e.$wrapperEl.find("." + e.params.slideClass + '[data-swiper-slide-index="' + C + '"]').remove();
                    for (var B = 0; B < p.length; B += 1) B >= _ && B <= w && (void 0 === u || t ? S.push(B) : (B > u && S.push(B), B < d && T.push(B)));
                    S.forEach(function (t) {
                        e.$wrapperEl.append(f(p[t], t));
                    }),
                        T.sort(function (t, e) {
                            return e - t;
                        }).forEach(function (t) {
                            e.$wrapperEl.prepend(f(p[t], t));
                        }),
                        e.$wrapperEl.children(".swiper-slide").css(v, x + "px"),
                        E();
                },
                renderSlide: function (t, e) {
                    var i = this.params.virtual;
                    if (i.cache && this.virtual.cache[e]) return this.virtual.cache[e];
                    var s = i.renderSlide ? v(i.renderSlide.call(this, t, e)) : v('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + e + '">' + t + "</div>");
                    return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", e), i.cache && (this.virtual.cache[e] = s), s;
                },
                appendSlide: function (t) {
                    if ("object" == typeof t && "length" in t) for (var e = 0; e < t.length; e += 1) t[e] && this.virtual.slides.push(t[e]);
                    else this.virtual.slides.push(t);
                    this.virtual.update(!0);
                },
                prependSlide: function (t) {
                    var e = this.activeIndex,
                        i = e + 1,
                        s = 1;
                    if (Array.isArray(t)) {
                        for (var r = 0; r < t.length; r += 1) t[r] && this.virtual.slides.unshift(t[r]);
                        (i = e + t.length), (s = t.length);
                    } else this.virtual.slides.unshift(t);
                    if (this.params.virtual.cache) {
                        var a = this.virtual.cache,
                            n = {};
                        Object.keys(a).forEach(function (t) {
                            var e = a[t],
                                i = e.attr("data-swiper-slide-index");
                            i && e.attr("data-swiper-slide-index", parseInt(i, 10) + 1), (n[parseInt(t, 10) + s] = e);
                        }),
                            (this.virtual.cache = n);
                    }
                    this.virtual.update(!0), this.slideTo(i, 0);
                },
                removeSlide: function (t) {
                    if (null != t) {
                        var e = this.activeIndex;
                        if (Array.isArray(t)) for (var i = t.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(t[i], 1), this.params.virtual.cache && delete this.virtual.cache[t[i]], t[i] < e && (e -= 1), (e = Math.max(e, 0));
                        else this.virtual.slides.splice(t, 1), this.params.virtual.cache && delete this.virtual.cache[t], t < e && (e -= 1), (e = Math.max(e, 0));
                        this.virtual.update(!0), this.slideTo(e, 0);
                    }
                },
                removeAllSlides: function () {
                    (this.virtual.slides = []), this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
                },
            },
            V = {
                name: "virtual",
                params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } },
                create: function () {
                    S(this, { virtual: e(e({}, Y), {}, { slides: this.params.virtual.slides, cache: {} }) });
                },
                on: {
                    beforeInit: function (t) {
                        if (t.params.virtual.enabled) {
                            t.classNames.push(t.params.containerModifierClass + "virtual");
                            var e = { watchSlidesProgress: !0 };
                            M(t.params, e), M(t.originalParams, e), t.params.initialSlide || t.virtual.update();
                        }
                    },
                    setTranslate: function (t) {
                        t.params.virtual.enabled && t.virtual.update();
                    },
                },
            },
            W = {
                handle: function (t) {
                    var e = o(),
                        i = a(),
                        s = this.rtlTranslate,
                        r = t;
                    r.originalEvent && (r = r.originalEvent);
                    var n = r.keyCode || r.charCode,
                        l = this.params.keyboard.pageUpDown,
                        h = l && 33 === n,
                        d = l && 34 === n,
                        u = 37 === n,
                        p = 39 === n,
                        c = 38 === n,
                        f = 40 === n;
                    if (!this.allowSlideNext && ((this.isHorizontal() && p) || (this.isVertical() && f) || d)) return !1;
                    if (!this.allowSlidePrev && ((this.isHorizontal() && u) || (this.isVertical() && c) || h)) return !1;
                    if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || (i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase())))) {
                        if (this.params.keyboard.onlyInViewport && (h || d || u || p || c || f)) {
                            var m = !1;
                            if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                            var v = e.innerWidth,
                                g = e.innerHeight,
                                y = this.$el.offset();
                            s && (y.left -= this.$el[0].scrollLeft);
                            for (
                                var b = [
                                        [y.left, y.top],
                                        [y.left + this.width, y.top],
                                        [y.left, y.top + this.height],
                                        [y.left + this.width, y.top + this.height],
                                    ],
                                    _ = 0;
                                _ < b.length;
                                _ += 1
                            ) {
                                var w = b[_];
                                w[0] >= 0 && w[0] <= v && w[1] >= 0 && w[1] <= g && (m = !0);
                            }
                            if (!m) return;
                        }
                        this.isHorizontal()
                            ? ((h || d || u || p) && (r.preventDefault ? r.preventDefault() : (r.returnValue = !1)), (((d || p) && !s) || ((h || u) && s)) && this.slideNext(), (((h || u) && !s) || ((d || p) && s)) && this.slidePrev())
                            : ((h || d || c || f) && (r.preventDefault ? r.preventDefault() : (r.returnValue = !1)), (d || f) && this.slideNext(), (h || c) && this.slidePrev()),
                            this.emit("keyPress", n);
                    }
                },
                enable: function () {
                    var t = a();
                    this.keyboard.enabled || (v(t).on("keydown", this.keyboard.handle), (this.keyboard.enabled = !0));
                },
                disable: function () {
                    var t = a();
                    this.keyboard.enabled && (v(t).off("keydown", this.keyboard.handle), (this.keyboard.enabled = !1));
                },
            },
            q = {
                name: "keyboard",
                params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
                create: function () {
                    S(this, { keyboard: e({ enabled: !1 }, W) });
                },
                on: {
                    init: function (t) {
                        t.params.keyboard.enabled && t.keyboard.enable();
                    },
                    destroy: function (t) {
                        t.keyboard.enabled && t.keyboard.disable();
                    },
                },
            },
            U = {
                lastScrollTime: x(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                event: function () {
                    return o().navigator.userAgent.indexOf("firefox") > -1
                        ? "DOMMouseScroll"
                        : (function () {
                              var t = a(),
                                  e = "onwheel" in t;
                              if (!e) {
                                  var i = t.createElement("div");
                                  i.setAttribute("onwheel", "return;"), (e = "function" == typeof i.onwheel);
                              }
                              return !e && t.implementation && t.implementation.hasFeature && !0 !== t.implementation.hasFeature("", "") && (e = t.implementation.hasFeature("Events.wheel", "3.0")), e;
                          })()
                        ? "wheel"
                        : "mousewheel";
                },
                normalize: function (t) {
                    var e = 0,
                        i = 0,
                        s = 0,
                        r = 0;
                    return (
                        "detail" in t && (i = t.detail),
                        "wheelDelta" in t && (i = -t.wheelDelta / 120),
                        "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120),
                        "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120),
                        "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((e = i), (i = 0)),
                        (s = 10 * e),
                        (r = 10 * i),
                        "deltaY" in t && (r = t.deltaY),
                        "deltaX" in t && (s = t.deltaX),
                        t.shiftKey && !s && ((s = r), (r = 0)),
                        (s || r) && t.deltaMode && (1 === t.deltaMode ? ((s *= 40), (r *= 40)) : ((s *= 800), (r *= 800))),
                        s && !e && (e = s < 1 ? -1 : 1),
                        r && !i && (i = r < 1 ? -1 : 1),
                        { spinX: e, spinY: i, pixelX: s, pixelY: r }
                    );
                },
                handleMouseEnter: function () {
                    this.mouseEntered = !0;
                },
                handleMouseLeave: function () {
                    this.mouseEntered = !1;
                },
                handle: function (t) {
                    var e = t,
                        i = this,
                        s = i.params.mousewheel;
                    i.params.cssMode && e.preventDefault();
                    var r = i.$el;
                    if (("container" !== i.params.mousewheel.eventsTarget && (r = v(i.params.mousewheel.eventsTarget)), !i.mouseEntered && !r[0].contains(e.target) && !s.releaseOnEdges)) return !0;
                    e.originalEvent && (e = e.originalEvent);
                    var a = 0,
                        n = i.rtlTranslate ? -1 : 1,
                        o = U.normalize(e);
                    if (s.forceToAxis)
                        if (i.isHorizontal()) {
                            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                            a = -o.pixelX * n;
                        } else {
                            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                            a = -o.pixelY;
                        }
                    else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
                    if (0 === a) return !0;
                    if ((s.invert && (a = -a), i.params.freeMode)) {
                        var l = { time: x(), delta: Math.abs(a), direction: Math.sign(a) },
                            h = i.mousewheel.lastEventBeforeSnap,
                            d = h && l.time < h.time + 500 && l.delta <= h.delta && l.direction === h.direction;
                        if (!d) {
                            (i.mousewheel.lastEventBeforeSnap = void 0), i.params.loop && i.loopFix();
                            var u = i.getTranslate() + a * s.sensitivity,
                                p = i.isBeginning,
                                c = i.isEnd;
                            if (
                                (u >= i.minTranslate() && (u = i.minTranslate()),
                                u <= i.maxTranslate() && (u = i.maxTranslate()),
                                i.setTransition(0),
                                i.setTranslate(u),
                                i.updateProgress(),
                                i.updateActiveIndex(),
                                i.updateSlidesClasses(),
                                ((!p && i.isBeginning) || (!c && i.isEnd)) && i.updateSlidesClasses(),
                                i.params.freeModeSticky)
                            ) {
                                clearTimeout(i.mousewheel.timeout), (i.mousewheel.timeout = void 0);
                                var f = i.mousewheel.recentWheelEvents;
                                f.length >= 15 && f.shift();
                                var m = f.length ? f[f.length - 1] : void 0,
                                    g = f[0];
                                if ((f.push(l), m && (l.delta > m.delta || l.direction !== m.direction))) f.splice(0);
                                else if (f.length >= 15 && l.time - g.time < 500 && g.delta - l.delta >= 1 && l.delta <= 6) {
                                    var y = a > 0 ? 0.8 : 0.2;
                                    (i.mousewheel.lastEventBeforeSnap = l),
                                        f.splice(0),
                                        (i.mousewheel.timeout = w(function () {
                                            i.slideToClosest(i.params.speed, !0, void 0, y);
                                        }, 0));
                                }
                                i.mousewheel.timeout ||
                                    (i.mousewheel.timeout = w(function () {
                                        (i.mousewheel.lastEventBeforeSnap = l), f.splice(0), i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                                    }, 500));
                            }
                            if ((d || i.emit("scroll", e), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate())) return !0;
                        }
                    } else {
                        var b = { time: x(), delta: Math.abs(a), direction: Math.sign(a), raw: t },
                            _ = i.mousewheel.recentWheelEvents;
                        _.length >= 2 && _.shift();
                        var E = _.length ? _[_.length - 1] : void 0;
                        if ((_.push(b), E ? (b.direction !== E.direction || b.delta > E.delta || b.time > E.time + 150) && i.mousewheel.animateSlider(b) : i.mousewheel.animateSlider(b), i.mousewheel.releaseScroll(b))) return !0;
                    }
                    return e.preventDefault ? e.preventDefault() : (e.returnValue = !1), !1;
                },
                animateSlider: function (t) {
                    var e = o();
                    return (
                        (t.delta >= 6 && x() - this.mousewheel.lastScrollTime < 60) ||
                        (t.direction < 0
                            ? (this.isEnd && !this.params.loop) || this.animating || (this.slideNext(), this.emit("scroll", t.raw))
                            : (this.isBeginning && !this.params.loop) || this.animating || (this.slidePrev(), this.emit("scroll", t.raw)),
                        (this.mousewheel.lastScrollTime = new e.Date().getTime()),
                        !1)
                    );
                },
                releaseScroll: function (t) {
                    var e = this.params.mousewheel;
                    if (t.direction < 0) {
                        if (this.isEnd && !this.params.loop && e.releaseOnEdges) return !0;
                    } else if (this.isBeginning && !this.params.loop && e.releaseOnEdges) return !0;
                    return !1;
                },
                enable: function () {
                    var t = U.event();
                    if (this.params.cssMode) return this.wrapperEl.removeEventListener(t, this.mousewheel.handle), !0;
                    if (!t) return !1;
                    if (this.mousewheel.enabled) return !1;
                    var e = this.$el;
                    return (
                        "container" !== this.params.mousewheel.eventsTarget && (e = v(this.params.mousewheel.eventsTarget)),
                        e.on("mouseenter", this.mousewheel.handleMouseEnter),
                        e.on("mouseleave", this.mousewheel.handleMouseLeave),
                        e.on(t, this.mousewheel.handle),
                        (this.mousewheel.enabled = !0),
                        !0
                    );
                },
                disable: function () {
                    var t = U.event();
                    if (this.params.cssMode) return this.wrapperEl.addEventListener(t, this.mousewheel.handle), !0;
                    if (!t) return !1;
                    if (!this.mousewheel.enabled) return !1;
                    var e = this.$el;
                    return "container" !== this.params.mousewheel.eventsTarget && (e = v(this.params.mousewheel.eventsTarget)), e.off(t, this.mousewheel.handle), (this.mousewheel.enabled = !1), !0;
                },
            },
            K = {
                update: function () {
                    var t = this.params.navigation;
                    if (!this.params.loop) {
                        var e = this.navigation,
                            i = e.$nextEl,
                            s = e.$prevEl;
                        s && s.length > 0 && (this.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                            i && i.length > 0 && (this.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass));
                    }
                },
                onPrevClick: function (t) {
                    t.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev();
                },
                onNextClick: function (t) {
                    t.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext();
                },
                init: function () {
                    var t,
                        e,
                        i = this.params.navigation;
                    (i.nextEl || i.prevEl) &&
                        (i.nextEl && ((t = v(i.nextEl)), this.params.uniqueNavElements && "string" == typeof i.nextEl && t.length > 1 && 1 === this.$el.find(i.nextEl).length && (t = this.$el.find(i.nextEl))),
                        i.prevEl && ((e = v(i.prevEl)), this.params.uniqueNavElements && "string" == typeof i.prevEl && e.length > 1 && 1 === this.$el.find(i.prevEl).length && (e = this.$el.find(i.prevEl))),
                        t && t.length > 0 && t.on("click", this.navigation.onNextClick),
                        e && e.length > 0 && e.on("click", this.navigation.onPrevClick),
                        M(this.navigation, { $nextEl: t, nextEl: t && t[0], $prevEl: e, prevEl: e && e[0] }));
                },
                destroy: function () {
                    var t = this.navigation,
                        e = t.$nextEl,
                        i = t.$prevEl;
                    e && e.length && (e.off("click", this.navigation.onNextClick), e.removeClass(this.params.navigation.disabledClass)),
                        i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
                },
            },
            Q = {
                update: function () {
                    var t = this.rtl,
                        e = this.params.pagination;
                    if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var i,
                            s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            r = this.pagination.$el,
                            a = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                        if (
                            (this.params.loop
                                ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides),
                                  i > a - 1 && (i -= a),
                                  i < 0 && "bullets" !== this.params.paginationType && (i = a + i))
                                : (i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0),
                            "bullets" === e.type && this.pagination.bullets && this.pagination.bullets.length > 0)
                        ) {
                            var n,
                                o,
                                l,
                                h = this.pagination.bullets;
                            if (
                                (e.dynamicBullets &&
                                    ((this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                    r.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (e.dynamicMainBullets + 4) + "px"),
                                    e.dynamicMainBullets > 1 &&
                                        void 0 !== this.previousIndex &&
                                        ((this.pagination.dynamicBulletIndex += i - this.previousIndex),
                                        this.pagination.dynamicBulletIndex > e.dynamicMainBullets - 1
                                            ? (this.pagination.dynamicBulletIndex = e.dynamicMainBullets - 1)
                                            : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)),
                                    (n = i - this.pagination.dynamicBulletIndex),
                                    (l = ((o = n + (Math.min(h.length, e.dynamicMainBullets) - 1)) + n) / 2)),
                                h.removeClass(
                                    e.bulletActiveClass + " " + e.bulletActiveClass + "-next " + e.bulletActiveClass + "-next-next " + e.bulletActiveClass + "-prev " + e.bulletActiveClass + "-prev-prev " + e.bulletActiveClass + "-main"
                                ),
                                r.length > 1)
                            )
                                h.each(function (t) {
                                    var s = v(t),
                                        r = s.index();
                                    r === i && s.addClass(e.bulletActiveClass),
                                        e.dynamicBullets &&
                                            (r >= n && r <= o && s.addClass(e.bulletActiveClass + "-main"),
                                            r === n &&
                                                s
                                                    .prev()
                                                    .addClass(e.bulletActiveClass + "-prev")
                                                    .prev()
                                                    .addClass(e.bulletActiveClass + "-prev-prev"),
                                            r === o &&
                                                s
                                                    .next()
                                                    .addClass(e.bulletActiveClass + "-next")
                                                    .next()
                                                    .addClass(e.bulletActiveClass + "-next-next"));
                                });
                            else {
                                var d = h.eq(i),
                                    u = d.index();
                                if ((d.addClass(e.bulletActiveClass), e.dynamicBullets)) {
                                    for (var p = h.eq(n), c = h.eq(o), f = n; f <= o; f += 1) h.eq(f).addClass(e.bulletActiveClass + "-main");
                                    if (this.params.loop)
                                        if (u >= h.length - e.dynamicMainBullets) {
                                            for (var m = e.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(e.bulletActiveClass + "-main");
                                            h.eq(h.length - e.dynamicMainBullets - 1).addClass(e.bulletActiveClass + "-prev");
                                        } else
                                            p
                                                .prev()
                                                .addClass(e.bulletActiveClass + "-prev")
                                                .prev()
                                                .addClass(e.bulletActiveClass + "-prev-prev"),
                                                c
                                                    .next()
                                                    .addClass(e.bulletActiveClass + "-next")
                                                    .next()
                                                    .addClass(e.bulletActiveClass + "-next-next");
                                    else
                                        p
                                            .prev()
                                            .addClass(e.bulletActiveClass + "-prev")
                                            .prev()
                                            .addClass(e.bulletActiveClass + "-prev-prev"),
                                            c
                                                .next()
                                                .addClass(e.bulletActiveClass + "-next")
                                                .next()
                                                .addClass(e.bulletActiveClass + "-next-next");
                                }
                            }
                            if (e.dynamicBullets) {
                                var g = Math.min(h.length, e.dynamicMainBullets + 4),
                                    y = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - l * this.pagination.bulletSize,
                                    b = t ? "right" : "left";
                                h.css(this.isHorizontal() ? b : "top", y + "px");
                            }
                        }
                        if (("fraction" === e.type && (r.find("." + e.currentClass).text(e.formatFractionCurrent(i + 1)), r.find("." + e.totalClass).text(e.formatFractionTotal(a))), "progressbar" === e.type)) {
                            var _;
                            _ = e.progressbarOpposite ? (this.isHorizontal() ? "vertical" : "horizontal") : this.isHorizontal() ? "horizontal" : "vertical";
                            var w = (i + 1) / a,
                                x = 1,
                                E = 1;
                            "horizontal" === _ ? (x = w) : (E = w),
                                r
                                    .find("." + e.progressbarFillClass)
                                    .transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + E + ")")
                                    .transition(this.params.speed);
                        }
                        "custom" === e.type && e.renderCustom ? (r.html(e.renderCustom(this, i + 1, a)), this.emit("paginationRender", r[0])) : this.emit("paginationUpdate", r[0]),
                            r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass);
                    }
                },
                render: function () {
                    var t = this.params.pagination;
                    if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var e = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                            i = this.pagination.$el,
                            s = "";
                        if ("bullets" === t.type) {
                            for (var r = this.params.loop ? Math.ceil((e - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, a = 0; a < r; a += 1)
                                t.renderBullet ? (s += t.renderBullet.call(this, a, t.bulletClass)) : (s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">");
                            i.html(s), (this.pagination.bullets = i.find("." + t.bulletClass));
                        }
                        "fraction" === t.type && ((s = t.renderFraction ? t.renderFraction.call(this, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>'), i.html(s)),
                            "progressbar" === t.type && ((s = t.renderProgressbar ? t.renderProgressbar.call(this, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>'), i.html(s)),
                            "custom" !== t.type && this.emit("paginationRender", this.pagination.$el[0]);
                    }
                },
                init: function () {
                    var t = this,
                        e = t.params.pagination;
                    if (e.el) {
                        var i = v(e.el);
                        0 !== i.length &&
                            (t.params.uniqueNavElements && "string" == typeof e.el && i.length > 1 && (i = t.$el.find(e.el)),
                            "bullets" === e.type && e.clickable && i.addClass(e.clickableClass),
                            i.addClass(e.modifierClass + e.type),
                            "bullets" === e.type && e.dynamicBullets && (i.addClass("" + e.modifierClass + e.type + "-dynamic"), (t.pagination.dynamicBulletIndex = 0), e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                            "progressbar" === e.type && e.progressbarOpposite && i.addClass(e.progressbarOppositeClass),
                            e.clickable &&
                                i.on("click", "." + e.bulletClass, function (e) {
                                    e.preventDefault();
                                    var i = v(this).index() * t.params.slidesPerGroup;
                                    t.params.loop && (i += t.loopedSlides), t.slideTo(i);
                                }),
                            M(t.pagination, { $el: i, el: i[0] }));
                    }
                },
                destroy: function () {
                    var t = this.params.pagination;
                    if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                        var e = this.pagination.$el;
                        e.removeClass(t.hiddenClass), e.removeClass(t.modifierClass + t.type), this.pagination.bullets && this.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && e.off("click", "." + t.bulletClass);
                    }
                },
            },
            Z = {
                setTranslate: function () {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var t = this.scrollbar,
                            e = this.rtlTranslate,
                            i = this.progress,
                            s = t.dragSize,
                            r = t.trackSize,
                            a = t.$dragEl,
                            n = t.$el,
                            o = this.params.scrollbar,
                            l = s,
                            h = (r - s) * i;
                        e ? ((h = -h) > 0 ? ((l = s - h), (h = 0)) : -h + s > r && (l = r + h)) : h < 0 ? ((l = s + h), (h = 0)) : h + s > r && (l = r - h),
                            this.isHorizontal() ? (a.transform("translate3d(" + h + "px, 0, 0)"), (a[0].style.width = l + "px")) : (a.transform("translate3d(0px, " + h + "px, 0)"), (a[0].style.height = l + "px")),
                            o.hide &&
                                (clearTimeout(this.scrollbar.timeout),
                                (n[0].style.opacity = 1),
                                (this.scrollbar.timeout = setTimeout(function () {
                                    (n[0].style.opacity = 0), n.transition(400);
                                }, 1e3)));
                    }
                },
                setTransition: function (t) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(t);
                },
                updateSize: function () {
                    if (this.params.scrollbar.el && this.scrollbar.el) {
                        var t = this.scrollbar,
                            e = t.$dragEl,
                            i = t.$el;
                        (e[0].style.width = ""), (e[0].style.height = "");
                        var s,
                            r = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                            a = this.size / this.virtualSize,
                            n = a * (r / this.size);
                        (s = "auto" === this.params.scrollbar.dragSize ? r * a : parseInt(this.params.scrollbar.dragSize, 10)),
                            this.isHorizontal() ? (e[0].style.width = s + "px") : (e[0].style.height = s + "px"),
                            (i[0].style.display = a >= 1 ? "none" : ""),
                            this.params.scrollbar.hide && (i[0].style.opacity = 0),
                            M(t, { trackSize: r, divider: a, moveDivider: n, dragSize: s }),
                            t.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
                    }
                },
                getPointerPosition: function (t) {
                    return this.isHorizontal() ? ("touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX) : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY;
                },
                setDragPosition: function (t) {
                    var e,
                        i = this.scrollbar,
                        s = this.rtlTranslate,
                        r = i.$el,
                        a = i.dragSize,
                        n = i.trackSize,
                        o = i.dragStartPos;
                    (e = (i.getPointerPosition(t) - r.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : a / 2)) / (n - a)), (e = Math.max(Math.min(e, 1), 0)), s && (e = 1 - e);
                    var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * e;
                    this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses();
                },
                onDragStart: function (t) {
                    var e = this.params.scrollbar,
                        i = this.scrollbar,
                        s = this.$wrapperEl,
                        r = i.$el,
                        a = i.$dragEl;
                    (this.scrollbar.isTouched = !0),
                        (this.scrollbar.dragStartPos = t.target === a[0] || t.target === a ? i.getPointerPosition(t) - t.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null),
                        t.preventDefault(),
                        t.stopPropagation(),
                        s.transition(100),
                        a.transition(100),
                        i.setDragPosition(t),
                        clearTimeout(this.scrollbar.dragTimeout),
                        r.transition(0),
                        e.hide && r.css("opacity", 1),
                        this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"),
                        this.emit("scrollbarDragStart", t);
                },
                onDragMove: function (t) {
                    var e = this.scrollbar,
                        i = this.$wrapperEl,
                        s = e.$el,
                        r = e.$dragEl;
                    this.scrollbar.isTouched && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1), e.setDragPosition(t), i.transition(0), s.transition(0), r.transition(0), this.emit("scrollbarDragMove", t));
                },
                onDragEnd: function (t) {
                    var e = this.params.scrollbar,
                        i = this.scrollbar,
                        s = this.$wrapperEl,
                        r = i.$el;
                    this.scrollbar.isTouched &&
                        ((this.scrollbar.isTouched = !1),
                        this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
                        e.hide &&
                            (clearTimeout(this.scrollbar.dragTimeout),
                            (this.scrollbar.dragTimeout = w(function () {
                                r.css("opacity", 0), r.transition(400);
                            }, 1e3))),
                        this.emit("scrollbarDragEnd", t),
                        e.snapOnRelease && this.slideToClosest());
                },
                enableDraggable: function () {
                    if (this.params.scrollbar.el) {
                        var t = a(),
                            e = this.scrollbar,
                            i = this.touchEventsTouch,
                            s = this.touchEventsDesktop,
                            r = this.params,
                            n = this.support,
                            o = e.$el[0],
                            l = !(!n.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                            h = !(!n.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                        n.touch
                            ? (o.addEventListener(i.start, this.scrollbar.onDragStart, l), o.addEventListener(i.move, this.scrollbar.onDragMove, l), o.addEventListener(i.end, this.scrollbar.onDragEnd, h))
                            : (o.addEventListener(s.start, this.scrollbar.onDragStart, l), t.addEventListener(s.move, this.scrollbar.onDragMove, l), t.addEventListener(s.end, this.scrollbar.onDragEnd, h));
                    }
                },
                disableDraggable: function () {
                    if (this.params.scrollbar.el) {
                        var t = a(),
                            e = this.scrollbar,
                            i = this.touchEventsTouch,
                            s = this.touchEventsDesktop,
                            r = this.params,
                            n = this.support,
                            o = e.$el[0],
                            l = !(!n.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
                            h = !(!n.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
                        n.touch
                            ? (o.removeEventListener(i.start, this.scrollbar.onDragStart, l), o.removeEventListener(i.move, this.scrollbar.onDragMove, l), o.removeEventListener(i.end, this.scrollbar.onDragEnd, h))
                            : (o.removeEventListener(s.start, this.scrollbar.onDragStart, l), t.removeEventListener(s.move, this.scrollbar.onDragMove, l), t.removeEventListener(s.end, this.scrollbar.onDragEnd, h));
                    }
                },
                init: function () {
                    if (this.params.scrollbar.el) {
                        var t = this.scrollbar,
                            e = this.$el,
                            i = this.params.scrollbar,
                            s = v(i.el);
                        this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === e.find(i.el).length && (s = e.find(i.el));
                        var r = s.find("." + this.params.scrollbar.dragClass);
                        0 === r.length && ((r = v('<div class="' + this.params.scrollbar.dragClass + '"></div>')), s.append(r)), M(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }), i.draggable && t.enableDraggable();
                    }
                },
                destroy: function () {
                    this.scrollbar.disableDraggable();
                },
            },
            J = {
                setTransform: function (t, e) {
                    var i = this.rtl,
                        s = v(t),
                        r = i ? -1 : 1,
                        a = s.attr("data-swiper-parallax") || "0",
                        n = s.attr("data-swiper-parallax-x"),
                        o = s.attr("data-swiper-parallax-y"),
                        l = s.attr("data-swiper-parallax-scale"),
                        h = s.attr("data-swiper-parallax-opacity");
                    if (
                        (n || o ? ((n = n || "0"), (o = o || "0")) : this.isHorizontal() ? ((n = a), (o = "0")) : ((o = a), (n = "0")),
                        (n = n.indexOf("%") >= 0 ? parseInt(n, 10) * e * r + "%" : n * e * r + "px"),
                        (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * e + "%" : o * e + "px"),
                        null != h)
                    ) {
                        var d = h - (h - 1) * (1 - Math.abs(e));
                        s[0].style.opacity = d;
                    }
                    if (null == l) s.transform("translate3d(" + n + ", " + o + ", 0px)");
                    else {
                        var u = l - (l - 1) * (1 - Math.abs(e));
                        s.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + u + ")");
                    }
                },
                setTranslate: function () {
                    var t = this,
                        e = t.$el,
                        i = t.slides,
                        s = t.progress,
                        r = t.snapGrid;
                    e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
                        t.parallax.setTransform(e, s);
                    }),
                        i.each(function (e, i) {
                            var a = e.progress;
                            t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (a += Math.ceil(i / 2) - s * (r.length - 1)),
                                (a = Math.min(Math.max(a, -1), 1)),
                                v(e)
                                    .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
                                    .each(function (e) {
                                        t.parallax.setTransform(e, a);
                                    });
                        });
                },
                setTransition: function (t) {
                    void 0 === t && (t = this.params.speed),
                        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e) {
                            var i = v(e),
                                s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                            0 === t && (s = 0), i.transition(s);
                        });
                },
            },
            tt = {
                getDistanceBetweenTouches: function (t) {
                    if (t.targetTouches.length < 2) return 1;
                    var e = t.targetTouches[0].pageX,
                        i = t.targetTouches[0].pageY,
                        s = t.targetTouches[1].pageX,
                        r = t.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(s - e, 2) + Math.pow(r - i, 2));
                },
                onGestureStart: function (t) {
                    var e = this.support,
                        i = this.params.zoom,
                        s = this.zoom,
                        r = s.gesture;
                    if (((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !e.gestures)) {
                        if ("touchstart" !== t.type || ("touchstart" === t.type && t.targetTouches.length < 2)) return;
                        (s.fakeGestureTouched = !0), (r.scaleStart = tt.getDistanceBetweenTouches(t));
                    }
                    (r.$slideEl && r.$slideEl.length) ||
                    ((r.$slideEl = v(t.target).closest("." + this.params.slideClass)),
                    0 === r.$slideEl.length && (r.$slideEl = this.slides.eq(this.activeIndex)),
                    (r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                    (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)),
                    (r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
                    0 !== r.$imageWrapEl.length)
                        ? (r.$imageEl && r.$imageEl.transition(0), (this.zoom.isScaling = !0))
                        : (r.$imageEl = void 0);
                },
                onGestureChange: function (t) {
                    var e = this.support,
                        i = this.params.zoom,
                        s = this.zoom,
                        r = s.gesture;
                    if (!e.gestures) {
                        if ("touchmove" !== t.type || ("touchmove" === t.type && t.targetTouches.length < 2)) return;
                        (s.fakeGestureMoved = !0), (r.scaleMove = tt.getDistanceBetweenTouches(t));
                    }
                    r.$imageEl && 0 !== r.$imageEl.length
                        ? (e.gestures ? (s.scale = t.scale * s.currentScale) : (s.scale = (r.scaleMove / r.scaleStart) * s.currentScale),
                          s.scale > r.maxRatio && (s.scale = r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, 0.5)),
                          s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, 0.5)),
                          r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")"))
                        : "gesturechange" === t.type && s.onGestureStart(t);
                },
                onGestureEnd: function (t) {
                    var e = this.device,
                        i = this.support,
                        s = this.params.zoom,
                        r = this.zoom,
                        a = r.gesture;
                    if (!i.gestures) {
                        if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
                        if ("touchend" !== t.type || ("touchend" === t.type && t.changedTouches.length < 2 && !e.android)) return;
                        (r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1);
                    }
                    a.$imageEl &&
                        0 !== a.$imageEl.length &&
                        ((r.scale = Math.max(Math.min(r.scale, a.maxRatio), s.minRatio)),
                        a.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"),
                        (r.currentScale = r.scale),
                        (r.isScaling = !1),
                        1 === r.scale && (a.$slideEl = void 0));
                },
                onTouchStart: function (t) {
                    var e = this.device,
                        i = this.zoom,
                        s = i.gesture,
                        r = i.image;
                    s.$imageEl &&
                        0 !== s.$imageEl.length &&
                        (r.isTouched ||
                            (e.android && t.cancelable && t.preventDefault(),
                            (r.isTouched = !0),
                            (r.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX),
                            (r.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY)));
                },
                onTouchMove: function (t) {
                    var e = this.zoom,
                        i = e.gesture,
                        s = e.image,
                        r = e.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && ((this.allowClick = !1), s.isTouched && i.$slideEl)) {
                        s.isMoved ||
                            ((s.width = i.$imageEl[0].offsetWidth),
                            (s.height = i.$imageEl[0].offsetHeight),
                            (s.startX = E(i.$imageWrapEl[0], "x") || 0),
                            (s.startY = E(i.$imageWrapEl[0], "y") || 0),
                            (i.slideWidth = i.$slideEl[0].offsetWidth),
                            (i.slideHeight = i.$slideEl[0].offsetHeight),
                            i.$imageWrapEl.transition(0),
                            this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
                        var a = s.width * e.scale,
                            n = s.height * e.scale;
                        if (!(a < i.slideWidth && n < i.slideHeight)) {
                            if (
                                ((s.minX = Math.min(i.slideWidth / 2 - a / 2, 0)),
                                (s.maxX = -s.minX),
                                (s.minY = Math.min(i.slideHeight / 2 - n / 2, 0)),
                                (s.maxY = -s.minY),
                                (s.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX),
                                (s.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY),
                                !s.isMoved && !e.isScaling)
                            ) {
                                if (this.isHorizontal() && ((Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x) || (Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)))
                                    return void (s.isTouched = !1);
                                if (!this.isHorizontal() && ((Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y) || (Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)))
                                    return void (s.isTouched = !1);
                            }
                            t.cancelable && t.preventDefault(),
                                t.stopPropagation(),
                                (s.isMoved = !0),
                                (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
                                (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
                                s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                                s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                                s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                                s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                                r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                                r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                                r.prevTime || (r.prevTime = Date.now()),
                                (r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2),
                                (r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2),
                                Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                                Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                                (r.prevPositionX = s.touchesCurrent.x),
                                (r.prevPositionY = s.touchesCurrent.y),
                                (r.prevTime = Date.now()),
                                i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
                        }
                    }
                },
                onTouchEnd: function () {
                    var t = this.zoom,
                        e = t.gesture,
                        i = t.image,
                        s = t.velocity;
                    if (e.$imageEl && 0 !== e.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return (i.isTouched = !1), void (i.isMoved = !1);
                        (i.isTouched = !1), (i.isMoved = !1);
                        var r = 300,
                            a = 300,
                            n = s.x * r,
                            o = i.currentX + n,
                            l = s.y * a,
                            h = i.currentY + l;
                        0 !== s.x && (r = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (a = Math.abs((h - i.currentY) / s.y));
                        var d = Math.max(r, a);
                        (i.currentX = o), (i.currentY = h);
                        var u = i.width * t.scale,
                            p = i.height * t.scale;
                        (i.minX = Math.min(e.slideWidth / 2 - u / 2, 0)),
                            (i.maxX = -i.minX),
                            (i.minY = Math.min(e.slideHeight / 2 - p / 2, 0)),
                            (i.maxY = -i.minY),
                            (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
                            (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
                            e.$imageWrapEl.transition(d).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
                    }
                },
                onTransitionEnd: function () {
                    var t = this.zoom,
                        e = t.gesture;
                    e.$slideEl &&
                        this.previousIndex !== this.activeIndex &&
                        (e.$imageEl && e.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                        e.$imageWrapEl && e.$imageWrapEl.transform("translate3d(0,0,0)"),
                        (t.scale = 1),
                        (t.currentScale = 1),
                        (e.$slideEl = void 0),
                        (e.$imageEl = void 0),
                        (e.$imageWrapEl = void 0));
                },
                toggle: function (t) {
                    var e = this.zoom;
                    e.scale && 1 !== e.scale ? e.out() : e.in(t);
                },
                in: function (t) {
                    var e,
                        i,
                        s,
                        r,
                        a,
                        n,
                        o,
                        l,
                        h,
                        d,
                        u,
                        p,
                        c,
                        f,
                        m,
                        v,
                        g = this.zoom,
                        y = this.params.zoom,
                        b = g.gesture,
                        _ = g.image;
                    b.$slideEl ||
                        (this.params.virtual && this.params.virtual.enabled && this.virtual ? (b.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass)) : (b.$slideEl = this.slides.eq(this.activeIndex)),
                        (b.$imageEl = b.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                        (b.$imageWrapEl = b.$imageEl.parent("." + y.containerClass))),
                        b.$imageEl &&
                            0 !== b.$imageEl.length &&
                            (b.$slideEl.addClass("" + y.zoomedSlideClass),
                            void 0 === _.touchesStart.x && t
                                ? ((e = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX), (i = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY))
                                : ((e = _.touchesStart.x), (i = _.touchesStart.y)),
                            (g.scale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio),
                            (g.currentScale = b.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio),
                            t
                                ? ((m = b.$slideEl[0].offsetWidth),
                                  (v = b.$slideEl[0].offsetHeight),
                                  (s = b.$slideEl.offset().left + m / 2 - e),
                                  (r = b.$slideEl.offset().top + v / 2 - i),
                                  (o = b.$imageEl[0].offsetWidth),
                                  (l = b.$imageEl[0].offsetHeight),
                                  (h = o * g.scale),
                                  (d = l * g.scale),
                                  (c = -(u = Math.min(m / 2 - h / 2, 0))),
                                  (f = -(p = Math.min(v / 2 - d / 2, 0))),
                                  (a = s * g.scale) < u && (a = u),
                                  a > c && (a = c),
                                  (n = r * g.scale) < p && (n = p),
                                  n > f && (n = f))
                                : ((a = 0), (n = 0)),
                            b.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + n + "px,0)"),
                            b.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"));
                },
                out: function () {
                    var t = this.zoom,
                        e = this.params.zoom,
                        i = t.gesture;
                    i.$slideEl ||
                        (this.params.virtual && this.params.virtual.enabled && this.virtual ? (i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass)) : (i.$slideEl = this.slides.eq(this.activeIndex)),
                        (i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                        (i.$imageWrapEl = i.$imageEl.parent("." + e.containerClass))),
                        i.$imageEl &&
                            0 !== i.$imageEl.length &&
                            ((t.scale = 1),
                            (t.currentScale = 1),
                            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                            i.$slideEl.removeClass("" + e.zoomedSlideClass),
                            (i.$slideEl = void 0));
                },
                toggleGestures: function (t) {
                    var e = this.zoom,
                        i = e.slideSelector,
                        s = e.passiveListener;
                    this.$wrapperEl[t]("gesturestart", i, e.onGestureStart, s), this.$wrapperEl[t]("gesturechange", i, e.onGestureChange, s), this.$wrapperEl[t]("gestureend", i, e.onGestureEnd, s);
                },
                enableGestures: function () {
                    this.zoom.gesturesEnabled || ((this.zoom.gesturesEnabled = !0), this.zoom.toggleGestures("on"));
                },
                disableGestures: function () {
                    this.zoom.gesturesEnabled && ((this.zoom.gesturesEnabled = !1), this.zoom.toggleGestures("off"));
                },
                enable: function () {
                    var t = this.support,
                        e = this.zoom;
                    if (!e.enabled) {
                        e.enabled = !0;
                        var i = !("touchstart" !== this.touchEvents.start || !t.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 },
                            s = !t.passiveListener || { passive: !1, capture: !0 },
                            r = "." + this.params.slideClass;
                        (this.zoom.passiveListener = i),
                            (this.zoom.slideSelector = r),
                            t.gestures
                                ? (this.$wrapperEl.on(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.on(this.touchEvents.end, this.zoom.disableGestures, i))
                                : "touchstart" === this.touchEvents.start &&
                                  (this.$wrapperEl.on(this.touchEvents.start, r, e.onGestureStart, i),
                                  this.$wrapperEl.on(this.touchEvents.move, r, e.onGestureChange, s),
                                  this.$wrapperEl.on(this.touchEvents.end, r, e.onGestureEnd, i),
                                  this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, r, e.onGestureEnd, i)),
                            this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, s);
                    }
                },
                disable: function () {
                    var t = this.zoom;
                    if (t.enabled) {
                        var e = this.support;
                        this.zoom.enabled = !1;
                        var i = !("touchstart" !== this.touchEvents.start || !e.passiveListener || !this.params.passiveListeners) && { passive: !0, capture: !1 },
                            s = !e.passiveListener || { passive: !1, capture: !0 },
                            r = "." + this.params.slideClass;
                        e.gestures
                            ? (this.$wrapperEl.off(this.touchEvents.start, this.zoom.enableGestures, i), this.$wrapperEl.off(this.touchEvents.end, this.zoom.disableGestures, i))
                            : "touchstart" === this.touchEvents.start &&
                              (this.$wrapperEl.off(this.touchEvents.start, r, t.onGestureStart, i),
                              this.$wrapperEl.off(this.touchEvents.move, r, t.onGestureChange, s),
                              this.$wrapperEl.off(this.touchEvents.end, r, t.onGestureEnd, i),
                              this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, r, t.onGestureEnd, i)),
                            this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove, s);
                    }
                },
            },
            et = {
                loadInSlide: function (t, e) {
                    void 0 === e && (e = !0);
                    var i = this,
                        s = i.params.lazy;
                    if (void 0 !== t && 0 !== i.slides.length) {
                        var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                            a = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                        !r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || a.push(r[0]),
                            0 !== a.length &&
                                a.each(function (t) {
                                    var a = v(t);
                                    a.addClass(s.loadingClass);
                                    var n = a.attr("data-background"),
                                        o = a.attr("data-src"),
                                        l = a.attr("data-srcset"),
                                        h = a.attr("data-sizes"),
                                        d = a.parent("picture");
                                    i.loadImage(a[0], o || n, l, h, !1, function () {
                                        if (null != i && i && (!i || i.params) && !i.destroyed) {
                                            if (
                                                (n
                                                    ? (a.css("background-image", 'url("' + n + '")'), a.removeAttr("data-background"))
                                                    : (l && (a.attr("srcset", l), a.removeAttr("data-srcset")),
                                                      h && (a.attr("sizes", h), a.removeAttr("data-sizes")),
                                                      d.length &&
                                                          d.children("source").each(function (t) {
                                                              var e = v(t);
                                                              e.attr("data-srcset") && (e.attr("srcset", e.attr("data-srcset")), e.removeAttr("data-srcset"));
                                                          }),
                                                      o && (a.attr("src", o), a.removeAttr("data-src"))),
                                                a.addClass(s.loadedClass).removeClass(s.loadingClass),
                                                r.find("." + s.preloaderClass).remove(),
                                                i.params.loop && e)
                                            ) {
                                                var t = r.attr("data-swiper-slide-index");
                                                if (r.hasClass(i.params.slideDuplicateClass)) {
                                                    var u = i.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                                    i.lazy.loadInSlide(u.index(), !1);
                                                } else {
                                                    var p = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                                    i.lazy.loadInSlide(p.index(), !1);
                                                }
                                            }
                                            i.emit("lazyImageReady", r[0], a[0]), i.params.autoHeight && i.updateAutoHeight();
                                        }
                                    }),
                                        i.emit("lazyImageLoad", r[0], a[0]);
                                });
                    }
                },
                load: function () {
                    var t = this,
                        e = t.$wrapperEl,
                        i = t.params,
                        s = t.slides,
                        r = t.activeIndex,
                        a = t.virtual && i.virtual.enabled,
                        n = i.lazy,
                        o = i.slidesPerView;
                    function l(t) {
                        if (a) {
                            if (e.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]').length) return !0;
                        } else if (s[t]) return !0;
                        return !1;
                    }
                    function h(t) {
                        return a ? v(t).attr("data-swiper-slide-index") : v(t).index();
                    }
                    if (("auto" === o && (o = 0), t.lazy.initialImageLoaded || (t.lazy.initialImageLoaded = !0), t.params.watchSlidesVisibility))
                        e.children("." + i.slideVisibleClass).each(function (e) {
                            var i = a ? v(e).attr("data-swiper-slide-index") : v(e).index();
                            t.lazy.loadInSlide(i);
                        });
                    else if (o > 1) for (var d = r; d < r + o; d += 1) l(d) && t.lazy.loadInSlide(d);
                    else t.lazy.loadInSlide(r);
                    if (n.loadPrevNext)
                        if (o > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
                            for (var u = n.loadPrevNextAmount, p = o, c = Math.min(r + p + Math.max(u, p), s.length), f = Math.max(r - Math.max(p, u), 0), m = r + o; m < c; m += 1) l(m) && t.lazy.loadInSlide(m);
                            for (var g = f; g < r; g += 1) l(g) && t.lazy.loadInSlide(g);
                        } else {
                            var y = e.children("." + i.slideNextClass);
                            y.length > 0 && t.lazy.loadInSlide(h(y));
                            var b = e.children("." + i.slidePrevClass);
                            b.length > 0 && t.lazy.loadInSlide(h(b));
                        }
                },
            },
            it = {
                LinearSpline: function (t, e) {
                    var i, s, r, a, n;
                    return (
                        (this.x = t),
                        (this.y = e),
                        (this.lastIndex = t.length - 1),
                        (this.interpolate = function (t) {
                            return t
                                ? ((n = (function (t, e) {
                                      for (s = -1, i = t.length; i - s > 1; ) t[(r = (i + s) >> 1)] <= e ? (s = r) : (i = r);
                                      return i;
                                  })(this.x, t)),
                                  (a = n - 1),
                                  ((t - this.x[a]) * (this.y[n] - this.y[a])) / (this.x[n] - this.x[a]) + this.y[a])
                                : 0;
                        }),
                        this
                    );
                },
                getInterpolateFunction: function (t) {
                    this.controller.spline || (this.controller.spline = this.params.loop ? new it.LinearSpline(this.slidesGrid, t.slidesGrid) : new it.LinearSpline(this.snapGrid, t.snapGrid));
                },
                setTranslate: function (t, e) {
                    var i,
                        s,
                        r = this,
                        a = r.controller.control,
                        n = r.constructor;
                    function o(t) {
                        var e = r.rtlTranslate ? -r.translate : r.translate;
                        "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(t), (s = -r.controller.spline.interpolate(-e))),
                            (s && "container" !== r.params.controller.by) || ((i = (t.maxTranslate() - t.minTranslate()) / (r.maxTranslate() - r.minTranslate())), (s = (e - r.minTranslate()) * i + t.minTranslate())),
                            r.params.controller.inverse && (s = t.maxTranslate() - s),
                            t.updateProgress(s),
                            t.setTranslate(s, r),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses();
                    }
                    if (Array.isArray(a)) for (var l = 0; l < a.length; l += 1) a[l] !== e && a[l] instanceof n && o(a[l]);
                    else a instanceof n && e !== a && o(a);
                },
                setTransition: function (t, e) {
                    var i,
                        s = this,
                        r = s.constructor,
                        a = s.controller.control;
                    function n(e) {
                        e.setTransition(t, s),
                            0 !== t &&
                                (e.transitionStart(),
                                e.params.autoHeight &&
                                    w(function () {
                                        e.updateAutoHeight();
                                    }),
                                e.$wrapperEl.transitionEnd(function () {
                                    a && (e.params.loop && "slide" === s.params.controller.by && e.loopFix(), e.transitionEnd());
                                }));
                    }
                    if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== e && a[i] instanceof r && n(a[i]);
                    else a instanceof r && e !== a && n(a);
                },
            },
            st = {
                makeElFocusable: function (t) {
                    return t.attr("tabIndex", "0"), t;
                },
                makeElNotFocusable: function (t) {
                    return t.attr("tabIndex", "-1"), t;
                },
                addElRole: function (t, e) {
                    return t.attr("role", e), t;
                },
                addElLabel: function (t, e) {
                    return t.attr("aria-label", e), t;
                },
                disableEl: function (t) {
                    return t.attr("aria-disabled", !0), t;
                },
                enableEl: function (t) {
                    return t.attr("aria-disabled", !1), t;
                },
                onEnterKey: function (t) {
                    var e = this.params.a11y;
                    if (13 === t.keyCode) {
                        var i = v(t.target);
                        this.navigation &&
                            this.navigation.$nextEl &&
                            i.is(this.navigation.$nextEl) &&
                            ((this.isEnd && !this.params.loop) || this.slideNext(), this.isEnd ? this.a11y.notify(e.lastSlideMessage) : this.a11y.notify(e.nextSlideMessage)),
                            this.navigation &&
                                this.navigation.$prevEl &&
                                i.is(this.navigation.$prevEl) &&
                                ((this.isBeginning && !this.params.loop) || this.slidePrev(), this.isBeginning ? this.a11y.notify(e.firstSlideMessage) : this.a11y.notify(e.prevSlideMessage)),
                            this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
                    }
                },
                notify: function (t) {
                    var e = this.a11y.liveRegion;
                    0 !== e.length && (e.html(""), e.html(t));
                },
                updateNavigation: function () {
                    if (!this.params.loop && this.navigation) {
                        var t = this.navigation,
                            e = t.$nextEl,
                            i = t.$prevEl;
                        i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))),
                            e && e.length > 0 && (this.isEnd ? (this.a11y.disableEl(e), this.a11y.makeElNotFocusable(e)) : (this.a11y.enableEl(e), this.a11y.makeElFocusable(e)));
                    }
                },
                updatePagination: function () {
                    var t = this,
                        e = t.params.a11y;
                    t.pagination &&
                        t.params.pagination.clickable &&
                        t.pagination.bullets &&
                        t.pagination.bullets.length &&
                        t.pagination.bullets.each(function (i) {
                            var s = v(i);
                            t.a11y.makeElFocusable(s), t.a11y.addElRole(s, "button"), t.a11y.addElLabel(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, s.index() + 1));
                        });
                },
                init: function () {
                    this.$el.append(this.a11y.liveRegion);
                    var t,
                        e,
                        i = this.params.a11y;
                    this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl),
                        this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl),
                        t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", this.a11y.onEnterKey)),
                        e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.prevSlideMessage), e.on("keydown", this.a11y.onEnterKey)),
                        this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
                },
                destroy: function () {
                    var t, e;
                    this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
                        this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl),
                        this.navigation && this.navigation.$prevEl && (e = this.navigation.$prevEl),
                        t && t.off("keydown", this.a11y.onEnterKey),
                        e && e.off("keydown", this.a11y.onEnterKey),
                        this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
                },
            },
            rt = {
                init: function () {
                    var t = o();
                    if (this.params.history) {
                        if (!t.history || !t.history.pushState) return (this.params.history.enabled = !1), void (this.params.hashNavigation.enabled = !0);
                        var e = this.history;
                        (e.initialized = !0),
                            (e.paths = rt.getPathValues(this.params.url)),
                            (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState));
                    }
                },
                destroy: function () {
                    var t = o();
                    this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
                },
                setHistoryPopState: function () {
                    (this.history.paths = rt.getPathValues(this.params.url)), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
                },
                getPathValues: function (t) {
                    var e = o(),
                        i = (t ? new URL(t) : e.location).pathname
                            .slice(1)
                            .split("/")
                            .filter(function (t) {
                                return "" !== t;
                            }),
                        s = i.length;
                    return { key: i[s - 2], value: i[s - 1] };
                },
                setHistory: function (t, e) {
                    var i = o();
                    if (this.history.initialized && this.params.history.enabled) {
                        var s;
                        s = this.params.url ? new URL(this.params.url) : i.location;
                        var r = this.slides.eq(e),
                            a = rt.slugify(r.attr("data-history"));
                        s.pathname.includes(t) || (a = t + "/" + a);
                        var n = i.history.state;
                        (n && n.value === a) || (this.params.history.replaceState ? i.history.replaceState({ value: a }, null, a) : i.history.pushState({ value: a }, null, a));
                    }
                },
                slugify: function (t) {
                    return t
                        .toString()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w-]+/g, "")
                        .replace(/--+/g, "-")
                        .replace(/^-+/, "")
                        .replace(/-+$/, "");
                },
                scrollToSlide: function (t, e, i) {
                    if (e)
                        for (var s = 0, r = this.slides.length; s < r; s += 1) {
                            var a = this.slides.eq(s);
                            if (rt.slugify(a.attr("data-history")) === e && !a.hasClass(this.params.slideDuplicateClass)) {
                                var n = a.index();
                                this.slideTo(n, t, i);
                            }
                        }
                    else this.slideTo(0, t, i);
                },
            },
            at = {
                onHashCange: function () {
                    var t = a();
                    this.emit("hashChange");
                    var e = t.location.hash.replace("#", "");
                    if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                        var i = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
                        if (void 0 === i) return;
                        this.slideTo(i);
                    }
                },
                setHash: function () {
                    var t = o(),
                        e = a();
                    if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
                        if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""), this.emit("hashSet");
                        else {
                            var i = this.slides.eq(this.activeIndex),
                                s = i.attr("data-hash") || i.attr("data-history");
                            (e.location.hash = s || ""), this.emit("hashSet");
                        }
                },
                init: function () {
                    var t = a(),
                        e = o();
                    if (!(!this.params.hashNavigation.enabled || (this.params.history && this.params.history.enabled))) {
                        this.hashNavigation.initialized = !0;
                        var i = t.location.hash.replace("#", "");
                        if (i)
                            for (var s = 0, r = this.slides.length; s < r; s += 1) {
                                var n = this.slides.eq(s);
                                if ((n.attr("data-hash") || n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                                    var l = n.index();
                                    this.slideTo(l, 0, this.params.runCallbacksOnInit, !0);
                                }
                            }
                        this.params.hashNavigation.watchState && v(e).on("hashchange", this.hashNavigation.onHashCange);
                    }
                },
                destroy: function () {
                    var t = o();
                    this.params.hashNavigation.watchState && v(t).off("hashchange", this.hashNavigation.onHashCange);
                },
            },
            nt = {
                run: function () {
                    var t = this,
                        e = t.slides.eq(t.activeIndex),
                        i = t.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || t.params.autoplay.delay),
                        clearTimeout(t.autoplay.timeout),
                        (t.autoplay.timeout = w(function () {
                            t.params.autoplay.reverseDirection
                                ? t.params.loop
                                    ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay"))
                                    : t.isBeginning
                                    ? t.params.autoplay.stopOnLastSlide
                                        ? t.autoplay.stop()
                                        : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay"))
                                    : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay"))
                                : t.params.loop
                                ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay"))
                                : t.isEnd
                                ? t.params.autoplay.stopOnLastSlide
                                    ? t.autoplay.stop()
                                    : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay"))
                                : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")),
                                t.params.cssMode && t.autoplay.running && t.autoplay.run();
                        }, i));
                },
                start: function () {
                    return void 0 === this.autoplay.timeout && !this.autoplay.running && ((this.autoplay.running = !0), this.emit("autoplayStart"), this.autoplay.run(), !0);
                },
                stop: function () {
                    return (
                        !!this.autoplay.running &&
                        void 0 !== this.autoplay.timeout &&
                        (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), (this.autoplay.timeout = void 0)), (this.autoplay.running = !1), this.emit("autoplayStop"), !0)
                    );
                },
                pause: function (t) {
                    this.autoplay.running &&
                        (this.autoplay.paused ||
                            (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
                            (this.autoplay.paused = !0),
                            0 !== t && this.params.autoplay.waitForTransition
                                ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd))
                                : ((this.autoplay.paused = !1), this.autoplay.run())));
                },
                onVisibilityChange: function () {
                    var t = a();
                    "hidden" === t.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === t.visibilityState && this.autoplay.paused && (this.autoplay.run(), (this.autoplay.paused = !1));
                },
                onTransitionEnd: function (t) {
                    this &&
                        !this.destroyed &&
                        this.$wrapperEl &&
                        t.target === this.$wrapperEl[0] &&
                        (this.$wrapperEl[0].removeEventListener("transitionend", this.autoplay.onTransitionEnd),
                        this.$wrapperEl[0].removeEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd),
                        (this.autoplay.paused = !1),
                        this.autoplay.running ? this.autoplay.run() : this.autoplay.stop());
                },
            },
            ot = {
                setTranslate: function () {
                    for (var t = this.slides, e = 0; e < t.length; e += 1) {
                        var i = this.slides.eq(e),
                            s = -i[0].swiperSlideOffset;
                        this.params.virtualTranslate || (s -= this.translate);
                        var r = 0;
                        this.isHorizontal() || ((r = s), (s = 0));
                        var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                        i.css({ opacity: a }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
                    }
                },
                setTransition: function (t) {
                    var e = this,
                        i = e.slides,
                        s = e.$wrapperEl;
                    if ((i.transition(t), e.params.virtualTranslate && 0 !== t)) {
                        var r = !1;
                        i.transitionEnd(function () {
                            if (!r && e && !e.destroyed) {
                                (r = !0), (e.animating = !1);
                                for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) s.trigger(t[i]);
                            }
                        });
                    }
                },
            },
            lt = {
                setTranslate: function () {
                    var t,
                        e = this.$el,
                        i = this.$wrapperEl,
                        s = this.slides,
                        r = this.width,
                        a = this.height,
                        n = this.rtlTranslate,
                        o = this.size,
                        l = this.browser,
                        h = this.params.cubeEffect,
                        d = this.isHorizontal(),
                        u = this.virtual && this.params.virtual.enabled,
                        p = 0;
                    h.shadow &&
                        (d
                            ? (0 === (t = i.find(".swiper-cube-shadow")).length && ((t = v('<div class="swiper-cube-shadow"></div>')), i.append(t)), t.css({ height: r + "px" }))
                            : 0 === (t = e.find(".swiper-cube-shadow")).length && ((t = v('<div class="swiper-cube-shadow"></div>')), e.append(t)));
                    for (var c = 0; c < s.length; c += 1) {
                        var f = s.eq(c),
                            m = c;
                        u && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                        var g = 90 * m,
                            y = Math.floor(g / 360);
                        n && ((g = -g), (y = Math.floor(-g / 360)));
                        var b = Math.max(Math.min(f[0].progress, 1), -1),
                            _ = 0,
                            w = 0,
                            x = 0;
                        m % 4 == 0 ? ((_ = 4 * -y * o), (x = 0)) : (m - 1) % 4 == 0 ? ((_ = 0), (x = 4 * -y * o)) : (m - 2) % 4 == 0 ? ((_ = o + 4 * y * o), (x = o)) : (m - 3) % 4 == 0 && ((_ = -o), (x = 3 * o + 4 * o * y)),
                            n && (_ = -_),
                            d || ((w = _), (_ = 0));
                        var E = "rotateX(" + (d ? 0 : -g) + "deg) rotateY(" + (d ? g : 0) + "deg) translate3d(" + _ + "px, " + w + "px, " + x + "px)";
                        if ((b <= 1 && b > -1 && ((p = 90 * m + 90 * b), n && (p = 90 * -m - 90 * b)), f.transform(E), h.slideShadows)) {
                            var T = d ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                                M = d ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                            0 === T.length && ((T = v('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>')), f.append(T)),
                                0 === M.length && ((M = v('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>')), f.append(M)),
                                T.length && (T[0].style.opacity = Math.max(-b, 0)),
                                M.length && (M[0].style.opacity = Math.max(b, 0));
                        }
                    }
                    if (
                        (i.css({
                            "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
                            "transform-origin": "50% 50% -" + o / 2 + "px",
                        }),
                        h.shadow)
                    )
                        if (d) t.transform("translate3d(0px, " + (r / 2 + h.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + h.shadowScale + ")");
                        else {
                            var S = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90),
                                C = 1.5 - (Math.sin((2 * S * Math.PI) / 360) / 2 + Math.cos((2 * S * Math.PI) / 360) / 2),
                                B = h.shadowScale,
                                k = h.shadowScale / C,
                                P = h.shadowOffset;
                            t.transform("scale3d(" + B + ", 1, " + k + ") translate3d(0px, " + (a / 2 + P) + "px, " + -a / 2 / k + "px) rotateX(-90deg)");
                        }
                    var O = l.isSafari || l.isWebView ? -o / 2 : 0;
                    i.transform("translate3d(0px,0," + O + "px) rotateX(" + (this.isHorizontal() ? 0 : p) + "deg) rotateY(" + (this.isHorizontal() ? -p : 0) + "deg)");
                },
                setTransition: function (t) {
                    var e = this.$el;
                    this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                        this.params.cubeEffect.shadow && !this.isHorizontal() && e.find(".swiper-cube-shadow").transition(t);
                },
            },
            ht = {
                setTranslate: function () {
                    for (var t = this.slides, e = this.rtlTranslate, i = 0; i < t.length; i += 1) {
                        var s = t.eq(i),
                            r = s[0].progress;
                        this.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                        var a = -180 * r,
                            n = 0,
                            o = -s[0].swiperSlideOffset,
                            l = 0;
                        if ((this.isHorizontal() ? e && (a = -a) : ((l = o), (o = 0), (n = -a), (a = 0)), (s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length), this.params.flipEffect.slideShadows)) {
                            var h = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                d = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                            0 === h.length && ((h = v('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>')), s.append(h)),
                                0 === d.length && ((d = v('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>')), s.append(d)),
                                h.length && (h[0].style.opacity = Math.max(-r, 0)),
                                d.length && (d[0].style.opacity = Math.max(r, 0));
                        }
                        s.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + n + "deg) rotateY(" + a + "deg)");
                    }
                },
                setTransition: function (t) {
                    var e = this,
                        i = e.slides,
                        s = e.activeIndex,
                        r = e.$wrapperEl;
                    if ((i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.virtualTranslate && 0 !== t)) {
                        var a = !1;
                        i.eq(s).transitionEnd(function () {
                            if (!a && e && !e.destroyed) {
                                (a = !0), (e.animating = !1);
                                for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) r.trigger(t[i]);
                            }
                        });
                    }
                },
            },
            dt = {
                setTranslate: function () {
                    for (
                        var t = this.width,
                            e = this.height,
                            i = this.slides,
                            s = this.slidesSizesGrid,
                            r = this.params.coverflowEffect,
                            a = this.isHorizontal(),
                            n = this.translate,
                            o = a ? t / 2 - n : e / 2 - n,
                            l = a ? r.rotate : -r.rotate,
                            h = r.depth,
                            d = 0,
                            u = i.length;
                        d < u;
                        d += 1
                    ) {
                        var p = i.eq(d),
                            c = s[d],
                            f = ((o - p[0].swiperSlideOffset - c / 2) / c) * r.modifier,
                            m = a ? l * f : 0,
                            g = a ? 0 : l * f,
                            y = -h * Math.abs(f),
                            b = r.stretch;
                        "string" == typeof b && -1 !== b.indexOf("%") && (b = (parseFloat(r.stretch) / 100) * c);
                        var _ = a ? 0 : b * f,
                            w = a ? b * f : 0,
                            x = 1 - (1 - r.scale) * Math.abs(f);
                        Math.abs(w) < 0.001 && (w = 0), Math.abs(_) < 0.001 && (_ = 0), Math.abs(y) < 0.001 && (y = 0), Math.abs(m) < 0.001 && (m = 0), Math.abs(g) < 0.001 && (g = 0), Math.abs(x) < 0.001 && (x = 0);
                        var E = "translate3d(" + w + "px," + _ + "px," + y + "px)  rotateX(" + g + "deg) rotateY(" + m + "deg) scale(" + x + ")";
                        if ((p.transform(E), (p[0].style.zIndex = 1 - Math.abs(Math.round(f))), r.slideShadows)) {
                            var T = a ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"),
                                M = a ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                            0 === T.length && ((T = v('<div class="swiper-slide-shadow-' + (a ? "left" : "top") + '"></div>')), p.append(T)),
                                0 === M.length && ((M = v('<div class="swiper-slide-shadow-' + (a ? "right" : "bottom") + '"></div>')), p.append(M)),
                                T.length && (T[0].style.opacity = f > 0 ? f : 0),
                                M.length && (M[0].style.opacity = -f > 0 ? -f : 0);
                        }
                    }
                },
                setTransition: function (t) {
                    this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t);
                },
            },
            ut = {
                init: function () {
                    var t = this.params.thumbs;
                    if (this.thumbs.initialized) return !1;
                    this.thumbs.initialized = !0;
                    var e = this.constructor;
                    return (
                        t.swiper instanceof e
                            ? ((this.thumbs.swiper = t.swiper), M(this.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), M(this.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
                            : T(t.swiper) && ((this.thumbs.swiper = new e(M({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 }))), (this.thumbs.swiperCreated = !0)),
                        this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass),
                        this.thumbs.swiper.on("tap", this.thumbs.onThumbClick),
                        !0
                    );
                },
                onThumbClick: function () {
                    var t = this.thumbs.swiper;
                    if (t) {
                        var e = t.clickedIndex,
                            i = t.clickedSlide;
                        if (!((i && v(i).hasClass(this.params.thumbs.slideThumbActiveClass)) || null == e)) {
                            var s;
                            if (((s = t.params.loop ? parseInt(v(t.clickedSlide).attr("data-swiper-slide-index"), 10) : e), this.params.loop)) {
                                var r = this.activeIndex;
                                this.slides.eq(r).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft), (r = this.activeIndex));
                                var a = this.slides
                                        .eq(r)
                                        .prevAll('[data-swiper-slide-index="' + s + '"]')
                                        .eq(0)
                                        .index(),
                                    n = this.slides
                                        .eq(r)
                                        .nextAll('[data-swiper-slide-index="' + s + '"]')
                                        .eq(0)
                                        .index();
                                s = void 0 === a ? n : void 0 === n ? a : n - r < r - a ? n : a;
                            }
                            this.slideTo(s);
                        }
                    }
                },
                update: function (t) {
                    var e = this.thumbs.swiper;
                    if (e) {
                        var i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : e.params.slidesPerView,
                            s = this.params.thumbs.autoScrollOffset,
                            r = s && !e.params.loop;
                        if (this.realIndex !== e.realIndex || r) {
                            var a,
                                n,
                                o = e.activeIndex;
                            if (e.params.loop) {
                                e.slides.eq(o).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), (e._clientLeft = e.$wrapperEl[0].clientLeft), (o = e.activeIndex));
                                var l = e.slides
                                        .eq(o)
                                        .prevAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                                        .eq(0)
                                        .index(),
                                    h = e.slides
                                        .eq(o)
                                        .nextAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                                        .eq(0)
                                        .index();
                                (a = void 0 === l ? h : void 0 === h ? l : h - o == o - l ? o : h - o < o - l ? h : l), (n = this.activeIndex > this.previousIndex ? "next" : "prev");
                            } else n = (a = this.realIndex) > this.previousIndex ? "next" : "prev";
                            r && (a += "next" === n ? s : -1 * s),
                                e.visibleSlidesIndexes &&
                                    e.visibleSlidesIndexes.indexOf(a) < 0 &&
                                    (e.params.centeredSlides ? (a = a > o ? a - Math.floor(i / 2) + 1 : a + Math.floor(i / 2) - 1) : a > o && (a = a - i + 1), e.slideTo(a, t ? 0 : void 0));
                        }
                        var d = 1,
                            u = this.params.thumbs.slideThumbActiveClass;
                        if (
                            (this.params.slidesPerView > 1 && !this.params.centeredSlides && (d = this.params.slidesPerView),
                            this.params.thumbs.multipleActiveThumbs || (d = 1),
                            (d = Math.floor(d)),
                            e.slides.removeClass(u),
                            e.params.loop || (e.params.virtual && e.params.virtual.enabled))
                        )
                            for (var p = 0; p < d; p += 1) e.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + p) + '"]').addClass(u);
                        else for (var c = 0; c < d; c += 1) e.slides.eq(this.realIndex + c).addClass(u);
                    }
                },
            },
            pt = [
                G,
                H,
                V,
                q,
                {
                    name: "mousewheel",
                    params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: "container" } },
                    create: function () {
                        S(this, {
                            mousewheel: {
                                enabled: !1,
                                lastScrollTime: x(),
                                lastEventBeforeSnap: void 0,
                                recentWheelEvents: [],
                                enable: U.enable,
                                disable: U.disable,
                                handle: U.handle,
                                handleMouseEnter: U.handleMouseEnter,
                                handleMouseLeave: U.handleMouseLeave,
                                animateSlider: U.animateSlider,
                                releaseScroll: U.releaseScroll,
                            },
                        });
                    },
                    on: {
                        init: function (t) {
                            !t.params.mousewheel.enabled && t.params.cssMode && t.mousewheel.disable(), t.params.mousewheel.enabled && t.mousewheel.enable();
                        },
                        destroy: function (t) {
                            t.params.cssMode && t.mousewheel.enable(), t.mousewheel.enabled && t.mousewheel.disable();
                        },
                    },
                },
                {
                    name: "navigation",
                    params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                    create: function () {
                        S(this, { navigation: e({}, K) });
                    },
                    on: {
                        init: function (t) {
                            t.navigation.init(), t.navigation.update();
                        },
                        toEdge: function (t) {
                            t.navigation.update();
                        },
                        fromEdge: function (t) {
                            t.navigation.update();
                        },
                        destroy: function (t) {
                            t.navigation.destroy();
                        },
                        click: function (t, e) {
                            var i,
                                s = t.navigation,
                                r = s.$nextEl,
                                a = s.$prevEl;
                            !t.params.navigation.hideOnClick ||
                                v(e.target).is(a) ||
                                v(e.target).is(r) ||
                                (r ? (i = r.hasClass(t.params.navigation.hiddenClass)) : a && (i = a.hasClass(t.params.navigation.hiddenClass)),
                                !0 === i ? t.emit("navigationShow") : t.emit("navigationHide"),
                                r && r.toggleClass(t.params.navigation.hiddenClass),
                                a && a.toggleClass(t.params.navigation.hiddenClass));
                        },
                    },
                },
                {
                    name: "pagination",
                    params: {
                        pagination: {
                            el: null,
                            bulletElement: "span",
                            clickable: !1,
                            hideOnClick: !1,
                            renderBullet: null,
                            renderProgressbar: null,
                            renderFraction: null,
                            renderCustom: null,
                            progressbarOpposite: !1,
                            type: "bullets",
                            dynamicBullets: !1,
                            dynamicMainBullets: 1,
                            formatFractionCurrent: function (t) {
                                return t;
                            },
                            formatFractionTotal: function (t) {
                                return t;
                            },
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                            modifierClass: "swiper-pagination-",
                            currentClass: "swiper-pagination-current",
                            totalClass: "swiper-pagination-total",
                            hiddenClass: "swiper-pagination-hidden",
                            progressbarFillClass: "swiper-pagination-progressbar-fill",
                            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                            clickableClass: "swiper-pagination-clickable",
                            lockClass: "swiper-pagination-lock",
                        },
                    },
                    create: function () {
                        S(this, { pagination: e({ dynamicBulletIndex: 0 }, Q) });
                    },
                    on: {
                        init: function (t) {
                            t.pagination.init(), t.pagination.render(), t.pagination.update();
                        },
                        activeIndexChange: function (t) {
                            (t.params.loop || void 0 === t.snapIndex) && t.pagination.update();
                        },
                        snapIndexChange: function (t) {
                            t.params.loop || t.pagination.update();
                        },
                        slidesLengthChange: function (t) {
                            t.params.loop && (t.pagination.render(), t.pagination.update());
                        },
                        snapGridLengthChange: function (t) {
                            t.params.loop || (t.pagination.render(), t.pagination.update());
                        },
                        destroy: function (t) {
                            t.pagination.destroy();
                        },
                        click: function (t, e) {
                            t.params.pagination.el &&
                                t.params.pagination.hideOnClick &&
                                t.pagination.$el.length > 0 &&
                                !v(e.target).hasClass(t.params.pagination.bulletClass) &&
                                (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow") : t.emit("paginationHide"), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
                        },
                    },
                },
                {
                    name: "scrollbar",
                    params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                    create: function () {
                        S(this, { scrollbar: e({ isTouched: !1, timeout: null, dragTimeout: null }, Z) });
                    },
                    on: {
                        init: function (t) {
                            t.scrollbar.init(), t.scrollbar.updateSize(), t.scrollbar.setTranslate();
                        },
                        update: function (t) {
                            t.scrollbar.updateSize();
                        },
                        resize: function (t) {
                            t.scrollbar.updateSize();
                        },
                        observerUpdate: function (t) {
                            t.scrollbar.updateSize();
                        },
                        setTranslate: function (t) {
                            t.scrollbar.setTranslate();
                        },
                        setTransition: function (t, e) {
                            t.scrollbar.setTransition(e);
                        },
                        destroy: function (t) {
                            t.scrollbar.destroy();
                        },
                    },
                },
                {
                    name: "parallax",
                    params: { parallax: { enabled: !1 } },
                    create: function () {
                        S(this, { parallax: e({}, J) });
                    },
                    on: {
                        beforeInit: function (t) {
                            t.params.parallax.enabled && ((t.params.watchSlidesProgress = !0), (t.originalParams.watchSlidesProgress = !0));
                        },
                        init: function (t) {
                            t.params.parallax.enabled && t.parallax.setTranslate();
                        },
                        setTranslate: function (t) {
                            t.params.parallax.enabled && t.parallax.setTranslate();
                        },
                        setTransition: function (t, e) {
                            t.params.parallax.enabled && t.parallax.setTransition(e);
                        },
                    },
                },
                {
                    name: "zoom",
                    params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                    create: function () {
                        var t = this;
                        S(t, {
                            zoom: e(
                                {
                                    enabled: !1,
                                    scale: 1,
                                    currentScale: 1,
                                    isScaling: !1,
                                    gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                                    image: {
                                        isTouched: void 0,
                                        isMoved: void 0,
                                        currentX: void 0,
                                        currentY: void 0,
                                        minX: void 0,
                                        minY: void 0,
                                        maxX: void 0,
                                        maxY: void 0,
                                        width: void 0,
                                        height: void 0,
                                        startX: void 0,
                                        startY: void 0,
                                        touchesStart: {},
                                        touchesCurrent: {},
                                    },
                                    velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                                },
                                tt
                            ),
                        });
                        var i = 1;
                        Object.defineProperty(t.zoom, "scale", {
                            get: function () {
                                return i;
                            },
                            set: function (e) {
                                if (i !== e) {
                                    var s = t.zoom.gesture.$imageEl ? t.zoom.gesture.$imageEl[0] : void 0,
                                        r = t.zoom.gesture.$slideEl ? t.zoom.gesture.$slideEl[0] : void 0;
                                    t.emit("zoomChange", e, s, r);
                                }
                                i = e;
                            },
                        });
                    },
                    on: {
                        init: function (t) {
                            t.params.zoom.enabled && t.zoom.enable();
                        },
                        destroy: function (t) {
                            t.zoom.disable();
                        },
                        touchStart: function (t, e) {
                            t.zoom.enabled && t.zoom.onTouchStart(e);
                        },
                        touchEnd: function (t, e) {
                            t.zoom.enabled && t.zoom.onTouchEnd(e);
                        },
                        doubleTap: function (t, e) {
                            t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e);
                        },
                        transitionEnd: function (t) {
                            t.zoom.enabled && t.params.zoom.enabled && t.zoom.onTransitionEnd();
                        },
                        slideChange: function (t) {
                            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && t.zoom.onTransitionEnd();
                        },
                    },
                },
                {
                    name: "lazy",
                    params: {
                        lazy: {
                            enabled: !1,
                            loadPrevNext: !1,
                            loadPrevNextAmount: 1,
                            loadOnTransitionStart: !1,
                            elementClass: "swiper-lazy",
                            loadingClass: "swiper-lazy-loading",
                            loadedClass: "swiper-lazy-loaded",
                            preloaderClass: "swiper-lazy-preloader",
                        },
                    },
                    create: function () {
                        S(this, { lazy: e({ initialImageLoaded: !1 }, et) });
                    },
                    on: {
                        beforeInit: function (t) {
                            t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
                        },
                        init: function (t) {
                            t.params.lazy.enabled && !t.params.loop && 0 === t.params.initialSlide && t.lazy.load();
                        },
                        scroll: function (t) {
                            t.params.freeMode && !t.params.freeModeSticky && t.lazy.load();
                        },
                        resize: function (t) {
                            t.params.lazy.enabled && t.lazy.load();
                        },
                        scrollbarDragMove: function (t) {
                            t.params.lazy.enabled && t.lazy.load();
                        },
                        transitionStart: function (t) {
                            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || (!t.params.lazy.loadOnTransitionStart && !t.lazy.initialImageLoaded)) && t.lazy.load();
                        },
                        transitionEnd: function (t) {
                            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && t.lazy.load();
                        },
                        slideChange: function (t) {
                            t.params.lazy.enabled && t.params.cssMode && t.lazy.load();
                        },
                    },
                },
                {
                    name: "controller",
                    params: { controller: { control: void 0, inverse: !1, by: "slide" } },
                    create: function () {
                        S(this, { controller: e({ control: this.params.controller.control }, it) });
                    },
                    on: {
                        update: function (t) {
                            t.controller.control && t.controller.spline && ((t.controller.spline = void 0), delete t.controller.spline);
                        },
                        resize: function (t) {
                            t.controller.control && t.controller.spline && ((t.controller.spline = void 0), delete t.controller.spline);
                        },
                        observerUpdate: function (t) {
                            t.controller.control && t.controller.spline && ((t.controller.spline = void 0), delete t.controller.spline);
                        },
                        setTranslate: function (t, e, i) {
                            t.controller.control && t.controller.setTranslate(e, i);
                        },
                        setTransition: function (t, e, i) {
                            t.controller.control && t.controller.setTransition(e, i);
                        },
                    },
                },
                {
                    name: "a11y",
                    params: {
                        a11y: {
                            enabled: !0,
                            notificationClass: "swiper-notification",
                            prevSlideMessage: "Previous slide",
                            nextSlideMessage: "Next slide",
                            firstSlideMessage: "This is the first slide",
                            lastSlideMessage: "This is the last slide",
                            paginationBulletMessage: "Go to slide {{index}}",
                        },
                    },
                    create: function () {
                        S(this, { a11y: e(e({}, st), {}, { liveRegion: v('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') }) });
                    },
                    on: {
                        init: function (t) {
                            t.params.a11y.enabled && (t.a11y.init(), t.a11y.updateNavigation());
                        },
                        toEdge: function (t) {
                            t.params.a11y.enabled && t.a11y.updateNavigation();
                        },
                        fromEdge: function (t) {
                            t.params.a11y.enabled && t.a11y.updateNavigation();
                        },
                        paginationUpdate: function (t) {
                            t.params.a11y.enabled && t.a11y.updatePagination();
                        },
                        destroy: function (t) {
                            t.params.a11y.enabled && t.a11y.destroy();
                        },
                    },
                },
                {
                    name: "history",
                    params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
                    create: function () {
                        S(this, { history: e({}, rt) });
                    },
                    on: {
                        init: function (t) {
                            t.params.history.enabled && t.history.init();
                        },
                        destroy: function (t) {
                            t.params.history.enabled && t.history.destroy();
                        },
                        transitionEnd: function (t) {
                            t.history.initialized && t.history.setHistory(t.params.history.key, t.activeIndex);
                        },
                        slideChange: function (t) {
                            t.history.initialized && t.params.cssMode && t.history.setHistory(t.params.history.key, t.activeIndex);
                        },
                    },
                },
                {
                    name: "hash-navigation",
                    params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
                    create: function () {
                        S(this, { hashNavigation: e({ initialized: !1 }, at) });
                    },
                    on: {
                        init: function (t) {
                            t.params.hashNavigation.enabled && t.hashNavigation.init();
                        },
                        destroy: function (t) {
                            t.params.hashNavigation.enabled && t.hashNavigation.destroy();
                        },
                        transitionEnd: function (t) {
                            t.hashNavigation.initialized && t.hashNavigation.setHash();
                        },
                        slideChange: function (t) {
                            t.hashNavigation.initialized && t.params.cssMode && t.hashNavigation.setHash();
                        },
                    },
                },
                {
                    name: "autoplay",
                    params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                    create: function () {
                        S(this, { autoplay: e(e({}, nt), {}, { running: !1, paused: !1 }) });
                    },
                    on: {
                        init: function (t) {
                            t.params.autoplay.enabled && (t.autoplay.start(), a().addEventListener("visibilitychange", t.autoplay.onVisibilityChange));
                        },
                        beforeTransitionStart: function (t, e, i) {
                            t.autoplay.running && (i || !t.params.autoplay.disableOnInteraction ? t.autoplay.pause(e) : t.autoplay.stop());
                        },
                        sliderFirstMove: function (t) {
                            t.autoplay.running && (t.params.autoplay.disableOnInteraction ? t.autoplay.stop() : t.autoplay.pause());
                        },
                        touchEnd: function (t) {
                            t.params.cssMode && t.autoplay.paused && !t.params.autoplay.disableOnInteraction && t.autoplay.run();
                        },
                        destroy: function (t) {
                            t.autoplay.running && t.autoplay.stop(), a().removeEventListener("visibilitychange", t.autoplay.onVisibilityChange);
                        },
                    },
                },
                {
                    name: "effect-fade",
                    params: { fadeEffect: { crossFade: !1 } },
                    create: function () {
                        S(this, { fadeEffect: e({}, ot) });
                    },
                    on: {
                        beforeInit: function (t) {
                            if ("fade" === t.params.effect) {
                                t.classNames.push(t.params.containerModifierClass + "fade");
                                var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                                M(t.params, e), M(t.originalParams, e);
                            }
                        },
                        setTranslate: function (t) {
                            "fade" === t.params.effect && t.fadeEffect.setTranslate();
                        },
                        setTransition: function (t, e) {
                            "fade" === t.params.effect && t.fadeEffect.setTransition(e);
                        },
                    },
                },
                {
                    name: "effect-cube",
                    params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
                    create: function () {
                        S(this, { cubeEffect: e({}, lt) });
                    },
                    on: {
                        beforeInit: function (t) {
                            if ("cube" === t.params.effect) {
                                t.classNames.push(t.params.containerModifierClass + "cube"), t.classNames.push(t.params.containerModifierClass + "3d");
                                var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                                M(t.params, e), M(t.originalParams, e);
                            }
                        },
                        setTranslate: function (t) {
                            "cube" === t.params.effect && t.cubeEffect.setTranslate();
                        },
                        setTransition: function (t, e) {
                            "cube" === t.params.effect && t.cubeEffect.setTransition(e);
                        },
                    },
                },
                {
                    name: "effect-flip",
                    params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                    create: function () {
                        S(this, { flipEffect: e({}, ht) });
                    },
                    on: {
                        beforeInit: function (t) {
                            if ("flip" === t.params.effect) {
                                t.classNames.push(t.params.containerModifierClass + "flip"), t.classNames.push(t.params.containerModifierClass + "3d");
                                var e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                                M(t.params, e), M(t.originalParams, e);
                            }
                        },
                        setTranslate: function (t) {
                            "flip" === t.params.effect && t.flipEffect.setTranslate();
                        },
                        setTransition: function (t, e) {
                            "flip" === t.params.effect && t.flipEffect.setTransition(e);
                        },
                    },
                },
                {
                    name: "effect-coverflow",
                    params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0 } },
                    create: function () {
                        S(this, { coverflowEffect: e({}, dt) });
                    },
                    on: {
                        beforeInit: function (t) {
                            "coverflow" === t.params.effect &&
                                (t.classNames.push(t.params.containerModifierClass + "coverflow"), t.classNames.push(t.params.containerModifierClass + "3d"), (t.params.watchSlidesProgress = !0), (t.originalParams.watchSlidesProgress = !0));
                        },
                        setTranslate: function (t) {
                            "coverflow" === t.params.effect && t.coverflowEffect.setTranslate();
                        },
                        setTransition: function (t, e) {
                            "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e);
                        },
                    },
                },
                {
                    name: "thumbs",
                    params: { thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                    create: function () {
                        S(this, { thumbs: e({ swiper: null, initialized: !1 }, ut) });
                    },
                    on: {
                        beforeInit: function (t) {
                            var e = t.params.thumbs;
                            e && e.swiper && (t.thumbs.init(), t.thumbs.update(!0));
                        },
                        slideChange: function (t) {
                            t.thumbs.swiper && t.thumbs.update();
                        },
                        update: function (t) {
                            t.thumbs.swiper && t.thumbs.update();
                        },
                        resize: function (t) {
                            t.thumbs.swiper && t.thumbs.update();
                        },
                        observerUpdate: function (t) {
                            t.thumbs.swiper && t.thumbs.update();
                        },
                        setTransition: function (t, e) {
                            var i = t.thumbs.swiper;
                            i && i.setTransition(e);
                        },
                        beforeDestroy: function (t) {
                            var e = t.thumbs.swiper;
                            e && t.thumbs.swiperCreated && e && e.destroy();
                        },
                    },
                },
            ];
        return R.use(pt), R;
    }),
    (function (t, e) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.bowser = e()) : (t.bowser = e());
    })(this, function () {
        return (function (t) {
            var e = {};
            function i(s) {
                if (e[s]) return e[s].exports;
                var r = (e[s] = { i: s, l: !1, exports: {} });
                return t[s].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
            }
            return (
                (i.m = t),
                (i.c = e),
                (i.d = function (t, e, s) {
                    i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
                }),
                (i.r = function (t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
                }),
                (i.t = function (t, e) {
                    if ((1 & e && (t = i(t)), 8 & e)) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var s = Object.create(null);
                    if ((i.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                        for (var r in t)
                            i.d(
                                s,
                                r,
                                function (e) {
                                    return t[e];
                                }.bind(null, r)
                            );
                    return s;
                }),
                (i.n = function (t) {
                    var e =
                        t && t.__esModule
                            ? function () {
                                  return t.default;
                              }
                            : function () {
                                  return t;
                              };
                    return i.d(e, "a", e), e;
                }),
                (i.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }),
                (i.p = ""),
                i((i.s = 90))
            );
        })({
            17: function (t, e, i) {
                "use strict";
                (e.__esModule = !0), (e.default = void 0);
                var s = i(18),
                    r = (function () {
                        function t() {}
                        return (
                            (t.getFirstMatch = function (t, e) {
                                var i = e.match(t);
                                return (i && i.length > 0 && i[1]) || "";
                            }),
                            (t.getSecondMatch = function (t, e) {
                                var i = e.match(t);
                                return (i && i.length > 1 && i[2]) || "";
                            }),
                            (t.matchAndReturnConst = function (t, e, i) {
                                if (t.test(e)) return i;
                            }),
                            (t.getWindowsVersionName = function (t) {
                                switch (t) {
                                    case "NT":
                                        return "NT";
                                    case "XP":
                                        return "XP";
                                    case "NT 5.0":
                                        return "2000";
                                    case "NT 5.1":
                                        return "XP";
                                    case "NT 5.2":
                                        return "2003";
                                    case "NT 6.0":
                                        return "Vista";
                                    case "NT 6.1":
                                        return "7";
                                    case "NT 6.2":
                                        return "8";
                                    case "NT 6.3":
                                        return "8.1";
                                    case "NT 10.0":
                                        return "10";
                                    default:
                                        return;
                                }
                            }),
                            (t.getMacOSVersionName = function (t) {
                                var e = t
                                    .split(".")
                                    .splice(0, 2)
                                    .map(function (t) {
                                        return parseInt(t, 10) || 0;
                                    });
                                if ((e.push(0), 10 === e[0]))
                                    switch (e[1]) {
                                        case 5:
                                            return "Leopard";
                                        case 6:
                                            return "Snow Leopard";
                                        case 7:
                                            return "Lion";
                                        case 8:
                                            return "Mountain Lion";
                                        case 9:
                                            return "Mavericks";
                                        case 10:
                                            return "Yosemite";
                                        case 11:
                                            return "El Capitan";
                                        case 12:
                                            return "Sierra";
                                        case 13:
                                            return "High Sierra";
                                        case 14:
                                            return "Mojave";
                                        case 15:
                                            return "Catalina";
                                        default:
                                            return;
                                    }
                            }),
                            (t.getAndroidVersionName = function (t) {
                                var e = t
                                    .split(".")
                                    .splice(0, 2)
                                    .map(function (t) {
                                        return parseInt(t, 10) || 0;
                                    });
                                if ((e.push(0), !(1 === e[0] && e[1] < 5)))
                                    return 1 === e[0] && e[1] < 6
                                        ? "Cupcake"
                                        : 1 === e[0] && e[1] >= 6
                                        ? "Donut"
                                        : 2 === e[0] && e[1] < 2
                                        ? "Eclair"
                                        : 2 === e[0] && 2 === e[1]
                                        ? "Froyo"
                                        : 2 === e[0] && e[1] > 2
                                        ? "Gingerbread"
                                        : 3 === e[0]
                                        ? "Honeycomb"
                                        : 4 === e[0] && e[1] < 1
                                        ? "Ice Cream Sandwich"
                                        : 4 === e[0] && e[1] < 4
                                        ? "Jelly Bean"
                                        : 4 === e[0] && e[1] >= 4
                                        ? "KitKat"
                                        : 5 === e[0]
                                        ? "Lollipop"
                                        : 6 === e[0]
                                        ? "Marshmallow"
                                        : 7 === e[0]
                                        ? "Nougat"
                                        : 8 === e[0]
                                        ? "Oreo"
                                        : 9 === e[0]
                                        ? "Pie"
                                        : void 0;
                            }),
                            (t.getVersionPrecision = function (t) {
                                return t.split(".").length;
                            }),
                            (t.compareVersions = function (e, i, s) {
                                void 0 === s && (s = !1);
                                var r = t.getVersionPrecision(e),
                                    a = t.getVersionPrecision(i),
                                    n = Math.max(r, a),
                                    o = 0,
                                    l = t.map([e, i], function (e) {
                                        var i = n - t.getVersionPrecision(e),
                                            s = e + new Array(i + 1).join(".0");
                                        return t
                                            .map(s.split("."), function (t) {
                                                return new Array(20 - t.length).join("0") + t;
                                            })
                                            .reverse();
                                    });
                                for (s && (o = n - Math.min(r, a)), n -= 1; n >= o; ) {
                                    if (l[0][n] > l[1][n]) return 1;
                                    if (l[0][n] === l[1][n]) {
                                        if (n === o) return 0;
                                        n -= 1;
                                    } else if (l[0][n] < l[1][n]) return -1;
                                }
                            }),
                            (t.map = function (t, e) {
                                var i,
                                    s = [];
                                if (Array.prototype.map) return Array.prototype.map.call(t, e);
                                for (i = 0; i < t.length; i += 1) s.push(e(t[i]));
                                return s;
                            }),
                            (t.find = function (t, e) {
                                var i, s;
                                if (Array.prototype.find) return Array.prototype.find.call(t, e);
                                for (i = 0, s = t.length; i < s; i += 1) {
                                    var r = t[i];
                                    if (e(r, i)) return r;
                                }
                            }),
                            (t.assign = function (t) {
                                for (var e, i, s = t, r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) a[n - 1] = arguments[n];
                                if (Object.assign) return Object.assign.apply(Object, [t].concat(a));
                                var o = function () {
                                    var t = a[e];
                                    "object" == typeof t &&
                                        null !== t &&
                                        Object.keys(t).forEach(function (e) {
                                            s[e] = t[e];
                                        });
                                };
                                for (e = 0, i = a.length; e < i; e += 1) o();
                                return t;
                            }),
                            (t.getBrowserAlias = function (t) {
                                return s.BROWSER_ALIASES_MAP[t];
                            }),
                            (t.getBrowserTypeByAlias = function (t) {
                                return s.BROWSER_MAP[t] || "";
                            }),
                            t
                        );
                    })();
                (e.default = r), (t.exports = e.default);
            },
            18: function (t, e, i) {
                "use strict";
                (e.__esModule = !0),
                    (e.ENGINE_MAP = e.OS_MAP = e.PLATFORMS_MAP = e.BROWSER_MAP = e.BROWSER_ALIASES_MAP = void 0),
                    (e.BROWSER_ALIASES_MAP = {
                        "Amazon Silk": "amazon_silk",
                        "Android Browser": "android",
                        Bada: "bada",
                        BlackBerry: "blackberry",
                        Chrome: "chrome",
                        Chromium: "chromium",
                        Electron: "electron",
                        Epiphany: "epiphany",
                        Firefox: "firefox",
                        Focus: "focus",
                        Generic: "generic",
                        "Google Search": "google_search",
                        Googlebot: "googlebot",
                        "Internet Explorer": "ie",
                        "K-Meleon": "k_meleon",
                        Maxthon: "maxthon",
                        "Microsoft Edge": "edge",
                        "MZ Browser": "mz",
                        "NAVER Whale Browser": "naver",
                        Opera: "opera",
                        "Opera Coast": "opera_coast",
                        PhantomJS: "phantomjs",
                        Puffin: "puffin",
                        QupZilla: "qupzilla",
                        QQ: "qq",
                        QQLite: "qqlite",
                        Safari: "safari",
                        Sailfish: "sailfish",
                        "Samsung Internet for Android": "samsung_internet",
                        SeaMonkey: "seamonkey",
                        Sleipnir: "sleipnir",
                        Swing: "swing",
                        Tizen: "tizen",
                        "UC Browser": "uc",
                        Vivaldi: "vivaldi",
                        "WebOS Browser": "webos",
                        WeChat: "wechat",
                        "Yandex Browser": "yandex",
                        Roku: "roku",
                    }),
                    (e.BROWSER_MAP = {
                        amazon_silk: "Amazon Silk",
                        android: "Android Browser",
                        bada: "Bada",
                        blackberry: "BlackBerry",
                        chrome: "Chrome",
                        chromium: "Chromium",
                        electron: "Electron",
                        epiphany: "Epiphany",
                        firefox: "Firefox",
                        focus: "Focus",
                        generic: "Generic",
                        googlebot: "Googlebot",
                        google_search: "Google Search",
                        ie: "Internet Explorer",
                        k_meleon: "K-Meleon",
                        maxthon: "Maxthon",
                        edge: "Microsoft Edge",
                        mz: "MZ Browser",
                        naver: "NAVER Whale Browser",
                        opera: "Opera",
                        opera_coast: "Opera Coast",
                        phantomjs: "PhantomJS",
                        puffin: "Puffin",
                        qupzilla: "QupZilla",
                        qq: "QQ Browser",
                        qqlite: "QQ Browser Lite",
                        safari: "Safari",
                        sailfish: "Sailfish",
                        samsung_internet: "Samsung Internet for Android",
                        seamonkey: "SeaMonkey",
                        sleipnir: "Sleipnir",
                        swing: "Swing",
                        tizen: "Tizen",
                        uc: "UC Browser",
                        vivaldi: "Vivaldi",
                        webos: "WebOS Browser",
                        wechat: "WeChat",
                        yandex: "Yandex Browser",
                    }),
                    (e.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }),
                    (e.OS_MAP = {
                        WindowsPhone: "Windows Phone",
                        Windows: "Windows",
                        MacOS: "macOS",
                        iOS: "iOS",
                        Android: "Android",
                        WebOS: "WebOS",
                        BlackBerry: "BlackBerry",
                        Bada: "Bada",
                        Tizen: "Tizen",
                        Linux: "Linux",
                        ChromeOS: "Chrome OS",
                        PlayStation4: "PlayStation 4",
                        Roku: "Roku",
                    }),
                    (e.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" });
            },
            90: function (t, e, i) {
                "use strict";
                (e.__esModule = !0), (e.default = void 0);
                var s,
                    r = (s = i(91)) && s.__esModule ? s : { default: s },
                    a = i(18);
                function n(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        (s.enumerable = s.enumerable || !1), (s.configurable = !0), "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
                    }
                }
                var o = (function () {
                    function t() {}
                    var e, i;
                    return (
                        (t.getParser = function (t, e) {
                            if ((void 0 === e && (e = !1), "string" != typeof t)) throw new Error("UserAgent should be a string");
                            return new r.default(t, e);
                        }),
                        (t.parse = function (t) {
                            return new r.default(t).getResult();
                        }),
                        (e = t),
                        (i = [
                            {
                                key: "BROWSER_MAP",
                                get: function () {
                                    return a.BROWSER_MAP;
                                },
                            },
                            {
                                key: "ENGINE_MAP",
                                get: function () {
                                    return a.ENGINE_MAP;
                                },
                            },
                            {
                                key: "OS_MAP",
                                get: function () {
                                    return a.OS_MAP;
                                },
                            },
                            {
                                key: "PLATFORMS_MAP",
                                get: function () {
                                    return a.PLATFORMS_MAP;
                                },
                            },
                        ]),
                        null && n(e.prototype, null),
                        i && n(e, i),
                        t
                    );
                })();
                (e.default = o), (t.exports = e.default);
            },
            91: function (t, e, i) {
                "use strict";
                (e.__esModule = !0), (e.default = void 0);
                var s = l(i(92)),
                    r = l(i(93)),
                    a = l(i(94)),
                    n = l(i(95)),
                    o = l(i(17));
                function l(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var h = (function () {
                    function t(t, e) {
                        if ((void 0 === e && (e = !1), null == t || "" === t)) throw new Error("UserAgent parameter can't be empty");
                        (this._ua = t), (this.parsedResult = {}), !0 !== e && this.parse();
                    }
                    var e = t.prototype;
                    return (
                        (e.getUA = function () {
                            return this._ua;
                        }),
                        (e.test = function (t) {
                            return t.test(this._ua);
                        }),
                        (e.parseBrowser = function () {
                            var t = this;
                            this.parsedResult.browser = {};
                            var e = o.default.find(s.default, function (e) {
                                if ("function" == typeof e.test) return e.test(t);
                                if (e.test instanceof Array)
                                    return e.test.some(function (e) {
                                        return t.test(e);
                                    });
                                throw new Error("Browser's test function is not valid");
                            });
                            return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser;
                        }),
                        (e.getBrowser = function () {
                            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
                        }),
                        (e.getBrowserName = function (t) {
                            return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
                        }),
                        (e.getBrowserVersion = function () {
                            return this.getBrowser().version;
                        }),
                        (e.getOS = function () {
                            return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
                        }),
                        (e.parseOS = function () {
                            var t = this;
                            this.parsedResult.os = {};
                            var e = o.default.find(r.default, function (e) {
                                if ("function" == typeof e.test) return e.test(t);
                                if (e.test instanceof Array)
                                    return e.test.some(function (e) {
                                        return t.test(e);
                                    });
                                throw new Error("Browser's test function is not valid");
                            });
                            return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
                        }),
                        (e.getOSName = function (t) {
                            var e = this.getOS().name;
                            return t ? String(e).toLowerCase() || "" : e || "";
                        }),
                        (e.getOSVersion = function () {
                            return this.getOS().version;
                        }),
                        (e.getPlatform = function () {
                            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
                        }),
                        (e.getPlatformType = function (t) {
                            void 0 === t && (t = !1);
                            var e = this.getPlatform().type;
                            return t ? String(e).toLowerCase() || "" : e || "";
                        }),
                        (e.parsePlatform = function () {
                            var t = this;
                            this.parsedResult.platform = {};
                            var e = o.default.find(a.default, function (e) {
                                if ("function" == typeof e.test) return e.test(t);
                                if (e.test instanceof Array)
                                    return e.test.some(function (e) {
                                        return t.test(e);
                                    });
                                throw new Error("Browser's test function is not valid");
                            });
                            return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform;
                        }),
                        (e.getEngine = function () {
                            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
                        }),
                        (e.getEngineName = function (t) {
                            return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
                        }),
                        (e.parseEngine = function () {
                            var t = this;
                            this.parsedResult.engine = {};
                            var e = o.default.find(n.default, function (e) {
                                if ("function" == typeof e.test) return e.test(t);
                                if (e.test instanceof Array)
                                    return e.test.some(function (e) {
                                        return t.test(e);
                                    });
                                throw new Error("Browser's test function is not valid");
                            });
                            return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
                        }),
                        (e.parse = function () {
                            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
                        }),
                        (e.getResult = function () {
                            return o.default.assign({}, this.parsedResult);
                        }),
                        (e.satisfies = function (t) {
                            var e = this,
                                i = {},
                                s = 0,
                                r = {},
                                a = 0;
                            if (
                                (Object.keys(t).forEach(function (e) {
                                    var n = t[e];
                                    "string" == typeof n ? ((r[e] = n), (a += 1)) : "object" == typeof n && ((i[e] = n), (s += 1));
                                }),
                                s > 0)
                            ) {
                                var n = Object.keys(i),
                                    l = o.default.find(n, function (t) {
                                        return e.isOS(t);
                                    });
                                if (l) {
                                    var h = this.satisfies(i[l]);
                                    if (void 0 !== h) return h;
                                }
                                var d = o.default.find(n, function (t) {
                                    return e.isPlatform(t);
                                });
                                if (d) {
                                    var u = this.satisfies(i[d]);
                                    if (void 0 !== u) return u;
                                }
                            }
                            if (a > 0) {
                                var p = Object.keys(r),
                                    c = o.default.find(p, function (t) {
                                        return e.isBrowser(t, !0);
                                    });
                                if (void 0 !== c) return this.compareVersion(r[c]);
                            }
                        }),
                        (e.isBrowser = function (t, e) {
                            void 0 === e && (e = !1);
                            var i = this.getBrowserName().toLowerCase(),
                                s = t.toLowerCase(),
                                r = o.default.getBrowserTypeByAlias(s);
                            return e && r && (s = r.toLowerCase()), s === i;
                        }),
                        (e.compareVersion = function (t) {
                            var e = [0],
                                i = t,
                                s = !1,
                                r = this.getBrowserVersion();
                            if ("string" == typeof r)
                                return (
                                    ">" === t[0] || "<" === t[0]
                                        ? ((i = t.substr(1)), "=" === t[1] ? ((s = !0), (i = t.substr(2))) : (e = []), ">" === t[0] ? e.push(1) : e.push(-1))
                                        : "=" === t[0]
                                        ? (i = t.substr(1))
                                        : "~" === t[0] && ((s = !0), (i = t.substr(1))),
                                    e.indexOf(o.default.compareVersions(r, i, s)) > -1
                                );
                        }),
                        (e.isOS = function (t) {
                            return this.getOSName(!0) === String(t).toLowerCase();
                        }),
                        (e.isPlatform = function (t) {
                            return this.getPlatformType(!0) === String(t).toLowerCase();
                        }),
                        (e.isEngine = function (t) {
                            return this.getEngineName(!0) === String(t).toLowerCase();
                        }),
                        (e.is = function (t) {
                            return this.isBrowser(t) || this.isOS(t) || this.isPlatform(t);
                        }),
                        (e.some = function (t) {
                            var e = this;
                            return (
                                void 0 === t && (t = []),
                                t.some(function (t) {
                                    return e.is(t);
                                })
                            );
                        }),
                        t
                    );
                })();
                (e.default = h), (t.exports = e.default);
            },
            92: function (t, e, i) {
                "use strict";
                (e.__esModule = !0), (e.default = void 0);
                var s,
                    r = (s = i(17)) && s.__esModule ? s : { default: s },
                    a = /version\/(\d+(\.?_?\d+)+)/i,
                    n = [
                        {
                            test: [/googlebot/i],
                            describe: function (t) {
                                var e = { name: "Googlebot" },
                                    i = r.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, t) || r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/opera/i],
                            describe: function (t) {
                                var e = { name: "Opera" },
                                    i = r.default.getFirstMatch(a, t) || r.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/opr\/|opios/i],
                            describe: function (t) {
                                var e = { name: "Opera" },
                                    i = r.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, t) || r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/SamsungBrowser/i],
                            describe: function (t) {
                                var e = { name: "Samsung Internet for Android" },
                                    i = r.default.getFirstMatch(a, t) || r.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/Whale/i],
                            describe: function (t) {
                                var e = { name: "NAVER Whale Browser" },
                                    i = r.default.getFirstMatch(a, t) || r.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/MZBrowser/i],
                            describe: function (t) {
                                var e = { name: "MZ Browser" },
                                    i = r.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, t) || r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/focus/i],
                            describe: function (t) {
                                var e = { name: "Focus" },
                                    i = r.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, t) || r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/swing/i],
                            describe: function (t) {
                                var e = { name: "Swing" },
                                    i = r.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, t) || r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/coast/i],
                            describe: function (t) {
                                var e = { name: "Opera Coast" },
                                    i = r.default.getFirstMatch(a, t) || r.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/opt\/\d+(?:.?_?\d+)+/i],
                            describe: function (t) {
                                var e = { name: "Opera Touch" },
                                    i = r.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/yabrowser/i],
                            describe: function (t) {
                                var e = { name: "Yandex Browser" },
                                    i = r.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/ucbrowser/i],
                            describe: function (t) {
                                var e = { name: "UC Browser" },
                                    i = r.default.getFirstMatch(a, t) || r.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/Maxthon|mxios/i],
                            describe: function (t) {
                                var e = { name: "Maxthon" },
                                    i = r.default.getFirstMatch(a, t) || r.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/epiphany/i],
                            describe: function (t) {
                                var e = { name: "Epiphany" },
                                    i = r.default.getFirstMatch(a, t) || r.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/puffin/i],
                            describe: function (t) {
                                var e = { name: "Puffin" },
                                    i = r.default.getFirstMatch(a, t) || r.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/sleipnir/i],
                            describe: function (t) {
                                var e = { name: "Sleipnir" },
                                    i = r.default.getFirstMatch(a, t) || r.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/k-meleon/i],
                            describe: function (t) {
                                var e = { name: "K-Meleon" },
                                    i = r.default.getFirstMatch(a, t) || r.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/micromessenger/i],
                            describe: function (t) {
                                var e = { name: "WeChat" },
                                    i = r.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/qqbrowser/i],
                            describe: function (t) {
                                var e = { name: /qqbrowserlite/i.test(t) ? "QQ Browser Lite" : "QQ Browser" },
                                    i = r.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/msie|trident/i],
                            describe: function (t) {
                                var e = { name: "Internet Explorer" },
                                    i = r.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/\sedg\//i],
                            describe: function (t) {
                                var e = { name: "Microsoft Edge" },
                                    i = r.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/edg([ea]|ios)/i],
                            describe: function (t) {
                                var e = { name: "Microsoft Edge" },
                                    i = r.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/vivaldi/i],
                            describe: function (t) {
                                var e = { name: "Vivaldi" },
                                    i = r.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/seamonkey/i],
                            describe: function (t) {
                                var e = { name: "SeaMonkey" },
                                    i = r.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/sailfish/i],
                            describe: function (t) {
                                var e = { name: "Sailfish" },
                                    i = r.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/silk/i],
                            describe: function (t) {
                                var e = { name: "Amazon Silk" },
                                    i = r.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/phantom/i],
                            describe: function (t) {
                                var e = { name: "PhantomJS" },
                                    i = r.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/slimerjs/i],
                            describe: function (t) {
                                var e = { name: "SlimerJS" },
                                    i = r.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                            describe: function (t) {
                                var e = { name: "BlackBerry" },
                                    i = r.default.getFirstMatch(a, t) || r.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/(web|hpw)[o0]s/i],
                            describe: function (t) {
                                var e = { name: "WebOS Browser" },
                                    i = r.default.getFirstMatch(a, t) || r.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/bada/i],
                            describe: function (t) {
                                var e = { name: "Bada" },
                                    i = r.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/tizen/i],
                            describe: function (t) {
                                var e = { name: "Tizen" },
                                    i = r.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/qupzilla/i],
                            describe: function (t) {
                                var e = { name: "QupZilla" },
                                    i = r.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/firefox|iceweasel|fxios/i],
                            describe: function (t) {
                                var e = { name: "Firefox" },
                                    i = r.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/electron/i],
                            describe: function (t) {
                                var e = { name: "Electron" },
                                    i = r.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/chromium/i],
                            describe: function (t) {
                                var e = { name: "Chromium" },
                                    i = r.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, t) || r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/chrome|crios|crmo/i],
                            describe: function (t) {
                                var e = { name: "Chrome" },
                                    i = r.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/GSA/i],
                            describe: function (t) {
                                var e = { name: "Google Search" },
                                    i = r.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: function (t) {
                                var e = !t.test(/like android/i),
                                    i = t.test(/android/i);
                                return e && i;
                            },
                            describe: function (t) {
                                var e = { name: "Android Browser" },
                                    i = r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/playstation 4/i],
                            describe: function (t) {
                                var e = { name: "PlayStation 4" },
                                    i = r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/safari|applewebkit/i],
                            describe: function (t) {
                                var e = { name: "Safari" },
                                    i = r.default.getFirstMatch(a, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/.*/i],
                            describe: function (t) {
                                var e = -1 !== t.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                                return { name: r.default.getFirstMatch(e, t), version: r.default.getSecondMatch(e, t) };
                            },
                        },
                    ];
                (e.default = n), (t.exports = e.default);
            },
            93: function (t, e, i) {
                "use strict";
                (e.__esModule = !0), (e.default = void 0);
                var s,
                    r = (s = i(17)) && s.__esModule ? s : { default: s },
                    a = i(18),
                    n = [
                        {
                            test: [/Roku\/DVP/],
                            describe: function (t) {
                                var e = r.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, t);
                                return { name: a.OS_MAP.Roku, version: e };
                            },
                        },
                        {
                            test: [/windows phone/i],
                            describe: function (t) {
                                var e = r.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, t);
                                return { name: a.OS_MAP.WindowsPhone, version: e };
                            },
                        },
                        {
                            test: [/windows /i],
                            describe: function (t) {
                                var e = r.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, t),
                                    i = r.default.getWindowsVersionName(e);
                                return { name: a.OS_MAP.Windows, version: e, versionName: i };
                            },
                        },
                        {
                            test: [/Macintosh(.*?) FxiOS(.*?)\//],
                            describe: function (t) {
                                var e = { name: a.OS_MAP.iOS },
                                    i = r.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/macintosh/i],
                            describe: function (t) {
                                var e = r.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, t).replace(/[_\s]/g, "."),
                                    i = r.default.getMacOSVersionName(e),
                                    s = { name: a.OS_MAP.MacOS, version: e };
                                return i && (s.versionName = i), s;
                            },
                        },
                        {
                            test: [/(ipod|iphone|ipad)/i],
                            describe: function (t) {
                                var e = r.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, t).replace(/[_\s]/g, ".");
                                return { name: a.OS_MAP.iOS, version: e };
                            },
                        },
                        {
                            test: function (t) {
                                var e = !t.test(/like android/i),
                                    i = t.test(/android/i);
                                return e && i;
                            },
                            describe: function (t) {
                                var e = r.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, t),
                                    i = r.default.getAndroidVersionName(e),
                                    s = { name: a.OS_MAP.Android, version: e };
                                return i && (s.versionName = i), s;
                            },
                        },
                        {
                            test: [/(web|hpw)[o0]s/i],
                            describe: function (t) {
                                var e = r.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, t),
                                    i = { name: a.OS_MAP.WebOS };
                                return e && e.length && (i.version = e), i;
                            },
                        },
                        {
                            test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                            describe: function (t) {
                                var e = r.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, t) || r.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, t) || r.default.getFirstMatch(/\bbb(\d+)/i, t);
                                return { name: a.OS_MAP.BlackBerry, version: e };
                            },
                        },
                        {
                            test: [/bada/i],
                            describe: function (t) {
                                var e = r.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, t);
                                return { name: a.OS_MAP.Bada, version: e };
                            },
                        },
                        {
                            test: [/tizen/i],
                            describe: function (t) {
                                var e = r.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, t);
                                return { name: a.OS_MAP.Tizen, version: e };
                            },
                        },
                        {
                            test: [/linux/i],
                            describe: function () {
                                return { name: a.OS_MAP.Linux };
                            },
                        },
                        {
                            test: [/CrOS/],
                            describe: function () {
                                return { name: a.OS_MAP.ChromeOS };
                            },
                        },
                        {
                            test: [/PlayStation 4/],
                            describe: function (t) {
                                var e = r.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, t);
                                return { name: a.OS_MAP.PlayStation4, version: e };
                            },
                        },
                    ];
                (e.default = n), (t.exports = e.default);
            },
            94: function (t, e, i) {
                "use strict";
                (e.__esModule = !0), (e.default = void 0);
                var s,
                    r = (s = i(17)) && s.__esModule ? s : { default: s },
                    a = i(18),
                    n = [
                        {
                            test: [/googlebot/i],
                            describe: function () {
                                return { type: "bot", vendor: "Google" };
                            },
                        },
                        {
                            test: [/huawei/i],
                            describe: function (t) {
                                var e = r.default.getFirstMatch(/(can-l01)/i, t) && "Nova",
                                    i = { type: a.PLATFORMS_MAP.mobile, vendor: "Huawei" };
                                return e && (i.model = e), i;
                            },
                        },
                        {
                            test: [/nexus\s*(?:7|8|9|10).*/i],
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.tablet, vendor: "Nexus" };
                            },
                        },
                        {
                            test: [/ipad/i],
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
                            },
                        },
                        {
                            test: [/Macintosh(.*?) FxiOS(.*?)\//],
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
                            },
                        },
                        {
                            test: [/kftt build/i],
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
                            },
                        },
                        {
                            test: [/silk/i],
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.tablet, vendor: "Amazon" };
                            },
                        },
                        {
                            test: [/tablet(?! pc)/i],
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.tablet };
                            },
                        },
                        {
                            test: function (t) {
                                var e = t.test(/ipod|iphone/i),
                                    i = t.test(/like (ipod|iphone)/i);
                                return e && !i;
                            },
                            describe: function (t) {
                                var e = r.default.getFirstMatch(/(ipod|iphone)/i, t);
                                return { type: a.PLATFORMS_MAP.mobile, vendor: "Apple", model: e };
                            },
                        },
                        {
                            test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.mobile, vendor: "Nexus" };
                            },
                        },
                        {
                            test: [/[^-]mobi/i],
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.mobile };
                            },
                        },
                        {
                            test: function (t) {
                                return "blackberry" === t.getBrowserName(!0);
                            },
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
                            },
                        },
                        {
                            test: function (t) {
                                return "bada" === t.getBrowserName(!0);
                            },
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.mobile };
                            },
                        },
                        {
                            test: function (t) {
                                return "windows phone" === t.getBrowserName();
                            },
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
                            },
                        },
                        {
                            test: function (t) {
                                var e = Number(String(t.getOSVersion()).split(".")[0]);
                                return "android" === t.getOSName(!0) && e >= 3;
                            },
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.tablet };
                            },
                        },
                        {
                            test: function (t) {
                                return "android" === t.getOSName(!0);
                            },
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.mobile };
                            },
                        },
                        {
                            test: function (t) {
                                return "macos" === t.getOSName(!0);
                            },
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.desktop, vendor: "Apple" };
                            },
                        },
                        {
                            test: function (t) {
                                return "windows" === t.getOSName(!0);
                            },
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.desktop };
                            },
                        },
                        {
                            test: function (t) {
                                return "linux" === t.getOSName(!0);
                            },
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.desktop };
                            },
                        },
                        {
                            test: function (t) {
                                return "playstation 4" === t.getOSName(!0);
                            },
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.tv };
                            },
                        },
                        {
                            test: function (t) {
                                return "roku" === t.getOSName(!0);
                            },
                            describe: function () {
                                return { type: a.PLATFORMS_MAP.tv };
                            },
                        },
                    ];
                (e.default = n), (t.exports = e.default);
            },
            95: function (t, e, i) {
                "use strict";
                (e.__esModule = !0), (e.default = void 0);
                var s,
                    r = (s = i(17)) && s.__esModule ? s : { default: s },
                    a = i(18),
                    n = [
                        {
                            test: function (t) {
                                return "microsoft edge" === t.getBrowserName(!0);
                            },
                            describe: function (t) {
                                if (/\sedg\//i.test(t)) return { name: a.ENGINE_MAP.Blink };
                                var e = r.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, t);
                                return { name: a.ENGINE_MAP.EdgeHTML, version: e };
                            },
                        },
                        {
                            test: [/trident/i],
                            describe: function (t) {
                                var e = { name: a.ENGINE_MAP.Trident },
                                    i = r.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: function (t) {
                                return t.test(/presto/i);
                            },
                            describe: function (t) {
                                var e = { name: a.ENGINE_MAP.Presto },
                                    i = r.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: function (t) {
                                var e = t.test(/gecko/i),
                                    i = t.test(/like gecko/i);
                                return e && !i;
                            },
                            describe: function (t) {
                                var e = { name: a.ENGINE_MAP.Gecko },
                                    i = r.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                        {
                            test: [/(apple)?webkit\/537\.36/i],
                            describe: function () {
                                return { name: a.ENGINE_MAP.Blink };
                            },
                        },
                        {
                            test: [/(apple)?webkit/i],
                            describe: function (t) {
                                var e = { name: a.ENGINE_MAP.WebKit },
                                    i = r.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, t);
                                return i && (e.version = i), e;
                            },
                        },
                    ];
                (e.default = n), (t.exports = e.default);
            },
        });
    });
