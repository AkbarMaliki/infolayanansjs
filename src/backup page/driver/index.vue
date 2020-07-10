<template>
  <div class="animated fadeIn">
     <div class="bg-white" style="height:110vh;">
        <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
            <div class="p-3 text-center text-white font-times pt-1">
                    <p  class="text-capitalize">{{$store.state.users.nama}}</p>
                    <p  class="font-bold font-times text-capitalize" >{{$store.state.users.posisi}}</p>
                    <br>
                    <br>
                    <br>
                    <br>
            </div>
        </div>
        <div class="bg-white rounded-lg ml-3 mr-3 p-2  shadow-md" style="margin-top:-100px;">
            <div class="row">
                <div class="col-12">
                <div class="row">
                  <div class="col-2">
                  </div>
                  <!-- -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(250, 250, 250, 0.1))); -->
                  <div class="col-4 mt-3 animated fadeInDown   hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/ijin')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(209,202,204);
background: radial-gradient(circle, rgba(209,202,204,0.5214460784313726) 0%, rgba(35,231,236,0.4458158263305322) 100%);">
                     <i class="far fa-id-card  hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        IJIN KELUAR KANTOR!
                     </p>
                  </div>
                  <div class="col-4 mt-3 animated fadeInDown   hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/lembur/ijin')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(209,202,204);
background: radial-gradient(circle, rgba(209,202,204,0.5214460784313726) 0%, rgba(35,231,236,0.4458158263305322) 100%);">
                     <i class="fas fa-clock hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        IJIN LEMBUR!
                     </p>
                  </div>
                  <div class="col-2"></div>
                  <div class="col-12">
                    <br>
                    <!-- <p class="pl-2 font-bold font-times text-sm">Menu Pribadi</p> -->
                  </div>
                  <div class="col-4 mt-3 animated fadeInDown  hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/list-driver')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(6,143,252,0.7315301120448179) 100%);">
                     <i class="fas fa-users hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        DRIVER TERSEDIA
                     </p>
                  </div>
                  <div class="col-4 mt-3 animated fadeInDown  hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/list-mobil')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(6,143,252,0.7315301120448179) 100%);">
                     <i class="fas fa-car hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        MOBIL TERSEDIA
                     </p>
                  </div>
                      <div class="col-4 mt-3 animated fadeInDown  hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/list-jalan')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(6,143,252,0.7315301120448179) 100%);">
                     <i class="fas fa-chalkboard hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        Info Ijin Keluar
                     </p>
                  </div>
                    <div class="col-4 mt-3 animated fadeInDown  hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/route')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(6,143,252,0.7315301120448179) 100%);">
                     <i class="fab fa-artstation hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        ROUTE
                     </p>
                  </div>
                   <div class="col-4 mt-3 animated fadeInDown  hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/req-driver')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(6,143,252,0.7315301120448179) 100%);">
                     <i class="fas fa-sync  hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        PERMINTAAN IJIN KELUAR
                     </p>
                  </div>
                   <div class="col-4 mt-3 animated fadeInDown  hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/lembur/req-lembur')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(6,143,252,0.7315301120448179) 100%);">
                     <i class="fas fa-lightbulb hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        PERMINTAAN LEMBUR
                     </p>
                  </div>

                 <div class="col-12">
                    <br>
                    <p class="pl-2 font-bold font-times text-sm" v-if="$store.state.users.unit_kerja=='1' || $store.state.users.unit_kerja=='2'">Menu Heads</p>
                  </div>
                  
                  <!-- BAGIAN 2 -->
                  
                   
                  <!-- BAGIAN ADMIN -->
                  <!-- <div class="col-4 mt-3  hover:bg-red rounded-lg hover:text-white"  v-show="$store.state.users.unit_kerja==2" @click="$router.push('/driver/mobil/setmobil')">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(241,255,0);background:white;">
                     <i class="fas fa-car-side  hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        SET MOBIL
                     </p>
                  </div> -->
                  <div class="col-4 mt-3 animated fadeInUp  hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/list-request')"  v-show="$store.state.users.unit_kerja==2">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background:white;">
                     <i class="fas fa-file-import   hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        LIST IJIN KELUAR KANTOR
                     </p>
                  </div>
                  <div class="col-4 mt-3 animated fadeInUp  hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/list-request-head')"  v-show="$store.state.users.unit_kerja_head=='head'">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background:white;">
                     <i class="fas fa-id-card-alt   hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        LIST IJIN KELUAR KANTOR (UNIT HEAD)
                     </p>
                  </div>
                   <div class="col-4 mt-3 animated fadeInUp  hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/approve')"  v-show="$store.state.users.unit_kerja==1">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background:white;">
                     <i class="fas fa-file-signature hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        LIST APPROVAL DRIVER
                     </p>
                  </div>
                  <div class="col-4 mt-3 animated fadeInUp  hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/lembur/list-permintaan')"  v-show="$store.state.users.unit_kerja_head=='head'">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background:white;">
                     <i class="fas fa-address-book hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        LIST PERMINTAAN LEMBUR (UNIT HEAD)
                     </p>
                  </div>
                     <div class="col-4 mt-3 animated fadeInUp  hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/lembur/approve')"  v-show="$store.state.users.unit_kerja==1">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background:white;">
                     <i class="fas fa-file-contract hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        LIST APPROVAL LEMBUR
                     </p>
                  </div>
                
                <!-- BAGIAN LAPORAN -->
                   <div class="col-12">
                    <br>
                    <p class="pl-2 font-bold font-times text-sm">Menu Laporan</p>
                  </div>
                   <div class="col-4 mt-3 animated fadeInUp hover:bg-red rounded-lg hover:text-white" @click="laporan1" >
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(228,228,228,0.9220063025210083) 100%);">
                     <i class="fas fa-clipboard-list hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        LAPORAN IJIN KELUAR
                     </p>
                  </div>
                   <div class="col-4 mt-3 animated fadeInUp hover:bg-red rounded-lg hover:text-white" @click="laporan2" >
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(228,228,228,0.9220063025210083) 100%);">
                     <i class="fas fa-clipboard-list hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        CEK ROUTE PERJALANAN
                     </p>
                  </div>
                  <div class="col-4 mt-3 animated fadeInUp hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/lembur/list-lembur')" >
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(228,228,228,0.9220063025210083) 100%);">
                     <i class="fas fa-clipboard-list hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        LAPORAN LEMBUR 
                     </p>
                  </div>
                    <div class="col-4 mt-3 animated fadeInUp hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/nilais')" v-if="$store.state.users.unit_kerja=='1' || $store.state.users.unit_kerja=='2'">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(228,228,228,0.9220063025210083) 100%);">
                     <i class="fas fa-star hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        LAPORAN PENILAIAN DRIVER 
                     </p>
                  </div>
                      <div class="col-4 mt-3 animated fadeInUp hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/report')" v-if="$store.state.users.unit_kerja=='1' || $store.state.users.unit_kerja=='2'">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(228,228,228,0.9220063025210083) 100%);">
                     <i class="fas fa-business-time hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        LAPORAN AKTIVITAS KELUAR
                     </p>
                  </div>
                     <div class="col-4 mt-3 animated fadeInUp hover:bg-red rounded-lg hover:text-white" @click="$router.push('/driver/report2')" v-if="$store.state.users.unit_kerja=='1' || $store.state.users.unit_kerja=='2'">
                    <div class=" p-1 pt-2 text-center font-bold font-times hover:text-white rounded-lg border-2 border-grey shadow-md" 
                    style="background: rgb(194,228,206);
background: radial-gradient(circle, rgba(194,228,206,0.5410539215686274) 0%, rgba(228,228,228,0.9220063025210083) 100%);">
                     <i class="fas fa-clock hover:text-white  rounded-lg" style="font-size:40px;"></i>
                     </div>
                     <p style="font-size:10px;" class="text-center font-bold font-times pt-1">
                        LAPORAN AKTIVITAS LEMBUR
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
    laporan1(){
      if(this.$store.state.users.unit_kerja==1 || this.$store.state.users.unit_kerja==2){
        this.$router.push('/driver/laporan2')
      }else{
        this.$router.push('/driver/laporan')
      }
    },
     laporan2(){
        this.$router.push('/driver/laporan/route')
    },
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
     setTimeout(() => {
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
     }, 1000);
  },
}
</script>
