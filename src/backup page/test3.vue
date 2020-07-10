<template>
  <div>
    <img src="https://wallpaperaccess.com/full/2382821.png" class="kinoLightBox img-fluid " style="border-radius: 20px">
    <apexchart  type="bar" :options="options" :series="series"></apexchart>
    <div class="sm-form ">
        <label for="id">Your id</label>
        <input type="text" id="id" name="id" class="form-control form-control-sm" placeholder="id" v-model="vdata.id" >
    </div>
    <button type="button" @click="test" class="btn btn-sm btn-primary  ">test</button>  
    <button type="button" @click="sockets" class="btn btn-sm btn-primary  ">socket</button>  
  </div>
</template>
<script>
import axios from 'axios'
import socket from "@/plugins/socket.io.js";
import uniqid from "uniqid";
export default {
  data(){
    return{
      vdata:{
        id:146
      },
       options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        },
 
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
    }
  },
  methods: {
    sockets(){
      let message = {
                    id: uniqid(),
                    target_id: 'uniqid',
                    app: 'driver',
                    text:'text',
                    link:'link',
                    dibaca: 'false'
                };
                socket.emit("send-message", message);
    },
    test(){
      this.notifikasi(this.vdata.id,'/driver/lembur/list-lembur','Permintaan Lembur telah di approve!');
      // this.mails(146,'NOTIFIKASI-JRBTN','Permintaan Lembur telah di approve!');
      this.$store.dispatch('notification',{
      fcm : this.vdata.id,
      isi :'TEST KINO NO TABI'
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
        }).catch(err=>{
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
    },mails(id,subjek,text){
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
  },
}
</script>