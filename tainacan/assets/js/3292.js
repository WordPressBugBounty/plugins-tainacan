"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[3292],{74342:(a,t,e)=>{e.d(t,{A:()=>i});const i={name:"ViewModeList",mixins:[e(70931).l]}},49487:(a,t,e)=>{e.d(t,{X:()=>w});var i=e(6934),n={class:"table-container"},o={class:"table-wrapper"},r={key:0,class:"tainacan-list-container"},c={key:1,role:"list",class:"tainacan-list-container"},l=["aria-setsize","aria-posinset","data-tainacan-item-id"],s=["href"],d=["innerHTML"],m={class:"metadata-title"},u=["innerHTML"],p=["innerHTML"],h=["onClick"],b={class:"media"},f={key:0,class:"tainacan-list-thumbnail"},v={class:"list-metadata media-body"},g={class:"metadata-label"},y=["innerHTML"],_=["innerHTML"];function w(a,t,e,w,k,x){var M=(0,i.g2)("blur-hash-image"),I=(0,i.gN)("tooltip");return(0,i.uX)(),(0,i.CE)("div",n,[(0,i.Lk)("div",o,[(0,i.RG)(a.$slots,"default",{},void 0,!0),a.isLoading?((0,i.uX)(),(0,i.CE)("div",r,[((0,i.uX)(),(0,i.CE)(i.FK,null,(0,i.pI)(12,(function(a){return(0,i.Lk)("div",{key:a,style:{"min-height":"200px"},class:"skeleton tainacan-list"})})),64))])):(0,i.Q3)("",!0),!a.isLoading&&a.items.length>0?((0,i.uX)(),(0,i.CE)("div",c,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.items,(function(e,n){return(0,i.uX)(),(0,i.CE)("div",{key:n,role:"listitem","aria-setsize":a.totalItems,"aria-posinset":a.getPosInSet(n),"data-tainacan-item-id":e.id,class:"tainacan-list"},[(0,i.Lk)("a",{href:a.getItemLink(e.url,n)},[a.hasBeforeHook()?((0,i.uX)(),(0,i.CE)("div",{key:0,class:"faceted-search-hook faceted-search-hook-item-before",innerHTML:a.getBeforeHook(e)},null,8,d)):(0,i.Q3)("",!0),(0,i.Lk)("div",m,[a.collectionId&&a.titleItemMetadatum?(0,i.bo)(((0,i.uX)(),(0,i.CE)("p",{key:0,innerHTML:null!=e.metadata?a.renderMetadata(e,a.titleItemMetadatum):""},null,8,u)),[[I,{delay:{show:500,hide:300},content:null!=e.metadata?a.renderMetadata(e,a.titleItemMetadatum):"",html:!0,autoHide:!1,placement:"auto-start",popperClass:["tainacan-tooltip","tooltip"]}]]):(0,i.Q3)("",!0),!a.collectionId&&a.titleItemMetadatum?(0,i.bo)(((0,i.uX)(),(0,i.CE)("p",{key:1,innerHTML:null!=e.title?e.title:"<span class='has-text-gray3 is-italic'>"+a.$i18n.get("label_value_not_provided")+"</span>"},null,8,p)),[[I,{delay:{show:500,hide:300},content:null!=e.title?e.title:"<span class='has-text-gray3 is-italic'>"+a.$i18n.get("label_value_not_provided")+"</span>",html:!0,autoHide:!1,placement:"auto-start",popperClass:["tainacan-tooltip","tooltip"]}]]):(0,i.Q3)("",!0),a.isSlideshowViewModeEnabled?(0,i.bo)(((0,i.uX)(),(0,i.CE)("span",{key:2,class:"icon slideshow-icon",onClick:(0,i.D$)((function(t){return a.starSlideshowFromHere(n)}),["prevent"])},t[0]||(t[0]=[(0,i.Lk)("i",{class:"tainacan-icon tainacan-icon-viewgallery tainacan-icon-1-125em"},null,-1)]),8,h)),[[I,{delay:{show:500,hide:100},content:a.$i18n.get("label_see_on_fullscreen"),placement:"auto-start",popperClass:["tainacan-tooltip","tooltip"]}]]):(0,i.Q3)("",!0)]),(0,i.Lk)("div",b,[null!=e.thumbnail?((0,i.uX)(),(0,i.CE)("div",f,[null!=e.thumbnail?((0,i.uX)(),(0,i.Wv)(M,{key:0,class:"tainacan-list-item-thumbnail",width:a.$thumbHelper.getWidth(e.thumbnail,"tainacan-medium-full",120),height:a.$thumbHelper.getHeight(e.thumbnail,"tainacan-medium-full",120),hash:a.$thumbHelper.getBlurhashString(e.thumbnail,"tainacan-medium-full"),src:a.$thumbHelper.getSrc(e.thumbnail,"tainacan-medium-full",e.document_mimetype),srcset:a.$thumbHelper.getSrcSet(e.thumbnail,"tainacan-medium-full",e.document_mimetype),alt:e.thumbnail_alt?e.thumbnail_alt:a.$i18n.get("label_thumbnail"),"transition-duration":500},null,8,["width","height","hash","src","srcset","alt"])):(0,i.Q3)("",!0)])):(0,i.Q3)("",!0),(0,i.Lk)("div",v,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.displayedMetadata,(function(t,n){return(0,i.uX)(),(0,i.CE)(i.FK,{key:n},[""!=a.renderMetadata(e,t)&&t.display&&"thumbnail"!=t.slug&&null!=t.metadata_type_object&&"title"!=t.metadata_type_object.related_mapped_prop?((0,i.uX)(),(0,i.CE)("span",{key:0,class:(0,i.C4)({"metadata-type-textarea":"tainacan-textarea"==t.metadata_type_object.component})},[(0,i.Lk)("h3",g,(0,i.v_)(t.name),1),(0,i.Lk)("p",{class:"metadata-value",innerHTML:a.renderMetadata(e,t)},null,8,y)],2)):(0,i.Q3)("",!0)],64)})),128))])]),a.hasAfterHook()?((0,i.uX)(),(0,i.CE)("div",{key:1,class:"faceted-search-hook faceted-search-hook-item-after",innerHTML:a.getAfterHook(e)},null,8,_)):(0,i.Q3)("",!0)],8,s)],8,l)})),128))])):(0,i.Q3)("",!0)])])}},70931:(a,t,e)=>{e.d(t,{l:()=>s});var i=e(55373),n=e.n(i);function o(a){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(a)}function r(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,i)}return e}function c(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){l(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function l(a,t,e){return(t=function(a){var t=function(a,t){if("object"!=o(a)||!a)return a;var e=a[Symbol.toPrimitive];if(void 0!==e){var i=e.call(a,t||"default");if("object"!=o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(a)}(a,"string");return"symbol"==o(t)?t:t+""}(t))in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var s={data:function(){return{isSlideshowViewModeEnabled:!1}},props:{collectionId:[String,Number],termId:[String,Number],displayedMetadata:Array,shouldHideItemsThumbnail:Boolean,items:{type:Array,default:function(){return[]},required:!0},isLoading:!1,totalItems:Number,enabledViewModes:Array,containerId:String,filtersModalStateHasChanged:!1},computed:{queries:function(){var a=this.$route&&this.$route.query?JSON.parse(JSON.stringify(this.$route.query)):{};return a&&(delete a.view_mode,delete a.fetch_only,delete a.fetch_only_meta),a},titleItemMetadatum:function(){var a=this.displayedMetadata.find((function(a){return a.display&&a.metadata_type_object&&"title"==a.metadata_type_object.related_mapped_prop}));return a||!1},descriptionItemMetadatum:function(){var a=this.displayedMetadata.find((function(a){return a.display&&a.metadata_type_object&&"description"==a.metadata_type_object.related_mapped_prop}));return a||!1}},mounted:function(){this.isSlideshowViewModeEnabled=!(!this.enabledViewModes||!Array.isArray(this.enabledViewModes))&&this.enabledViewModes.findIndex((function(a){return"slideshow"==a}))>=0},methods:{hasBeforeHook:function(){return void 0!==wp&&void 0!==wp.hooks&&(wp.hooks.hasFilter("tainacan_faceted_search_item_before")||wp.hooks.hasFilter("tainacan_faceted_search_collection_".concat(this.collectionId,"_item_before")))},hasAfterHook:function(){return void 0!==wp&&void 0!==wp.hooks&&(wp.hooks.hasFilter("tainacan_faceted_search_collection_item_after")||wp.hooks.hasFilter("tainacan_faceted_search_collection_".concat(this.collectionId,"_item_after")))},getBeforeHook:function(a){return void 0!==wp&&void 0!==wp.hooks?wp.hooks.applyFilters("tainacan_faceted_search_collection_".concat(this.collectionId,"_item_before"),wp.hooks.applyFilters("tainacan_faceted_search_item_before","",a),a):""},getAfterHook:function(a){return void 0!==wp&&void 0!==wp.hooks?wp.hooks.applyFilters("tainacan_faceted_search_collection_".concat(this.collectionId,"_item_after"),wp.hooks.applyFilters("tainacan_faceted_search_item_after","",a),a):""},getItemLink:function(a,t){return this.queries?(this.queries.pos=(this.queries.paged-1)*this.queries.perpage+t,this.queries.source_list=this.termId?"term":this.collectionId&&"default"!=this.collectionId?"collection":"repository",this.$route&&this.$route.href&&this.$route.href.split("?")&&this.$route.href.split("?").length&&(this.queries.ref=this.$route.href),a+"?"+n().stringify(this.queries)):a},renderMetadata:function(a,t,e){var i=!1;if(a&&a.metadata&&null!=a.metadata[t.slug])i=a.metadata[t.slug];else if(t&&t.metadata_type_object&&t.metadata_type_object.core&&t.metadata_type_object.related_mapped_prop&&a[t.metadata_type_object.related_mapped_prop])return a[t.metadata_type_object.related_mapped_prop];if(!i)return"";if(null!=e&&i.value[e]){if(!Array.isArray(i.value[e])&&i.value[e].value_as_html)return i.value[e].value_as_html;if(Array.isArray(i.value[e])){var n="";return i.value[e].forEach((function(a){a.value_as_html&&(n+=a.value_as_html+"<br>")})),n}}return i.value_as_html},starSlideshowFromHere:function(a){var t=this;this.$router&&this.$route&&this.$route.query&&this.$router.replace({query:c(c({},this.$route.query),{"slideshow-from":a})}).catch((function(a){return t.$console.log(a)}))},getPosInSet:function(a){if(!isNaN(Number(this.queries.paged))&&!isNaN(Number(this.queries.perpage)))return(Number(this.queries.paged)-1)*Number(this.queries.perpage)+a+1}}}},45824:(a,t,e)=>{e.d(t,{A:()=>c});var i=e(31601),n=e.n(i),o=e(76314),r=e.n(o)()(n());r.push([a.id,".theme-items-list .tainacan-list-container[data-v-47b52ec4],.items-list-area .tainacan-list-container[data-v-47b52ec4]{min-height:50vh}.tainacan-list-container[data-v-47b52ec4]{list-style:none;padding:0;height:auto !important;display:flex;flex-wrap:wrap;flex-grow:1;flex-shrink:1;justify-content:space-evenly;animation-name:appear;animation-duration:0.5s}.tainacan-list-container .tainacan-list[data-v-47b52ec4]{background-color:rgba(126,126,126,0.05);padding:0px;flex-basis:100%;margin:0 auto 30px auto;width:100%;cursor:pointer;text-decoration:none;display:block;transition:background-color 0.2s ease}.tainacan-list-container .tainacan-list[data-v-47b52ec4] img{height:auto;max-width:100%}.tainacan-list-container .tainacan-list[data-v-47b52ec4]:hover{background-color:var(--tainacan-item-hover-background-color) !important}.tainacan-list-container .tainacan-list:hover a[data-v-47b52ec4]{text-decoration:none}.tainacan-list-container .tainacan-list.selected-list-item[data-v-47b52ec4]{background-color:var(--tainacan-turquoise1)}.tainacan-list-container .tainacan-list .list-checkbox[data-v-47b52ec4]{position:absolute;margin-left:1.0em;margin-top:7px;z-index:9}.tainacan-list-container .tainacan-list .actions-area[data-v-47b52ec4]{position:relative;float:right;top:calc(-1 * var(--tainacan-container-padding));bottom:0;margin-bottom:-25px;padding-right:12px;margin-bottom:-25px;display:flex;justify-content:space-between;visibility:hidden;opacity:0;transition:visibility 0.2s, opacity 0.3s ease, top 0.2s ease}.tainacan-list-container .tainacan-list .actions-area a[data-v-47b52ec4]{margin-left:12px;opacity:0;transition:opacity 0.3s ease}.tainacan-list-container .tainacan-list:hover .actions-area[data-v-47b52ec4]{visibility:visible;opacity:1.0;top:calc(-1 * 0.5em - var(--tainacan-container-padding))}.tainacan-list-container .tainacan-list:hover .actions-area a[data-v-47b52ec4]{opacity:1}.tainacan-list-container .tainacan-list .record-line[data-v-47b52ec4]{height:1px;margin-left:-44px;margin-right:-44px;opacity:0;visibility:hidden}.tainacan-list-container .tainacan-list .tainacan-list-thumbnail[data-v-47b52ec4]{float:left;margin:0 0.875em 0 0}@media screen and (max-width: 768px){.tainacan-list-container .tainacan-list .tainacan-list-thumbnail[data-v-47b52ec4]{margin:0 0.875em 0.875em 0.875em}}.tainacan-list-container .tainacan-list .tainacan-list-item-thumbnail[data-v-47b52ec4],.tainacan-list-container .tainacan-list img[data-v-47b52ec4]{width:170px;height:auto;border-radius:0px;position:relative;z-index:1}@media screen and (max-width: 960px){.tainacan-list-container .tainacan-list .tainacan-list-item-thumbnail[data-v-47b52ec4],.tainacan-list-container .tainacan-list img[data-v-47b52ec4]{width:120px}}@media screen and (max-width: 768px){.tainacan-list-container .tainacan-list .tainacan-list-item-thumbnail[data-v-47b52ec4],.tainacan-list-container .tainacan-list img[data-v-47b52ec4]{width:100%}}.tainacan-list-container .tainacan-list .skeleton[data-v-47b52ec4]{width:120px}.tainacan-list-container .tainacan-list .metadata-title[data-v-47b52ec4]{flex-shrink:0;padding:0.5em 7em 0.5em 2.75em;min-height:1.5em;position:relative;font-size:1em !important;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--tainacan-heading-color);transition:background-color 0.3s ease}.tainacan-list-container .tainacan-list .metadata-title p[data-v-47b52ec4]{color:var(--tainacan-heading-color) !important;font-size:0.875em !important;line-height:1.875em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:0;margin-bottom:0}.tainacan-list-container .tainacan-list .metadata-title .slideshow-icon[data-v-47b52ec4]{color:var(--tainacan-info-color);position:absolute;right:7px;top:7px;transform:scale(0);transition:transform 0.2s ease}.tainacan-list-container .tainacan-list .metadata-title .icon[data-v-47b52ec4]:not(.slideshow-icon){float:left;margin-top:-1px}.tainacan-list-container .tainacan-list:hover .metadata-title p[data-v-47b52ec4],.tainacan-list-container .tainacan-list:focus .metadata-title p[data-v-47b52ec4]{text-decoration:none !important}.tainacan-list-container .tainacan-list:hover .metadata-title .slideshow-icon[data-v-47b52ec4],.tainacan-list-container .tainacan-list:focus .metadata-title .slideshow-icon[data-v-47b52ec4]{transform:scale(1)}.tainacan-list-container .tainacan-list .media[data-v-47b52ec4]{width:100%;display:flex}@media screen and (max-width: 768px){.tainacan-list-container .tainacan-list .media[data-v-47b52ec4]{flex-direction:column}}.tainacan-list-container .tainacan-list .media .list-metadata[data-v-47b52ec4]{padding:0 var(--tainacan-container-padding) var(--tainacan-container-padding) var(--tainacan-container-padding);flex:1;font-size:1em;color:var(--tainacan-info-color);overflow:hidden;width:100%;-moz-column-count:5;-moz-column-gap:2em;-moz-column-rule:none;-webkit-column-count:5;-webkit-column-gap:2em;-webkit-column-rule:none;column-count:5;column-gap:2em;column-rule:none}@media screen and (max-width: 2048px){.tainacan-list-container .tainacan-list .media .list-metadata[data-v-47b52ec4]{-moz-column-count:4;-webkit-column-count:4;column-count:4}}@media screen and (max-width: 1680px){.tainacan-list-container .tainacan-list .media .list-metadata[data-v-47b52ec4]{-moz-column-count:3;-webkit-column-count:3;column-count:3}}@media screen and (max-width: 1440px){.tainacan-list-container .tainacan-list .media .list-metadata[data-v-47b52ec4]{-moz-column-count:2;-webkit-column-count:2;column-count:2}}@media screen and (max-width: 960px){.tainacan-list-container .tainacan-list .media .list-metadata[data-v-47b52ec4]{-moz-column-count:1;-webkit-column-count:1;column-count:1}}.tainacan-list-container .tainacan-list .media .list-metadata>span[data-v-47b52ec4]{-webkit-column-break-inside:avoid;page-break-inside:avoid;break-inside:avoid;display:inline-block;width:100%}.tainacan-list-container .tainacan-list .media .list-metadata .metadata-label[data-v-47b52ec4]{margin:0 0 0.5em 0;font-size:0.75em;font-weight:700;color:var(--tainacan-info-color);-webkit-column-break-inside:avoid;page-break-inside:avoid;break-inside:avoid;clear:none}.tainacan-list-container .tainacan-list .media .list-metadata .metadata-label[data-v-47b52ec4]::after{clear:none}.tainacan-list-container .tainacan-list .media .list-metadata .metadata-value[data-v-47b52ec4]{font-size:0.75em;margin-bottom:1em;color:var(--tainacan-info-color);-webkit-column-break-inside:avoid;page-break-inside:avoid;break-inside:avoid}.tainacan-list-container .tainacan-list .media .list-metadata span:last-of-type>.metadata-value[data-v-47b52ec4]{margin-bottom:0px}.tainacan-list-container.hide-items-selection .tainacan-list[data-v-47b52ec4]:hover{background-color:rgba(126,126,126,0.05) !important;cursor:default}.tainacan-list-container.hide-items-selection .tainacan-list .metadata-title[data-v-47b52ec4]{padding-left:1.5em !important}.tainacan-list-container.hide-items-selection .tainacan-list:hover .metadata-title[data-v-47b52ec4]{background-color:var(--tainacan-gray0) !important;cursor:default}.tainacan-list-container .tainacan-list .metadata-title[data-v-47b52ec4]{padding:0.5em 0.875em}\n",""]);const c=r},95415:(a,t,e)=>{var i=e(85072),n=e.n(i),o=e(97825),r=e.n(o),c=e(77659),l=e.n(c),s=e(55056),d=e.n(s),m=e(10540),u=e.n(m),p=e(63494),h=e.n(p),b=e(45824),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=u();n()(b.A,f),b.A&&b.A.locals&&b.A.locals},3292:(a,t,e)=>{e.r(t),e.d(t,{default:()=>o});var i=e(84266),n=e(88035);e(78303);const o=(0,e(66262).A)(n.A,[["render",i.X],["__scopeId","data-v-47b52ec4"]])},88035:(a,t,e)=>{e.d(t,{A:()=>i.A});var i=e(74342)},84266:(a,t,e)=>{e.d(t,{X:()=>i.X});var i=e(49487)},78303:(a,t,e)=>{e(95415)}}]);