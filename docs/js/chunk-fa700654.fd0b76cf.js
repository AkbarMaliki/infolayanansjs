(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa700654"],{"03a0":function(t,e,a){var n=a("25bb"),i=a("d309");t.exports={distanceInWords:n(),format:i()}},"25bb":function(t,e){function a(){var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}};function e(e,a,n){var i;return n=n||{},i="string"===typeof t[e]?t[e]:1===a?t[e].one:t[e].other.replace("{{count}}",a),n.addSuffix?n.comparison>0?"dalam waktu "+i:i+" yang lalu":i}return{localize:e}}t.exports=a},"29a3":function(t,e,a){"use strict";var n=a("4665"),i=a.n(n);i.a},"386b":function(t,e,a){var n=a("5ca1"),i=a("79e5"),o=a("be13"),s=/"/g,r=function(t,e,a,n){var i=String(o(t)),r="<"+e;return""!==a&&(r+=" "+a+'="'+String(n).replace(s,"&quot;")+'"'),r+">"+i+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(r),n(n.P+n.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",a)}},4665:function(t,e,a){},7987:function(t,e,a){t.exports=a.p+"img/btn.4ca301eb.png"},"80f4":function(t,e,a){"use strict";var n=a("8055"),i=a.n(n),o=(a("7e59"),i()("https://infolayanans.now.sh"));e["a"]=o},abbf:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.busy?n("div",{staticStyle:{width:"100%",height:"1200px",position:"fixed","z-index":"200",background:"radial-gradient(circle, rgba(33,35,57,0.36738445378151263) 0%, rgba(34,33,48,0.33657212885154064) 100%)"}},[n("p",{staticClass:"animated infinite bounce font-bold font-times text-2xl text-black",staticStyle:{"margin-top":"50vh","margin-left":"30vw"}},[t._v("LOADING ...")])]):t._e(),n("imageku",{staticStyle:{"z-index":"1000"}}),n("div",{staticClass:"text-center d-sm-none"},[t.menuTrigger?t._e():n("v-touch",{staticStyle:{width:"20px",background:"transparent",height:"100vh",position:"absolute",left:"0","z-index":"10001"},on:{swiperight:t.onSwipeRight}})],1),n("div",{staticClass:"container-fluid anim shadow-lg",staticStyle:{background:"#343A40"}},[n("div",{staticClass:"row anim"},[n("div",{staticClass:"anim col-4 col-sm-3 col-md-2 p-1 rounded-lg",staticStyle:{position:"fixed",padding:"0",margin:"0",height:"100px"},style:{background:t.bgleft1}},[n("div",{staticClass:"text-center text-white font-bold text-times text-xs",staticStyle:{height:"50px",margin:"none","padding-top":"10px"},style:{background:t.bgleft2}},[n("img",{staticClass:"img-fluid sm:p-4 pt-2",attrs:{src:a("7987")}})]),n("div",{staticClass:"text-center p-1",staticStyle:{"z-index":"100"},style:{background:t.bgleft2}},[t._m(0),n("div",{staticClass:"flex items-center border-b border-b-2 p-2"}),n("br"),n("div",{staticClass:"bord hover:bg-red rounded-t-lg text-left pl-3 ",staticStyle:{"border-top":"2px solid black",color:"white","font-size":"13px"},attrs:{id:"pertamaclick"},on:{click:function(e){t.muncul(e),t.$router.push("/driver")}}},[t._v(" Menu "),n("span",{staticClass:"typcn typcn-arrow-down float-right"})]),n("ul",{staticClass:"isaktif sm:pl-4 anim mb-3 text-white animated slideInRight "},[n("li",{staticClass:"bord hover:bg-red text-left sm:pl-3",staticStyle:{"font-size":"11px"},on:{click:function(e){return t.$router.push("/driver/ijin")}}},[t._v(" Ijin Keluar "),n("i",{staticClass:"fas fa-car"})]),n("li",{staticClass:"bord hover:bg-red text-left sm:pl-3",staticStyle:{"font-size":"11px"},on:{click:function(e){return t.$router.push("/driver/lembur/ijin")}}},[t._v(" Ijin Lembur "),n("i",{staticClass:"far fa-newspaper"})])]),n("div",{staticClass:"bord hover:bg-red rounded-b-lg text-left pl-3 mt-2",staticStyle:{"border-top":"2px solid black",color:"white","font-size":"13px"},on:{click:function(e){return t.$router.push("/driver")}}},[t._v(" DASHBOARD ")])])]),n("div",{staticClass:"bg-black anim",class:{"col-8 col-sm-9 col-md-10 offset-4 offset-sm-3 offset-md-2":t.menuTrigger,"col-sm-12":!t.menuTrigger}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-12",staticStyle:{padding:"0",margin:"0",position:"fixed","z-index":"100"}},[n("div",{staticClass:"pt-2",staticStyle:{height:"50px",margin:"none",padding:"3px"},style:{background:t.bgrighttop}},[n("button",{staticClass:"btn btn-sm btn-dark ml-3",staticStyle:{"border-color":"white"},attrs:{type:"button"},on:{click:function(e){t.menuTrigger=!t.menuTrigger}}},[t._m(1)]),n("div",{staticClass:"text-center",staticStyle:{position:"absolute",width:"60%","margin-top":"-33px",left:"20%"}},[n("img",{staticClass:"kinoLightBox img-fluid mx-auto",staticStyle:{height:"30px"},attrs:{src:a("7987")},on:{click:function(e){return t.$router.push("/driver")}}})]),[n("div",{staticStyle:{position:"absolute",right:"10px",top:"5px"}},[n("button",{staticClass:"btn text-white mr-2",staticStyle:{"margin-top":"4px"},attrs:{type:"button"},on:{click:function(e){t.menuKanan=!t.menuKanan}}},[n("div",{staticClass:"tips"},[n("p",{directives:[{name:"show",rawName:"v-show",value:"0"!=t.notifn,expression:"notifn!='0'"}],staticClass:"btn btn-sm rounded-circle btn-danger text-white absolute font-bold",staticStyle:{right:"20px"}},[t._v(t._s(t.notifn))]),n("i",{staticClass:"fas fa-ellipsis-h"}),n("span",{staticClass:"tipstextB"},[t._v("Profile")])])])])]],2)]),n("div",{staticClass:"col-sm-12",staticStyle:{background:"#eceff4","min-height":"100vh",padding:"0",margin:"0"},on:{click:function(e){t.menuTrigger=!1,t.menuKanan=!1}}},[n("br"),n("br"),n("div",{staticClass:"sm:mt-2 sm:p-2"},[n("router-view",{directives:[{name:"myimage",rawName:"v-myimage"},{name:"reload",rawName:"v-reload"}],staticStyle:{"z-index":"10"}})],1)])])])]),n("transition",{attrs:{tag:"div","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight",mode:"in-out"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menuKanan,expression:"menuKanan"}],staticClass:"bg-white border-1 border-grey shadow-md rounded-bl-lg",staticStyle:{position:"fixed","z-index":"11",right:"0",top:"0",width:"210px",height:"100vh","box-shadow":"1px 1px 2px 1.5px black"}},[n("br"),n("br"),n("br"),n("p",{staticClass:"p-2 border-2 text-sm font-times",on:{click:function(e){t.$router.push("/driver/profile"),t.menuKanan=!t.menuKanan}}},[n("span",{staticClass:"typcn typcn-user"}),t._v(" Profile ")]),n("p",{staticClass:"p-2 border-2 text-sm font-times text-red",on:{click:function(e){t.$store.dispatch("logout"),t.menuKanan=!t.menuKanan}}},[n("span",{staticClass:"typcn typcn-eject"}),t._v(" Logout ")]),n("p",{staticClass:"p-2 border-2 text-sm font-times text-red",on:{click:function(e){t.exits(),t.menuKanan=!t.menuKanan}}},[n("span",{staticClass:"typcn typcn-cancel"}),t._v(" EXIT ")]),n("hr",{staticClass:"style13",staticStyle:{margin:"0"}}),n("p",{staticClass:"text-center font-times"},[t._v("Notifikasi!")]),n("hr",{staticClass:"style13",staticStyle:{margin:"0"}}),n("div",{staticStyle:{"overflow-y":"scroll",height:"400px"}},t._l(t.notifs,(function(e,a){return n("div",{key:a+"notifikasi",staticClass:"p-2 shadow-inner rounded-md border-1 cursor-pointer",class:{"bg-blue-lighter":"false"==e.dibaca},on:{click:function(a){t.dibacas(e.id),t.$router.push(e.link)}}},[t._v(t._s(e.text)+" "),n("br"),n("span",{staticClass:"text-xs"},[t._v(t._s(t.distanceToNow(e.tanggal))+" yang lalu")])])})),0)])])],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sm:p-3 text-center",staticStyle:{"border-bottom":"1px solid gray"}},[a("br"),a("br"),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tips"},[a("i",{staticClass:"fas fa-th",staticStyle:{color:"white","margin-left":"50px"}}),a("span",{staticClass:"tipstextB"},[t._v("Slide")])])}],o=(a("8e6e"),a("456d"),a("53ca")),s=a("ade3"),r=(a("a481"),a("ac6a"),a("b54a"),a("748e")),c=a("8ea4"),u=a("bc3a"),l=a.n(u),d=a("f051"),h=a("ee0b"),f=a("19d9"),p=a("38d8"),g=a("80f4");function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var v=a("03a0"),x={components:{imageku:d["a"],menus:c["a"],dropdown:r["a"],Busy:h["a"],Footer:f["a"],Navbar:p["a"]},data:function(){return{notifs:[],notifn:0,bgleft1:"#343A40",bgleft2:"#232e30",bgleft3:"#343A40",bgrighttop:"#1A3B4E",test:1,menuTrigger:!1,menuKanan:!1,bearer:"",busy:!1}},beforeMount:function(){var t=this;g["a"].on("new-message",(function(e){e.target_id==t.$store.state.users.id&&"driver"==e.app&&(t.refreshNotif(),document.addEventListener("deviceready",(function(){cordova.plugins.notification.local.schedule({title:"BTN Banjarbaru",text:e.text,sound:"file://resources/audio/beep.mp3"}),cordova.plugins.notification.local.on("click",(function(a,n){setTimeout((function(){t.$router.push(e.link)}),1e3)})),navigator.notification.beep(1)})))}))},methods:{exits:function(){document.addEventListener("deviceready",(function(t){navigator.app.exitApp()}),!0)},refreshNotif:function(){var t=this,e=new FormData;e.append("data","select * from notifikasi where id_user='".concat(this.$store.state.users.id,"' AND app='driver' order by id desc")),e.append("database"," infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){var a=e.data.filter((function(t){return"false"==t.dibaca}));console.log("res",a),t.notifs=e.data,t.notifn=a.length,t.$forceUpdate()}))},dibaca:function(){var t=this,e=new FormData;e.append("data","update notifikasi set dibaca='true' where id_user='".concat(this.$store.state.users.id,"' AND app='driver'")),e.append("database"," infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",e,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){t.refreshNotif(),t.$forceUpdate()}))},dibacas:function(t){var e=this;console.log(t);var a=new FormData;a.append("data","update notifikasi set dibaca='true' where id='".concat(t,"'")),l.a.post("https://infolayanans.space/api/mysql/auto.php",a,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(t){e.refreshNotif(),e.$forceUpdate()}))},distanceToNow:function(t){return this.$datefns.distanceInWordsToNow(new Date(t),{locale:v,includeSeconds:!0})},logout:function(){localStorage.removeItem("login"),this.$router.push("/")},muncul:function(t){t.target.nextElementSibling.classList.toggle("isaktif")},onSwipeRight:function(){this.menuTrigger=!0},scrollOnLoad:function(){var t=this;this.$el.querySelectorAll("a.scrollactive-item").forEach((function(e){e.hash==t.$route.hash&&e.click()}))},cekAuth:function(){var t=this;null!=localStorage.getItem("auth._token.local")&&("false"==localStorage.getItem("auth._token.local")?"false"!=localStorage.getItem("auth.local")&&l.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:localStorage.getItem("auth.local")}}).then((function(e){t.$store.commit("changeUser",e.data.user)})):l.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(e){t.$store.commit("changeUser",e.data.user)})))},loginOAuth:function(){var t=this,e=document.URL.indexOf("?json");e=document.URL.slice(0,e);var a=document.URL.indexOf("xxx");if(-1!=a){var n=document.URL.slice(a).replace("%20"," ").replace("#/","").replace("xxx=","");console.log(n),this.bearer=n,localStorage.setItem("auth._token.local",n),localStorage.setItem("auth.local",n),l.a.get(this.$store.state.url+"/api/auth/user",{headers:{Authorization:n}}).then((function(a){console.log(a.data),t.$store.commit("changeUser",a.data.user),console.log(t.$store.state.user),setTimeout((function(){window.location=e}),500)}))}},isLoginNotLocal:function(){var t=this,e=this;this.$store.state.auth.loggedIn&&"local"!=this.$store.state.auth.strategy&&!this.$store.state.auth.isAuth&&(this.busy=!0,setTimeout((function(){if(t.busy=!1,t.$store.dispatch("auth/goAuth",t.$store.state.auth.isAuth),"local"!=t.$auth.$state.strategy){var a=new Date;localStorage.setItem("expireDate",new Date(a.getTime()+36e5));var n=t.$auth.user;"facebook"==t.$auth.$state.strategy&&(n.picture=t.$auth.user.picture.data.url,n.verified=!0),t.$auth.loginWith("local",{data:b(b({},n),{},{oAuth:!0})}).then((function(a){
//! setelah di ganti ke login local maka redirect kemana?
t.busy=!0,setTimeout((function(){t.busy=!1,e.$store.dispatch("userRefresh"),t.$router.push("/")}),500)}))}}),1e3))},version:function(){null==localStorage.getItem("version")&&localStorage.setItem("version",1)},newStuff:function(){if(localStorage.getItem("newstuff")!=this.$store.state.version){var t=indexedDB.deleteDatabase(this.$store.state.indexdb);t.onsuccess=function(){console.log("Deleted database successfully")},t.onerror=function(){console.log("Couldn't delete database")},t.onblocked=function(){console.log("Couldn't delete database due to the operation being blocked")},localStorage.clear(),localStorage.setItem("newstuff",this.$store.state.version),alert("new version")}},mediaQueries:function(){this.$store.commit("mediaQueries",window.innerWidth<=576?"sm":window.innerWidth<=768?"md":window.innerWidth<=992?"lg":"xl")},init:function(){this.scrollOnLoad(),"dekstop"!=this.$store.state.device&&this.isLoginNotLocal(),this.version(),this.loginOAuth()}},mounted:function(){var t=this;console.log(localStorage.getItem("loading-first-times")),localStorage.getItem("loading_first_times")||(localStorage.setItem("loading_first_times",!0),this.$router.push("/pengenalan")),this.$store.state.users?0==this.$store.state.users.ganti&&this.$router.push("/driver/profile/ganti"):this.$router.push("/driver/login"),this.refreshNotif();var e=this;"object"===("undefined"===typeof cordova?"undefined":Object(o["a"])(cordova))&&document.addEventListener("deviceready",(function(){cordova.plugins.backgroundMode.enable(),cordova.plugins.backgroundMode.on("EVENT",(function(){})),cordova.plugins.backgroundMode.on("activate",(function(){cordova.plugins.backgroundMode.disableWebViewOptimizations()})),cordova.plugins.backgroundMode.setDefaults({title:"BTN",text:"Banjarbaru",hidden:!0,silent:!0}),cordova.plugins.notification.local.requestPermission((function(t){})),cordova.plugins.notification.local.setDefaults({led:{color:"#FF00FF",on:500,off:500},vibrate:[100,50,200]})})),this.mediaQueries(),this.$nextTick((function(){window.addEventListener("resize",(function(){e.mediaQueries()}))})),this.init(),setTimeout((function(){t.$store.commit("nossr",!0)}),100),this.$nuxt.$on("busy",(function(e){t.busy=e})),this.$nuxt.$on("notifikasi",(function(t,e,a,n){var i=new FormData;i.append("data","insert into notifikasi (id_user,link,text,dibaca,app,button,tanggal)\n         VALUES ('".concat(t,"','").concat(e,"','").concat(a,"','false','driver','1','").concat(new Date,"')")),i.append("database"," infolay3_test"),l.a.post("https://infolayanans.space/api/mysql/auto.php",i,{headers:{Authorization:localStorage.getItem("auth._token.local")}}).then((function(i){if(n);else{var o={id:uniqid(),target_id:t,app:"driver",text:a,link:e,dibaca:"false"};g["a"].emit("send-message",o)}}))}))}},y=x,k=(a("29a3"),a("2877")),w=Object(k["a"])(y,n,i,!1,null,"6e99e458",null);e["default"]=w.exports},b54a:function(t,e,a){"use strict";a("386b")("link",(function(t){return function(e){return t(this,"a","href",e)}}))},d309:function(t,e,a){var n=a("90e5");function i(){var t=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"],e=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],a=["Mi","Sn","Sl","Ra","Ka","Ju","Sa"],i=["Min","Sen","Sel","Rab","Kam","Jum","Sab"],s=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],r=["AM","PM"],c=["am","pm"],u=["a.m.","p.m."],l={MMM:function(e){return t[e.getMonth()]},MMMM:function(t){return e[t.getMonth()]},dd:function(t){return a[t.getDay()]},ddd:function(t){return i[t.getDay()]},dddd:function(t){return s[t.getDay()]},A:function(t){return t.getHours()/12>=1?r[1]:r[0]},a:function(t){return t.getHours()/12>=1?c[1]:c[0]},aa:function(t){return t.getHours()/12>=1?u[1]:u[0]}},d=["M","D","DDD","d","Q","W"];return d.forEach((function(t){l[t+"o"]=function(e,a){return o(a[t](e))}})),{formatters:l,formattingTokensRegExp:n(l)}}function o(t){switch(t){case 1:return"pertama";case 2:return"kedua";case 3:return"ketiga";default:return"ke-"+t}}t.exports=i}}]);
//# sourceMappingURL=chunk-fa700654.fd0b76cf.js.map