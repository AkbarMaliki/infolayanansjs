(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a2c55e5"],{1259:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.busy?a("Busy"):t._e(),a("imageku",{staticStyle:{"z-index":"1000"}}),a("div",{staticClass:"text-center d-sm-none"},[t.menuTrigger?t._e():a("v-touch",{staticStyle:{width:"40px",background:"transparent",height:"900px",position:"absolute",left:"0","z-index":"10001"},on:{swiperight:t.onSwipeRight}})],1),a("div",{staticClass:"container-fluid anim shadow-lg",staticStyle:{background:"#343A40"}},[a("div",{staticClass:"row anim"},[a("div",{staticClass:"anim col-4 col-sm-3 col-md-2",staticStyle:{position:"fixed",padding:"0",margin:"0","min-height":"760px"},style:{background:t.bgleft1}},[a("div",{staticClass:"text-center text-white font-bold text-times text-xs",staticStyle:{height:"50px",margin:"none","padding-top":"10px","border-bottom":"1px solid gray"},style:{background:t.bgleft2}},[a("span",{staticClass:"pt-2 text-md pr-2 text-uppercase"},[t._v("HALAMAN ")]),a("span",{staticClass:"typcn typcn-thermometer"})]),a("div",{staticClass:"text-center",style:{background:t.bgleft2}},[a("br"),a("img",{staticClass:"kinoLightBox img-fluid  ",staticStyle:{width:"40%"},attrs:{src:s("36b8")}}),a("br"),a("br"),a("p",{staticClass:"font-times font-bold"},[t._v("APLIKASI SEDERHANA INPUT LAPORAN")]),a("br"),a("div",{staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",staticStyle:{"border-top":"2px solid black",color:"white"},on:{click:function(e){return t.$router.push("/sdd")}}},[a("span",{staticClass:"typcn typcn-home"}),t._v(" Dashboard "),a("span",{staticClass:"typcn typcn-arrow-down float-right"})]),a("div",{staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",staticStyle:{"border-top":"2px solid black",color:"white"},on:{click:function(e){return t.muncul(e)}}},[a("span",{staticClass:"typcn typcn-spanner"}),t._v(" Setting "),a("span",{staticClass:"typcn typcn-arrow-down float-right"})]),a("ul",{staticClass:"isaktif pl-4 anim mb-3 text-white"},[a("li",{staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",on:{click:function(e){return t.$router.push("/sdd/set-user")}}},[t._v("Profile")]),a("li",{staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",on:{click:function(e){return t.$router.push("/sdd/set-cabang")}}},[t._v("List Cabang")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"koordinator"==t.$store.state.users.posisi,expression:"$store.state.users.posisi=='koordinator'"}],staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",staticStyle:{"border-top":"2px solid black",color:"white"},on:{click:function(e){return t.muncul(e)}}},[a("span",{staticClass:"typcn typcn-spanner"}),t._v(" Koordinator "),a("span",{staticClass:"typcn typcn-arrow-down float-right"})]),a("ul",{staticClass:"isaktif pl-4 anim mb-3 text-white"},[a("li",{staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",on:{click:function(e){return t.$router.push("/sdd/laporan-kanwil")}}},[t._v("Laporan Kanwil")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:"head"==t.$store.state.users.posisi,expression:"$store.state.users.posisi=='head'"}],staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",staticStyle:{"border-top":"2px solid black",color:"white"},on:{click:function(e){return t.muncul(e)}}},[a("span",{staticClass:"typcn typcn-spanner"}),t._v(" Head "),a("span",{staticClass:"typcn typcn-arrow-down float-right"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:"admin"==t.$store.state.users.posisi,expression:"$store.state.users.posisi=='admin'"}],staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",staticStyle:{"border-top":"2px solid black",color:"white"},on:{click:function(e){return t.muncul(e)}}},[a("span",{staticClass:"typcn typcn-spanner"}),t._v(" Admin "),a("span",{staticClass:"typcn typcn-arrow-down float-right"})]),a("ul",{staticClass:"isaktif pl-4 anim mb-3 text-white"},[a("li",{staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",on:{click:function(e){return t.$router.push("/sdd/laporan-all")}}},[t._v("Laporan Semua")]),a("li",{staticClass:"bord hover:bg-red text-left pl-3 animated fadeInLeft",on:{click:function(e){return t.$router.push("/sdd/list-user")}}},[t._v("List User")])])])]),a("div",{staticClass:"bg-black anim",class:{"col-8 col-sm-9 col-md-10 offset-4 offset-sm-3 offset-md-2":t.menuTrigger,"col-sm-12":!t.menuTrigger}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12",staticStyle:{padding:"0",margin:"0"}},[t.float_menu?a("span",{staticClass:"typcn typcn-arrow-back cursor-pointer",staticStyle:{"font-size":"30px",position:"fixed",top:"20px","z-index":"30"},on:{click:function(e){t.menuTrigger=!t.menuTrigger}}}):t._e(),a("div",{staticClass:"pt-2",staticStyle:{height:"50px",margin:"none",padding:"3px"},style:{background:t.bgrighttop}},[a("button",{staticClass:"btn btn-sm btn-dark ml-3",staticStyle:{"border-color":"white"},attrs:{type:"button"},on:{click:function(e){t.menuTrigger=!t.menuTrigger}}},[t._m(0)]),a("span",{staticClass:"text-white font-times pl-5 text-sm"}),[a("div",{staticStyle:{position:"absolute",right:"40px",top:"5px"}},[a("button",{staticClass:"btn btn-sm btn-danger  mt-1",attrs:{type:"button"},on:{click:function(e){return t.$store.dispatch("logout")}}},[t._m(1)])])]],2)]),a("div",{staticClass:"col-sm-12",staticStyle:{background:"#eceff4","min-height":"760px"},on:{click:function(e){t.menuTrigger=!1,t.menuKanan=!1}}},[a("div",{staticClass:"sm:mt-2 sm:p-2"},[a("router-view",{directives:[{name:"myimage",rawName:"v-myimage"},{name:"reload",rawName:"v-reload"}],staticClass:"shadow-lg p-3 rounded-lg",staticStyle:{"z-index":"10",background:"white"}})],1)])])])]),a("transition",{attrs:{tag:"div","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight",mode:"in-out"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.menuKanan,expression:"menuKanan"}],staticClass:"bg-white p-3",staticStyle:{position:"fixed","z-index":"11",right:"0",top:"0",width:"210px",height:"700px","box-shadow":"1px 1px 2px 1.5px black"}},[a("p",{staticClass:"text-center"},[t._v("Profiles")]),a("hr",{staticClass:"style16"}),a("div",{staticClass:"text-center"}),a("hr",{staticClass:"style16"}),a("p",{staticClass:"text-center text-uppercase"}),a("p",{staticClass:"text-center"}),a("br")])])],1)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tips"},[s("i",{staticClass:"fas fa-th",staticStyle:{color:"white","margin-left":"50px"}}),s("span",{staticClass:"tipstextB"},[t._v("Slide")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tips"},[s("i",{staticClass:"fas fa-sign-out-alt"}),s("span",{staticClass:"tipstextB"},[t._v("Logout")])])}],o=(s("8e6e"),s("456d"),s("7618")),n=s("bd86"),r=(s("a481"),s("ac6a"),s("748e")),c=s("8ea4"),l=s("bc3a"),u=s.n(l),d=s("f051"),p=s("ee0b"),h=s("19d9"),f=s("38d8");function g(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(s,!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var b={components:{imageku:d["a"],menus:c["a"],dropdown:r["a"],Busy:p["a"],Footer:h["a"],Navbar:f["a"]},data:function(){return{bgleft1:"#343A40",bgleft2:"#232e30",bgleft3:"#343A40",bgrighttop:"dark",test:1,menuTrigger:!1,menuKanan:!1,bearer:"",float_menu:!1,busy:!1}},methods:{muncul:function(t){t.target.nextElementSibling.classList.toggle("isaktif")},onSwipeRight:function(){this.menuTrigger=!0},scrollOnLoad:function(){var t=this;this.$el.querySelectorAll("a.scrollactive-item").forEach((function(e){e.hash==t.$route.hash&&e.click()}))},cekAuth:function(){var t=this;null!=localStorage.getItem("auth._token.local")&&("false"==localStorage.getItem("auth._token.local")?"false"!=localStorage.getItem("auth.local")&&u.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:localStorage.getItem("auth.local")}}).then((function(e){t.$store.commit("changeUser",e.data.user)})):u.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){t.$store.commit("changeUser",e.data.user)})))},loginOAuth:function(){var t=this,e=document.URL.indexOf("?json");e=document.URL.slice(0,e);var s=document.URL.indexOf("xxx");if(-1!=s){var a=document.URL.slice(s).replace("%20"," ").replace("#/","").replace("xxx=","");console.log(a),this.bearer=a,localStorage.setItem("auth._token.local",a),localStorage.setItem("auth.local",a),u.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:a}}).then((function(s){console.log(s.data),t.$store.commit("changeUser",s.data.user),console.log(t.$store.state.user),setTimeout((function(){window.location=e}),500)}))}},isLoginNotLocal:function(){var t=this,e=this;this.$store.state.auth.loggedIn&&"local"!=this.$store.state.auth.strategy&&!this.$store.state.auth.isAuth&&(this.busy=!0,setTimeout((function(){if(t.busy=!1,t.$store.dispatch("auth/goAuth",t.$store.state.auth.isAuth),"local"!=t.$auth.$state.strategy){var s=new Date;localStorage.setItem("expireDate",new Date(s.getTime()+36e5));var a=t.$auth.user;"facebook"==t.$auth.$state.strategy&&(a.picture=t.$auth.user.picture.data.url,a.verified=!0),t.$auth.loginWith("local",{data:m({},a,{oAuth:!0})}).then((function(s){
//! setelah di ganti ke login local maka redirect kemana?
t.busy=!0,setTimeout((function(){t.busy=!1,e.$store.dispatch("userRefresh"),t.$router.push("/")}),500)}))}}),1e3))},version:function(){null==localStorage.getItem("version")&&localStorage.setItem("version",1)},newStuff:function(){if(localStorage.getItem("newstuff")!=this.$store.state.version){var t=indexedDB.deleteDatabase(this.$store.state.indexdb);t.onsuccess=function(){console.log("Deleted database successfully")},t.onerror=function(){console.log("Couldn't delete database")},t.onblocked=function(){console.log("Couldn't delete database due to the operation being blocked")},localStorage.clear(),localStorage.setItem("newstuff",this.$store.state.version),alert("new version")}},mediaQueries:function(){this.$store.commit("mediaQueries",window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl")},init:function(){"dekstop"!=this.$store.state.device&&this.isLoginNotLocal(),this.version(),this.loginOAuth()}},mounted:function(){var t=this;if(localStorage.getItem("auth._token.local")){var e=new FormData;u.a.post("https://infolayanans.space/api/mysql/getUser.php",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){console.log(e),t.$store.commit("changeUsers",e.data[0]),localStorage.setItem("users",JSON.stringify(e.data[0])),"3"==t.$store.state.users.reset?t.$router.push("/sdd/register2"):"0"==t.$store.state.users.reset&&t.$router.push("/sdd/reset")})).catch((function(t){console.log(t)}))}else this.$router.push("/sdd/login");var s=this;window.addEventListener("scroll",(function(t){var e=this.scrollY;s.float_menu=e>80})),this.$store.dispatch("auth"),"object"==("undefined"===typeof cordova?"undefined":Object(o["a"])(cordova))&&document.addEventListener("deviceready",(function(){cordova.plugins.backgroundMode.enable(),cordova.plugins.backgroundMode.on("EVENT",(function(){})),cordova.plugins.backgroundMode.setDefaults({title:"HELLO",text:"World",hidden:!0,silent:!0}),cordova.plugins.notification.local.setDefaults({led:{color:"#FF00FF",on:500,off:500},vibrate:[100,50,200]})})),this.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){s.mediaQueries()}))})),this.init(),setTimeout((function(){t.$store.commit("nossr",!0)}),100),this.$nuxt.$on("busy",(function(e){t.busy=e}))}},v=b,x=(s("b654"),s("2877")),y=Object(x["a"])(v,a,i,!1,null,"7a6d56a0",null);e["default"]=y.exports},"36b8":function(t,e,s){t.exports=s.p+"img/sdd.77898594.png"},b654:function(t,e,s){"use strict";var a=s("fade"),i=s.n(a);i.a},fade:function(t,e,s){}}]);
//# sourceMappingURL=chunk-3a2c55e5.6622b39a.js.map