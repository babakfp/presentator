(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33c6d45f"],{"11b2":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{ref:"slotWrapper"},[t._t("default")],2)])},n=[],i={name:"relocator",props:{container:{default:"body"}},computed:{containerElem:function(){return"string"===typeof this.container?document.querySelector(this.container):this.container}},mounted:function(){var t=this;if(this.containerElem){var e=this.$refs.slotWrapper;e.parentNode.removeChild(e),this.containerElem.appendChild(e),this.$once("hook:beforeDestroy",(function(){e&&(e.parentNode.removeChild(e),t.$el.appendChild(e))}))}}},o=i,r=s("2877"),l=Object(r["a"])(o,a,n,!1,null,null,null);e["a"]=l.exports},3905:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{ref:"popupContainer",staticClass:"popup",class:{active:t.isActive,"is-closing":t.isClosing},attrs:{tabindex:"-1"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])||e.target!==e.currentTarget?null:void(!t.closeOnEsc||t.close())}}},[e("div",{staticClass:"popup-overlay",on:{click:function(e){e.preventDefault(),!t.closeOnOverlay||t.close()}}}),e("div",{staticClass:"popup-panel"},[t.closeBtn?e("span",{staticClass:"popup-close-handle popup-close",on:{click:function(e){return e.preventDefault(),t.close()}}}):t._e(),e("div",{staticClass:"popup-header"},[t._t("header")],2),e("div",{staticClass:"popup-content"},[t._t("content")],2),e("div",{staticClass:"popup-footer"},[t._t("footer")],2)])])},n=[],i={name:"popup",props:{closeOnEsc:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0}},data:function(){return{isActive:!1,isClosing:!1}},methods:{open:function(){var t=this;this.isActive=!0,this.isClosing=!1,this.$nextTick((function(){t.$refs.popupContainer.focus()})),document.body.classList.add("popup-active"),this.$nextTick((function(){var e=t.$el.querySelector("form input");e&&e.focus()}))},close:function(){var t=this;this.isActive&&(this.isClosing=!0,document.body.classList.remove("popup-active"),this.closingTimeoutId&&clearTimeout(this.closingTimeoutId),this.closingTimeoutId=setTimeout((function(){t.isActive=!1,t.isClosing=!1}),300))}}},o=i,r=s("2877"),l=Object(r["a"])(o,a,n,!1,null,null,null);e["a"]=l.exports},"438c":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"app-footer"},[e("div",{staticClass:"info"},[e("a",{staticClass:"info-item",attrs:{href:t.$getAppConfig("VUE_APP_RELEASES_URL"),target:"_blank",rel:"noopener"}},[e("span",{staticClass:"txt"},[t._v("Presentator v2.14.0")])]),e("a",{staticClass:"info-item",attrs:{href:t.$getAppConfig("VUE_APP_REPO_URL"),target:"_blank",rel:"noopener"}},[e("i",{staticClass:"fe fe-github"}),e("span",{staticClass:"txt"},[t._v("Github")])]),t.loggedUser&&t.loggedUser.id&&t.$getAppConfig("VUE_APP_SHOW_SEND_FEEDBACK")<<0?e("div",{staticClass:"info-item handle",on:{click:function(e){return e.preventDefault(),t.openFeedbackPopup()}}},[e("i",{staticClass:"fe fe-life-buoy"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])]):t._e(),t._l(t.getFooterLinks(),(function(s,a){return e("a",{staticClass:"info-item",attrs:{href:s,target:"_blank",rel:"noopener"}},[e("span",{staticClass:"txt"},[t._v(t._s(a))])])})),e("div",{staticClass:"info-item"},[e("languages-select")],1)],2),t.$getAppConfig("VUE_APP_SHOW_CREDITS")<<0?e("div",{staticClass:"credits"},[e("i18n",{attrs:{path:"Crafted by {author}"}},[e("a",{attrs:{slot:"author",href:"https://gani.bg",target:"_blank",rel:"noopener"},slot:"author"},[t._v("Gani")])])],1):t._e(),t.$getAppConfig("VUE_APP_SHOW_SEND_FEEDBACK")<<0?e("relocator",[e("feedback-popup",{ref:"feedbackPopup"})],1):t._e()],1)},n=[],i=(s("8e6e"),s("ac6a"),s("456d"),s("28a5"),s("bd86")),o=s("2f62"),r=s("11b2"),l=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[e("popup",{ref:"popup",staticClass:"popup-sm",scopedSlots:t._u([{key:"header",fn:function(){return[e("h4",{staticClass:"title"},[t._v(t._s(t.$t("Help us improve Presentator")))])]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"alert alert-light-border txt-center m-b-small"},[e("p",[t._v(" "+t._s(t.$t("Found a bug or have a feature request?"))+" "),e("br"),e("i18n",{attrs:{path:"Fill the form below OR {issuesLink}."}},[e("a",{attrs:{slot:"issuesLink",href:t.$getAppConfig("VUE_APP_ISSUES_URL"),target:"_blank",rel:"noopener"},slot:"issuesLink"},[t._v(t._s(t.$t("create a GitHub issue")))])])],1)]),e("form-field",{staticClass:"required",attrs:{name:"message"}},[e("label",{attrs:{for:"feedback_message"}},[t._v(t._s(t.$t("Message")))]),e("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.message,expression:"message",modifiers:{trim:!0}}],attrs:{id:"feedback_message",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]},proxy:!0},{key:"footer",fn:function(){return[e("button",{staticClass:"btn btn-light-border",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.close()}}},[e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Cancel")))])]),e("button",{staticClass:"btn btn-primary btn-cons btn-loader",class:{"btn-loader-active":t.isProcessing},attrs:{type:"submit"}},[e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])])]},proxy:!0}])})],1)},c=[],u=s("f744"),p=s("3905"),f={name:"feedback-popup",components:{popup:p["a"]},data:function(){return{isProcessing:!1,message:""}},methods:{open:function(){this.resetForm(),this.$refs.popup.open(),this.$emit("open")},close:function(){this.$refs.popup.close(),this.$emit("close")},resetForm:function(){this.message=""},submitForm:function(){var t=this;this.isProcessing||(this.isProcessing=!0,u["a"].Users.sendFeedback(this.message).then((function(e){t.$toast(t.$t("Thank you for the feedback!")),t.close(),t.resetForm()})).catch((function(e){t.$errResponseHandler(e)})).finally((function(){t.isProcessing=!1})))}}},d=f,g=s("2877"),m=Object(g["a"])(d,l,c,!1,null,null,null),v=m.exports,h=s("f7ef");function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function _(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var C={name:"app-footer",components:{relocator:r["a"],"feedback-popup":v,"languages-select":h["a"]},computed:_({},Object(o["d"])({loggedUser:function(t){return t.user.user}})),methods:{getFooterLinks:function(){for(var t=(this.$getAppConfig("VUE_APP_FOOTER_LINKS")||"").split(","),e={},s=0;s<t.length;s++){var a=t[s].split("|",2),n=(a[0]||"").trim(),i=(a[1]||"").trim();n.length&&i.length&&(e[n]=i)}return e},openFeedbackPopup:function(){this.$refs.feedbackPopup&&this.$refs.feedbackPopup.open()}}},y=C,k=Object(g["a"])(y,a,n,!1,null,null,null);e["a"]=k.exports},"5d68":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"auth-container"},[e("div",{staticClass:"flex-fill-block"}),e("div",{staticClass:"container-wrapper container-wrapper-sm"},[e("app-header"),e("div",{staticClass:"clearfix m-b-large"}),e("div",{staticClass:"panel auth-panel"},[e("h3",{staticClass:"panel-title"},[t._v(t._s(t.$t("Forgotten password")))]),t.processSuccess?e("div",{staticClass:"panel-content"},[e("div",{staticClass:"alert alert-transp-primary txt-center"},[e("p",[t._v(" "+t._s(t.$t("We sent a recovery link to your email address:"))+" "),e("br"),e("strong",[t._v(t._s(t.email))])])])]):e("div",{staticClass:"panel-content"},[e("p",{staticClass:"txt-center"},[t._v(t._s(t.$t("We'll send a recovery link to your email:")))]),e("form",{staticClass:"register-form disabled",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("form-field",{staticClass:"form-group-lg",attrs:{name:"email"}},[e("div",{staticClass:"input-group"},[e("label",{staticClass:"input-addon p-r-0",attrs:{for:"forgotten_password_email"}},[e("i",{staticClass:"fe fe-mail"})]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"forgotten_password_email",placeholder:t.$t("Email"),required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),e("button",{staticClass:"btn btn-primary btn-lg btn-loader block",class:{"btn-loader-active":t.isProcessing}},[e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send recovery link")))]),e("i",{staticClass:"fe fe-arrow-right-circle"})])],1)])]),e("div",{staticClass:"clearfix m-b-base"}),e("div",{staticClass:"auth-meta"},[e("router-link",{attrs:{to:{name:"login"}}},[t._v(t._s(t.$t("Return to login.")))])],1)],1),e("div",{staticClass:"flex-fill-block m-b-base"}),e("app-footer")],1)},n=[],i=s("f744"),o=s("dbb6"),r=s("438c"),l={name:"forgotten-password",components:{"app-header":o["a"],"app-footer":r["a"]},data:function(){return{email:"",isProcessing:!1,processSuccess:!1}},beforeMount:function(){var t=this;this.$setDocumentTitle((function(){return t.$t("Forgotten password")}))},methods:{onSubmit:function(){var t=this;this.isProcessing||(this.isProcessing=!0,i["a"].Users.requestPasswordReset(this.email).then((function(e){t.processSuccess=!0})).catch((function(e){t.processSuccess=!1,t.$errResponseHandler(e)})).finally((function(){t.isProcessing=!1})))}}},c=l,u=s("2877"),p=Object(u["a"])(c,a,n,!1,null,null,null);e["default"]=p.exports},"81fb":function(t,e,s){t.exports=s.p+"spa-resources/img/logogram.a11cb759.svg"},dbb6:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("header",{staticClass:"app-logo-wrapper"},[e("router-link",{staticClass:"app-logo",attrs:{to:{name:"home"}}},[e("img",{staticClass:"img",attrs:{src:s("81fb"),alt:"Presentator logo",width:"44"}}),e("span",{staticClass:"txt"},[t._v("Presentator")])])],1)},n=[],i={name:"app-header"},o=i,r=s("2877"),l=Object(r["a"])(o,a,n,!1,null,null,null);e["a"]=l.exports},f7ef:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"languages-select",class:{loading:t.isChanging}},[e("div",{staticClass:"selected-language"},[e("span",{staticClass:"txt language-title"},[t._v(t._s(t.activeLanguageTitle))]),t._v(" ("),e("span",{staticClass:"txt language-code"},[t._v(t._s(t.activeLanguageCode))]),t._v(") ")]),e("toggler",{staticClass:"dropdown dropdown-sm"},t._l(t.languages,(function(s,a){return e("div",{key:"language_"+a,staticClass:"dropdown-item",class:{active:t.activeLanguageCode==a},on:{click:function(e){return e.preventDefault(),t.changeLanguage(a)}}},[e("small",{staticClass:"label language-code m-r-5",class:t.activeLanguageCode==a?"label-transp-primary":"label-light-border"},[t._v(t._s(a))]),e("span",{staticClass:"txt language-title"},[t._v(t._s(s))])])})),0)],1)},n=[],i=s("9225"),o={name:"languages-select",data:function(){return{isChanging:!1,languages:Object.assign({},i["c"])}},watch:{"$i18n.locale":function(t,e){"function"===typeof document._titleFunc&&this.$setDocumentTitle(document._titleFunc)}},computed:{activeLanguageCode:function(){return this.$i18n.locale},activeLanguageTitle:function(){return this.languages[this.activeLanguageCode]}},methods:{changeLanguage:function(t){var e=this;this.isChanging=!0,Object(i["a"])(t).finally((function(){e.isChanging=!1}))}}},r=o,l=s("2877"),c=Object(l["a"])(r,a,n,!1,null,null,null);e["a"]=c.exports}}]);