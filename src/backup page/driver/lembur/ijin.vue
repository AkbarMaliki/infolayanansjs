<template>
    <div>
         <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                 <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.go(-1)"></span>
            <div class="p-3 text-center text-white font-times">
                    <p>FORM LEMBUR</p>
            </div>
            <br>
            <br>
        </div>
        <div class="bg-white ml-2 mr-2 p-2 rounded-lg shadow-lg" style="margin-top:-50px;"> 
            <div class="text-center">
               <img src="@/static/gif/latemin.gif" class="kinoLightBox img-fluid rounded-lg shadow-lg" style="height:200px;">
            </div>
           <hr class="style13" style="">
            <form action="#" @submit.prevent="request">
                <div class="sm-form ">
                    <label for="pegawai" class="pl-2 font-bold">Nama </label>
                    <input type="text" id="pegawai" name="pegawai" class="form-control form-control-sm" placeholder="pegawai" required v-model="vdata.nama" >
                </div>
                <br>
                 <div class="sm-form ">
                    <label for="nip" class="pl-2 font-bold">NIP </label>
                    <input type="text" id="nip" name="nip" class="form-control form-control-sm" placeholder="nip" required v-model="vdata.nip" >
                </div>
                <br>
                   <div class="sm-form ">
                    <label for="unit_kerja" class="pl-2 font-bold">Unit Kerja </label>
                    <input type="text" id="unit_kerja" name="unit_kerja" class="form-control form-control-sm" required placeholder="unit_kerja" v-model="vdata.unit_kerja" >
                </div>
                <br>
                <div class="sm-form">
                <p class="p-1 font-bold">Jenis Pekerjaan yang perlu dilemburkan</p>
                <textarea
                type="text"
                id="jenis_pekerjaan"
                name="jenis_pekerjaan"
                rows="2"
                placeholder="jenis_pekerjaan..."
                class="form-control md-textarea"
                v-model="vdata.jenis_pekerjaan" required
                >{{vdata.jenis_pekerjaan}}</textarea>
                </div>
                <br>
                <div class="sm-form">
                <p class="p-1 font-bold">Rincian Tugas Kerja Lembur</p>
                <textarea
                type="text"
                id="rincian_kerja"
                name="rincian_kerja"
                rows="2"
                placeholder="rincian_kerja..."
                class="form-control md-textarea"
                v-model="vdata.rincian_kerja" required
                >{{vdata.rincian_kerja}}</textarea>
                </div>
                <br>
                <div class="sm-form ">
                    <label for="tanggal" class="pl-2">Tanggal Lembur (Min H-1)</label>
                    <input type="date" id="tanggal_lembur" name="tanggal" class="form-control form-control-sm" placeholder="tanggal" required v-model="vdata.tanggal_lembur" >
                </div>
                <div class="sm-form d-none">
                    <label for="jam" class="pl-2">Mulai Waktu Lembur</label>
                    <input type="time" id="tujuan" name="jam" class="form-control form-control-sm" placeholder="Jam" required v-model="vdata.jam_lembur" >
                </div>
                <br>
                 <div class="sm-form ">
                    <label for="jam_lama" class="pl-2">Lama lembur/JAM</label>
                    <input type="number" id="tujuan" name="jam_lama" class="form-control form-control-sm" required placeholder="1,2,3..." v-model="vdata.jam_lama" >
                </div>
                <br>
                  <div class="sm-form ">
                    <label class="pl-2">Unit Head</label>
                    <select class='form-control' v-model="unit_head" required>
                    <option v-for="(item, index) in unit_heads" :key="index+'unit_heads'" :value="item.id" v-show="item.id!=1">{{item.nama}}, {{item.posisi}}</option>
                    </select>
                </div>
                <br>
                <div class="text-center">
                    <button class="btn btn-lg btn-outline-primary" type='submit'><span class="typcn typcn-news"></span> Request</button>
                </div>
            </form>
            <br>
        </div>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>   <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>   <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>

    </div>
</template>
<script>
import axios from 'axios'
var id = require("date-fns/locale/id");
import socket from "@/plugins/socket.io.js";
import uniqid from "uniqid";
export default{
    data(){
        return{
            vdata:{
              jam_lama:1
            },
            pegawai:1,
            nip:1,
            head:"",
            pegawais:[],
            nips:[],
            unit_head:0,
            unit_heads:[]
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
        format() {
          return this.$datefns.format(
            new Date(),
            "HH:mm",
            {
              locale: id
            }
          );
        },
         today() {
          return this.$datefns.format(
            new Date(),
            "dddd [Tanggal] DD MMMM YYYY",
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
       hariini(date) {
          return this.$datefns.format(
            date,
            "dddd [Tanggal] DD MMMM YYYY",
            {
              locale: id
            }
          );
        },
         insert(){ 
           if(this.head=='heads'){
             console.log('head ke heads')
              let tanggal = this.hariini(this.vdata.tanggal_lembur)
              let fd = new FormData();
              fd.append("data", `Insert into driver_lembur (id_user,jenis_pekerjaan,rincian_kerja,jam_lembur,jam_lama,tanggal,status, head) VALUES ('${this.$store.state.users.id}','${this.vdata.jenis_pekerjaan}','${this.vdata.rincian_kerja}','${this.vdata.jam_lembur}','${this.vdata.jam_lama}','${tanggal}','2','${this.unit_head}')`);
              fd.append("database", " infolay3_test");
              axios
                  .post("https://infolayanans.space"+"/api/mysql/auto.php", fd, {
                  headers: {
                      Authorization: localStorage.getItem("auth._token.local")
                  }
                  })
                  .then(res => {
                    alert('berhasil')
                    let fd = new FormData()
                    fd.append('data', `select * from driver_lembur order by id desc`)
                    fd.append('database', ' infolay3_test')
                    axios.post('https://infolayanans.space/api/mysql/auto.php', fd
                    , {
                        headers: {
                        Authorization: localStorage.getItem('auth._token.local')
                        }
                    }).then(res => {
                        this.$forceUpdate()
                        // this.notifikasi(this.unit_head,`/driver/lembur/signature?id=${res.data[0].id}`,'Permintaan Lembur '+this.$store.state.users.nama);
                        this.notifikasi(this.unit_head,`/driver/lembur/signature/head?id=${res.data[0].id}`,'Permintaan approve lemburan '+this.$store.state.users.nama);
                        this.$store.dispatch('notification',{
                          fcm : this.unit_head,
                          isi : 'Permintaan approve lemburan '+this.$store.state.users.nama
                        })
                        this.mails(this.unit_head,`NOTIFIKASI-JRBTN`,'Permintaan approve lemburan '+this.$store.state.users.nama);
                        this.$router.push('/driver/lembur/req-lembur?klik=1')
                    })
                  })
           }else{
             console.log('bawah ke head')
             let tanggal = this.hariini(this.vdata.tanggal_lembur)
              let fd = new FormData();
              fd.append("data", `Insert into driver_lembur (id_user,jenis_pekerjaan,rincian_kerja,jam_lembur,jam_lama,tanggal,status, unit_head) VALUES ('${this.$store.state.users.id}','${this.vdata.jenis_pekerjaan}','${this.vdata.rincian_kerja}','${this.vdata.jam_lembur}','${this.vdata.jam_lama}','${tanggal}','1','${this.unit_head}')`);
              fd.append("database", " infolay3_test");
              axios
                  .post("https://infolayanans.space"+"/api/mysql/auto.php", fd, {
                  headers: {
                      Authorization: localStorage.getItem("auth._token.local")
                  }
                  })
                  .then(res => {
                    let fd = new FormData()
                    fd.append('data', `select * from driver_lembur order by id desc`)
                    fd.append('database', ' infolay3_test')
                    axios.post('https://infolayanans.space/api/mysql/auto.php', fd
                    , {
                        headers: {
                        Authorization: localStorage.getItem('auth._token.local')
                        }
                    }).then(res => {
                        this.$forceUpdate()
                        this.notifikasi(this.unit_head,`/driver/lembur/signature?id=${res.data[0].id}`,'Permintaan Lembur '+this.$store.state.users.nama);
                         this.$store.dispatch('notification',{
                          fcm : this.unit_head,
                          isi : 'Permintaan Lembur '+this.$store.state.users.nama
                        })
                        this.mails(this.unit_head,`NOTIFIKASI-JRBTN`,'Permintaan Lembur '+this.$store.state.users.nama);
                        this.$router.push('/driver/lembur/req-lembur?klik=1')
                    })
                  })

           }
        },
          notifikasi(ids,link,text) {
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
            })
        },
       request(){
           if(confirm('Apakah data sudah benar ?')){
               this.insert();
           }
        }
    },
    mounted() {
      var today = new Date();
      var dd = today.getDate()+1;
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
      if(dd<10){
              dd='0'+dd
          } 
          if(mm<10){
              mm='0'+mm
          } 
      today = yyyy+'-'+mm+'-'+dd;
      this.$el.querySelector('#tanggal_lembur').setAttribute("max", today);
      // this.$el.querySelector('#tanggal_lembur').max = new Date().toISOString().split("T")[0];
        this.vdata.nama = this.$store.state.users.nama ? this.$store.state.users.nama : ''
        this.vdata.nip = this.$store.state.users.nip ? this.$store.state.users.nip : ''
        this.vdata.unit_kerja = this.$store.state.users.posisi ? this.$store.state.users.posisi : ''
        this.vdata.jam_lembur = this.format
        this.vdata.tanggal = this.today
        this.vdata.pilih = this.$route.query.pilih
        this.$forceUpdate()
        let fd = new FormData()
        fd.append('data', `select * from driver_lembur where id_user='${this.$store.state.users.id}'`)
        fd.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            console.log(res)
            res.data.forEach(data=>{
              if(data.status=='1' || data.status=='2'){
                this.$router.push('/driver/lembur/req-lembur')
              }
            })
            this.$forceUpdate()
        })
        if(this.$store.state.users.unit_kerja_head=='head'){
          this.head='heads'
        }else{
          this.head='head'
        }
        let fd2 = new FormData()
        fd2.append('data', `select * from tbuser where unit_kerja_head='${this.head}'`)
        fd2.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
          this.unit_heads=res.data
            this.$forceUpdate()
        })
    },
    layout:'driver'
}
</script>