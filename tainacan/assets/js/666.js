"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[666,7383,9764],{2052:(e,n,t)=>{t(12375),t(17044)},17044:(e,n,t)=>{t.d(n,{a:()=>y,c:()=>h,d:()=>a,e:()=>c,f:()=>x,h:()=>v,j:()=>o,m:()=>T,n:()=>s,p:()=>b,q:()=>g,r:()=>f,s:()=>d,t:()=>w,u:()=>m,v:()=>u,w:()=>p,x:()=>i});var r=t(12375);function i(e){const n=e;Object.keys(n).forEach((e=>{try{n[e]=null}catch(e){}try{delete n[e]}catch(e){}}))}function s(e,n){return void 0===n&&(n=0),setTimeout(e,n)}function a(){return Date.now()}function o(e,n){void 0===n&&(n="x");const t=(0,r.a)();let i,s,a;const o=function(e){const n=(0,r.a)();let t;return n.getComputedStyle&&(t=n.getComputedStyle(e,null)),!t&&e.currentStyle&&(t=e.currentStyle),t||(t=e.style),t}(e);return t.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map((e=>e.replace(",","."))).join(", ")),a=new t.WebKitCSSMatrix("none"===s?"":s)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=a.toString().split(",")),"x"===n&&(s=t.WebKitCSSMatrix?a.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===n&&(s=t.WebKitCSSMatrix?a.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),s||0}function l(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function p(){const e=Object(arguments.length<=0?void 0:arguments[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<arguments.length;r+=1){const i=r<0||arguments.length<=r?void 0:arguments[r];if(null!=i&&(t=i,!("undefined"!=typeof window&&void 0!==window.HTMLElement?t instanceof HTMLElement:t&&(1===t.nodeType||11===t.nodeType)))){const t=Object.keys(Object(i)).filter((e=>n.indexOf(e)<0));for(let n=0,r=t.length;n<r;n+=1){const r=t[n],s=Object.getOwnPropertyDescriptor(i,r);void 0!==s&&s.enumerable&&(l(e[r])&&l(i[r])?i[r].__swiper__?e[r]=i[r]:p(e[r],i[r]):!l(e[r])&&l(i[r])?(e[r]={},i[r].__swiper__?e[r]=i[r]:p(e[r],i[r])):e[r]=i[r])}}}var t;return e}function d(e,n,t){e.style.setProperty(n,t)}function w(e){let{swiper:n,targetPosition:t,side:i}=e;const s=(0,r.a)(),a=-n.translate;let o,l=null;const p=n.params.speed;n.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(n.cssModeFrameID);const d=t>a?"next":"prev",w=(e,n)=>"next"===d&&e>=n||"prev"===d&&e<=n,c=()=>{o=(new Date).getTime(),null===l&&(l=o);const e=Math.max(Math.min((o-l)/p,1),0),r=.5-Math.cos(e*Math.PI)/2;let d=a+r*(t-a);if(w(d,t)&&(d=t),n.wrapperEl.scrollTo({[i]:d}),w(d,t))return n.wrapperEl.style.overflow="hidden",n.wrapperEl.style.scrollSnapType="",setTimeout((()=>{n.wrapperEl.style.overflow="",n.wrapperEl.scrollTo({[i]:d})})),void s.cancelAnimationFrame(n.cssModeFrameID);n.cssModeFrameID=s.requestAnimationFrame(c)};c()}function c(e,n){void 0===n&&(n="");const t=[...e.children];return e instanceof HTMLSlotElement&&t.push(...e.assignedElements()),n?t.filter((e=>e.matches(n))):t}function u(e,n){const t=n.contains(e);if(!t&&n instanceof HTMLSlotElement){return[...n.assignedElements()].includes(e)}return t}function m(e){try{return void console.warn(e)}catch(e){}}function h(e,n){void 0===n&&(n=[]);const t=document.createElement(e);return t.classList.add(...Array.isArray(n)?n:function(e){return void 0===e&&(e=""),e.trim().split(" ").filter((e=>!!e.trim()))}(n)),t}function f(e,n){const t=[];for(;e.previousElementSibling;){const r=e.previousElementSibling;n?r.matches(n)&&t.push(r):t.push(r),e=r}return t}function g(e,n){const t=[];for(;e.nextElementSibling;){const r=e.nextElementSibling;n?r.matches(n)&&t.push(r):t.push(r),e=r}return t}function b(e,n){return(0,r.a)().getComputedStyle(e,null).getPropertyValue(n)}function v(e){let n,t=e;if(t){for(n=0;null!==(t=t.previousSibling);)1===t.nodeType&&(n+=1);return n}}function y(e,n){const t=[];let r=e.parentElement;for(;r;)n?r.matches(n)&&t.push(r):t.push(r),r=r.parentElement;return t}function x(e,n,t){const i=(0,r.a)();return t?e["width"===n?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===n?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===n?"margin-left":"margin-bottom")):e.offsetWidth}function T(e){return(Array.isArray(e)?e:[e]).filter((e=>!!e))}},23484:(e,n,t)=>{t(12375),t(17044)},25155:(e,n,t)=>{t(12375),t(17044)},28163:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(31601),i=t.n(r),s=t(76314),a=t.n(s)()(i());a.push([e.id,"",""]);const o=a},35189:(e,n,t)=>{t.d(n,{FJ:()=>r.A,Vx:()=>i.A});t(2052),t(7936);var r=t(81193),i=t(43385);t(87083),t(5639),t(97426),t(78714),t(80707),t(25155),t(38929),t(8998),t(48832),t(23484),t(77555),t(86971),t(96666),t(2664),t(45426),t(7698),t(69574)},43334:(e,n,t)=>{var r=t(85072),i=t.n(r),s=t(97825),a=t.n(s),o=t(77659),l=t.n(o),p=t(55056),d=t.n(p),w=t(10540),c=t.n(w),u=t(63494),m=t.n(u),h=t(66219),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=c();i()(h.A,f),h.A&&h.A.locals&&h.A.locals},48832:(e,n,t)=>{t(12375)},52730:(e,n,t)=>{var r=t(85072),i=t.n(r),s=t(97825),a=t.n(s),o=t(77659),l=t.n(o),p=t(55056),d=t.n(p),w=t(10540),c=t.n(w),u=t(63494),m=t.n(u),h=t(97795),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=c();i()(h.A,f),h.A&&h.A.locals&&h.A.locals},57182:(e,n,t)=>{var r=t(85072),i=t.n(r),s=t(97825),a=t.n(s),o=t(77659),l=t.n(o),p=t(55056),d=t.n(p),w=t(10540),c=t.n(w),u=t(63494),m=t.n(u),h=t(28163),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=c();i()(h.A,f),h.A&&h.A.locals&&h.A.locals},66219:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(31601),i=t.n(r),s=t(76314),a=t.n(s)()(i());a.push([e.id,":root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-top-offset: 50%;\n  --swiper-navigation-sides-offset: 10px;\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: var(--swiper-navigation-top-offset, 50%);\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev.swiper-button-hidden,\n.swiper-button-next.swiper-button-hidden {\n  opacity: 0;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-navigation-disabled .swiper-button-prev,\n.swiper-navigation-disabled .swiper-button-next {\n  display: none !important;\n}\n.swiper-button-prev svg,\n.swiper-button-next svg {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  transform-origin: center;\n}\n.swiper-rtl .swiper-button-prev svg,\n.swiper-rtl .swiper-button-next svg {\n  transform: rotate(180deg);\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: var(--swiper-navigation-sides-offset, 10px);\n  right: auto;\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-lock {\n  display: none;\n}\n/* Navigation font start */\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev:after,\n.swiper-rtl .swiper-button-next:after {\n  content: 'prev';\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-rtl .swiper-button-prev:after {\n  content: 'next';\n}\n/* Navigation font end */\n",""]);const o=a},81193:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(12375),i=t(17044);function s(e){let{swiper:n,extendParams:t,on:s,emit:a}=e;const o=(0,r.a)();let l;t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null,noMousewheelClass:"swiper-no-mousewheel"}}),n.mousewheel={enabled:!1};let p,d=(0,i.d)();const w=[];function c(){n.enabled&&(n.mouseEntered=!0)}function u(){n.enabled&&(n.mouseEntered=!1)}function m(e){return!(n.params.mousewheel.thresholdDelta&&e.delta<n.params.mousewheel.thresholdDelta)&&(!(n.params.mousewheel.thresholdTime&&(0,i.d)()-d<n.params.mousewheel.thresholdTime)&&(e.delta>=6&&(0,i.d)()-d<60||(e.direction<0?n.isEnd&&!n.params.loop||n.animating||(n.slideNext(),a("scroll",e.raw)):n.isBeginning&&!n.params.loop||n.animating||(n.slidePrev(),a("scroll",e.raw)),d=(new o.Date).getTime(),!1)))}function h(e){let t=e,r=!0;if(!n.enabled)return;if(e.target.closest(`.${n.params.mousewheel.noMousewheelClass}`))return;const s=n.params.mousewheel;n.params.cssMode&&t.preventDefault();let o=n.el;"container"!==n.params.mousewheel.eventsTarget&&(o=document.querySelector(n.params.mousewheel.eventsTarget));const d=o&&o.contains(t.target);if(!n.mouseEntered&&!d&&!s.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);let c=0;const u=n.rtlTranslate?-1:1,h=function(e){let n=0,t=0,r=0,i=0;return"detail"in e&&(t=e.detail),"wheelDelta"in e&&(t=-e.wheelDelta/120),"wheelDeltaY"in e&&(t=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(n=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(n=t,t=0),r=10*n,i=10*t,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(r=e.deltaX),e.shiftKey&&!r&&(r=i,i=0),(r||i)&&e.deltaMode&&(1===e.deltaMode?(r*=40,i*=40):(r*=800,i*=800)),r&&!n&&(n=r<1?-1:1),i&&!t&&(t=i<1?-1:1),{spinX:n,spinY:t,pixelX:r,pixelY:i}}(t);if(s.forceToAxis)if(n.isHorizontal()){if(!(Math.abs(h.pixelX)>Math.abs(h.pixelY)))return!0;c=-h.pixelX*u}else{if(!(Math.abs(h.pixelY)>Math.abs(h.pixelX)))return!0;c=-h.pixelY}else c=Math.abs(h.pixelX)>Math.abs(h.pixelY)?-h.pixelX*u:-h.pixelY;if(0===c)return!0;s.invert&&(c=-c);let f=n.getTranslate()+c*s.sensitivity;if(f>=n.minTranslate()&&(f=n.minTranslate()),f<=n.maxTranslate()&&(f=n.maxTranslate()),r=!!n.params.loop||!(f===n.minTranslate()||f===n.maxTranslate()),r&&n.params.nested&&t.stopPropagation(),n.params.freeMode&&n.params.freeMode.enabled){const e={time:(0,i.d)(),delta:Math.abs(c),direction:Math.sign(c)},r=p&&e.time<p.time+500&&e.delta<=p.delta&&e.direction===p.direction;if(!r){p=void 0;let o=n.getTranslate()+c*s.sensitivity;const d=n.isBeginning,u=n.isEnd;if(o>=n.minTranslate()&&(o=n.minTranslate()),o<=n.maxTranslate()&&(o=n.maxTranslate()),n.setTransition(0),n.setTranslate(o),n.updateProgress(),n.updateActiveIndex(),n.updateSlidesClasses(),(!d&&n.isBeginning||!u&&n.isEnd)&&n.updateSlidesClasses(),n.params.loop&&n.loopFix({direction:e.direction<0?"next":"prev",byMousewheel:!0}),n.params.freeMode.sticky){clearTimeout(l),l=void 0,w.length>=15&&w.shift();const t=w.length?w[w.length-1]:void 0,r=w[0];if(w.push(e),t&&(e.delta>t.delta||e.direction!==t.direction))w.splice(0);else if(w.length>=15&&e.time-r.time<500&&r.delta-e.delta>=1&&e.delta<=6){const t=c>0?.8:.2;p=e,w.splice(0),l=(0,i.n)((()=>{!n.destroyed&&n.params&&n.slideToClosest(n.params.speed,!0,void 0,t)}),0)}l||(l=(0,i.n)((()=>{if(n.destroyed||!n.params)return;p=e,w.splice(0),n.slideToClosest(n.params.speed,!0,void 0,.5)}),500))}if(r||a("scroll",t),n.params.autoplay&&n.params.autoplayDisableOnInteraction&&n.autoplay.stop(),s.releaseOnEdges&&(o===n.minTranslate()||o===n.maxTranslate()))return!0}}else{const t={time:(0,i.d)(),delta:Math.abs(c),direction:Math.sign(c),raw:e};w.length>=2&&w.shift();const r=w.length?w[w.length-1]:void 0;if(w.push(t),r?(t.direction!==r.direction||t.delta>r.delta||t.time>r.time+150)&&m(t):m(t),function(e){const t=n.params.mousewheel;if(e.direction<0){if(n.isEnd&&!n.params.loop&&t.releaseOnEdges)return!0}else if(n.isBeginning&&!n.params.loop&&t.releaseOnEdges)return!0;return!1}(t))return!0}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1}function f(e){let t=n.el;"container"!==n.params.mousewheel.eventsTarget&&(t=document.querySelector(n.params.mousewheel.eventsTarget)),t[e]("mouseenter",c),t[e]("mouseleave",u),t[e]("wheel",h)}function g(){return n.params.cssMode?(n.wrapperEl.removeEventListener("wheel",h),!0):!n.mousewheel.enabled&&(f("addEventListener"),n.mousewheel.enabled=!0,!0)}function b(){return n.params.cssMode?(n.wrapperEl.addEventListener(event,h),!0):!!n.mousewheel.enabled&&(f("removeEventListener"),n.mousewheel.enabled=!1,!0)}s("init",(()=>{!n.params.mousewheel.enabled&&n.params.cssMode&&b(),n.params.mousewheel.enabled&&g()})),s("destroy",(()=>{n.params.cssMode&&g(),n.mousewheel.enabled&&b()})),Object.assign(n.mousewheel,{enable:g,disable:b})}},87083:(e,n,t)=>{t(88706),t(17044)},97795:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(31601),i=t.n(r),s=t(76314),a=t.n(s),o=t(4417),l=t.n(o),p=new URL(t(56085),t.b),d=a()(i()),w=l()(p);d.push([e.id,`/**\n * Swiper 11.1.14\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2024 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 12, 2024\n */\n\n/* FONT_START */\n@font-face {\n  font-family: 'swiper-icons';\n  src: url(${w});\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: '';\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */\n`,""]);const c=d}}]);