"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[4441],{11960:(e,t,i)=>{i.d(t,{A:()=>n});var l=i(6934);const n={name:"TainacanFilterItem",components:{TainacanFilterNumeric:(0,l.$V)((function(){return i.e(6748).then(i.bind(i,66748))})),TainacanFilterDate:(0,l.$V)((function(){return Promise.all([i.e(8901),i.e(7097)]).then(i.bind(i,94828))})),TainacanFilterSelectbox:(0,l.$V)((function(){return i.e(9788).then(i.bind(i,69788))})),TainacanFilterAutocomplete:(0,l.$V)((function(){return i.e(468).then(i.bind(i,90468))})),TainacanFilterCheckbox:(0,l.$V)((function(){return Promise.all([i.e(1301),i.e(1070)]).then(i.bind(i,71070))})),TainacanFilterTaginput:(0,l.$V)((function(){return i.e(5276).then(i.bind(i,65276))})),TainacanFilterTaxonomyCheckbox:(0,l.$V)((function(){return Promise.all([i.e(1301),i.e(3916)]).then(i.bind(i,83916))})),TainacanFilterTaxonomyTaginput:(0,l.$V)((function(){return i.e(8571).then(i.bind(i,8571))})),TainacanFilterTaxonomySelectbox:(0,l.$V)((function(){return i.e(1202).then(i.bind(i,1202))})),TainacanFilterDateInterval:(0,l.$V)((function(){return Promise.all([i.e(8901),i.e(5030)]).then(i.bind(i,80093))})),TainacanFilterDatesIntersection:(0,l.$V)((function(){return Promise.all([i.e(8901),i.e(4320)]).then(i.bind(i,22931))})),TainacanFilterNumericInterval:(0,l.$V)((function(){return i.e(4743).then(i.bind(i,14743))})),TainacanFilterNumericListInterval:(0,l.$V)((function(){return i.e(6518).then(i.bind(i,96518))})),TainacanFilterNumericsIntersection:(0,l.$V)((function(){return i.e(7625).then(i.bind(i,77625))}))},props:{filter:Object,query:Object,isRepositoryLevel:Boolean,expandAll:!0,isLoadingItems:!0,filtersAsModal:Boolean,isMobileScreen:!1,hideCollapses:!1},data:function(){return{isUsingElasticSearch:"1"==tainacan_plugin.wp_elasticpress,displayFilter:!1,singleCollapseOpen:this.expandAll,focusedElement:!1}},computed:{beginWithFilterCollapsed:function(){return this.filter&&this.filter.begin_with_filter_collapsed&&"yes"===this.filter.begin_with_filter_collapsed}},watch:{expandAll:function(){this.singleCollapseOpen=this.expandAll,this.expandAll&&(this.displayFilter=!0)},beginWithFilterCollapsed:{handler:function(){this.displayFilter=!this.beginWithFilterCollapsed},immediate:!0}},methods:{onInput:function(e){this.$eventBusSearchEmitter.emit("input",e)},onFilterUpdateParentCollapse:function(e){["tainacan-filter-taxonomy-checkbox","tainacan-filter-selectbox","tainacan-filter-checkbox"].includes(this.filter.filter_type_object.component)&&(this.singleCollapseOpen=e)},setFilterFocus:function(e){if(this.isMobileScreen){var t=this.$refs["filter-field-id-"+e]&&this.$refs["filter-field-id-"+e].$el;this.focusedElement!==e&&t&&"function"==typeof t.scrollIntoView&&(this.focusedElement=e,t.scrollIntoView({behavior:"smooth",block:"start"}))}}}}},39389:(e,t,i)=>{i.d(t,{A:()=>f});var l=i(40834),n=i(98132),o=i(540);function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return s(e,t);var i={}.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var _n=0,l=function(){};return{s:l,n:function(){return _n>=e.length?{done:!0}:{done:!1,value:e[_n++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,r=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return o=e.done,e},e:function(e){r=!0,n=e},f:function(){try{o||null==i.return||i.return()}finally{if(r)throw n}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,l=Array(t);i<t;i++)l[i]=e[i];return l}function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var l=i.call(e,t||"default");if("object"!=r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==r(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const f={components:{TainacanFilterItem:n.A,FiltersTagsList:o.default},props:{collectionId:[String,Number],isRepositoryLevel:Boolean,taxonomy:String,filtersAsModal:Boolean,hasFiltered:Boolean,isLoadingItems:Boolean,isMobileScreen:!1,hideFilterCollapses:!1},emits:["update-is-loading-items-state"],data:function(){return{isLoadingFilters:!1,collapseAll:!1,taxonomyFiltersCollectionNames:{},repositoryCollectionNames:{},collectionNameSearchCancel:void 0,filtersSearchCancel:void 0,repositoryFiltersSearchCancel:void 0,isUsingElasticSearch:"1"==tainacan_plugin.wp_elasticpress}},computed:p(p(p(p({},(0,l.L8)("collection",{collection:"getCollection"})),(0,l.L8)("search",{getQuery:"getPostQuery"})),(0,l.L8)("filter",{filters:"getFilters",taxonomyFilters:"getTaxonomyFilters",repositoryCollectionFilters:"getRepositoryCollectionFilters"})),{},{taxonomyId:function(){var e=this.taxonomy.split("_");return e[e.length-1]}}),watch:{taxonomyFilters:{handler:function(){var e=this;if(null!=this.taxonomyFilters&&Object.keys(this.taxonomyFilters).length){Object.assign(this.taxonomyFiltersCollectionNames,{"repository-filters":this.$i18n.get("repository")}),null!=this.collectionNameSearchCancel&&this.collectionNameSearchCancel.cancel("Collection name search Canceled.");var t=JSON.parse(JSON.stringify(Object.keys(this.taxonomyFilters)));this.fetchAllCollectionNames(t.filter((function(e){return"repository-filters"!==e}))).then((function(t){t.request.then((function(t){var i,l=a(t);try{for(l.s();!(i=l.n()).done;){var n=i.value;Object.assign(e.taxonomyFiltersCollectionNames,d({},n.id,n.name))}}catch(e){l.e(e)}finally{l.f()}})),e.collectionNameSearchCancel=t.source}))}},deep:!0},repositoryCollectionFilters:{handler:function(){if(null!=this.repositoryCollectionFilters&&Object.keys(this.repositoryCollectionFilters).length){Object.assign(this.repositoryCollectionNames,{"repository-filters":this.$i18n.get("repository")});var e,t=a(this.getCollections());try{for(t.s();!(e=t.n()).done;){var i=e.value;Object.assign(this.repositoryCollectionNames,d({},i.id,i.name))}}catch(e){t.e(e)}finally{t.f()}}},deep:!0}},mounted:function(){this.prepareFilters(),this.isUsingElasticSearch&&this.$eventBusSearchEmitter.on("isLoadingItems",this.updateIsLoadingItems)},beforeUnmount:function(){null!=this.collectionNameSearchCancel&&this.collectionNameSearchCancel.cancel("Collection name search Canceled."),null!=this.repositoryFiltersSearchCancel&&this.repositoryFiltersSearchCancel.cancel("Repository Collection Filters search Canceled."),null!=this.filtersSearchCancel&&this.filtersSearchCancel.cancel("Filters search Canceled."),this.isUsingElasticSearch&&this.$eventBusSearchEmitter.off("isLoadingItems",this.updateIsLoadingItems)},methods:p(p(p(p({},(0,l.L8)("collection",["getCollections"])),(0,l.i0)("collection",["fetchAllCollectionNames"])),(0,l.i0)("filter",["fetchFilters","fetchTaxonomyFilters","fetchRepositoryCollectionFilters"])),{},{prepareFilters:function(){var e=this;if(null!=this.filtersSearchCancel&&this.filtersSearchCancel.cancel("Filters search Canceled."),this.isLoadingFilters=!0,this.taxonomy||this.isRepositoryLevel)if(this.taxonomy){var t=[];this.$route.query&&this.$route.query.metaquery&&Array.isArray(this.$route.query.metaquery)&&this.$route.query.metaquery.find((function(e){return"collection_id"==e.key}))&&(t=this.$route.query.metaquery.find((function(e){return"collection_id"==e.key})).value);var i=this.taxonomy.split("_");this.fetchTaxonomyFilters({taxonomyId:i[i.length-1],collectionsIds:t}).catch((function(){return e.isLoadingFilters=!1}))}else this.isRepositoryLevel&&!this.taxonomy&&(null!=this.repositoryFiltersSearchCancel&&this.repositoryFiltersSearchCancel.cancel("Repository Collection Filters search Canceled."),this.fetchRepositoryCollectionFilters().then((function(t){t.request.then((function(){return e.isLoadingFilters=!1})).catch((function(){return e.isLoadingFilters=!1})),e.repositoryFiltersSearchCancel=t.source})).catch((function(){return e.isLoadingFilters=!1})));else this.fetchFilters({collectionId:this.collectionId,isRepositoryLevel:this.isRepositoryLevel,isContextEdit:!1,includeDisabled:!1}).then((function(t){t.request.then((function(){return e.isLoadingFilters=!1})).catch((function(){return e.isLoadingFilters=!1})),e.filtersSearchCancel=t.source})).catch((function(){return e.isLoadingFilters=!1}))},updateIsLoadingItems:function(e){this.$emit("update-is-loading-items-state",e)}})}},93151:(e,t,i)=>{i.d(t,{X:()=>g});var l=i(6934),n=["id","for","aria-controls","aria-expanded","aria-label"],o={class:"icon"},r={class:"collapse-label"},a=["id"],s={key:0,class:"filter-description-help-info"},c={key:1,class:"collapse show disabled-filter"},p={class:"collapse-trigger"},d=["for","aria-controls"],f={class:"collapse-label"},u=["for"],m={class:"collapse-label"},h=["id"],y={key:0,class:"filter-description-help-info"};function g(e,t,i,g,b,v){var C=(0,l.g2)("help-button"),k=(0,l.g2)("b-collapse"),F=(0,l.g2)("b-field"),x=(0,l.gN)("tooltip");return(0,l.uX)(),(0,l.Wv)(F,{ref:i.isMobileScreen?"filter-field-id-"+i.filter.id:null,class:"filter-item-forms",style:(0,l.Tr)({columnSpan:i.filtersAsModal&&i.filter.filter_type_object&&i.filter.filter_type_object.component&&("tainacan-filter-taxonomy-checkbox"==i.filter.filter_type_object.component||"tainacan-filter-checkbox"==i.filter.filter_type_object.component)?"all":"unset"}),onTouchstart:t[2]||(t[2]=function(e){return v.setFilterFocus(i.filter.id)}),onMousedown:t[3]||(t[3]=function(e){return v.setFilterFocus(i.filter.id)})},{default:(0,l.k6)((function(){return[!i.hideCollapses&&b.displayFilter?((0,l.uX)(),(0,l.Wv)(k,{key:0,modelValue:b.singleCollapseOpen,"onUpdate:modelValue":t[0]||(t[0]=function(e){return b.singleCollapseOpen=e}),class:"show",animation:"filter-item"},{trigger:(0,l.k6)((function(e){return[(0,l.Lk)("button",{id:"filter-label-id-"+i.filter.id,for:"filter-input-id-"+i.filter.id,"aria-controls":"filter-input-id-"+i.filter.id,"aria-expanded":b.singleCollapseOpen,"aria-label":i.filter.name,class:"label"},[(0,l.Lk)("span",o,[(0,l.Lk)("i",{class:(0,l.C4)([{"tainacan-icon-arrowdown":e&&e.open,"tainacan-icon-arrowright":e&&!e.open},"tainacan-icon tainacan-icon-1-25em"])},null,2)]),(0,l.Lk)("span",r,(0,l.v_)(i.filter.name),1),"yes"!==i.filter.description_bellow_name&&i.filter.description?((0,l.uX)(),(0,l.Wv)(C,{key:0,title:i.filter.name,message:i.filter.description},null,8,["title","message"])):(0,l.Q3)("",!0)],8,n)]})),default:(0,l.k6)((function(){return[(0,l.Lk)("div",{id:"filter-input-id-"+i.filter.id},["yes"===i.filter.description_bellow_name&&i.filter.description?((0,l.uX)(),(0,l.CE)("p",s,(0,l.v_)(i.filter.description),1)):(0,l.Q3)("",!0),((0,l.uX)(),(0,l.Wv)((0,l.$y)(i.filter.filter_type_object?i.filter.filter_type_object.component:null),{filter:i.filter,query:i.query,"is-using-elastic-search":b.isUsingElasticSearch,"is-repository-level":i.isRepositoryLevel,"is-loading-items":i.isLoadingItems,"current-collection-id":e.$eventBusSearch.collectionId,"filters-as-modal":i.filtersAsModal,onInput:v.onInput,onUpdateParentCollapse:v.onFilterUpdateParentCollapse},null,40,["filter","query","is-using-elastic-search","is-repository-level","is-loading-items","current-collection-id","filters-as-modal","onInput","onUpdateParentCollapse"]))],8,a)]})),_:1},8,["modelValue"])):(0,l.Q3)("",!0),i.hideCollapses||!v.beginWithFilterCollapsed||b.displayFilter?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",c,[(0,l.Lk)("div",p,[(0,l.Lk)("button",{for:"filter-input-id-"+i.filter.id,"aria-controls":"filter-input-id-"+i.filter.id,class:"label",onClick:t[1]||(t[1]=function(e){return b.displayFilter=!0})},[t[4]||(t[4]=(0,l.Lk)("span",{class:"icon"},[(0,l.Lk)("i",{class:"tainacan-icon tainacan-icon-arrowright tainacan-icon-1-25em"})],-1)),(0,l.bo)(((0,l.uX)(),(0,l.CE)("span",f,[(0,l.eW)((0,l.v_)(i.filter.name),1)])),[[x,{delay:{show:500,hide:300},content:e.$i18n.get("instruction_click_to_load_filter"),html:!1,autoHide:!1,placement:"top-start",popperClass:["tainacan-tooltip","tooltip",i.isRepositoryLevel?"tainacan-repository-tooltip":""]}]]),"yes"!==i.filter.description_bellow_name&&i.filter.description?((0,l.uX)(),(0,l.Wv)(C,{key:0,title:i.filter.name,message:i.filter.description},null,8,["title","message"])):(0,l.Q3)("",!0)],8,d)])])),i.hideCollapses?((0,l.uX)(),(0,l.CE)(l.FK,{key:2},[(0,l.Lk)("label",{for:"filter-input-id-"+i.filter.id,class:"label"},[(0,l.Lk)("span",m,(0,l.v_)(i.filter.name),1),"yes"!==i.filter.description_bellow_name&&i.filter.description?((0,l.uX)(),(0,l.Wv)(C,{key:0,title:i.filter.name,message:i.filter.description},null,8,["title","message"])):(0,l.Q3)("",!0)],8,u),(0,l.Lk)("div",{id:"filter-input-id-"+i.filter.id},["yes"===i.filter.description_bellow_name&&i.filter.description?((0,l.uX)(),(0,l.CE)("p",y,(0,l.v_)(i.filter.description),1)):(0,l.Q3)("",!0),((0,l.uX)(),(0,l.Wv)((0,l.$y)(i.filter.filter_type_object?i.filter.filter_type_object.component:null),{filter:i.filter,query:i.query,"is-using-elastic-search":b.isUsingElasticSearch,"is-repository-level":i.isRepositoryLevel,"is-loading-items":i.isLoadingItems,"current-collection-id":e.$eventBusSearch.collectionId,"filters-as-modal":i.filtersAsModal,onInput:v.onInput,onUpdateParentCollapse:v.onFilterUpdateParentCollapse},null,40,["filter","query","is-using-elastic-search","is-repository-level","is-loading-items","current-collection-id","filters-as-modal","onInput","onUpdateParentCollapse"]))],8,h)],64)):(0,l.Q3)("",!0)]})),_:1},8,["style"])}},63632:(e,t,i)=>{i.d(t,{X:()=>$});var l=i(6934),n=["aria-busy"],o={id:"filters-label-landmark",class:"has-text-weight-semibold"},r=["aria-expanded"],a={class:"icon"},s={class:"collapse-all__text"},c={key:1},p={key:3},d={key:4,class:"filters-components-list"},f={key:0,class:"repository-level-filters"},u={key:0,class:"collection-name"},m={key:1,class:"collection-name"},h={key:3},y=["id"],g={key:0,class:"collection-name"},b={key:1,class:"collection-name"},v={key:3},C={key:0,class:"repository-level-filters"},k={key:0,class:"collection-name"},F={key:1,class:"collection-name"},x={key:3},_=["id"],L={key:0,class:"collection-name"},w={key:1,class:"collection-name"},A={key:3},X={key:5,class:"is-grouped-centered"},E={class:"content has-text-gray has-text-centered"},S={key:0},I=["onClick"];function $(e,t,i,$,N,Q){var O=(0,l.g2)("b-loading"),j=(0,l.g2)("filters-tags-list"),T=(0,l.g2)("tainacan-filter-item"),q=(0,l.g2)("router-link"),P=(0,l.gN)("tooltip");return(0,l.uX)(),(0,l.CE)("aside",{"aria-labelledby":"filters-label-landmark","aria-busy":N.isLoadingFilters},[(0,l.bF)(O,{modelValue:N.isLoadingFilters,"onUpdate:modelValue":t[0]||(t[0]=function(e){return N.isLoadingFilters=e}),"is-full-page":!1},null,8,["modelValue"]),(0,l.Lk)("h3",o,[t[2]||(t[2]=(0,l.Lk)("span",{class:"gray-icon is-hidden"},[(0,l.Lk)("i",{class:"tainacan-icon tainacan-icon-1-25em tainacan-icon-filters"})],-1)),(0,l.Lk)("span",null,(0,l.v_)(e.$i18n.get("filters")),1)]),i.hideFilterCollapses||N.isLoadingFilters||!(e.filters.length>=0&&i.isRepositoryLevel||e.filters.length>0)?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("button",{key:0,"aria-controls":"filters-items-list","aria-expanded":!N.collapseAll,class:"link-style collapse-all",onClick:t[1]||(t[1]=function(e){return N.collapseAll=!N.collapseAll})},[(0,l.Lk)("span",a,[(0,l.Lk)("i",{class:(0,l.C4)([{"tainacan-icon-arrowdown":!N.collapseAll,"tainacan-icon-arrowright":N.collapseAll},"has-text-secondary tainacan-icon tainacan-icon-1-125em"])},null,2)]),(0,l.Lk)("span",s,(0,l.v_)(N.collapseAll?e.$i18n.get("label_expand_all"):e.$i18n.get("label_collapse_all")),1)],8,r)),i.hideFilterCollapses?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("br",c)),i.filtersAsModal&&i.hasFiltered?((0,l.uX)(),(0,l.Wv)(j,{key:2,style:{padding:"1em 0"},class:"filter-tags-list"})):(0,l.Q3)("",!0),i.filtersAsModal&&i.hasFiltered?((0,l.uX)(),(0,l.CE)("br",p)):(0,l.Q3)("",!0),!N.isLoadingFilters&&(e.filters.length>=0&&i.isRepositoryLevel||e.filters.length>0)?((0,l.uX)(),(0,l.CE)("div",d,[i.taxonomy&&e.taxonomyFilters?((0,l.uX)(),(0,l.CE)(l.FK,{key:0},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.taxonomyFilters,(function(n,o,r){return(0,l.uX)(),(0,l.CE)(l.FK,{key:r},["repository-filters"==o?((0,l.uX)(),(0,l.CE)("div",f,[n.length>0&&null!=N.taxonomyFiltersCollectionNames&&null!=N.taxonomyFiltersCollectionNames[o]?(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",u,[(0,l.eW)((0,l.v_)(e.$i18n.get("label_filters_from")+" "+N.taxonomyFiltersCollectionNames[o]+": "),1)])),[[P,{delay:{show:500,hide:300},content:e.$i18n.get("label_filters_from")+" "+N.taxonomyFiltersCollectionNames[o]+": ",autoHide:!1,popperClass:["tainacan-tooltip","tooltip",i.isRepositoryLevel?"tainacan-repository-tooltip":""],placement:"auto-start"}]]):(0,l.Q3)("",!0),n.length>0&&(null==N.taxonomyFiltersCollectionNames||null==N.taxonomyFiltersCollectionNames[o])?((0,l.uX)(),(0,l.CE)("div",m,t[3]||(t[3]=[(0,l.Lk)("span",{style:{width:"100%",height:"54px"},class:"icon has-text-centered loading-icon"},[(0,l.Lk)("div",{class:"control has-icons-right is-loading is-clearfix"})],-1)]))):(0,l.Q3)("",!0),n.length>0?((0,l.uX)(!0),(0,l.CE)(l.FK,{key:2},(0,l.pI)(n,(function(t,n){return(0,l.uX)(),(0,l.Wv)(T,{key:n,"is-loading-items":i.isLoadingItems,query:e.getQuery,filter:t,"expand-all":!N.collapseAll,"is-repository-level":"repository-filters"==o,"filters-as-modal":i.filtersAsModal,"is-mobile-screen":i.isMobileScreen,"hide-collapses":i.hideFilterCollapses},null,8,["is-loading-items","query","filter","expand-all","is-repository-level","filters-as-modal","is-mobile-screen","hide-collapses"])})),128)):(0,l.Q3)("",!0),n.length>1?((0,l.uX)(),(0,l.CE)("hr",h)):(0,l.Q3)("",!0)])):(0,l.Q3)("",!0)],64)})),128)),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.taxonomyFilters,(function(n,o,r){return(0,l.uX)(),(0,l.CE)(l.FK,{key:r},["repository-filters"!=o?((0,l.uX)(),(0,l.CE)("div",{key:0,id:"filters-from-collection-id-"+o,class:"collection-level-filters"},[n.length>0&&null!=N.taxonomyFiltersCollectionNames&&null!=N.taxonomyFiltersCollectionNames[o]?(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",g,[(0,l.eW)((0,l.v_)(e.$i18n.get("label_filters_from")+" "+N.taxonomyFiltersCollectionNames[o]+": "),1)])),[[P,{delay:{show:500,hide:300},content:e.$i18n.get("label_filters_from")+" "+N.taxonomyFiltersCollectionNames[o]+": ",autoHide:!1,popperClass:["tainacan-tooltip","tooltip",i.isRepositoryLevel?"tainacan-repository-tooltip":""],placement:"auto-start"}]]):(0,l.Q3)("",!0),n.length>0&&(null==N.taxonomyFiltersCollectionNames||null==N.taxonomyFiltersCollectionNames[o])?((0,l.uX)(),(0,l.CE)("div",b,t[4]||(t[4]=[(0,l.Lk)("span",{style:{width:"100%",height:"54px"},class:"icon has-text-centered loading-icon"},[(0,l.Lk)("div",{class:"control has-icons-right is-loading is-clearfix"})],-1)]))):(0,l.Q3)("",!0),n.length>0?((0,l.uX)(!0),(0,l.CE)(l.FK,{key:2},(0,l.pI)(n,(function(t,n){return(0,l.uX)(),(0,l.Wv)(T,{key:n,"is-loading-items":i.isLoadingItems,query:e.getQuery,filter:t,"expand-all":!N.collapseAll,"is-repository-level":"repository-filters"==o,"filters-as-modal":i.filtersAsModal,"is-mobile-screen":i.isMobileScreen,"hide-collapses":i.hideFilterCollapses},null,8,["is-loading-items","query","filter","expand-all","is-repository-level","filters-as-modal","is-mobile-screen","hide-collapses"])})),128)):(0,l.Q3)("",!0),n.length>1?((0,l.uX)(),(0,l.CE)("hr",v)):(0,l.Q3)("",!0)],8,y)):(0,l.Q3)("",!0)],64)})),128))],64)):i.isRepositoryLevel&&!i.taxonomy?((0,l.uX)(),(0,l.CE)(l.FK,{key:1},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.repositoryCollectionFilters,(function(n,o,r){return(0,l.uX)(),(0,l.CE)(l.FK,{key:r},["repository-filters"==o?((0,l.uX)(),(0,l.CE)("div",C,[n.length>0&&null!=N.repositoryCollectionNames&&null!=N.repositoryCollectionNames[o]?(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",k,[(0,l.eW)((0,l.v_)(e.$i18n.get("label_filters_from")+" "+N.repositoryCollectionNames[o]+": "),1)])),[[P,{delay:{show:500,hide:300},content:e.$i18n.get("label_filters_from")+" "+N.repositoryCollectionNames[o]+": ",autoHide:!1,popperClass:["tainacan-tooltip","tooltip",i.isRepositoryLevel?"tainacan-repository-tooltip":""],placement:"auto-start"}]]):(0,l.Q3)("",!0),n.length>0&&(null==N.repositoryCollectionNames||null==N.repositoryCollectionNames[o])?((0,l.uX)(),(0,l.CE)("div",F,t[5]||(t[5]=[(0,l.Lk)("span",{style:{width:"100%",height:"54px"},class:"icon has-text-centered loading-icon"},[(0,l.Lk)("div",{class:"control has-icons-right is-loading is-clearfix"})],-1)]))):(0,l.Q3)("",!0),n.length>0?((0,l.uX)(!0),(0,l.CE)(l.FK,{key:2},(0,l.pI)(n,(function(t,n){return(0,l.uX)(),(0,l.Wv)(T,{key:n,"is-loading-items":i.isLoadingItems,query:e.getQuery,filter:t,"expand-all":!N.collapseAll,"is-repository-level":"repository-filters"==o,"filters-as-modal":i.filtersAsModal,"is-mobile-screen":i.isMobileScreen,"hide-collapses":i.hideFilterCollapses},null,8,["is-loading-items","query","filter","expand-all","is-repository-level","filters-as-modal","is-mobile-screen","hide-collapses"])})),128)):(0,l.Q3)("",!0),e.repositoryCollectionFilters.length>1?((0,l.uX)(),(0,l.CE)("hr",x)):(0,l.Q3)("",!0)])):(0,l.Q3)("",!0)],64)})),128)),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e.repositoryCollectionFilters,(function(n,o,r){return(0,l.uX)(),(0,l.CE)(l.FK,{key:r},["repository-filters"!=o?((0,l.uX)(),(0,l.CE)("div",{key:0,id:"filters-from-collection-id-"+o,class:"collection-level-filters"},[n.length>0&&null!=N.repositoryCollectionNames&&null!=N.repositoryCollectionNames[o]?(0,l.bo)(((0,l.uX)(),(0,l.CE)("div",L,[(0,l.eW)((0,l.v_)(e.$i18n.get("label_filters_from")+" "+N.repositoryCollectionNames[o]+": "),1)])),[[P,{delay:{show:500,hide:300},content:e.$i18n.get("label_filters_from")+" "+N.repositoryCollectionNames[o]+": ",autoHide:!1,popperClass:["tainacan-tooltip","tooltip",i.isRepositoryLevel?"tainacan-repository-tooltip":""],placement:"auto-start"}]]):(0,l.Q3)("",!0),n.length>0&&(null==N.repositoryCollectionNames||null==N.repositoryCollectionNames[o])?((0,l.uX)(),(0,l.CE)("div",w,t[6]||(t[6]=[(0,l.Lk)("span",{style:{width:"100%",height:"54px"},class:"icon has-text-centered loading-icon"},[(0,l.Lk)("div",{class:"control has-icons-right is-loading is-clearfix"})],-1)]))):(0,l.Q3)("",!0),n.length>0?((0,l.uX)(!0),(0,l.CE)(l.FK,{key:2},(0,l.pI)(n,(function(t,n){return(0,l.uX)(),(0,l.Wv)(T,{key:n,"is-loading-items":i.isLoadingItems,query:e.getQuery,filter:t,"expand-all":!N.collapseAll,"is-repository-level":"repository-filters"==o,"filters-as-modal":i.filtersAsModal,"is-mobile-screen":i.isMobileScreen,"hide-collapses":i.hideFilterCollapses},null,8,["is-loading-items","query","filter","expand-all","is-repository-level","filters-as-modal","is-mobile-screen","hide-collapses"])})),128)):(0,l.Q3)("",!0),e.repositoryCollectionFilters.length>1?((0,l.uX)(),(0,l.CE)("hr",A)):(0,l.Q3)("",!0)],8,_)):(0,l.Q3)("",!0)],64)})),128))],64)):((0,l.uX)(!0),(0,l.CE)(l.FK,{key:2},(0,l.pI)(e.filters,(function(t,n){return(0,l.uX)(),(0,l.Wv)(T,{key:n,"is-loading-items":i.isLoadingItems,query:e.getQuery,filter:t,"expand-all":!N.collapseAll,"is-repository-level":i.isRepositoryLevel,"filters-as-modal":i.filtersAsModal,"is-mobile-screen":i.isMobileScreen,"hide-collapses":i.hideFilterCollapses},null,8,["is-loading-items","query","filter","expand-all","is-repository-level","filters-as-modal","is-mobile-screen","hide-collapses"])})),128))])):(0,l.Q3)("",!0),!N.isLoadingFilters&&(i.taxonomy&&e.taxonomyFilters&&Object.keys(e.taxonomyFilters).length<=0||i.isRepositoryLevel&&!i.taxonomy&&e.repositoryCollectionFilters&&Object.keys(e.repositoryCollectionFilters).length<=0||!i.isRepositoryLevel&&!i.taxonomy&&e.filters&&e.filters.length<=0)?((0,l.uX)(),(0,l.CE)("section",X,[(0,l.Lk)("div",E,[t[7]||(t[7]=(0,l.Lk)("p",null,[(0,l.Lk)("span",{class:"icon is-large"},[(0,l.Lk)("i",{class:"tainacan-icon tainacan-icon-36px tainacan-icon-filters"})])],-1)),(0,l.Lk)("p",null,(0,l.v_)(e.$i18n.get("info_there_is_no_filter")),1),i.isRepositoryLevel&&null!=e.$route.name?((0,l.uX)(),(0,l.CE)("p",S,(0,l.v_)(e.$i18n.get("info_collection_filter_on_repository_level")),1)):(0,l.Q3)("",!0),!e.$adminOptions.hideItemsListFilterCreationButton&&null!=e.$route.name&&(i.isRepositoryLevel&&e.$userCaps.hasCapability("tnc_rep_edit_filters")||!i.isRepositoryLevel&&e.collection&&e.collection.current_user_can_edit_filters)?((0,l.uX)(),(0,l.Wv)(q,{key:1,to:i.isRepositoryLevel&&e.$routerHelper?e.$routerHelper.getNewFilterPath():e.$routerHelper.getNewCollectionFilterPath(i.collectionId),custom:""},{default:(0,l.k6)((function(t){var i=t.navigate;return[(0,l.Lk)("button",{id:"button-create-filter",type:"button",role:"button",class:"button is-secondary is-centered",onClick:function(e){return i()}},(0,l.v_)(e.$i18n.getFrom("filters","new_item")),9,I)]})),_:1},8,["to"])):(0,l.Q3)("",!0)])])):(0,l.Q3)("",!0)],8,n)}},44072:(e,t,i)=>{i.d(t,{A:()=>a});var l=i(31601),n=i.n(l),o=i(76314),r=i.n(o)()(n());r.push([e.id,"\nh3[data-v-42073839] {\n        font-size: 1em;\n        color: var(--tainacan-heading-color);\n}\n.collapse-all[data-v-42073839] {\n        display: inline-flex;\n        align-items: center;\n        margin-left: -0.5em !important;\n        margin-bottom: 12px !important;\n}\n.collapse-all__text[data-v-42073839] {\n        font-size: 0.75em !important;\n}\n.filters-components-list[data-v-42073839] {\n        margin-bottom: 64px;\n}\n@supports (contain: inline-size) {\n.filters-components-list[data-v-42073839] {\n            container-type: inline-size;\n            container-name: filterscomponentslist;\n}\n}\n.collection-name[data-v-42073839] {\n        color: var(--tainacan-heading-color);\n        font-size: 0.875em;\n        font-weight: 500;\n        margin-bottom: 0.875em;\n        margin-top: 1em;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n}\n.is-loading[data-v-42073839]:after {\n        border: 2px solid white !important;\n        border-top-color: var(--tainacan-gray2) !important;\n        border-right-color: var(--tainacan-gray2) !important;\n}\n\n",""]);const a=r},78968:(e,t,i)=>{i.d(t,{A:()=>a});var l=i(31601),n=i.n(l),o=i(76314),r=i.n(o)()(n());r.push([e.id,".filter-item-forms{break-inside:avoid}.filter-item-forms:not(:last-child){margin-bottom:0;padding-bottom:0.25em}.filter-item-forms .collapse-trigger{margin-left:-8px}.filter-item-forms .collapse-trigger button{background-color:inherit !important;color:inherit !important}.filter-item-forms .collapse-trigger .icon{margin-right:5px}.filter-item-forms .collapse-trigger .collapse-label{display:inline;width:100%;overflow-x:hidden;text-overflow:ellipsis;line-height:1.4em}.filter-item-forms .disabled-filter{opacity:0.75}.filter-item-forms .collapse-content{margin-top:12px}.filter-item-forms .columns{margin-left:0px;margin-right:0px}.filter-item-forms .column{padding:0.75em 1px 0.75em 0 !important}.filter-item-forms>.label{display:block !important;width:100%;overflow-x:hidden;text-overflow:ellipsis;line-height:1.4em !important;border:none;background-color:transparent;color:var(--tainacan-label-color);text-align:left;outline:none;padding:0 !important;margin:0 0 8px 0}.filter-item-forms>.label .tainacan-help-tooltip-trigger{font-size:1.188em}.filter-item-forms>.label .tainacan-help-tooltip-trigger .icon{margin-right:0px;margin-left:6px}.filter-item-forms .collapse .label{display:inline-flex;align-items:center;border:none;background-color:transparent;color:var(--tainacan-label-color);text-align:left;cursor:pointer;outline:none;padding:0 !important;margin:0}.filter-item-forms .collapse .label .tainacan-help-tooltip-trigger{font-size:1.188em}.filter-item-forms .collapse .label .tainacan-help-tooltip-trigger .icon{margin-right:0px;margin-left:6px}.filter-item-forms .label{font-weight:normal !important;font-size:0.875em;width:100%}.filter-item-forms .filter-description-help-info{font-size:0.75em;color:var(--tainacan-info-color);margin-top:-0.25em;margin-bottom:0.75em}.filter-item-forms .taginput-container{border-radius:var(--tainacan-input-border-radius, 1px) !important;box-shadow:none !important;transition:background-color 0.1s}.filter-item-forms .taginput-container .tags{display:none !important}.filter-item-forms .input{overflow:hidden;display:unset;white-space:nowrap;text-overflow:ellipsis;height:auto}.filter-item-forms .control:not(.taginput) .tags .tag:not(a.is-delete){display:unset;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;border-radius:0;width:86%}.filter-item-forms .control:not(.taginput) .tags .is-delete{border-radius:0}.filter-item-forms .tag{height:2em !important}.filter-item-forms .b-checkbox.checkbox{font-weight:normal;font-size:1em !important;margin-right:2px}@media screen and (max-width: 768px){.filter-item-forms .b-checkbox.checkbox{font-size:1.125em !important}.filter-item-forms .b-checkbox.checkbox .control-label{padding-top:0.55em;padding-bottom:0.55em}}.filter-item-forms .datepicker .dropdown-menu{left:-18px;right:0}@media screen and (min-width: 768px){.filter-item-forms .datepicker .dropdown-trigger input{font-size:0.75em !important;line-height:1.75em}.filter-item-forms .datepicker .datepicker-header .dropdown-menu{max-width:165px !important}.filter-item-forms .datepicker .datepicker-header .pagination .pagination-list .control{width:50% !important}.filter-item-forms .datepicker .datepicker-header .pagination .pagination-list .control .select{min-width:100% !important}.filter-item-forms .datepicker .datepicker-header .pagination .pagination-list .control .select select{padding-left:1px !important;min-width:100% !important}.filter-item-forms .datepicker .datepicker-header .pagination .pagination-list .control .select:not(.is-loading)::after{font-size:1em}.filter-item-forms .datepicker .datepicker-cell{padding:0.15em 0.175em !important}}\n",""]);const a=r},89865:(e,t,i)=>{var l=i(85072),n=i.n(l),o=i(97825),r=i.n(o),a=i(77659),s=i.n(a),c=i(55056),p=i.n(c),d=i(10540),f=i.n(d),u=i(63494),m=i.n(u),h=i(44072),y={};y.styleTagTransform=m(),y.setAttributes=p(),y.insert=s().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=f();n()(h.A,y),h.A&&h.A.locals&&h.A.locals},42089:(e,t,i)=>{var l=i(85072),n=i.n(l),o=i(97825),r=i.n(o),a=i(77659),s=i.n(a),c=i(55056),p=i.n(c),d=i(10540),f=i.n(d),u=i(63494),m=i.n(u),h=i(78968),y={};y.styleTagTransform=m(),y.setAttributes=p(),y.insert=s().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=f();n()(h.A,y),h.A&&h.A.locals&&h.A.locals},98132:(e,t,i)=>{i.d(t,{A:()=>o});var l=i(5820),n=i(46455);i(1268);const o=(0,i(66262).A)(n.A,[["render",l.X]])},94441:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});var l=i(80259),n=i(90602);i(58172);const o=(0,i(66262).A)(n.A,[["render",l.X],["__scopeId","data-v-42073839"]])},46455:(e,t,i)=>{i.d(t,{A:()=>l.A});var l=i(11960)},90602:(e,t,i)=>{i.d(t,{A:()=>l.A});var l=i(39389)},5820:(e,t,i)=>{i.d(t,{X:()=>l.X});var l=i(93151)},80259:(e,t,i)=>{i.d(t,{X:()=>l.X});var l=i(63632)},58172:(e,t,i)=>{i(89865)},1268:(e,t,i)=>{i(42089)}}]);