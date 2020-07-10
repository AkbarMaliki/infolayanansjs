
<template>
  <div class="bg-white" style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
       <div style="">
            <div class="p-1  text-white">
            </div>
        </div>
                <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.go(-1)"></span>
       <div class=" rounded-lg ml-1 mr-1 p-2 shadow-lg">
            <p class="text-center text-uppercase">
                <img :src="vdata.gambar" class="kinoLightBox img-fluid rounded-circle shadow-lg " style="height:100px;width:100px;">
            </p>
       </div>
       <div class="bg-white rounded-lg ml-1 mr-1 mt-1 p-3 shadow-lg">
    <!-- FORM -->
      <br>
      <div class="row">
        <div class="offset-sm-2 col-sm-8">
      <!-- FORM -->

    <form
      action
      class="text-sm"
      @submit.prevent="aksi == 'insert' ? insert() : aksi == 'update' ? update() : remove() "
    >
      <!-- FORM -->
          <tr class="d-none">
              <td class='text-uppercase'>id</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="id_"
                    id="id"
                    name="id"
                    class="form-control form-control-sm"
                    v-model="vdata.id"
                    pattern="[a-zA-Z0-9\s]+" minlength="0" maxlength="30"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
              oninput="this.setCustomValidity('')"

                  >
                </div>
              </td>
            </tr>
            <tr>
              <td class='text-uppercase'>Nip</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="Nip"
                    id="nip"
                    name="nip"
                    class="form-control form-control-sm"
                    v-model="vdata.nip"
                  >
                </div>
              </td>
            </tr>
             <tr>
              <td class='text-uppercase'>Nama</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="Nama"
                    id="nip"
                    name="nip"
                    class="form-control form-control-sm"
                    v-model="vdata.nama"
                  >
                </div>
              </td>
            </tr>
          <tr>
              <td class='text-uppercase'>Email</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="Email"
                    id="email"
                    name="email"
                    class="form-control form-control-sm"
                    v-model="vdata.email"
                  >
                </div>
              </td>
            </tr>

          <tr>
              <td class='text-uppercase'>Profile</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                   <div class="sm-form">
                      <textarea type="text" id="profile" name="profile" rows="2" placeholder="profile"  v-model="vdata.profile" class="form-control md-textarea">{{vdata.profile}}</textarea>
                  </div>
              </td>
            </tr>

          <!-- <tr>
              <td class='text-uppercase'>Posisi / Jabatan</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                 <div class="sm-form">
                  <input
                    type="text"
                    placeholder="posisi"
                    id="posisi"
                    name="posisi"
                    class="form-control form-control-sm"
                    v-model="vdata.posisi"
                  >
                </div>
              </td>
            </tr> -->
          <tr>
              <td class='text-uppercase'>Alamat</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                  <div class="sm-form">
                      <textarea type="text" id="alamat" name="alamat" rows="2" placeholder="alamat"  v-model="vdata.alamat" class="form-control md-textarea">{{vdata.alamat}}</textarea>
                  </div>
              </td>
            </tr>

          <tr>
              <td class='text-uppercase'>Tanggal Lahir</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="date"
                    placeholder="Tanggal Lahir"
                    id="tglahir"
                    name="tglahir"
                    class="form-control form-control-sm"
                    v-model="vdata.tglahir"
                    pattern="[a-zA-Z0-9\s]+" minlength="0" maxlength="30"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
              oninput="this.setCustomValidity('')"

                  >
                </div>
              </td>
            </tr>

          <tr>
              <td class='text-uppercase'>No HP</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="No HP"
                    id="no_hp"
                    name="no_hp"
                    class="form-control form-control-sm"
                    v-model="vdata.no_hp"
                    pattern="[a-zA-Z0-9\s]+" minlength="0" maxlength="30"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
              oninput="this.setCustomValidity('')"

                  >
                </div>
              </td>
            </tr>
             <tr>
              <td class='text-uppercase'>Gambar</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">

              </td>
            </tr>
            <input type="file" name="file"  accept="image/jpeg"  @change="compress($event)" />
   <br>
   {{vdata.gambar}}
   <br>
            <!-- FORM -->
      <!-- SUBMIT -->
      <br />
      <div class="text-center">

      <button
        type="submit"
        class="btn btn-sm btn-outline-primary text-center"
        v-text="aksi == 'insert' ? 'insert' : aksi == 'update' ? 'Simpan' : 'remove'"
      ></button>
      </div>
      <!-- SUBMIT -->
    </form>
     <div class="row">
     </div>
      </div>
      </div>
      <br>
      <br>

  </div>
  </div>
</template>
<script>
import upload from '@/components/Single/UploadsNo.vue'
import axios from 'axios'
var id = require('date-fns/locale/id')
export default {
  components: {
    upload
  },
  layout: 'driver',
  data () {
    return {
      // style
      thbackground: 'black',
      thcolor: 'red',
      // Data datable
      datanya: [],
      file: "",
      imgs: [],
      vdata: {

      },
      ready: false,
      pilih: { name: 'taufik', hobby: 'coding' },
      err: false,
      less: [, '_id'],
      // modal
      mdq: 'xlg',
      // kirim
      kirim: {},
      // form
      aksi: 'update',
      formOn: false,
      updateOn: false
    }
  },
  methods: {
     compress(event) {
      // this.imgList=e.target.files;
      if (event.target.files[0].size > 10000000) {
        alert('File yang di upload tidak sesuai kriteria')
      } else {
        if (event.target.files.length > 0) {
          let img = []
          let hasil = []
          let compress = 'null'
          let filenya
          for (let i = 0; i < event.target.files.length; i++) {
            this.imgs.push(event.target.files[i])
            var selectedFile = event.target.files[i]
            var reader = new FileReader()
            reader.onload = function(event) {
              //   img.push(event.target.result)
            }
            reader.readAsDataURL(selectedFile)
            filenya = event.target.files[i]
            compress =
              filenya.size < 1000000
                ? 30
                : filenya.size < 2000000
                  ? 25
                  : filenya.size < 3000000
                    ? 20
                    : filenya.size < 4000000
                      ? 15
                      : 10
            this.$daycaca.compress(filenya, compress, data => {
              this.gambar = data
              img.push(data)
              this.$urltofile(data, filenya.name, filenya.type).then(res => {
                hasil.push(res)
              })
            })
          }
          console.log('base64',img)
          setTimeout(() => {
             console.log('file',hasil[0])
              this.file = img[0]
              this.ready=true
               this.vdata.gambar = this.file
              // this.inputfile()
          }, 1000);
        //   this.$emit('upload', hasil)
        }
      }
    },
    refreshData () {
      this.$store.dispatch('logout')
    },
    update () {
        this.$nuxt.$emit('busy',true)
      let fd = new FormData()
      fd.append('data', `UPDATE tbuser SET email='${this.vdata.email}',profile='${this.vdata.profile}',posisi='${this.vdata.posisi}',nama='${this.vdata.nama}',nip='${this.vdata.nip}',alamat='${this.vdata.alamat}',tglahir='${this.vdata.tglahir}',no_hp='${this.vdata.no_hp}' Where id = '${this.vdata.id}'`)
      fd.append('database', ' infolay3_test')
      axios
        .post('https://infolayanans.space' + '/api/mysql/auto.php', fd, {
          headers: {
            Authorization: localStorage.getItem('auth._token.local')
          }
        })
        .then(res => {
          console.log(res)
          alert('Update Data Berhasil! Silahkan Login Ulang')
          let fd2 = new FormData()
          fd2.append('data', `update tbuser_gambar set gambar='${this.file}' where id_user=${this.$store.state.users.id}`)
          fd2.append('database', ' infolay3_test')
          axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
          , {
              headers: {
              Authorization: localStorage.getItem('auth._token.local')
              }
          }).then(res => {
              console.log(res)
              alert('Loading, tunggu hingga menu login muncul!')
              setTimeout(() => {
                  this.$nuxt.$emit('busy',false)
                this.refreshData()
              }, 1000);
              this.$forceUpdate()
          })
        })
    },
    onchangefile (e) {
      // $event
      this.file = e.target.files[0] // tambahkan data set kosong file:""
      console.log(this.file)
      this.inputfile()
    },
    inputfile () {
      let fd = new FormData()
      fd.append('file', this.file)
      axios
        .post('https://infolayanans.space/api/mysql/upload.php', fd, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then(res => {
          this.vdata.gambar = res.data
          console.log(res) // get /api/gambar/url.jpg
        })
    },
    ambil (item, index) {
      window.scrollTo(0, 0)
      let that = this
      this.updateOn = true
      this.formOn = true
      let clone = this.$_.clone(item)
      // clone["TGL_LHR"] = this.$datefns.format(
      //   new Date(clone["TGL_LHR"]),
      //   "YYYY-MM-dd"
      // );
      console.log(clone)
      this.vdata = clone
      this.pilih = item
    },
    clearInput () {
      this.formOn = true
      let keys = Object.keys(this.vdata)
      keys.forEach(key => {
        this.vdata[key] = ''
      })
    },
    //! ==================
    //! hapus dari sini
    //! =================
    checkedAll () {
      console.log(this.checkedItem)
    },
    print1 () {
      this.$router.push('/testing/datatable/print')
      this.$store.state.print2 = []
      this.$store.state.print2.push(this.pilih)
      alert('print satu')
    },
    print2 () {
      this.$router.push('/testing/datatable/print')
      this.$store.state.print2 = this.datanya
      alert('print banyak')
    },
    linknya (hasil) {
      console.log('link', hasil)
      this.vdata.Gambars = hasil
      this.$forceUpdate()
    },
    isDate (value) {
      var dateFormat
      if (toString.call(value) === '[object Date]') {
        return true
      }
      if (typeof value.replace === 'function') {
        value.replace(/^s+|s+$/gm, '')
      }
      dateFormat = /(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/
      return dateFormat.test(value)
    },
    // MODAL
    distance () {
      return this.$datefns.distanceInWords(
        new Date('2018-12-25T03:21:12.941Z'),
        new Date(),
        {
          locale: id,
          includeSeconds: true
        }
      )
      return result
    },
    format (date) {
      return this.$datefns.format(date, 'DD MMMM YYYY', {
        locale: id
      })
    },
    distanceToNow () {
      return this.$datefns.distanceInWordsToNow(
        new Date(2015, 0, 1, 0, 0, 15),
        {
          locale: id,
          includeSeconds: true
        }
      )
      //= > "3 days ago"
    },
    mediaQueries () {
      this.mdq =
        window.innerWidth <= 576
          ? 'sm'
          : window.innerWidth <= 768
            ? 'md'
            : window.innerWidth <= 992
              ? 'lg'
              : 'xl'
    }
    //! ==================
    //! sampai sini
    //! =================
  },
  mounted () {
    let fd = new FormData()
    fd.append('data', `select * from tbuser tb1 LEFT JOIN tbuser_gambar tb2 on tb1.id=tb2.id_user where tb1.id='${this.$store.state.users.id}'`)
    fd.append('database', ' infolay3_test')
    axios.post('https://infolayanans.space/api/mysql/auto.php', fd
    , {
        headers: {
        Authorization: localStorage.getItem('auth._token.local')
        }
    }).then(res => {
        this.vdata.gambar = res.data[0].gambar 
        this.file= res.data[0].gambar
        console.log(res)
        this.$forceUpdate()
    })
    let clone = this.$_.clone(this.$store.state.users) // item vue object
    this.vdata = clone
    let that = this
    that.mediaQueries()
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        that.mediaQueries()
      })
    })
  }
}; </script>
