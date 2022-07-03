(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ff18136"],{"35c6":function(t,e,s){"use strict";var r=function(){var t=this,e=t._self._c;return e("app-sidebar",[e("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.$t("Projects"),expression:"$t('Projects')",modifiers:{right:!0}}],staticClass:"menu-item",attrs:{to:{name:"projects"},"active-class":"active"}},[e("i",{staticClass:"fe fe-grid"})]),t.loggedUser.isSuperUser?e("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.$t("Users"),expression:"$t('Users')",modifiers:{right:!0}}],staticClass:"menu-item",attrs:{to:{name:"users"},"active-class":"active"}},[e("i",{staticClass:"fe fe-users"})]):t.loggedUser.id?e("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.$t("Account settings"),expression:"$t('Account settings')",modifiers:{right:!0}}],staticClass:"menu-item",attrs:{to:{name:"user",params:{userId:t.loggedUser.id}},"active-class":"active"}},[e("i",{staticClass:"fe fe-user"})]):t._e()],1)},a=[],i=(s("ac6a"),s("ade3")),n=s("2f62"),o=s("4eee");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(Object(s),!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={name:"home-sidebar",components:{"app-sidebar":o["a"]},computed:c({},Object(n["d"])({loggedUser:t=>t.user.user}))},p=u,d=s("2877"),m=Object(d["a"])(p,r,a,!1,null,null,null);e["a"]=m.exports},f8e5:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-body"},[e("home-sidebar"),e("main",{staticClass:"app-main"},[e("header",{staticClass:"app-header"},[e("nav",{staticClass:"breadcrumbs"},[e("div",{staticClass:"breadcrumb-item active"},[t._v(t._s(t.$t("Users")))])]),e("div",{staticClass:"flex-fill-block"}),e("button",{staticClass:"btn btn-cons-lg btn-success m-l-10",on:{click:function(e){return e.preventDefault(),t.openCreatePopup()}}},[e("i",{staticClass:"fe fe-plus"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("New user")))])])]),e("users-listing"),e("div",{staticClass:"flex-fill-block"}),e("app-footer",{staticClass:"m-t-base"})],1),e("user-create-popup",{ref:"createPopup"})],1)},a=[],i=s("438c"),n=s("35c6"),o=function(){var t=this,e=t._self._c;return e("div",[t.withFilterBar?e("div",{staticClass:"search-bar"},[e("div",{staticClass:"search-input-wrapper",class:{active:t.searchTerm.length>0}},[e("span",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:t.$t("Clear"),expression:"$t('Clear')",modifiers:{left:!0}}],staticClass:"search-clear",on:{click:function(e){return e.preventDefault(),t.resetFilters()}}}),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchTerm,expression:"searchTerm",modifiers:{trim:!0}}],staticClass:"search-input",attrs:{type:"input",placeholder:t.$t("Search users")},domProps:{value:t.searchTerm},on:{input:[function(e){e.target.composing||(t.searchTerm=e.target.value.trim())},t.onSearchInputChange],blur:function(e){return t.$forceUpdate()}}})])]):t._e(),e("table",{staticClass:"table v-align-middle m-b-base"},[e("thead",[e("tr",[e("th",{staticClass:"min-width"},[t._v("ID")]),e("th",[t._v(t._s(t.$t("Profile")))]),e("th",[t._v(t._s(t.$t("Status")))]),e("th",[t._v(t._s(t.$t("Type")))]),e("th",[t._v(t._s(t.$t("Created")))]),e("th",[t._v(t._s(t.$t("Updated")))]),e("th",{staticClass:"min-width txt-right"})])]),e("tbody",[t._l(t.users,(function(s){return e("tr",{key:s.id},[e("td",{staticClass:"min-width"},[t._v(t._s(s.id))]),e("td",[e("figure",{staticClass:"avatar v-align-middle m-r-10"},[s.getAvatar("small")?e("img",{attrs:{src:s.getAvatar("small"),alt:"User avatar"}}):e("i",{staticClass:"fe fe-user"})]),e("span",{staticClass:"txt v-align-middle m-r-5"},[t._v(t._s(s.fullName||"N/A")+" ("+t._s(s.email)+")")]),t.loggedUser.id==s.id?e("span",{staticClass:"label label-transp-primary v-align-middle"},[t._v("You")]):t._e()]),e("td",["active"===s.status?e("span",{staticClass:"label label-transp-success"},[t._v(t._s(t.$t("Active")))]):e("span",{staticClass:"label label-transp-danger"},[t._v(t._s(t.$t("Inactive")))])]),e("td",[s.isSuperUser?e("span",{staticClass:"label label-transp-warning"},[t._v(t._s(t.$t("Super user")))]):e("span",{staticClass:"label label-light-border"},[t._v(t._s(t.$t("Regular user")))])]),e("td",{attrs:{title:s.createdAtLocal}},[t._v(t._s(s.createdAtFromNow))]),e("td",{attrs:{title:s.updatedAtLocal}},[t._v(t._s(s.updatedAtFromNow))]),e("td",{staticClass:"min-width txt-right"},[e("router-link",{staticClass:"btn btn-sm btn-cons-sm btn-transp-primary",attrs:{to:{name:"user",params:{userId:s.id}}}},[e("i",{staticClass:"fe fe-edit"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Edit")))])])],1)])})),t.users.length?t._e():e("tr",[e("td",{staticClass:"txt-center",attrs:{colspan:"7"}},[t.isLoadingUsers?e("span",{staticClass:"loader txt-hint"}):e("h6",{staticClass:"m-0"},[t._v(t._s(t.$t("No users were found.")))])])])],2)]),e("div",{staticClass:"block txt-center"},[e("button",{directives:[{name:"show",rawName:"v-show",value:t.hasActiveFilters,expression:"hasActiveFilters"}],staticClass:"btn btn-warning btn-lg btn-cons-xl m-l-small m-r-small",on:{click:function(e){return e.preventDefault(),t.resetFilters()}}},[e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Reset filters")))])]),e("button",{directives:[{name:"show",rawName:"v-show",value:t.hasMoreUsers,expression:"hasMoreUsers"}],staticClass:"btn btn-transp-primary btn-lg btn-cons-xl btn-loader m-l-small m-r-small",class:{"btn-loader-active":t.isLoadingUsers},on:{click:function(e){return e.preventDefault(),t.loadUsers(t.currentPage+1,!1)}}},[e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Load more users")))])])])])},l=[],c=(s("ac6a"),s("097d"),s("ade3")),u=s("2f62"),p=s("f744"),d=s("dd93"),m=s("ebd1");function v(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function f(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?v(Object(s),!0).forEach((function(e){Object(c["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):v(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}const h=30;var g={name:"users-listing",props:{withFilterBar:{type:Boolean,default:!0}},data(){return{isLoadingUsers:!1,searchTerm:"",totalUsers:0,currentPage:1,users:[]}},computed:f(f({},Object(u["d"])({loggedUser:t=>t.user.user})),{},{hasMoreUsers(){return this.totalUsers>this.users.length},hasActiveFilters(){return this.searchTerm.length>0}}),mounted(){this.loadUsers()},methods:{resetFilters(){this.searchTerm="",this.loadUsers()},resetList(){this.users=[],this.totalUsers=0,this.currentPage=1},onSearchInputChange(t){this.searchTimeoutId&&clearTimeout(this.searchTimeoutId),this.searchTerm.length?(this.resetList(),this.isLoadingUsers=!0,this.searchTimeoutId=setTimeout(()=>{this.loadUsers()},250)):this.loadUsers()},loadUsers(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.isLoadingUsers=!0,e&&this.resetList(),p["a"].Users.getList(t,h,{envelope:!0,"search[identifier]":this.withFilterBar?this.searchTerm:"",sort:"-createdAt"}).then(t=>{var e=m["a"].createInstances(d["a"].getNestedVal(t,"data.response",[]));for(let s in e)d["a"].pushUnique(this.users,e[s]);this.totalUsers=d["a"].getNestedVal(t,"data.headers.x-pagination-total-count",0)<<0,this.currentPage=d["a"].getNestedVal(t,"data.headers.x-pagination-current-page",1)<<0}).catch(t=>{this.$errResponseHandler(t)}).finally(()=>{this.isLoadingUsers=!1})}}},b=g,_=s("2877"),C=Object(_["a"])(b,o,l,!1,null,null,null),w=C.exports,y=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[e("popup",{ref:"popup",staticClass:"popup-sm",attrs:{closeOnEsc:!t.isProcessing,closeOnOverlay:!t.isProcessing,closeBtn:!t.isProcessing},scopedSlots:t._u([{key:"header",fn:function(){return[e("h4",{staticClass:"title"},[t._v(t._s(t.$t("New user")))])]},proxy:!0},{key:"content",fn:function(){return[e("form-field",{staticClass:"required",attrs:{name:"email"}},[e("label",{attrs:{for:"user_email"}},[t._v(t._s(t.$t("Email")))]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],attrs:{type:"email",id:"user_email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("form-field",{attrs:{name:"firstName"}},[e("label",{attrs:{for:"user_first_name"}},[t._v(t._s(t.$t("First name")))]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.firstName,expression:"firstName",modifiers:{trim:!0}}],attrs:{type:"text",id:"user_first_name"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])],1),e("div",{staticClass:"col-6"},[e("form-field",{attrs:{name:"lastName"}},[e("label",{attrs:{for:"user_last_name"}},[t._v(t._s(t.$t("Last name")))]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.lastName,expression:"lastName",modifiers:{trim:!0}}],attrs:{type:"text",id:"user_last_name"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("form-field",{staticClass:"required",attrs:{name:"password"}},[e("label",{attrs:{for:"user_password"}},[t._v(t._s(t.$t("Password")))]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],attrs:{type:"password",id:"user_password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])],1),e("div",{staticClass:"col-6"},[e("form-field",{staticClass:"required",attrs:{name:"passwordConfirm"}},[e("label",{attrs:{for:"user_password_confirm"}},[t._v(t._s(t.$t("Password confirm")))]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.passwordConfirm,expression:"passwordConfirm",modifiers:{trim:!0}}],attrs:{type:"password",id:"user_password_confirm",required:""},domProps:{value:t.passwordConfirm},on:{input:function(e){e.target.composing||(t.passwordConfirm=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("form-field",{staticClass:"required",attrs:{name:"type"}},[e("label",{attrs:{for:"user_type"}},[t._v(t._s(t.$t("Type")))]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{id:"user_type",required:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?s:s[0]}}},[e("option",{attrs:{value:"regular"}},[t._v(t._s(t.$t("Regular")))]),e("option",{attrs:{value:"super"}},[t._v(t._s(t.$t("Super user")))])])])],1),e("div",{staticClass:"col-6"},[e("form-field",{staticClass:"required",attrs:{name:"status"}},[e("label",{attrs:{for:"user_status"}},[t._v(t._s(t.$t("Status")))]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],attrs:{id:"user_status",required:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.status=e.target.multiple?s:s[0]}}},[e("option",{attrs:{value:"inactive"}},[t._v(t._s(t.$t("Inactive")))]),e("option",{attrs:{value:"active"}},[t._v(t._s(t.$t("Active")))])])])],1)])]},proxy:!0},{key:"footer",fn:function(){return[e("button",{directives:[{name:"show",rawName:"v-show",value:!t.isProcessing,expression:"!isProcessing"}],staticClass:"btn btn-light-border",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.close()}}},[e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Cancel")))])]),e("div",{staticClass:"flex-fill-block"}),e("button",{staticClass:"btn btn-primary btn-cons btn-loader",class:{"btn-loader-active":t.isProcessing},attrs:{type:"submit"}},[e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Create user")))])])]},proxy:!0}])})],1)},$=[],P=s("3905");const O={email:"",firstName:"",lastName:"",type:"regular",status:"active",password:"",passwordConfirm:""};var x={name:"user-create-popup",components:{popup:P["a"]},data(){return Object.assign({},O,{isProcessing:!1})},methods:{open(){this.isProcessing=!1,this.resetForm(),this.$refs.popup.open()},close(){this.isProcessing=!1,this.$refs.popup.close()},resetForm(){for(let t in O)this[t]=O[t]},submitForm(){this.isProcessing||(this.isProcessing=!0,p["a"].Users.create({email:this.email,firstName:this.firstName,lastName:this.lastName,type:this.type,status:this.status,password:this.password,passwordConfirm:this.passwordConfirm}).then(t=>{var e=d["a"].getNestedVal(t,"data.id");e&&this.$router.push({name:"users-edit",params:{userId:e}})}).catch(t=>{this.$errResponseHandler(t)}).finally(()=>{this.isProcessing=!1}))}}},N=x,U=Object(_["a"])(N,y,$,!1,null,null,null),j=U.exports,k={name:"users-index",components:{"app-footer":i["a"],"home-sidebar":n["a"],"users-listing":w,"user-create-popup":j},beforeMount(){this.$setDocumentTitle(()=>this.$t("Users"))},methods:{openCreatePopup(){this.$refs.createPopup&&this.$refs.createPopup.open()}}},T=k,A=Object(_["a"])(T,r,a,!1,null,null,null);e["default"]=A.exports}}]);