<template>
  <div>
    <div class="bg-white" style="height:100vh;">
        <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                 <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.go(-1)"></span>
            <div class="p-3 text-center text-white font-times">
                    <p>LIST PERMINTAAN LEMBUR</p>
            </div>
        </div>
    <div class="bg-white p-2 mt-2  shadow-inner" style="margin-top:-50px;" v-if="klik">
      <div class="max-w-sm  overflow-hidden shadow-lg">
        <!-- <img class="w-full" src="@/static/gif/cek.gif" alt="Sunset in the mountains" style="height:160px;"> -->
        <div class="px-6 pt-4">
            <tr class="text-grey-darker text-base">
                <td>Unit Kerja</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{{pilih.posisi}}</td>
            </tr>
            <tr class="text-grey-darker text-base">
                <td>Nama</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{{pilih.nama}}</td>
            </tr>
            <tr class="text-grey-darker text-base">
                <td>Jenis Pekerjaan dilemburkan</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{{pilih.jenis_pekerjaan}}</td>
            </tr>
             <tr class="text-grey-darker text-base">
                <td>Rincian Kerja</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{{pilih.rincian_kerja}}</td>
            </tr>
            <tr class="text-grey-darker text-base" >
                <td>Lama Lembur</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{{pilih.jam_lama}}</td>
            </tr>
            <tr class="text-grey-darker text-base" >
                <td>Tanggal</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{{pilih.tanggal}}</td>
            </tr>
            
         
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">Jam {{pilih.jam_lembur}}</span>
        </div>
        
      </div>
      <div class="p-2">
        <button type="button" @click="klik=false" class="btn btn-sm btn-primary rounded-lg font-bold font-times"><span class="typcn typcn-arrow-left"></span> Kembali</button>
        <button type="button" @click="prints" class="btn btn-sm btn-success rounded-lg float-right font-bold font-times"><span class="typcn typcn-printer"></span> Print <span class="typcn typcn-arrow-right"></span></button>
      </div>
    </div>
    <div class="bg-white p-2 mt-2 rounded-lg shadow-inner rounded-t-full" style="margin-top:-50px;" v-else>

      <!-- <tables :datatable="datanya" :unless="['fname','lname']" /> -->
      <div style="overflow-x:auto;width:100%;" v-if="ready">
        <!-- MODAL -->
        <!-- ======================================================= -->
        <!-- DATATABLE MULAI DISINI -->
        <!-- SEARCH INPUT -->
        <div class="container flex flex-wrap mx-auto px-4 d-print-none">
          <div class="w-full sm:w-1/3">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <span class="typcn typcn-zoom"></span>
                </div>
              </div>
              <input
                type="text"
                class="form-control py-0"
                id="searchTable"
                placeholder="Cari Data ... "
                v-model="search"
              />
            </div>
          </div>
          <!-- KOSONG -->
          <div class="w-full sm:w-1/3"></div>
          <!-- BUTTON LIST -->

        </div>
        <!-- TABLE -->
        <div
          class="table-responsive-sm font-times p-3"
          style="box-shadow:1px 4px 6px black;overflow:scroll;"
          v-dragscroll
        >
          <template>
            <!-- DEKSTOP -->
            <table
              class="table-print table-sm table-bordered bg-white table-hover table-print border-black"
              style=" overflow-x: scroll;
    overflow-y: hidden;
    height: 80px;
    white-space:nowrap"
            >
              <!-- TABLE STYLE -->
              <thead class="mdb-color" :style="{background:thbackground}">
                <tr class="text-white" style="overflow:scroll;color:white;">

                  <th
                    scope="col"
                    class="th-print cursor-pointer uppercase"
                    style="font-size:21px;"
                    @click="sort(item)"
                    v-for="(item, index) in thnya"
                    :key="index+'th'"
                    v-show="!less.includes(item)"
                  >
                    <span :style="{color:thcolor}" style="font-size:13px;">
                      {{item =='nama'?'driver':item}}
                      <template v-if="orderWith">
                        <span v-show="orderBy==item">
                          <span class="typcn typcn-arrow-down"></span>
                        </span>
                      </template>
                      <template v-else>
                        <span v-show="orderBy==item">
                          <span class="typcn typcn-arrow-up"></span>
                        </span>
                      </template>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index3) in td" :key="index3+'td'">

                  <no-ssr>
                    <v-touch
                      tag="td"
                      v-on:tap="ambil(item,index3);modal=true"
                      class="cursor-pointer text-capitalize"
                      :class="{'text-red text-uppercase':item[item2]=='1'}"
                      v-for="(item2, indexs) in thnya"
                      :key="indexs+'th2'"
                      v-html="item[item2]"
                      v-show="!less.includes(item2)"
                    ></v-touch>
                  </no-ssr>
                </tr>
              </tbody>
            </table>
          </template>
          <!-- FUNGSI DIBAWAH TABEL SEPERTI PAGINATION -->
          <div class="float-right">
            <template v-if="datanya.length>=selected">
              <button
                type="button"
                @click="pagPrev"
                class="btn btn-sm btn-outline-info roundec-circle"
              >Prev</button>
              &nbsp;
              <button
                type="button"
                @click="pagNext"
                class="btn btn-sm btn-info roundec-circle"
              >Next</button>
            </template>
            <template v-else>
              <button
                type="button"
                @click="pagPrev"
                class="btn btn-sm btn-black roundec-circle"
                disabled
              >Prev</button>
              &nbsp;
              <button
                type="button"
                @click="pagNext"
                class="btn btn-sm btn-black roundec-circle"
                disabled
              >Next</button>
            </template>
          </div>
        </div>
      </div>
      <div v-else>
        <p class="text-center">Loading Table ...</p>
      </div>
      </div>
      <!-- FORM -->
    <hr class="style13">
      </div>
      
  </div>
</template>
<script>
import upload from '@/components/Single/UploadsNo.vue'
import jsontoexcel from '@/components/backup/convert/JsonToExcel.vue'
import axios from 'axios'
export default {
  components: {
    jsontoexcel,
    upload
  },
  data () {
    return {
      // style
      thbackground: 'initial',
      thcolor: 'asd',
      // Data datable
      datanya: [],
      vdata: {

      },
      klik:false,
      ready: false,
      search: '',
      pilih: { name: 'taufik', hobby: 'coding' },
      thnya: {},
      err: false,
      checkedItem: [],
      less: ['_id','id','no_hp','gambar','status','id_driver','id_mobil','nama','nama_mobil','no_plate','head','unit_head'],
      // modal
      modal: false,
      modalAction: 'preview',
      // pagination
      selected: 10,
      pagination: 1,
      temp1: 0,
      temp2: 10,
      orderBy: '',
      orderWith: true,
      // media queries javascript
      mdq: 'xlg',
      // kirim
      kirim: {},
      // form
      aksi: 'insert',
      formOn: false,
      updateOn: false
    }
  },
  methods: {
    prints(){
        this.$router.push('/driver/lembur/'+this.pilih.id)
    },
     simpans(){
       let fd = new FormData()
       fd.append('data', `update driver_lembur set status='3' where id='${this.pilih.id}'`)
       fd.append('database', ' infolay3_test')
       axios.post('https://infolayanans.space/api/mysql/auto.php', fd
       , {
           headers: {
           Authorization: localStorage.getItem('auth._token.local')
           }
       }).then(res => {
          this.$router.push('/driver')
       })
    },
    ambil (item, index) {
      window.scrollTo(0, 0)
      this.klik = true;
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
      console.log(item)
      if(item.head==this.$store.state.users.id){
            this.$router.push(`/driver/lembur/signature/head?id=${this.pilih.id}`)
      }else{
            this.$router.push(`/driver/lembur/signature?id=${this.pilih.id}`)
      }
    },
    clearInput () {
      this.formOn = true
      let keys = Object.keys(this.vdata)
      keys.forEach(key => {
        this.vdata[key] = ''
      })
    },
    refreshData () {
      let fd2 = new FormData()
        fd2.append('data', `SELECT  tb2.nama,tb2.posisi,tb1.head,tb1.unit_head,tb1.jenis_pekerjaan,tb1.jam_lembur,tb1.jam_lama,tb1.rincian_kerja,tb1.tanggal,tb1.status,tb1.id FROM driver_lembur tb1 LEFT JOIN tbuser tb2 ON tb1.id_user= tb2.id where tb1.unit_head='${this.$store.state.users.id}' OR tb1.head='${this.$store.state.users.id}' ORDER BY tb1.id_user ASC`) // if empty = *
      fd2.append('table', 'tbuser')
      fd2.append('database', ' infolay3_test')
      fd2.append('aksi', 'select')
      axios
        .post('https://infolayanans.space' + '/api/mysql/auto.php', fd2, {
          headers: {
            Authorization: localStorage.getItem('auth._token.local')
          }
        })
        .then(res => {
          console.log('mysql auto', res)
          setTimeout(() => {
            (function () {
              var thElm
              var startOffset
              Array.prototype.forEach.call(
                document.querySelectorAll('table th'),
                function (th) {
                  th.style.position = 'relative'
                  var grip = document.createElement('div')
                  grip.innerHTML = '&nbsp;'
                  grip.style.top = 0
                  grip.style.right = 0
                  grip.style.bottom = 0
                  grip.style.width = '5px'
                  grip.style.position = 'absolute'
                  grip.style.cursor = 'col-resize'
                  grip.addEventListener('mousedown', function (e) {
                    thElm = th
                    startOffset = th.offsetWidth - e.pageX
                  })
                  th.appendChild(grip)
                }
              )
              document.addEventListener('mousemove', function (e) {
                if (thElm) {
                  thElm.style.width = startOffset + e.pageX + 'px'
                }
              })
              document.addEventListener('mouseup', function () {
                thElm = undefined
              })
            })()
            this.datanya = res.data
            let keys = Object.keys(res.data[0])
            keys = this.$_.difference(keys, this.unless)
            this.thnya = keys
          }, 1000)
        })
    },
    //! ==================
    //! hapus dari sini
    //! =================
    scramble (teks) {
      let char = ''
      let hasil = ''
      for (var i = 0; i < teks.length; i++) {
        char = ''
        char = teks.charAt(i)
        if (char == 'a') {
          char = char.replace('a', 'x')
        } else if (char == 'b') {
          char = char.replace('b', 'v')
        } else if (char == 'c') {
          char = char.replace('c', 'u')
        } else if (char == 'd') {
          char = char.replace('d', 'w')
        } else if (char == 'e') {
          char = char.replace('e', 'y')
        } else if (char == 'f') {
          char = char.replace('f', 'z')
        } else if (char == 'g') {
          char = char.replace('g', 't')
        } else if (char == 'h') {
          char = char.replace('h', 's')
        } else if (char == 'i') {
          char = char.replace('i', 'r')
        } else if (char == 'j') {
          char = char.replace('j', 'q')
        } else if (char == 'k') {
          char = char.replace('k', 'p')
        } else if (char == 'l') {
          char = char.replace('l', 'o')
        } else if (char == 'm') {
          char = char.replace('m', 'n')
        } else if (char == 'z') {
          char = char.replace('z', 'f')
        } else if (char == 'y') {
          char = char.replace('y', 'e')
        } else if (char == 'x') {
          char = char.replace('x', 'a')
        } else if (char == 'w') {
          char = char.replace('w', 'd')
        } else if (char == 'v') {
          char = char.replace('v', 'b')
        } else if (char == 'u') {
          char = char.replace('u', 'c')
        } else if (char == 't') {
          char = char.replace('t', 'g')
        } else if (char == 's') {
          char = char.replace('s', 'h')
        } else if (char == 'r') {
          char = char.replace('r', 'i')
        } else if (char == 'q') {
          char = char.replace('q', 'j')
        } else if (char == 'p') {
          char = char.replace('p', 'k')
        } else if (char == 'o') {
          char = char.replace('o', 'l')
        } else if (char == 'n') {
          char = char.replace('n', 'm')
        } else if (char == '1') {
          char = char.replace('1', '0')
        } else if (char == '2') {
          char = char.replace('2', '8')
        } else if (char == '3') {
          char = char.replace('3', '9')
        } else if (char == '4') {
          char = char.replace('4', '7')
        } else if (char == '5') {
          char = char.replace('5', '6')
        } else if (char == '0') {
          char = char.replace('0', '1')
        } else if (char == '8') {
          char = char.replace('8', '2')
        } else if (char == '9') {
          char = char.replace('9', '3')
        } else if (char == '7') {
          char = char.replace('7', '4')
        } else if (char == '6') {
          char = char.replace('6', '5')
        } else if (char == ' ') {
          char = char.replace(' ', '_')
        } else if (char == '_') {
          char = char.replace('_', ' ')
        } else if (char == '*') {
          char = char.replace('*', '/')
        } else if (char == '/') {
          char = char.replace('/', '*')
        } else if (char == ',') {
          char = char.replace(',', '^')
        } else if (char == '^') {
          char = char.replace('^', ',')
        }
        hasil = hasil + char
      }
      return hasil
    },
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
    go (hasil) {
      console.log('uploaded')
    },
    edits () {
      let that = this
      setTimeout(() => {
        that.$nuxt.$emit('editTable1', obj)
      }, 1000)
    },
    modalKey (e) {
      if (e.key == 'Escape') {
        this.modal = false
      }
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
    // DATATABLE
    pagPrev () {
      this.pagination = this.pagination - 1
      if (this.pagination == 0) {
        this.pagination = 1
      }
      this.temp2 = this.pagination * this.selected
      this.temp1 = Math.ceil(this.temp2) - this.selected
    },
    pagNext () {
      this.pagination = this.pagination + 1
      if (this.pagination > this.bagi) {
        this.pagination = Math.round(this.bagi)
      }
      this.temp2 = this.pagination * this.selected
      this.temp1 = Math.ceil(this.temp2) - this.selected
    },
    sort (item) {
      this.orderBy = item
      this.orderWith = !this.orderWith
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
    //! hapus sampai sini
    //! =================
  },
  props: {
    unless: {
      type: Array,
      required: false,
      default: () => ['gone']
    },
    unlessForm: {
      type: Array,
      required: false,
      default: () => ['gone']
    },
    date: {
      type: Array,
      required: false,
      default: () => ['ditanyakan']
    }
  },
  watch: {
    modal () {
      if (this.modal) {
        document.addEventListener('keydown', this.modalKey)
      } else {
        document.removeEventListener('keydown', this.modalKey)
        document.removeEventListener('keydown', this.modalKey)
        document.removeEventListener('keydown', this.modalKey)
      }
    },
    datanya () {
      if (this.datanya.length > 0) {
        this.ready = true
      }
    },
    selected () {
      this.temp2 = this.pagination * this.selected
      this.temp1 = this.temp2 - this.selected
    },
    search () {
      this.pagination = 1
      this.temp2 = this.pagination * this.selected
      this.temp1 = this.temp2 - this.selected
    }
  },
  layout: 'driver',
  computed: {
    // MODAL
    pilihForm () {
      let data = this.pilih
      let keys = Object.keys(data)
      this.unlessForm.forEach(les => {
        delete data[les]
      })
      return data
    },
    // DATATABLE
    bagi () {
      let data = this.datanya
      data = data.length / 10
      console.log(data)
      return data
    },
    th () {
      let data = this.datanya
      let keys = Object.keys(data[0])
      keys = this.$_.difference(keys, this.unless)
      return keys
    },
    td () {
      let that = this
      let data = this.datanya
      //! order fungsi
      if (this.orderBy.length > 0) {
        let ordernya = this.orderWith ? 'asc' : 'desc'
        data = this.$_.orderBy(data, [this.orderBy], [ordernya])
      }
      //! search fungsi
      let keys = this.thnya
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
      data = data.map(e => {
        let obj = {}
        let kunci = Object.keys(e)
        kunci = that.$_.difference(kunci, that.unless)
        kunci.forEach((a, index) => {
          if (kunci.find(e => e == that.date[index])) {
          } else {
            // obj[a] = 'tanggal'
          }

          obj[a] = e[a]
          // typeof e[a] != "string"
          //   ? e[a]
          //   : new Date(e[a]) !== "Invalid Date" && !isNaN(new Date(e[a]))
          //   ? that.isDate(e[a])
          //     ? that.format(e[a])
          //     : e[a]
          //   : e[a];
        })
        return obj
      })
      data = data.slice(this.temp1, this.temp2)
      return data
    }
  },
  mounted () {
    let that = this
    
    that.mediaQueries()
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        that.mediaQueries()
      })
    })
    this.refreshData()
  }
}; </script><style scoped>
@header_background_color: #333;
@header_text_color: #FDFDFD;
@alternate_row_background_color: #DDD;

@table_width: 750px;
@table_body_height: 300px;
@column_one_width: 200px;
@column_two_width: 200px;
@column_three_width: 350px;

.fixed_headers {
  width: @table_width;
  table-layout: fixed;
  border-collapse: collapse;

  th {
    text-decoration: underline;
  }
  th,
  td {
    padding: 5px;
    text-align: left;
  }

  td:nth-child(1),
  th:nth-child(1) {
    min-width: @column_one_width;
  }
  td:nth-child(2),
  th:nth-child(2) {
    min-width: @column_two_width;
  }
  td:nth-child(3),
  th:nth-child(3) {
    width: @column_three_width;
  }

  thead {
    background-color: @header_background_color;
    color: @header_text_color;
    tr {
      display: block;
      position: relative;
    }
  }
  tbody {
    display: block;
    overflow: auto;
    width: 100%;
    height: @table_body_height;
    tr:nth-child(even) {
      background-color: @alternate_row_background_color;
    }
  }
}

.old_ie_wrapper {
  height: @table_body_height;
  width: @table_width;
  overflow-x: hidden;
  overflow-y: auto;
  tbody {
    height: auto;
  }
}
.cl {
  color: rgba(46, 44, 44, 0.404);
}
</style>
