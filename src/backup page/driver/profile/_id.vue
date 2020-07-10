<template>
    <div class="bg-white animated fadeIn" style="height:100vh;">
        <div style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                 <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.go(-1)"></span>
            <div class="p-3 text-center text-white">
                    <img :src="gambar" class="border-white kinoLightBox img-fluid rounded-circle rounded-b z-depth-1 shadow-lg" style="height:100px;width:100px;" alt="t">
                    <br>
                    <p>{{usernya.nama}}</p>
                    <p class="font-bold font-times">{{usernya.posisi}}</p>
                    <br>
                    <br>
            </div>
        </div>
        <div class="bg-white rounded-lg ml-3 mr-3 p-2 shadow-lg" style="margin-top:-50px;">
            <div class="row">
                <div class="col-12">

                     <!-- <div class="tips text-right float-right">
                    <button type="button" @click="$router.push('/driver/profile/edit')" class="btn btn-sm btn-success " ><i class="fas fa-cog"></i></button>
                        <span class="tipstextL">text tips</span>
                    </div> -->
                    <span class="pl-3 font-bold font-times">Profile</span>
                    <button type="button"  class="btn btn-sm btn-outline-success float-right shadow-lg " v-show="usernya.status=='available' && usernya.posisi=='DRIVER'">StandBy</button>
                    <!-- not available -->
                    <button type="button"  class="btn btn-sm btn-outline-warning float-right shadow-lg " v-show="usernya.status!='available' && usernya.posisi=='DRIVER'">On Job</button>
                    <button type="button"  class="btn btn-sm btn-outline-danger float-right shadow-lg " @click="change" v-show="$store.state.users.unit_kerja=='1' || $store.state.users.unit_kerja=='2' || $store.state.users.id==$route.params.id">Change</button>
                    <br>
                    <br>
                    <div class="row">
                        <div class="col-4 p-1 rounded-lg  hover:bg-blue-light text-center shadow-lg" @click="profiles='profile'"><span class="typcn typcn-user" ></span></div>
                        <div class="col-4 p-1 rounded-lg  hover:bg-blue-light text-center shadow-lg "  @click="profiles='data'"><span class="typcn typcn-briefcase "></span></div>
                        <div class="col-4 p-1 rounded-lg  hover:bg-blue-light text-center shadow-lg "><span class="typcn typcn-archive text-red"></span></div>
                    </div>
                    <br>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-lg ml-3 mr-3 p-2 shadow-lg" style="margin-top:10px;">
            <div class="row">
                <div class="col-12 animated fadeIn" v-show="profiles=='profile'">
                    <p class="text-sm font-bold float-right text-green shadow-inner p-1 rounded-lg">WA : {{usernya.no_hp}}</p>
                    <p class="pl-3 text-uppercase font-bold font-times mb-4 " style="font-size:12px;">{{usernya.nip}}</p>
                    <p class="pl-3 text-sm">TANGGAL LAHIR : {{usernya.tglahir}}</p>
                    <p class="pl-3 text-sm mb-2 text-justify">ALAMAT : {{usernya.alamat}}</p>
                    <hr>
                    <p class="pl-3 text-sm text-justify " style="margin-top:-20px;">{{usernya.profile}}</p>
                    <br>
                    <p class="pl-3 text-sm float-right font-times font-italic">{{usernya.email}}</p>
                </div>
                 <div class="col-12 animated fadeIn" v-show="profiles=='data'">
                     <br>
                   <p class="text-center font-bold font-times">DATA KELUAR HARI INI</p>
                   <br>
                   <div class="text-center">
                       <button type="button"  class="btn btn-lg btn-outline-primary text-center font-bold  ">{{jumlah_keluar}}</button>
                   </div>
                   <br>
                   <p class="text-center font-bold font-times">DATA IJIN LEMBUR HARI INI</p>
                   <br>
                    <div class="text-center">
                       <button type="button"  class="btn btn-lg btn-outline-danger text-center font-bold  ">{{jumlah_lembur}}</button>
                   </div>
                   <br>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
var id = require("date-fns/locale/id");
export default {
  data () {
    return {
        usernya:{},
        gambar:"",
        profiles:'profile',
        jumlah_keluar:0,
        jumlah_lembur:0
    }
  },
    computed: {
      tanggal() {
          return this.$datefns.format(
            new Date(),
            "DD MMMM YYYY",
            {
              locale: id
            }
          );
        },
  },
  methods: {
      change(){
          let fd = new FormData()
          if(this.usernya.status=='available'){
                 var ket = prompt("Tambahkan keterangan On Job!", "Istirahat");
                if (ket == null || ket == "") {
                } else {
                    console.log(ket)
                    fd.append('data', `update tbuser set status='Tidak Tersedia',ket='${ket}' where id='${this.$route.params.id}'`)
                }
          }else{
              alert('Status Kembali Tersedia / stand by')
                fd.append('data', `update tbuser set status='available' where id='${this.$route.params.id}'`)
          }
          fd.append('database', ' infolay3_test')
          axios.post('https://infolayanans.space/api/mysql/auto.php', fd
          , {
              headers: {
              Authorization: localStorage.getItem('auth._token.local')
              }
          }).then(res => {
              console.log(res)
               this.refreshs()
              this.$forceUpdate()
          })
      },
      refreshs(){
            let fd = new FormData()
      fd.append('data', `select * from tbuser tb1 LEFT JOIN tbuser_gambar tb2 on tb1.id=tb2.id_user where tb1.id='${this.$route.params.id}'`)
      fd.append('database', ' infolay3_test')
      axios
        .post('https://infolayanans.space' + '/api/mysql/auto.php', fd, {
          headers: {
            Authorization: localStorage.getItem('auth._token.local')
          }
        })
        .then(res => {
          console.log(res)
          this.usernya=res.data[0]
          this.gambar = res.data[0].gambar
        }).catch(err => {
        })
      },
      request(){
          this.$store.commit('requestDriver',this.usernya)
          this.$router.push(`/driver/inputrequest`)
      }
  },
  layout: 'driver',
  mounted() {
    this.refreshs()
     let fd2 = new FormData()
      fd2.append('data', `select * from driver_perjalanan where id_driver='${this.$route.params.id}' OR id_penumpang='${this.$route.params.id}'`)
      fd2.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          let tanggal = []
          tanggal = res.data.filter(e=>{
              if(e.tanggal.indexOf(this.tanggal)!=-1){
                  return e
              }
          })
          this.jumlah_keluar=tanggal.length;
          this.$forceUpdate()
      })
       let fd3 = new FormData()
      fd3.append('data', `select * from driver_lembur where id_user='${this.$route.params.id}'`)
      fd3.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd3
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          let tanggal = []
          tanggal = res.data.filter(e=>{
              if(e.tanggal.indexOf(this.tanggal)!=-1){
                  return e
              }
          })
          this.jumlah_lembur=tanggal.length;
          console.log(tanggal)
          this.$forceUpdate()
      })
  },
}
</script>
