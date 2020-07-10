<template>
    <div class="bg-white animated fadeIn" style="height:100vh;">
        <div style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                 <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.go(-1)"></span>
            <div class="p-3 text-center text-white">
                    <img :src="mobilnya.gambar" class="border-white kinoLightBox img-fluid rounded-circle rounded-b z-depth-1 shadow-lg" style="height:100px;width:100px;" alt="t">
                    <br>
                    <p>{{mobilnya.nama_mobil}}</p>
                    <p class="font-bold font-times">{{mobilnya.status}}</p>
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
                    <button type="button"  class="btn btn-sm btn-outline-success float-right shadow-lg " v-show="mobilnya.status=='available'">StandBy</button>
                    <!-- not available -->
                    <button type="button"  class="btn btn-sm btn-outline-warning float-right shadow-lg " v-show="mobilnya.status!='available'">On Job</button>
                    <button type="button"  class="btn btn-sm btn-outline-danger float-right shadow-lg " @click="change" v-show="$store.state.users.unit_kerja=='1' || $store.state.users.unit_kerja=='2' || $store.state.users.id==$route.params.id">Change</button>
                    <br>
                </div>
            </div>
        </div>
        <div class="bg-white rounded-lg ml-3 mr-3 p-2 shadow-lg" style="margin-top:10px;">
            <div class="row">
                <div class="col-12">
                    <p class="pl-3 text-uppercase font-bold font-times float-left">{{mobilnya.no_plate}}</p>
                    <hr>
                    <p class="pl-3 text-sm font-bold">Mobil : {{mobilnya.nama_mobil}}</p>
                    <br>
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
        mobilnya:{}
    }
  },
  methods: {
      change(){
          let fd = new FormData()
          if(this.mobilnya.status=='available'){
              fd.append('data', `update driver_mobil set status='Tidak Tersedia' where id='${this.mobilnya.id}'`)
          }else{
              fd.append('data', `update driver_mobil set status='available' where id='${this.mobilnya.id}'`)
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
      fd.append('data', `select * from driver_mobil where id='${this.$route.params.id}'`)
      fd.append('database', ' infolay3_test')
      axios
        .post('https://infolayanans.space' + '/api/mysql/auto.php', fd, {
          headers: {
            Authorization: localStorage.getItem('auth._token.local')
          }
        })
        .then(res => {
          console.log(res)
          this.mobilnya=res.data[0]
        }).catch(err => {
        })
      },
      request(){
          this.$store.commit('requestDriver',this.mobilnya)
          this.$router.push(`/driver/inputrequest`)
      }
  },
  layout: 'driver',
  mounted() {
    this.refreshs()
  },
}
</script>
