<template>
  <div>
    <!-- NOTE
            default sort dipilih pada id_tv id atau no
            b-table-column = td
            untuk mengakses item di data cukup akses melalui props.row = this.datanya[index]
            b-table-column label=penamaan th
            b-table-column field=id dari th
    -->
    <!-- MULAI -->

    <img
      src="@/static/icon/btn.png"
      @click="$router.push('/tv/edit1')"
      class="kinoLightBox img-fluid rounded-top z-depth-1 mx-auto"
      style="border-radius: 20px;width:300px;"
      alt="top"
    />
    <br />
    <br />
    <!-- FORM -->

    <!-- FORM -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 text-center">
          <hr class="style13" />
          <button
            type="button"
            @click="$router.go('-1')"
            class="btn btn-sm btn-outline-primary rounded-lg"
          >Kembali</button>
          <p class="text-center font-bold text-uppercase">EDIT DATA</p>
        </div>
        <div class="offset-sm-3 col-sm-6">
          <form
            action
            @submit.prevent="
        aksi == 'insert' ? insert() : aksi == 'update' ? update() : remove()
      "
          >
            <!-- FORM -->
            <tr>
              <td>ID</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:100%;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="id"
                    id="id"
                    name="id"
                    class="form-control form-control-sm"
                    v-model="vdata.id"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
                    oninput="this.setCustomValidity('')"
                    disabled
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>ID_TV</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="id_tv"
                    id="id_tv"
                    name="id_tv"
                    class="form-control form-control-sm"
                    v-model="vdata.id_tv"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
                    oninput="this.setCustomValidity('')"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>SUB_1</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="sub_1"
                    id="sub_1"
                    name="sub_1"
                    class="form-control form-control-sm"
                    v-model="vdata.sub_1"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
                    oninput="this.setCustomValidity('')"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td>SUB_2</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="sub_2"
                    id="sub_2"
                    name="sub_2"
                    class="form-control form-control-sm"
                    v-model="vdata.sub_2"
                    oninvalid="this.setCustomValidity('Harus diisi dan Maksimal 30 !')"
                    oninput="this.setCustomValidity('')"
                  />
                </div>
              </td>
            </tr>

            <!-- FORM -->
            <!-- SUBMIT -->
            <br />
            <button
              type="submit"
              class="btn btn-sm btn-outline-primary ml-2 btn-block"
              v-text="
          aksi == 'insert' ? 'insert' : aksi == 'update' ? 'update' : 'remove'
        "
            ></button>
            <!-- SUBMIT -->
          </form>
          <hr class="style2" />
          <div class="text-center text-uppercase">
            <br />
            <button
              type="button"
              @click="
        aksi = 'insert';
        clearInput();
      "
              class="btn btn-sm btn-danger"
            >insert</button> &nbsp;
            <button
              type="button"
              @click="aksi = 'update'"
              class="btn btn-sm btn-danger"
            >update</button>&nbsp;
            <button
              type="button"
              @click="aksi = 'remove'"
              class="btn btn-sm btn-danger"
            >remove</button>
            <br />
            <hr class="style2 pt-2" />
            <button type="button" @click="refres()" class="btn btn-sm btn-outline-danger">refresh</button>
            <br />
          </div>
        </div>
      </div>
    </div>

    <hr class="style13" />

    <!-- SEARCH -->
    <div class="sm-form" style="width:200px;">
      <input
        type="text"
        id="search"
        name="search"
        class="form-control form-control-sm"
        placeholder="search"
        v-model="search"
      />
    </div>
    <b-table
      v-if="!loading"
      :data="datanya"
      :per-page="10"
      :bordered="true"
      :striped="true"
      :narrowed="true"
      :hoverable="true"
      :loading="loading"
      :focusable="true"
      :mobile-cards="true"
      :paginated="true"
      :default-sort-direction="'asc'"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      default-sort="id"
    >
      <template slot-scope="props">
        <b-table-column
          :field="item"
          sortable
          :label="changeTH(item)"
          :width="item == 'id' ? 40 : ''"
          v-for="(item, index) in keys"
          :key="index + 'keys'"
          v-if="item != 'gambar1' && item != 'gambar2' && item != 'gambar3'"
        >
          <span
            style="display:block;cursor:pointer;"
            @click="pilih(props.row)"
          >{{ props.row[item] }}</span>
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <b-icon icon="emoticon-sad" size="is-large"></b-icon>
            </p>
            <p>Nothing here.</p>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>

<script>
import upload from '@/components/Single/UploadsNo.vue'
import axios from 'axios'
import socket from '@/plugins/socket.io.js'
import uniqid from 'uniqid'
var id = require('date-fns/locale/id')
export default {
  components: {
    upload
  },
  data () {
    return {
      // style
      thbackground: 'black',
      thcolor: 'red',
      // Data datable
      vdata: {},
      ready: false,
      err: false,
      less: [, '_id'],
      data: [],
      loading: true,
      search: '',
      // modal
      mdq: 'xlg',
      // kirim
      kirim: {},
      // form
      aksi: 'insert',
      formOn: false,
      updateOn: false
    }
  },
  layout: 'tv',
  methods: {
    pilih (item) {
      this.vdata = item
      let fd = new FormData()
      let data1 = 100
      fd.append('test', data1)
      console.log(item)
    },
    del (item) {
      console.log(item)
      let fd = new FormData()
      fd.append('data', 'select * from btn_tv ')
      axios
        .post('https://infolayanans.space' + '/api/mysql/auto.php', fd, {
          headers: {
            Authorization: localStorage.getItem('auth._token.local')
          }
        })
        .then(res => {
          this.data = res.data
          console.log(res.data)
          this.loading = false
        })
    },
    changeTH (item) {
      let data = item
      data = data.replace('_', ' ')
      data = data.charAt(0).toUpperCase() + data.slice(1)
      return data
    },
    refresh () {
      let fd = new FormData()
      fd.append(
        'data',
        `select * from btn_tv2 where id_tv=${this.$route.query.id}`
      )
      fd.append('database', ' infolay3_test')

      axios
        .post('https://infolayanans.space' + '/api/mysql/auto.php', fd)
        .then(res => {
          this.ambil2(res.data)
          this.loading = false
        })
        .catch(err => {
          console.log('erro')
        })
    },
    ambil2 (data) {
      this.data = data
      this.$forceUpdate()
    },
    test () {
      let data = [{ id: 1, id_tv: 4 }]
      this.ambil2()
    },
    refreshData () {
      let fd = new FormData()
      console.log(this.$route.query.id)
      fd.append(
        'data',
        `select * from btn_tv2 where id_tv=${this.$route.query.id}`
      )
      fd.append('database', ' infolay3_test')

      axios
        .post('https://infolayanans.space' + '/api/mysql/auto.php', fd, {
          headers: {
            Authorization: localStorage.getItem('auth._token.local')
          }
        })
        .then(res => {
          console.log(res.data)
          this.refreshData()
        })
        .catch(err => {
          this.refreshData()
        })
    },
    pop () {
      let tet = '289329832'
      let message = {
        id: uniqid(),
        no: 'refresh',
        dari: '082329323',
        text: tet.trim(),
        createdAt: new Date().toJSON(),
        createdBy: 'null'
      }
      socket.emit('send-message', message)
    },
    refres () {
      this.pop()
    },
    insert () {
      let fd = new FormData()

      fd.append(
        'data',
        `Insert into btn_tv2 (id_tv,sub_1,sub_2) VALUES ('${this.vdata.id_tv}','${this.vdata.sub_1}','${this.vdata.sub_2}')`
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
          alert('Simpan Data Berhasil!')
          this.refreshData()
          this.$router.go()
        })
        .catch(err => {
          this.refreshData()
          this.$router.go()
        })
    },
    update () {
      let fd = new FormData()

      fd.append(
        'data',
        `UPDATE btn_tv2 SET id_tv='${this.vdata.id_tv}',sub_1='${this.vdata.sub_1}',sub_2='${this.vdata.sub_2}' Where id = '${this.vdata.id}'`
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
          alert('Update Data Berhasil!')
          this.refreshData()
          this.$router.go()
        })
        .catch(err => {
          this.refreshData()
          this.$router.go()
        })
    },
    remove () {
      let fd = new FormData()

      fd.append('data', `DELETE FROM btn_tv2 WHERE  id =  '${this.vdata.id}'`)
      fd.append('database', ' infolay3_test')
      if (confirm('Yakin dihapus?')) {
        axios
          .post('https://infolayanans.space' + '/api/mysql/auto.php', fd, {
            headers: {
              Authorization: localStorage.getItem('auth._token.local')
            }
          })
          .then(res => {
            console.log(res)
            alert('Delete Data Berhasil!')
            let keys = Object.keys(this.vdata)
            keys.forEach(key => {
              this.vdata[key] = ''
            })
            this.refreshData()
            this.$router.go()
          })
          .catch(err => {
            let keys = Object.keys(this.vdata)
            keys.forEach(key => {
              this.vdata[key] = ''
            })
            this.refreshData()
            this.$router.go()
          })
      }
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
  computed: {
    keys () {
      let data = this.data
      return Object.keys(data[0])
    },
    datanya () {
      let data = this.data
      let hasil = false
      let keys = Object.keys(data[0])
      data = data.filter((v, i, a) => {
        let hasil = false
        keys.filter(key => {
          if (typeof v[key] === 'string') {
            if (v[key].toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
              hasil = true
            }
          } else {
            if (v[key] != null) {
              if (v[key].toString().indexOf(this.search) != -1) {
                hasil = true
              }
            } else {
            }
          }
        })
        if (hasil) return v
      })
      return data
    }
  },
  beforeMount () {
    this.vdata.id_tv = this.$route.query.id
  },
  mounted () {
    let data = localStorage.getItem('login')
    if (data != 'true') {
      this.$router.push('/')
    }
    let that = this
    this.refresh()
    that.mediaQueries()
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        that.mediaQueries()
      })
    })
  }
}
</script>
