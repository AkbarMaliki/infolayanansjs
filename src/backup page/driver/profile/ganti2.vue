<template>
    <div>
        <div class="bg-white" style="height:100vh;">
            <div class="rounded-br-lg"
            style="background: rgb(21,29,115);
                    background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                <div class="p-3 text-center text-white font-times">
                        <p>EDIT DATA</p>
                </div>
            </div>
            <div class="bg-white p-2 mt-2  shadow-inner" style="margin-top:-50px;" >
                <p class="font-tims">Silahkan ganti password anda!</p>
                <form action="" @submit.prevent="ganti">
                    <div class="sm-form ">
                        <label for="nama">Nama : </label>
                        <input type="text" id="nama" name="nama" class="form-control form-control-sm" placeholder="nama" v-model="vdata.nama" >
                    </div>
                    <p class="text-red font-bold" v-show="vdata.password!=vdata.password2">Password tidak sama</p>
                     <div class="sm-form ">
                        <label for="nip">NIP : </label>
                        <input type="text" id="nip" name="nip" class="form-control form-control-sm" placeholder="nip" v-model="vdata.nip" >
                    </div>
                     <div class="sm-form ">
                        <label for="no_hp">EMail : </label>
                        <input type="text" id="no_hp" name="no_hp" class="form-control form-control-sm" placeholder="no hp" v-model="vdata.email" >
                    </div>
                    <br>
                    <div class="text-right">
                        <button type="submit" class="btn btn-sm btn-outline-primary ">Lanjutkan</button>
                    </div>
                </form>
            </div>        
        </div>        
    </div>
</template>
<script>
import axios from 'axios'
import md5 from 'md5'
export default {
  data(){
      return{
          vdata:{},
          datanya:{}
      }
  },
  methods: {
      ganti(){
          if(confirm('Apakah data sudah sesuai dimasukkan ?')){
              let fd = new FormData()
              fd.append('data', `update tbuser set nama='${this.vdata.nama}',ganti='1', nip='${this.vdata.nip}',email='${this.vdata.email}' where id='${this.$store.state.users.id}'`)
              fd.append('database', ' infolay3_test')
              axios.post('https://infolayanans.space/api/mysql/auto.php', fd
              , {
                  headers: {
                  Authorization: localStorage.getItem('auth._token.local')
                  }
              }).then(res => {
                  this.$router.push('/driver/profile/signature2')
                  console.log(res)
                  this.$forceUpdate()
              })
          }else{
          }
      }
  },
  mounted() {
      let fd = new FormData()
      fd.append('data', `select * from tbuser where id='${this.$store.state.users.id}'`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          console.log(res)
          this.datanya=res.data[0]
          this.vdata.nama=res.data[0].nama
          this.vdata.nip=res.data[0].nip
          this.vdata.email=res.data[0].email
          this.$forceUpdate()
      })
  }
};
</script>