(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5791d1c5"],{"1ece":function(t,e,s){"use strict";s("fea0")},"1efe":function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var i=s("9242"),o=s("9300"),a=s("dd93");class n extends i["a"]{load(t){t=t||{},super.load(t),this.projectId=a["a"].isEmpty(t.projectId)?null:t.projectId,this.order=a["a"].isEmpty(t.order)?1:t.order<<0,this.title=a["a"].isEmpty(t.title)?"":t.title,this.description=a["a"].isEmpty(t.description)?"":t.description,a["a"].isArray(t.assets)?this.assets=o["a"].createInstances(t.assets):this.assets=this.assets||[]}}},"606d":function(t,e,s){},"6eaf":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-body"},[e("project-sidebar",{attrs:{projectId:t.$route.params.projectId}}),e("main",{staticClass:"app-main"},[t.isPageLoaded?t._e():e("span",{staticClass:"loader loader-blend"}),t.isPageLoaded&&t.project.id>0?[e("header",{staticClass:"app-header"},[e("nav",{staticClass:"breadcrumbs"},[e("router-link",{staticClass:"breadcrumb-item",attrs:{to:{name:"projects"}}},[t._v(t._s(t.$t("Projects")))]),e("div",{staticClass:"breadcrumb-item editable active",attrs:{contenteditable:"true",spellcheck:"false",autocomplete:"off",title:t.$t("Click to edit"),"data-placeholder":t.project.title},on:{blur:t.updateProjectTitle,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.updateProjectTitle.apply(null,arguments))}}},[t._v(t._s(t.project.title))]),e("div",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.$t("Guideline")))])],1),e("div",{staticClass:"flex-fill-block"}),e("button",{staticClass:"btn btn-cons-lg btn-success btn-loader m-l-10",class:{"btn-loader-active":t.isCreatingSection},on:{click:function(e){return e.preventDefault(),t.createSection()}}},[e("i",{staticClass:"fe fe-plus"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("New section")))])])]),t.isLoadingSections?e("div",{staticClass:"block txt-center"},[e("span",{staticClass:"loader loader-blend"})]):t._e(),t.isLoadingSections||t.orderedSections.length?t._e():e("div",{staticClass:"block txt-center"},[t._m(0),e("div",{staticClass:"content m-b-base"},[e("h4",[t._v(t._s(t.$t("Set up your project brand colors, logos and other assets.")))])]),e("button",{staticClass:"btn btn-lg btn-success btn-cons-xl btn-loader",class:{"btn-loader-active":t.isCreatingSection},attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.createSection()}}},[e("i",{staticClass:"fe fe-plus"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("New section")))])])]),!t.isLoadingSections&&t.orderedSections.length?e("div",{staticClass:"guideline-sections-list"},t._l(t.orderedSections,(function(s,i){return e("guideline-section",{key:s.id,attrs:{section:s,withMoveUpCtrl:i>=1,withMoveDownCtrl:i!=t.orderedSections.length-1},on:{sectionDelete:t.onSectionDelete,beforeSectionOrderUpdate:t.onSectionOrderUpdate}})})),1):t._e()]:t._e(),e("div",{staticClass:"flex-fill-block"}),e("app-footer",{staticClass:"m-t-base"})],2)],1)},o=[function(){var t=this,e=t._self._c;return e("figure",{staticClass:"mockup m-t-base m-b-base"},[e("div",{staticClass:"mockup-bg"}),e("div",{staticClass:"browser secondary"}),e("div",{staticClass:"browser primary"},[e("i",{staticClass:"fe fe-book-open"})])])}],a=(s("097d"),s("55dd"),s("f744")),n=s("dd93"),r=s("438c"),l=s("1efe"),c=s("051c"),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"guideline-section"},[e("header",{staticClass:"section-header"},[e("div",{staticClass:"ctrl-item settings-ctrl"},[e("i",{staticClass:"fe fe-more-horizontal"}),e("toggler",{ref:"sectionDropdown",staticClass:"dropdown dropdown-sm"},[e("div",{staticClass:"dropdown-item",class:{disabled:!t.withMoveUpCtrl},on:{click:function(e){return e.preventDefault(),t.reorderSection("up")}}},[e("i",{staticClass:"fe fe-arrow-up"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Move up")))])]),e("div",{staticClass:"dropdown-item",class:{disabled:!t.withMoveDownCtrl},on:{click:function(e){return e.preventDefault(),t.reorderSection("down")}}},[e("i",{staticClass:"fe fe-arrow-down"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Move down")))])]),e("hr"),e("div",{staticClass:"dropdown-item link-danger",on:{click:function(e){return e.preventDefault(),t.deleteSection()}}},[e("i",{staticClass:"fe fe-trash"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Delete")))])])])],1),e("h5",{ref:"titleElem",staticClass:"title m-l-10",attrs:{contenteditable:"true",spellcheck:"false",autocomplete:"off",title:t.$t("Click to edit"),"data-placeholder":t.section.title},on:{blur:function(e){return t.updateSection()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.updateSection())}}},[t._v(t._s(t.section.title))]),t._v(" ("),e("div",{ref:"descriptionElem",staticClass:"description",attrs:{contenteditable:"true",spellcheck:"false",autocomplete:"off",title:t.$t("Click to edit"),"data-placeholder":t.$t("Add description here...")},on:{blur:function(e){return t.updateSection()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.updateSection())}}},[t._v(t._s(t.section.description))]),t._v(") "),e("div",{staticClass:"flex-fill-block"}),e("div",{staticClass:"ctrl-item toggle-ctrl",on:{click:function(e){return e.preventDefault(),t.toggleSection()}}},[t.collapsed?[e("span",{staticClass:"txt m-r-5 txt-default"},[t._v(t._s(t.$t("Expand")))]),e("i",{staticClass:"fe fe-chevron-down"})]:[e("span",{staticClass:"txt m-r-5"},[t._v(t._s(t.$t("Collapse")))]),e("i",{staticClass:"fe fe-chevron-up"})]],2)]),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}],staticClass:"section-content"},[e("draggable",{staticClass:"boxes-list assets-list",attrs:{group:"asset-section",draggable:".box-card",filter:".ignore-sort",fallbackTolerance:2,forceFallback:!0,animation:200,touchStartThreshold:0,list:t.orderedAssets},on:{change:t.onSortChange,start:t.onSortStart,end:t.onSortEnd}},[t._l(t.orderedAssets,(function(s){return e("asset-box",{key:"asset_"+s.id,attrs:{asset:s},on:{assetDelete:t.onAssetDelete}})})),e("div",{staticClass:"box box-btns box-compact txt-hint ignore-sort",attrs:{slot:"header"},slot:"header"},[e("div",{ref:"addFileContainer",staticClass:"box-btn dz-clickable"},[e("div",{staticClass:"content"},[t.isAddingFile?[e("span",{staticClass:"loader loader-blend"})]:[e("div",{staticClass:"icon"},[e("i",{staticClass:"fe fe-file"})]),e("h5",{staticClass:"title"},[t._v(t._s(t.$t("Add file")))])]],2)]),e("div",{staticClass:"box-btn",on:{click:function(e){return e.preventDefault(),t.createColor()}}},[e("div",{staticClass:"content"},[t.isAddingColor?[e("span",{staticClass:"loader loader-blend"})]:[e("div",{staticClass:"icon"},[e("i",{staticClass:"fe fe-droplet"})]),e("h5",{staticClass:"title"},[t._v(t._s(t.$t("Add color")))])]],2)])])],2)],1)])},p=[],h=s("79e3"),u=s.n(h),f=s("9300"),v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box box-card box-compact",class:{"box-color":t.asset.isColor},on:{mouseleave:function(e){!t.$refs.assetDropdown||t.$refs.assetDropdown.hide()}}},[e("figure",{staticClass:"box-thumb",style:{background:t.asset.hex}},[t.asset.isFile?[e("div",{staticClass:"crop-wrapper"},[t.asset.isImage?e("img",{staticClass:"img",attrs:{src:t.asset.getFileUrl("medium"),alt:t.asset.title}}):e("span",{staticClass:"img img-alt"},[t._v(t._s(t.asset.fileExtension))])])]:t._e(),e("div",{staticClass:"thumb-overlay"},[t.asset.isImage?[e("div",{staticClass:"overlay-ctrl",on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}}),e("div",{staticClass:"box-ctrl handle center",on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}},[e("i",{staticClass:"fe fe-eye"})])]:t._e(),t.asset.isColor?[e("div",{staticClass:"overlay-ctrl",on:{click:function(e){return e.preventDefault(),t.openColorPicker()}}}),e("div",{staticClass:"box-ctrl handle center",attrs:{title:t.$t("Change color")},on:{click:function(e){return e.preventDefault(),t.openColorPicker()}}},[e("i",{staticClass:"fe fe-droplet",style:{color:t.asset.contrastHex}})])]:t._e(),e("div",{staticClass:"box-ctrl handle top-right"},[e("i",{staticClass:"fe fe-more-horizontal",style:{color:t.asset.contrastHex}}),e("toggler",{ref:"assetDropdown",staticClass:"dropdown dropdown-sm"},[t.asset.isFile?e("a",{staticClass:"dropdown-item",attrs:{href:t.asset.getFileUrl(),tabindex:"-1",download:"",target:"_blank",rel:"noopener"}},[e("i",{staticClass:"fe fe-download"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Download")))])]):t._e(),t.asset.isColor?e("div",{staticClass:"dropdown-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.hex.toUpperCase())}}},[e("i",{staticClass:"fe fe-copy"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Copy"))+" HEX")])]):t._e(),t.asset.isColor?e("div",{staticClass:"dropdown-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.rgb.toUpperCase())}}},[e("i",{staticClass:"fe fe-copy"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Copy"))+" RGB")])]):t._e(),e("hr"),e("div",{staticClass:"dropdown-item link-danger",on:{click:function(e){return e.preventDefault(),t.deleteAsset()}}},[e("i",{staticClass:"fe fe-trash"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Delete")))])])])],1)],2)],2),e("div",{staticClass:"box-content"},[e("div",{key:"title",ref:"titleLabel",staticClass:"title",attrs:{contenteditable:"true",spellcheck:"false",autocomplete:"off",title:t.$t("Click to edit"),"data-placeholder":t.asset.title||t.$t("Title")},on:{blur:function(e){return t.saveTitle()},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.saveTitle())}}},[t._v(t._s(t.asset.title))]),t.asset.isFile?[e("div",{staticClass:"meta"},[e("div",{staticClass:"meta-item txt-uppercase"},[t._v(t._s(t.asset.fileExtension))]),t.asset.isImage&&t.assetWidth>0&&t.assetHeight>0?e("div",{staticClass:"meta-item"},[t._v(" "+t._s(t.assetWidth)+"x"+t._s(t.assetHeight)+" ")]):t._e()])]:[e("label",{ref:"hexLabel"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.asset.hex,expression:"asset.hex"}],staticClass:"asset-color-input",attrs:{type:"color",id:"asset_color_"+t.asset.id},domProps:{value:t.asset.hex},on:{change:function(e){return t.saveHex()},input:function(e){e.target.composing||t.$set(t.asset,"hex",e.target.value)}}})]),e("div",{staticClass:"meta"},[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("Copy"),expression:"$t('Copy')",modifiers:{bottom:!0}}],staticClass:"meta-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.hex.toUpperCase())}}},[t._v(" "+t._s(t.asset.hex.toUpperCase())+" ")]),e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("Copy"),expression:"$t('Copy')",modifiers:{bottom:!0}}],staticClass:"meta-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.rgb.toUpperCase())}}},[t._v(" "+t._s(t.asset.rgb.toUpperCase())+" ")])])]],2),t.asset.isImage?e("relocator",[e("popup",{key:"asset_popup_"+t.asset.id,ref:"previewPopup",staticClass:"popup-image",scopedSlots:t._u([{key:"content",fn:function(){return[t.$refs.previewPopup&&t.$refs.previewPopup.isActive?e("img",{attrs:{src:t.asset.getFileUrl("original"),alt:t.asset.title}}):t._e()]},proxy:!0}],null,!1,4169098407)})],1):t._e()],1)},m=[],C=s("11b2"),g=s("3905"),b={name:"guideline-asset-box",components:{relocator:C["a"],popup:g["a"]},props:{asset:{type:f["a"],required:!0}},data(){return{assetWidth:0,assetHeight:0}},mounted(){this.asset.isImage&&n["a"].loadImage(this.asset.getFileUrl()).then(t=>{this.assetWidth=t.width,this.assetHeight=t.height})},methods:{deleteAsset(){this.asset.id&&window.confirm(this.$t("Do you really want to delete the selected asset?"))&&(this.$toast(this.$t("Successfully deleted asset.")),a["a"].GuidelineAssets.delete(this.asset.id),this.$emit("assetDelete",this.asset.id))},copyToClipboard(t){n["a"].copyToClipboard(t)?this.$toast(this.$t("Successfully copied {text} to clipboard.",{text:t})):this.$toast(this.$t("Failed copying {text} to clipboard.",{text:t}),"danger")},openColorPicker(){this.asset.isColor&&this.$refs.hexLabel&&this.$refs.hexLabel.click()},saveHex(t){t=t||this.asset.hex,this.$set(this.asset,"hex",t),a["a"].GuidelineAssets.update(this.asset.id,{hex:t}).then(t=>{this.asset.load(t.data)}).catch(t=>{this.$errResponseHandler(t)})},saveTitle(){this.$inlineTitleUpdate(this.$refs.titleLabel,this.asset,a["a"].GuidelineAssets.update)},openPreviewPopup(){this.$refs.previewPopup&&this.$refs.previewPopup.open()},closePreviewPopup(){this.$refs.previewPopup&&this.$refs.previewPopup.close()}}},x=b,y=(s("1ece"),s("2877")),$=Object(y["a"])(x,v,m,!1,null,"c0816b9c",null),_=$.exports,w=s("b76a"),k=s.n(w),S={name:"guideline-section",components:{"asset-box":_,draggable:k.a},props:{section:{type:l["a"],required:!0},withMoveUpCtrl:{default:!1},withMoveDownCtrl:{default:!1}},data(){return{collapsed:!1,dropdownActive:!1,isAddingFile:!1,isAddingColor:!1,dropzone:null}},computed:{orderedAssets(){return this.section.assets.slice().sort((t,e)=>t["order"]-e["order"])}},mounted(){this.initFileUpload()},destroyed(){this.dropzone&&this.dropzone.destroy()},methods:{onSortStart(t){this.sortAnimationTimeoutId&&clearTimeout(this.sortAnimationTimeoutId),t.target&&t.target.classList.add("sort-started")},onSortEnd(t){this.sortAnimationTimeoutId&&clearTimeout(this.sortAnimationTimeoutId),this.sortAnimationTimeoutId=setTimeout(()=>{t.target&&t.target.classList.remove("sort-started")},400)},onSortChange(t){t.removed?this.onAssetDelete(t.removed.element.id):t.added?this.addAsset(t.added.element,t.added.newIndex+1):t.moved&&this.updateAssetOrder(t.moved.element,t.moved.newIndex+1)},updateAssetOrder(t,e){if(t&&(t.guidelineSectionId!=this.section.id||t.order!=e)){if(e>t.order)for(let s in this.section.assets)this.section.assets[s].id!=t.id&&this.section.assets[s].order>t.order&&this.section.assets[s].order<=e&&this.$set(this.section.assets[s],"order",this.section.assets[s].order-1);else for(let s in this.section.assets)this.section.assets[s].id!=t.id&&this.section.assets[s].order<t.order&&this.section.assets[s].order>=e&&this.$set(this.section.assets[s],"order",this.section.assets[s].order+1);t.order=e,a["a"].GuidelineAssets.update(t.id,{order:e})}},addAsset(t,e){if(t&&t.guidelineSectionId!==this.section.id){e=Math.min(e,this.section.assets.length+1);for(let t=this.section.assets.length-1;t>=0;t--)this.section.assets[t].order>=e&&this.$set(this.section.assets[t],"order",this.section.assets[t].order+1);t=t.clone({order:e,guidelineSectionId:this.section.id}),this.section.assets.push(t),a["a"].GuidelineAssets.update(t.id,{order:e,guidelineSectionId:this.section.id})}},onAssetDelete(t){var e=0;for(let s in this.section.assets)if(this.section.assets[s].id==t){e=this.section.assets[s].order,this.$delete(this.section.assets,s);break}for(let s in this.section.assets)this.section.assets[s].order>e&&this.$set(this.section.assets[s],"order",this.section.assets[s].order-1)},toggleSection(){this.collapsed?this.collapsed=!1:this.collapsed=!0},updateSection(t){!this.section.id||this.$refs.titleElem.innerText==this.section.title&&this.$refs.descriptionElem.innerText==this.section.description||(this.$refs.titleElem.innerText.trim()?(this.$refs.titleElem.blur(),this.$refs.descriptionElem.blur(),a["a"].GuidelineSections.update(this.section.id,{title:this.$refs.titleElem.innerText,description:this.$refs.descriptionElem.innerText}).then(t=>{t&&(this.section.load(t.data),this.$refs.titleElem.innerText=this.section.title,this.$refs.descriptionElem.innerText=this.section.description)}).catch(t=>{this.$errResponseHandler(t)})):this.$refs.titleElem.innerText=this.section.title)},reorderSection(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"up";if(this.section.id){var e=this.section.order,s="up"===t?this.section.order-1:this.section.order+1;this.$emit("beforeSectionOrderUpdate",this.section.id,s,e),this.section.order=s,this.$refs.sectionDropdown&&this.$refs.sectionDropdown.hide(),a["a"].GuidelineSections.update(this.section.id,{order:s}).then(t=>{this.section.load(t.data),this.$emit("afterSectionOrderUpdate",this.section.id,this.section.order,e)}).catch(t=>{this.$errResponseHandler(t)})}},deleteSection(){this.section.id&&window.confirm(this.$t('Do you really want to delete section "{title}"?',{title:this.section.title}))&&(this.$toast(this.$t('Successfully deleted section "{title}".',{title:this.section.title})),a["a"].GuidelineSections.delete(this.section.id),this.$emit("sectionDelete",this.section.id))},createColor(t,e){if(!this.isAddingColor){if(this.isAddingColor=!0,t=t||"#000000",!e){let t=1;for(var s=this.section.assets.length-1;s>=0;s--)this.section.assets[s].isColor&&t++;e=this.$t("Color")+" "+t}a["a"].GuidelineAssets.create({guidelineSectionId:this.section.id,type:"color",order:0,hex:t,title:e}).then(t=>{this.section.assets.push(new f["a"](t.data)),this.$toast(this.$t("Successfully added new asset color."))}).catch(t=>{this.$errResponseHandler(t)}).finally(()=>{this.isAddingColor=!1})}},initFileUpload(){u.a.autoDiscover=!1,this.dropzone=new u.a(this.$refs.addFileContainer,{url:a["a"].$baseUrl+"/guideline-assets",method:"post",paramName:"file",timeout:0,parallelUploads:1,uploadMultiple:!1,thumbnailWidth:null,thumbnailHeight:null,addRemoveLinks:!1,createImageThumbnails:!1,previewTemplate:'<div style="display: none"></div>'}),this.dropzone.on("addedfile",t=>{this.dropzone.options.headers=Object.assign(this.dropzone.options.headers||{},{Authorization:"Bearer "+a["a"].$token})}),this.dropzone.on("sending",(t,e,s)=>{this.isAddingFile=!0,s.append("guidelineSectionId",this.section.id),s.append("type","file")}),this.dropzone.on("error",(t,e,s)=>{var i=n["a"].getNestedVal(e,"errors.file")||this.$t("An error occurred while uploading the asset file.");this.$toast(i,"danger")}),this.dropzone.on("success",(t,e)=>{this.section.assets.push(new f["a"](e)),this.$toast(this.$t("Successfully added new asset file."))}),this.dropzone.on("complete",t=>{this.isAddingFile=!1})}}},D=S,A=(s("e159"),Object(y["a"])(D,d,p,!1,null,"0217a4a6",null)),I=A.exports,T=s("b76c"),E={name:"projects-assets",mixins:[T["a"]],components:{"app-footer":r["a"],"project-sidebar":c["a"],"guideline-section":I},data(){return{pageTitle:()=>this.$t("Guideline"),sections:[],isLoadingSections:!1,isCreatingSection:!1}},computed:{isPageLoaded(){return!this.isLoadingProject&&!this.isLoadingSections},orderedSections(){return this.sections.slice().sort((t,e)=>t["order"]-e["order"])}},beforeMount(){this.loadProject(this.$route.params.projectId),this.loadSections(this.$route.params.projectId)},methods:{loadSections(t){this.isLoadingSections||(t=t||this.$route.params.projectId,this.isLoadingSections=!0,a["a"].GuidelineSections.getList(1,100,{"search[projectId]":t,expand:"assets"}).then(t=>{this.sections=l["a"].createInstances(t.data)}).catch(t=>{this.$errResponseHandler(t)}).finally(()=>{this.isLoadingSections=!1}))},createSection(t){t=t||this.$route.params.projectId,this.isCreatingSection||(this.isCreatingSection=!0,a["a"].GuidelineSections.create({projectId:t,title:this.$t("Section")+" "+(this.orderedSections.length+1)}).then(t=>{var e=new l["a"](t.data);this.sections.push(e),this.$nextTick(()=>{var t=document.querySelector(".guideline-section:last-child");t&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}),this.$toast(this.$t("Successfully created new section."))}).catch(t=>{this.$errResponseHandler(t)}).finally(()=>{this.isCreatingSection=!1}))},onSectionOrderUpdate(t,e,s){var i=n["a"].findByKey(this.sections,"id",t);if(i&&e!=s){if(e>s)for(let i in this.sections)this.sections[i].id!=t&&this.sections[i].order>s&&this.sections[i].order<=e&&(this.sections[i].order=this.sections[i].order-1);else for(let i in this.sections)this.sections[i].id!=t&&this.sections[i].order<s&&this.sections[i].order>=e&&(this.sections[i].order=this.sections[i].order+1);i.order=e}},onSectionDelete(t){var e=n["a"].findByKey(this.sections,"id",t);if(e){for(let t in this.sections)this.sections[t].order>e.order&&this.$set(this.sections[t],"order",this.sections[t].order-1);n["a"].removeByKey(this.sections,"id",e.id)}}}},j=E,P=Object(y["a"])(j,i,o,!1,null,null,null);e["default"]=P.exports},9300:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));s("28a5");var i=s("9242"),o=s("dd93");const a=["png","jpg","jpeg","svg","bmp"];class n extends i["a"]{load(t){t=t||{},super.load(t),this.guidelineSectionId=o["a"].isEmpty(t.guidelineSectionId)?null:t.guidelineSectionId,this.type=o["a"].isEmpty(t.type)?"file":t.type,this.order=o["a"].isEmpty(t.order)?1:t.order,this.hex=o["a"].isEmpty(t.hex)?"":t.hex,this.title=o["a"].isEmpty(t.title)?"":t.title,this.file=o["a"].isEmpty(t.file)?{}:t.file}get isFile(){return"file"===this.type}get isColor(){return"color"===this.type}get contrastHex(){return this.isColor?o["a"].getContrastHex(this.hex):""}get rgb(){var t=o["a"].hexToRgb(this.hex);return"rgb("+t.r+", "+t.g+", "+t.b+")"}get fileExtension(){return this.isFile&&this.file.original?this.file.original.split(".").pop():""}get isImage(){return this.isFile&&this.file.original&&a.indexOf(this.fileExtension)>=0}getFileUrl(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.file[t]||this.file["original"]||""}}},e159:function(t,e,s){"use strict";s("606d")},fea0:function(t,e,s){}}]);