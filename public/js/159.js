"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[159,502],{2750:(t,e,i)=>{i.d(e,{LF:()=>n,Vx:()=>s,mA:()=>a});var n=function(t){return t.replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()}))},a=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()},s=function(t){try{JSON.parse(t)}catch(t){return!1}return!0};String.prototype.toTitleCase=function(){return this.split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" ")}},4086:(t,e,i)=>{i.d(e,{Z:()=>u});var n=i(8050),a=i(7215),s=i(9669),r=i.n(s);const o={name:"AdminNav",data:function(){var t,e;return{sidebarDrawer:!0,isSidebarClosed:null===(t=this.$page.props.auth.user.data.settings)||void 0===t||null===(e=t.adminNav)||void 0===e?void 0:e.isSidebarClosed,items:[{title:"Users",link:"/admin/users",icon:"mdi-account"},{title:"Pages",link:"/admin/pages",icon:"mdi-file-document-multiple-outline"},{title:"Menus",link:"/admin/menus",icon:"mdi-microsoft-xbox-controller-menu"},{title:"Forms",link:"/admin/forms",icon:"mdi-form-textbox"},{title:"SEO",link:"/admin/seo",icon:"mdi-file-find"},{title:"Settings",link:"/admin/site-settings",icon:"mdi-card-bulleted-settings-outline"}]}},computed:{mini:{get:function(){return(this.isSidebarClosed||this.$vuetify.breakpoint.smAndDown)&&this.isSidebarClosed},set:function(t){return t}}},watch:{isSidebarClosed:function(t){r().post("/user-settings",{"adminNav.isSidebarClosed":t})}}};var l=i(1900);const c={data:function(){return{}},components:{AdminNav:(0,l.Z)(o,(function(){var t=this,e=t._self._c;return e("v-navigation-drawer",{attrs:{"mini-variant":t.mini,app:"",dark:"",permanent:"",stateless:"",clipped:""},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.sidebarDrawer,callback:function(e){t.sidebarDrawer=e},expression:"sidebarDrawer"}},[e("v-list",{attrs:{dense:"",flat:"",outlined:""}},[e("v-list-item",{staticClass:"pointer",on:{click:function(e){t.isSidebarClosed=!t.isSidebarClosed}}},[t.mini?e("v-icon",[t._v("mdi-menu-open mdi-rotate-180")]):e("v-icon",[t._v("mdi-menu-open")])],1),t._v(" "),t._l(t.items,(function(i){return e("div",{key:i.title,staticClass:"pointer"},[i.items?e("v-list-group",{attrs:{"prepend-icon":i.icon},scopedSlots:t._u([{key:"activator",fn:function(){return[e("v-list-item-content",[e("v-list-item-title",[e("inertia-link",{attrs:{href:i.link||"",as:"span"}},[t._v(t._s(i.title))])],1)],1)]},proxy:!0},{key:"default",fn:function(){return t._l(i.items,(function(i){return e("v-list-item",{key:i.title,staticClass:"grey darken-1"},[i.link?e("inertia-link",{attrs:{as:"div",href:i.link}},[e("span",[t._v(t._s(i.title))])]):e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(i.title)}})],1)],1)}))},proxy:!0}],null,!0),model:{value:i.active,callback:function(e){t.$set(i,"active",e)},expression:"item.active"}}):e("inertia-link",{staticClass:"pointer",attrs:{href:i.link||"",as:"span"}},[e("v-list-item",[e("v-list-item-icon",[e("v-icon",{domProps:{textContent:t._s(i.icon)}})],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v("\n              "+t._s(i.title)+"\n            ")])],1)],1)],1)],1)}))],2)],1)}),[],!1,null,null,null).exports,MainNav:a.Z,ProfileMenu:n.Z}};const u=(0,l.Z)(c,(function(){var t=this,e=t._self._c;return e("div",[e("v-app",[e("v-app-bar",{attrs:{"clipped-left":"",app:""}},[e("MainNav"),t._v(" "),e("v-spacer"),t._v(" "),e("ProfileMenu")],1),t._v(" "),e("AdminNav"),t._v(" "),e("v-main",{staticClass:"warm"},[t._t("default")],2)],1),t._v(" "),e("portal-target",{attrs:{name:"modals",multiple:""}})],1)}),[],!1,null,null,null).exports},4502:(t,e,i)=>{i.r(e),i.d(e,{default:()=>s});var n=i(2750);const a={props:{value:Boolean},data:function(){return{form:this.$inertia.form({title:"",link:""})}},computed:{show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},title:function(){return this.form.title}},methods:{toKebabCase:n.mA,submit:function(){var t=this;this.form.post(route("admin.page.create"),{onSuccess:function(e){t.form.reset(),t.show=!1},onFinish:function(){}})}},watch:{title:function(){this.form.link=(0,n.mA)(this.form.title).replace(".","")}}};const s=(0,i(1900).Z)(a,(function(){var t=this,e=t._self._c;return e("v-dialog",{staticClass:"pa-3",attrs:{"max-width":"500px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("v-card",[e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("v-card-text",[e("v-text-field",{attrs:{"error-messages":t.form.errors.title,label:"Title",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),t._v(" "),e("v-text-field",{attrs:{"error-messages":t.form.errors.link,label:"Link",required:""},model:{value:t.form.link,callback:function(e){t.$set(t.form,"link",e)},expression:"form.link"}})],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){e.stopPropagation(),t.show=!1}}},[t._v("Close")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{type:"submit",color:"primary"}},[t._v("Create")])],1)],1)])],1)}),[],!1,null,null,null).exports},5159:(t,e,i)=>{i.r(e),i.d(e,{default:()=>r});var n=i(4086),a=i(4502);const s={layout:n.Z,props:["pages"],data:function(){return{selectedPages:[],searchPages:"",showDeleteConfirm:!1,showCreatePage:!1,headers:[{text:"Title",align:"start",sortable:!0,value:"title"},{text:"Link",align:"start",sortable:!0,value:"link"},{text:"Is Published",align:"start",sortable:!0,value:"is_published"},{text:"Actions",value:"actions",sortable:!1}],selectedPage:null}},methods:{deleteItem:function(t){this.selectedPage=t,this.showDeleteConfirm=!0},deleteItemConfirm:function(t){var e=this;this.$inertia.delete(route("admin.page.delete",{link:this.selectedPage.link}),{onSuccess:function(t){e.showDeleteConfirm=!1},onFinish:function(){}})}},components:{ShowCreatePage:a.default}};const r=(0,i(1900).Z)(s,(function(){var t=this,e=t._self._c;return e("v-container",{attrs:{fluid:""}},[e("v-app-bar",{attrs:{color:"primary"}},[e("v-toolbar-title",[t._v("Pages")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(i){var n=i.on,a=i.attrs;return[e("v-icon",t._g(t._b({on:{click:function(e){e.stopPropagation(),t.showCreatePage=!0}}},"v-icon",a,!1),n),[t._v("\n          mdi-text-box-plus\n        ")])]}}])},[t._v(" "),e("span",[t._v("Add Page")])]),t._v(" "),e("ShowCreatePage",{model:{value:t.showCreatePage,callback:function(e){t.showCreatePage=e},expression:"showCreatePage"}})],1),t._v(" "),e("v-data-table",{staticClass:"elevation-1",attrs:{search:t.searchPages,headers:t.headers,items:t.pages,"item-key":"email",dense:"","show-select":""},scopedSlots:t._u([{key:"item.title",fn:function(i){return[e("v-edit-dialog",{attrs:{"return-value":i.item.title},on:{"update:returnValue":function(e){return t.$set(i.item,"title",e)},"update:return-value":function(e){return t.$set(i.item,"title",e)}},scopedSlots:t._u([{key:"input",fn:function(){return[e("v-text-field",{attrs:{label:"Title"},model:{value:i.item.title,callback:function(e){t.$set(i.item,"title",e)},expression:"props.item.title"}})]},proxy:!0}],null,!0)},[t._v("\n        "+t._s(i.item.title)+"\n        ")])]}},{key:"top",fn:function(){return[e("v-text-field",{staticClass:"mx-4",attrs:{label:"Search",clearable:"","prepend-icon":"mdi-magnify"},model:{value:t.searchPages,callback:function(e){t.searchPages=e},expression:"searchPages"}})]},proxy:!0},{key:"item.actions",fn:function(i){var n=i.item;return[e("a",{staticClass:"text-decoration-none",attrs:{target:"_blank",href:"/".concat(n.link)}},[e("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n          mdi-file-find-outline\n        ")])],1),t._v(" "),e("inertia-link",{attrs:{href:"/admin/pages/".concat(n.id),as:"button"}},[e("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n          mdi-pencil\n        ")])],1),t._v(" "),e("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v("\n        mdi-delete\n      ")])]}}]),model:{value:t.selectedPages,callback:function(e){t.selectedPages=e},expression:"selectedPages"}}),t._v(" "),e("portal",{attrs:{to:"modals"}},[e("v-dialog",{attrs:{"max-width":"500"},model:{value:t.showDeleteConfirm,callback:function(e){t.showDeleteConfirm=e},expression:"showDeleteConfirm"}},[e("v-card",[e("v-card-title",{staticClass:"text-h5"},[t._v("\n          Delete Page?\n        ")]),t._v(" "),e("v-card-text",[t._v("\n          Are you sure you and to delete this page?\n        ")]),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{text:""},on:{click:function(e){t.showDeleteConfirm=!1}}},[t._v("\n            Don't Delete\n          ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{color:"red darken-1 white--text"},on:{click:function(e){return t.deleteItemConfirm()}}},[t._v("\n            Delete\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);