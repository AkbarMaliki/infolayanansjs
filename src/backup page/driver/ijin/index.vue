<template>
    <div>
          <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                 <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.go(-1)"></span>
            <div class="p-3 text-center text-white font-times font-bold">
                    <p>IJIN KELUAR</p>
            </div>
            <br>
            <br>
        </div>
        <div class="bg-white ml-2 mr-2 p-2 rounded-lg shadow-inner shadow-lg" style="margin-top:-50px;" > 
             <div class="text-center rounded-lg" style="background:#CEE3E2;">
            <img src="@/static/gif/mobil.gif" class="kinoLightBox img-fluid  z-depth-4 " style="height:180px;">
            <div class="row">
                <div class="offset-2 col-8">
                    <hr class="style16" style="margin-top:-21px;">
                    <select class='form-control' v-model="selected">
                        <option>DINAS</option>
                        <option>TIDAK DINAS</option>
                    </select>
                </div>
                <div class="offset-2 col-8 text-center font-times text-sm font-bold text-uppercase p-2">Kendaraan ?</div>
                <div class="col-6 rounded-lg" @click="$router.push(`/driver/ijin/pribadi?pilih=${selected}`)">
                    <div class=" shadow-lg rounded-lg p-2" style="background: rgb(194,216,228);
background: radial-gradient(circle, rgba(194,216,228,0.5410539215686274) 0%, rgba(6,147,252,0.4654236694677871) 100%);">
                        <i class="fas fa-user " style="font-size:36px;"></i> 
                        <p class="font-times text-sm font-bold">
                        PRIBADI
                        </p>
                    </div>
                 </div>
                <div class="col-6 rounded-lg" @click="$router.push(`/driver/ijin/kantor?pilih=${selected}`)">
                    <div class=" shadow-lg rounded-lg p-2" style="background: rgb(194,216,228);
background: radial-gradient(circle, rgba(194,216,228,0.5410539215686274) 0%, rgba(6,147,252,0.4654236694677871) 100%);">
                        <i class="fas fa-building " style="font-size:36px;"></i> 
                        <p class="font-times text-sm font-bold">
                        KANTOR
                        </p>
                    </div>
                 </div>
                 <div class="col-12">
                     <br>
                 </div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            selected:"DINAS",
            kondisi:"tidak ada"
        }
    },
    layout:'driver',
    methods:{
        tes(){
            alert('y')
        }
    },
    mounted() {
        let fd = new FormData()
        fd.append('data', `select * from driver_perjalanan where id_penumpang='${this.$store.state.users.id}' OR id_driver='${this.$store.state.users.id}'`)
        fd.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            console.log(res)
            res.data.filter(data=>{
                console.log(data.status)
                if(data.status=='1' || data.status=='2' || data.status=='3'){
                    this.$router.push('/driver/req-driver')
                }
            })
            this.$forceUpdate()
        })
    },
}
</script>