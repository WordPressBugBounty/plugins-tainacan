"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[3916],{13873:(t,e,o)=>{o.d(e,{X:()=>n.X});var n=o(75980)},43262:(t,e,o)=>{o.d(e,{A:()=>m});var n=o(55373),a=o.n(n),i=o(75552),r=o(40834),s=o(91301),l=o(8926);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function u(t,e){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=function(t,e){if(t){if("string"==typeof t)return d(t,e);var o={}.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var _n=0,n=function(){};return{s:n,n:function(){return _n>=t.length?{done:!0}:{done:!1,value:t[_n++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,r=!1;return{s:function(){o=o.call(t)},n:function(){var t=o.next();return i=t.done,t},e:function(t){r=!0,a=t},f:function(){try{i||null==o.return||o.return()}finally{if(r)throw a}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=Array(e);o<e;o++)n[o]=t[o];return n}function p(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function h(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,e||"default");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==c(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}const m={components:{CheckboxRadioFilterInput:s.A},mixins:[l.s],props:{isRepositoryLevel:Boolean,filtersAsModal:Boolean},emits:["input","update-parent-collapse"],data:function(){return{isLoadingOptions:!0,getOptionsValuesCancel:void 0,options:[],selected:[],taxonomy:"",taxonomyId:""}},computed:function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?p(Object(o),!0).forEach((function(e){h(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},(0,r.L8)("search",{facetsFromItemSearch:"getFacets"})),watch:{selected:{handler:function(t,e){Array.isArray(t)&&Array.isArray(e)&&t.length==e.length&&t.every((function(t,o){return t===e[o]}))||this.onSelect()},deep:!0},facetsFromItemSearch:{handler:function(){this.isUsingElasticSearch&&this.loadOptions()},immediate:!0,deep:!0},isLoadingItems:{handler:function(){!this.filtersAsModal&&this.isUsingElasticSearch&&(this.isLoadingOptions=this.isLoadingItems)},immediate:!0}},created:function(){this.filter.metadatum&&this.filter.metadatum.metadata_type_object&&this.filter.metadatum.metadata_type_object.options&&this.filter.metadatum.metadata_type_object.options.taxonomy&&this.filter.metadatum.metadata_type_object.options.taxonomy_id&&(this.taxonomyId=this.filter.metadatum.metadata_type_object.options.taxonomy_id,this.taxonomy=this.filter.metadatum.metadata_type_object.options.taxonomy),this.$eventBusSearchEmitter.on("hasToReloadFacets",this.reloadOptions)},mounted:function(){this.isUsingElasticSearch||this.loadOptions()},beforeUnmount:function(){null!=this.getOptionsValuesCancel&&this.getOptionsValuesCancel.cancel("Facet search Canceled."),this.$eventBusSearchEmitter.off("hasToReloadFacets",this.reloadOptions)},methods:{reloadOptions:function(t){!this.isUsingElasticSearch&&t&&this.loadOptions()},loadOptions:function(){var t=this;if(this.isUsingElasticSearch)for(var e in this.facetsFromItemSearch)e==this.filter.id&&(Array.isArray(this.facetsFromItemSearch[e])?(this.prepareOptionsForTaxonomy(this.facetsFromItemSearch[e]),this.$emit("update-parent-collapse",this.facetsFromItemSearch[e].length>0)):(this.prepareOptionsForTaxonomy(Object.values(this.facetsFromItemSearch[e])),this.$emit("update-parent-collapse",Object.values(this.facetsFromItemSearch[e]).length>0)));else{var o=null,n=i.qm.source();null!=this.getOptionsValuesCancel&&this.getOptionsValuesCancel.cancel("Facet search Canceled."),this.isLoadingOptions=!0;var r={current_query:this.query},s="";s=this.isRepositoryLevel?"/facets/".concat(this.metadatumId,"?getSelected=1&order=asc&parent=0&number=").concat(this.filter.max_options,"&")+a().stringify(r):"default"==this.filter.collection_id&&this.currentCollectionId?"/collection/".concat(this.currentCollectionId,"/facets/").concat(this.metadatumId,"?getSelected=1&order=asc&parent=0&number=").concat(this.filter.max_options,"&")+a().stringify(r):"/collection/".concat(this.filter.collection_id,"/facets/").concat(this.metadatumId,"?getSelected=1&order=asc&parent=0&number=").concat(this.filter.max_options,"&")+a().stringify(r),this.options=[],(o=new Object({request:new Promise((function(t,e){i.UY.get(s,{cancelToken:n.token}).then((function(e){t(e)})).catch((function(t){e(t)}))})),source:n})).request.then((function(e){t.isLoadingOptions=!1,t.prepareOptionsForTaxonomy(e.data.values?e.data.values:e.data),e&&e.data&&e.data.values&&t.$emit("update-parent-collapse",e.data.values.length>0)})).catch((function(e){(0,i.FZ)(e)?t.$console.log("Request canceled: "+e.message):(t.$console.log("Error on facets request: ",e),t.isLoadingOptions=!1)})),this.getOptionsValuesCancel=o.source}},updateSelectedValues:function(){var t=this;if(!this.query||!this.query.taxquery||!Array.isArray(this.query.taxquery))return!1;var e=this.query.taxquery.findIndex((function(e){return e.taxonomy==t.taxonomy}));this.selected=e>=0?this.query.taxquery[e].terms:[]},onSelect:function(){this.$emit("input",{filter:"checkbox",taxonomy:this.taxonomy,compare:"IN",metadatum_id:this.metadatumId,collection_id:this.collectionId,terms:this.selected})},openCheckboxModal:function(t){var e=this;this.$buefy.modal.open({parent:this,component:s.A,props:{parent:t,filter:this.filter,taxonomyId:this.taxonomyId,selected:this.selected,metadatumId:this.metadatumId,taxonomy:this.taxonomy,collectionId:this.collectionId,isTaxonomy:!0,query:this.query},events:{appliedCheckBoxModal:function(){e.loadOptions()},input:function(t){var o=e.selected.indexOf(t);o>=0?e.selected.splice(o,1):e.selected.push(t)}},width:"max(768px, calc(100% - (4 * var(--tainacan-one-column))))",trapFocus:!0,customClass:"tainacan-modal",closeButtonAriaLabel:this.$i18n.get("close")})},prepareOptionsForTaxonomy:function(t){if(this.options=[],this.options=t.slice(),this.options){var e,o=!1,n=u(this.options);try{for(n.s();!(e=n.n()).done;){if(e.value.total_children>0){o=!0;break}}}catch(t){n.e(t)}finally{n.f()}if(this.filter.max_options&&(this.options.length>=this.filter.max_options||o)){var a=!0;this.options.length>this.filter.max_options?this.options[this.filter.max_options-1].showViewAllButton=a:this.options[this.options.length-1].showViewAllButton=a}}this.updateSelectedValues()}}}},59495:(t,e,o)=>{o.d(e,{A:()=>n.A});var n=o(43262)},75980:(t,e,o)=>{o.d(e,{X:()=>p});var n=o(6934),a=["value"],i={key:0,class:"b-checkbox checkbox is-small"},r=["value"],s={class:"control-label"},l={class:"checkbox-label-text"},c={key:0,class:"facet-item-count has-text-gray"},u=["onClick"],d={key:0,class:"no-options-placeholder"};function p(t,e,o,p,h,m){var f=(0,n.g2)("checkbox-radio-filter-input"),y=(0,n.gN)("tooltip");return(0,n.uX)(),(0,n.CE)("div",{style:(0,n.Tr)({height:h.isLoadingOptions&&!o.filtersAsModal?28*Number(t.filter.max_options)+"px":"auto"}),class:(0,n.C4)([{skeleton:h.isLoadingOptions&&!o.filtersAsModal},"block"])},[o.filtersAsModal?((0,n.uX)(),(0,n.Wv)(f,{key:1,"is-modal":!1,filter:t.filter,"taxonomy-id":h.taxonomyId,selected:h.selected,"metadatum-id":t.metadatumId,taxonomy:h.taxonomy,"collection-id":t.collectionId,"is-taxonomy":!0,query:t.query,"current-collection-id":t.currentCollectionId,onInput:e[2]||(e[2]=function(t){var e=h.selected.indexOf(t);e>=0?h.selected.splice(e,1):h.selected.push(t)})},null,8,["filter","taxonomy-id","selected","metadatum-id","taxonomy","collection-id","query","current-collection-id"])):((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[h.isLoadingOptions?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(h.options.slice(0,t.filter.max_options),(function(d,p){return(0,n.uX)(),(0,n.CE)("div",{key:p,value:p,class:"metadatum"},[d.isChild?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("label",i,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return h.selected=t}),value:d.value,type:"checkbox",onInput:e[1]||(e[1]=function(){return t.resetPage&&t.resetPage.apply(t,arguments)})},null,40,r),[[n.lH,h.selected]]),e[3]||(e[3]=(0,n.Lk)("span",{class:"check"},null,-1)),(0,n.Lk)("span",s,[(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",l,[(0,n.eW)((0,n.v_)(d.label),1)])),[[y,{delay:{show:800,hide:100},content:d.label,autoHide:!0,popperClass:["tainacan-tooltip","tooltip",o.isRepositoryLevel?"tainacan-repository-tooltip":""],placement:"auto-start"}]]),null!=d.total_items?((0,n.uX)(),(0,n.CE)("span",c," "+(0,n.v_)("("+d.total_items+")"),1)):(0,n.Q3)("",!0)])])),d.showViewAllButton?((0,n.uX)(),(0,n.CE)("button",{key:1,class:"view-all-button link-style",onClick:function(t){return m.openCheckboxModal(d.parent)}},(0,n.v_)(t.$i18n.get("label_view_all")),9,u)):(0,n.Q3)("",!0)],8,a)})),128)),null!=h.options.length&&h.options.length<=0?((0,n.uX)(),(0,n.CE)("p",d,(0,n.v_)(t.$i18n.get("info_no_options_available_filtering")),1)):(0,n.Q3)("",!0)],64))],64))],6)}},83656:(t,e,o)=>{var n=o(85072),a=o.n(n),i=o(97825),r=o.n(i),s=o(77659),l=o.n(s),c=o(55056),u=o.n(c),d=o(10540),p=o.n(d),h=o(63494),m=o.n(h),f=o(90843),y={};y.styleTagTransform=m(),y.setAttributes=u(),y.insert=l().bind(null,"head"),y.domAPI=r(),y.insertStyleElement=p();a()(f.A,y),f.A&&f.A.locals&&f.A.locals},83916:(t,e,o)=>{o.r(e),o.d(e,{default:()=>i});var n=o(13873),a=o(59495);o(86327);const i=(0,o(66262).A)(a.A,[["render",n.X],["__scopeId","data-v-d2c6a146"]])},86327:(t,e,o)=>{o(83656)},90843:(t,e,o)=>{o.d(e,{A:()=>s});var n=o(31601),a=o.n(n),i=o(76314),r=o.n(i)()(a());r.push([t.id,".view-all-button[data-v-d2c6a146]{font-size:.75em !important;padding:.1em 1em}.is-loading[data-v-d2c6a146]:after{border:2px solid #fff !important;border-top-color:var(--tainacan-gray2) !important;border-right-color:var(--tainacan-gray2) !important}.no-options-placeholder[data-v-d2c6a146]{margin-left:.5em;font-size:.75em;color:var(--tainacan-info-color)}.b-checkbox .control-label[data-v-d2c6a146]{display:flex;flex-wrap:nowrap;width:100%;align-items:center}.checkbox-label-text[data-v-d2c6a146]{white-space:wrap;text-overflow:ellipsis;overflow:hidden;line-height:1.45em;break-inside:avoid;display:-webkit-box;line-clamp:2;-webkit-line-clamp:2;-webkit-box-orient:vertical}.facet-item-count[data-v-d2c6a146]{margin-left:auto}.b-checkbox:hover .facet-item-count[data-v-d2c6a146],.b-checkbox:focus .facet-item-count[data-v-d2c6a146]{--tainacan-info-color: var(--tainacan-input-color)}",""]);const s=r}}]);