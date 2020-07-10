<template>
    <div class="px-4 py-4">
        <p class="text-center font-times font-bold">RESET PASSWORD</p>        
        <hr class="style16">
        <br>
        <form action="" @submit.prevent="resets">
           
            <div class="sm-form ">
                <label for="password">Your password</label>
                <input type="password" id="password" name="password" class="form-control form-control-sm" placeholder="password" v-model="vdata.password" >
            </div>
            <div class="sm-form ">
                <label for="password">Your password</label>
                <input type="password" id="password" name="password" class="form-control form-control-sm" placeholder="password" v-model="vdata.password2" >
            </div>
            <p v-show="vdata.password!=vdata.password2" class="text-red font-bold">Password Tidak Sama!</p>
            <div class="text-center">
            <button type="submit"  class="btn btn-sm btn-primary  "><span class="typcn typcn-edit"></span> Reset</button>
            </div>
        </form>
    </div>
</template>
<script>
import md5 from 'md5'
import axios from 'axios'
export default {
    data(){
        return{
            vdata:{}
        }
    },
    methods: {
        resets(){
            if(this.vdata.password!=this.vdata.password2){
                alert('Password tidak sama')
            }else{
                let fd = new FormData()
                fd.append('data', `update sdd_tbuser set password='${md5(this.vdata.password)}', reset='1' where id='${this.$store.state.users.id}'`)//database setting di server
                fd.append('database','infolay3_test')
                axios.post('https://infolayanans.space/api/mysql/auto.php', fd
                , {
                    headers: {
                    Authorization: localStorage.getItem('auth._token.local')
                    }
                }).then(res => {
                    console.log(res)
                    alert('Update berhasil')
                    this.$store.dispatch('logout')
                    this.$forceUpdate()
                })
            }
        }
    },
}
</script>