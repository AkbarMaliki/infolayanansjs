<template>
    <div>
        <div class="text-center"></div>
        <div class="container-fluid">
            <div class="row">
              <div class="offset-sm-2 shadow-lg rounded-lg col-sm-8">
                  <div class="row">
                      <div class="col-4 p-4">
                          <div v-if="$store.state.users.gambar.length>10">
                              <img :src="`https://infolayanans.space/${this.$store.state.users.gambar}`" class="kinoLightBox img-fluid rounded-top z-depth-2 shadow-lg" style="border-radius: 20px;height:240px;width::150px;" alt="top">
                          </div>
                          <div v-else>
                              <img src="https://bodybigsize.com/wp-content/uploads/2020/02/noimage-8.png" class="kinoLightBox img-fluid rounded-top z-depth-2 shadow-lg" style="border-radius: 20px;height:240px;width::150px;" alt="top">
                          </div>
                      </div>
                      <div class="col-8 p-3">
                          <p class="py-2 font-times text-center font-bold text-uppercase">Profile</p>
                           <tr>
                               <td class="text-uppercase font-times text-sm">Nama Guru</td>
                               <td class="text-uppercase font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-uppercase font-times text-sm">{{$store.state.users.nama_guru}}</td>
                           </tr>
                             <tr>
                               <td class="text-uppercase font-times text-sm">NIP</td>
                               <td class="text-uppercase font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-uppercase font-times text-sm">{{$store.state.users.nip}}</td>
                           </tr>
                             <tr>
                               <td class="text-uppercase font-times text-sm">Kelamin</td>
                               <td class="text-uppercase font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-uppercase font-times text-sm">{{$store.state.users.kelamin}}</td>
                           </tr>
                             <tr>
                               <td class="text-uppercase font-times text-sm">Alamat Guru</td>
                               <td class="text-uppercase font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-uppercase font-times text-sm">{{$store.state.users.alamat_guru}}</td>
                           </tr>
                             <tr>
                               <td class="text-uppercase font-times text-sm">Pendidikan</td>
                               <td class="text-uppercase font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-uppercase font-times text-sm">{{$store.state.users.pendidikan}}</td>
                           </tr>
                             <tr>
                               <td class="text-uppercase font-times text-sm">Golongan</td>
                               <td class="text-uppercase font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-uppercase font-times text-sm">{{$store.state.users.golongan}}</td>
                           </tr>
                             <tr>
                               <td class="text-uppercase font-times text-sm">Jabatan</td>
                               <td class="text-uppercase font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-uppercase font-times text-sm">{{$store.state.users.jabatan}}</td>
                           </tr>
                      </div>
                  </div>
              </div>
                <div class="col-sm-12">
                    <br>
                </div>
                <!--  -->
                <div @click="$router.push('/sekolah/guru/list-guru')" class="col-sm-4  px-2 ">
                    <div class="shadow-lg rounded-lg font-bold  cursor-pointer hover:bg-blue py-4 anim " 
                    style="">
                        <p class="text-center text-2xl"><span class="typcn typcn-group text-4xl"></span> GURU</p> 
                        <p class="text-center text-2xl text-grey">{{gurus}}</p>
                    </div>
                </div>
                 <div  @click="$router.push('/sekolah/guru/list-siswa')" class="col-sm-4  px-2 ">
                    <div class="shadow-lg rounded-lg font-bold  cursor-pointer hover:bg-blue py-4 anim" 
                    style="">
                        <p class="text-center text-2xl"><span class="typcn typcn-database text-4xl"></span> SISWA</p>
                        <p class="text-center text-2xl text-grey">{{siswas}}</p>
                    </div>
                </div>
                   <div  @click="$router.push('/sekolah/guru/list-pelajaran')" class="col-sm-4  px-2 ">
                    <div class="shadow-lg rounded-lg font-bold  cursor-pointer hover:bg-blue py-4 anim" 
                    style="">
                        <p class="text-center text-2xl"><span class="typcn typcn-contacts text-4xl"></span> PELAJARAN</p>
                        <p class="text-center text-2xl text-grey">{{pelajarans}}</p>
                    </div>
                </div>
            <div class="col-sm-12">
                <hr class="style13">
                <br>
                <br>
                  <div @click="$router.push('/sekolah/guru/list-siswa')" class="offset-sm-4 col-sm-4  shadow-lg rounded-lg text-center font-bold font-times cursor-pointer hover:bg-blue py-4">
                   <span class="typcn typcn-user-add-outline"></span> PENERIMAAN SISWA BARU
                </div>
                    <br>
                    <br>
                </div>
                <!--  -->
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    layout:"guru",
    data(){
        return{
            gurus:0,
            siswas:0,
            pelajarans:0
        }
    },
    mounted() {
        let fd = new FormData()
        fd.append('data', `select id_guru from sekolah_data_guru`)//database setting di server
        fd.append('database','infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            console.log(res)
            this.gurus=res.data.length
            this.$forceUpdate()
        })
            let fd2 = new FormData()
        fd2.append('data', `select id_siswa from sekolah_data_siswa`)//database setting di server
        fd2.append('database','infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            console.log(res)
            this.siswas=res.data.length
            this.$forceUpdate()
        })
        let fd3 = new FormData()
        fd3.append('data', `select id_pelajaran from setup_pelajaran`)//database setting di server
        fd3.append('database','infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd3
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            console.log(res)
            this.pelajarans=res.data.length
            this.$forceUpdate()
        })
    },
}
</script>