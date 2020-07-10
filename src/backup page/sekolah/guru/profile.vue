<template>
  <div class="font-times">
    <!-- FORM -->
      
      <p class="text-center text-uppercase pb-3">Data {{$store.state.users.nama_guru}}</p>
      <div class="tips float-right">
          <button type="button" @click="print1" v-show="pilih.name!='taufik'" class="btn btn-sm btn-outline-danger">
            <span class="typcn typcn-document-text"></span>
          </button>
          <span class="tipstextB">Print Satu</span>
      </div>
      <br>
      <div class="row">
        <div class="offset-sm-2 col-sm-8">
     
    <form
      action
      @submit.prevent="aksi == 'insert' ? insert() : aksi == 'update' ? update() : remove() "
    >
      <!-- FORM --> 
          <tr>
              <td class='text-uppercase text-sm'>id_guru_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="id_guru_"
                    id="id_guru"
                    name="id_guru"
                    class="form-control form-control-sm"
                    v-model="vdata.id_guru"
                  
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>nama_guru_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="nama_guru_"
                    id="nama_guru"
                    name="nama_guru"
                    class="form-control form-control-sm"
                    v-model="vdata.nama_guru"
                  
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>nip_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="nip_"
                    id="nip"
                    name="nip"
                    class="form-control form-control-sm"
                    v-model="vdata.nip"
                  
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>kota_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="kota_"
                    id="kota"
                    name="kota"
                    class="form-control form-control-sm"
                    v-model="vdata.kota"
                  
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>kelamin_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="kelamin_"
                    id="kelamin"
                    name="kelamin"
                    class="form-control form-control-sm"
                    v-model="vdata.kelamin"
                  
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>agama_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="agama_"
                    id="agama"
                    name="agama"
                    class="form-control form-control-sm"
                    v-model="vdata.agama"
                  
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>alamat_guru_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="alamat_guru_"
                    id="alamat_guru"
                    name="alamat_guru"
                    class="form-control form-control-sm"
                    v-model="vdata.alamat_guru"
                  
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>pendidikan_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="pendidikan_"
                    id="pendidikan"
                    name="pendidikan"
                    class="form-control form-control-sm"
                    v-model="vdata.pendidikan"
                  
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>golongan_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="golongan_"
                    id="golongan"
                    name="golongan"
                    class="form-control form-control-sm"
                    v-model="vdata.golongan"
                  
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>jabatan_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                 <div class="sm-form ">
                     <label for="jabatan">Jabatan</label>
                     <input type="text" id="jabatan" name="jabatan" class="form-control form-control-sm" placeholder="jabatan" v-model="vdata.jabatan" >
                 </div>
              </td>
            </tr>
            <br/>
             
          <tr>
              <td class='text-uppercase text-sm'>gambar_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                  <img :src="`https://infolayanans.space/${vdata.gambar}`" class="kinoLightBox img-fluid rounded-top z-depth-2" style="height:100px;" alt="top">
                  
                    <input type="text" id="gambar" name="gambar" class="form-control form-control-sm" placeholder="gambar" v-model="vdata.gambar" >
                   <input type="file" name="file" @change="compress($event)" />
                        <br />
                        <button class="btn btn-sm btn-primary" :disabled='!ready' @click.prevent="inputfile"><span class="typcn typcn-image"></span> Simpan</button>
              </td>
            </tr>
            <!-- FORM -->
      <!-- SUBMIT -->
      <br />
      <div class="text-center">
      <button
        type="submit"
        class="btn btn-sm btn-outline-primary ml-2  font-times text-uppercase"
      ><span class="typcn typcn-edit"></span> {{aksi == 'insert' ? 'insert' : aksi == 'update' ? 'update' : 'remove'}}</button>
      </div>
      <!-- SUBMIT -->
    </form>
     <hr class="style13" />
     <div class="row">
       <div class="col-6">
       </div>
       <div class="col-2 text-center">
       </div>
       <div class="col-4 text-center">
        </div>
     </div>
      </div>
      </div>
      <br>
      <hr class="style2">
      <br>
  </div>
</template>
<script>
var id = require("date-fns/locale/id");
import downloadExcel from 'vue-json-excel'
import upload from "@/components/Single/UploadsNo.vue";
import axios from "axios";
export default {
  components: {
    upload,
    downloadExcel
  },
  layout:"guru",
  data() {
    return {
      // style
        file: "",
        imgs: [],
        ready:false,
      thbackground: "initial",
      thcolor: "asd",
      // Data datable
      datanya: [],
      vdata: {
        jabatan:[],
      },
      search: "",
      pilih: { name: "taufik", hobby: "coding" },
      thnya: {},
      err: false,
      checkedItem:[],
      less: [,'_id'],
      // modal
      modal: false,
      modalAction: "preview",
      // pagination
      selected: 10,
      pagination: 1,
      temp1: 0,
      temp2: 10,
      orderBy: "",
      orderWith: true,
      // media queries javascript
      mdq: "xlg",
      //kirim
      kirim: {},
      //form
      aksi: "update",
      formOn: false,
      updateOn: false
    };
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
            this.file = hasil[0]
            this.ready=true
        }, 1000);
        //   this.$emit('upload', hasil)
        }
    }
    },
    inputfile() {
    let fd = new FormData();
    fd.append("file", this.file);
    fd.append("id", this.$store.state.users.id_guru);
    axios
        .post("https://infolayanans.space/api/mysql/upload.php", fd, {
        headers: {
            "content-type": "multipart/form-data"
        }
        })
        .then(res => {
        console.log(res); // get /api/gambar/url.jpg
        this.vdata.gambar = res.data
        this.refreshData()

        });
    },
      insert(){ let fd = new FormData();
      
      fd.append("data", `Insert into sekolah_data_guru (nama_guru,nip,kota,kelamin,agama,alamat_guru,pendidikan,golongan,jabatan,gambar) VALUES ('${this.vdata.nama_guru}','${this.vdata.nip}','${this.vdata.kota}','${this.vdata.kelamin}','${this.vdata.agama}','${this.vdata.alamat_guru}','${this.vdata.pendidikan}','${this.vdata.golongan}','${this.vdata.jabatan}','${this.vdata.gambar}')`);
      fd.append("database", "infolay3_test");
      
      axios
        .post("https://infolayanans.space"+"/api/mysql/auto.php", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          
          console.log(res);
          alert('Simpan Data Berhasil!')
          this.refreshData()
        }).catch(err => {
            
            this.refreshData()
          });
    },update(){ let fd = new FormData();
      
      fd.append("data", `UPDATE sekolah_data_guru SET nama_guru='${this.vdata.nama_guru}',nip='${this.vdata.nip}',kota='${this.vdata.kota}',kelamin='${this.vdata.kelamin}',agama='${this.vdata.agama}',alamat_guru='${this.vdata.alamat_guru}',pendidikan='${this.vdata.pendidikan}',golongan='${this.vdata.golongan}',jabatan='${this.vdata.jabatan}',gambar='${this.vdata.gambar}' Where id_guru = '${this.vdata.id_guru}'`);
      fd.append("database", "infolay3_test");
      
      axios
        .post("https://infolayanans.space"+"/api/mysql/auto.php", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          
          console.log(res);
          alert('Update Data Berhasil!')
          let fd2 = new FormData()
          fd2.append('data', `select * from sekolah_data_guru where id_guru='${this.$store.state.users.id_guru}'`)//database setting di server
          fd2.append('database','infolay3_test')
          axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
          , {
              headers: {
              Authorization: localStorage.getItem('auth._token.local')
              }
          }).then(res => {
              console.log(res)
              this.$store.state.users=res.data[0]
              this.$store.dispatch('logout')
              this.$forceUpdate()
          })
          this.refreshData()
        }).catch(err => {
           
            this.refreshData()
          });
    },remove(){ let fd = new FormData();
      
      fd.append("data", `DELETE FROM sekolah_data_guru WHERE  id_guru =  '${this.vdata.id_guru}'`);
      fd.append("database", "infolay3_test");
      if (confirm('Yakin dihapus?')) {
      
      axios
        .post("https://infolayanans.space"+"/api/mysql/auto.php", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
         
          console.log(res);
          alert('Delete Data Berhasil!')
          let keys = Object.keys(this.vdata)
          keys.forEach(key => {
            this.vdata[key] = ''
          })
          this.refreshData()
        }).catch(err => {
            
            let keys = Object.keys(this.vdata)
          keys.forEach(key => {
            this.vdata[key] = ''
          })
            this.refreshData()
          });
          }
    
      }
      ,ambil(item, index) {
      window.scrollTo(0, 0);
      let that = this;
      this.updateOn = true;
      this.formOn = true;
      let clone = this.$_.clone(item);
      // clone["TGL_LHR"] = this.$datefns.format(
      //   new Date(clone["TGL_LHR"]),
      //   "YYYY-MM-dd"
      // );
      console.log(clone);
      this.vdata = clone;
      this.pilih = item;
    },
     clearInput() {
      this.formOn = true;
      let keys = Object.keys(this.vdata);
      keys.forEach(key => {
        this.vdata[key] = "";
      });
    },
     refreshData() {
     
    },
    //!==================
    //! hapus dari sini
    //! =================
     scramble(teks) {
      let char = "";
      let hasil = "";
      for (var i = 0; i < teks.length; i++) {
        char = "";
        char = teks.charAt(i);
        if (char == "a") {
          char = char.replace("a", "x");
        } else if (char == "b") {
          char = char.replace("b", "v");
        } else if (char == "c") {
          char = char.replace("c", "u");
        } else if (char == "d") {
          char = char.replace("d", "w");
        } else if (char == "e") {
          char = char.replace("e", "y");
        } else if (char == "f") {
          char = char.replace("f", "z");
        } else if (char == "g") {
          char = char.replace("g", "t");
        } else if (char == "h") {
          char = char.replace("h", "s");
        } else if (char == "i") {
          char = char.replace("i", "r");
        } else if (char == "j") {
          char = char.replace("j", "q");
        } else if (char == "k") {
          char = char.replace("k", "p");
        } else if (char == "l") {
          char = char.replace("l", "o");
        } else if (char == "m") {
          char = char.replace("m", "n");
        } else if (char == "z") {
          char = char.replace("z", "f");
        } else if (char == "y") {
          char = char.replace("y", "e");
        } else if (char == "x") {
          char = char.replace("x", "a");
        } else if (char == "w") {
          char = char.replace("w", "d");
        } else if (char == "v") {
          char = char.replace("v", "b");
        } else if (char == "u") {
          char = char.replace("u", "c");
        } else if (char == "t") {
          char = char.replace("t", "g");
        } else if (char == "s") {
          char = char.replace("s", "h");
        } else if (char == "r") {
          char = char.replace("r", "i");
        } else if (char == "q") {
          char = char.replace("q", "j");
        } else if (char == "p") {
          char = char.replace("p", "k");
        } else if (char == "o") {
          char = char.replace("o", "l");
        } else if (char == "n") {
          char = char.replace("n", "m");
        } else if (char == "1") {
          char = char.replace("1", "0");
        } else if (char == "2") {
          char = char.replace("2", "8");
        } else if (char == "3") {
          char = char.replace("3", "9");
        } else if (char == "4") {
          char = char.replace("4", "7");
        } else if (char == "5") {
          char = char.replace("5", "6");
        } else if (char == "0") {
          char = char.replace("0", "1");
        } else if (char == "8") {
          char = char.replace("8", "2");
        } else if (char == "9") {
          char = char.replace("9", "3");
        } else if (char == "7") {
          char = char.replace("7", "4");
        } else if (char == "6") {
          char = char.replace("6", "5");
        } else if (char == " ") {
          char = char.replace(" ", "_");
        } else if (char == "_") {
          char = char.replace("_", " ");
        } else if (char == "*") {
          char = char.replace("*", "/");
        } else if (char == "/") {
          char = char.replace("/", "*");
        } else if (char == ",") {
          char = char.replace(",", "^");
        } else if (char == "^") {
          char = char.replace("^", ",");
        }
        hasil = hasil + char;
      }
      return hasil;
    },
    checkedAll() {
      console.log(this.checkedItem);
    },
    print1() {
      this.$router.push(`/laporan/perdata?less=${this.less.toString()}`);
      this.$store.state.print2=[]
      this.$store.state.print2.push(this.pilih)
      alert("print satu");
    },
    print2() {
      this.$router.push(`/laporan/print?less=${this.less.toString()}`);
      this.$store.state.print2 = this.datanya
      alert("print banyak");
    },
     linknya(hasil) {
      console.log('link', hasil)
      this.vdata.gambar = hasil
      this.$forceUpdate()
    },
    go(hasil){
      console.log('uploaded')
    },
    edits() {
      let that = this;
      setTimeout(() => {
        that.$nuxt.$emit("editTable1", obj);
      }, 1000);
    },
    modalKey(e) {
      if (e.key == "Escape") {
        this.modal = false;
      }
    },
    isDate(value) {
      var dateFormat;
      if (toString.call(value) === "[object Date]") {
        return true;
      }
      if (typeof value.replace === "function") {
        value.replace(/^s+|s+$/gm, "");
      }
      dateFormat = /(^d{1,4}[.|\/|-]d{1,2}[.|\/|-]d{1,4})(s*(?:0?[1-9]:[0-5]|1(?=[012])d:[0-5])ds*[ap]m)?$/;
      return dateFormat.test(value);
    },
    // MODAL
    distance() {
      return this.$datefns.distanceInWords(
        new Date("2018-12-25T03:21:12.941Z"),
        new Date(),
        {
          locale: id,
          includeSeconds: true
        }
      );
      return result;
    },
    format(date) {
      return this.$datefns.format(date, "DD MMMM YYYY", {
        locale: id
      });
    },
    distanceToNow() {
      return this.$datefns.distanceInWordsToNow(
        new Date(2015, 0, 1, 0, 0, 15),
        {
          locale: id,
          includeSeconds: true
        }
      );
      //=> "3 days ago"
    },
    // DATATABLE
   pagPrev() {
      this.pagination = this.pagination - 1;
      if (this.pagination == 0) {
        this.pagination = 1;
      }
      this.temp2 = this.pagination * this.selected;
      this.temp1 = Math.ceil(this.temp2) - this.selected;
    },
    pagNext() {
      this.pagination = this.pagination + 1;
      if (this.pagination > (this.bagi+1)) {
        this.pagination = Math.round(this.bagi);
      }
      this.temp2 = this.pagination * this.selected;
      this.temp1 = Math.ceil(this.temp2) - this.selected;
    },
    sort(item) {
      this.orderBy = item;
      this.orderWith = !this.orderWith;
    },
    mediaQueries() {
      this.mdq =
        window.innerWidth <= 576
          ? "sm"
          : window.innerWidth <= 768
          ? "md"
          : window.innerWidth <= 992
          ? "lg"
          : "xl";
    }
    //!==================
    //! hapus sampai sini
    //! =================
  },props: {
    unless: {
      type: Array,
      required: false,
      default: () => ["gone"]
    },
    unlessForm: {
      type: Array,
      required: false,
      default: () => ["gone"]
    },
    date: {
      type: Array,
      required: false,
      default: () => ["ditanyakan"]
    }
  },
  watch: {
    modal() {
      if (this.modal) {
        document.addEventListener("keydown", this.modalKey);
      } else {
        document.removeEventListener("keydown", this.modalKey);
        document.removeEventListener("keydown", this.modalKey);
        document.removeEventListener("keydown", this.modalKey);
      }
    },
    datanya() {
      if (this.datanya.length > 0) {
        this.ready = true;
      }
    },
    selected() {
      this.temp2 = this.pagination * this.selected;
      this.temp1 = this.temp2 - this.selected;
    },
    search() {
      this.pagination = 1;
      this.temp2 = this.pagination * this.selected;
      this.temp1 = this.temp2 - this.selected;
    }
  }, computed: {
    // MODAL
    pilihForm() {
      let data = this.pilih;
      let keys = Object.keys(data);
      this.unlessForm.forEach(les => {
        delete data[les];
      });
      return data;
    },
    // DATATABLE
    bagi() {
      let data = this.datanya;
      data = data.length / 10;
      console.log(data);
      return data;
    },
    th() {
      let data = this.datanya;
      let keys = Object.keys(data[0]);
      keys = this.$_.difference(keys, this.unless);
      return keys;
    },
    td() {
      let that = this;
      let data = this.datanya;
      //! order fungsi
      if (this.orderBy.length > 0) {
        let ordernya = this.orderWith ? "asc" : "desc";
        data = this.$_.orderBy(data, [this.orderBy], [ordernya]);
      }
      //! search fungsi
      let keys = this.thnya;
      data = data.filter((v, i, a) => {
        let hasil = false;
        keys.filter(key => {
          if (typeof v[key] == "string") {
            if (v[key].toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
              hasil = true;
            }
          } else {
            if (v[key] != null) {
              if (v[key].toString().indexOf(this.search) != -1) {
                hasil = true;
              }
            } else {
            }
          }
        });
        if (hasil) return v;
      });
      data = data.map(e => {
        let obj = {};
        let kunci = Object.keys(e);
        kunci = that.$_.difference(kunci, that.unless);
        kunci.forEach((a, index) => {
          if (kunci.find(e => e == that.date[index])) {
          } else {
            // obj[a] = 'tanggal'
          }

          obj[a] = e[a];
          // typeof e[a] != "string"
          //   ? e[a]
          //   : new Date(e[a]) !== "Invalid Date" && !isNaN(new Date(e[a]))
          //   ? that.isDate(e[a])
          //     ? that.format(e[a])
          //     : e[a]
          //   : e[a];
        });
        return obj;
      });
      data = data.slice(this.temp1, this.temp2);
      return data;
    }
  },mounted() {
      let fd = new FormData()
      fd.append('data', `select * from sekolah_data_guru where id_guru='${this.$store.state.users.id_guru}'`)//database setting di server
      fd.append('database','infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          console.log('profile',res)
          this.vdata = res.data[0]
          this.$forceUpdate()
      })
    let that = this;
    
    that.mediaQueries();
    this.$nextTick(() => {
      window.addEventListener("resize", () => {
        that.mediaQueries();
      });
    });
    this.refreshData();
    
  }
};</script><style scoped>
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