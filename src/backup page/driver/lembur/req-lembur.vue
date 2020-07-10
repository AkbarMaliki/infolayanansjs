<template>
  <div>
      <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                 <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.push('/driver')"></span>
            <div class="p-3 text-center text-white font-times">
                    <p>Request Lembur</p>
            </div>
            <br>
            <br>
        </div>
        <!-- {{infos.status=='1'}} -->
        <div class="bg-white ml-2 mr-2 p-2 rounded-lg shadow-lg" style="margin-top:-50px;" v-show="infos.status!='3'" > 
          <div class="text-center rounded-lg" style="background:#CEE3E2;">
            <img src="@/static/gif/latemin.gif" class="kinoLightBox img-fluid rounded-lg shadow-lg" style="height:200px;">
            <p class="animated infinite bounce slow text-2xl font-times font-bold" v-show="infos.status!='3'">LOADING ...</p>
          </div>
          <br>
          <p class="font-bold text-center font-times" v-show="infos.status!='3'">PERMINTAAN MASIH DIPROSES!</p>
        </div>
         <div class="bg-white ml-2 mr-2 p-2 rounded-lg shadow-lg" style="margin-top:10px;"  v-if="infos.status!='3'" > 
          <div class="text-center rounded-lg font-bold font-times text-uppercase" :class="{'bg-red text-white':infos.status=='1','bg-orange text-white':infos.status=='2','bg-green':infos.status=='3'}">
            {{infos.status == '1' ? 'Menunggu Persetujuan' : infos.status == '2' ? 'belum di approve' : 'Sudah di Approve'}}
          </div>
          <hr style='margin-bottom:1px;'>
          <div class="font-bold text-sm font-times">
            <tr>
              <td>Unit Kerja</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.posisi ?  infos.posisi : 'Belum ada' }}</td>
            </tr>
            <tr>
              <td>Nama</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.nama ?  infos.nama : 'Belum ada' }}</td>
            </tr>
            <tr>
              <td>Jenis Pekerjaan Dilemburkan</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.jenis_pekerjaan ?  infos.jenis_pekerjaan : 'Belum ada' }}</td>
            </tr>
             <tr>
              <td>Rincian Kerja</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.rincian_kerja ?  infos.rincian_kerja : 'Belum ada' }}</td>
            </tr>
            <tr>
              <td>Lama Lembur</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.jam_lama ?  infos.jam_lama: 'Belum ada' }}</td>
            </tr>
             <tr>
              <td>tanggal</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.tanggal ?  infos.tanggal: 'Belum ada' }}</td>
            </tr>
            <!-- <tr>
              <td>Jam Request Lmbur</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.jam_lembur ?  infos.jam_lembur : 'Belum ada' }}</td>
            </tr> -->
             <div class="text-center">
              <img :src="infos.ttd" class="kinoLightBox img-fluid" style="height:200px;" alt="">
            </div>
            
            <div class="p-2 text-center">
              <hr class="style13">
              <button type="button" @click="Selesai" class="btn btn-sm btn-primary  " v-show="infos.kendaraan=='pribadi'">Selesai</button>
            </div>
            <div class="text-center">
              <button type="button" @click="batal" class="btn btn-sm btn-outline-danger " v-if="infos.status!='3'">Batal</button>
              <!-- <button type="button" @click="nilais=!nilais;scrollTop" class="btn btn-sm btn-success rounded-lg" v-if="infos.status=='3' && infos.id_penumpang==$store.state.users.id">Beri Nilai</button> -->
            </div>
          </div>
        </div>
        <div class="bg-white ml-2 mr-2 p-2 rounded-lg shadow-lg" style="margin-top:-50px;" v-else>
          <p class="text-center font-bold font-times ">
            TIDAK ADA REQUEST
          </p>
        </div>
  </div>
</template>
<script>
import axios from 'axios'
    var id = require("date-fns/locale/id");
export default{
  layout:'driver',
  data(){
    return{
      infos:{},
      nilais:false
    }
  },
  methods: {
    Selesai(){
      let fd = new FormData()
      fd.append('data', `update driver_perjalanan set status='6' where id='${this.infos.id}'`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
        this.$router.push('/driver')
          this.$forceUpdate()
      })
    },
    scrollTop(){
      window.scrollTo(0, 500)
    },
    batal(){
      var txt;
      var r = confirm("Yakin Membatalkan Request ?");
      if (r == true) {
        txt = "Request telah di delete";
        let fd = new FormData()
        fd.append('data', `delete from driver_lembur where id='${this.infos.id}'`)
        fd.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
          this.$router.push('/driver')
            this.$forceUpdate()
        })
      } else {
      }
    },
    cek(){
      let fd = new FormData()
      fd.append('data', `SELECT  tb2.nama,tb2.posisi,tb1.jenis_pekerjaan,tb1.jam_lembur,tb1.jam_lama,tb1.rincian_kerja,tb1.tanggal,tb1.status,tb1.id,tb1.ttd FROM driver_lembur tb1 LEFT JOIN tbuser tb2 ON tb1.id_user= tb2.id where id_user='${this.$store.state.users.id}' ORDER BY tb1.id DESC`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          // alert('y')
          console.log('infos',res)
          this.infos=res.data[0]
          console.log(parseInt(this.infos.status))
          if(parseInt(this.infos.status)>3){
            this.infos.jam_berangkat=false
          }
          this.$forceUpdate()
      })
    },
  
    request(){
      let fd = new FormData()
      fd.append('data', `insert into driver_perjalanan (id_penumpang,tujuan,keperluan,penumpang,status,pilih,kendaraan,jam_update,tanggal,jam_berangkat,unit_kerja) VALUES ('${this.$store.state.users.id}',
      '${this.$store.state.drivers.request.tujuan}','${this.$store.state.drivers.request.keperluan}','${this.$store.state.drivers.request.penumpang}','1','${this.$store.state.drivers.request.pilih}','${this.$store.state.drivers.request.kendaraan}','${this.jam}','${this.tanggal}','${this.$store.state.drivers.request.jam_berangkat}','${this.$store.state.drivers.request.unit_kerja}')`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd, {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          console.log(res)
          this.cek()
          this.$forceUpdate()
      })
    },
      format(tanggal) {
        return this.$datefns.format(
          tanggal,
          "DD MMMM YYYY",
          {
            locale: id
          }
        );
      },
  },
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
  mounted() {
    this.cek()

    console.log(this.idnya)
    if(this.$route.query.klik=='1'){
      setTimeout(() => {
        // this.$router.push('/driver/signature?type=lembur&id='+this.infos.id)
        alert('Permintaan sedang diproses!')
      }, 1000);
      }
    console.log(this.$store.state.drivers)
  },
}
</script>