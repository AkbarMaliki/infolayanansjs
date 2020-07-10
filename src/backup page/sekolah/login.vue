<template>
    <div>
        <div style="height:100vh;background: rgb(188,192,212);
        background: linear-gradient(0deg, rgba(188,192,212,1) 3%, rgba(32,89,162,0.5410539215686274) 36%, rgba(0,37,126,0.8603816526610644) 93%);">
        <br>
            <div class="container  bg-white rounded-lg shadow-lg" style="height:90vh;">
                <div class="row">
                    <div class="col-sm-3 font-times">
                        <div class="text-center">
                            <br>
                            <br>
                            <br>
                         <img
                            src="@/static/logo/sd.png"
                            class="img-fluid z-depth-1 animated fadeIn text-center"
                            style="width:60px; margin-left: auto;margin-right: auto;display: block;"
                        />
                        </div>
                        <p class="pt-3 text-center">PILIH LOGIN</p>
                                <br>
                                <hr class="style5">
                                <br>
                        <div class="row">
                            <div class="col-sm-6 text-center"><button type="button" @click="loginType='guru'" class="btn btn-sm btn-outline-secondary  btn-block">GURU</button> </div>
                            <div class="col-sm-6 text-center"><button type="button" @click="loginType='siswa'" class="btn btn-sm btn-outline-secondary  btn-block">SISWA</button> </div>
                            <div class="col-sm-12 font-times text-center">
                                <br>
                                <br>
                                <p class="text-sm">Pilih login untuk dapat mengakses halaman sesuai pengguna !</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-9 bg-white">
                        <br>
                        <p class="text-center font-times" v-if="loginType=='guru'">LOGIN GURU</p>
                        <p class="text-center font-times" v-else>LOGIN SISWA</p>
                        <br>
                        <hr class="style16">
                        <br>
                        <div class="row">
                            <div class="col-3"></div>
                            <div class="col-5">
                                    <br>
                                  <form action="" @submit.prevent="login" class="font-times">
                                    <div class="sm-form ">
                                        <label for="username">Username :</label>
                                        <input type="text" id="username" name="username" class="form-control form-control-sm shadow-lg" placeholder="username" v-model="vdata.username" >
                                    </div>
                                    <br>
                                    <div class="sm-form ">
                                        <label for="password">Password : </label>
                                        <input type="password" id="password" name="password" class="form-control form-control-sm shadow-lg" placeholder="password" v-model="vdata.password" >
                                    </div>
                                    <br>
                                    <br>
                                    <hr class="style2">
                                    <br>
                                    <div class="text-center">
                                        <button type="submit"  v-if="loginType=='guru'" class="btn btn-sm btn-primary font-times "><span class="typcn typcn-user"></span> Login Guru</button>
                                        <button type="submit"  v-else class="btn btn-sm btn-primary font-times "><span class="typcn typcn-user"></span> Login Siswa</button>
                                    </div>
                                    </form>
                                    <br>
                            </div>
                            <div class="col-4"></div>
                        </div>
                      <p class="text-center font-times text-sm">Copyright SMA Negeri 1 Tambang Ulang</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import md5 from 'md5'
import axios from 'axios'
export default {
    data(){
        return{
            loginType:"guru",
            vdata:{}
        }
    },
    methods: {
         login () {
            if(this.loginType=='guru'){
                 let fd = new FormData()
            fd.append('username', this.vdata.username)
            fd.append('password', md5(this.vdata.password))
            fd.append('database', 'infolay3_test')
            axios
                .post('https://infolayanans.space/api/mysql/sekolah/login_guru.php', fd)
                .then(res => {
                // alert('sukses')
                console.log(res)
                localStorage.setItem('auth._token.local', res.data.token)
                localStorage.setItem('auth.local', res.data.token)
                let fd2 = new FormData()
                fd2.append('data', 'select * from tbuser')
                axios
                   .post('https://infolayanans.space' + '/api/mysql/getUser.php', fd2, {
                    headers: {
                        Authorization: localStorage.getItem('auth._token.local')
                    }
                    })
                    .then(res => {
                    console.log(res)
                    this.$store.commit('changeUsers', res.data[0])
                    localStorage.setItem('users', JSON.stringify(res.data[0]))
                    this.$router.push('/sekolah/guru')
                    })
                })
                .catch(err => {
                alert('username salah')
                })
            }else{
                 let fd = new FormData()
                fd.append('username', this.vdata.username)
                fd.append('password', md5(this.vdata.password))
                   fd.append('database', 'infolay3_test')
                axios
                .post('https://infolayanans.space/api/mysql/sekolah/login_siswa.php', fd)
                .then(res => {
                // alert('sukses')
                console.log(res)
                localStorage.setItem('auth._token.local', res.data.token)
                localStorage.setItem('auth.local', res.data.token)
                let fd2 = new FormData()
                fd2.append('data', 'select * from tbuser')
                axios
                    .post('https://infolayanans.space' + '/api/mysql/getUser.php', fd2, {
                    headers: {
                        Authorization: localStorage.getItem('auth._token.local')
                    }
                    })
                    .then(res => {
                    console.log(res)
                    this.$store.commit('changeUsers', res.data[0])
                    localStorage.setItem('users', JSON.stringify(res.data[0]))
                    this.$router.push('/sekolah/siswa')
                    })
                })
                .catch(err => {
                alert('username salah')
                })
            }
        }
    },
    mounted() {
        
    },
}
</script>