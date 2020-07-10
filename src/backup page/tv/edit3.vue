<template>
  <div>
    <img
      src="@/static/icon/btn.png"
      @click="$router.push('/tv/edit1')"
      class="kinoLightBox img-fluid rounded-top z-depth-1 mx-auto"
      style="border-radius: 20px;width:300px;"
      alt="top"
    />
    <br />
    <br />
    <div class="text-center"></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 order-2 p-4">
             <p class="text-center text-bold text-2xl">GAMBAR UPDATE</p>
                <input type="file" name="file" @change="onchangefile($event)" />
                <br />
                <br />
                <button class="btn btn-sm btn-primary" @click="inputfile">Simpan</button>
                <br>
                <hr>
                <img :src="'https://infolayanans.space/'+gambarnya" class="kinoLightBox img-fluid " style="border-radius: 20px;" alt="">

                {{gambarnya}}

        </div>
        <div class="col-sm-6 p-4">
             <p class="text-center text-bold text-2xl">TEXT BERJALAN</p>
          <div class="sm-form">
            <div class="md-form">
              <textarea
                type="text"
                id="text"
                name="text"
                rows="6"
                class="form-control md-textarea"
                v-model="texts"
              >{{textnya}}</textarea>
              <label for="text" class="font-bold font-times">Text Jalan</label>
            </div>
          </div>
          <hr class="style2" />
          <div class="text-center">
            <button type="button" @click="simpan()" class="btn btn-sm btn-primary btn-block">Simpan</button>
            <button
              type="button"
              @click="$router.push('/')"
              class="btn btn-sm btn-outline-primary btn-block"
            >Kembali</button>
          </div>
          <hr class="style2" />
          <br />
          <br />
          <p class="text-center text-uppercase">{{textnya}}</p>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      vdata: {},
      textnya: '',
      texts: '',
      gambarnya: '',
      file: ''
    }
  },
  layout: 'tv',
  methods: {
    simpan () {
      let fd = new FormData()

      fd.append(
        'data',
        `UPDATE btn_tv_text SET text='${this.texts}' Where id = '1'`
      )
      fd.append('database', ' infolay3_test')

      axios
        .post('https://infolayanans.space' + '/api/mysql/auto.php', fd, {
          headers: {
            Authorization: localStorage.getItem('auth._token.local')
          }
        })
        .then(res => {
          console.log(res)
          this.textnya = res.data[0].text
          this.gambarnya = res.data[1].text
          this.$router.go()
        })
        .catch(err => {
          console.log(err)
          this.$router.go()
        })
    },
    onchangefile (e) {
      // $event
      this.file = e.target.files[0] // tambahkan data set kosong file:""
      console.log(this.file)
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
          console.log(res) // get /api/gambar/url.jpg
          let fd2 = new FormData()
          fd2.append(
            'data',
            `UPDATE btn_tv_iklan SET text='${res.data}' Where id = '1'`
          )
          fd2.append('database', ' infolay3_test')

          axios
            .post('https://infolayanans.space' + '/api/mysql/auto.php', fd2, {
              headers: {
                Authorization: localStorage.getItem('auth._token.local')
              }
            })
            .then(res => {
              console.log(res)
              this.textnya = res.data[0].text
              this.gambarnya = res.data[1].text
              this.$router.go()
            })
            .catch(err => {
              console.log(err)
              this.$router.go()
            })
        })
    }
  },
  mounted () {
    let fd5 = new FormData()
    fd5.append('data', 'select * from btn_tv_iklan')
    axios
      .post('https://infolayanans.space' + '/api/mysql/auto.php', fd5, {
        headers: {
          Authorization: localStorage.getItem('auth._token.local')
        }
      })
      .then(res => {
        console.log(res)
        this.gambarnya = res.data[0].text
      })
      .catch(err => {
        console.log(err)
      })
    let data = localStorage.getItem('login')
    if (data != 'true') {
      this.$router.push('/')
    }
    let fd = new FormData()
    fd.append('data', 'select * from btn_tv_text')
    axios
      .post('https://infolayanans.space' + '/api/mysql/auto.php', fd, {
        headers: {
          Authorization: localStorage.getItem('auth._token.local')
        }
      })
      .then(res => {
        console.log(res)
        this.textnya = res.data[0].text
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
