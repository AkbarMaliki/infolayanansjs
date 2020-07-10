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
                               <td class="text-capitalize font-times text-sm">Nama Siswa</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.nama_siswa}}</td>
                           </tr>
                             <tr>
                               <td class="text-capitalize font-times text-sm">NIS</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.nis}}</td>
                           </tr>
                             <tr>
                               <td class="text-capitalize font-times text-sm">Kelamin</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.kelamin}}</td>
                           </tr>
                             <tr>
                               <td class="text-capitalize font-times text-sm">Alamat Siswa</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.alamat_siswa}}</td>
                           </tr>
                             <tr>
                               <td class="text-capitalize font-times text-sm">Kelas</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.nama_kelas}}</td>
                           </tr>
                               <tr>
                               <td class="text-capitalize font-times text-sm">Jurusan</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.nama_jurusan}}</td>
                           </tr>
                      </div>
                  </div>
              </div>
                <div class="col-sm-12">
                    <br>
                </div>
                <!--  -->
            <div class="col-sm-12">
                <hr class="style13">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="row">
                                 <div @click="$router.push('/sekolah/siswa/jadwal-belajar')" class="col-sm-6 px-2 ">
                                    <div class="shadow-lg rounded-lg font-bold  cursor-pointer hover:bg-blue py-4 anim " 
                                    style="">
                                        <p class="text-center text-2xl"><span class="typcn typcn-document-text text-4xl"></span> Jadwal Belajar</p> 
                                    </div>
                                </div>
                                 <div @click="$router.push('/sekolah/siswa/list-tugas')" class="col-sm-6 px-2 ">
                                    <div class="shadow-lg rounded-lg font-bold  cursor-pointer hover:bg-blue py-4 anim " 
                                    style="">
                                        <p class="text-center text-2xl"><span class="typcn typcn-map text-4xl"></span> List Tugas</p> 
                                    </div>
                                </div>
                            </div>
                            <hr class="style16">
                        </div>
                        <div class="col-sm-6">
                            <tr>
                               <td class="text-capitalize font-times text-sm">Alamat Siswa</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.alamat_siswa}}</td>
                           </tr>
                            <tr>
                               <td class="text-capitalize font-times text-sm">Sekolah Asal</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.sekolahasal}}</td>
                           </tr>
                              <tr>
                               <td class="text-capitalize font-times text-sm">Alamat Siswa</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.alamat_siswa}}</td>
                           </tr>
                              <tr>
                               <td class="text-capitalize font-times text-sm">Anak Ke</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.anakke}}</td>
                           </tr>
                              <tr>
                               <td class="text-capitalize font-times text-sm">Status Siswa</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.status}}</td>
                           </tr>
                        </div>
                        <div class="col-sm-6">
                            <tr>
                               <td class="text-capitalize font-times text-sm">Alamat Orang Tua</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.alamatortu}}</td>
                           </tr>
                            <tr>
                               <td class="text-capitalize font-times text-sm">Ayah</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.ayah}}</td>
                           </tr>
                          
                            <tr>
                               <td class="text-capitalize font-times text-sm">Pekerjaan Ayah</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.pekerjaanayah}}</td>
                           </tr>
                              <tr>
                               <td class="text-capitalize font-times text-sm">Ibu</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.ibu}}</td>
                           </tr>
                          
                            <tr>
                               <td class="text-capitalize font-times text-sm">Pekerjaan Ibu</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.pekerjaanibu}}</td>
                           </tr>
                              <tr>
                               <td class="text-capitalize font-times text-sm">Wali</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.wali}}</td>
                           </tr>
                          
                            <tr>
                               <td class="text-capitalize font-times text-sm">Pekerjaan Wali</td>
                               <td class="text-capitalize font-times text-sm">&nbsp;:&nbsp;</td>
                               <td class="text-capitalize font-times text-sm">{{datanya.pekerjaanwali}}</td>
                           </tr>
                        </div>
                    </div>
                </div>
              
                </div>
                <!--  -->
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    layout:"siswa",
    data(){
        return{
            gurus:0,
            siswas:0,
            pelajarans:0,
            datanya:[]
        }
    },
    mounted() {
      let fd = new FormData()
      fd.append('data', `select * from sekolah_data_siswa tb1 left join setup_kelas tb2 on tb2.id_kelas=tb1.id_kelas left join setup_jurusan tb3 on tb3.id_jurusan=tb1.id_jurusan where id_siswa='${this.$store.state.users.id_siswa}'`)//database setting di server
      fd.append('database','infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          console.log(res)
          this.datanya=res.data[0]
          this.$forceUpdate()
      })
    },
}
</script>