"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[649],{3722:(s,r,o)=>{o.d(r,{Z:()=>a});const e={props:["on"]};const a=(0,o(1900).Z)(e,(function(){var s=this,r=s._self._c;return r("span",[r("transition",{attrs:{"leave-active-class":"transition ease-in duration-1000","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[r("span",{directives:[{name:"show",rawName:"v-show",value:s.on,expression:"on"}],staticClass:"gray-text"},[s._t("default")],2)])],1)}),[],!1,null,null,null).exports},649:(s,r,o)=>{o.r(r),o.d(r,{default:()=>a});const e={data:function(){return{hidepassword:!0,form:this.$inertia.form({current_password:"",password:"",password_confirmation:""})}},methods:{updatePassword:function(){var s=this;this.form.put(route("password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:function(){return s.form.reset()},onError:function(r){s.form.errors=r,s.form.errors.password&&s.form.reset("password","password_confirmation"),s.form.errors.current_password&&(s.form.reset("current_password"),s.$refs.current_password.focus())}})}},components:{ActionMessage:o(3722).Z}};const a=(0,o(1900).Z)(e,(function(){var s=this,r=s._self._c;return r("v-layout",{staticClass:"mt-10",attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",sm6:""}},[r("h3",[s._v("Update Password")]),s._v(" "),r("h5",[s._v("Ensure your account is using a long, random password to stay secure.")])]),s._v(" "),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-card",{staticClass:"pa-3"},[r("form",{on:{submit:function(r){return r.preventDefault(),s.updatePassword.apply(null,arguments)}}},[r("div",{staticClass:"col-span-6 sm:col-span-4"},[r("v-text-field",{ref:"current_password",attrs:{"error-messages":s.form.errors.current_password,label:"Current Password",type:"password",autocomplete:"current-password"},model:{value:s.form.current_password,callback:function(r){s.$set(s.form,"current_password",r)},expression:"form.current_password"}})],1),s._v(" "),r("div",{staticClass:"col-span-6 sm:col-span-4"},[r("v-text-field",{attrs:{"error-messages":s.form.errors.password,label:"password",required:"",autocomplete:"password","append-icon":s.hidepassword?"mdi-eye":"mdi-eye-off",type:s.hidepassword?"password":"text"},on:{"click:append":function(){return s.hidepassword=!s.hidepassword}},model:{value:s.form.password,callback:function(r){s.$set(s.form,"password",r)},expression:"form.password"}})],1),s._v(" "),r("div",{staticClass:"col-span-6 sm:col-span-4"},[r("v-text-field",{attrs:{"error-messages":s.form.errors.password_confirmation,"append-icon":s.form.password===s.form.password_confirmation?"mdi-check-circle":"mdi-alert-circle-outline",label:"Confirm Password",type:s.hidepassword?"password":"text",required:"",autocomplete:"new-password"},model:{value:s.form.password_confirmation,callback:function(r){s.$set(s.form,"password_confirmation",r)},expression:"form.password_confirmation"}})],1),s._v(" "),r("v-btn",{class:{"opacity-25":s.form.processing},attrs:{type:"submit",disabled:s.form.processing}},[s._v("\n          Save\n        ")]),s._v(" "),r("ActionMessage",{staticClass:"mr-3",attrs:{on:s.form.recentlySuccessful}},[s._v("\n          Saved.\n        ")])],1)])],1)],1)}),[],!1,null,null,null).exports}}]);