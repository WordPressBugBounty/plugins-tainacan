"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[7352],{7352:(t,e,a)=>{a.r(e),a.d(e,{default:()=>o});var n=a(92627),i=a(66275);a(65069);const o=(0,a(66262).A)(i.A,[["render",n.X],["__scopeId","data-v-275d512e"]])},21726:(t,e,a)=>{a.d(e,{X:()=>X});var n=a(6934),i={key:0,class:"tainacan-page-title"},o={key:1,class:"tainacan-form","label-width":"120px"},r={class:"label"},s={class:"drop-inner"},l={class:"content has-text-centered"},m={class:"document-list"},d={class:"sequence-progress-info"},c={key:0},u={key:1},p={key:2,class:"has-text-gray"},f={key:3,class:"has-text-gray"},g={key:1,class:"sequence-progress-background"},h=["alt","src"],v=["innerHTML"],y={key:1,class:"help is-danger"},b={class:"document-process-state"},k={key:0,class:"icon has-text-success loading-icon"},x={key:1,class:"icon has-text-success"},w={key:2,class:"document-actions"},_=["onClick"],I={class:"footer"},L={class:"form-submission-footer field is-grouped form-submit"},$={class:"control"},C={style:{"margin-left":"auto"},class:"control"},E=["disabled"],F={class:"control"},j=["disabled"],O={key:2,class:"section"},S={class:"content has-text-grey has-text-centered"};function X(t,e,a,X,A,q){var P=(0,n.g2)("b-loading"),Q=(0,n.g2)("b-upload"),T=(0,n.g2)("b-field"),M=(0,n.gN)("tooltip");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(P,{modelValue:A.isLoading,"onUpdate:modelValue":e[0]||(e[0]=function(t){return A.isLoading=t}),"is-full-page":!1,"can-cancel":!1},null,8,["modelValue"]),t.$adminOptions.hideBulkEditionPageTitle?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("div",i,[(0,n.Lk)("h1",null,(0,n.v_)(t.$i18n.get("add_items_bulk")),1),(0,n.Lk)("a",{class:"back-link has-text-secondary",onClick:e[1]||(e[1]=function(e){return t.$router.go(-1)})},(0,n.v_)(t.$i18n.get("back")),1),e[7]||(e[7]=(0,n.Lk)("hr",null,null,-1))])),!A.isLoading&&t.collection&&t.collection.current_user_can_bulk_edit?((0,n.uX)(),(0,n.CE)("form",o,[(0,n.bF)(T,{addons:!1},{default:(0,n.k6)((function(){return[(0,n.Lk)("label",r,(0,n.v_)(t.$i18n.get("label_documents_upload")),1),e[9]||(e[9]=(0,n.Lk)("br",null,null,-1)),(0,n.bF)(Q,{modelValue:A.submitedFileList,"onUpdate:modelValue":[e[2]||(e[2]=function(t){return A.submitedFileList=t}),e[3]||(e[3]=function(t){return q.uploadFiles()})],native:"","drag-drop":"",multiple:"",class:"source-file-upload"},{default:(0,n.k6)((function(){return[(0,n.Lk)("section",s,[(0,n.Lk)("div",l,[e[8]||(e[8]=(0,n.Lk)("p",null,[(0,n.Lk)("span",{class:"icon"},[(0,n.Lk)("i",{class:"tainacan-icon tainacan-icon-30px tainacan-icon-upload"})])],-1)),(0,n.Lk)("p",null,(0,n.v_)(t.$i18n.get("instruction_drop_file_or_click_to_upload")),1)])])]})),_:1},8,["modelValue"])]})),_:1}),(0,n.Lk)("div",m,[(0,n.Lk)("div",d,[A.uploadedItems.length>0&&A.uploadedItems.length!=A.amountFinished?((0,n.uX)(),(0,n.CE)("p",c,[e[10]||(e[10]=(0,n.Lk)("span",{class:"icon is-small has-text-secondary"},[(0,n.Lk)("i",{class:"tainacan-icon tainacan-icon-18px tainacan-icon-updating"})],-1)),(0,n.eW)(" "+(0,n.v_)(t.$i18n.get("label_upload_file_prepare_items")),1)])):(0,n.Q3)("",!0),A.uploadedItems.length>0&&A.uploadedItems.length==A.amountFinished?((0,n.uX)(),(0,n.CE)("p",u,[e[11]||(e[11]=(0,n.Lk)("span",{class:"icon is-small has-text-success"},[(0,n.Lk)("i",{class:"tainacan-icon tainacan-icon-18px tainacan-icon-approvedcircle"})],-1)),(0,n.eW)(" "+(0,n.v_)(t.$i18n.get("label_process_completed")),1)])):(0,n.Q3)("",!0),A.uploadedItems.length>0&&A.uploadedItems.length-A.amountFinished>1?((0,n.uX)(),(0,n.CE)("p",p,(0,n.v_)(t.$i18n.getWithVariables("label_%s_files_remaining",[A.uploadedItems.length-A.amountFinished])),1)):(0,n.Q3)("",!0),A.uploadedItems.length>0&&A.uploadedItems.length-A.amountFinished==1?((0,n.uX)(),(0,n.CE)("p",f,(0,n.v_)(t.$i18n.get("label_one_file_remaining")),1)):(0,n.Q3)("",!0)]),A.uploadedItems.length>0?((0,n.uX)(),(0,n.CE)("div",{key:0,style:(0,n.Tr)({width:A.amountFinished/A.uploadedItems.length*100+"%"}),class:"sequence-progress"},null,4)):(0,n.Q3)("",!0),A.uploadedItems.length>0?((0,n.uX)(),(0,n.CE)("div",g)):(0,n.Q3)("",!0),(0,n.bF)(n.F,{name:"item-appear"},{default:(0,n.k6)((function(){return[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(A.uploadedItems,(function(a,i){return(0,n.uX)(),(0,n.CE)("div",{key:a.id,class:"document-item"},[null!=a.document&&""!=a.document&&"empty"!=a.document_type?((0,n.uX)(),(0,n.CE)("img",{key:0,class:"document-thumb",alt:t.$i18n.get("label_thumbnail")+": "+a.title,src:t.$thumbHelper.getSrc(a.thumbnail,"tainacan-small",a.document_mimetype)},null,8,h)):(0,n.Q3)("",!0),(0,n.Lk)("span",{class:"document-name",innerHTML:a.title},null,8,v),null!=a.errorMessage?((0,n.uX)(),(0,n.CE)("span",y,(0,n.v_)(a.errorMessage),1)):(0,n.Q3)("",!0),(0,n.Lk)("div",b,[null!=a.errorMessage||""!=a.document&&"empty"!=a.document_type?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("span",k,e[12]||(e[12]=[(0,n.Lk)("div",{class:"control has-icons-right is-loading is-clearfix"},null,-1)]))),""!=a.document&&"empty"!=a.document_type?(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",x,e[13]||(e[13]=[(0,n.Lk)("i",{class:"tainacan-icon tainacan-icon-1-25em tainacan-icon-approvedcircle"},null,-1)]))),[[M,{delay:{show:500,hide:300},content:t.$i18n.get("label_document_uploaded"),autoHide:!1,placement:"auto-start",popperClass:["tainacan-tooltip","tooltip"]}]]):(0,n.Q3)("",!0)]),""!=a.document&&"empty"!=a.document_type?((0,n.uX)(),(0,n.CE)("div",w,[(0,n.bo)(((0,n.uX)(),(0,n.CE)("span",{class:"icon has-text-secondary action-icon",onClick:function(t){return q.deleteOneItem(a.id,i)}},e[14]||(e[14]=[(0,n.Lk)("i",{class:"tainacan-icon tainacan-icon-18px tainacan-icon-delete"},null,-1)]),8,_)),[[M,{delay:{show:500,hide:300},content:t.$i18n.get("label_button_delete_document"),autoHide:!1,placement:"auto-start",popperClass:["tainacan-tooltip","tooltip"]}]])])):(0,n.Q3)("",!0)])})),128))]})),_:1})]),(0,n.Lk)("footer",I,[(0,n.Lk)("div",L,[(0,n.Lk)("div",$,[(0,n.Lk)("button",{type:"button",class:"button is-outlined",onClick:e[4]||(e[4]=(0,n.D$)((function(e){return t.$router.go(-1)}),["prevent"]))},(0,n.v_)(t.$i18n.get("cancel")),1)]),(0,n.Lk)("div",C,[(0,n.Lk)("button",{disabled:!(A.uploadedItems.length>0&&A.uploadedItems.length==A.amountFinished),class:(0,n.C4)(["button is-secondary",{"is-loading":A.isCreatingSequenceEditGroup}]),type:"submit",onClick:e[5]||(e[5]=(0,n.D$)((function(t){return q.sequenceEditGroup()}),["prevent"]))},(0,n.v_)(t.$i18n.get("label_sequence_edit_items")),11,E)]),(0,n.Lk)("div",F,[(0,n.Lk)("button",{disabled:!(A.uploadedItems.length>0&&A.uploadedItems.length==A.amountFinished),class:"button is-secondary",type:"submit",onClick:e[6]||(e[6]=(0,n.D$)((function(t){return q.openBulkEditionModal()}),["prevent"]))},(0,n.v_)(t.$i18n.get("label_bulk_edit_items")),9,j)])])])])):A.isLoading||!t.collection||t.collection.current_user_can_bulk_edit?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("section",O,[(0,n.Lk)("div",S,[e[15]||(e[15]=(0,n.Lk)("p",null,[(0,n.Lk)("span",{class:"icon"},[(0,n.Lk)("i",{class:"tainacan-icon tainacan-icon-30px tainacan-icon-collection"})])],-1)),(0,n.Lk)("p",null,(0,n.v_)(t.$i18n.get("info_can_not_bulk_edit_items_collection")),1)])]))])}},65069:(t,e,a)=>{a(84938)},66275:(t,e,a)=>{a.d(e,{A:()=>n.A});var n=a(67598)},67598:(t,e,a)=>{a.d(e,{A:()=>u});var n=a(40834),i=a(3012),o=a(19741);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function s(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,e){if(t){if("string"==typeof t)return l(t,e);var a={}.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var _n=0,n=function(){};return{s:n,n:function(){return _n>=t.length?{done:!0}:{done:!1,value:t[_n++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,r=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return o=t.done,t},e:function(t){r=!0,i=t},f:function(){try{o||null==a.return||a.return()}finally{if(r)throw i}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=Array(e);a<e;a++)n[a]=t[a];return n}function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e,a){return(e=function(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,e||"default");if("object"!=r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const u={name:"ItemBulkEditionForm",data:function(){return{collectionId:"",isLoading:!1,isCreatingSequenceEditGroup:!1,submitedFileList:[],uploadedItems:[],amountFinished:0}},computed:d({},(0,n.L8)("collection",{collection:"getCollection"})),created:function(){this.collectionId=this.$route.params.collectionId,this.cleanFiles(),this.$emitter.emit("onCollectionBreadCrumbUpdate",[{path:this.$routerHelper.getCollectionPath(this.collectionId),label:this.$i18n.get("items")},{path:"",label:this.$i18n.get("add_items_bulk")}])},methods:d(d(d(d({},(0,n.i0)("collection",["sendFile","cleanFiles","deleteItem"])),(0,n.i0)("item",["sendItem","updateItemDocument"])),(0,n.i0)("bulkedition",["createSequenceEditGroup"])),{},{uploadFiles:function(){var t,e=this,a=s(this.submitedFileList);try{var n=function(){var a=t.value,n={collection_id:e.collectionId,status:"draft",title:a.name};e.sendItem(n).then((function(t){var n=e.uploadedItems.findIndex((function(e){return e.id===t.id}));n>=0?Object.assign(e.uploadedItems,c({},n,t)):e.uploadedItems.push(t),e.sendFile({itemId:t.id,file:a}).then((function(a){e.updateItemDocument({item_id:t.id,document:new String(a.id),document_type:"attachment"}).then((function(t){e.amountFinished++;var a=e.uploadedItems.findIndex((function(e){return e.id===t.id}));a>=0?Object.assign(e.uploadedItems,c({},a,t)):e.uploadedItems.unshift(t)})).catch((function(t){e.$console.error(t)}))})).catch((function(n){var i=e.uploadedItems.findIndex((function(e){return e.id===t.id}));i>=0&&e.uploadedItems.splice(i,1),t.errorMessage=n.data&&n.data.message?n.data.message:e.$i18n.get("info_error_upload"),e.$buefy.toast.open({message:t.errorMessage+": "+a.name,type:"is-danger",position:"is-bottom",duration:3500}),e.$console.error(n)}))})).catch((function(t){e.$console.error(t)}))};for(a.s();!(t=a.n()).done;)n()}catch(t){a.e(t)}finally{a.f()}},sequenceEditGroup:function(){var t=this,e=this.uploadedItems.map((function(t){return t.id}));this.isCreatingSequenceEditGroup=!0,this.createSequenceEditGroup({object:e,collectionId:this.collectionId}).then((function(e){var a=e.id;t.isCreatingSequenceEditGroup=!1,t.$router.push(t.$routerHelper.getCollectionSequenceEditPath(t.collectionId,a,1))}))},openBulkEditionModal:function(){var t=this.uploadedItems.map((function(t){return t.id}));this.$buefy.modal.open({parent:this,component:o.default,props:{modalTitle:this.$i18n.get("info_editing_items_in_bulk"),totalItems:t.length,selectedForBulk:t,objectType:this.$i18n.get("items"),collectionId:this.collectionId},width:"calc(100% - (2 * var(--tainacan-one-column)))",trapFocus:!0,customClass:"tainacan-modal",closeButtonAriaLabel:this.$i18n.get("close")})},deleteOneItem:function(t,e){var a=this;this.$buefy.modal.open({parent:this,component:i.default,props:{icon:"alert",title:this.$i18n.get("label_warning"),message:this.isOnTrash?this.$i18n.get("info_warning_item_delete"):this.$i18n.get("info_warning_item_trash"),onConfirm:function(){a.teste,a.deleteItem({itemId:t}).then((function(){a.uploadedItems.splice(e,1),a.amountFinished--}))}},trapFocus:!0,customClass:"tainacan-modal",closeButtonAriaLabel:this.$i18n.get("close")})}})}},84938:(t,e,a)=>{var n=a(85072),i=a.n(n),o=a(97825),r=a.n(o),s=a(77659),l=a.n(s),m=a(55056),d=a.n(m),c=a(10540),u=a.n(c),p=a(63494),f=a.n(p),g=a(97073),h={};h.styleTagTransform=f(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=u();i()(g.A,h),g.A&&g.A.locals&&g.A.locals},92627:(t,e,a)=>{a.d(e,{X:()=>n.X});var n=a(21726)},97073:(t,e,a)=>{a.d(e,{A:()=>s});var n=a(31601),i=a.n(n),o=a(76314),r=a.n(o)()(i());r.push([t.id,".sr-only[data-v-275d512e]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.icon[data-v-275d512e]{height:1.5em;width:1.5em}.icon.is-small[data-v-275d512e]{height:1em;width:1em}.icon.is-medium[data-v-275d512e]{height:2em;width:2em}.icon.is-large[data-v-275d512e]{height:3em;width:3em}@keyframes slide-menu-in-275d512e{from{-ms-transform:translate(-100%, 0);-webkit-transform:translate(-100%, 0);transform:translate(-100%, 0)}to{-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes slide-menu-out-275d512e{from{-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{-ms-transform:translate(-100%, 0);-webkit-transform:translate(-100%, 0);transform:translate(-100%, 0)}}@keyframes appear-275d512e{from{opacity:0;visibility:hidden}to{opacity:1;visibility:visible}}@keyframes disappear-275d512e{from{opacity:.3;visibility:visible}to{opacity:0;visibility:hidden}}.slide-menu-enter-active[data-v-275d512e]{animation-name:slide-menu-in-275d512e;animation-duration:.3s;animation-timing-function:ease-out}.slide-menu-enter-active .modal-background[data-v-275d512e]{animation-name:appear-275d512e;animation-duration:.6s;animation-timing-function:ease-out}.slide-menu-leave-active[data-v-275d512e]{animation-name:slide-menu-out-275d512e;animation-duration:.3s;animation-timing-function:ease-in}.slide-menu-leave-active .modal-background[data-v-275d512e]{opacity:0;animation-name:disappear-275d512e;animation-duration:.2s;animation-timing-function:ease-in}@keyframes appear-from-top-tooltip-275d512e{from{top:24px;opacity:0}to{top:48px;opacity:1}}@keyframes appear-from-top-275d512e{from{top:-48px}to{top:0px}}@keyframes appear-from-bottom-275d512e{from{bottom:-48px}to{bottom:-12px}}@keyframes expand-275d512e{from{max-height:0}to{max-height:222px}}@keyframes item-appear-275d512e{from{opacity:0;visibility:hidden;transform:translate(0, 12px)}to{opacity:1;visibility:visible;transform:translate(0, 0px)}}.item-appear-enter-active[data-v-275d512e]{animation-name:item-appear-275d512e;animation-duration:.2s;animation-timing-function:ease-out}.item-appear-leave-active[data-v-275d512e]{animation-name:item-appear-275d512e;animation-duration:.2s;animation-timing-function:ease-in;animation-direction:reverse}@keyframes filter-item-in-275d512e{from{opacity:0;height:0px;max-height:0px;min-height:0px;-ms-transform:translate(0%, -30%);-webkit-transform:translate(0%, -30%);transform:translate(0%, -30%)}to{height:35px;max-height:35px;min-height:35px;opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes filter-item-out-275d512e{from{height:35px;max-height:35px;min-height:35px;opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{height:0px;max-height:0px;min-height:0px;opacity:0;-ms-transform:translate(0%, -30%);-webkit-transform:translate(0%, -30%);transform:translate(0%, -30%)}}.filter-item-enter-active[data-v-275d512e]{overflow:hidden;animation-name:filter-item-in-275d512e;animation-duration:.1s;animation-timing-function:ease}.filter-item-leave-active[data-v-275d512e]{overflow:hidden;animation-name:filter-item-out-275d512e;animation-duration:.1s;animation-timing-function:ease}@keyframes form-collapse-in-275d512e{from{opacity:0;height:0px;max-height:0px;min-height:0px}to{height:300px;max-height:300px;min-height:300px;opacity:1}}@keyframes form-collapse-out-275d512e{from{height:300px;max-height:300px;min-height:300px}to{height:0px;max-height:0px;min-height:0px}}.form-collapse-enter-active[data-v-275d512e]{overflow:hidden;animation-name:form-collapse-in-275d512e;animation-duration:.2s;animation-timing-function:ease}.form-collapse-leave-active[data-v-275d512e]{overflow:hidden;animation-name:form-collapse-out-275d512e;animation-duration:.15s;animation-timing-function:ease}@keyframes form-capabilities-in-275d512e{from{opacity:0;height:0px;max-height:0px;min-height:0px}to{height:120px;max-height:120px;min-height:120px;opacity:1}}@keyframes form-capabilities-out-275d512e{from{height:120px;max-height:120px;min-height:120px}to{height:0px;max-height:0px;min-height:0px}}.form-capabilities-enter-active[data-v-275d512e]{overflow:hidden;animation-name:form-capabilities-in-275d512e;animation-duration:.2s;animation-timing-function:ease}.form-capabilities-leave-active[data-v-275d512e]{overflow:hidden;animation-name:form-capabilities-out-275d512e;animation-duration:.15s;animation-timing-function:ease}@keyframes filters-menu-in-275d512e{from{opacity:0;width:0px;max-width:0px;min-width:0px;-ms-transform:translate(-30%, 0%);-webkit-transform:translate(-30%, 0%);transform:translate(-30%, 0%)}to{height:180px;max-width:180px;min-width:180px;opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes filters-menu-out-275d512e{from{width:180px;max-width:180px;min-width:180px;opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{width:0px;max-width:0px;min-width:0px;opacity:0;-ms-transform:translate(-30%, 0%);-webkit-transform:translate(-30%, 0%);transform:translate(-30%, 0%)}}.filters-menu-enter-active[data-v-275d512e]{animation-name:filters-menu-in-275d512e;animation-duration:.2s;animation-timing-function:ease}.filters-menu-leave-active[data-v-275d512e]{animation-name:filters-menu-out-275d512e;animation-duration:.2s;animation-timing-function:ease}@keyframes panel-from-top-in-275d512e{from{opacity:.8;-ms-transform:translate(0%, -75%);-webkit-transform:translate(0%, -75%);transform:translate(0%, -75%)}to{opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes panel-from-top-out-275d512e{from{opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{opacity:.8;-ms-transform:translate(0%, -80%);-webkit-transform:translate(0%, -80%);transform:translate(0%, -80%)}}.panel-from-top-enter-active[data-v-275d512e]{animation-name:panel-from-top-in-275d512e;animation-duration:.3s;animation-timing-function:ease-in}.panel-from-top-leave-active[data-v-275d512e]{animation-name:panel-from-top-out-275d512e;animation-duration:.2s;animation-timing-function:ease-out}@keyframes slide-left-in-275d512e{from{opacity:0;-ms-transform:translate(-5%, 0%) scale(0.95);-webkit-transform:translate(-5%, 0%) scale(0.95);transform:translate(-5%, 0%) scale(0.95)}to{opacity:1;-ms-transform:translate(0, 0) scale(1);-webkit-transform:translate(0, 0) scale(1);transform:translate(0, 0) scale(1)}}@keyframes slide-left-out-275d512e{from{opacity:1;-ms-transform:translate(0, 0) scale(1);-webkit-transform:translate(0, 0) scale(1);transform:translate(0, 0) scale(1)}to{opacity:0;-ms-transform:translate(10%, 0%) scale(0.95);-webkit-transform:translate(10%, 0%) scale(0.95);transform:translate(10%, 0%) scale(0.95)}}.slide-left-enter-active[data-v-275d512e]{animation-name:slide-left-in-275d512e;animation-duration:.4s;animation-timing-function:ease}.slide-left-leave-active[data-v-275d512e]{animation-name:slide-left-out-275d512e;animation-duration:.4s;animation-timing-function:ease}@keyframes slide-right-in-275d512e{from{opacity:0;-ms-transform:translate(10%, 0%) scale(0.95);-webkit-transform:translate(10%, 0%) scale(0.95);transform:translate(10%, 0%) scale(0.95)}to{opacity:1;-ms-transform:translate(0, 0) scale(1);-webkit-transform:translate(0, 0) scale(1);transform:translate(0, 0) scale(1)}}@keyframes slide-right-out-275d512e{from{opacity:1;-ms-transform:translate(0, 0) scale(1);-webkit-transform:translate(0, 0) scale(1);transform:translate(0, 0) scale(1)}to{opacity:0;-ms-transform:translate(-5%, 0%) scale(0.95);-webkit-transform:translate(-5%, 0%) scale(0.95);transform:translate(-5%, 0%) scale(0.95)}}.slide-right-enter-active[data-v-275d512e]{animation-name:slide-right-in-275d512e;animation-duration:.3s;animation-timing-function:ease}.slide-right-leave-active[data-v-275d512e]{animation-name:slide-right-out-275d512e;animation-duration:.3s;animation-timing-function:ease}@keyframes page-left-in-275d512e{from{opacity:0;-ms-transform:translate(-5%, 0%);-webkit-transform:translate(-5%, 0%);transform:translate(-5%, 0%)}to{opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes page-left-out-275d512e{from{opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{opacity:0;-ms-transform:translate(10%, 0%);-webkit-transform:translate(10%, 0%);transform:translate(10%, 0%)}}.page-left-enter-active[data-v-275d512e]{animation-name:page-left-in-275d512e;animation-duration:.4s;animation-timing-function:ease}.page-left-leave-active[data-v-275d512e]{animation-name:page-left-out-275d512e;animation-duration:.4s;animation-timing-function:ease}@keyframes page-right-in-275d512e{from{opacity:0;-ms-transform:translate(10%, 0%);-webkit-transform:translate(10%, 0%);transform:translate(10%, 0%)}to{opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}}@keyframes page-right-out-275d512e{from{opacity:1;-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0)}to{opacity:0;-ms-transform:translate(-5%, 0%);-webkit-transform:translate(-5%, 0%);transform:translate(-5%, 0%)}}.page-right-enter-active[data-v-275d512e]{animation-name:page-right-in-275d512e;animation-duration:.3s;animation-timing-function:ease}.page-right-leave-active[data-v-275d512e]{animation-name:page-right-out-275d512e;animation-duration:.3s;animation-timing-function:ease}@-webkit-keyframes skeleton-animation-275d512e{0%{opacity:1}50%{opacity:.2}100%{opacity:1}}@-moz-keyframes skeleton-animation-275d512e{0%{opacity:1}50%{opacity:.2}100%{opacity:1}}@-o-keyframes skeleton-animation-275d512e{0%{opacity:1}50%{opacity:.2}100%{opacity:1}}@keyframes skeleton-animation-275d512e{0%{opacity:1}50%{opacity:.2}100%{opacity:1}}.skeleton[data-v-275d512e]{border-radius:2px;background:var(--tainacan-skeleton-color);-webkit-animation:skeleton-animation-275d512e 1.8s ease infinite;-moz-animation:skeleton-animation-275d512e 1.8s ease infinite;-o-animation:skeleton-animation-275d512e 1.8s ease infinite;animation:skeleton-animation-275d512e 1.8s ease infinite}@keyframes metadatum-highlight-275d512e{from{background-color:var(--tainacan-primary1)}to{background-color:var(--tainacan-white)}}.page-container>.tainacan-form[data-v-275d512e]{margin-bottom:56px}.page-container .tainacan-page-title[data-v-275d512e]{margin-bottom:28px;display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between}.page-container .tainacan-page-title h1[data-v-275d512e],.page-container .tainacan-page-title h2[data-v-275d512e]{font-size:1.25em;font-weight:500;color:var(--tainacan-heading-color);display:inline-block;flex-shrink:1;flex-grow:1}.page-container .tainacan-page-title a.back-link[data-v-275d512e]{font-weight:500;float:right;margin-top:5px}.page-container .tainacan-page-title hr[data-v-275d512e]{margin:3px 0px 4px 0px;height:1px;background-color:var(--tainacan-secondary);width:100%}.page-container .source-file-upload[data-v-275d512e]{width:100%;padding:.75em var(--tainacan-one-column);flex-wrap:wrap;display:flex;display:-ms-grid;display:grid}.page-container .document-list[data-v-275d512e]{display:inline-block;width:100%;padding:1em calc(2*var(--tainacan-one-column))}.page-container .document-list .document-item[data-v-275d512e]{display:flex;flex-wrap:nowrap;width:100%;justify-content:space-between;align-items:center;padding:.5em .75em;position:relative;cursor:default}.page-container .document-list .document-item .document-thumb[data-v-275d512e]{max-height:42px;max-width:42px;margin-right:1em}.page-container .document-list .document-item .document-name[data-v-275d512e]{text-overflow:ellipsis;overflow:hidden;width:100%;white-space:nowrap}.page-container .document-list .document-item .document-process-state[data-v-275d512e]{margin-left:auto}.page-container .document-list .document-item .document-process-state .loading-icon .control.is-loading[data-v-275d512e]::after{position:relative !important;right:0;top:0}.page-container .document-list .document-item .document-actions[data-v-275d512e]{position:absolute;right:0;background:var(--tainacan-gray2);height:100%;display:none;justify-content:center;visibility:hidden;align-items:center;width:42px}.page-container .document-list .document-item .document-actions .icon[data-v-275d512e]{cursor:pointer}.page-container .document-list .document-item[data-v-275d512e]:hover{background-color:var(--tainacan-gray1)}.page-container .document-list .document-item:hover .document-actions[data-v-275d512e]{display:flex;visibility:visible}.page-container .document-list .document-item .help.is-danger[data-v-275d512e]{margin-left:auto;width:100%;text-align:right}.page-container .document-list .sequence-progress-info[data-v-275d512e]{display:flex;justify-content:space-between;margin-bottom:.25em}.page-container .document-list .sequence-progress-info .i[data-v-275d512e]::before{font-size:1.125em;margin-left:.5em}.page-container .document-list .sequence-progress[data-v-275d512e]{height:5px;background:var(--tainacan-turquoise5);width:0%;transition:width .2s;margin-bottom:1em}.page-container .document-list .sequence-progress-background[data-v-275d512e]{height:5px;background:var(--tainacan-gray3);width:100%;top:-21px;z-index:-1;position:relative;margin-bottom:1em}.page-container .footer[data-v-275d512e]{padding:14px var(--tainacan-one-column);position:absolute;bottom:0;z-index:999999;background-color:var(--tainacan-gray1);width:100%;height:60px;display:flex;justify-content:flex-end;align-items:center;left:0}.page-container .footer .form-submission-footer .button[data-v-275d512e]{margin-left:16px;margin-right:6px}",""]);const s=r}}]);