"use strict";(self.webpackChunktainacan=self.webpackChunktainacan||[]).push([[5008],{41741:(t,e,a)=>{a.d(e,{A:()=>u});var i=a(6934),n=a(68061),d=(a(79997),a(53481)),l=a(76210),o=a(68299),r=a(6993);delete d.Icon.Default.prototype._getIconUrl,d.Icon.Default.mergeOptions({iconRetinaUrl:o.default,iconUrl:l.default,shadowUrl:r.default});const u={components:{LMap:n.Do,LIcon:n.up,LTooltip:n.KV,LTileLayer:n.a,LMarker:n.li,LControl:n.cZ},props:{itemMetadatum:Object,value:[String,Array],disabled:!1,maxtags:"",isLastMetadatum:!1},emits:["update:value"],data:function(){return{editingMarkerIndex:-1,latitude:-14.4086569,longitude:-51.31668,selected:[],mapIntersectionObserver:null}},computed:{mapProvider:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum.metadata_type_options&&this.itemMetadatum.metadatum.metadata_type_options.map_provider?this.itemMetadatum.metadatum.metadata_type_options.map_provider:"https://tile.openstreetmap.org/{z}/{x}/{y}.png"},initialZoom:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum.metadata_type_options&&this.itemMetadatum.metadatum.metadata_type_options.initial_zoom?Number(this.itemMetadatum.metadatum.metadata_type_options.initial_zoom):5},maxZoom:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum.metadata_type_options&&this.itemMetadatum.metadatum.metadata_type_options.maximum_zoom?this.itemMetadatum.metadatum.metadata_type_options.maximum_zoom:12},initialLatitude:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum.metadata_type_options&&this.itemMetadatum.metadatum.metadata_type_options.initial_latitude?Number(this.itemMetadatum.metadatum.metadata_type_options.initial_latitude):-14.4086569},initialLongitude:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum.metadata_type_options&&this.itemMetadatum.metadatum.metadata_type_options.initial_longitude?Number(this.itemMetadatum.metadatum.metadata_type_options.initial_longitude):-51.31668},attribution:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum.metadata_type_options&&this.itemMetadatum.metadatum.metadata_type_options.attribution?this.itemMetadatum.metadatum.metadata_type_options.attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'},itemMetadatumIdentifier:function(){return"tainacan-item-metadatum_id-"+this.itemMetadatum.metadatum.id+(this.itemMetadatum.parent_meta_id?"_parent_meta_id-"+this.itemMetadatum.parent_meta_id:"")},selectedLatLng:function(){var t=this;return this.selected&&Array.isArray(this.selected)?this.selected.filter((function(e){var a=e.indexOf(",")&&2==e.split(",").length?e.split(","):[t.initialLatitude,t.initialLongitude];return!isNaN(Number(a[0]))&&!isNaN(Number(a[1]))})).map((function(e){var a=e.indexOf(",")&&2==e.split(",").length?e.split(","):[t.initialLatitude,t.initialLongitude];return(0,d.latLng)(Number(a[0]),Number(a[1]))})):[]},editingLatLng:function(){return isNaN(this.latitude)||isNaN(this.longitude)?null:(0,d.latLng)(Number(this.latitude),Number(this.longitude))},maxMultipleValues:function(){return this.itemMetadatum&&this.itemMetadatum.metadatum&&this.itemMetadatum.metadatum.cardinality&&!isNaN(this.itemMetadatum.metadatum.cardinality)&&this.itemMetadatum.metadatum.cardinality>1?this.itemMetadatum.metadatum.cardinality:void 0},shouldAddMore:function(){var t=null!=this.maxtags?this.maxtags:"yes"==this.itemMetadatum.metadatum.multiple?void 0!==this.maxMultipleValues?this.maxMultipleValues:null:"1";return null===t||this.selected.length<t}},watch:{selectedLatLng:{handler:function(){var t=this,e="map--"+this.itemMetadatumIdentifier;(0,i.dY)((function(){t.$refs[e]&&t.$refs[e].leafletObject&&null!=t.selectedLatLng.length&&(1==t.selectedLatLng.length?t.$refs[e].leafletObject.panInsideBounds(t.selectedLatLng,{animate:!0,maxZoom:t.maxZoom}):t.$refs[e].leafletObject.flyToBounds(t.selectedLatLng,{animate:!0,maxZoom:t.maxZoom}))}))},deep:!0}},created:function(){this.value&&""!=this.value&&(this.selected=Array.isArray(this.value)?1==this.value.length&&""==this.value[0]?[]:this.value:[this.value])},mounted:function(){var t=this;(0,i.dY)((function(){var e="map--"+t.itemMetadatumIdentifier;t.handleWindowResize(e),t.selected&&0!==t.selected.length||(t.latitude=t.initialLatitude,t.longitude=t.initialLongitude),t.$refs[e]&&t.$refs[e].$el&&(t.mapIntersectionObserver=new IntersectionObserver((function(a){a.forEach((function(a){a.isIntersecting&&t.handleWindowResize(e)}))}),{threshold:.1}),t.mapIntersectionObserver.observe(t.$refs[e].$el))}))},methods:{onUpdateFromLatitudeInput:_.debounce((function(t){var e=t;if(isNaN(e)){var a=e.split(",");!a||2!=a.length||isNaN(a[0])||isNaN(a[1])||(this.latitude=a[0],this.longitude=a[1],this.onUpdateFromLatitudeAndLongitude())}else this.latitude=e,this.onUpdateFromLatitudeAndLongitude()}),250),onUpdateFromLongitudeInput:_.debounce((function(t){var e=t;if(isNaN(e)){var a=e.split(",");!a||2!=a.length||isNaN(a[0])||isNaN(a[1])||(this.latitude=a[0],this.longitude=a[1],this.onUpdateFromLatitudeAndLongitude())}else this.longitude=e,this.onUpdateFromLatitudeAndLongitude()}),250),onUpdateFromLatitudeAndLongitude:function(){this.editingMarkerIndex>=0&&(this.selected.splice(this.editingMarkerIndex,1,this.latitude+","+this.longitude),this.$emit("update:value",this.selected))},onDragMarker:function(t,e){t.target&&t.target._latlng&&(this.editingMarkerIndex==e&&(this.latitude=t.target._latlng.lat,this.longitude=t.target._latlng.lng),this.selected.splice(e,1,t.target._latlng.lat+","+t.target._latlng.lng),this.$emit("update:value",this.selected))},onDragEditingMarker:function(t){t.target&&t.target._latlng&&(this.latitude=t.target._latlng.lat,this.longitude=t.target._latlng.lng)},onMapClick:function(t){this.editingMarkerIndex=-1,t&&t.latlng&&(this.latitude=t.latlng.lat,this.longitude=t.latlng.lng)},onMarkerAdd:function(t){if(this.editingMarkerIndex=-1,t.latlng&&this.shouldAddMore){var e=t.latlng.lat+","+t.latlng.lng;this.addLocation(e)}},addLocation:function(t){this.selected.indexOf(t)<0&&(this.selected.push(t),this.$emit("update:value",this.selected),this.editingMarkerIndex=this.selected.length-1)},onMarkerEditingClick:function(t){if(t.target&&t.target._latlng){this.latitude=t.target._latlng.lat,this.longitude=t.target._latlng.lng;var e=this.selected.indexOf(this.latitude+","+this.longitude);this.editingMarkerIndex=e;var a="map--"+this.itemMetadatumIdentifier;this.$refs[a]&&this.$refs[a].leafletObject&&this.$refs[a].leafletObject.panInsideBounds([this.selectedLatLng[e]],{animate:!0,maxZoom:this.maxZoom})}},onMarkerRemove:function(t){this.editingMarkerIndex=-1,this.latitude=this.selectedLatLng[t].lat,this.longitude=this.selectedLatLng[t].lng,this.selected.splice(t,1),this.$emit("update:value",this.selected)},handleWindowResize:function(t){var e=this;setTimeout((function(){e.$refs[t]&&e.$refs[t].leafletObject&&(e.$refs[t].leafletObject.invalidateSize(!0),null!=e.selectedLatLng.length&&(1==e.selectedLatLng.length?e.$refs[t].leafletObject.panInsideBounds(e.selectedLatLng,{animate:!0,maxZoom:e.maxZoom}):e.$refs[t].leafletObject.flyToBounds(e.selectedLatLng,{animate:!0,maxZoom:e.maxZoom})))}),500)}}}},35753:(t,e,a)=>{a.d(e,{X:()=>l});var i=a(6934),n=["id"],d={class:"geocoordinate-input-panel"};function l(t,e,a,l,o,r){var u=(0,i.g2)("l-tile-layer"),s=(0,i.g2)("b-input"),m=(0,i.g2)("b-button"),c=(0,i.g2)("l-control"),p=(0,i.g2)("l-marker"),g=(0,i.g2)("l-tooltip"),h=(0,i.g2)("l-icon"),f=(0,i.g2)("l-map");return(0,i.uX)(),(0,i.CE)("div",{id:r.itemMetadatumIdentifier,class:"tainacan-leaflet-map-container"},[(0,i.bF)(f,{id:"map--"+r.itemMetadatumIdentifier,ref:"map--"+r.itemMetadatumIdentifier,style:{height:"320px",width:"100%"},zoom:r.initialZoom,"max-zoom":r.maxZoom,center:[r.initialLatitude,r.initialLongitude],"zoom-animation":!0,options:{name:"map--"+r.itemMetadatumIdentifier,trackResize:!1,worldCopyJump:!0},onClick:r.onMapClick},{default:(0,i.k6)((function(){return[(0,i.bF)(u,{url:r.mapProvider,attribution:r.attribution},null,8,["url","attribution"]),(0,i.bF)(c,{position:"topright"},{default:(0,i.k6)((function(){return[(0,i.Lk)("div",d,[o.editingMarkerIndex>=0?((0,i.uX)(),(0,i.Wv)(s,{key:0,expanded:"",placeholder:-14.408656999999,type:"text",step:1e-12,"model-value":o.latitude,"onUpdate:modelValue":r.onUpdateFromLatitudeInput},null,8,["model-value","onUpdate:modelValue"])):(0,i.Q3)("",!0),o.editingMarkerIndex>=0?((0,i.uX)(),(0,i.Wv)(s,{key:1,expanded:"",placeholder:-51.316689999999,type:"text",step:1e-12,"model-value":o.longitude,"onUpdate:modelValue":r.onUpdateFromLongitudeInput},null,8,["model-value","onUpdate:modelValue"])):(0,i.Q3)("",!0),o.editingMarkerIndex>=0?((0,i.uX)(),(0,i.Wv)(m,{key:2,outlined:"",onClick:e[0]||(e[0]=function(t){return r.onMarkerRemove(o.editingMarkerIndex)})},{default:(0,i.k6)((function(){return[e[5]||(e[5]=(0,i.Lk)("span",{class:"icon is-small"},[(0,i.Lk)("i",{class:"tainacan-icon has-text-secondary tainacan-icon-remove"})],-1)),(0,i.eW)("  "+(0,i.v_)(t.$i18n.get("remove_point")),1)]})),_:1})):(0,i.Q3)("",!0),o.editingMarkerIndex<0&&r.shouldAddMore?((0,i.uX)(),(0,i.Wv)(m,{key:3,outlined:"",onClick:e[1]||(e[1]=function(t){return r.addLocation(o.latitude+","+o.longitude)})},{default:(0,i.k6)((function(){return[e[6]||(e[6]=(0,i.Lk)("span",{class:"icon is-small"},[(0,i.Lk)("i",{class:"tainacan-icon has-text-secondary tainacan-icon-add"})],-1)),(0,i.eW)("  "+(0,i.v_)(t.$i18n.get("add")),1)]})),_:1})):(0,i.Q3)("",!0)])]})),_:1}),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.selectedLatLng,(function(t,a){return(0,i.uX)(),(0,i.Wv)(p,{key:a,draggable:!0,"lat-lng":t,opacity:o.editingMarkerIndex>=0&&o.editingMarkerIndex!=a?.35:1,onDragend:function(t){return r.onDragMarker(t,a)},onClick:e[2]||(e[2]=function(t){return r.onMarkerEditingClick(t)})},null,8,["lat-lng","opacity","onDragend"])})),128)),r.editingLatLng&&o.editingMarkerIndex<0&&r.shouldAddMore?((0,i.uX)(),(0,i.Wv)(p,{key:0,draggable:!0,"lat-lng":r.editingLatLng,onDragend:e[3]||(e[3]=function(t){return r.onDragEditingMarker(t)}),onClick:e[4]||(e[4]=function(t){return r.addLocation(o.latitude+","+o.longitude)})},{default:(0,i.k6)((function(){return[(0,i.bF)(g,{options:{offset:[16,0]}},{default:(0,i.k6)((function(){return[(0,i.eW)((0,i.v_)(t.$i18n.get("instruction_click_to_add_a_point")),1)]})),_:1}),(0,i.bF)(h,{"class-name":"tainacan-location-marker-add"},{default:(0,i.k6)((function(){return e[7]||(e[7]=[(0,i.Lk)("span",{class:"icon"},[(0,i.Lk)("i",{class:"tainacan-icon has-text-secondary tainacan-icon-add"})],-1)])})),_:1})]})),_:1},8,["lat-lng"])):(0,i.Q3)("",!0)]})),_:1},8,["id","zoom","max-zoom","center","options","onClick"])],8,n)}},58308:(t,e,a)=>{a.d(e,{A:()=>o});var i=a(31601),n=a.n(i),d=a(76314),l=a.n(d)()(n());l.push([t.id,".tainacan-leaflet-map-container .leaflet-container{border:1px solid var(--tainacan-input-border-color);border-radius:3px}.tainacan-leaflet-map-container .leaflet-container .leaflet-marker-pane{filter:hue-rotate(-22deg)}.tainacan-leaflet-map-container .leaflet-container .tainacan-location-marker-add{padding:1.0rem;background:rgba(255,255,255,0.7);border:2px solid var(--tainacan-secondary);display:flex;align-items:center;justify-content:center;border-radius:100%;font-size:0.875rem;margin-left:-1.125rem !important;margin-top:-1.125rem !important}.tainacan-leaflet-map-container .leaflet-container .geocoordinate-input-panel{padding:0px;margin:0px;display:flex;align-items:stretch;font-size:1rem}.tainacan-leaflet-map-container .leaflet-container .geocoordinate-input-panel>.field,.tainacan-leaflet-map-container .leaflet-container .geocoordinate-input-panel>.field>.field-body{padding:0px;margin:0px}.tainacan-leaflet-map-container .leaflet-container .geocoordinate-input-panel .control{width:100%}.tainacan-leaflet-map-container .leaflet-container .geocoordinate-input-panel .button:not(.is-small):not(.is-medium):not(.is-large){color:var(--tainacan-secondary);border-radius:0px !important;height:100% !important;line-height:1.7rem;background-color:var(--tainacan-input-background-color, #fff) !important}\n",""]);const o=l},8659:(t,e,a)=>{var i=a(85072),n=a.n(i),d=a(97825),l=a.n(d),o=a(77659),r=a.n(o),u=a(55056),s=a.n(u),m=a(10540),c=a.n(m),p=a(63494),g=a.n(p),h=a(58308),f={};f.styleTagTransform=g(),f.setAttributes=s(),f.insert=r().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=c();n()(h.A,f),h.A&&h.A.locals&&h.A.locals},75676:(t,e,a)=>{a.d(e,{A:()=>i.A});var i=a(41741)},33560:(t,e,a)=>{a.d(e,{X:()=>i.X});var i=a(35753)},92928:(t,e,a)=>{a(8659)}}]);