"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[6995],{19:(e,t,a)=>{a.d(t,{A:()=>r.A});var r=a(83300)},19376:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var r=a(71605),i=a(19);a(68457);const n=(0,a(66262).A)(i.A,[["render",r.X],["__scopeId","data-v-5c5f896e"]])},20610:(e,t,a)=>{a.d(t,{X:()=>j});var r=a(6934),i={class:"tainacan-page-title tainacan-modal-title"},n={style:{width:"60%"}},o=["href"],s={class:"menu-text"},m={class:"modal-card-body"},l={class:"label is-inline"},d=["innerHTML"],c={class:"columns is-gapless image-and-description-area"},h={class:"column"},p={class:"thumbnail-field"},f={class:"image"},u={key:0,class:"image-placeholder"},g=["alt","src"],b={class:"thumbnail-buttons-row"},_=["aria-label"],v={class:"icon is-small"},w=["aria-label"],y={class:"icon is-small"},x={class:"column"},E={class:"label"},k={class:"label is-inline"},F={class:"media"},T={key:0,class:"media-left"},P=["src"],I={class:"media-content"},S=["innerHTML"],C={class:"field is-grouped form-submit"},L={class:"control"},$={class:"control"},O={class:"button is-success",type:"submit"};function j(e,t,a,j,A,V){var M=(0,r.g2)("b-loading"),z=(0,r.g2)("help-button"),N=(0,r.g2)("b-input"),W=(0,r.g2)("b-field"),X=(0,r.g2)("b-switch"),D=(0,r.g2)("b-autocomplete"),H=(0,r.gN)("tooltip");return(0,r.uX)(),(0,r.CE)("form",{id:"termEditForm",autofocus:"",role:"dialog",tabindex:"-1","aria-modal":"",class:"tainacan-form tainacan-modal-content",onSubmit:t[13]||(t[13]=(0,r.D$)((function(e){return V.saveEdition(A.form)}),["prevent"]))},[(0,r.Lk)("header",i,[(0,r.Lk)("h2",n,(0,r.v_)(A.form&A.form.id&&"new"!=A.form.id?e.$i18n.get("title_term_edit"):e.$i18n.get("title_term_creation")),1),A.form&&null!=A.form.url&&""!=A.form.url?((0,r.uX)(),(0,r.CE)("a",{key:0,target:"_blank",href:A.form.url},[t[14]||(t[14]=(0,r.Lk)("span",{class:"icon"},[(0,r.Lk)("i",{class:"tainacan-icon tainacan-icon-1-25em tainacan-icon-openurl"})],-1)),(0,r.Lk)("span",s,(0,r.v_)(e.$i18n.get("label_term_page_on_website")),1)],8,o)):(0,r.Q3)("",!0),t[15]||(t[15]=(0,r.Lk)("hr",null,null,-1))]),(0,r.Lk)("div",m,[(0,r.bF)(M,{modelValue:A.isLoading,"onUpdate:modelValue":t[0]||(t[0]=function(e){return A.isLoading=e}),"is-full-page":!1},null,8,["modelValue"]),(0,r.bF)(W,{addons:!1,type:""===A.formErrors.name&&""===A.formErrors.repeated||void 0===A.formErrors.name&&void 0===A.formErrors.repeated?"":"is-danger",message:A.formErrors.name?A.formErrors.name:A.formErrors.repeated},{default:(0,r.k6)((function(){return[(0,r.Lk)("label",l,[(0,r.eW)((0,r.v_)(e.$i18n.get("label_name"))+" ",1),t[16]||(t[16]=(0,r.Lk)("span",{class:"required-term-asterisk"},"*",-1)),(0,r.bF)(z,{title:e.$i18n.get("label_name"),message:e.$i18n.get("info_help_term_name"),"extra-classes":"tainacan-repository-tooltip"},null,8,["title","message"])]),(0,r.bF)(N,{modelValue:A.form.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return A.form.name=e}),placeholder:e.$i18n.get("label_term_without_name"),name:"name",onFocus:t[2]||(t[2]=function(e){return V.clearErrors({name:"name",repeated:"repeated"})})},null,8,["modelValue","placeholder"])]})),_:1},8,["type","message"]),e.hasBeginLeftForm?((0,r.uX)(),(0,r.CE)("form",{key:0,id:"form-term-begin-left",class:"form-hook-region",innerHTML:e.getBeginLeftForm},null,8,d)):(0,r.Q3)("",!0),(0,r.Lk)("div",c,[(0,r.Lk)("div",h,[(0,r.bF)(W,{addons:!1,label:e.$i18n.get("label_image")},{default:(0,r.k6)((function(){return[(0,r.Lk)("div",p,[(0,r.Lk)("figure",f,[void 0===A.form.header_image||!1===A.form.header_image?((0,r.uX)(),(0,r.CE)("span",u,(0,r.v_)(e.$i18n.get("label_empty_term_image")),1)):(0,r.Q3)("",!0),(0,r.Lk)("img",{alt:e.$i18n.get("label_image"),src:void 0===A.form.header_image||!1===A.form.header_image?e.$thumbHelper.getEmptyThumbnailPlaceholder():A.form.header_image},null,8,g)]),(0,r.Lk)("div",b,[(0,r.Lk)("a",{id:"button-edit-header",class:"button is-rounded is-secondary","aria-label":e.$i18n.get("label_button_edit_header_image"),onClick:t[3]||(t[3]=function(e){return A.headerImageMediaFrame.openFrame(e)})},[(0,r.bo)(((0,r.uX)(),(0,r.CE)("span",v,t[17]||(t[17]=[(0,r.Lk)("i",{class:"tainacan-icon tainacan-icon-edit"},null,-1)]))),[[H,{content:e.$i18n.get("edit"),autoHide:!0,popperClass:["tainacan-tooltip","tooltip","tainacan-repository-tooltip"],placement:"bottom"}]])],8,_),(0,r.Lk)("a",{id:"button-delete-header",class:"button is-rounded is-secondary","aria-label":e.$i18n.get("label_button_delete_thumb"),onClick:t[4]||(t[4]=function(e){return V.deleteHeaderImage()})},[(0,r.bo)(((0,r.uX)(),(0,r.CE)("span",y,t[18]||(t[18]=[(0,r.Lk)("i",{class:"tainacan-icon tainacan-icon-delete"},null,-1)]))),[[H,{content:e.$i18n.get("delete"),autoHide:!0,popperClass:["tainacan-tooltip","tooltip","tainacan-repository-tooltip"],placement:"bottom"}]])],8,w)])])]})),_:1},8,["label"])]),(0,r.Lk)("div",x,[(0,r.bF)(W,{addons:!1,type:""!==A.formErrors.description&&void 0!==A.formErrors.description?"is-danger":"",message:A.formErrors.description},{default:(0,r.k6)((function(){return[(0,r.Lk)("label",E,[(0,r.eW)((0,r.v_)(e.$i18n.get("label_description"))+" ",1),(0,r.bF)(z,{title:e.$i18n.get("label_description"),message:e.$i18n.get("info_help_term_description"),"extra-classes":"tainacan-repository-tooltip"},null,8,["title","message"])]),(0,r.bF)(N,{modelValue:A.form.description,"onUpdate:modelValue":t[5]||(t[5]=function(e){return A.form.description=e}),type:"textarea",name:"description",onFocus:t[6]||(t[6]=function(e){return V.clearErrors("description")})},null,8,["modelValue"])]})),_:1},8,["type","message"])])]),a.isHierarchical?((0,r.uX)(),(0,r.Wv)(W,{key:1,addons:!1,type:""===A.formErrors.parent&&""===A.formErrors.repeated||void 0===A.formErrors.parent&&void 0===A.formErrors.repeated?"":"is-danger",message:A.formErrors.parent?A.formErrors:A.formErrors.repeated},{default:(0,r.k6)((function(){return[(0,r.Lk)("label",k,[(0,r.eW)((0,r.v_)(e.$i18n.get("label_parent_term"))+" ",1),(0,r.bF)(X,{id:"tainacan-checkbox-has-parent",modelValue:A.hasParent,"onUpdate:modelValue":[t[7]||(t[7]=function(e){return A.hasParent=e}),t[8]||(t[8]=function(e){return V.onToggleSwitch()})],size:"is-small"},null,8,["modelValue"]),(0,r.bF)(z,{title:e.$i18n.get("label_parent_term"),message:e.$i18n.get("info_help_parent_term"),"extra-classes":"tainacan-repository-tooltip"},null,8,["title","message"])]),(0,r.bF)(D,{id:"tainacan-add-parent-field",modelValue:A.parentTermName,"onUpdate:modelValue":[t[9]||(t[9]=function(e){return A.parentTermName=e}),V.fetchParentTerms],placeholder:e.$i18n.get("instruction_parent_term"),data:A.parentTerms,field:"name",clearable:"",loading:A.isFetchingParentTerms,disabled:!A.hasParent,"append-to-body":!0,"check-infinite-scroll":"",onSelect:t[10]||(t[10]=function(e){return V.onSelectParentTerm(e)}),onFocus:t[11]||(t[11]=function(e){V.clearErrors("parent")}),onInfiniteScroll:V.fetchMoreParentTerms},{default:(0,r.k6)((function(e){return[(0,r.Lk)("div",F,[e.option.header_image?((0,r.uX)(),(0,r.CE)("div",T,[(0,r.Lk)("img",{width:"28",src:e.option.header_image},null,8,P)])):(0,r.Q3)("",!0),(0,r.Lk)("div",I,(0,r.v_)(e.option.name),1)])]})),empty:(0,r.k6)((function(){return[(0,r.eW)((0,r.v_)(e.$i18n.get("info_no_parent_term_found")),1)]})),_:1},8,["modelValue","placeholder","data","loading","disabled","onUpdate:modelValue","onInfiniteScroll"]),(0,r.bF)(r.eB,{name:"fade"},{default:(0,r.k6)((function(){return[(0,r.bo)((0,r.Lk)("p",{class:"checkboxes-warning"},(0,r.v_)(e.$i18n.get("info_warning_changing_parent_term")),513),[[r.aG,1!=a.isTermInsertionFlow&&1==A.showCheckboxesWarning]])]})),_:1})]})),_:1},8,["type","message"])):(0,r.Q3)("",!0),e.hasEndLeftForm?((0,r.uX)(),(0,r.CE)("form",{key:2,id:"form-term-end-left",class:"form-hook-region",innerHTML:e.getEndLeftForm},null,8,S)):(0,r.Q3)("",!0),(0,r.Lk)("div",C,[(0,r.Lk)("div",L,[(0,r.Lk)("button",{type:"button",class:"button is-outlined",onClick:t[12]||(t[12]=(0,r.D$)((function(e){return V.cancelEdition()}),["prevent"]))},(0,r.v_)(e.$i18n.get("cancel")),1)]),(0,r.Lk)("div",$,[(0,r.Lk)("button",O,(0,r.v_)(a.isTermInsertionFlow?e.$i18n.get("label_create_and_select"):e.$i18n.get("save")),1)])])])],32)}},68457:(e,t,a)=>{a(75856)},71605:(e,t,a)=>{a.d(t,{X:()=>r.X});var r=a(20610)},75856:(e,t,a)=>{var r=a(85072),i=a.n(r),n=a(97825),o=a.n(n),s=a(77659),m=a.n(s),l=a(55056),d=a.n(l),c=a(10540),h=a.n(c),p=a(63494),f=a.n(p),u=a(87453),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=m().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=h();i()(u.A,g),u.A&&u.A.locals&&u.A.locals},82933:(e,t,a)=>{a.d(t,{A:()=>r});const r={attachmentControl:wp.customize.MediaControl.extend({initFrame:function(){var e=this;wp.media.view.settings.post={id:parseInt(this.params.relatedPostId),wp_customize:"off"},wp.media.model.settings.post.nonce=this.params.nonce,wp.media.model.settings.post.id=parseInt(this.params.relatedPostId),this.frame=wp.media({button:{text:this.params.button_labels.frame_button},states:[new wp.media.controller.Library({title:this.params.button_labels.frame_title,library:wp.media.query({uploadedTo:wp.media.view.settings.post.id,orderby:"menuOrder",order:"ASC",posts_per_page:-1,query:!0}),autoSelect:!0,sortable:!0,filterable:!1})]}).open(),this.frame.$el.addClass("tainacan-item-attachments-modal"),this.frame.$el["tainacan-document-id"]=this.params.document,this.frame.$el["tainacan-thumbnail-id"]=this.params.thumbnailId,wp.media.view.Attachment.Library=wp.media.view.Attachment.Library.extend({className:function(){return"attachment "+(this.controller.$el["tainacan-document-id"]&&this.model.get("id")==this.controller.$el["tainacan-document-id"]?"tainacan-document-attachment ":" ")+(this.controller.$el["tainacan-thumbnail-id"]&&this.model.get("id")==this.controller.$el["tainacan-thumbnail-id"]?"tainacan-thumbnail-attachment ":" ")}}),this.frame.on("select",(function(){var t=e.frame.state().get("selection").toJSON();wp.media.view.settings.post.id={id:e.params.relatedPostId},e.params.attachments=t,e.params.onSave(t)}))}}),thumbnailControl:wp.customize.CroppedImageControl.extend({initFrame:function(){var e=wp.media.view.l10n="undefined"==typeof _wpMediaViewsL10n?{}:_wpMediaViewsL10n,t=wp.media.controller.Cropper.extend({doCrop:function(e){var t=e.get("cropDetails"),a=this.get("control"),r=t.width/t.height;return a.params.flex_width&&a.params.flex_height?(t.dst_width=t.width,t.dst_height=t.height):(t.dst_width=a.params.flex_width?a.params.height*r:a.params.width,t.dst_height=a.params.flex_height?a.params.width/r:a.params.height),wp.ajax.post("crop-image",{wp_customize:"off",nonce:e.get("nonces").edit,id:e.get("id"),context:a.id,cropDetails:t})}});wp.media.view.settings.post={id:null},this.params.flex_width=1,this.params.flex_height=1,this.params.width=220,this.params.height=220,this.frame=wp.media({frame:"select",button:{text:e.select,close:!1},uploader:!0,content:"upload",autoSelect:!0,states:[new wp.media.controller.Library({title:this.params.button_labels.frame_title,library:wp.media.query({type:"image"}),multiple:!1,autoSelect:!0,date:!1,priority:20,suggestedWidth:this.params.width,suggestedHeight:this.params.height,uploadedTo:this.params.relatedPostId}),new t({imgSelectOptions:this.calculateImageSelectOptions,control:this})]}).open(),this.frame.$el.addClass("tainacan-thumbnail-modal"),this.frame.on("select",this.onSelect,this),this.frame.on("cropped",this.onCropped,this),this.frame.on("skippedcrop",this.onSkippedCrop,this)},setImageFromAttachment:function(e){wp.media.view.settings.post.id={id:this.params.relatedPostId},this.params.attachments=e,this.params.onSave(e)}}),headerImageControl:wp.customize.CroppedImageControl.extend({initFrame:function(){var e=wp.media.view.l10n="undefined"==typeof _wpMediaViewsL10n?{}:_wpMediaViewsL10n,t=wp.media.controller.Cropper.extend({doCrop:function(e){var t=e.get("cropDetails"),a=this.get("control"),r=t.width/t.height;return a.params.flex_width&&a.params.flex_height?(t.dst_width=t.width,t.dst_height=t.height):(t.dst_width=a.params.flex_width?a.params.height*r:a.params.width,t.dst_height=a.params.flex_height?a.params.width/r:a.params.height),wp.ajax.post("crop-image",{wp_customize:"off",nonce:e.get("nonces").edit,id:e.get("id"),context:a.id,cropDetails:t})}});wp.media.view.settings.post={id:null},null!=tainacan_plugin.custom_header_support[0]?(this.params.flex_width=tainacan_plugin.custom_header_support[0].flex_width?1:0,this.params.flex_height=tainacan_plugin.custom_header_support[0].flex_height?1:0,this.params.width=tainacan_plugin.custom_header_support[0].width,this.params.height=tainacan_plugin.custom_header_support[0].height):(this.params.flex_width=!0,this.params.flex_height=!0,this.params.width=2e3,this.params.height=625),this.frame=wp.media({frame:"select",button:{text:e.select,close:!1},library:wp.media.query({type:"image",uploadedTo:null}),uploader:!0,content:"upload",states:[new wp.media.controller.Library({title:this.params.button_labels.frame_title,library:wp.media.query({type:"image",uploadedTo:null}),multiple:!1,date:!1,priority:20,suggestedWidth:this.params.width,suggestedHeight:this.params.height}),new t({imgSelectOptions:this.calculateImageSelectOptions,control:this})]}).open(),this.frame.$el.addClass("tainacan-header-image-modal"),this.frame.on("select",this.onSelect,this),this.frame.on("cropped",this.onCropped,this),this.frame.on("skippedcrop",this.onSkippedCrop,this)},setImageFromAttachment:function(e){this.params.attachment=e,this.params.onSave(e)}}),documentFileControl:wp.customize.MediaControl.extend({initFrame:function(){var e=this;wp.media.view.settings.post={id:parseInt(this.params.relatedPostId),wp_customize:"off"},wp.media.model.settings.post.nonce=this.params.nonce,wp.media.model.settings.post.id=parseInt(this.params.relatedPostId),this.frame=wp.media({button:{text:this.params.button_labels.frame_button},content:"upload",states:[new wp.media.controller.Library({title:this.params.button_labels.frame_title,library:wp.media.query({uploadedTo:wp.media.view.settings.post.id,orderby:"menuOrder",order:"ASC",posts_per_page:-1,query:!0}),autoSelect:!0,multiple:!1,date:!1,sortable:!0,filterable:"unattached",uploadedTo:this.params.relatedPostId})]}).open(),this.frame.$el.addClass("tainacan-document-modal"),this.frame.on("select",(function(){var t,a,r=window._wpmejsSettings||{};a=e.frame.state().get("selection").first().toJSON(),e.params.attachment=a,e.params.onSave(a),(t=e.container.find("audio, video").get(0))?e.player=new MediaElementPlayer(t,r):e.cleanupPlayer()}))}})}},83300:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(6934),i=a(74042),n=a(40834),o=a(82933);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function m(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return l(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var _n=0,r=function(){};return{s:r,n:function(){return _n>=e.length?{done:!0}:{done:!1,value:e[_n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,n=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return n=e.done,e},e:function(e){o=!0,i=e},f:function(){try{n||null==a.return||a.return()}finally{if(o)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t,a){return(t=function(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const p={name:"TermEditionForm",mixins:[i.X3],props:{originalForm:Object,taxonomyId:"",isHierarchical:Boolean,isTermInsertionFlow:!1,metadatumId:[String,Number],itemId:[String,Number]},emits:["on-edition-finished","close"],data:function(){return{formErrors:{},headerImageMediaFrame:void 0,isFetchingParentTerms:!1,parentTerms:[],parentTermName:"",showCheckboxesWarning:!1,hasParent:!1,hasChangedParent:!1,initialParentId:void 0,entityName:"term",isLoading:!1,parentTermSearchQuery:"",parentTermSearchOffset:0,form:{},totalTerms:void 0}},created:function(){this.form=JSON.parse(JSON.stringify(this.originalForm))},mounted:function(){var e=this;(0,r.dY)().then((function(){e.updateExtraFormData(e.form),document.getElementById("termEditForm").scrollIntoView({behavior:"smooth"})})),this.showCheckboxesWarning=!1,this.hasParent=null!=this.form.parent&&this.form.parent>0,this.initialParentId=this.form.parent,this.initializeMediaFrames(),this.hasParent&&(this.isFetchingParentTerms=!0,this.showCheckboxesWarning=!1,this.fetchParentName({taxonomyId:this.taxonomyId,parentId:this.form.parent}).then((function(t){e.parentTermName=t,e.isFetchingParentTerms=!1,e.showCheckboxesWarning=!1})).catch((function(t){e.$console.error(t),e.isFetchingParentTerms=!1,e.showCheckboxesWarning=!1})))},methods:c(c({},(0,n.i0)("taxonomy",["sendChildTerm","updateTerm","fetchParentName","fetchPossibleParentTerms"])),{},{saveEdition:function(e){var t=this;if("new"===e.id){var a={name:this.form.name,description:this.form.description,parent:this.hasParent?this.form.parent:0,header_image_id:this.form.header_image_id,header_image:this.form.header_image};this.fillExtraFormData(a),this.isLoading=!0,this.sendChildTerm({taxonomyId:this.taxonomyId,term:a,metadatumId:this.metadatumId,itemId:this.itemId}).then((function(e){t.$emit("on-edition-finished",{term:e,hasChangedParent:t.hasChangedParent,initialParent:t.initialParentId}),t.form={},t.formErrors={},t.isLoading=!1,t.$emit("close")})).catch((function(e){t.isLoading=!1;var a,r=m(e.errors);try{for(r.s();!(a=r.n()).done;)for(var i=a.value,n=0,o=Object.keys(i);n<o.length;n++){var s=o[n];Object.assign(t.formErrors,h({},s,(void 0!==t.formErrors[s]?t.formErrors[s]:"")+i[s]+"\n"))}}catch(e){r.e(e)}finally{r.f()}}))}else{var r={id:this.form.id,name:this.form.name,description:this.form.description,parent:this.hasParent?this.form.parent:0,header_image_id:this.form.header_image_id,header_image:this.form.header_image,total_children:this.form.total_children?this.form.total_children:0};this.fillExtraFormData(r),this.isLoading=!0,this.updateTerm({taxonomyId:this.taxonomyId,term:r,metadatumId:this.metadatumId,itemId:this.itemId}).then((function(e){t.formErrors={},t.$emit("on-edition-finished",{term:e,hasChangedParent:t.hasChangedParent,initialParent:t.initialParentId}),t.$emit("close")})).catch((function(e){var a,r=m(e.errors);try{for(r.s();!(a=r.n()).done;)for(var i=a.value,n=0,o=Object.keys(i);n<o.length;n++){var s=o[n];Object.assign(t.formErrors,h({},s,(void 0!==t.formErrors[s]?t.formErrors[s]:"")+i[s]+"\n"))}}catch(e){r.e(e)}finally{r.f()}t.isLoading=!1}))}},cancelEdition:function(){this.$emit("close")},deleteHeaderImage:function(){this.form=Object.assign({},this.form,{header_image_id:"0",header_image:!1})},initializeMediaFrames:function(){var e=this;this.headerImageMediaFrame=new o.A.thumbnailControl("my-thumbnail-image-media-frame",{button_labels:{frame_title:this.$i18n.get("instruction_select_term_header_image"),frame_button:this.$i18n.get("label_select_file")},relatedPostId:this.form.id,onSave:function(t){e.form=Object.assign({},e.form,{header_image_id:t.id.toString(),header_image:t.url})}})},clearErrors:function(e){if(e instanceof Object)for(var t in e)this.formErrors[t]=void 0;else this.formErrors[e]=void 0},fetchParentTerms:_.debounce((function(e){var t=this;e!=this.parentTermSearchQuery&&(this.parentTermSearchQuery=e,this.parentTerms=[],this.parentTermSearchOffset=0),e.length||(this.parentTermSearchQuery=e,this.parentTerms=[],this.parentTermSearchOffset=0),this.parentTermSearchOffset>0&&void 0!==this.totalTerms&&this.parentTerms.length>=this.totalTerms||(this.isFetchingParentTerms=!0,this.fetchPossibleParentTerms({taxonomyId:this.taxonomyId,termId:this.form.id,search:this.parentTermSearchQuery,offset:this.parentTermSearchOffset}).then((function(e){var a,r=m(e.parentTerms);try{for(r.s();!(a=r.n()).done;){var i=a.value;t.parentTerms.push(i)}}catch(e){r.e(e)}finally{r.f()}t.parentTermSearchOffset+=12,t.totalTerms=e.totalTerms,t.isFetchingParentTerms=!1})).catch((function(e){t.$console.error(e),t.isFetchingParentTerms=!1})))}),500),fetchMoreParentTerms:_.debounce((function(){this.fetchParentTerms(this.parentTermSearchQuery)}),250),onToggleSwitch:function(){0==this.form.parent?this.hasChangedParent=this.hasParent:this.hasChangedParent=!this.hasParent,this.showCheckboxesWarning=!0,this.clearErrors("parent")},onSelectParentTerm:function(e){e&&(this.hasChangedParent=this.initialParentId!=e.id,this.form.parent=e.id,this.selectedParentTerm=e,this.parentTermName=e.name,this.showCheckboxesWarning=!0)}})}},87453:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(31601),i=a.n(r),n=a(76314),o=a.n(n)()(i());o.push([e.id,".column[data-v-5c5f896e]{padding:0}.column.is-narrow[data-v-5c5f896e]{padding-right:42px}@keyframes enter-5c5f896e{from{opacity:0;transform:translate(-40px, 0)}to{opacity:1;transform:translate(0px, 0)}}form#termEditForm[data-v-5c5f896e]:not(.tainacan-modal-content){padding:1.7em 0 1.5em 1.5em;border-left:1px solid var(--tainacan-gray2);margin-left:.75em;position:relative;animation-name:enter-5c5f896e;animation-duration:.5s}form#termEditForm.tainacan-modal-content[data-v-5c5f896e]{overflow:hidden}form#termEditForm.tainacan-modal-content .field[data-v-5c5f896e]{padding-left:0;margin-left:0}form#termEditForm.tainacan-modal-content .tainacan-modal-title[data-v-5c5f896e]{margin:0;padding:0 12px}form#termEditForm.tainacan-modal-content .thumbnail-field[data-v-5c5f896e]{max-width:120px}form#termEditForm.tainacan-modal-content .image-placeholder[data-v-5c5f896e]{left:2px}form#termEditForm .tainacan-page-title[data-v-5c5f896e]{margin-bottom:28px;display:flex;flex-wrap:wrap;align-items:baseline}form#termEditForm .tainacan-page-title h2[data-v-5c5f896e]{font-size:1.25em;font-weight:500;color:var(--tainacan-blue5);display:inline-block;margin-right:auto}form#termEditForm .tainacan-page-title hr[data-v-5c5f896e]{margin:3px 0px 4px 0px;width:100%;height:1px;background-color:var(--tainacan-secondary)}form#termEditForm .image-and-description-area[data-v-5c5f896e]{margin-bottom:0px}form#termEditForm .image-and-description-area .column[data-v-5c5f896e]:first-of-type{margin-right:24px}form#termEditForm .image-and-description-area .column[data-v-5c5f896e]:last-of-type{flex-grow:2}form#termEditForm .thumbnail-field .content[data-v-5c5f896e]{padding:10px;font-size:.8em}form#termEditForm .thumbnail-field img[data-v-5c5f896e]{position:relative}form#termEditForm .thumbnail-field .image-placeholder[data-v-5c5f896e]{position:absolute;margin-left:auto;margin-right:auto;width:100%;top:35%;padding:0 8px;font-size:95%;font-weight:bold;z-index:99;text-align:center;color:var(--tainacan-info-color);background-color:rgba(0,0,0,0)}form#termEditForm .thumbnail-field #button-delete-header[data-v-5c5f896e],form#termEditForm .thumbnail-field #button-edit-header[data-v-5c5f896e]{border-radius:100px !important;max-height:2.125em !important;max-width:2.125em !important;min-height:2.125em !important;min-width:2.125em !important;padding:0 !important;z-index:99;margin-left:10px !important}form#termEditForm .thumbnail-field #button-delete-header .icon[data-v-5c5f896e],form#termEditForm .thumbnail-field #button-edit-header .icon[data-v-5c5f896e]{color:var(--tainacan-white) !important;display:inherit;padding:0;margin:0;margin-top:-2px;font-size:1.125em}form#termEditForm .thumbnail-field .thumbnail-buttons-row[data-v-5c5f896e]{text-align:right;top:-0.9375em;position:relative}form#termEditForm .checkboxes-warning[data-v-5c5f896e]{color:var(--tainacan-gray5);font-style:italic;padding:.2em .75em}",""]);const s=o}}]);