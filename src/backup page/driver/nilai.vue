<template>
    <div>
          <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                 <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.go(-1)"></span>
            <div class="p-3 text-center text-white font-times font-bold">
                    <p>BERI NILAI</p>
            </div>
            <br>
            <br>
        </div>
        <div class="bg-white ml-2 mr-2 p-2 rounded-lg shadow-inner shadow-lg" style="margin-top:-50px;" > 
          <div class="text-center rounded-lg" style="background:#CEE3E2;">
              <img :src="infos.gambar" class="kinoLightBox img-fluid z-depth-2" style="border-radius: 20px;height:150px;">
              <p class="text-center font-bold font-times text-uppercase">{{infos.nama}}</p>
              <div class="p-2" >
              <hr class="style13">
              <div class="py-2" @click="star('5')">
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
              </div>
              <div class="py-2" @click="star('4')">
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
              </div>
              <div class="py-2" @click="star('3')">
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
              </div>
              <div class="py-2" @click="star('2')">
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
              </div>
              <div class="py-2" @click="star('1')">
                <span class="typcn typcn-star-full-outline text-yellow-dark " style="font-size:28px;"></span>
              </div>
            </div>
            <div class="sm-form">
                <label for="komentar" class="font-bold">Beri komentar WAJIB!</label>
            <textarea
            type="text"
            id="komentar"
            name="komentar"
            rows="2"
            placeholder="komentar..."
            class="form-control md-textarea"
            v-model="vdata.komentar"
            ></textarea>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
    var id = require("date-fns/locale/id");
export default{
    data(){
        return{
            infos:{},
            vdata:{}
        }
    },
    layout:'driver',
    computed: {
        distance() {
          return this.$datefns.distanceInWords(
            new Date("2018-12-25T03:21:12.941Z"),
            new Date(),
            {
              locale: id,
              includeSeconds: true
            }
          );
          return result;
        },
        tanggal() {
          return this.$datefns.format(
            new Date(),
            "DD MMMM YYYY",
            {
              locale: id
            }
          );
        },
         idnya() {
          return this.$datefns.format(
            new Date(),
            "DDMYY",
            {
              locale: id
            }
          );
        },
         jam() {
          return this.$datefns.format(
            new Date(),
            "HH:mm:ss",
            {
              locale: id
            }
          );
        },
        distanceToNow() {
          return this.$datefns.distanceInWordsToNow(
            new Date(2015, 0, 1, 0, 0, 15),
            {
              locale: id,
              includeSeconds: true
            }
          );
          //=> "3 days ago"
        }
      },
    methods:{
        tes(){
            alert('y')
        },
        star(str){
          if(this.vdata.komentar.length>0){
            console.log(str)
            if(confirm('Yakin memberi bintang '+str+' ?')){

            let fd = new FormData()
            fd.append('data', `insert into driver_star (id_penumpang,id_outsource,nilai,tanggal,komentar) VALUES ('${this.$store.state.users.id}','${this.infos.id_driver}','${str}','${this.tanggal}','${this.vdata.komentar}')`)
            fd.append('database', ' infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                this.$forceUpdate()
                let fd2 = new FormData()
                fd2.append('data', `update driver_perjalanan set status='6' where id='${this.infos.id}'`)
                fd2.append('database', ' infolay3_test')
                axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
                , {
                    headers: {
                    Authorization: localStorage.getItem('auth._token.local')
                    }
                }).then(res => {
                    this.$router.push('/driver')
                })
            })
            } }else{
            alert('Wajib isikan komentar atau saran!')
          }
            }
        },
        mounted() {
            let fd = new FormData()
        fd.append('data', `Select tb1.id,tb1.id_driver,tb1.id_penumpang,tb1.ids,tb1.pilih,tb1.kendaraan,tb1.status,tb2.nama,tb3.gambar FROM driver_perjalanan tb1 LEFT JOIN tbuser tb2 ON tb1.id_driver=tb2.id left join tbuser_gambar tb3 on tb3.id_user=tb2.id where tb1.id_penumpang='${this.$store.state.users.id}' AND tb1.status='5' ORDER BY tb1.id_driver desc`)
        fd.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            console.log(res.data)
            this.infos = res.data[0]
            this.$forceUpdate()
        })
    },
}
</script>