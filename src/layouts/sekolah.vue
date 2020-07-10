<template>
  <div>
    <!-- <Busy v-if="busy" />
    <imageku style="z-index:1000" />
    <router-view style="z-index:10" v-myimage v-reload />-->
    <router-view></router-view>
  </div>
</template>
<script>
import axios from "axios";
import imageku from "@/components/Web/MyImage.vue";
import Busy from "@/components/Web/Busy.vue";
import Footer from "@/components/Web/Footer.vue";
import Navbar from "@/components/Web/Navbar.vue";
export default {
  components: {
    imageku,
    Busy,
    Footer,
    Navbar
  },
  data() {
    return {
      test: 1,
      bearer: "",
      busy: false // digunakan untuk melihat apakah ada data yang masih diprocess untuk dimunculkan loading
    };
  },
  methods: {
    scrollOnLoad() {
      this.$el.querySelectorAll("a.scrollactive-item").forEach(el => {
        if (el.hash == this.$route.hash) {
          el.click();
        }
      });
    },
    mails(id,subjek,text){
      // this.mails('145','NOTIFIKASI-JRBTN','KINO NO TABI');
      let fd = new FormData()
      fd.append('data', `select * from tbuser where id='${id}'`)//database setting di server
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          if(res.data[0].email.indexOf('@')!=-1){
            console.log(res.data[0].email);
            let fd = new FormData()
            fd.append('tujuan',res.data[0].email);
            fd.append('subjek',subjek);
            fd.append('text',text);
            axios.post('https://infolayanans.space/send_mail.php', fd).then(res => {
                console.log(res)
                this.$forceUpdate()
            })
          }else{
            console.log('kosong')
          }
      })
    },
     notifikasi(ids,link,text) {
      //   this.notifikasi(this.pilih.id_penumpang,'/driver/approve','Permintaan anda ditolak atau dibatalkan '+this.pilih.penumpang);
        let fd = new FormData()
        fd.append('data', `insert into notifikasi (id_user,link,text,dibaca,app,button,tanggal)
         VALUES ('${ids}','${link}','${text}','false','driver','1','${new Date()}')`)
        fd.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
               let message = {
                    id: uniqid(),
                    target_id: ids,
                    app: 'driver',
                    text:text,
                    link:link,
                    dibaca: 'false'
                };
                socket.emit("send-message", message);
                 let that = this
        }).catch(err=>{
            let message = {
                    id: uniqid(),
                    target_id: ids,
                    app: 'driver',
                    text:text,
                    link:link,
                    dibaca: 'false'
                };
                socket.emit("send-message", message);
                 let that = this
        })
    },
    cekAuth() {
      if (localStorage.getItem("auth._token.local") != null) {
        if (localStorage.getItem("auth._token.local") == "false") {
          if (localStorage.getItem("auth.local") != "false") {
            axios
              .get(this.$store.state.url + "/api/auth/user", {
                headers: {
                  Authorization: localStorage.getItem("auth.local")
                }
              })
              .then(res => {
                this.$store.commit("changeUser", res.data.user);
              });
          }
        } else {
          axios
            .get(this.$store.state.url + "/api/auth/user", {
              headers: {
                Authorization: localStorage.getItem("auth._token.local")
              }
            })
            .then(res => {
              this.$store.commit("changeUser", res.data.user);
            });
        }
      }
    },
    loginOAuth() {
      // ! DIGUNAKAN UNTUK ELECTRON
      let url = document.URL.indexOf("?json");
      url = document.URL.slice(0, url);
      let xxx = document.URL.indexOf("xxx");
      if (xxx != -1) {
        let token = document.URL.slice(xxx)
          .replace("%20", " ")
          .replace("#/", "")
          .replace("xxx=", "");
        console.log(token);
        this.bearer = token;
        localStorage.setItem("auth._token.local", token);
        localStorage.setItem("auth.local", token);
        axios
          .get(this.$store.state.url + "/api/auth/user", {
            headers: {
              Authorization: token
            }
          })
          .then(res => {
            console.log(res.data);
            this.$store.commit("changeUser", res.data.user);
            console.log(this.$store.state.user);
            setTimeout(() => {
              window.location = url;
            }, 500);
          });
      }
    },
    isLoginNotLocal() {
      let that = this;
      if (
        this.$store.state.auth.loggedIn &&
        this.$store.state.auth.strategy != "local" &&
        !this.$store.state.auth.isAuth
      ) {
        this.busy = true;
        setTimeout(() => {
          this.busy = false;
          this.$store.dispatch("auth/goAuth", this.$store.state.auth.isAuth);
          if (this.$auth.$state.strategy != "local") {
            let now = new Date();
            localStorage.setItem(
              "expireDate",
              new Date(now.getTime() + 3600 * 1000)
            );
            let data = this.$auth.user;
            if (this.$auth.$state.strategy == "facebook") {
              data.picture = this.$auth.user.picture.data.url;
              data.verified = true;
            }
            this.$auth
              .loginWith("local", {
                data: {
                  ...data,
                  oAuth: true
                }
              })
              .then(res => {
                //! setelah di ganti ke login local maka redirect kemana?
                this.busy = true;
                setTimeout(() => {
                  this.busy = false;
                  that.$store.dispatch("userRefresh");
                  this.$router.push("/");
                }, 500);
              });
          }
        }, 1000);
      }
    },
    version() {
      if (localStorage.getItem("version") == null) {
        localStorage.setItem("version", 1);
      }
    },
    newStuff() {
      if (localStorage.getItem("newstuff") != this.$store.state.version) {
        var req = indexedDB.deleteDatabase(this.$store.state.indexdb);
        req.onsuccess = function() {
          console.log("Deleted database successfully");
        };
        req.onerror = function() {
          console.log("Couldn't delete database");
        };
        req.onblocked = function() {
          console.log(
            "Couldn't delete database due to the operation being blocked"
          );
        };
        localStorage.clear();
        localStorage.setItem("newstuff", this.$store.state.version);
        alert("new version");
      }
    },
    mediaQueries() {
      this.$store.commit(
        "mediaQueries",
        window.innerWidth <= 576
          ? "sm"
          : window.innerWidth <= 768
          ? "md"
          : window.innerWidth <= 992
          ? "lg"
          : "xl"
      );
    },
    init() {
      this.scrollOnLoad();
      this.cekAuth();
      if (this.$store.state.device != "dekstop") {
        this.isLoginNotLocal();
      }
      this.version();
      this.loginOAuth();
      //! mencek apakah expireData berakhir
      // this.$store.dispatch('auth/autoLogout');
    }
  },
  mounted() {
    let that = this;
    // !WOW JS
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
    );
    document.head.appendChild(recaptchaScript);
    setTimeout(() => {
      new WOW().init();
    }, 500);
    // !END WOW JS
    // #CORDOVA
    if (typeof cordova === "object") {
      document.addEventListener("deviceready", function() {
        cordova.plugins.backgroundMode.enable();
        cordova.plugins.backgroundMode.on("EVENT", function() {
          // apabila status background process berubah maka event ini di jalankan
        });
        window.powerManagement.dim(
          function() {
            console.log("Wakelock acquired");
          },
          function() {
            console.log("Failed to acquire wakelock");
          }
        );
        cordova.plugins.backgroundMode.setDefaults({
          title: "HELLO",
          text: "World",
          // icon: 'icon' // this will look for icon.png in platforms/android/res/drawable|mipmap
          // color: "F14F4D", // hex format like 'F14F4D'
          // resume: true,
          hidden: true,
          silent: true
          // bigText: Boolean
        });
        cordova.plugins.notification.local.setDefaults({
          led: { color: "#FF00FF", on: 500, off: 500 },
          vibrate: [100, 50, 200]
        });
      });
    }
    this.mediaQueries();
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        that.mediaQueries();
      });
    });
    this.init();
    setTimeout(() => {
      this.$store.commit("nossr", true);
    }, 100);
    this.$nuxt.$on("busy", data => {
      this.busy = data;
    });
  },

};
</script>
