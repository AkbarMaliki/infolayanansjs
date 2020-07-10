<template>
  <div>
   
 <div class="container-fluid " style="">
    <div class="row">
        <div class="col-sm-12 " style="height:1300px;background:rgba(225, 233, 236, 0.911);">
          <div class="row">

              <div style=" margin: auto;margin-top:10vh;
              background:#FEFEFE;
                " class="rounded-lg shadow-lg border-2 p-3 col-10 col-sm-6">
                <div class="text-center">
              <img src="@/static/driver/sdd.png" class="kinoLightBox img-fluid  z-depth-1 mx-auto" style="height:60px;">
              <br>
              <div class="container-fluid">
                  <div class="row">
                    <div class="col-12">
                      <p class="font-bold text-center font-times text-2xl">SDD</p>
                    </div>
                     <!-- <div class="col-4">
                       <img src="@/static/driver/logo_bkp.png" class="kinoLightBox img-fluid  z-depth-1 mx-auto float-left" style="height:60px;">
                       </div>
                     <div class="col-4">
                       <img src="@/static/driver/sdd.png" class="kinoLightBox img-fluid  z-depth-1 mx-auto" style="height:60px;">
                       </div>
                     <div class="col-4">
                       <img src="@/static/driver/pkss.png" class="kinoLightBox img-fluid  z-depth-1 mx-auto float-right" style="height:60px;">
                       </div> -->
                      </div>
              </div>
              <br>
              <hr class="style7 pt-2 mt-1">
                </div>
                  <form action="#" @submit.prevent="login">
                    <div class="sm-form">
                      <label for="username">Username</label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        class="form-control form-control-sm"
                        placeholder="username"
                        v-model="vdata.username"
                        required
                      />
                    </div>
                    <div class="sm-form">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        class="form-control form-control-sm"
                        placeholder="password"
                        v-model="vdata.password"
                        required
                      />
                    </div>
                    <br />
                    <hr class="style13" />
                    <br />

                    <button type="submit" class="btn btn-sm bg-blue-darker text-white float-left"><span class="typcn typcn-key"></span> Login</button>
                    <br />
                    <br />
                    <br />
                      <br>
                    <p class="text-center cursor-pointer" @click="$router.push('/sdd/register')">Belum Punya Akun!</p>
                    <!-- <button type="button" class="btn btn-sm bg-blue-darker text-white float-right" @click="$router.push('/driver/register')">Register</button> -->
                    <br />
                    <br /><br />
                    <br /><br />
                  
                    <br />
                  </form>
                  <div class="text-center" v-show="installs">
                   <button type="button" @click="install" class="btn btn-sm btn-secondary"><span class="typcn typcn-social-last-fm"></span> Install</button>
                  </div>

              </div>
          </div>

            <br>
            <br>
        </div>
        <div class="col-sm-6">

        </div>
    </div>
</div>
<!-- <div style="" class="text-center font-bold font-times">Created By Malik</div> -->
<!-- <div style="" class="text-center font-bold font-times">TAM PRODUCTIONS</div> -->
  </div>
</template>
<script>
import axios from 'axios'
import md5 from 'md5'
var deferredPrompt;
export default {
  data () {
    return {
      vdata: {},
      ready:true,
      installs:false
    }
  },
  beforeMount () {
    
  },
  methods: {
     install() {
      console.log(deferredPrompt)
      if (deferredPrompt !== undefined) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function(choiceResult) {
          if (choiceResult.outcome == "dismissed") {
            console.log("User cancelled home screen install");
          } else {
            console.log("User added to home screen");
          }
          deferredPrompt = null;
        });
      }
    },
    cekLogin(){
      setTimeout(() => {
      this.ready=false
        if (localStorage.getItem('auth._token.local')) {
        let fd2 = new FormData()
        fd2.append('data', 'select * from tbuser')
        axios
          .post('https://infolayanans.space/api/mysql/getUser.php', fd2, {
            headers: {
              Authorization: localStorage.getItem('auth._token.local')
            }
          })
          .then(res => {
            console.log(res)
            this.$store.commit('changeUsers', res.data[0])
            localStorage.setItem('users', JSON.stringify(res.data[0]))
            this.$router.push('/sdd/')
          }).catch(err=>{
            console.log(err)
          })
      }
    }, 2500);
    },
    login () {
      console.log(this.vdata.username , this.vdata.password,  md5(this.vdata.password))
      if(this.vdata.username == 'admin' && this.vdata.password == 'btnkantorcabangbanjarbaru'){
        this.$router.push('/driver/admin')
      }else{
      let fd = new FormData()
      fd.append('username', this.vdata.username)
      fd.append('password', md5(this.vdata.password))
      axios
        .post('https://infolayanans.space/api/mysql/sdd/login.php', fd)
        .then(res => {
          // alert('sukses')
          console.log(res)
          localStorage.setItem('auth._token.local', res.data.token)
          localStorage.setItem('auth.local', res.data.token)
          let fd2 = new FormData()
          fd2.append('data', 'select * from tbuser')
          axios
            .post('https://infolayanans.space' + '/api/mysql/getUser.php', fd2, {
              headers: {
                Authorization: localStorage.getItem('auth._token.local')
              }
            })
            .then(res => {
              console.log(res)
              this.$store.commit('changeUsers', res.data[0])
              localStorage.setItem('users', JSON.stringify(res.data[0]))
              this.$router.push('/sdd/')
            })
        })
        .catch(err => {
          alert('username salah')
        })
      }
    }
  },
  mounted() {
    // this.$router.push('/sekolah')
    let that = this;
      window.addEventListener("beforeinstallprompt", function(e) {
        that.installs = true;
        e.preventDefault();
        deferredPrompt = e;
      });
    setTimeout(() => {
      console.log(window.swReg)
      }, 3000);
    this.cekLogin()
  },
}
</script>
<style>
.tes{
  color:rgba(225, 233, 236, 0.911);
}
</style>
