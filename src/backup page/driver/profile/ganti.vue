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
                        <label for="password">Password : </label>
                        <input type="password" id="password" name="password" class="form-control form-control-sm" placeholder="password" v-model="vdata.password" >
                    </div>
                    <p class="text-red font-bold" v-show="vdata.password!=vdata.password2">Password tidak sama</p>
                     <div class="sm-form ">
                        <label for="password2">Re-Password : </label>
                        <input type="password" id="password2" name="password2" class="form-control form-control-sm" placeholder="re password" v-model="vdata.password2" >
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
          vdata:{}
      }
  },
  methods: {
      ganti(){
          if(confirm('apakah password sudah sesuai ?')){
              
          if(this.vdata.password!=this.vdata.password2){
              alert('Password tidak sama ulangi!')
          }else{
            let fd = new FormData()
            fd.append('data', `update tbuser set password='${md5(this.vdata.password)}' where id='${this.$store.state.users.id}'`)
            fd.append('database', ' infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                this.$router.push('/driver/profile/ganti2')
                console.log(res)
                this.$forceUpdate()
            })
          }
          }
      }
  },
  mounted() {
  }
};
</script>