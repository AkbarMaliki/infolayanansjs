(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-sms_blast"],{"2ba4":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[s("path",{attrs:{fill:"#0099ff","fill-opacity":"1",d:"M0,192L16,202.7C32,213,64,235,96,213.3C128,192,160,128,192,101.3C224,75,256,85,288,85.3C320,85,352,75,384,85.3C416,96,448,128,480,165.3C512,203,544,245,576,250.7C608,256,640,224,672,181.3C704,139,736,85,768,69.3C800,53,832,75,864,106.7C896,139,928,181,960,176C992,171,1024,117,1056,122.7C1088,128,1120,192,1152,208C1184,224,1216,192,1248,176C1280,160,1312,160,1344,186.7C1376,213,1408,267,1424,293.3L1440,320L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"}})]),s("div",{staticClass:"row"},[s("div",{staticClass:"offset-2 col-8 p-4 animated fadeInDown"},[s("p",{staticClass:"text-center font-bold text-red-lighter"},[t._v("KIRIM Whatsapp")]),s("div",{staticClass:"sm-form"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],staticClass:"form-control md-textarea",attrs:{type:"text",id:"message",name:"message",rows:"2",placeholder:"message..."},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),s("br"),s("input",{attrs:{type:"file",multiple:"false",id:"sheets"},on:{change:t.onchange}}),s("br"),t._l(t.listhp,(function(e,a){return s("div",{key:a,staticClass:"shadow-lg rounded-lg mt-1 p-2 row"},[s("div",{staticClass:"col-10"},[s("p",{staticClass:"pl-3 font-times font-bold text-sm"},[t._v("No HP : "+t._s(e.nohp))]),s("p",{staticClass:"pl-3 font-times font-bold text-sm"},[t._v("Nama : "+t._s(e.nama))])]),s("div",{staticClass:"col-2"},[s("div",{staticClass:"tips"},[s("button",{staticClass:"btn btn-sm btn-style9",staticStyle:{background:"red"},attrs:{type:"button"},on:{click:function(e){return t.hapus(a)}}},[t._v("X")]),s("span",{staticClass:"tipstextL"},[t._v("Hapus")])])])])})),s("div",{staticClass:"text-center"},[s("button",{staticClass:"btn btn-sm btn-success",attrs:{type:"button"},on:{click:t.kirim}},[s("span",{staticClass:"typcn typcn-message-typing"}),t._v(" Kirim ")])])],2)]),s("div",{staticClass:"offset-2 col-8 p-4"},[t.mulai?s("div",{attrs:{id:"txtnya"},domProps:{textContent:t._s(t.hasil)}}):t._e(),t.mulai?s("div",{attrs:{id:"txtnya2"},domProps:{textContent:t._s(t.hasil2)}}):t._e()])])])},i=[],n=(s("7f7f"),s("ac6a"),s("bc3a")),o=s.n(n),l=s("8aa5"),r=s.n(l),c=r.a.firestore(),f={data:function(){return{vdata:{},file:"",imgs:[],ready:!1,mulai:!1,listhp:[],gambar:"",message:"",message2:""}},computed:{hasil:function(){var t=this.message;return t=encodeURI(t),t},hasil2:function(){var t=this.message2;return t}},methods:{hapus:function(t){confirm("Apakah yakin menghapus?")&&this.listhp.splice(t,1)},onchange:function(t){var e=this,s=new FileReader;s.onload=function(t){var s=t.target.result,a=XLSX.read(s,{type:"binary"});a.SheetNames.forEach((function(t){var s=XLSX.utils.sheet_to_row_object_array(a.Sheets[t]),i=JSON.stringify(s);e.listhp=JSON.parse(i),e.$forceUpdate(),console.log(i)}))},s.onerror=function(t){console.error("file gagal proses"+t.target.error.code)},s.readAsBinaryString(t.target.files[0])},test:function(){alert("y")},kirim:function(){this.message2=JSON.stringify(this.listhp),this.mulai=!this.mulai},getFile:function(t){this.file=t.target.files[0]},compress:function(t){var e,s,a=this;t.target.files[0].size>1e7?alert("File yang di upload tidak sesuai kriteria"):t.target.files.length>0&&function(){for(var i,n=[],o=[],l="null",r=0;r<t.target.files.length;r++)a.imgs.push(t.target.files[r]),e=t.target.files[r],s=new FileReader,s.onload=function(t){},s.readAsDataURL(e),i=t.target.files[r],l=i.size<1e6?30:i.size<2e6?25:i.size<3e6?20:i.size<4e6?15:10,a.$daycaca.compress(i,l,(function(t){a.gambar=t,n.push(t),a.$urltofile(t,i.name,i.type).then((function(t){o.push(t)}))}));console.log("base64",n),a.gambar=n,setTimeout((function(){console.log("file",o[0]),a.file=o[0],a.ready=!0}),1e3)}()},inputfile:function(){var t=new FormData;t.append("file",this.file),t.append("id",this.$store.state.users.id),o.a.post("https://infolayanans.space/api/mysql/upload.php",t,{headers:{"content-type":"multipart/form-data"}}).then((function(t){console.log(t)}))}},beforeMount:function(){var t=this;c.collection("sms_blast").get().then((function(e){var s=e.docs.map((function(t){return t.data()})),a=!1;s=s.filter((function(t){if(t.id==localStorage.getItem("machineid"))return localStorage.setItem("machineid",t.id),t;a="false"})),t.sama=a,console.log(s),s.length}))}},u=f,p=s("2877"),m=Object(p["a"])(u,a,i,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=page-sms_blast.c5894e8b.js.map