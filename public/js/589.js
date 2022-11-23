"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[589],{3722:(s,o,e)=>{e.d(o,{Z:()=>n});const t={props:["on"]};const n=(0,e(1900).Z)(t,(function(){var s=this,o=s._self._c;return o("span",[o("transition",{attrs:{"leave-active-class":"transition ease-in duration-1000","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[o("span",{directives:[{name:"show",rawName:"v-show",value:s.on,expression:"on"}],staticClass:"gray-text"},[s._t("default")],2)])],1)}),[],!1,null,null,null).exports},7589:(s,o,e)=>{e.r(o),e.d(o,{default:()=>n});const t={props:["sessions"],data:function(){return{confirmingLogout:!1,form:this.$inertia.form({password:""})}},methods:{confirmLogout:function(){var s=this;this.confirmingLogout=!0,setTimeout((function(){var o;return null===(o=s.$refs.password)||void 0===o?void 0:o.focus()}),250)},logoutOtherBrowserSessions:function(){var s=this;this.form.delete(route("other-browser-sessions.destroy"),{preserveScroll:!0,onSuccess:function(){return s.closeModal()},onError:function(){return s.$refs.password.focus()},onFinish:function(){return s.form.reset()}})},closeModal:function(){this.confirmingLogout=!1,this.form.reset()}},components:{ActionMessage:e(3722).Z}};const n=(0,e(1900).Z)(t,(function(){var s=this,o=s._self._c;return o("v-layout",{attrs:{row:"",wrap:""},scopedSlots:s._u([{key:"content",fn:function(){},proxy:!0}])},[o("v-flex",{attrs:{xs12:"",sm6:""}},[o("h3",[s._v("Browser Sessions")]),s._v(" "),o("h5",[s._v("Manage and logout your active sessions on other browsers and devices.")])]),s._v(" "),o("v-flex",{attrs:{xs12:"",sm6:""}},[o("v-card",{staticClass:"pa-3"},[o("div",{staticClass:"max-w-xl text-sm text-gray-600"},[s._v("\n        If necessary, you may logout of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.\n      ")]),s._v(" "),s.sessions.length>0?o("div",{staticClass:"mt-5 space-y-6"},s._l(s.sessions,(function(e,t){return o("div",{key:t,staticClass:"flex items-center"},[o("div",[e.agent.is_desktop?o("v-icon",[s._v("mdi-laptop")]):s._e()],1),s._v(" "),o("div",{staticClass:"ml-3"},[o("div",{staticClass:"text-sm text-gray-600"},[s._v("\n              "+s._s(e.agent.platform)+" - "+s._s(e.agent.browser)+"\n            ")]),s._v(" "),o("div",[o("div",{staticClass:"text-xs text-gray-500"},[s._v("\n                "+s._s(e.ip_address)+",\n\n                "),e.is_current_device?o("span",{staticClass:"text-green-500 font-semibold"},[s._v("This device")]):o("span",[s._v("Last active "+s._s(e.last_active))])])])])])})),0):s._e(),s._v(" "),o("div",{staticClass:"flex items-center mt-5"},[o("v-btn",{nativeOn:{click:function(o){return s.confirmLogout.apply(null,arguments)}}},[s._v("\n          Logout Other Browser Sessions\n        ")]),s._v(" "),o("ActionMessage",{staticClass:"ml-3",attrs:{on:s.form.recentlySuccessful}},[s._v("\n          Done.\n        ")])],1),s._v(" "),o("v-dialog",{on:{close:s.closeModal},scopedSlots:s._u([{key:"title",fn:function(){return[s._v("\n          Logout Other Browser Sessions\n        ")]},proxy:!0},{key:"content",fn:function(){return[s._v("\n          Please enter your password to confirm you would like to logout of your other browser sessions across all of your devices.\n\n          "),o("div",{staticClass:"mt-4"},[o("v-text-field",{ref:"current_password",attrs:{"error-messages":s.form.errors.password,label:"Password",type:"password",autocomplete:"password"},nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&s._k(o.keyCode,"enter",13,o.key,"Enter")?null:s.logoutOtherBrowserSessions.apply(null,arguments)}},model:{value:s.form.password,callback:function(o){s.$set(s.form,"password",o)},expression:"form.password"}})],1)]},proxy:!0},{key:"footer",fn:function(){return[o("v-btn",{nativeOn:{click:function(o){return s.closeModal.apply(null,arguments)}}},[s._v("\n            Nevermind\n          ")]),s._v(" "),o("v-btn",{nativeOn:{click:function(o){return s.logoutOtherBrowserSessions.apply(null,arguments)}}},[s._v("\n            Logout Other Browser Sessions\n          ")])]},proxy:!0}]),model:{value:s.confirmingLogout,callback:function(o){s.confirmingLogout=o},expression:"confirmingLogout"}})],1)],1)],1)}),[],!1,null,null,null).exports}}]);