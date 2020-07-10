<template>
    <div>
        NOTIFIKASI REGISTRASI ID WEB DI MAIN.JS 
        <br>
        REGISTRASI ID ANDROID / IOS DI MOUNTED 
        {{regis}}
    </div>
</template>
<script>
import axios from 'axios'
export default{
  data(){
    return{
      regis:""
    }
  },
  mounted() {
    let that = this
     document.addEventListener('deviceready', that.onDeviceReady, false);
  },
  methods: {
      kirim(){
      let data = {
        //   to : tokenid atau registrationId
        to:"fvHMcPD4GLN7dUAGMx6tpX:APA91bET-U5TXtE5_E72rm14BrdMmPvaHm3szoOQC1huRSq6Xzm58P0jT7OapYKgivNLQkXRM20RQEnStWSiuujZEdSOaGpJYC-QcdjBT8O6mP7Mf_SAj_PTr-17nyk2TPaOjNISepHV",
        notification: {
          title:"KINO NO TABI",
          body:"TEST",
          param1:"test",
          param2:"ok",
          priority:10,
          "sound":"default",
        }
      }
      data=JSON.stringify(data)
      axios.post('https://fcm.googleapis.com/fcm/send', data
      , {
          headers: {
            //   Server Key di project settings firebase
          Authorization: 'key=AAAAUBoNxhU:APA91bGmp6193yTOWq0XcUu4adMjbF4XVk2uqDy8V-1y7pT26S_Q1kVkYTSyLBsgU-B4lUyYDMykMKtuiQWlVeYIEr713d5Ty0GphyUxcGlMb1D1uKsOPZ4LujfYzke2qdnZOBYEMzdm',
          "Content-Type":"application/json"
          }
      }).then(res => {
          console.log(res)
          this.$forceUpdate()
      })
    },
    onDeviceReady() {
          let that = this
          var push = PushNotification.init({
              android: {
                senderID:"344034493973" // setting project firebase
              }
          });
          push.on('registration', function(data) {
            // ! AMBIL data registrationId untuk ditaruh sebagai payload to : ""
            // ! simpan data regitrationId kedatabase
            that.regis = data.registrationId
            // Simpan data.registrationId KE DATABASE DENGAN GANDENGAN ID USER untuk di tembak dengan payload {to : ""} firebase
          });
          push.on('error', function(e) {
              console.log(e.message)
          });
        }
  },
}
</script>