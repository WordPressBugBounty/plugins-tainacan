"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[4109],{10540:l=>{l.exports=function(l){var t=document.createElement("style");return l.setAttributes(t,l.attributes),l.insert(t,l.options),t}},23282:(l,t,i)=>{i.r(t),i.d(t,{default:()=>o});i(82325);const o=function(){}},31601:l=>{l.exports=function(l){return l[1]}},55056:(l,t,i)=>{l.exports=function(l){var t=i.nc;t&&l.setAttribute("nonce",t)}},63494:l=>{l.exports=function(l,t){if(t.styleSheet)t.styleSheet.cssText=l;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(l))}}},76314:l=>{l.exports=function(l){var t=[];return t.toString=function(){return this.map((function(t){var i="",o=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),o&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=l(t),o&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(l,i,o,c,n){"string"==typeof l&&(l=[[null,l,void 0]]);var e={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(e[s]=!0)}for(var r=0;r<l.length;r++){var p=[].concat(l[r]);o&&e[p[0]]||(void 0!==n&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=n),i&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=i):p[2]=i),c&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=c):p[4]="".concat(c)),t.push(p))}},t}},77659:l=>{var t={};l.exports=function(l,i){var o=function(l){if(void 0===t[l]){var i=document.querySelector(l);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(l){i=null}t[l]=i}return t[l]}(l);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(i)}},82325:(l,t,i)=>{var o=i(85072),c=i.n(o),n=i(97825),e=i.n(n),a=i(77659),s=i.n(a),r=i(55056),p=i.n(r),u=i(10540),d=i.n(u),m=i(63494),b=i.n(m),w=i(99368),g={};g.styleTagTransform=b(),g.setAttributes=p(),g.insert=s().bind(null,"head"),g.domAPI=e(),g.insertStyleElement=d();c()(w.A,g),w.A&&w.A.locals&&w.A.locals},85072:l=>{var t=[];function i(l){for(var i=-1,o=0;o<t.length;o++)if(t[o].identifier===l){i=o;break}return i}function o(l,o){for(var n={},e=[],a=0;a<l.length;a++){var s=l[a],r=o.base?s[0]+o.base:s[0],p=n[r]||0,u="".concat(r," ").concat(p);n[r]=p+1;var d=i(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(m);else{var b=c(m,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:b,references:1})}e.push(u)}return e}function c(l,t){var i=t.domAPI(t);i.update(l);return function(t){if(t){if(t.css===l.css&&t.media===l.media&&t.sourceMap===l.sourceMap&&t.supports===l.supports&&t.layer===l.layer)return;i.update(l=t)}else i.remove()}}l.exports=function(l,c){var n=o(l=l||[],c=c||{});return function(l){l=l||[];for(var e=0;e<n.length;e++){var a=i(n[e]);t[a].references--}for(var s=o(l,c),r=0;r<n.length;r++){var p=i(n[r]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}n=s}}},97825:l=>{l.exports=function(l){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=l.insertStyleElement(l);return{update:function(i){!function(l,t,i){var o="";i.supports&&(o+="@supports (".concat(i.supports,") {")),i.media&&(o+="@media ".concat(i.media," {"));var c=void 0!==i.layer;c&&(o+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),o+=i.css,c&&(o+="}"),i.media&&(o+="}"),i.supports&&(o+="}");var n=i.sourceMap;n&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(o,l,t.options)}(t,l,i)},remove:function(){!function(l){if(null===l.parentNode)return!1;l.parentNode.removeChild(l)}(t)}}}},99368:(l,t,i)=>{i.d(t,{A:()=>a});var o=i(31601),c=i.n(o),n=i(76314),e=i.n(n)()(c());e.push([l.id,".sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.wp-block-tainacan-collections-list{margin:2em auto}.wp-block-tainacan-collections-list .components-spinner{position:absolute;right:0}.wp-block-tainacan-collections-list ul.collections-list li.collection-list-item>button,.wp-block-tainacan-collections-list ul.collections-list li.collection-list-item>button:hover{display:none;visibility:hidden;opacity:0}.wp-block-tainacan-collections-list ul.collections-list.collections-list-without-margin,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-list-without-margin{grid-template-columns:repeat(auto-fill, 185px);justify-content:center !important;grid-template-rows:auto !important}.wp-block-tainacan-collections-list ul.collections-list.collections-list-without-margin li,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-list-without-margin li{margin-top:0 !important;margin-right:0 !important;margin-left:0 !important;height:185px !important}.wp-block-tainacan-collections-list ul.collections-list.collections-list-without-margin li img,.wp-block-tainacan-collections-list ul.collections-list.collections-list-without-margin li canvas,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-list-without-margin li img,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-list-without-margin li canvas{height:185px !important;margin-bottom:0px !important}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-grid,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-grid{padding:0;flex-wrap:wrap;display:flex;display:-ms-grid;display:grid;-ms-grid-columns:220px 220px 220px 220px 220px;grid-template-columns:repeat(auto-fill, 220px);grid-gap:0px;justify-content:space-evenly;list-style-type:none}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-grid li.collection-list-item,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-grid li.collection-list-item{position:relative;display:block;margin:12px 12px 24px 12px;margin-bottom:12px;width:185px}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-grid li.collection-list-item a,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-grid li.collection-list-item a{color:inherit;border:none;font-weight:bold;line-height:normal;display:block}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-grid li.collection-list-item img,.wp-block-tainacan-collections-list ul.collections-list.collections-layout-grid li.collection-list-item canvas,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-grid li.collection-list-item img,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-grid li.collection-list-item canvas{height:auto;width:185px;min-width:185px;padding:0px;margin-bottom:.5em}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-grid li.collection-list-item a.collection-without-name span,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-grid li.collection-list-item a.collection-without-name span{display:none}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-grid li.collection-list-item a,.wp-block-tainacan-collections-list ul.collections-list.collections-layout-grid li.collection-list-item:hover a,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-grid li.collection-list-item a,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-grid li.collection-list-item:hover a{color:inherit;text-decoration:none}.wp-block-tainacan-collections-list ul.collections-list-edit li.collection-list-item{display:flex;align-items:flex-start}.wp-block-tainacan-collections-list ul.collections-list-edit li.collection-list-item button{position:absolute !important;background-color:rgba(255,255,255,.75);color:var(--tainacan-block-gray5, #373839);padding:2px;margin-left:5px;min-width:14px;visibility:hidden;position:relative;opacity:0;right:-14px;top:0px;justify-content:center;z-index:999}.wp-block-tainacan-collections-list ul.collections-list-edit li.collection-list-item button .dashicon{margin:0px}.wp-block-tainacan-collections-list ul.collections-list-edit li.collection-list-item:hover button{height:auto;visibility:visible;background-color:#fff !important;opacity:1;right:-8px;top:-8px;border:1px solid var(--tainacan-block-gray3, #a5a5a5);border-radius:100em;transition:opacity linear .15s,right linear .15s}.wp-block-tainacan-collections-list ul.collections-list-edit li.collection-list-item:hover button:hover{background-color:#fff !important;border:1px solid var(--tainacan-block-gray3, #a5a5a5) !important}@media only screen and (max-width: 498px){.wp-block-tainacan-collections-list ul.collections-list.collections-layout-grid,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-grid{grid-template-columns:repeat(auto-fill, 100%)}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-grid li.collection-list-item,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-grid li.collection-list-item{width:100%}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-grid li.collection-list-item img,.wp-block-tainacan-collections-list ul.collections-list.collections-layout-grid li.collection-list-item canvas,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-grid li.collection-list-item img,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-grid li.collection-list-item canvas{width:100%}}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-list,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-list{padding:0;display:flex;flex-wrap:wrap;align-items:center;list-style-type:none}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-list li.collection-list-item,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-list li.collection-list-item{position:relative;margin:12px 12px 24px 12px;margin-bottom:12px;min-height:54px;min-width:calc(20% - 24px);width:calc(20% - 24px)}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-list li.collection-list-item a,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-list li.collection-list-item a{color:inherit;height:auto;display:flex;align-items:center;word-break:break-all;word-break:break-word}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-list li.collection-list-item img,.wp-block-tainacan-collections-list ul.collections-list.collections-layout-list li.collection-list-item canvas,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-list li.collection-list-item img,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-list li.collection-list-item canvas{height:auto;width:54px;min-width:54px;padding:0px;margin-right:20px}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-list li.collection-list-item a.collection-without-image img,.wp-block-tainacan-collections-list ul.collections-list.collections-layout-list li.collection-list-item a.collection-without-image canvas,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-list li.collection-list-item a.collection-without-image img,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-list li.collection-list-item a.collection-without-image canvas{display:none}.wp-block-tainacan-collections-list ul.collections-list.collections-layout-list li.collection-list-item a,.wp-block-tainacan-collections-list ul.collections-list.collections-layout-list li.collection-list-item:hover a,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-list li.collection-list-item a,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-list li.collection-list-item:hover a{color:inherit;text-decoration:none}@media only screen and (max-width: 1600px){.wp-block-tainacan-collections-list ul.collections-list.collections-layout-list li.collection-list-item,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-list li.collection-list-item{min-width:calc(25% - 24px);width:calc(25% - 24px)}}@media only screen and (max-width: 1024px){.wp-block-tainacan-collections-list ul.collections-list.collections-layout-list li.collection-list-item,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-list li.collection-list-item{min-width:calc(33.333% - 24px);width:calc(33.333% - 24px)}}@media only screen and (max-width: 768px){.wp-block-tainacan-collections-list ul.collections-list.collections-layout-list li.collection-list-item,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-list li.collection-list-item{min-width:calc(50% - 24px);width:calc(50% - 24px)}}@media only screen and (max-width: 498px){.wp-block-tainacan-collections-list ul.collections-list.collections-layout-list li.collection-list-item,.wp-block-tainacan-collections-list ul.collections-list-edit.collections-layout-list li.collection-list-item{min-width:calc(100% - 24px);width:calc(100% - 24px)}}.block-editor-block-list__block:not(.has-text-color)>.wp-block-tainacan-collections-list li.collection-list-item a>span,.block-editor-block-list__block:not(.has-text-color)>.wp-block-tainacan-collections-list li.collection-list-item a:hover>span{color:inherit}",""]);const a=e}}]);