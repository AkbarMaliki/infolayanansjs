(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-105a54c4"],{"58c9":function(t,e,a){},"73a9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"text-center d-sm-none"},[t.menuTrigger?t._e():s("v-touch",{staticStyle:{width:"40px",background:"transparent",height:"900px",position:"absolute",left:"0","z-index":"10001"},on:{swiperight:t.onSwipeRight}})],1),s("div",{staticClass:"container-fluid anim shadow-lg",staticStyle:{background:"#343A40"}},[s("div",{staticClass:"row anim"},[s("div",{staticClass:"anim col-4 col-sm-3 col-md-2",staticStyle:{position:"fixed",padding:"0",margin:"0","min-height":"760px"},style:{background:t.bgleft1}},[s("div",{staticClass:"text-center text-black font-bold text-times text-xs",staticStyle:{height:"50px",margin:"none","padding-top":"10px"},style:{background:t.bgleft2}},[s("img",{staticClass:"kinoLightBox img-fluid  ",staticStyle:{width:"70%"},attrs:{src:a("f9cc")}})]),s("div",{staticClass:"text-center",style:{background:t.bgleft2}},[s("br"),s("hr",{staticClass:"style13",staticStyle:{margin:"0",padding:"0"}}),t._m(0),s("hr",{staticClass:"style13",staticStyle:{margin:"0",padding:"0"}}),s("div",{staticClass:"bord hover:bg-blue text-left pl-3 font-bold animated fadeInLeft",staticStyle:{"border-top":"2px solid black",color:"black"},on:{click:function(e){return t.$router.push("/ld/dashboard")}}},[s("span",{staticClass:"typcn typcn-home"}),t._v(" Dashboard "),s("span",{staticClass:"typcn typcn-arrow-down float-right"})]),s("div",{staticClass:"bord hover:bg-blue text-left pl-3 font-bold animated fadeInLeft",staticStyle:{"border-top":"2px solid black",color:"black"},on:{click:function(e){return t.muncul(e)}}},[s("span",{staticClass:"typcn typcn-user-add-outline"}),t._v(" BCSU "),s("span",{staticClass:"typcn typcn-arrow-down float-right"})]),s("ul",{staticClass:"isaktif pl-4 anim mb-3 text-black"},[s("li",{staticClass:"bord hover:bg-blue text-left pl-3 font-bold animated fadeInLeft",on:{click:function(e){return t.$router.push("/ld/input")}}},[t._v("Entry Peminjaman Dokumen")]),s("li",{staticClass:"bord hover:bg-blue text-left pl-3 font-bold animated fadeInLeft",on:{click:function(e){return t.$router.push("/ld/list-data")}}},[t._v("Report")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"admin"==t.$store.state.users.akses,expression:"$store.state.users.akses=='admin'"}],staticClass:"bord hover:bg-blue text-left pl-3 font-bold animated fadeInLeft",staticStyle:{"border-top":"2px solid black",color:"black"},on:{click:function(e){return t.muncul(e)}}},[s("span",{staticClass:"typcn typcn-database"}),t._v(" Loan Document "),s("button",{directives:[{name:"show",rawName:"v-show",value:t.leng>0,expression:"leng>0"}],staticClass:"btn btn-sm btn-danger ml-5",attrs:{type:"button",name:"",id:""}},[t._v(t._s(t.leng))]),s("span",{staticClass:"typcn typcn-arrow-down float-right"})]),s("ul",{staticClass:"isaktif pl-4 anim mb-3 text-black"},[s("li",{staticClass:"bord hover:bg-blue text-left pl-3 font-bold animated fadeInLeft",on:{click:function(e){return t.$router.push("/ld/list-pinjaman")}}},[t._v("Review Peminjaman Dokumen")])]),s("div",{staticClass:"bord hover:bg-blue bg-blue text-left pl-3 font-bold animated fadeInLeft",staticStyle:{"border-top":"2px solid black",color:"black"},on:{click:function(e){return t.$router.push("/ld/changepassword")}}},[s("span",{staticClass:"typcn typcn-compass"}),t._v(" Change Password "),s("span",{staticClass:"typcn typcn-cloud-storage-outline float-right"})]),s("div",{staticClass:"bord hover:bg-blue bg-blue text-left pl-3 font-bold animated fadeInLeft",staticStyle:{"border-top":"2px solid black",color:"black"},on:{click:function(e){return t.$store.dispatch("logout")}}},[s("span",{staticClass:"typcn typcn-cancel"}),t._v(" Logout "),s("span",{staticClass:"typcn typcn-cloud-storage-outline float-right"})])]),s("div",{staticClass:"p-2 text-black font-times",staticStyle:{position:"absolute",bottom:"60px",width:"100%"}},[s("marquee",{staticClass:"cursor-pointer text-uppercase",attrs:{scrolldelay:"100"},on:{click:function(e){return t.go("https://taufikakbarmaliki.now.sh")}}},[t._v("Created By Malik")])],1)]),s("div",{staticClass:"bg-black anim",class:{"col-8 col-sm-9 col-md-10 offset-4 offset-sm-3 offset-md-2":t.menuTrigger,"col-sm-12":!t.menuTrigger}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 bg-blue-lighter",staticStyle:{padding:"0",margin:"0",position:"fixed","z-index":"100",background:"#EDEFF2"}},[t.float_menu?s("span",{staticClass:"typcn typcn-arrow-back cursor-pointer",staticStyle:{"font-size":"30px",position:"fixed",top:"20px","z-index":"30"},on:{click:function(e){t.menuTrigger=!t.menuTrigger}}}):t._e(),s("div",{staticClass:"pt-2 shadow-lg",staticStyle:{height:"50px",margin:"none",padding:"3px"},style:{background:t.bgrighttop}},[s("button",{staticClass:"btn btn-sm btn-dark ml-3",staticStyle:{"border-color":"black"},attrs:{type:"button"},on:{click:function(e){t.menuTrigger=!t.menuTrigger}}},[t._m(1)]),s("img",{staticClass:"kinoLightBox img-fluid  ",staticStyle:{width:"8%",position:"absolute",right:"10%"},attrs:{src:a("905f")}}),[s("div",{staticStyle:{position:"absolute",right:"40px",top:"5px"}},[s("button",{staticClass:"btn btn-sm btn-danger mr-2",attrs:{type:"button"},on:{click:function(e){return t.$store.dispatch("logout")}}},[t._m(2)])])]],2)]),s("div",{staticClass:"col-sm-12",staticStyle:{background:"#eceff4","min-height":"760px"},on:{click:function(e){t.menuTrigger=!1,t.menuKanan=!1}}},[s("div",{staticClass:"sm:mt-2 sm:p-2"},[s("br"),s("br"),s("router-view",{directives:[{name:"myimage",rawName:"v-myimage"},{name:"reload",rawName:"v-reload"}],staticClass:"shadow-lg p-3 rounded-lg",staticStyle:{"z-index":"10",background:"white"}})],1)])])])]),s("transition",{attrs:{tag:"div","enter-active-class":"font-bold animated fadeInRight","leave-active-class":"font-bold animated fadeOutRight",mode:"in-out"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.menuKanan,expression:"menuKanan"}],staticClass:"bg-white p-3",staticStyle:{position:"fixed","z-index":"11",right:"0",top:"0",width:"210px",height:"700px","box-shadow":"1px 1px 2px 1.5px black"}},[s("p",{staticClass:"text-center"},[t._v("Profiles")]),s("hr",{staticClass:"style16"}),s("div",{staticClass:"text-center"}),s("hr",{staticClass:"style16"}),s("p",{staticClass:"text-center text-uppercase"}),s("p",{staticClass:"text-center"}),s("br")])])],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-2"},[a("span",{staticClass:" text-md pr-2 font-bold"},[t._v("Menu")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tips"},[a("i",{staticClass:"fas fa-th",staticStyle:{color:"white","margin-left":"50px"}}),a("span",{staticClass:"tipstextB"},[t._v("Slide")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tips"},[a("i",{staticClass:"fas fa-sign-out-alt"}),a("span",{staticClass:"tipstextB"},[t._v("logout")])])}],n=(a("8e6e"),a("456d"),a("ade3")),i=(a("a481"),a("ac6a"),a("8055")),l=a.n(i),r=a("748e"),c=a("8ea4"),u=a("bc3a"),d=a.n(u),p=a("f051"),g=a("ee0b"),h=a("19d9"),f=a("38d8");function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){Object(n["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var v=l()("http://localhost:2021"),y={components:{imageku:p["a"],menus:c["a"],dropdown:r["a"],Busy:g["a"],Footer:h["a"],Navbar:f["a"]},data:function(){return{leng:0,bgleft1:"#EDEFF2",bgleft2:"#EDEFF2",bgleft3:"#343A40",bgrighttop:"dark",test:1,menuTrigger:!0,menuKanan:!1,bearer:"",datanya:[],float_menu:!1,busy:!1}},methods:{refreshNotif:function(){var t=this,e=new FormData;e.append("data","select dibaca from permintaan where dibaca='false'"),e.append("database","loandocument"),d.a.post("http://localhost:8080/api/mysql/auto.php",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){t.leng=e.data.length,console.log(t.leng),t.$forceUpdate()}))},go:function(t){window.location=t},muncul:function(t){t.target.nextElementSibling.classList.toggle("isaktif")},onSwipeRight:function(){this.menuTrigger=!0},scrollOnLoad:function(){var t=this;this.$el.querySelectorAll("a.scrollactive-item").forEach((function(e){e.hash==t.$route.hash&&e.click()}))},cekAuth:function(){var t=this;null!=localStorage.getItem("auth._token.local")&&("false"==localStorage.getItem("auth._token.local")?"false"!=localStorage.getItem("auth.local")&&d.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:localStorage.getItem("auth.local")}}).then((function(e){t.$store.commit("changeUser",e.data.user)})):d.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){t.$store.commit("changeUser",e.data.user)})))},loginOAuth:function(){var t=this,e=document.URL.indexOf("?json");e=document.URL.slice(0,e);var a=document.URL.indexOf("xxx");if(-1!=a){var s=document.URL.slice(a).replace("%20"," ").replace("#/","").replace("xxx=","");console.log(s),this.bearer=s,localStorage.setItem("auth._token.local",s),localStorage.setItem("auth.local",s),d.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:s}}).then((function(a){console.log(a.data),t.$store.commit("changeUser",a.data.user),console.log(t.$store.state.user),setTimeout((function(){window.location=e}),500)}))}},isLoginNotLocal:function(){var t=this,e=this;this.$store.state.auth.loggedIn&&"local"!=this.$store.state.auth.strategy&&!this.$store.state.auth.isAuth&&(this.busy=!0,setTimeout((function(){if(t.busy=!1,t.$store.dispatch("auth/goAuth",t.$store.state.auth.isAuth),"local"!=t.$auth.$state.strategy){var a=new Date;localStorage.setItem("expireDate",new Date(a.getTime()+36e5));var s=t.$auth.user;"facebook"==t.$auth.$state.strategy&&(s.picture=t.$auth.user.picture.data.url,s.verified=!0),t.$auth.loginWith("local",{data:b(b({},s),{},{oAuth:!0})}).then((function(a){
//! setelah di ganti ke login local maka redirect kemana?
t.busy=!0,setTimeout((function(){t.busy=!1,e.$store.dispatch("userRefresh"),t.$router.push("/")}),500)}))}}),1e3))},version:function(){null==localStorage.getItem("version")&&localStorage.setItem("version",1)},newStuff:function(){if(localStorage.getItem("newstuff")!=this.$store.state.version){var t=indexedDB.deleteDatabase(this.$store.state.indexdb);t.onsuccess=function(){console.log("Deleted database successfully")},t.onerror=function(){console.log("Couldn't delete database")},t.onblocked=function(){console.log("Couldn't delete database due to the operation being blocked")},localStorage.clear(),localStorage.setItem("newstuff",this.$store.state.version),alert("new version")}},mediaQueries:function(){this.$store.commit("mediaQueries",window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl")},init:function(){this.scrollOnLoad(),"dekstop"!=this.$store.state.device&&this.isLoginNotLocal(),this.version(),this.loginOAuth()}},beforeMount:function(){var t=this,e=this;v.on("new-message",(function(t){console.log("new-scket"),e.refreshNotif()}));var a=new FormData;a.append("data","select * from user"),d.a.post("http://localhost:8080/api/mysql/ld/getUser.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){console.log(e),t.$store.commit("changeUsers",e.data[0]),localStorage.setItem("users",JSON.stringify(e.data[0])),console.log(e.data[0])}))},mounted:function(){this.refreshNotif(),this.$store.state.users||this.$router.push("/ld/login")}},x=y,w=(a("ff72"),a("2877")),k=Object(w["a"])(x,s,o,!1,null,"822b41fc",null);e["default"]=k.exports},"905f":function(t,e,a){t.exports=a.p+"img/bumn.a30ccf43.png"},f9cc:function(t,e,a){t.exports=a.p+"img/btn.44a0c177.png"},ff72:function(t,e,a){"use strict";var s=a("58c9"),o=a.n(s);o.a}}]);
//# sourceMappingURL=chunk-105a54c4.a4b20048.js.map