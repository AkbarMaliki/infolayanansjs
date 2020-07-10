<template>
  <div>
      <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                 <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.push('/driver')"></span>
            <div class="p-3 text-center text-white font-times">
                    <p>REQUESTING</p>
            </div>
            <br>
            <br>
        </div>
        <div class="bg-white ml-2 mr-2 p-2 rounded-lg shadow-lg" style="margin-top:-50px;"  v-if="infos.jam_berangkat ? infos.jam_berangkat.length : 0 >0"> 
          <div class="text-center rounded-lg" style="background:#CEE3E2;">
            <img :src="infos.status=='3'? require('@/static/gif/loading.gif') : require('@/static/gif/loading.gif')" class="kinoLightBox img-fluid  z-depth-4 ">
            <p class="animated infinite bounce slow text-2xl font-times font-bold" v-show="infos.status!='3'">LOADING ...</p>
          </div>
          <br>
          <p class="font-bold text-center font-times" v-show="infos.status!='3'">PERMINTAAN MASIH DIPROSES!</p>
        </div>
         <div class="bg-white ml-2 mr-2 p-2 rounded-lg shadow-lg" style="margin-top:10px;" v-if="infos.jam_berangkat ? infos.jam_berangkat.length : 0 >0 "> 
          <div class="text-center rounded-lg font-bold font-times text-uppercase" :class="{'bg-red text-white':infos.status=='1','bg-orange text-white':infos.status=='2','bg-green':infos.status=='3'}">
            {{infos.status == '1' ? 'Menunggu Persetujuan' : infos.status == '2' ? 'belum di approve' : 'Sudah di Approve'}}
          </div>
          <hr style='margin-bottom:1px;'>
          <div class="font-bold text-sm font-times">
            <tr v-show="infos.kendaraan=='kantor'">
              <td>Driver</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.nama ?  infos.nama : 'Belum ada' }}</td>
            </tr>
            <tr v-show="infos.kendaraan=='kantor'">
              <td>HP</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.no_hp ?  infos.no_hp : 'Belum ada' }}</td>
            </tr>
            <tr>
              <td>jam_berangkat</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.jam_berangkat ?  infos.jam_berangkat : 'Belum ada' }}</td>
            </tr>
             <tr>
              <td>Karyawan</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.penumpang ?  infos.penumpang : 'Belum ada' }}</td>
            </tr>
            <tr>
              <td>Tujuan</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.tujuan ?  infos.tujuan : 'Belum ada' }}</td>
            </tr>
            <tr>
              <td>Rincian Pekerjaan</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.keperluan ?  infos.keperluan : 'Belum ada' }}</td>
            </tr>
            <tr>
              <td>Lokasi Tujuan</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.lokasi ?  infos.lokasi : 'Belum ada' }}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.pilih ?  infos.pilih: 'Belum ada' }}</td>
            </tr>
             <tr>
              <td>Kendaraan</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.kendaraan ?  infos.kendaraan: 'Belum ada' }}</td>
            </tr>
          <hr style='margin-bottom:1px;'>
           <tr v-show="infos.kendaraan=='kantor'">
              <td>Mobil</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.nama_mobil ?  infos.nama_mobil : 'Belum ada' }}</td>
            </tr>
            <tr v-show="infos.kendaraan=='kantor'">
              <td>Plate</td>
              <td>&nbsp;:&nbsp;</td>
              <td>{{infos.no_plate ?  infos.no_plate : 'Belum ada' }}</td>
            </tr>
            <div class="text-center">
              <button type="button" @click="Selesai" class="btn btn-sm btn-primary  " v-show="infos.kendaraan=='pribadi' && infos.status=='3'">Selesai</button>
            </div>
            <br>
            <div class="text-center">
              <img :src="infos.ttd" class="kinoLightBox img-fluid" style="height:200px;" alt="">
            </div>
            
            <div class="p-2 text-center">
              <hr class="style13">
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
import socket from "@/plugins/socket.io.js";
import uniqid from "uniqid";
export default{
  layout:'driver',
  data(){
    return{
      infos:{},
      nilais:false
    }
  },
  methods: {
     mails(id,subjek,text){
      // this.mails('145','NOTIFIKASI-JRBTN','KINO NO TABI');
      let fd = new FormData()
      fd.append('data', `select * from tbuser where id='${id}'`)//database setting di server
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          if(res.data[0].email.indexOf('@')!=-1){
            console.log(res.data[0].email);
            let fd = new FormData()
            fd.append('tujuan',res.data[0].email);
            fd.append('subjek',subjek);
            fd.append('text',text);
            axios.post('https://infolayanans.space/send_mail.php', fd).then(res => {
                console.log(res)
                this.$forceUpdate()
            })
          }else{
            console.log('kosong')
          }
      })
    },
    Selesai(){
      if(confirm('Akhiri sesi perjalanan ?')){
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
      }

    },
    scrollTop(){
      window.scrollTo(0, 500)
    },
    star(str){
      console.log(str)
      let fd = new FormData()
      fd.append('data', `insert into driver_star (id_penumpang,id_outsource,nilai,tanggal) VALUES ('${this.$store.state.users.id}','${this.infos.id_driver}','${str}','${this.tanggal}')`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          this.$forceUpdate()
          let fd2 = new FormData()
          fd2.append('data', `update driver_perjalanan set status='4' where id='${this.infos.id}'`)
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
    },
    batal(){
      var txt;
      var r = confirm("Yakin Membatalkan Request ?");
      if (r == true) {
        txt = "Request telah di delete";
        let fd = new FormData()
        fd.append('data', `delete from driver_perjalanan where id='${this.infos.id}'`)
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
      fd.append('data', `SELECT tb1.id_driver as id_driver,tb1.kendaraan,tb1.id_penumpang as id_penumpang,tb1.id,tb1.tujuan,tb1.keperluan,tb1.lokasi,tb1.status,tb1.pilih,tb1.penumpang,tb2.nama,tb2.no_hp,tb1.jam_berangkat,tb3.nama_mobil,tb3.no_plate,tb3.gambar,tb1.ttd FROM driver_perjalanan tb1 left join tbuser tb2 ON tb1.id_driver=tb2.id left join driver_mobil tb3 on tb1.id_mobil=tb3.id where tb1.id_penumpang='${this.$store.state.users.id}' OR tb1.id_driver='${this.$store.state.users.id}' order by tb1.id desc`)
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
      notifikasi(ids,link,text,pilih) {
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
    },
    request(){
      let fd = new FormData()
      fd.append('data', `insert into driver_perjalanan (id_penumpang,tujuan,keperluan,lokasi,penumpang,status,pilih,kendaraan,jam_update,tanggal,jam_berangkat,unit_kerja,unit_head) VALUES ('${this.$store.state.users.id}',
      '${this.$store.state.drivers.request.tujuan}','${this.$store.state.drivers.request.keperluan}','${this.$store.state.drivers.request.lokasi}','${this.$store.state.drivers.request.penumpang}','1','${this.$store.state.drivers.request.pilih}','${this.$store.state.drivers.request.kendaraan}','${this.jam}','${this.tanggal}','${this.$store.state.drivers.request.jam_berangkat}','${this.$store.state.drivers.request.unit_kerja}','${this.$store.state.drivers.request.unit_head}')`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd, {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          console.log(res)
          this.cek()
            let fd2 = new FormData()
            fd2.append('data', `select * from tbuser where id='${this.$store.state.drivers.request.unit_head}'`)
            fd2.append('database', ' infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
            , {
              headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
              if(res.data[0].unit_kerja=='2'){
                // LANGSUNG KE GA
                let fd3 = new FormData()
                fd3.append('data', `select * from tbuser where unit_kerja='2'`)
                fd3.append('database', ' infolay3_test')
                axios.post('https://infolayanans.space/api/mysql/auto.php', fd3
                , {
                    headers: {
                    Authorization: localStorage.getItem('auth._token.local')
                    }
                }).then(res => {
                   console.log(res)
                  res.data.filter(e=>{
                    this.notifikasi(e.id,'/driver/list-request','Permintaan Ijin Keluar '+this.$store.state.drivers.request.penumpang);
                    this.$store.dispatch('notification',{
                    fcm : e.id,
                    isi :'Permintaan Ijin Keluar '+this.$store.state.drivers.request.penumpang
                    })
                    this.mails(e.id,'NOTIFIKASI-JRBTN','Permintaan Ijin Keluar '+this.$store.state.drivers.request.penumpang);
                  })
                  setTimeout(() => {
                    alert('Data sedang diproses mohon tunggu pemberitahuan selanjutnya!')
                    // this.$router.push('/driver/signature?type=driver&id='+this.infos.id)
                    this.$router.push('/driver')
                  }, 2000);
                })
              }else{
                 // LANGSUNG KE UNIT HEAD
                this.notifikasi(this.$store.state.drivers.request.unit_head,'/driver/list-request-head','Permintaan Ijin Keluar oleh '+this.$store.state.drivers.request.penumpang);
                this.$store.dispatch('notification',{
                fcm : this.$store.state.drivers.request.unit_head,
                isi :'Permintaan Ijin Keluar oleh '+this.$store.state.drivers.request.penumpang
                })
                this.mails(this.$store.state.drivers.request.unit_head,'NOTIFIKASI-JRBTN','Permintaan Ijin Keluar oleh '+this.$store.state.drivers.request.penumpang);
                alert('Permintaan sedang di proses mohon ditunggu!')
                this.$router.push('/driver')
              }
               
            })
           
          //? GA
         
          // ? GA
          // #NOTIFIKASI
          this.$forceUpdate()
      })
    }
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
      this.request();
      }
    console.log(this.$store.state.drivers)
  },
}
</script>