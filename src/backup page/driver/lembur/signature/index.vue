<template>
    <div>
    <div class="bg-white" style="height:100vh;">
        <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                  <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.push('/driver')"></span>
            <div class="p-3 text-center text-white font-times">
                    <p>APPROVE UNIT HEAD</p>
            </div>
        </div>
    <div class="bg-white p-2 mt-2  shadow-inner" style="margin-top:-50px;" >
        <br>
        <div class="row">
            <div class="col-12 ">
                <p class="text-center font-bold">DATA PERMINTAAN LEMBUR</p>
                <hr class="style13">
                <div class="p-3">
                <tr>
                    <td class="text-capitalize font-times">Nama</td>
                    <td class="text-capitalize font-times">&nbsp;:&nbsp;</td>
                    <td class="text-capitalize font-times">{{datanya.nama}}</td>
                </tr>
                <tr>
                    <td class="text-capitalize font-times">NIP</td>
                    <td class="text-capitalize font-times">&nbsp;:&nbsp;</td>
                    <td class="text-capitalize font-times">{{datanya.nip}}</td>
                </tr>
                <tr>
                    <td class="text-capitalize font-times">Unit Kerj</td>
                    <td class="text-capitalize font-times">&nbsp;:&nbsp;</td>
                    <td class="text-capitalize font-times">{{datanya.posisi}}</td>
                </tr>
                <tr>
                    <td class="text-capitalize font-times">Jenis Pekerjaan</td>
                    <td class="text-capitalize font-times">&nbsp;:&nbsp;</td>
                    <td class="text-capitalize font-times">{{datanya.jenis_pekerjaan}}</td>
                </tr>
                
                <tr>
                    <td class="text-capitalize font-times">Rincian Tugas</td>
                    <td class="text-capitalize font-times">&nbsp;:&nbsp;</td>
                    <td class="text-capitalize font-times">{{datanya.rincian_kerja}}</td>
                </tr>
                <!-- <tr>
                    <td class="text-capitalize font-times">Mulai Waktu Lembur</td>
                    <td class="text-capitalize font-times">&nbsp;:&nbsp;</td>
                    <td class="text-capitalize font-times">{{datanya.jam_lembur}}</td>
                </tr> -->
                <tr>
                    <td class="text-capitalize font-times">Jam lama lembur</td>
                    <td class="text-capitalize font-times">&nbsp;:&nbsp;</td>
                    <td class="text-capitalize font-times">{{datanya.jam_lama}}</td>
                </tr>
                   <tr>
                    <td class="text-capitalize font-times">Tanggal</td>
                    <td class="text-capitalize font-times">&nbsp;:&nbsp;</td>
                    <td class="text-capitalize font-times">{{datanya.tanggal}}</td>
                </tr>
                </div>
                <form action="" >
                     <div class="md-form">
                        <label for="disposisi" class="font-bold">Disposisi</label>
                        <textarea type="text" id="disposisi" name="disposisi" rows="2"  class="form-control md-textarea" v-model="vdata.disposisi"></textarea>
                    </div>
                    <div v-if="datanya.id<100">
                        <p class="p-1 font-bold" >Tujuan</p>
                        <select class='form-control' v-model="selected">
                        <option  v-for="(item, index) in heads" :key="index+'head'" class="text-uppercase" :value="item.id">{{item.nama}}, {{item.posisi}}</option>
                        </select>
                    </div>
                </form>
                <br>
                <br>
                <button type="button" @click="batal" class="btn btn-sm btn-danger  "> <span class="typcn typcn-cancel"></span> BATAL</button>
                <button type="button" @click="approve" class="btn btn-sm btn-success float-right "> <span class="typcn typcn-arrow-right"></span> APPROVE</button>
            </div>
            
        </div>
    </div>        
    </div>        
    </div>
</template>
<script>
import axios from 'axios'
var id = require("date-fns/locale/id");
import socket from "@/plugins/socket.io.js";
import uniqid from "uniqid";
export default {
  layout:'driver',
  data(){
      return{
          datanya:{},
          vdata:{},
          heads:[],
          selected:""
      }
  },
  methods: {
      inputs(){
          alert('input')
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
      approve(){
          if(this.datanya.id>100){
             let fd2 = new FormData()
                fd2.append('data', `update driver_lembur set status='3',disposisi1='${this.vdata.disposisi}' where id='${this.$route.query.id}'`)
                fd2.append('database', ' infolay3_test')
                axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
                , {
                    headers: {
                    Authorization: localStorage.getItem('auth._token.local')
                    }
                }).then(res => {
                    alert('Disposisi unit head berhasil')
                    this.notifikasi(this.datanya.id_user,`/driver/lembur/list-lembur`,'Permintaan approve lemburan sudah di setujui ');
                    this.$store.dispatch('notification',{
                          fcm : this.datanya.id_user,
                          isi :'Permintaan approve lemburan sudah di setujui '
                        })
                    this.mails(this.datanya.id_user,`NOTIFIKASI-JRBTN`,'Permintaan approve lemburan sudah di setujui ');
                    this.$forceUpdate()
                    this.$router.push('/driver')
                }).catch(err=>{
                    alert('Disposisi unit head gagal')
                })
          }else{
            if(this.selected.length>0){
                let fd = new FormData()
                fd.append('data', `update driver_lembur set status='2',disposisi1='${this.vdata.disposisi}' where id='${this.$route.query.id}'`)
                fd.append('database', ' infolay3_test')
                axios.post('https://infolayanans.space/api/mysql/auto.php', fd
                , {
                    headers: {
                    Authorization: localStorage.getItem('auth._token.local')
                    }
                }).then(res => {
                    alert('Disposisi unit head berhasil')
                    this.notifikasi(this.selected,`/driver/lembur/signature/head?id=${this.$route.query.id}`,'Permintaan approve lemburan '+this.datanya.nama);
                    this.$store.dispatch('notification',{
                    fcm : this.selected,
                    isi :'Permintaan approve lemburan '+this.datanya.nama
                    })
                    this.mails(this.selected,`NOTIFIKASI-JRBTN`,'Permintaan approve lemburan '+this.datanya.nama);
                    this.$forceUpdate()
                    this.$router.push('/driver')
                    this.$forceUpdate()
                }).catch(err=>{
                    alert('Disposisi unit head gagal')
                })
            }else{
                alert('Tujuan Harus diisi !')
            }
          }
         
      },
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
      batal(){
          let fd = new FormData()
          fd.append('data', `update driver_lembur set status='5' where id='${this.$route.query.id}'`)
          fd.append('database', ' infolay3_test')
          axios.post('https://infolayanans.space/api/mysql/auto.php', fd
          , {
              headers: {
              Authorization: localStorage.getItem('auth._token.local')
              }
          }).then(res => {
              alert('Request dibatalkan')
              this.$router.push('/driver')
              console.log(res)
              this.$forceUpdate()
          })
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
  },
  mounted() {
      let fd = new FormData()
      fd.append('data', `select * from driver_lembur tb1 left join tbuser tb2 on tb2.id=tb1.id_user left join driver_unit tb3 on tb3.nama_unit=tb2.posisi where tb1.id='${this.$route.query.id}'`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          console.log(res)
          if(res.data.length>0){

          }else{
              alert('Permintaan telah di hapus!')
              this.$router.push('/driver')
          }
          this.datanya = res.data[0]
          this.vdata.disposisi=res.data[0].disposisi1
          this.$forceUpdate()
      })
      let fd2 = new FormData()
      fd2.append('data', `select * from tbuser where unit_kerja_head='heads'`)
      fd2.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          this.heads = res.data
          console.log(res)
          this.$forceUpdate()
      })
  },
};
</script>