"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[3153],{27784:(e,t,r)=>{r.d(t,{X:()=>i});var o=r(6934),n={class:"tainacan-help-tooltip-trigger"};function i(e,t,r,i,a,s){var c=(0,o.gN)("tooltip");return(0,o.uX)(),(0,o.CE)("span",n,[(0,o.bo)(((0,o.uX)(),(0,o.CE)("a",{class:(0,o.C4)(r.forcedIconColor?"has-text-"+r.forcedIconColor:"")},t[0]||(t[0]=[(0,o.Lk)("span",{class:"icon is-small"},[(0,o.Lk)("i",{class:"tainacan-icon tainacan-icon-help"})],-1)]),2)),[[c,{content:s.getHelperTooltipContent,autoHide:!0,popperClass:["tainacan-tooltip","tooltip","tainacan-helper-tooltip",r.extraClasses],html:!0,delay:{show:0,hide:100}}]])])}},37431:(e,t,r)=>{r.d(t,{X:()=>o.X});var o=r(27784)},40183:(e,t,r)=>{r.d(t,{A:()=>s});var o=r(31601),n=r.n(o),i=r(76314),a=r.n(i)()(n());a.push([e.id,".tainacan-help-tooltip-trigger>a .icon i,.tainacan-help-tooltip-trigger>a .icon i::before{font-size:.875em !important}",""]);const s=a},44346:(e,t,r)=>{r.d(t,{A:()=>l});var o=r(27380);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function i(){i=function(){return t};var e,t={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function h(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(e){h=function(e,t,r){return e[t]=r}}function f(e,t,r,o){var n=t&&t.prototype instanceof b?t:b,i=Object.create(n.prototype),s=new Q(o||[]);return a(i,"_invoke",{value:O(e,r,s)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var p="suspendedStart",g="suspendedYield",y="executing",m="completed",v={};function b(){}function P(){}function w(){}var $={};h($,c,(function(){return this}));var I=Object.getPrototypeOf,L=I&&I(I(T([])));L&&L!==r&&o.call(L,c)&&($=L);var S=w.prototype=b.prototype=Object.create($);function _(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(i,a,s,c){var l=d(e[i],e,a);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==n(h)&&o.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,s,c)}),(function(e){r("throw",e,s,c)})):t.resolve(h).then((function(e){u.value=e,s(u)}),(function(e){return r("throw",e,s,c)}))}c(l.arg)}var i;a(this,"_invoke",{value:function(e,o){function n(){return new t((function(t,n){r(e,o,t,n)}))}return i=i?i.then(n,n):n()}})}function O(t,r,o){var n=p;return function(i,a){if(n===y)throw Error("Generator is already running");if(n===m){if("throw"===i)throw a;return{value:e,done:!0}}for(o.method=i,o.arg=a;;){var s=o.delegate;if(s){var c=A(s,o);if(c){if(c===v)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===p)throw n=m,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=y;var l=d(t,r,o);if("normal"===l.type){if(n=o.done?m:g,l.arg===v)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(n=m,o.method="throw",o.arg=l.arg)}}}function A(t,r){var o=r.method,n=t.iterator[o];if(n===e)return r.delegate=null,"throw"===o&&t.iterator.return&&(r.method="return",r.arg=e,A(t,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),v;var i=d(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function M(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function Q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){for(;++i<t.length;)if(o.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(n(t)+" is not iterable")}return P.prototype=w,a(S,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:P,configurable:!0}),P.displayName=h(w,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===P||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,h(e,u,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},_(x.prototype),h(x.prototype,l,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,o,n,i){void 0===i&&(i=Promise);var a=new x(f(e,r,o,n),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},_(S),h(S,u,"Generator"),h(S,c,(function(){return this})),h(S,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},t.values=T,Q.prototype={constructor:Q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(o,n){return s.type="throw",s.arg=t,r.next=o,n&&(r.method="next",r.arg=e),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),M(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;M(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:T(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),v}},t}function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return s(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var _n=0,o=function(){};return{s:o,n:function(){return _n>=e.length?{done:!0}:{done:!1,value:e[_n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,n=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw n}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=Array(t);r<t;r++)o[r]=e[r];return o}function c(e,t,r,o,n,i,a){try{var s=e[i](a),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(o,n)}const l={install:function(e){var t=(0,o.A)(),r={collectionId:void 0,defaultOrder:"ASC",defaultOrderBy:"date",taxonomy:void 0,termId:void 0,searchCancel:void 0,performAdvancedSearch:function(t){e.config.globalProperties.$store.dispatch("search/setAdvancedQuery",t),this.updateURLQueries()},addMetaquery:function(t){t&&t.collection_id&&e.config.globalProperties.$store.dispatch("search/addMetaquery",t),this.updateURLQueries()},addTaxquery:function(t){t&&t.collection_id&&e.config.globalProperties.$store.dispatch("search/addTaxquery",t),this.updateURLQueries()},removeMetaFromFilterTag:function(t){null==t.singleLabel&&null==t.label||("postin"!==t.argType?t.taxonomy?e.config.globalProperties.$store.dispatch("search/removeTaxQuery",{filterId:t.filterId,label:t.singleLabel?t.singleLabel:t.label,isMultiValue:!t.singleLabel,taxonomy:t.taxonomy,value:t.value,secondaryMetadatumId:t.secondaryMetadatumId}):e.config.globalProperties.$store.dispatch("search/removeMetaQuery",{filterId:t.filterId,label:t.singleLabel?t.singleLabel:t.label,isMultiValue:!t.singleLabel,metadatum_id:t.metadatumId,value:t.value,secondaryMetadatumId:t.secondaryMetadatumId}):e.config.globalProperties.$store.dispatch("search/removePostIn"),e.config.globalProperties.$store.dispatch("search/removeFilterTag",t)),this.updateURLQueries()},addFetchOnly:function(t,r,o){if(e.config.globalProperties.$store.dispatch("search/addFetchOnly",t),e.config.globalProperties.$store.dispatch("search/addFetchOnlyMeta",o),this.updateURLQueries(),!r){var n=this.collectionId?"fetch_only_".concat(this.collectionId):"fetch_only",i=this.collectionId?"fetch_only_meta_".concat(this.collectionId):"fetch_only_meta";e.config.globalProperties.$userPrefs.get(n)!=t&&e.config.globalProperties.$userPrefs.set(n,t),e.config.globalProperties.$userPrefs.get(i)!=o&&e.config.globalProperties.$userPrefs.set(i,o)}},cleanFetchOnly:function(){e.config.globalProperties.$store.dispatch("search/cleanFetchOnly")},removeFetchOnlyMeta:function(t){e.config.globalProperties.$store.dispatch("search/removeFetchOnlyMeta",t),this.updateURLQueries()},setPage:function(t){e.config.globalProperties.$store.dispatch("search/setPage",t),this.updateURLQueries()},resetPageOnStore:function(){e.config.globalProperties.$store.dispatch("search/setPage",1)},setItemsPerPage:function(t,r){if(e.config.globalProperties.$store.dispatch("search/setItemsPerPage",t),this.updateURLQueries(),null==r||0==r){var o=null!=this.collectionId?"items_per_page_"+this.collectionId:"items_per_page";e.config.globalProperties.$userPrefs.get(o)!=t&&e.config.globalProperties.$userPrefs.set(o,t).catch((function(){}))}},setOrderBy:function(t){var r=null!=this.collectionId?"order_by_"+this.collectionId:"order_by";t.metakey?e.config.globalProperties.$userPrefs.get(r)&&t.metakey==e.config.globalProperties.$userPrefs.get(r).metakey||e.config.globalProperties.$userPrefs.set(r,t).catch((function(){})):t!=e.config.globalProperties.$userPrefs.get(r)&&e.config.globalProperties.$userPrefs.set(r,t).catch((function(){})),e.config.globalProperties.$store.dispatch("search/setOrderBy",t),this.updateURLQueries()},setOrder:function(t){var r=null!=this.collectionId?"order_"+this.collectionId:"order";e.config.globalProperties.$userPrefs.get(r)!=t&&e.config.globalProperties.$userPrefs.set(r,t).catch((function(){})),e.config.globalProperties.$store.dispatch("search/setOrder",t),this.updateURLQueries()},setStatus:function(t){e.config.globalProperties.$store.dispatch("search/setStatus",t),this.updateURLQueries()},setTotalItems:function(t){e.config.globalProperties.$store.dispatch("search/setTotalItems",t)},setSentenceMode:function(t){e.config.globalProperties.$store.dispatch("search/setSentenceMode",t)},setSearchQuery:function(t){e.config.globalProperties.$store.dispatch("search/setSearchQuery",t),this.updateURLQueries()},setViewMode:function(t){e.config.globalProperties.$store.dispatch("search/setViewMode",t),this.updateURLQueries();var r=null!=this.collectionId?"view_mode_"+this.collectionId:"view_mode";e.config.globalProperties.$userPrefs.get(r)!=t&&e.config.globalProperties.$userPrefs.set(r,t).catch((function(){}))},setAdminViewMode:function(t){e.config.globalProperties.$store.dispatch("search/setAdminViewMode",t),this.updateURLQueries();var r=null!=this.collectionId?"admin_view_mode_"+this.collectionId:"admin_view_mode";e.config.globalProperties.$userPrefs.get(r)!=t&&e.config.globalProperties.$userPrefs.set(r,t).catch((function(){}))},setInitialViewMode:function(t){e.config.globalProperties.$store.dispatch("search/setViewMode",t),this.updateURLQueries()},setInitialAdminViewMode:function(t){e.config.globalProperties.$store.dispatch("search/setAdminViewMode",t),this.updateURLQueries()},setSelectedItemsForIframe:function(t,r){return(o=i().mark((function o(){var n,s,c,l,u,h;return i().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(r&&e.config.globalProperties.$store.dispatch("search/cleanSelectedItems"),e.config.globalProperties.$store.dispatch("search/setSelectedItems",t),n=e.config.globalProperties.$store.getters["search/getSelectedItems"],window.history.replaceState){(s=new URLSearchParams(window.location.search)).delete("selecteditems"),c=a(n);try{for(c.s();!(l=c.n()).done;)u=l.value,s.append("selecteditems",u)}catch(e){c.e(e)}finally{c.f()}h=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+s.toString()+window.location.hash,window.history.pushState({path:h},"",h)}case 4:case"end":return o.stop()}}),o)})),function(){var e=this,t=arguments;return new Promise((function(r,n){var i=o.apply(e,t);function a(e){c(i,r,n,a,s,"next",e)}function s(e){c(i,r,n,a,s,"throw",e)}a(void 0)}))})();var o},cleanSelectedItems:function(){e.config.globalProperties.$store.dispatch("search/cleanSelectedItems")},exitViewModeWithoutPagination:function(){e.config.globalProperties.$eventBusSearchEmitter.emit("exitViewModeWithoutPagination",!0)},updateURLQueries:function(){var t=JSON.parse(JSON.stringify(e.config.globalProperties.$store.getters["search/getPostQuery"]));e.config.globalProperties.$router.replace({path:e.config.globalProperties.$route.path,query:t})},updateStoreFromURL:function(){e.config.globalProperties.$store.dispatch("search/setPostQuery",JSON.parse(JSON.stringify(e.config.globalProperties.$route.query)))},loadItems:function(){var t=this;null!=e.config.globalProperties.$store.getters["search/getPostQuery"].fetch_only&&(e.config.globalProperties.$eventBusSearchEmitter.emit("isLoadingItems",!0),null!=this.searchCancel&&this.searchCancel.cancel("Item search Canceled."),e.config.globalProperties.$store.dispatch("collection/fetchItems",{collectionId:this.collectionId,isOnTheme:e.config.globalProperties.$route.meta&&e.config.globalProperties.$route.meta.isOnTheme,termId:this.termId,taxonomy:this.taxonomy}).then((function(r){r.request.then((function(t){e.config.globalProperties.$eventBusSearchEmitter.emit("isLoadingItems",!1),e.config.globalProperties.$eventBusSearchEmitter.emit("hasFiltered",t.hasFiltered)})).catch((function(){e.config.globalProperties.$eventBusSearchEmitter.emit("isLoadingItems",!1)})),t.searchCancel=r.source})))},setCollectionId:function(e){this.collectionId=e},setDefaultOrder:function(e){this.defaultOrder=e},setDefaultOrderBy:function(e){this.defaultOrderBy=e},setTerm:function(e,t){this.termId=e,this.taxonomy=t},clearAllFilters:function(){e.config.globalProperties.$store.dispatch("search/cleanFilterTags"),e.config.globalProperties.$store.dispatch("search/cleanMetaQueries",{keepCollections:!0}),e.config.globalProperties.$store.dispatch("search/cleanTaxQueries"),e.config.globalProperties.$store.dispatch("search/removePostIn"),this.updateURLQueries()}};e.config.globalProperties.$eventBusSearch=r,t.on("input",(function(t){t.taxonomy?e.config.globalProperties.$eventBusSearch.addTaxquery(t):e.config.globalProperties.$eventBusSearch.addMetaquery(t)})),t.on("closeAdvancedSearch",(function(){e.config.globalProperties.$store.dispatch("search/setPage",1),e.config.globalProperties.$eventBusSearch.performAdvancedSearch({})})),e.config.globalProperties.$eventBusSearchEmitter=t}}},53524:(e,t,r)=>{r.d(t,{A:()=>i});var o=r(37431),n=r(73315);r(67931);const i=(0,r(66262).A)(n.A,[["render",o.X]])},67931:(e,t,r)=>{r(73014)},73014:(e,t,r)=>{var o=r(85072),n=r.n(o),i=r(97825),a=r.n(i),s=r(77659),c=r.n(s),l=r(55056),u=r.n(l),h=r(10540),f=r.n(h),d=r(63494),p=r.n(d),g=r(40183),y={};y.styleTagTransform=p(),y.setAttributes=u(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=f();n()(g.A,y),g.A&&g.A.locals&&g.A.locals},73315:(e,t,r)=>{r.d(t,{A:()=>o.A});var o=r(83852)},83852:(e,t,r)=>{r.d(t,{A:()=>o});const o={name:"HelpButton",props:{title:"",message:"",extraClasses:"",forcedIconColor:""},computed:{getHelperTooltipContent:function(){return(this.title?'<p style="font-weight: bold; color: var(--tainacan-secondary);">'+this.title+"</p>":"")+'<p style="color: var(--tainacan-info-color);">'+(""!=this.message&&null!=this.message?this.message:this.$i18n.get("info_no_description_provided"))+"</p>"}}}}}]);