(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-sms_blast_on"],{b550:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[e("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,192L16,202.7C32,213,64,235,96,213.3C128,192,160,128,192,101.3C224,75,256,85,288,85.3C320,85,352,75,384,85.3C416,96,448,128,480,165.3C512,203,544,245,576,250.7C608,256,640,224,672,181.3C704,139,736,85,768,69.3C800,53,832,75,864,106.7C896,139,928,181,960,176C992,171,1024,117,1056,122.7C1088,128,1120,192,1152,208C1184,224,1216,192,1248,176C1280,160,1312,160,1344,186.7C1376,213,1408,267,1424,293.3L1440,320L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"}})]),e("div",{staticClass:"row"},[e("div",{staticClass:"offset-2 col-8 p-4"},[e("p",{staticClass:"text-center font-bold text-red-lighter"},[t._v("VERIFICATION CODE")]),e("div",{staticClass:"sm-form"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.vdata.id,expression:"vdata.id"}],staticClass:"form-control md-textarea",attrs:{type:"text",id:"id",name:"id",rows:"2",placeholder:"id..."},domProps:{value:t.vdata.id},on:{input:function(a){a.target.composing||t.$set(t.vdata,"id",a.target.value)}}})]),e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button"},on:{click:t.register}},[t._v("register")])])])])])},i=[],r=(e("bc3a"),e("8aa5")),n=e.n(r),o=n.a.firestore(),d={data:function(){return{vdata:{},sama:""}},methods:{test:function(){alert("y")},register:function(){var t=this,a=this;o.collection("sms_blast").get().then((function(e){var s=e.docs.map((function(t){return t.data()})),i=!1;s=s.filter((function(t){if(t.id==a.vdata.id)return localStorage.setItem("machineid",t.id),t;i="false"})),t.sama=i,s.length>0?a.$router.push("/sms_blast"):alert("tidak terdaftar")}))}},mounted:function(){var t=this;this.vdata.id=this.$route.query.id,this.$forceUpdate(),setTimeout((function(){t.register()}),2e3)}},l=d,c=e("2877"),C=Object(c["a"])(l,s,i,!1,null,null,null);a["default"]=C.exports}}]);
//# sourceMappingURL=page-sms_blast_on.86b8fef6.js.map