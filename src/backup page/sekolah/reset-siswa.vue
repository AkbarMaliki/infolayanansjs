<template>
    <div class="px-4 py-4">
        <p class="text-center">Change Password</p>
        <div class="sm-form ">
            <label for="username">Your username</label>
            <input type="text" id="username" name="username" class="form-control form-control-sm" placeholder="username" v-model="vdata.username" >
        </div>
        <div class="sm-form ">
            <label for="password">Your password</label>
            <input type="password" id="password" name="password" class="form-control form-control-sm" placeholder="password" v-model="vdata.password" >
        </div>
        <div class="sm-form ">
            <label for="password">Your password</label>
            <input type="password" id="password" name="password" class="form-control form-control-sm" placeholder="password" v-model="vdata.password2" >
        </div>
        <br>
        <p v-show="vdata.password!=vdata.password2" class="font-bold text-uppercase text-red">Password Tidak sama!</p>
        <br>
        <button type="button" @click="simpans" class="btn btn-sm btn-primary  ">Simpan</button>
    </div>
</template>
<script>
import md5 from 'md5'
import axios from 'axios'
export default {
    mounted() {
        console.log(this.$route.query.id_siswa)
    },
    data(){
        return{
            vdata:{

            }
        }
    },
    layout:"guru",
    methods: {
        simpans(){
            let fd = new FormData()
            fd.append('data', `UPDATE sekolah_data_siswa set username='${this.vdata.username}',password='${md5(this.vdata.password)}' where id_siswa='${this.$route.query.id_siswa}'`)//database setting di server
            fd.append('database','infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                console.log(res)
                alert('Ubah Password berhasil silahkan login ulang!')
                this.$router.push('/sekolah/guru/list-siswa')
                this.$forceUpdate()
            })
        }
    },
}
</script>