<template>
  <div class="animated fadeIn">
     <div class="bg-white" style="height:100vh;">
        <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
            <div class="p-3 text-center text-white font-times">
                    <p @click="$router.push('/driver/profile')" class="text-capitalize">{{$store.state.users.nama}}</p>
                    <p @click="$router.push('/driver/profile')" class="font-bold font-times text-capitalize" >{{$store.state.users.posisi}}</p>
                    <br>
                    <br>
                    <br>
                    <br>
            </div>
        </div>
        <div class="bg-white rounded-lg ml-3 mr-3 p-2 shadow-lg" style="margin-top:-100px;">
            <div class="row">
                <div class="col-12">
                <div class="row">
                  <div class="col-4"></div>
                  <div class="col-4 mt-3 shadow-inner hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/ijin')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg" 
                    style="background: rgb(222,227,182);
background: radial-gradient(circle, rgba(222,227,182,1) 0%, rgba(6,238,252,1) 100%);">
                     <i class="far fa-id-card  hover:text-white shadow-lg rounded-lg" style="font-size:40px;-webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(250, 250, 250, 0.1)));"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times">
                        IJIN LEMBUR!
                     </p>
                  </div>
                  <div class="col-4"></div>
                  <div class="col-4 mt-3 shadow-inner hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/list-driver')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(6,143,252,0.7315301120448179) 100%);">
                     <i class="fas fa-users hover:text-white shadow-inner rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times">
                        DRIVER TERSEDIA
                     </p>
                  </div>
                  <div class="col-4 mt-3 shadow-inner hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/list-mobil')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(6,143,252,0.7315301120448179) 100%);">
                     <i class="fas fa-car hover:text-white shadow-inner rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times">
                        MOBIL TERSEDIA
                     </p>
                  </div>
                   <div class="col-4 mt-3 shadow-inner hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/req-driver')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(6,143,252,0.7315301120448179) 100%);">
                     <i class="fas fa-sync  hover:text-white shadow-inner rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times">
                        REQUESTING
                     </p>
                  </div>
                  <!-- BAGIAN 2 -->
                  <div class="col-4 mt-3 shadow-inner hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/route')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(6,143,252,0.7315301120448179) 100%);">
                     <i class="fab fa-artstation hover:text-white shadow-inner rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times">
                        ROUTE
                     </p>
                  </div>
                  <div class="col-4 mt-3 shadow-inner hover:bg-red rounded-lg hover:text-white" v-if="$store.state.users.posisi=='admins' || $store.state.users.posisi=='GA'" @click="$router.push('/driver/mobil/setmobil')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg" 
                    style="background: rgb(241,255,0);background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(6,252,22,0.7315301120448179) 100%);">
                     <i class="fas fa-car-side  hover:text-white shadow-inner rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times">
                        SET MOBIL
                     </p>
                  </div>
                  <div class="col-4 mt-3 shadow-inner hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/list-request')" v-show="$store.state.users.posisi=='GA'">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(6,252,22,0.7315301120448179) 100%);">
                     <i class="fas fa-list-alt   hover:text-white shadow-inner rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times">
                        LIST REQUESTING
                     </p>
                  </div>
                   <div class="col-4 mt-3 shadow-inner hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/approve')"  v-show="$store.state.users.posisi=='GA'">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(6,252,22,0.7315301120448179) 100%);">
                     <i class="fas fa-clipboard-list hover:text-white shadow-inner rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times">
                        LIST APPROVAL
                     </p>
                  </div>
                  <div class="col-12"></div>
                   <div class="col-4 mt-3 shadow-inner hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/laporan')" >
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(228,228,228,0.9220063025210083) 100%);">
                     <i class="fas fa-clipboard-list hover:text-white shadow-inner rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times">
                        LAPORAN IJIN KELUAR
                     </p>
                  </div>
                   <div class="col-4 mt-3 shadow-inner hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/laporan/route')" >
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(228,228,228,0.9220063025210083) 100%);">
                     <i class="fas fa-clipboard-list hover:text-white shadow-inner rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times">
                        CEK ROUTE PERJALANAN
                     </p>
                  </div>
                  </div>
                  <div class="col-12">
                    <hr class="style13">
                  </div>
                </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      tes: 'taufik akbar maliki'
    }
  },
  beforeMount () {
    if (this.$store.state.users != false) {
      console.log('user')
    } else {
      this.$router.push('/')
    }
  },
  layout: 'driver',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    tes2 () {
      let fd = new FormData()
      fd.append('data', 'select * from btn_tv_text')
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto2.php', fd
        , {
          headers: {
            Authorization: localStorage.getItem('auth._token.local')
          }
        }).then(res => {
        console.log(res)
      })
    }
  },
  mounted() {
    let fd = new FormData()
    fd.append('data', `select * from driver_perjalanan where id_penumpang='${this.$store.state.users.id}' AND status='5' order by id desc`)
    fd.append('database', ' infolay3_test')
    axios.post('https://infolayanans.space/api/mysql/auto.php', fd
    , {
        headers: {
        Authorization: localStorage.getItem('auth._token.local')
        }
    }).then(res => {
      console.log(res.data.length)
        if(res.data.length>0){
          this.$router.push('/driver/nilai')
        }
        this.$forceUpdate()
    })
  },
}
</script>
