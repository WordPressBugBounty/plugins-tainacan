(()=>{var e,t,a,o,n={5336:(e,t,a)=>{"use strict";a.d(t,{Qv:()=>d,ZR:()=>u});const o=/(was)? ?(not)? ?@([a-z]+) ?(.*)?/,n=/(?:was )?(?:not )?@[a-z]+ ?.*?(?:(?= and (?:was )?(?:not )?@[a-z])|$)/g,c=e=>void 0===e||"true"===e||"false"!==e&&e,r=e=>{const[,t,a,n,r]=e.match(o);return[n,c(r),"not"===a,"was"===t]},s=(e,t)=>{const a={matches:!1,active:!1,onchange:function(){},start:()=>{a.active||(a.active=!0,o.forEach((e=>e.forEach((e=>e.addListener(c))))),c())},stop:()=>{a.active=!1,o.forEach((e=>e.forEach((e=>{e.removeListener&&e.removeListener(c)}))))},destroy:()=>{a.stop(),o.length=0}},o=e.split(" or ").map((e=>(e=>e.match(n).map(r))(e).map((e=>((e,t,a)=>(e.invert=t,e.retain=a,e.matched=!1,e))(((e,t,a)=>{const o=f("monitor").find((e=>e.name===t));if(!o)throw new Error(`Conditioner: Cannot find monitor with name "@${t}". Only the "@media" monitor is always available. Custom monitors can be added with the \`addPlugin\` method using the \`monitors\` key. The name of the custom monitor should not include the "@" symbol.`);return o.create(a,e)})(t,...e),...e.splice(2)))))),c=()=>{const e=o.reduce(((e,t)=>!!e||t.reduce(((e,t)=>{if(!e)return!1;const a=t.invert?!t.matches:t.matches;return a&&(t.matched=!0),!(!t.retain||!t.matched)||a}),!0)),!1);a.matches=e,a.onchange(e)};return a},i=(e,t)=>{const a=s(e,t.element);return a.onchange=e=>e?t.mount():t.unmount(),a.start(),a},l=e=>{const t=((e,t)=>{const a=p("moduleGetName",e),o=h("moduleSetName",a),n={destruct:null,mounting:!1},c={alias:a,name:o,element:e,mounted:!1,unmount:()=>{n.destruct&&c.mounted&&(b("moduleWillUnmount",c),n.destruct(),c.mounted=!1,b("moduleDidUnmount",c),c.onunmount.apply(e))},mount:()=>{if(!c.mounted&&!n.mounting)return n.mounting=!0,b("moduleWillMount",c),p("moduleImport",o).then((t=>{n.destruct=p("moduleGetDestructor",p("moduleGetConstructor",t)(...p("moduleSetConstructorArguments",o,e))),n.mounting=!1,c.mounted=!0,b("moduleDidMount",c),c.onmount.apply(e,[c])})).catch((t=>{throw n.mounting=!1,b("moduleDidCatch",t,c),c.onmounterror.apply(e,[t,c]),new Error(`Conditioner: ${t}`)})),c},destroy:function(){b("moduleWillDestroy",c),c.unmount(),b("moduleDidDestroy",c),c.ondestroy.apply(e),t()},onmounterror:function(){},onmount:function(){},onunmount:function(){},ondestroy:function(){}};return c})(e,(()=>o&&o.destroy())),a=p("moduleGetContext",e),o=a&&i(a,t);return a?t:t.mount()},d=e=>[...p("moduleSelector",e)].map(l),m=[],u=e=>m.push(e),f=e=>m.filter((t=>{return a=Object.keys(t),o=e,a.indexOf(o)>-1;var a,o})).map((t=>t[e])),b=(e,...t)=>f(e).forEach((e=>e(...t))),h=(e,...t)=>f(e).reduce(((e,t)=>[t(...e)]),t).shift(),p=(e,...t)=>f(e).pop()(...t);u({moduleSelector:e=>e.querySelectorAll("[data-module]"),moduleGetContext:e=>e.dataset.context,moduleImport:e=>new Promise(((t,a)=>{if(self[e])return t(self[e]);a(`Cannot find module with name "${e}". By default Conditioner will import modules from the global scope, make sure a function named "${e}" is defined on the window object. The scope of a function defined with \`let\` or \`const\` is limited to the <script> block in which it is defined.`)})),moduleGetConstructor:e=>e,moduleGetDestructor:e=>e,moduleSetConstructorArguments:(e,t)=>[t],moduleGetName:e=>e.dataset.module,monitor:{name:"media",create:e=>self.matchMedia(e)}})},69229:(e,t,a)=>{var o={"./blocks/carousel-collections-list/theme":[53541,4367,4168,5189,5799,436],"./blocks/carousel-collections-list/theme.js":[53541,4367,4168,5189,5799,436],"./blocks/carousel-items-list/theme":[85114,4367,4168,5189,5799,9509],"./blocks/carousel-items-list/theme.js":[85114,4367,4168,5189,5799,9509],"./blocks/carousel-terms-list/theme":[93931,4367,4168,5189,5799,3622],"./blocks/carousel-terms-list/theme.js":[93931,4367,4168,5189,5799,3622],"./blocks/collections-list/theme":[23282,4109],"./blocks/collections-list/theme.js":[23282,4109],"./blocks/dynamic-items-list/theme":[83325,4367,9557,2268,3054,4824,4476],"./blocks/dynamic-items-list/theme.js":[83325,4367,9557,2268,3054,4824,4476],"./blocks/faceted-search/theme":[867,4367,9681,9557,9413,1224,2268,834,6458,5770,2702,4824,3153,1310],"./blocks/faceted-search/theme.js":[867,4367,9681,9557,9413,1224,2268,834,6458,5770,2702,4824,3153,1310],"./blocks/facets-list/theme":[50215,4367,3730],"./blocks/facets-list/theme.js":[50215,4367,3730],"./blocks/geocoordinate-item-metadatum/theme":[706,5218,5373],"./blocks/geocoordinate-item-metadatum/theme.js":[706,5218,5373],"./blocks/item-gallery/theme":[1954,4168,5189,2245,4877],"./blocks/item-gallery/theme.js":[1954,4168,5189,2245,4877],"./blocks/item-submission-form/theme":[3697,4367,8901,9681,9557,5218,554,9413,1224,2268,8061,834,2354,2702,4824,4561,9734,4152,3996,5008,2240],"./blocks/item-submission-form/theme.js":[3697,4367,8901,9681,9557,5218,554,9413,1224,2268,8061,834,2354,2702,4824,4561,9734,4152,3996,5008,2240],"./blocks/items-list/theme":[35201,4352],"./blocks/items-list/theme.js":[35201,4352],"./blocks/related-items-list/theme":[48383,2090],"./blocks/related-items-list/theme.js":[48383,2090],"./blocks/search-bar/theme":[82430,2425],"./blocks/search-bar/theme.js":[82430,2425],"./blocks/terms-list/theme":[16560,7559],"./blocks/terms-list/theme.js":[16560,7559]};function n(e){if(!a.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return Promise.all(t.slice(1).map(a.e)).then((()=>a(n)))}n.keys=()=>Object.keys(o),n.id=69229,e.exports=n}},c={};function r(e){var t=c[e];if(void 0!==t)return t.exports;var a=c[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=n,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(a,o){if(1&o&&(a=this(a)),8&o)return a;if("object"==typeof a&&a){if(4&o&&a.__esModule)return a;if(16&o&&"function"==typeof a.then)return a}var n=Object.create(null);r.r(n);var c={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&a;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>c[e]=()=>a[e]));return c.default=()=>a,r.d(n,c),n},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,a)=>(r.f[a](e,t),t)),[])),r.u=e=>(({436:"tainacan-chunks-blocks-carousel-collections-list-theme",1310:"tainacan-chunks-blocks-faceted-search-theme",2090:"tainacan-chunks-blocks-related-items-list-theme",2240:"tainacan-chunks-blocks-item-submission-form-theme",2425:"tainacan-chunks-blocks-search-bar-theme",3622:"tainacan-chunks-blocks-carousel-terms-list-theme",3730:"tainacan-chunks-blocks-facets-list-theme",4109:"tainacan-chunks-blocks-collections-list-theme",4352:"tainacan-chunks-blocks-items-list-theme",4476:"tainacan-chunks-blocks-dynamic-items-list-theme",4877:"tainacan-chunks-blocks-item-gallery-theme",5373:"tainacan-chunks-blocks-geocoordinate-item-metadatum-theme",7559:"tainacan-chunks-blocks-terms-list-theme",9509:"tainacan-chunks-blocks-carousel-items-list-theme"}[e]||e)+".js?ver="+{10:"20a7ed7bca8fa3990f1a",23:"326b2e7d60babd2a32ba",436:"787a416e87fe6516dc5c",451:"33770e9ba5d7a744bd6b",468:"f1c44c92a23c923bb551",507:"1ddb8e04de6d39100cc2",554:"4332839d80ce0831bb61",834:"a0f04647ec615ef5b270",1070:"750950305f93edd2b3be",1202:"3f4c2ae2b49f31b7b624",1224:"46ac55369fafd45ef985",1301:"d0e35d71dfd536837925",1310:"8d04ddff3a5c25059b37",1645:"1bd91fb85dbfa7bf50e5",1685:"2ab1263c1627cfeb34eb",2008:"d4cf134ad91f9f3f7b00",2090:"a1d493d7115d3a232e1f",2240:"90208f7a622bdf0dcfc3",2245:"d4487dedeeb00b57c6eb",2268:"3917eb62216ae20df17a",2302:"05370d6139da1386887c",2354:"19fabd9801cf69b3bc4b",2425:"7a0279bec4f392547536",2702:"a892c7897e07cb93d508",3054:"c4d80ae128d79ecbbbd4",3153:"e445c8c5b0d3f5e6c663",3292:"8aea2ae1f6a14eea5adb",3343:"b78ab7edbea39377ac15",3606:"d5b8eebc172cd582246a",3622:"0c0281c7d9e86c4446fd",3730:"0bdce4e60763ddeca34b",3916:"1dd509cb63ee91c7dc27",3996:"b51007ab0ffec3ef7a23",4109:"ec65f6c44fba41bb8db2",4152:"1559d935799ba7f34c81",4168:"eff12be4cdac6fa35054",4204:"55bd4d67416ad52d822d",4320:"ffd3a45487a36ae2611d",4352:"7c3f53e44c0a57bdd621",4367:"f02073716447ae87b70f",4441:"6b88cc91c4a7e870fe58",4476:"59f28752f1c6bccbb545",4561:"aa6eceffed263b06b9b7",4743:"300f591eb0243edc0559",4777:"d3f65f51fabca5544ebe",4824:"63cff57aa47a58cc29b7",4877:"bbf20fe643fe1a243d34",4909:"d778dc9ca0e31882a7d8",4997:"a0b71ff95dfac77789e6",5008:"5bfc41249b72fca02810",5030:"caeee86d2810fe3aef76",5188:"2cc7c1258fd04d128849",5189:"2636c065a6123059d208",5218:"1279f848e1a05c0a4a0c",5276:"bc4f2eb4162ef7a5a67a",5373:"c7500d71a2607fab8f34",5770:"3770e848a49a63752a6c",5799:"0cd1813b54689b8841c5",6406:"226932aadbdcce045a84",6458:"1a6d8cca479f8cb97cce",6518:"e54dd1237506eced85a9",6698:"1aa83d47853536cd3286",6748:"da8a7579a97698d71e7b",6989:"ce68e594d61267ad4f22",6994:"173a9c3c4804d5086322",7097:"3b79ac35d7703d13093a",7207:"ca8eba34801fecf98b85",7559:"bc6060225426519f89c2",7625:"37f05e81900c328d2534",8039:"355e9cdf44c01f0e98bb",8061:"e03cdc7a88aa8f976acc",8219:"606c024fd1ebeb6980d9",8538:"670c96b90fd568a379ef",8571:"86830d4c798dd12caaca",8901:"7649c8344bdf8d002752",9260:"63950db3b73d9be9f7c3",9376:"d83aca1fd630426e1fdb",9413:"b5b9d94a7ffb25986e7b",9509:"a8e898bdbe84c5591964",9557:"96cae13dafa8d285d567",9681:"d90030864053fe57bc19",9734:"70b0381ebd8f0d1b939a",9763:"ddbfd3e464d9ff98c607",9764:"f529a46fecffa79aedf5",9788:"eade5116b1bd285f11fa",9937:"387f34e121de8efa5ce7"}[e]),r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="tainacan:",r.l=(e,t,n,c)=>{if(a[e])a[e].push(t);else{var s,i;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var m=l[d];if(m.getAttribute("src")==e||m.getAttribute("data-webpack")==o+n){s=m;break}}s||(i=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",o+n),s.src=e),a[e]=[t];var u=(t,o)=>{s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(delete a[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),i&&document.head.appendChild(s)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="./wp-content/plugins/tainacan/assets/js/",(()=>{r.b=document.baseURI||self.location.href;var e={6932:0};r.f.j=(t,a)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var n=new Promise(((a,n)=>o=e[t]=[a,n]));a.push(o[2]=n);var c=r.p+r.u(t),s=new Error;r.l(c,(a=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+c+")",s.name="ChunkLoadError",s.type=n,s.request=c,o[1](s)}}),"chunk-"+t,t)}};var t=(t,a)=>{var o,n,[c,s,i]=a,l=0;if(c.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(i)i(r)}for(t&&t(a);l<c.length;l++)n=c[l],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0},a=self.webpackChunktainacan=self.webpackChunktainacan||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),r.nc=void 0,(()=>{"use strict";var e=r(5336);function t(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var o={}.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,o=Array(t);a<t;a++)o[a]=e[a];return o}var __=wp.i18n.__;r.p=tainacan_plugin.plugin_dir_url+"assets/js/";var o;o=function(){!function(){["items-list","collections-list","terms-list","search-bar","facets-list","dynamic-items-list","carousel-items-list","carousel-terms-list","related-items-list","carousel-collections-list","item-gallery"].forEach((function(e){t(document.getElementsByClassName("wp-block-tainacan-".concat(e))).forEach((function(t){t.getAttribute("data-module")||t.setAttribute("data-module",e)}))}));var e=document.getElementById("tainacan-items-page");e&&!e.getAttribute("data-module")&&e.setAttribute("data-module","faceted-search");var a=document.getElementById("tainacan-item-submission-form");a&&!a.getAttribute("data-module")&&a.setAttribute("data-module","item-submission-form")}(),e.ZR({moduleSetName:function(e){return"./blocks/".concat(e,"/theme.js")},moduleGetConstructor:function(e){return e.default},moduleImport:function(e){return r(69229)("".concat(e)).catch((function(e){document.querySelectorAll("[data-module]").forEach((function(e){e.innerHTML='<p style="font-size: 1rem;"><strong>'+__("An error ocurred while loading this Tainacan component. Please reload your page (CTRL+SHIFT+R).","tainacan")+"</strong></p>"})),console.warn(__("An error ocurred while loading some Tainacan components. Please reload your page (CTRL+SHIFT+R).","tainacan")),console.warn(__("Clearing the cache may help. It is possible that the browser or server are retaining old information that are preventing Tainacan components to be loading correctly.","tainacan")),console.error(e)}))}}),e.Qv(document.documentElement)},/comp|inter|loaded/.test(document.readyState)?cb():document.addEventListener("DOMContentLoaded",o,!1)})()})();