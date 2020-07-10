<template>
  <div>
    <div class="text-center d-sm-none">
      <v-touch
        style="width:40px;background:transparent;height:900px;position:absolute;left:0;z-index:10001;"
        v-on:swiperight="onSwipeRight"
        v-if="!menuTrigger"
      ></v-touch>
    </div>
    <div class="container-fluid anim shadow-lg" style="background:#343A40;">
      <div class="row anim">
        <div
          class="anim col-4 col-sm-3 col-md-2"
          style="position:absolute;padding:0;margin:0;min-height:760px;position:fixed;"
          :style="{'background':bgleft1}"
        >
          <!-- LEFT TOP -->
          <div
            style="height:50px;margin:none;padding-top:10px;"
            :style="{'background':bgleft2}"
            class="text-center text-black font-bold text-times text-xs"
          >
            <!-- <img
              src="https://static.zerochan.net/Kino.no.Tabi.full.2207382.jpg"
              class="kinoLightBox img-fluid rounded-circle z-depth-1 float-left ml-4"
              style="height:30px;"
            /> -->
            <img src="@/static/btn.png" class="kinoLightBox img-fluid  " style="width:70%;">
          </div>
          <!-- LEFT SECOND -->
          <div class="text-center" :style="{'background':bgleft2}">
            <br>
            <hr class="style13" style="margin:0;padding:0;">
            <div class="p-2">
            <span class=" text-md pr-2 font-bold">Menu</span>
            </div>
            <hr class="style13" style="margin:0;padding:0;">
  

            <!-- MENU BUTTON -->
            <div
              class="bord hover:bg-blue text-left pl-3 font-bold animated fadeInLeft"
              style="border-top:2px solid black;color:black;"
              @click="$router.push('/ld/dashboard')"
            >
             <span class="typcn typcn-home"></span> Dashboard
              <span class="typcn typcn-arrow-down float-right"></span>
            </div>
            <div
              class="bord hover:bg-blue text-left pl-3 font-bold animated fadeInLeft"
              style="border-top:2px solid black;color:black;"
              @click="muncul($event)"
            >
              <span class="typcn typcn-user-add-outline"></span> BCSU
              <span class="typcn typcn-arrow-down float-right"></span>
            </div>
            <ul class="isaktif pl-4 anim mb-3 text-black">
              <li @click="$router.push('/ld/input')" class="bord hover:bg-blue text-left pl-3 font-bold animated fadeInLeft">Entry Peminjaman Dokumen</li>
              <li @click="$router.push('/ld/list-data')" class="bord hover:bg-blue text-left pl-3 font-bold animated fadeInLeft">Report</li>
            </ul>
             <div
             v-show="$store.state.users.akses=='admin'"
              class="bord hover:bg-blue text-left pl-3 font-bold animated fadeInLeft"
              style="border-top:2px solid black;color:black;"
              @click="muncul($event)"
            >
              <span class="typcn typcn-database"></span> Loan Document <button type="button" name="" id="" class="btn btn-sm btn-danger ml-5" v-show="leng>0">{{leng}}</button> 
              <span class="typcn typcn-arrow-down float-right"></span>
            </div>
            <ul class="isaktif pl-4 anim mb-3 text-black">
              <li @click="$router.push('/ld/list-pinjaman')" class="bord hover:bg-blue text-left pl-3 font-bold animated fadeInLeft">Review Peminjaman Dokumen</li>
            </ul>
            <!-- MENU 3 -->
               <div
              class="bord hover:bg-blue bg-blue text-left pl-3 font-bold animated fadeInLeft"
              style="border-top:2px solid black;color:black;"
              @click="$router.push('/ld/changepassword')"
            >
              <span class="typcn typcn-compass"></span> Change Password
              <span class="typcn typcn-cloud-storage-outline float-right"></span>
            </div>
            <div
              class="bord hover:bg-blue bg-blue text-left pl-3 font-bold animated fadeInLeft"
              style="border-top:2px solid black;color:black;"
              @click="$store.dispatch('logout')"
            >
              <span class="typcn typcn-cancel"></span> Logout
              <span class="typcn typcn-cloud-storage-outline float-right"></span>
            </div>
           
            <!-- END MENU -->
          </div>
           <div class="p-2 text-black font-times" style='position:absolute;bottom:60px;width:100%;'>
             <marquee @click="go('https://taufikakbarmaliki.now.sh')" class="cursor-pointer text-uppercase" scrolldelay="100">Created By Malik</marquee>
              
            </div>
        </div>
        <div
          class="bg-black anim"
          :class="{'col-8 col-sm-9 col-md-10 offset-4 offset-sm-3 offset-md-2':menuTrigger,'col-sm-12':!menuTrigger}"
        >
          <div class="row">
            <!-- RIGHT TOP -->
            <div class="col-sm-12 bg-blue-lighter" style="padding:0;margin:0;position:fixed;z-index:100;background:#EDEFF2;">
              <span   @click="menuTrigger=!menuTrigger" class="typcn typcn-arrow-back cursor-pointer" style="font-size:30px;position:fixed;top:20px;z-index:30;" v-if="float_menu"></span>
              <div
                style="height:50px;margin:none;padding:3px;"
                :style="{'background':bgrighttop}"
                class="pt-2 shadow-lg"
              >
                <button
                  type="button"
                  class="btn btn-sm btn-dark ml-3"
                  style="border-color:black;"
                  @click="menuTrigger=!menuTrigger"
                >
                  <div class="tips">
                    <i class="fas fa-th" style="color:white;margin-left:50px;"></i>
                    <span class="tipstextB">Slide</span>
                  </div>
                </button>
            <img src="@/static/bumn.png" class="kinoLightBox img-fluid  " style="width:8%;position:absolute;right:10%;">
                <template class>
                  <div style="position:absolute;right:40px;top:5px;">
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
                      @click="$store.dispatch('logout')"
                      class="btn btn-sm btn-danger mr-2"
                    >
                      <div class="tips">
                        <i class="fas fa-sign-out-alt"></i>
                        <span class="tipstextB">logout</span>
                      </div>
                    </button>
                 
                  </div>
                </template>
              </div>
            </div>
            <!-- RIGHT SECOND -->
            <div
              class="col-sm-12"
              style="background:#eceff4;min-height:760px;"
              @click="menuTrigger=false;menuKanan=false"
            >
              <div class="sm:mt-2 sm:p-2">
                <br>
                <br>
                <router-view style="z-index:10;background:white;" class="shadow-lg p-3 rounded-lg" v-myimage v-reload />
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition
        tag="div"
        enter-active-class="font-bold animated fadeInRight"
        leave-active-class="font-bold animated fadeOutRight"
        mode="in-out"
      >
        <div
          v-show="menuKanan"
          style="position:fixed;z-index:11;right:0;top:0;width:210px;height:700px;box-shadow:1px 1px 2px 1.5px black;"
          class="bg-white p-3"
        >
          <p class="text-center">Profiles</p>
          <hr class="style16">
          <div class="text-center">
            
          </div>
          <hr class="style16">
          <p class="text-center text-uppercase">
          </p>
          <p class="text-center">
          </p>
          <br>
           
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import io from 'socket.io-client'
const socket = io(`http://localhost:2021`)
import dropdown from "@/components/Single/Dropdown.vue";
import menus from "@/components/app/menu.vue";
import axios from "axios";
import imageku from "@/components/Web/MyImage.vue";
import Busy from "@/components/Web/Busy.vue";
import Footer from "@/components/Web/Footer.vue";
import Navbar from "@/components/desa/navbar.vue";
export default {
  components: {
    imageku,
    menus,
    dropdown,
    Busy,
    Footer,
    Navbar
  },
  data() {
    return {
      leng:0,
      bgleft1: "#EDEFF2",
      bgleft2: "#EDEFF2",
      bgleft3: "#343A40",
      bgrighttop: "dark",
      test: 1,
      menuTrigger: true,
      menuKanan: false,
      bearer: "",
            datanya:[],
      float_menu:false,
      busy: false // digunakan untuk melihat apakah ada data yang masih diprocess untuk dimunculkan loading
    };
  },
  methods: {
    refreshNotif(){
       let fd = new FormData()
      fd.append('data', `select dibaca from permintaan where dibaca='false'`)//database setting di server
      fd.append('database','loandocument')
      axios.post('http://localhost:8080/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
        // let length = res.data.length
        this.leng=res.data.length
        console.log(this.leng)
          this.$forceUpdate()
      })
    },
    go(item){
        window.location= item
    },
    muncul(e) {
    
      e.target.nextElementSibling.classList.toggle("isaktif");
    },
    onSwipeRight() {
      this.menuTrigger = true;
    },
    scrollOnLoad() {
      this.$el.querySelectorAll("a.scrollactive-item").forEach(el => {
        if (el.hash == this.$route.hash) {
          el.click();
        }
      });
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
      // this.cekAuth();
      if (this.$store.state.device != "dekstop") {
        this.isLoginNotLocal();
      }
      this.version();
      this.loginOAuth();
      //! mencek apakah expireData berakhir
      // this.$store.dispatch('auth/autoLogout');
    }
  },
  beforeMount(){
    let that =this;
    socket.on("new-message", message => {
      console.log('new-scket')
      that.refreshNotif()
    });
   
     let fd2 = new FormData()
          fd2.append('data', 'select * from user')
          axios
            .post('http://localhost:8080' + '/api/mysql/ld/getUser.php', fd2, {
              headers: {
                Authorization: localStorage.getItem('auth._token.local')
              }
            })
            .then(res => {
              console.log(res)
              this.$store.commit('changeUsers', res.data[0])
              localStorage.setItem('users', JSON.stringify(res.data[0]))
              console.log(res.data[0])
              // this.$router.push('/ld/')
            })
  },
  mounted() {
      this.refreshNotif()
       if(this.$store.state.users){
            }else{
        this.$router.push('/ld/login')
        }
   
  },
};
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
  cursor: pointer;
  padding: 5px 0px 5px 0px;
  font-size: 12px;
  border-bottom: 1px solid black;
}
</style>
