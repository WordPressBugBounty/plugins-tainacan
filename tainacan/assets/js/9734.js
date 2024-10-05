"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[9734],{55883:(t,a,e)=>{e.d(a,{A:()=>u});var i=e(6934),n=e(40834);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function s(t,a){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,a){if(t){if("string"==typeof t)return r(t,a);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,a):void 0}}(t))||a&&t&&"number"==typeof t.length){e&&(t=e);var _n=0,i=function(){};return{s:i,n:function(){return _n>=t.length?{done:!0}:{done:!1,value:t[_n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return o=t.done,t},e:function(t){s=!0,n=t},f:function(){try{o||null==e.return||e.return()}finally{if(s)throw n}}}}function r(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,i=Array(a);e<a;e++)i[e]=t[e];return i}function m(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?m(Object(e),!0).forEach((function(a){d(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function d(t,a,e){return(a=function(t){var a=function(t,a){if("object"!=o(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,a||"default");if("object"!=o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(t)}(t,"string");return"symbol"==o(a)?a:a+""}(a))in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}const u={components:{TainacanFormItem:(0,i.$V)((function(){return Promise.all([e.e(3996),e.e(23)]).then(e.bind(e,10023))}))},props:{itemMetadatum:Object,value:[String,Number,Array],disabled:!1,hideCollapses:!1,hideMetadataTypes:Boolean,hideHelpButtons:Boolean,helpInfoBellowLabel:Boolean,metadataNameFilterString:"",isMobileScreen:!1,isMetadataNavigation:!1,enumerateMetadatum:[Boolean,String],isFocused:!1},data:function(){return{isRemovingGroup:!1,isCreatingGroup:!1,children:[],collapseAllChildren:!0,childItemMetadataGroups:[],focusedGroupMetadatum:!1,focusedChildMetadatum:!1}},computed:{isMultiple:function(){return!(!this.itemMetadatum||!this.itemMetadatum.metadatum||"yes"!=this.itemMetadatum.metadatum.multiple)&&"yes"==this.itemMetadatum.metadatum.multiple},someValueOnLastInput:function(){return this.childItemMetadataGroups&&this.childItemMetadataGroups[this.childItemMetadataGroups.length-1]&&this.childItemMetadataGroups[this.childItemMetadataGroups.length-1].findIndex((function(t){return t.value}))>=0},maxMultipleValues:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum&&this.itemMetadatum.metadatum.cardinality&&!isNaN(this.itemMetadatum.metadatum.cardinality)&&this.itemMetadatum.metadatum.cardinality>1?this.itemMetadatum.metadatum.cardinality:void 0}},watch:{"itemMetadatum.value":{handler:function(){this.createChildMetadataGroups()},immediate:!0,deep:!0},isMetadataNavigation:function(){this.focusedGroupMetadatum=0,this.focusedChildMetadatum=0},isFocused:function(){this.isFocused&&this.setMetadatumChildFocus({groupIndex:this.focusedGroupMetadatum,childIndex:this.focusedChildMetadatum,scrollIntoView:!0})}},created:function(){this.$emitter.on("hasRemovedItemMetadataGroup",this.laterUpdateIsRemovingGroup),this.$emitter.on("focusPreviousChildMetadatum",this.focusPreviousChildMetadatum),this.$emitter.on("focusNextChildMetadatum",this.focusNextChildMetadatum)},beforeUnmount:function(){this.$emitter.off("hasRemovedItemMetadataGroup",this.laterUpdateIsRemovingGroup),this.$emitter.off("focusPreviousChildMetadatum",this.focusPreviousChildMetadatum),this.$emitter.off("focusNextChildMetadatum",this.focusNextChildMetadatum)},methods:l(l({},(0,n.i0)("item",["fetchCompoundFirstParentMetaId"])),{},{createChildMetadataGroups:function(){var t=this,a=[],e=this.isMultiple?this.itemMetadatum.value:[this.itemMetadatum.value];if(this.itemMetadatum&&this.itemMetadatum.metadatum&&this.itemMetadatum.metadatum.metadata_type_options&&this.itemMetadatum.metadatum.metadata_type_options.children_objects.length>0&&e&&e.length)for(var i=0;i<e.length;i++){var n=e[i],o=[];if(n&&n.length){var r,m=s(this.itemMetadatum.metadatum.metadata_type_options.children_objects);try{var l=function(){var a=r.value,e=n.findIndex((function(t){return a.id==t.metadatum_id}));if(e>=0){var s=n[e];o.push({item:t.itemMetadatum.item,metadatum:a,parent_meta_id:t.itemMetadatum.item&&t.itemMetadatum.item.id?s.parent_meta_id:i,value:s.value,value_as_html:s.value_as_html,value_as_string:s.value_as_string,collapse:t.childItemMetadataGroups[i]&&t.childItemMetadataGroups[i][e]?t.childItemMetadataGroups[i][e].collapse:!!t.collapseAllChildren&&t.collapseAllChildren})}else{var m=n.findIndex((function(t){return t.parent_meta_id>0}));o.push({item:t.itemMetadatum.item,metadatum:a,parent_meta_id:t.itemMetadatum.item&&t.itemMetadatum.item.id?m>=0?n[m].parent_meta_id:0:i,value:"",value_as_html:"",value_as_string:"",collapse:!!t.collapseAllChildren&&t.collapseAllChildren})}};for(m.s();!(r=m.n()).done;)l()}catch(t){m.e(t)}finally{m.f()}}else{var d,u=s(this.itemMetadatum.metadatum.metadata_type_options.children_objects);try{for(u.s();!(d=u.n()).done;){var c=d.value,f={item:this.itemMetadatum.item,metadatum:c,parent_meta_id:this.itemMetadatum.item&&this.itemMetadatum.item.id?"0":a.length,value:"",value_as_html:"",value_as_string:"",collapse:!!this.collapseAllChildren&&this.collapseAllChildren};o.push(f)}}catch(t){u.e(t)}finally{u.f()}}a.push(o)}this.childItemMetadataGroups=a},toggleCollapseAllChildren:function(){this.collapseAllChildren=!this.collapseAllChildren;for(var t=0;t<this.childItemMetadataGroups.length;t++)for(var a=0;a<this.childItemMetadataGroups[t].length;a++)this.childItemMetadataGroups[t][a].collapse=this.collapseAllChildren},onChangeCollapse:function(t,a,e){this.childItemMetadataGroups[a][e].collapse=t},addGroup:function(){var t=this;if(this.isCreatingGroup=!0,this.itemMetadatum.item&&this.itemMetadatum.item.id)this.fetchCompoundFirstParentMetaId({item_id:this.itemMetadatum.item.id,metadatum_id:this.itemMetadatum.metadatum.id}).then((function(a){var e=[];if(t.itemMetadatum&&t.itemMetadatum.metadatum&&t.itemMetadatum.metadatum.metadata_type_options&&t.itemMetadatum.metadatum.metadata_type_options.children_objects.length>0){var i,n=s(t.itemMetadatum.metadatum.metadata_type_options.children_objects);try{for(n.s();!(i=n.n()).done;){var o=i.value,r={item:t.itemMetadatum.item,metadatum:o,parent_meta_id:a,value:"",value_as_html:"",value_as_string:"",collapse:!0};e.push(r)}}catch(t){n.e(t)}finally{n.f()}}t.childItemMetadataGroups.push(e),t.isMetadataNavigation&&(t.informItemEditionFormOfChildNavigation(),t.focusedChildMetadatum=-1,t.focusNextChildMetadatum()),t.isCreatingGroup=!1}));else{var a=[];if(this.itemMetadatum&&this.itemMetadatum.metadatum&&this.itemMetadatum.metadatum.metadata_type_options&&this.itemMetadatum.metadatum.metadata_type_options.children_objects.length>0){var e,i=s(this.itemMetadatum.metadatum.metadata_type_options.children_objects);try{for(i.s();!(e=i.n()).done;){var n=e.value,o={item:this.itemMetadatum.item,metadatum:n,parent_meta_id:this.childItemMetadataGroups.length,value:"",value_as_html:"",value_as_string:"",collapse:!0};a.push(o)}}catch(t){i.e(t)}finally{i.f()}}this.childItemMetadataGroups.push(a),this.isCreatingGroup=!1}},removeGroup:function(t){this.itemMetadatum.value&&this.itemMetadatum.value[t]&&this.itemMetadatum.value[t][0]?(this.isRemovingGroup=!0,this.$emitter.emit("removeCompoundGroup",{itemId:this.itemMetadatum.item.id,metadatumId:this.itemMetadatum.metadatum.id,parentMetaId:this.itemMetadatum.item.id?this.itemMetadatum.value[t][0].parent_meta_id:t}),this.itemMetadatum.item.id||this.childItemMetadataGroups.splice(t,1)):this.childItemMetadataGroups.splice(t,1),this.isMetadataNavigation&&(this.focusedGroupMetadatum>0&&(this.focusedGroupMetadatum-=1),this.informItemEditionFormOfChildNavigation(),this.focusPreviousChildMetadatum())},filterByMetadatumName:function(t){return!this.metadataNameFilterString||t.metadatum.name.toString().toLowerCase().indexOf(this.metadataNameFilterString.toString().toLowerCase())>=0},focusPreviousChildMetadatum:function(){this.isFocused&&(this.focusedGroupMetadatum-1>=0&&this.focusedChildMetadatum-1<0?this.setMetadatumChildFocus({groupIndex:this.focusedGroupMetadatum-1,childIndex:this.childItemMetadataGroups[this.focusedGroupMetadatum-1].length-1,scrollIntoView:!0}):this.focusedChildMetadatum-1>=0&&this.setMetadatumChildFocus({groupIndex:this.focusedGroupMetadatum,childIndex:this.focusedChildMetadatum-1,scrollIntoView:!0})),0===this.childItemMetadataGroups.length&&(this.$emitter.emit("isOnFirstMetadatumOfCompoundNavigation",!0),this.$emitter.emit("isOnLastMetadatumOfCompoundNavigation",!0))},focusNextChildMetadatum:function(){this.isFocused&&this.childItemMetadataGroups[this.focusedGroupMetadatum]&&(this.focusedChildMetadatum+1>=this.childItemMetadataGroups[this.focusedGroupMetadatum].length?this.setMetadatumChildFocus({groupIndex:this.focusedGroupMetadatum+1,childIndex:0,scrollIntoView:!0}):this.setMetadatumChildFocus({groupIndex:this.focusedGroupMetadatum,childIndex:this.focusedChildMetadatum+1,scrollIntoView:!0})),0===this.childItemMetadataGroups.length&&(this.$emitter.emit("isOnFirstMetadatumOfCompoundNavigation",!0),this.$emitter.emit("isOnLastMetadatumOfCompoundNavigation",!0))},informItemEditionFormOfChildNavigation:function(){this.$emitter.emit("isOnFirstMetadatumOfCompoundNavigation",0===this.focusedGroupMetadatum&&0===this.focusedChildMetadatum),this.$emitter.emit("isOnLastMetadatumOfCompoundNavigation",this.focusedGroupMetadatum===this.childItemMetadataGroups.length-1&&this.focusedChildMetadatum===this.childItemMetadataGroups[this.focusedGroupMetadatum].length-1)},setMetadatumChildFocus:function(t){var a=this,e=t.groupIndex,i=void 0===e?0:e,n=t.childIndex,o=void 0===n?0:n,s=t.scrollIntoView,r=void 0!==s&&s,m=this.focusedGroupMetadatum;this.focusedGroupMetadatum=i;var l=this.focusedChildMetadatum;if(this.focusedChildMetadatum=o,m!==i||l!==o||r){var d=this.$refs["tainacan-form-item--"+i+"-"+o]&&this.$refs["tainacan-form-item--"+i+"-"+o][0]&&this.$refs["tainacan-form-item--"+i+"-"+o][0].$el;if(d){var u=d.getElementsByTagName("input")[0]||d.getElementsByTagName("select")[0]||d.getElementsByTagName("textarea")[0];u&&setTimeout((function(){m!==i&&l!==o&&u!==document.activeElement&&(u.focus(),"checkbox"===u.type||"radio"===u.type||u.classList.contains("is-special-hidden-for-mobile")||u.click()),r&&setTimeout((function(){d.scrollIntoView({behavior:"smooth",block:a.isMobileScreen?"start":"center"})}),300),a.informItemEditionFormOfChildNavigation()}),100)}}},laterUpdateIsRemovingGroup:function(){var t=this;(0,i.dY)((function(){t.isRemovingGroup=!1}))}})}},91037:(t,a,e)=>{e.d(a,{X:()=>g});var i=e(6934),n={class:"child-metadata-inputs"},o={class:"icon"},s={key:1,class:"multiple-inputs"},r={key:0},m={key:0,class:"field"},l={class:"collapse-handle"},d={class:"label has-tooltip"},u={key:0,style:{opacity:"0.65"},class:"metadatum-section-enumeration"},c={key:0,class:"required-metadatum-asterisk"},f={class:"metadata-type"},h=["onClick"],p={key:0,style:{width:"100%"},class:"icon has-text-success loading-icon"},b={key:2,class:"empty-label"},v=["disabled"];function g(t,a,e,g,y,M){var x=(0,i.g2)("help-button"),k=(0,i.g2)("tainacan-form-item");return(0,i.uX)(),(0,i.CE)("div",n,[!e.hideCollapses&&y.childItemMetadataGroups.length>0?((0,i.uX)(),(0,i.CE)("a",{key:0,class:"collapse-all",onClick:a[0]||(a[0]=function(t){return M.toggleCollapseAllChildren()})},[(0,i.Lk)("span",o,[(0,i.Lk)("i",{class:(0,i.C4)([{"tainacan-icon-arrowdown":y.collapseAllChildren,"tainacan-icon-arrowright":!y.collapseAllChildren},"tainacan-icon tainacan-icon-1-25em"])},null,2)]),(0,i.eW)(" "+(0,i.v_)(y.collapseAllChildren?t.$i18n.get("label_collapse_all"):t.$i18n.get("label_expand_all")),1)])):(0,i.Q3)("",!0),y.childItemMetadataGroups.length>0?((0,i.uX)(),(0,i.CE)("div",s,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(y.childItemMetadataGroups,(function(n,o){return(0,i.uX)(),(0,i.CE)(i.FK,{key:o},[o>0?((0,i.uX)(),(0,i.CE)("hr",r)):(0,i.Q3)("",!0),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n,(function(s,r){return(0,i.uX)(),(0,i.CE)(i.FK,{key:o+"-"+r},[y.isRemovingGroup?((0,i.uX)(),(0,i.CE)("div",m,[(0,i.Lk)("span",l,[a[3]||(a[3]=(0,i.Lk)("span",{class:"icon"},[(0,i.Lk)("i",{class:"has-text-secondary tainacan-icon tainacan-icon-1-25em tainacan-icon-arrowdown"})],-1)),(0,i.Lk)("label",d,[e.enumerateMetadatum?((0,i.uX)(),(0,i.CE)("span",u,(0,i.v_)(e.enumerateMetadatum)+". ",1)):(0,i.Q3)("",!0),(0,i.eW)(" "+(0,i.v_)(s.metadatum.name),1)]),"yes"==s.metadatum.required?((0,i.uX)(),(0,i.CE)("span",c," * ")):(0,i.Q3)("",!0),(0,i.Lk)("span",f," ("+(0,i.v_)(s.metadatum.metadata_type_object.name)+") ",1),(0,i.bF)(x,{title:s.metadatum.name,message:s.metadatum.description},null,8,["title","message"])]),(0,i.Lk)("div",{class:"skeleton",style:(0,i.Tr)({minHeight:"tainacan-checkbox"==s.metadatum.metadata_type_object.component||"tainacan-taxonomy-checkbox"==s.metadatum.metadata_type_object.component?"150px":"30px"})},null,4)])):(0,i.bo)(((0,i.uX)(),(0,i.Wv)(k,{key:1,ref_for:!0,ref:"tainacan-form-item--"+o+"-"+r,"item-metadatum":s,"hide-collapses":e.hideCollapses,"hide-metadata-types":e.hideMetadataTypes,"hide-help-buttons":e.hideHelpButtons,"help-info-bellow-label":e.helpInfoBellowLabel,"is-collapsed":s.collapse,"is-mobile-screen":e.isMobileScreen,class:(0,i.C4)({"is-last-input":r==n.length-1,"is-metadata-navigation-active":e.isMetadataNavigation}),"is-focused":y.focusedGroupMetadatum===o&&y.focusedChildMetadatum===r,"is-metadata-navigation":e.isMetadataNavigation,"enumerate-metadatum":!!e.enumerateMetadatum&&e.enumerateMetadatum+(y.childItemMetadataGroups.length>1?"."+(Number(o)+1):"")+"."+(Number(r)+1),onInput:a[1]||(a[1]=function(a){return t.$emitter.emit("updateValueFromCompound",a)}),onChangeCollapse:function(t){return M.onChangeCollapse(t,o,r)},onTouchstart:function(t){return e.isMetadataNavigation?M.setMetadatumChildFocus({groupIndex:o,childIndex:r,scrollIntoView:!1}):""},onMousedown:function(t){return e.isMetadataNavigation?M.setMetadatumChildFocus({groupIndex:o,childIndex:r,scrollIntoView:!1}):""},onMobileSpecialFocus:function(t){return M.setMetadatumChildFocus({groupIndex:o,childIndex:r,scrollIntoView:!0})}},null,8,["item-metadatum","hide-collapses","hide-metadata-types","hide-help-buttons","help-info-bellow-label","is-collapsed","is-mobile-screen","class","is-focused","is-metadata-navigation","enumerate-metadatum","onChangeCollapse","onTouchstart","onMousedown","onMobileSpecialFocus"])),[[i.aG,""==e.metadataNameFilterString||M.filterByMetadatumName(s)]])],64)})),128)),M.isMultiple?((0,i.uX)(),(0,i.CE)("a",{key:1,class:"add-link",onClick:function(t){return M.removeGroup(o)}},[a[4]||(a[4]=(0,i.Lk)("span",{class:"icon is-small"},[(0,i.Lk)("i",{class:"tainacan-icon has-text-secondary tainacan-icon-remove"})],-1)),(0,i.eW)("  "+(0,i.v_)(t.$i18n.get("label_remove_value")),1)],8,h)):(0,i.Q3)("",!0)],64)})),128)),(0,i.bF)(i.eB,{name:"filter-item"},{default:(0,i.k6)((function(){return[y.isCreatingGroup?((0,i.uX)(),(0,i.CE)("span",p,a[5]||(a[5]=[(0,i.Lk)("div",{class:"control has-icons-right is-loading is-clearfix"},null,-1)]))):(0,i.Q3)("",!0)]})),_:1})])):((0,i.uX)(),(0,i.CE)("p",b,(0,i.v_)(t.$i18n.get("info_no_value_compound_metadata")),1)),M.isMultiple&&(void 0===M.maxMultipleValues||0===M.maxMultipleValues||1!==M.maxMultipleValues&&M.maxMultipleValues>y.childItemMetadataGroups.length)?((0,i.uX)(),(0,i.CE)("a",{key:3,disabled:e.itemMetadatum.item.id&&y.childItemMetadataGroups.length>0&&!M.someValueOnLastInput,class:"is-inline-block add-link",onClick:a[2]||(a[2]=function(){return M.addGroup&&M.addGroup.apply(M,arguments)})},[a[6]||(a[6]=(0,i.Lk)("span",{class:"icon is-small"},[(0,i.Lk)("i",{class:"tainacan-icon has-text-secondary tainacan-icon-add"})],-1)),(0,i.eW)("  "+(0,i.v_)(t.$i18n.get("label_add_value")),1)],8,v)):(0,i.Q3)("",!0)])}},46476:(t,a,e)=>{e.d(a,{A:()=>r});var i=e(31601),n=e.n(i),o=e(76314),s=e.n(o)()(n());s.push([t.id,".sr-only[data-v-1453fb3c]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.icon[data-v-1453fb3c]{height:1.5em;width:1.5em}.icon.is-small[data-v-1453fb3c]{height:1em;width:1em}.icon.is-medium[data-v-1453fb3c]{height:2em;width:2em}.icon.is-large[data-v-1453fb3c]{height:3em;width:3em}@keyframes slide-menu-in-1453fb3c{from{-ms-transform:translate(-100%, 0);-webkit-transform:translate(-100%, 0);transform:translate(-100%, 0)}to{-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes slide-menu-out-1453fb3c{from{-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{-ms-transform:translate(-100%, 0);-webkit-transform:translate(-100%, 0);transform:translate(-100%, 0)}}@keyframes appear-1453fb3c{from{opacity:0.0;visibility:hidden}to{opacity:1.0;visibility:visible}}@keyframes disappear-1453fb3c{from{opacity:0.3;visibility:visible}to{opacity:0.0;visibility:hidden}}.slide-menu-enter-active[data-v-1453fb3c]{animation-name:slide-menu-in-1453fb3c;animation-duration:0.3s;animation-timing-function:ease-out}.slide-menu-enter-active .modal-background[data-v-1453fb3c]{animation-name:appear-1453fb3c;animation-duration:0.6s;animation-timing-function:ease-out}.slide-menu-leave-active[data-v-1453fb3c]{animation-name:slide-menu-out-1453fb3c;animation-duration:0.3s;animation-timing-function:ease-in}.slide-menu-leave-active .modal-background[data-v-1453fb3c]{opacity:0.0;animation-name:disappear-1453fb3c;animation-duration:0.2s;animation-timing-function:ease-in}@keyframes appear-from-top-tooltip-1453fb3c{from{top:24px;opacity:0}to{top:48px;opacity:1}}@keyframes appear-from-top-1453fb3c{from{top:-48px}to{top:0px}}@keyframes appear-from-bottom-1453fb3c{from{bottom:-48px}to{bottom:-12px}}@keyframes expand-1453fb3c{from{max-height:0}to{max-height:222px}}@keyframes item-appear-1453fb3c{from{opacity:0;visibility:hidden;transform:translate(0, 12px)}to{opacity:1;visibility:visible;transform:translate(0, 0px)}}.item-appear-enter-active[data-v-1453fb3c]{animation-name:item-appear-1453fb3c;animation-duration:0.2s;animation-timing-function:ease-out}.item-appear-leave-active[data-v-1453fb3c]{animation-name:item-appear-1453fb3c;animation-duration:0.2s;animation-timing-function:ease-in;animation-direction:reverse}@keyframes filter-item-in-1453fb3c{from{opacity:0;height:0px;max-height:0px;min-height:0px;-ms-transform:translate(0%, -30%);-webkit-transform:translate(0%, -30%);transform:translate(0%, -30%)}to{height:35px;max-height:35px;min-height:35px;opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes filter-item-out-1453fb3c{from{height:35px;max-height:35px;min-height:35px;opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{height:0px;max-height:0px;min-height:0px;opacity:0;-ms-transform:translate(0%, -30%);-webkit-transform:translate(0%, -30%);transform:translate(0%, -30%)}}.filter-item-enter-active[data-v-1453fb3c]{overflow:hidden;animation-name:filter-item-in-1453fb3c;animation-duration:0.1s;animation-timing-function:ease}.filter-item-leave-active[data-v-1453fb3c]{overflow:hidden;animation-name:filter-item-out-1453fb3c;animation-duration:0.1s;animation-timing-function:ease}@keyframes form-collapse-in-1453fb3c{from{opacity:0;height:0px;max-height:0px;min-height:0px}to{height:300px;max-height:300px;min-height:300px;opacity:1}}@keyframes form-collapse-out-1453fb3c{from{height:300px;max-height:300px;min-height:300px}to{height:0px;max-height:0px;min-height:0px}}.form-collapse-enter-active[data-v-1453fb3c]{overflow:hidden;animation-name:form-collapse-in-1453fb3c;animation-duration:0.2s;animation-timing-function:ease}.form-collapse-leave-active[data-v-1453fb3c]{overflow:hidden;animation-name:form-collapse-out-1453fb3c;animation-duration:0.15s;animation-timing-function:ease}@keyframes form-capabilities-in-1453fb3c{from{opacity:0;height:0px;max-height:0px;min-height:0px}to{height:120px;max-height:120px;min-height:120px;opacity:1}}@keyframes form-capabilities-out-1453fb3c{from{height:120px;max-height:120px;min-height:120px}to{height:0px;max-height:0px;min-height:0px}}.form-capabilities-enter-active[data-v-1453fb3c]{overflow:hidden;animation-name:form-capabilities-in-1453fb3c;animation-duration:0.2s;animation-timing-function:ease}.form-capabilities-leave-active[data-v-1453fb3c]{overflow:hidden;animation-name:form-capabilities-out-1453fb3c;animation-duration:0.15s;animation-timing-function:ease}@keyframes filters-menu-in-1453fb3c{from{opacity:0;width:0px;max-width:0px;min-width:0px;-ms-transform:translate(-30%, 0%);-webkit-transform:translate(-30%, 0%);transform:translate(-30%, 0%)}to{height:180px;max-width:180px;min-width:180px;opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes filters-menu-out-1453fb3c{from{width:180px;max-width:180px;min-width:180px;opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{width:0px;max-width:0px;min-width:0px;opacity:0;-ms-transform:translate(-30%, 0%);-webkit-transform:translate(-30%, 0%);transform:translate(-30%, 0%)}}.filters-menu-enter-active[data-v-1453fb3c]{animation-name:filters-menu-in-1453fb3c;animation-duration:0.2s;animation-timing-function:ease}.filters-menu-leave-active[data-v-1453fb3c]{animation-name:filters-menu-out-1453fb3c;animation-duration:0.2s;animation-timing-function:ease}@keyframes panel-from-top-in-1453fb3c{from{opacity:0.8;-ms-transform:translate(0%, -75%);-webkit-transform:translate(0%, -75%);transform:translate(0%, -75%)}to{opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes panel-from-top-out-1453fb3c{from{opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{opacity:0.8;-ms-transform:translate(0%, -80%);-webkit-transform:translate(0%, -80%);transform:translate(0%, -80%)}}.panel-from-top-enter-active[data-v-1453fb3c]{animation-name:panel-from-top-in-1453fb3c;animation-duration:0.3s;animation-timing-function:ease-in}.panel-from-top-leave-active[data-v-1453fb3c]{animation-name:panel-from-top-out-1453fb3c;animation-duration:0.2s;animation-timing-function:ease-out}@keyframes slide-left-in-1453fb3c{from{opacity:0;-ms-transform:translate(-5%, 0%) scale(0.95);-webkit-transform:translate(-5%, 0%) scale(0.95);transform:translate(-5%, 0%) scale(0.95)}to{opacity:1;-ms-transform:translate(0, 0) scale(1);-webkit-transform:translate(0, 0) scale(1);transform:translate(0, 0) scale(1)}}@keyframes slide-left-out-1453fb3c{from{opacity:1;-ms-transform:translate(0, 0) scale(1);-webkit-transform:translate(0, 0) scale(1);transform:translate(0, 0) scale(1)}to{opacity:0;-ms-transform:translate(10%, 0%) scale(0.95);-webkit-transform:translate(10%, 0%) scale(0.95);transform:translate(10%, 0%) scale(0.95)}}.slide-left-enter-active[data-v-1453fb3c]{animation-name:slide-left-in-1453fb3c;animation-duration:0.4s;animation-timing-function:ease}.slide-left-leave-active[data-v-1453fb3c]{animation-name:slide-left-out-1453fb3c;animation-duration:0.4s;animation-timing-function:ease}@keyframes slide-right-in-1453fb3c{from{opacity:0;-ms-transform:translate(10%, 0%) scale(0.95);-webkit-transform:translate(10%, 0%) scale(0.95);transform:translate(10%, 0%) scale(0.95)}to{opacity:1;-ms-transform:translate(0, 0) scale(1);-webkit-transform:translate(0, 0) scale(1);transform:translate(0, 0) scale(1)}}@keyframes slide-right-out-1453fb3c{from{opacity:1;-ms-transform:translate(0, 0) scale(1);-webkit-transform:translate(0, 0) scale(1);transform:translate(0, 0) scale(1)}to{opacity:0;-ms-transform:translate(-5%, 0%) scale(0.95);-webkit-transform:translate(-5%, 0%) scale(0.95);transform:translate(-5%, 0%) scale(0.95)}}.slide-right-enter-active[data-v-1453fb3c]{animation-name:slide-right-in-1453fb3c;animation-duration:0.3s;animation-timing-function:ease}.slide-right-leave-active[data-v-1453fb3c]{animation-name:slide-right-out-1453fb3c;animation-duration:0.3s;animation-timing-function:ease}@keyframes page-left-in-1453fb3c{from{opacity:0;-ms-transform:translate(-5%, 0%);-webkit-transform:translate(-5%, 0%);transform:translate(-5%, 0%)}to{opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes page-left-out-1453fb3c{from{opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{opacity:0;-ms-transform:translate(10%, 0%);-webkit-transform:translate(10%, 0%);transform:translate(10%, 0%)}}.page-left-enter-active[data-v-1453fb3c]{animation-name:page-left-in-1453fb3c;animation-duration:0.4s;animation-timing-function:ease}.page-left-leave-active[data-v-1453fb3c]{animation-name:page-left-out-1453fb3c;animation-duration:0.4s;animation-timing-function:ease}@keyframes page-right-in-1453fb3c{from{opacity:0;-ms-transform:translate(10%, 0%);-webkit-transform:translate(10%, 0%);transform:translate(10%, 0%)}to{opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes page-right-out-1453fb3c{from{opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{opacity:0;-ms-transform:translate(-5%, 0%);-webkit-transform:translate(-5%, 0%);transform:translate(-5%, 0%)}}.page-right-enter-active[data-v-1453fb3c]{animation-name:page-right-in-1453fb3c;animation-duration:0.3s;animation-timing-function:ease}.page-right-leave-active[data-v-1453fb3c]{animation-name:page-right-out-1453fb3c;animation-duration:0.3s;animation-timing-function:ease}@-webkit-keyframes skeleton-animation-1453fb3c{0%{opacity:1.0}50%{opacity:0.2}100%{opacity:1.0}}@-moz-keyframes skeleton-animation-1453fb3c{0%{opacity:1.0}50%{opacity:0.2}100%{opacity:1.0}}@-o-keyframes skeleton-animation-1453fb3c{0%{opacity:1.0}50%{opacity:0.2}100%{opacity:1.0}}@keyframes skeleton-animation-1453fb3c{0%{opacity:1.0}50%{opacity:0.2}100%{opacity:1.0}}.skeleton[data-v-1453fb3c]{border-radius:2px;background:var(--tainacan-skeleton-color);-webkit-animation:skeleton-animation-1453fb3c 1.8s ease infinite;-moz-animation:skeleton-animation-1453fb3c 1.8s ease infinite;-o-animation:skeleton-animation-1453fb3c 1.8s ease infinite;animation:skeleton-animation-1453fb3c 1.8s ease infinite}@keyframes metadatum-highlight-1453fb3c{from{background-color:var(--tainacan-primary1)}to{background-color:var(--tainacan-white)}}.child-metadata-inputs[data-v-1453fb3c]{margin-left:-30px;padding-left:38px;padding-top:5px;border-left:1px solid var(--tainacan-gray2)}.child-metadata-inputs .skeleton[data-v-1453fb3c]{width:100%;min-height:30px}.child-metadata-inputs .collapse-all[data-v-1453fb3c]{margin-left:-13px;font-size:0.75em}.child-metadata-inputs .collapse-all .icon[data-v-1453fb3c]{font-size:1.25em}.child-metadata-inputs .field[data-v-1453fb3c]{padding-right:0;margin-left:3px;margin-bottom:0em !important}.child-metadata-inputs .is-last-input.field[data-v-1453fb3c]{border-bottom:none}.child-metadata-inputs .add-link[data-v-1453fb3c]{font-size:0.75em;margin-left:-1.25rem}.child-metadata-inputs .multiple-inputs hr[data-v-1453fb3c]{background-color:var(--tainacan-gray2);margin:6px 0px 12px -38px;width:calc(100% + 38px);height:1px}.child-metadata-inputs .empty-label[data-v-1453fb3c]{color:var(--tainacan-gray4);font-size:0.875em;font-style:italic}@media screen and (max-width: 769px){.child-metadata-inputs[data-v-1453fb3c]{margin-left:0px;padding-left:22px}.child-metadata-inputs .field[data-v-1453fb3c]{padding-left:12px}.child-metadata-inputs .field[data-v-1453fb3c] .label{margin-left:0}.child-metadata-inputs .field[data-v-1453fb3c] .collapse-handle{margin-left:-28px}}\n",""]);const r=s},29615:(t,a,e)=>{var i=e(85072),n=e.n(i),o=e(97825),s=e.n(o),r=e(77659),m=e.n(r),l=e(55056),d=e.n(l),u=e(10540),c=e.n(u),f=e(63494),h=e.n(f),p=e(46476),b={};b.styleTagTransform=h(),b.setAttributes=d(),b.insert=m().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=c();n()(p.A,b),p.A&&p.A.locals&&p.A.locals},1214:(t,a,e)=>{e.d(a,{A:()=>i.A});var i=e(55883)},19028:(t,a,e)=>{e.d(a,{X:()=>i.X});var i=e(91037)},70480:(t,a,e)=>{e(29615)}}]);