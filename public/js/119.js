"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[119],{4119:(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});const o={props:{value:Boolean},data:function(){return{form:this.$inertia.form({name:"",system:!1,model:{},options:null,schema:null})}},computed:{hasPermission:function(){return this.$page.props.auth.user.data.roles.includes("superadmin")},show:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},title:function(){return this.form.title}},methods:{submit:function(){var t=this;this.form.post("/admin/schemas",{onSuccess:function(e){console.log("forms create",e),t.$emit("submit",e.data),t.form.reset(),t.show=!1},onFinish:function(){}})}}};const n=(0,s(1900).Z)(o,(function(){var t=this,e=t._self._c;return e("v-dialog",{staticClass:"pa-3",attrs:{"max-width":"500px"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("v-card",[e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("v-card-title",{staticClass:"text-h5"},[t._v("\n        Add Form\n      ")]),t._v(" "),e("v-card-text",[t.hasPermission?e("v-checkbox",{attrs:{label:"System"},model:{value:t.form.system,callback:function(e){t.$set(t.form,"system",e)},expression:"form.system"}}):t._e(),t._v(" "),e("v-text-field",{attrs:{"error-messages":t.form.errors.name,label:"Name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){e.stopPropagation(),t.show=!1}}},[t._v("Close")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{type:"submit",color:"primary"}},[t._v("Create")])],1)],1)])],1)}),[],!1,null,null,null).exports}}]);