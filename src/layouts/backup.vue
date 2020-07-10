<template>
  <div>
    <div v-if="busy" style="width:100%;height:1200px;position:fixed;z-index:200;background: rgb(33,35,57);
background: radial-gradient(circle, rgba(33,35,57,0.36738445378151263) 0%, rgba(34,33,48,0.33657212885154064) 100%);">
        <p class="animated infinite bounce font-bold font-times text-2xl text-black" style="margin-top:50vh;margin-left:30vw;">LOADING ...</p>
    </div>
    <imageku style="z-index:1000" />
    <div class="text-center d-sm-none">
      <v-touch
        style="width:20px;background:transparent;height:100vh;position:absolute;left:0;z-index:10001;"
        v-on:swiperight="onSwipeRight"
        v-if="!menuTrigger"
      ></v-touch>
    </div>
    <div class="container-fluid anim shadow-lg" style="background:#343A40;">
      <div class="row anim">
        <div
          class="anim col-4 col-sm-3 col-md-2 p-1 rounded-lg"
          style="position:absolute;padding:0;margin:0;height:100px;position:fixed;"
          :style="{'background':bgleft1}"
        >
          <!-- LEFT TOP -->
          <div
            style="height:50px;margin:none;padding-top:10px;"
            :style="{'background':bgleft2}"
            class="text-center text-white font-bold text-times text-xs"
          >
            <img
              src="@/static/media/icon/btn.png" class="img-fluid sm:p-4 pt-2"
            />

          </div>
          <!-- LEFT SECOND -->
          <div class="text-center p-1" :style="{'background':bgleft2}" style="z-index:100;">
            <div class="sm:p-3 text-center" style="border-bottom:1px solid gray;">
               <br>
            <br>
              <br />
            </div>
            <!-- SEARCH BAR -->
            <div class="flex items-center border-b border-b-2 p-2">

            </div>
            <br />
            <!-- MENU BUTTON -->
            <div
              class="bord hover:bg-red rounded-t-lg text-left pl-3 "
              style="border-top:2px solid black;color:white;font-size:13px;"
              @click="muncul($event);$router.push('/driver')"
              id="pertamaclick"
            >
              Menu
              <span class="typcn typcn-arrow-down float-right"></span>
            </div>
            <ul class="isaktif sm:pl-4 anim mb-3 text-white animated slideInRight ">
              <li class="bord hover:bg-red text-left sm:pl-3" style="font-size:11px;" @click="$router.push('/driver/ijin')">&nbsp;&nbsp;Ijin Keluar&nbsp;&nbsp;<i class="fas fa-car"></i></li>
              <li class="bord hover:bg-red text-left sm:pl-3" style="font-size:11px;" @click="$router.push('/driver/lembur/ijin')">&nbsp;&nbsp;Ijin Lembur&nbsp;&nbsp;<i class="far fa-newspaper"></i></li>
            </ul>
            <div
              class="bord hover:bg-red rounded-b-lg text-left pl-3 mt-2"
              style="border-top:2px solid black;color:white;font-size:13px;"
              @click="$router.push('/driver')"
            >
              DASHBOARD
            </div>
            <!-- END MENU -->
          </div>
        </div>
        <div
          class="bg-black anim"
          :class="{'col-8 col-sm-9 col-md-10 offset-4 offset-sm-3 offset-md-2':menuTrigger,'col-sm-12':!menuTrigger}"
        >
          <div class="row">
            <!-- RIGHT TOP -->
            <div class="col-sm-12" style="padding:0;margin:0;position:fixed;z-index:100;">
              <div
                style="height:50px;margin:none;padding:3px;"
                :style="{'background':bgrighttop}"
                class="pt-2"
              >
                <button
                  type="button"
                  class="btn btn-sm btn-dark ml-3"
                  style="border-color:white;"
                  @click="menuTrigger=!menuTrigger"
                >
                  <div class="tips">
                    <i class="fas fa-th" style="color:white;margin-left:50px;"></i>
                    <span class="tipstextB">Slide</span>
                  </div>
                </button>
                <!-- BUTTON DIKANAN ATAS -->
                  <!-- <span class="p-1 ml-3 text-white cursor-pointer hover:bg-black rounded-lg">
                  HOME
                  <i class="fas fa-home"></i>
                </span> -->
                <div class="text-center" style="position:absolute;width:60%;margin-top:-33px;left:20%;">
                <img src="@/static/media/icon/btn.png" class="kinoLightBox img-fluid mx-auto" style="height:30px;" @click="$router.push('/driver')">
                </div>
                <template class>
                  <div style="position:absolute;right:10px;top:5px;">
                    <!-- <button
                      type="button"
                      @click="$store.dispatch('logout')"
                      class="btn btn-sm btn-warning mr-2"
                    >
                      <i
                        class="far fa-bell text-white p-1 cursor-pointer"
                        style="font-size:13px;color:black;"
                      ></i>
                    </button> -->
                    <button
                      type="button"
                      @click="menuKanan=!menuKanan;"
                      class="btn text-white mr-2"
                      style="margin-top:4px;"
                    >
                      <div class="tips">
                         <p class="btn btn-sm rounded-circle btn-danger text-white absolute font-bold" style="right:20px;" v-show="notifn!='0'" >{{notifn}}</p>
                        <i class="fas fa-ellipsis-h"></i>
                        <span class="tipstextB">Profile</span>
                      </div>
                    </button>
                    <!-- <button
                      type="button"
                      @click="$store.dispatch('logout')"
                      class="btn btn-sm btn-danger mr-2 "
                      style="margin-top:4px;"
                    >
                      <div class="tips">
                        <i class="fas fa-sign-out-alt"></i>
                        <span class="tipstextB">Logout</span>
                      </div>
                    </button> -->
                  </div>
                </template>
              </div>
            </div>
            <!-- RIGHT SECOND -->
            <div
              class="col-sm-12"
              style="background:#eceff4;min-height:100vh;padding:0;margin:0;"
              @click="menuTrigger=false;menuKanan=false"
            >
            <br>
            <br>
              <div class="sm:mt-2 sm:p-2">
                <router-view style="z-index:10" v-myimage v-reload />
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition
        tag="div"
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeOutRight"
        mode="in-out"
      >
        <div
          v-show="menuKanan"
          style="position:fixed;z-index:11;right:0;top:0;width:210px;height:100vh;box-shadow:1px 1px 2px 1.5px black;"
          class="bg-white border-1 border-grey shadow-md rounded-bl-lg"
        >
          <br>
          <br>
          <br>
          <p class="p-2 border-2 text-sm font-times" @click="$router.push('/driver/profile');menuKanan=!menuKanan"><span class="typcn typcn-user"></span>&nbsp;&nbsp; Profile </p>
          <p class="p-2 border-2 text-sm font-times text-red" @click="$store.dispatch('logout');menuKanan=!menuKanan"><span class="typcn typcn-eject"></span>&nbsp;&nbsp; Logout </p>
          <p class="p-2 border-2 text-sm font-times text-red" @click="exits();menuKanan=!menuKanan"><span class="typcn typcn-cancel"></span>&nbsp;&nbsp; EXIT </p>
          <hr class="style13" style="margin:0;">
          <p class="text-center font-times">Notifikasi!</p>
          <hr class="style13" style="margin:0;">
          <div style="overflow-y:scroll;height:400px;">
            <div v-for="(item, index) in notifs" :key="index+'notifikasi'" 
              @click="dibacas(item.id);$router.push(item.link)" 
              class="p-2 shadow-inner rounded-md border-1 cursor-pointer"
              :class="{'bg-blue-lighter':item.dibaca=='false'}" 
              >{{item.text}} 
            <br>
            <span class="text-xs">{{distanceToNow(item.tanggal)}} yang lalu</span></div>
            </div>
          </div>
      </transition>
    </div>
  </div>
</template>
<script>
import dropdown from '@/components/Single/Dropdown.vue'
import menus from '@/components/app/menu.vue'
import axios from 'axios'
import imageku from '@/components/Web/MyImage.vue'
import Busy from '@/components/Web/Busy.vue'
import Footer from '@/components/Web/Footer.vue'
import Navbar from '@/components/desa/navbar.vue'
import socket from "@/plugins/socket.io.js";
var id = require("date-fns/locale/id");
export default {
  components: {
    imageku,
    menus,
    dropdown,
    Busy,
    Footer,
    Navbar
  },
  data () {
    return {
        notifs:[],
      notifn:0,
      bgleft1: '#343A40',
      bgleft2: '#232e30',
      bgleft3: '#343A40',
      bgrighttop: '#1A3B4E',
      test: 1,
      menuTrigger: false,
      menuKanan: false,
      bearer: '',
      busy: false // digunakan untuk melihat apakah ada data yang masih diprocess untuk dimunculkan loading
    }
  },
   beforeMount() {
      let that = this;
      socket.on("new-message", message => {
      if(message.target_id==that.$store.state.users.id && message.app=='driver'){
          that.refreshNotif()
           //  CORDOVA
          document.addEventListener('deviceready', function () {
              cordova.plugins.notification.local.schedule({
                  title: 'BTN Banjarbaru',
                  text: message.text,
                  sound:'file://resources/audio/beep.mp3'
              });
              cordova.plugins.notification.local.on('click', function (notification, eopts) { 
                  setTimeout(() => {
                      that.$router.push(message.link)
                  }, 1000);
              });
              navigator.notification.beep(1);
          })
      }
    });
  },
  methods: {
    exits(){
      document.addEventListener("deviceready", function(e){
        navigator.app.exitApp();
      }, true);
    },  
     refreshNotif(){
           let fd = new FormData()
            fd.append('data', `select * from notifikasi where id_user='${this.$store.state.users.id}' AND app='driver' order by id desc`)
            fd.append('database', ' infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
              let data = res.data.filter(e=>{
                return e.dibaca=='false'
                })
              console.log('res',data)
                 this.notifs = res.data
                this.notifn = data.length
                this.$forceUpdate()
            })
      },
    dibaca(){
        let fd = new FormData()
        fd.append('data', `update notifikasi set dibaca='true' where id_user='${this.$store.state.users.id}' AND app='driver'`)
        fd.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            this.refreshNotif()
            this.$forceUpdate()
        })
    },
     dibacas(item){
       console.log(item)
        let fd = new FormData()
        fd.append('data', `update notifikasi set dibaca='true' where id='${item}'`)
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            this.refreshNotif()
            this.$forceUpdate()
        })
    },
     distanceToNow(tanggal) {
          return this.$datefns.distanceInWordsToNow(
            new Date(tanggal),
            {
              locale: id,
              includeSeconds: true
            }
          );
        },
    logout () {
      localStorage.removeItem('login')
      this.$router.push('/')
    },
    muncul (e) {
      e.target.nextElementSibling.classList.toggle('isaktif')
    },
    onSwipeRight () {
      this.menuTrigger = true
    },
    scrollOnLoad () {
      this.$el.querySelectorAll('a.scrollactive-item').forEach(el => {
        if (el.hash == this.$route.hash) {
          el.click()
        }
      })
    },
    cekAuth () {
      if (localStorage.getItem('auth._token.local') != null) {
        if (localStorage.getItem('auth._token.local') == 'false') {
          if (localStorage.getItem('auth.local') != 'false') {
            axios
              .get(this.$store.state.url + '/api/auth/user', {
                headers: {
                  Authorization: localStorage.getItem('auth.local')
                }
              })
              .then(res => {
                this.$store.commit('changeUser', res.data.user)
              })
          }
        } else {
          axios
            .get(this.$store.state.url + '/api/auth/user', {
              headers: {
                Authorization: localStorage.getItem('auth._token.local')
              }
            })
            .then(res => {
              this.$store.commit('changeUser', res.data.user)
            })
        }
      }
    },
    loginOAuth () {
      // ! DIGUNAKAN UNTUK ELECTRON
      let url = document.URL.indexOf('?json')
      url = document.URL.slice(0, url)
      let xxx = document.URL.indexOf('xxx')
      if (xxx != -1) {
        let token = document.URL.slice(xxx)
          .replace('%20', ' ')
          .replace('#/', '')
          .replace('xxx=', '')
        console.log(token)
        this.bearer = token
        localStorage.setItem('auth._token.local', token)
        localStorage.setItem('auth.local', token)
        axios
          .get(this.$store.state.url + '/api/auth/user', {
            headers: {
              Authorization: token
            }
          })
          .then(res => {
            console.log(res.data)
            this.$store.commit('changeUser', res.data.user)
            console.log(this.$store.state.user)
            setTimeout(() => {
              window.location = url
            }, 500)
          })
      }
    },
    isLoginNotLocal () {
      let that = this
      if (
        this.$store.state.auth.loggedIn &&
        this.$store.state.auth.strategy != 'local' &&
        !this.$store.state.auth.isAuth
      ) {
        this.busy = true
        setTimeout(() => {
          this.busy = false
          this.$store.dispatch('auth/goAuth', this.$store.state.auth.isAuth)
          if (this.$auth.$state.strategy != 'local') {
            let now = new Date()
            localStorage.setItem(
              'expireDate',
              new Date(now.getTime() + 3600 * 1000)
            )
            let data = this.$auth.user
            if (this.$auth.$state.strategy == 'facebook') {
              data.picture = this.$auth.user.picture.data.url
              data.verified = true
            }
            this.$auth
              .loginWith('local', {
                data: {
                  ...data,
                  oAuth: true
                }
              })
              .then(res => {
                //! setelah di ganti ke login local maka redirect kemana?
                this.busy = true
                setTimeout(() => {
                  this.busy = false
                  that.$store.dispatch('userRefresh')
                  this.$router.push('/')
                }, 500)
              })
          }
        }, 1000)
      }
    },
    version () {
      if (localStorage.getItem('version') == null) {
        localStorage.setItem('version', 1)
      }
    },
    newStuff () {
      if (localStorage.getItem('newstuff') != this.$store.state.version) {
        var req = indexedDB.deleteDatabase(this.$store.state.indexdb)
        req.onsuccess = function () {
          console.log('Deleted database successfully')
        }
        req.onerror = function () {
          console.log("Couldn't delete database")
        }
        req.onblocked = function () {
          console.log(
            "Couldn't delete database due to the operation being blocked"
          )
        }
        localStorage.clear()
        localStorage.setItem('newstuff', this.$store.state.version)
        alert('new version')
      }
    },
    mediaQueries () {
      this.$store.commit(
        'mediaQueries',
        window.innerWidth <= 576
          ? 'sm'
          : window.innerWidth <= 768
            ? 'md'
            : window.innerWidth <= 992
              ? 'lg'
              : 'xl'
      )
    },
    init () {
      this.scrollOnLoad()
      // this.cekAuth();
      if (this.$store.state.device != 'dekstop') {
        this.isLoginNotLocal()
      }
      this.version()
      this.loginOAuth()
      //! mencek apakah expireData berakhir
      // this.$store.dispatch('auth/autoLogout');
    }
  },
  mounted () {
    console.log(localStorage.getItem('loading-first-times'))
    if(localStorage.getItem('loading_first_times')){
      
    }else{
      localStorage.setItem('loading_first_times',true)
      this.$router.push('/pengenalan')
    }
    if (this.$store.state.users) {
      if(this.$store.state.users.ganti==0){
        this.$router.push('/driver/profile/ganti')
      }
    } else {
      this.$router.push('/driver/login')
    }
     this.refreshNotif()

    // this.$el.querySelector('#pertamaclick').click()
    // this.$store.dispatch('auth')
    let that = this
    // #CORDOVA
    if (typeof cordova === 'object') {
      document.addEventListener('deviceready', function () {
        cordova.plugins.backgroundMode.enable()
        cordova.plugins.backgroundMode.on('EVENT', function () {
          // apabila status background process berubah maka event ini di jalankan
        })
        cordova.plugins.backgroundMode.on('activate', function() {
          cordova.plugins.backgroundMode.disableWebViewOptimizations(); 
        })
        cordova.plugins.backgroundMode.setDefaults({
          title: 'BTN',
          text: 'Banjarbaru',
          // icon: 'icon' // this will look for icon.png in platforms/android/res/drawable|mipmap
          // color: "F14F4D", // hex format like 'F14F4D'
          // resume: true,
          hidden: true,
          silent: true
          // bigText: Boolean
        })
        cordova.plugins.notification.local.requestPermission(function (granted) {  });
        cordova.plugins.notification.local.setDefaults({
          led: { color: '#FF00FF', on: 500, off: 500 },
          vibrate: [100, 50, 200]
        })
      })
    }
    this.mediaQueries()
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        that.mediaQueries()
      })
    })
    this.init()
    setTimeout(() => {
      this.$store.commit('nossr', true)
    }, 100)
    this.$nuxt.$on('busy', data => {
      this.busy = data
    })
    this.$nuxt.$on('notifikasi', (ids,link,text,pilih) => {
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
              if(pilih){
                
              }else{
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
              }
        })
    })
  },
}
</script>
<style scoped>
.isaktif {
  transition: all 0.3s ease-in-out;
  display: none;
}
.anim {
  transition: all 0.3s ease-in-out;
}
.bord {
  font-weight: bold;
  cursor: pointer;
  font-size: 17px;
  padding: 5px 0px 5px 0px;
  font-size: 14px;
  border-bottom: 2px solid black;
}
</style>
