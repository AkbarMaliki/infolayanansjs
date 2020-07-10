<template>
  <div>
 <div class="container-fluid " style="">
    <div class="row">
        <div class="col-sm-12 " style="height:1000px;background:rgba(225, 233, 236, 0.911);">
          <div class="row">
              <div style=" margin: auto;margin-top:10vh;
              background:#FEFEFE;
                " class="rounded-lg shadow-lg border-2 p-3 col-sm-6">
                <div class="text-center">
              <img src="@/static/media/icon/btn.png" class="kinoLightBox img-fluid  z-depth-1 mx-auto" style="height:60px;">
              <br>
              <div class="container-fluid">
                  <div class="row">
                     <div class="col-4">
                       <img src="@/static/driver/logo_bkp.png" class="kinoLightBox img-fluid  z-depth-1 mx-auto float-left" style="height:60px;">
                       </div>
                     <div class="col-4">
                       <img src="@/static/driver/sdd.png" class="kinoLightBox img-fluid  z-depth-1 mx-auto" style="height:60px;">
                       </div>
                     <div class="col-4">
                       <img src="@/static/driver/pkss.png" class="kinoLightBox img-fluid  z-depth-1 mx-auto float-right" style="height:60px;">
                       </div>
                      </div>
              </div>
              <br>
              <hr class="style7 pt-2 mt-1">
                </div>
                <div v-if="shows=='register'">
                  <form action="#" @submit.prevent="register">
                    <div class="sm-form">
                      <label for="username">User ID</label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        class="form-control form-control-sm"
                        placeholder="username"
                        v-model="vdata.username"
                        required
                      />
                    </div>
                     <div class="sm-form">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        class="form-control form-control-sm"
                        placeholder="email"
                        v-model="vdata.email"
                        required
                      />
                    </div>
                    <div class="sm-form">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        class="form-control form-control-sm"
                        placeholder="password"
                        v-model="vdata.password"
                        required
                      />
                    </div>
                     <div class="sm-form">
                      <label for="password2">Re enter Password</label>
                      <input
                        type="password"
                        id="password2"
                        name="password2"
                        class="form-control form-control-sm"
                        placeholder="Re password"
                        v-model="vdata.password2"
                        required
                      />
                    </div>
                    <p class="text-red font-times font-bold" v-show="vdata.password!=vdata.password2">Password Tidak Sama !</p>
                    <br />
                    <hr class="style13" />
                    <br />

                    <button type="submit" class="btn btn-sm bg-blue-darker text-white float-left"><span class="typcn typcn-keyboard"></span> Daftar</button>
                    <br />
                    <br />
                  </form>
                </div>
                <div v-else-if="this.shows=='register2'">
                  <p class="text-center font-bold font-times">SILAHKAN MASUKKAN BEBERAPA INFORMASI BERIKUT!</p>
                  <form action="#" @submit.prevent="register2">
                    <div class="sm-form">
                      <label for="nama">Nama</label>
                      <input
                        type="text"
                        id="nama"
                        name="nama"
                        class="form-control form-control-sm"
                        placeholder="nama"
                        v-model="vdata.nama"
                      />
                    </div>
                     <div class="sm-form">
                      <label for="posisi">Posisi Kerja/Unit Kerja</label>
                      <select class='form-control' v-model="vdata.posisi" @change="items($event)">
                      <option v-for="(item, index) in unit" :key="index" v-if="item.id!='1'">{{item.nama_unit}}</option>
                      </select>
                    </div>
                    <br />
                    <hr class="style13" />
                    <br />
                    <div class="text-center">
                    <button type="submit" class="btn btn-sm bg-blue-darker text-white float-left"><span class="typcn typcn-keyboard"></span> Simpan</button>
                    </div>
                    <br />
                    <br /><br />
                    <br />
                  </form>
                </div>
                <div v-else>
                  <p class="text-center font-bold font-times">
                    ISI TANDA TANGAN DIGITAL
                  </p>
                  <VueSignaturePad width="100%" height="500px" ref="signaturePad" style="border:1px solid black;" />
                  <br>
                  <div class="row">
                      <div class="col-6 text-center">
                          <button class="btn btn-sm btn-danger" @click="undo">Undo</button>
                      </div>
                      <div class="col-6 text-center">
                          <button class="btn btn-sm btn-primary" @click="save">Save</button>
                      </div>
                  </div>
                </div>
              </div>
          </div>

            <br>
            <br>
        </div>
        <div class="col-sm-6">

        </div>
    </div>
</div>

  </div>
</template>
<script>
import axios from 'axios'
import md5 from 'md5'
export default {
  data () {
    return {
      vdata: {},
      shows:"register",
      ids:"",
      unit:[],
      targets:""
    }
  },
  beforeMount () {
    if (localStorage.getItem('auth._token.local')) {
      let fd2 = new FormData()
      fd2.append('data', 'select * from tbuser')
      axios
        .post(this.$store.state.database + '/api/mysql/getUser.php', fd2, {
          headers: {
            Authorization: localStorage.getItem('auth._token.local')
          }
        })
        .then(res => {
          console.log(res)
          this.$store.commit('changeUsers', res.data[0])
          localStorage.setItem('users', JSON.stringify(res.data[0]))
          this.$router.push('/driver/')
        })
    }
  },
  methods: {
    items(e){
      console.dir(e.target.value)
      this.targets=e.target.value
    },
     undo() {
      this.$refs.signaturePad.undoSignature();
    },
    b64toBlob(b64Data, contentType, sliceSize) {
            contentType = contentType || '';
            sliceSize = sliceSize || 512;

            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);

                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }

                var byteArray = new Uint8Array(byteNumbers);

                byteArrays.push(byteArray);
            }

        var blob = new Blob(byteArrays, {type: contentType});
        return blob;
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
        var ImageURL = data;
        var block = ImageURL.split(";");
        var contentType = block[0].split(":")[1];// In this case "image/gif"
        var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
        var blob = this.b64toBlob(realData, contentType);
        console.log(blob)
          let fd = new FormData()
          fd.append('data', `update tbuser_ttd set ttd='${data}' where id_user='${this.ids}'`)
          fd.append('database', ' infolay3_test')
          axios.post('https://infolayanans.space/api/mysql/auto.php', fd
          , {
              headers: {
              Authorization: localStorage.getItem('auth._token.local')
              }
          }).then(res => {
              console.log(res)
              alert('simpan ttd berhasil!')
              this.$router.push('/driver')
              this.$forceUpdate()
          }).catch(err=>{
              this.$router.push('/driver')
          })
    },
    register () {
      let fd = new FormData()
      fd.append('data', `insert into tbuser (username,email,password) VALUES ('${this.vdata.username}','${this.vdata.email}','${md5(this.vdata.password)}')`)
      fd.append('database', ' infolay3_test')
      axios
        .post('https://infolayanans.space' + '/api/mysql/auto.php', fd, {
          headers: {
            Authorization: localStorage.getItem('auth._token.local')
          }
        })
        .then(res => {
          console.log(res.data.search('Duplicate'))
          if(res.data.search('Duplicate')!=-1){
            alert('Data sudah digunakan silahkan gunakan informasi yang berbeda')
            }else{
            alert('Daftar Data Berhasil! Silahkan Login Ulang')
            let fd2 = new FormData()
            fd2.append('data', `select * from tbuser order by id desc`)
            fd2.append('database', ' infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                this.ids = res.data[0].id
                let fd3 = new FormData()
                fd3.append('data', `insert into tbuser_gambar (id_user) VALUES ('${res.data[0].id}')`)
                fd3.append('database', ' infolay3_test')
                axios.post('https://infolayanans.space/api/mysql/auto.php', fd3
                , {
                    headers: {
                    Authorization: localStorage.getItem('auth._token.local')
                    }
                }).then(res => {
                    console.log(res)
                    this.$forceUpdate()
                })
                let fd4 = new FormData()
                fd4.append('data', `insert into tbuser_ttd (id_user) VALUES ('${res.data[0].id}')`)
                fd4.append('database', ' infolay3_test')
                axios.post('https://infolayanans.space/api/mysql/auto.php', fd4
                , {
                    headers: {
                    Authorization: localStorage.getItem('auth._token.local')
                    }
                }).then(res => {
                    console.log(res)
                    this.$forceUpdate()
                })
                console.log(res)
                this.$forceUpdate()
            })
            this.shows='register2'
          }
        }).catch(err => {
          console.log(err)
        })
    },
    register2(){
      let fd = new FormData()
      fd.append('data', `select * from driver_unit where nama_unit='${this.targets}'`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          let id = res.data[0].id
          this.$forceUpdate()
          let fd2 = new FormData()
          fd2.append('data', `update tbuser set nama='${this.vdata.nama}',posisi='${this.vdata.posisi}', unit_kerja='${id}',status='available' where email='${this.vdata.email}'`)
          fd2.append('database', ' infolay3_test')
          axios
            .post('https://infolayanans.space' + '/api/mysql/auto.php', fd2, {
              headers: {
                Authorization: localStorage.getItem('auth._token.local')
              }
            })
            .then(res => {
              console.log(res)
              this.shows = 'register3'
              // this.$router.push('/driver/login')
            }).catch(err => {
            })
      })
    }
  },
  mounted() {
      console.log(md5('asd'))
      let fd = new FormData()
      fd.append('data', `select * from driver_unit`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          this.unit = res.data
          this.$forceUpdate()
      })
  },
}
</script>
<style>
.tes{
  color:rgba(225, 233, 236, 0.911);
}
</style>
