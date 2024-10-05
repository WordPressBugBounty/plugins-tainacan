(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[4204,6925],{8303:(e,a,t)=>{"use strict";t.d(a,{A:()=>l});var r=t(40834),n=t(74042),i=t(95093),o=t.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){u(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u(e,a,t){return(a=function(e){var a=function(e,a){if("object"!=c(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,a||"default");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==c(a)?a:a+""}(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const l={name:"AdvancedSearch",directives:{imask:t(30554).Zq},mixins:[n.$J],props:{isRepositoryLevel:!1,collectionId:""},emits:["close","performAdvancedSearch"],data:function(){return{metaqueryOperatorsForInterval:{"=":this.$i18n.get("is_equal_to"),"!=":this.$i18n.get("is_not_equal_to"),">":this.$i18n.get("greater_than"),"<":this.$i18n.get("less_than"),">=":this.$i18n.get("greater_than_or_equal_to"),"<=":this.$i18n.get("less_than_or_equal_to")},metaqueryOperatorsRegular:{"=":this.$i18n.get("is_equal_to"),"!=":this.$i18n.get("is_not_equal_to"),LIKE:this.$i18n.get("contains"),"NOT LIKE":this.$i18n.get("not_contains")},taxqueryOperators:{LIKE:this.$i18n.get("contains"),"NOT LIKE":this.$i18n.get("not_contains")},searchCriteria:[],advancedSearchQuery:{advancedSearch:!0,metaquery:[],taxquery:[]},isLoadingMetadata:!1,metadataAsObject:{},metadataAsArray:[],metadataSearchCancel:void 0,hasUpdatedSearch:!1}},mounted:function(){var e=this;this.isLoadingMetadata=!0,this.fetchMetadata({collectionId:!this.isRepositoryLevel&&this.collectionId,isRepositoryLevel:this.isRepositoryLevel,isContextEdit:!1,includeDisabled:!1,isAdvancedSearch:!0,parent:"any"}).then((function(a){a.request.then((function(t){e.metadataAsArray=JSON.parse(JSON.stringify(t)),e.isRepositoryLevel&&1==tainacan_plugin.tainacan_enable_core_metadata_on_advanced_search&&(e.metadataAsArray.unshift({collection_id:"default",id:"tainacan_core_description",metadata_section_id:"default_section",metadata_type:"Tainacan\\Metadata_Types\\Core_Description",metadata_type_object:{className:"Tainacan\\Metadata_Types\\Core_Description",component:"tainacan-textarea",core:!0,errors:null,form_component:"tainacan-form-textarea",name:e.$i18n.get("label_core_description")},metadata_type_options:[],name:e.$i18n.get("label_core_description"),parent:0,repository_level:null,slug:"tainacan-core-description"}),e.metadataAsArray.unshift({collection_id:"default",id:"tainacan_core_title",metadata_section_id:"default_section",metadata_type:"Tainacan\\Metadata_Types\\Core_Title",metadata_type_object:{className:"Tainacan\\Metadata_Types\\Core_Title",component:"tainacan-text",core:!0,errors:null,form_component:"tainacan-form-text",name:e.$i18n.get("label_core_title")},metadata_type_options:[],name:e.$i18n.get("label_core_title"),parent:0,repository_level:null,slug:"tainacan-core-title"})),t.forEach((function(a){e.metadataAsObject[a.id]=a})),e.metadataSearchCancel=a.source,e.buildAdvancedSearchQueryFromRoute(),e.isLoadingMetadata=!1})).catch((function(){e.isLoadingMetadata=!1}))})).catch((function(){return e.isLoadingMetadata=!1}))},beforeUnmount:function(){null!=this.metadataSearchCancel&&this.metadataSearchCancel.cancel("Metadata search Canceled.")},methods:d(d({},(0,r.i0)("metadata",["fetchMetadata"])),{},{getComparators:function(e){if("taxquery"==e.type&&this.advancedSearchQuery.taxquery[e.index])return this.taxqueryOperators;if("metaquery"==e.type&&this.advancedSearchQuery.metaquery[e.index]){var a=this.getAdvancedSearchQueryCriterionMetadataType(e.index);return"date"==a||"int"==a||"float"==a?this.metaqueryOperatorsForInterval:this.metaqueryOperatorsRegular}},buildAdvancedSearchQueryFromRoute:function(){var e=this.$route.query.metaquery&&Object.keys(this.$route.query.metaquery).length>0,a=this.$route.query.taxquery&&Object.keys(this.$route.query.taxquery).length>0;if((e||a)&&(this.searchCriteria=[]),e){var t=this.$route.query.metaquery;for(var r in t)(Object.prototype.hasOwnProperty.call(this.metaqueryOperatorsRegular,t[r].compare)||Object.prototype.hasOwnProperty.call(this.metaqueryOperatorsForInterval,t[r].compare))&&Object.assign(this.advancedSearchQuery.metaquery,u({},"".concat(r),t[r]));var n=Object.keys(this.advancedSearchQuery.metaquery),i=n.findIndex((function(e){return"relation"==e}));-1!=i&&n.splice(i,1);for(var o=0,c=n;o<c.length;o++){var s=c[o];this.searchCriteria.push({index:s,type:"metaquery"})}}if(a){var d=this.$route.query.taxquery;for(var l in d)Object.prototype.hasOwnProperty.call(this.taxqueryOperators,d[l].operator)&&Object.assign(this.advancedSearchQuery.taxquery,u({},"".concat(l),d[l]));var h=Object.keys(this.advancedSearchQuery.taxquery),m=h.findIndex((function(e){return"relation"==e}));-1!=m&&h.splice(m,1);for(var y=0,p=h;y<p.length;y++){var v=p[y];this.searchCriteria.push({index:v,type:"taxquery"})}}this.searchCriteria.length?(this.$eventBusSearch.updateStoreFromURL(),this.performAdvancedSearch()):this.addSearchCriteria()},addSearchCriteria:function(){var e=Math.floor(999*Math.random())+2;this.searchCriteria.findIndex((function(a){return a.index==e}))<0?this.searchCriteria.push({index:e,type:void 0}):this.addSearchCriteria()},removeCriterion:function(e){if(e.type){var a=this.searchCriteria.findIndex((function(a){return a.index==e.index&&a.type==e.type}));if(a>=0){this.advancedSearchQuery[e.type].splice(e.index,1),this.searchCriteria.splice(a,1);for(var t=0;t<this.advancedSearchQuery.metaquery.length;t++)for(var r=!1,n=t;!r&&n<this.searchCriteria.length;)this.searchCriteria[n]&&"metaquery"==this.searchCriteria[n].type?(Object.assign(this.searchCriteria[n],{index:t}),r=!0):n++;for(var i=0;i<this.advancedSearchQuery.taxquery.length;i++)for(var o=!1,c=i;!o&&c<this.searchCriteria.length;)this.searchCriteria[c]&&"taxquery"==this.searchCriteria[c].type?(Object.assign(this.searchCriteria[c],{index:i}),o=!0):c++}}else{var s=this.searchCriteria.findIndex((function(a){return a.index==e.index}));s>=0&&this.searchCriteria.splice(s,1)}this.hasUpdatedSearch=!0},clearSearch:function(){this.searchCriteria=[],this.advancedSearchQuery={advancedSearch:!0,metaquery:[],taxquery:[]},this.hasUpdatedSearch=!0},convertDateToMatchInDB:function(e){return o()(e,this.dateFormat).toISOString().split("T")[0]},parseValidDateToNavigatorLanguage:function(e){return e&&e.length===this.dateMask.length?o()(e,this.dateFormat).toISOString(!0)&&o()(e,this.dateFormat).toISOString(!0).split("T")&&o()(e,this.dateFormat).toISOString(!0).split("T")[0]?this.parseDateToNavigatorLanguage(o()(e,this.dateFormat).toISOString(!0).split("T")[0]):this.parseDateToNavigatorLanguage(e):e},addMetadatumToAdvancedSearchQuery:function(e,a,t){var r=e.metadatumId,n=e.type,i=e.taxonomy;if(r)if("term"===n){var o=this.searchCriteria.reduce((function(e,a){return"taxquery"===a.type?e+=1:e}),0);Object.assign(this.searchCriteria[t],{type:"taxquery"}),Object.assign(this.searchCriteria[t],{index:o}),this.advancedSearchQuery.taxquery.push({key:r,taxonomy:i,operator:"LIKE"})}else{var c=this.searchCriteria.reduce((function(e,a){return"metaquery"===a.type?e+=1:e}),0);Object.assign(this.searchCriteria[t],{type:"metaquery"}),Object.assign(this.searchCriteria[t],{index:c}),"date"!=n&&"int"!=n&&"float"!=n?this.advancedSearchQuery.metaquery.push({key:r,compare:"LIKE"}):this.advancedSearchQuery.metaquery.push({key:r,compare:"="})}},addValueToAdvancedSearchQuery:function(e,a){e&&("metaquery"==a.type&&this.advancedSearchQuery.metaquery[a.index]?Object.assign(this.advancedSearchQuery.metaquery[a.index],{value:e}):"taxquery"==a.type&&this.advancedSearchQuery.taxquery[a.index]&&Object.assign(this.advancedSearchQuery.taxquery[a.index],{terms:e}),this.hasUpdatedSearch=!0)},addComparatorToAdvancedSearchQuery:function(e,a){e&&("metaquery"==a.type&&this.advancedSearchQuery.metaquery[a.index]?Object.assign(this.advancedSearchQuery.metaquery[a.index],{compare:e}):"taxquery"==a.type&&this.advancedSearchQuery.taxquery[a.index]&&Object.assign(this.advancedSearchQuery.taxquery[a.index],{operator:e}),this.hasUpdatedSearch=!0)},performAdvancedSearch:function(){if(Object.keys(this.advancedSearchQuery.taxquery).length>0&&Object.keys(this.advancedSearchQuery.metaquery).length>0&&(this.advancedSearchQuery.relation="AND"),Object.keys(this.advancedSearchQuery.taxquery).length>1?Object.assign(this.advancedSearchQuery.taxquery,{relation:"AND"}):Object.prototype.hasOwnProperty.call(this.advancedSearchQuery.taxquery,"relation")&&delete this.advancedSearchQuery.taxquery.relation,Object.keys(this.advancedSearchQuery.metaquery).length>0)for(var e in this.advancedSearchQuery.metaquery)if("date"==this.getAdvancedSearchQueryCriterionMetadataType(e)){var a=this.advancedSearchQuery.metaquery[e].value;a.includes("/")&&Object.assign(this.advancedSearchQuery.metaquery[e],{value:this.convertDateToMatchInDB(a)})}if(Object.keys(this.advancedSearchQuery.metaquery).length>1?Object.assign(this.advancedSearchQuery.metaquery,{relation:"AND"}):Object.prototype.hasOwnProperty.call(this.advancedSearchQuery.metaquery,"relation")&&delete this.advancedSearchQuery.metaquery.relation,Object.prototype.hasOwnProperty.call(this.advancedSearchQuery,"relation")&&Object.keys(this.advancedSearchQuery).length<=3&&delete this.advancedSearchQuery.relation,Object.keys(this.advancedSearchQuery.metaquery).length>0)for(var t in this.advancedSearchQuery.metaquery)if("date"==this.getAdvancedSearchQueryCriterionMetadataType(t)){var r=this.advancedSearchQuery.metaquery[t].value;r.includes("-")&&Object.assign(this.advancedSearchQuery.metaquery[t],{value:this.parseValidDateToNavigatorLanguage(r)})}this.hasUpdatedSearch=!1,this.$store.dispatch("search/setPage",1),this.$eventBusSearch.performAdvancedSearch(this.advancedSearchQuery)},getAdvancedSearchQueryCriterionMetadataType:function(e){return this.advancedSearchQuery.metaquery[e]&&this.advancedSearchQuery.metaquery[e].key&&this.metadataAsObject[this.advancedSearchQuery.metaquery[e].key]&&this.metadataAsObject[this.advancedSearchQuery.metaquery[e].key].metadata_type_object?this.metadataAsObject[this.advancedSearchQuery.metaquery[e].key].metadata_type_object.primitive_type:""}})}},18202:(e,a,t)=>{"use strict";t.d(a,{X:()=>S});var r=t(6934),n=["value"],i=["label"],o=["value"],c={value:"document_content_index"},s=["value"],d=["value"],u=["value","placeholder","aria-label","onInput"],l={class:"field"},h=["aria-label","onClick"],m={class:"icon"},y={class:"add-link-advanced-search"},p={style:{"margin-bottom":"0"},class:"field is-grouped is-justify-content-flex-end"},v={class:"control"},f={class:"control"},g=["disabled"],b={key:0,class:"field is-grouped-centered section"},_={class:"content has-text-gray has-text-centered"};function S(e,a,t,S,k,x){var q=(0,r.g2)("b-select"),j=(0,r.g2)("b-field"),O=(0,r.g2)("b-input"),Q=(0,r.g2)("b-loading"),C=(0,r.gN)("imask"),A=(0,r.gN)("tooltip");return(0,r.uX)(),(0,r.CE)("form",{tabindex:"0",class:"tnc-advanced-search-container",onSubmit:a[4]||(a[4]=(0,r.D$)((function(){return x.performAdvancedSearch&&x.performAdvancedSearch.apply(x,arguments)}),["prevent","stop"]))},[(0,r.Lk)("h3",null,(0,r.v_)(e.$i18n.get("advanced_search")),1),(0,r.bF)(r.F,{name:"filter-item"},{default:(0,r.k6)((function(){return[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(k.searchCriteria,(function(t,y){return(0,r.uX)(),(0,r.Wv)(j,{key:y+"-"+t.index+"-"+t.type,grouped:"","group-multiline":"",class:"tainacan-form"},{default:(0,r.k6)((function(){return[(0,r.bF)(j,{class:"column"},{default:(0,r.k6)((function(){return[(0,r.bF)(q,{loading:k.isLoadingMetadata,placeholder:e.$i18n.get("instruction_select_a_metadatum"),"aria-label":e.$i18n.get("instruction_select_a_metadatum"),disabled:k.advancedSearchQuery[t.type]&&k.advancedSearchQuery[t.type][t.index],"model-value":k.advancedSearchQuery[t.type]&&k.advancedSearchQuery[t.type][t.index]?k.advancedSearchQuery[t.type][t.index].key:null,"onUpdate:modelValue":function(e){return x.addMetadatumToAdvancedSearchQuery({metadatumId:e,type:k.metadataAsObject[e]&&k.metadataAsObject[e].metadata_type_object?k.metadataAsObject[e].metadata_type_object.primitive_type:"",taxonomy:k.metadataAsObject[e]&&k.metadataAsObject[e].metadata_type_options?k.metadataAsObject[e].metadata_type_options.taxonomy:""},t,y)}},{default:(0,r.k6)((function(){return[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(k.metadataAsArray,(function(e,a){return(0,r.uX)(),(0,r.CE)(r.FK,{key:a},["tainacan-user"!==e.metadata_type_object.component&&"tainacan-geocoordinate"!==e.metadata_type_object.component&&"tainacan-relationship"!==e.metadata_type_object.component&&"tainacan-compound"!==e.metadata_type_object.component&&e.parent<=0?((0,r.uX)(),(0,r.CE)("option",{key:0,value:e.id},(0,r.v_)(e.name),9,n)):(0,r.Q3)("",!0),"tainacan-compound"===e.metadata_type_object.component?((0,r.uX)(),(0,r.CE)("optgroup",{key:1,label:e.name},[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.metadata_type_options.children_objects,(function(e,a){return(0,r.uX)(),(0,r.CE)(r.FK,{key:a},["tainacan-user"!==e.metadata_type_object.component&&"tainacan-geocoordinate"!==e.metadata_type_object.component&&"tainacan-relationship"!==e.metadata_type_object.component?((0,r.uX)(),(0,r.CE)("option",{key:0,value:e.id},(0,r.v_)(e.name),9,o)):(0,r.Q3)("",!0)],64)})),128))],8,i)):(0,r.Q3)("",!0)],64)})),128)),(0,r.Lk)("option",c,(0,r.v_)(e.$i18n.get("label_document")),1)]})),_:2},1032,["loading","placeholder","aria-label","disabled","model-value","onUpdate:modelValue"])]})),_:2},1024),(0,r.bF)(j,{class:"column"},{default:(0,r.k6)((function(){return["metaquery"==t.type&&k.advancedSearchQuery.metaquery[t.index]?((0,r.uX)(),(0,r.Wv)(q,{key:0,loading:k.isLoadingMetadata,"model-value":k.advancedSearchQuery.metaquery[t.index].compare,placeholder:e.$i18n.get("label_criterion_to_compare"),"aria-label":e.$i18n.get("label_criterion_to_compare"),"onUpdate:modelValue":function(e){return x.addComparatorToAdvancedSearchQuery(e,t)}},{default:(0,r.k6)((function(){return[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(x.getComparators(t),(function(e,a){return(0,r.uX)(),(0,r.CE)("option",{key:a,value:a},(0,r.v_)(e),9,s)})),128))]})),_:2},1032,["loading","model-value","placeholder","aria-label","onUpdate:modelValue"])):"taxquery"==t.type&&k.advancedSearchQuery.taxquery[t.index]?((0,r.uX)(),(0,r.Wv)(q,{key:1,loading:k.isLoadingMetadata,"model-value":k.advancedSearchQuery.taxquery[t.index].operator,placeholder:e.$i18n.get("label_criterion_to_compare"),"aria-label":e.$i18n.get("label_criterion_to_compare"),"onUpdate:modelValue":function(e){return x.addComparatorToAdvancedSearchQuery(e,t)}},{default:(0,r.k6)((function(){return[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(x.getComparators(t),(function(e,a){return(0,r.uX)(),(0,r.CE)("option",{key:a,value:a},(0,r.v_)(e),9,d)})),128))]})),_:2},1032,["loading","model-value","placeholder","aria-label","onUpdate:modelValue"])):((0,r.uX)(),(0,r.Wv)(O,{key:2,type:"text",disabled:"","aria-label":e.$i18n.get("label_disabled")},null,8,["aria-label"]))]})),_:2},1024),(0,r.bF)(j,{class:"column is-half is-10-mobile"},{default:(0,r.k6)((function(){return["metaquery"==t.type&&k.advancedSearchQuery.metaquery[t.index]?((0,r.uX)(),(0,r.CE)(r.FK,{key:0},["int"==x.getAdvancedSearchQueryCriterionMetadataType(t.index)||"float"==x.getAdvancedSearchQueryCriterionMetadataType(t.index)?((0,r.uX)(),(0,r.Wv)(O,{key:0,type:"number",step:"any","model-value":k.advancedSearchQuery.metaquery[t.index].value,placeholder:e.$i18n.get("label_number_to_search_for"),"aria-label":e.$i18n.get("label_number_to_search_for"),"onUpdate:modelValue":function(e){return x.addValueToAdvancedSearchQuery(e,t)}},null,8,["model-value","placeholder","aria-label","onUpdate:modelValue"])):"date"==x.getAdvancedSearchQueryCriterionMetadataType(t.index)?(0,r.bo)(((0,r.uX)(),(0,r.CE)("input",{key:1,class:"input",value:x.parseValidDateToNavigatorLanguage(k.advancedSearchQuery.metaquery[t.index].value),placeholder:e.dateFormat,type:"text","aria-label":e.$i18n.get("label_date_to_search_for"),onInput:function(e){return x.addValueToAdvancedSearchQuery(e.target.value,t)}},null,40,u)),[[C,{mask:e.dateMask,skipInvalid:!1}]]):((0,r.uX)(),(0,r.Wv)(O,{key:2,type:"text","model-value":k.advancedSearchQuery.metaquery[t.index].value,placeholder:e.$i18n.get("label_string_to_search_for"),"aria-label":e.$i18n.get("label_string_to_search_for"),"onUpdate:modelValue":function(e){return x.addValueToAdvancedSearchQuery(e,t)}},null,8,["model-value","placeholder","aria-label","onUpdate:modelValue"]))],64)):"taxquery"==t.type&&k.advancedSearchQuery.taxquery[t.index]?((0,r.uX)(),(0,r.Wv)(O,{key:1,"model-value":k.advancedSearchQuery.taxquery[t.index].terms,type:"text",placeholder:e.$i18n.get("label_string_to_search_for"),"aria-label":e.$i18n.get("label_string_to_search_for"),"onUpdate:modelValue":function(e){return x.addValueToAdvancedSearchQuery(e,t)}},null,8,["model-value","placeholder","aria-label","onUpdate:modelValue"])):((0,r.uX)(),(0,r.Wv)(O,{key:2,type:"text",disabled:"","aria-label":e.$i18n.get("label_disabled")},null,8,["aria-label"]))]})),_:2},1024),(0,r.Lk)("div",l,[(0,r.Lk)("button",{class:"button button-remove-criterion is-pulled-right has-text-secondary",type:"button","aria-label":e.$i18n.get("remove_search_criterion"),onClick:(0,r.D$)((function(e){return x.removeCriterion(t)}),["prevent"])},[(0,r.bo)(((0,r.uX)(),(0,r.CE)("span",m,a[5]||(a[5]=[(0,r.Lk)("i",{class:"tainacan-icon tainacan-icon-1-25em tainacan-icon-cancel"},null,-1)]))),[[A,{content:e.$i18n.get("remove_search_criterion"),autoHide:!0,placement:"auto-end"}]])],8,h)])]})),_:2},1024)})),128))]})),_:1}),(0,r.Lk)("div",y,[(0,r.Lk)("a",{role:"button",onClick:a[0]||(a[0]=function(){return x.addSearchCriteria&&x.addSearchCriteria.apply(x,arguments)})},[a[6]||(a[6]=(0,r.Lk)("span",{class:"icon"},[(0,r.Lk)("i",{class:"has-text-secondary tainacan-icon tainacan-icon-add"})],-1)),(0,r.eW)(" "+(0,r.v_)(k.searchCriteria.length<=0?e.$i18n.get("add_one_search_criterion"):e.$i18n.get("add_another_search_criterion")),1)]),Object.keys(k.advancedSearchQuery.taxquery).length>0||Object.keys(k.advancedSearchQuery.metaquery).length>0?((0,r.uX)(),(0,r.CE)("a",{key:0,role:"button",onClick:a[1]||(a[1]=function(e){x.clearSearch()})},[a[7]||(a[7]=(0,r.Lk)("span",{class:"icon"},[(0,r.Lk)("i",{class:"has-text-secondary tainacan-icon tainacan-icon-remove"})],-1)),(0,r.eW)(" "+(0,r.v_)(e.$i18n.get("label_remove_all_criteria")),1)])):(0,r.Q3)("",!0)]),(0,r.Lk)("div",p,[(0,r.Lk)("p",v,[(0,r.Lk)("button",{type:"reset",class:"button is-outlined",onClick:a[2]||(a[2]=function(a){x.clearSearch(),e.$emit("close")})},(0,r.v_)(e.$i18n.get("label_close_search")),1)]),(0,r.Lk)("p",f,[(0,r.Lk)("button",{"aria-controls":"items-list-results",type:"submit",disabled:!k.hasUpdatedSearch,class:"button is-secondary"},(0,r.v_)(e.$i18n.get("apply")),9,g)])]),(0,r.bF)(Q,{modelValue:k.isLoadingMetadata,"onUpdate:modelValue":a[3]||(a[3]=function(e){return k.isLoadingMetadata=e}),"is-full-page":!1},null,8,["modelValue"]),!k.isLoadingMetadata&&k.metadataAsArray&&k.metadataAsArray.length<=0?((0,r.uX)(),(0,r.CE)("section",b,[(0,r.Lk)("div",_,[a[8]||(a[8]=(0,r.Lk)("p",null,[(0,r.Lk)("span",{class:"icon is-large"},[(0,r.Lk)("i",{class:"tainacan-icon tainacan-icon-36px tainacan-icon-metadata"})])],-1)),(0,r.Lk)("p",null,(0,r.v_)(t.isRepositoryLevel?e.$i18n.get("info_there_are_no_metadata_in_repository_level"):e.$i18n.get("info_there_are_no_metadata_to_search")),1)])])):(0,r.Q3)("",!0)],32)}},74042:(e,a,t)=>{"use strict";t.d(a,{$J:()=>c,X3:()=>s});t(75552),t(55373);var r=t(95093),n=t.n(r);function i(e,a){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,a){if(e){if("string"==typeof e)return o(e,a);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,a):void 0}}(e))||a&&e&&"number"==typeof e.length){t&&(e=t);var _n=0,r=function(){};return{s:r,n:function(){return _n>=e.length?{done:!0}:{done:!1,value:e[_n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,n=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw n}}}}function o(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=Array(a);t<a;t++)r[t]=e[t];return r}var c={created:function(){var e=navigator.language;n().locale(e);var a=n().localeData();this.dateFormat=a.longDateFormat("L")?a.longDateFormat("L"):"pt_BR"==a._abbr?"DD/MM/YYYY":"YYYY-MM-DD",this.dateMask=this.dateFormat.replace(/[\w]/g,"0")},data:function(){return{dateFormat:"",dateMask:""}},methods:{parseDateToNavigatorLanguage:function(e){return e=new Date(e.replace(/-/g,"/")),n()(e,n().ISO_8601).format(this.dateFormat)}}},s={data:function(){return{formHooks:JSON.parse(JSON.stringify(tainacan_plugin.form_hooks)),formHookEventName:""}},computed:{hasBeginLeftForm:function(){return this.formHooks&&this.formHooks[this.entityName]&&this.formHooks[this.entityName]["begin-left"]&&this.formHooks[this.entityName]["begin-left"].length>0},hasBeginRightForm:function(){return this.formHooks&&this.formHooks[this.entityName]&&this.formHooks[this.entityName]["begin-right"]&&this.formHooks[this.entityName]["begin-right"].length>0},hasEndLeftForm:function(){return this.formHooks&&this.formHooks[this.entityName]&&this.formHooks[this.entityName]["end-left"]&&this.formHooks[this.entityName]["end-left"].length>0},hasEndRightForm:function(){return this.formHooks&&this.formHooks[this.entityName]&&this.formHooks[this.entityName]["end-right"]&&this.formHooks[this.entityName]["end-right"].length>0},getBeginLeftForm:function(){var e=this;return this.formHooks[this.entityName]["begin-left"].map((function(a){return e.checkFormConditionals(a)})).join("")},getBeginRightForm:function(){var e=this;return this.formHooks[this.entityName]["begin-right"].map((function(a){return e.checkFormConditionals(a)})).join("")},getEndLeftForm:function(){var e=this;return this.formHooks[this.entityName]["end-left"].map((function(a){return e.checkFormConditionals(a)})).join("")},getEndRightForm:function(){var e=this;return this.formHooks[this.entityName]["end-right"].map((function(a){return e.checkFormConditionals(a)})).join("")}},created:function(){this.formHookEventName="tainacan-"+this.entityName+"-hook-reload",this.formHookEvent=new Event(this.formHookEventName)},updated:function(){this.formHooks[this.entityName]&&document.dispatchEvent(this.formHookEvent)},methods:{fillExtraFormData:function(e){for(var a=0,t=["begin-left","begin-right","end-left","end-right"];a<t.length;a++){var r=t[a];if(this.formHooks[this.entityName]&&this.formHooks[this.entityName][r]&&null!=this.formHooks[this.entityName][r]){var n=document.getElementById("form-"+this.entityName+"-"+r);if(n){var o,c=i(n.elements);try{for(c.s();!(o=c.n()).done;){var s=o.value;"checkbox"==s.type||"select"==s.type&&null!=s.multiple&&1==s.multiple?s.checked&&null!=s.name&&""!=s.name&&(Array.isArray(e[s.name])||(e[s.name]=[]),e[s.name].push(s.value)):"radio"==s.type?s.checked&&null!=s.name&&""!=s.name&&(e[s.name]=s.value):e[s.name]=s.value}}catch(e){c.e(e)}finally{c.f()}}}}},updateExtraFormData:function(e){for(var a=0,t=["begin-left","begin-right","end-left","end-right"];a<t.length;a++){var r=t[a];if(this.formHooks[this.entityName]&&this.formHooks[this.entityName][r]&&null!=this.formHooks[this.entityName][r]){var n=document.getElementById("form-"+this.entityName+"-"+r);if(n){var o,c=i(n.elements);try{var s=function(){for(var a=o.value,t=0,r=Object.keys(e);t<r.length;t++){var n=r[t];if(a.name==n)if(Array.isArray(e[n])){var i=e[n].find((function(e){return e==a.value}));a.checked=null!=i}else null!=e[n]&&null!=e[n]&&""!=e[n]&&("radio"==a.type?a.checked=e[n]==a.value:a.value=e[n])}};for(c.s();!(o=c.n()).done;)s()}catch(e){c.e(e)}finally{c.f()}}}}},checkFormConditionals:function(e){return e.form?e.conditional&&e.conditional.attribute&&e.conditional.value?this.form&&this.form[e.conditional.attribute]===e.conditional.value?e.form:"":e.form:""}}}},66223:(e,a,t)=>{"use strict";t.d(a,{A:()=>c});var r=t(31601),n=t.n(r),i=t(76314),o=t.n(i)()(n());o.push([e.id,"#advanced-search-container{width:calc(100% - (2 * var(--tainacan-one-column)));margin:0 var(--tainacan-one-column) 0.875em;background:var(--tainacan-background-color);border:1px solid var(--tainacan-input-border-color);border-radius:1px;transition:height 0.2s ease}#advanced-search-container .tnc-advanced-search-container{position:relative;padding:1.25em;border-radius:var(--tainacan-dropdownmenu-border-radius, 0px)}#advanced-search-container .tnc-advanced-search-container h3{font-size:1em !important;padding-top:0 !important;color:var(--tainacan-heading-color) !important;margin-bottom:1em !important}#advanced-search-container .tnc-advanced-search-container .tainacan-form{margin-bottom:0.125em !important}#advanced-search-container .tnc-advanced-search-container .column{padding:0}#advanced-search-container .tnc-advanced-search-container .control{font-size:1em;margin-bottom:0px !important}#advanced-search-container .tnc-advanced-search-container .control .select{width:100% !important}#advanced-search-container .tnc-advanced-search-container .control .select select{width:100% !important}#advanced-search-container .tnc-advanced-search-container .add-link-advanced-search{margin-top:0.75rem}#advanced-search-container .tnc-advanced-search-container .add-link-advanced-search a{font-size:0.8125em;display:inline-flex;align-items:center;margin-right:1em}#advanced-search-container .tnc-advanced-search-container .button-remove-criterion{color:var(--tainacan-input-color);background:transparent;border:none;border-radius:var(--tainacan-button-border-radius, 4px)}@media screen and (max-width: 768px){#advanced-search-container{border-left:none;border-right:none}#advanced-search-container .tnc-advanced-search-container{padding-right:0;padding-left:0}#advanced-search-container .is-12>.columns{flex-wrap:wrap}#advanced-search-container .is-two-thirds{order:3;flex-basis:100%}}\n",""]);const c=o},38320:(e,a,t)=>{var r={"./ca":7306,"./ca.js":7306,"./el":54691,"./el.js":54691,"./en-ca":28298,"./en-ca.js":28298,"./en-gb":56195,"./en-gb.js":56195,"./en-nz":79402,"./en-nz.js":79402,"./es":97650,"./es-do":20838,"./es-do.js":20838,"./es-mx":17730,"./es-mx.js":17730,"./es-us":56575,"./es-us.js":56575,"./es.js":97650,"./fr":85498,"./fr-ca":26435,"./fr-ca.js":26435,"./fr-ch":37892,"./fr-ch.js":37892,"./fr.js":85498,"./pt":79834,"./pt-br":48303,"./pt-br.js":48303,"./pt.js":79834,"./sk":5784,"./sk.js":5784,"./sq":86794,"./sq.js":86794,"./sv":41011,"./sv.js":41011,"./uk":16618,"./uk.js":16618};function n(e){var a=i(e);return t(a)}function i(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=i,e.exports=n,n.id=38320},68184:(e,a,t)=>{"use strict";var r=t(85072),n=t.n(r),i=t(97825),o=t.n(i),c=t(77659),s=t.n(c),d=t(55056),u=t.n(d),l=t(10540),h=t.n(l),m=t(63494),y=t.n(m),p=t(66223),v={};v.styleTagTransform=y(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=h();n()(p.A,v),p.A&&p.A.locals&&p.A.locals},76925:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>i});var r=t(87795),n=t(34558);t(24531);const i=(0,t(66262).A)(n.A,[["render",r.X]])},34558:(e,a,t)=>{"use strict";t.d(a,{A:()=>r.A});var r=t(8303)},87795:(e,a,t)=>{"use strict";t.d(a,{X:()=>r.X});var r=t(18202)},24531:(e,a,t)=>{"use strict";t(68184)}}]);