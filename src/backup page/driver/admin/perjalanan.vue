<template>
  <div class="font-times">
    <!-- FORM -->
      
      <p class="text-center text-uppercase pb-3">driver_perjalanan</p>
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
              <td class='text-uppercase text-sm'>id_</td>
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
                 disabled
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>id_driver_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="id_driver_"
                    id="id_driver"
                    name="id_driver"
                    class="form-control form-control-sm"
                    v-model="vdata.id_driver"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>id_penumpang_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="id_penumpang_"
                    id="id_penumpang"
                    name="id_penumpang"
                    class="form-control form-control-sm"
                    v-model="vdata.id_penumpang"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>id_mobil_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="id_mobil_"
                    id="id_mobil"
                    name="id_mobil"
                    class="form-control form-control-sm"
                    v-model="vdata.id_mobil"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>ids_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="ids_"
                    id="ids"
                    name="ids"
                    class="form-control form-control-sm"
                    v-model="vdata.ids"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>pilih_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="pilih_"
                    id="pilih"
                    name="pilih"
                    class="form-control form-control-sm"
                    v-model="vdata.pilih"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>kendaraan_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="kendaraan_"
                    id="kendaraan"
                    name="kendaraan"
                    class="form-control form-control-sm"
                    v-model="vdata.kendaraan"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>tujuan_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="tujuan_"
                    id="tujuan"
                    name="tujuan"
                    class="form-control form-control-sm"
                    v-model="vdata.tujuan"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>keperluan_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="keperluan_"
                    id="keperluan"
                    name="keperluan"
                    class="form-control form-control-sm"
                    v-model="vdata.keperluan"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>lokasi_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="lokasi_"
                    id="lokasi"
                    name="lokasi"
                    class="form-control form-control-sm"
                    v-model="vdata.lokasi"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>penumpang_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="penumpang_"
                    id="penumpang"
                    name="penumpang"
                    class="form-control form-control-sm"
                    v-model="vdata.penumpang"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>unit_kerja_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="unit_kerja_"
                    id="unit_kerja"
                    name="unit_kerja"
                    class="form-control form-control-sm"
                    v-model="vdata.unit_kerja"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>status_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="status_"
                    id="status"
                    name="status"
                    class="form-control form-control-sm"
                    v-model="vdata.status"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>jam_update_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="jam_update_"
                    id="jam_update"
                    name="jam_update"
                    class="form-control form-control-sm"
                    v-model="vdata.jam_update"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>jam_berangkat_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="jam_berangkat_"
                    id="jam_berangkat"
                    name="jam_berangkat"
                    class="form-control form-control-sm"
                    v-model="vdata.jam_berangkat"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>tanggal_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="tanggal_"
                    id="tanggal"
                    name="tanggal"
                    class="form-control form-control-sm"
                    v-model="vdata.tanggal"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>ttd_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="ttd_"
                    id="ttd"
                    name="ttd"
                    class="form-control form-control-sm"
                    v-model="vdata.ttd"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>unit_head_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="unit_head_"
                    id="unit_head"
                    name="unit_head"
                    class="form-control form-control-sm"
                    v-model="vdata.unit_head"
                 
              
                  >
                </div>
              </td>
            </tr>
             
          <tr>
              <td class='text-uppercase text-sm'>unit_heads_</td>
              <td>&nbsp;:&nbsp;</td>
              <td style="width:90%;padding-bottom:5px;">
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder="unit_heads_"
                    id="unit_heads"
                    name="unit_heads"
                    class="form-control form-control-sm"
                    v-model="vdata.unit_heads"
                 
              
                  >
                </div>
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
        <button type="button" @click="aksi='insert';clearInput()" class="text-uppercase font-times btn btn-sm btn-success"><span class="typcn typcn-plus"></span>Insert</button> &nbsp;
        <button type="button" @click="aksi='update'" class="text-uppercase font-times btn btn-sm btn-warning"><span class="typcn typcn-edit"></span>Update</button>&nbsp;
        <button type="button" @click="aksi='remove'" class="text-uppercase font-times btn btn-sm btn-danger"><span class="typcn typcn-delete"></span>Delete</button>&nbsp;
       </div>
       <div class="col-2 text-center">
       </div>
       <div class="col-4 text-center">
        </div>
     </div>
      </div>
      </div>
          <hr class="style16">

    
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
        <div class="w-full sm:w-1/3">
          <div class="row">
            <div class="col-sm-3 order-2">
              <a :href="`https://infolayanans.space/api/mysql/excel.php?data=select id,id_driver,id_penumpang,id_mobil,ids,pilih,kendaraan,tujuan,keperluan,lokasi,penumpang,unit_kerja,status,jam_update,jam_berangkat,tanggal,ttd,unit_head,unit_heads from driver_perjalanan&database=infolay3_test`" class="btn-lg btn-success" ><span class="typcn typcn-chart-bar"></span></a>
              <download-excel
                :data='td'>
                <button type='button'  class='btn btn-sm btn-success  '><span class='typcn typcn-chart-bar'></span>Excel</button>
              </download-excel>
            </div>
            <div class="col-sm-3 order-3">
              <div class="tips">
                  <button type="button" @click="print2" class="btn btn-sm btn-outline-danger">
                    <span class="typcn typcn-document-text"></span>
                  </button>
                  <span class="tipstextB">Print Laporan</span>
              </div>
            </div>
            <div class="col-sm-4 order-1">
              <select class="form-control" style="width:80px" v-model="selected">
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
                <option :value="1000000">Semua</option>
              </select>
            </div>
          </div>
        </div>
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
            class="table-print table-sm table-bordered table-striped table-hover table-print border-black"
            style=" overflow-x: scroll;
    overflow-y: hidden;
    height: 80px;
    white-space:nowrap"
          >
            <!-- TABLE STYLE -->
            <thead class="mdb-color" :style="{background:thbackground}">
              <tr class="text-white" style="overflow:scroll;color:white;">
                 <th class :style="{color:thcolor}">#</th>
                 
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
                    {{item}}
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
                 
                <td>{{(index3+temp1)+1}}</td>
                <no-ssr>
                  <v-touch
                    tag="td"
                    v-on:tap="ambil(item,index3);modal=true;aksi='update'"
                    class="cursor-pointer"
                   
                    v-for="(item2, indexs) in thnya"
                    :key="indexs+'th2'"
                    v-html="item[item2]"
                    v-show="!less.includes(item2)"
                  ></v-touch>
                   <!-- item[item2].split('-').length>2 && item[item2].indexOf('20')!=-1 ? format(item[item2]):item[item2]  -->
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
  layout:"admin",
  data() {
    return {
      // style
      thbackground: "initial",
      thcolor: "asd",
      // Data datable
      datanya: [],
      vdata: {
        
      },
      ready: false,
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
      aksi: "insert",
      formOn: false,
      updateOn: false
    };
  },
  methods: {
    
      insert(){ let fd = new FormData();
      
      fd.append("data", `Insert into driver_perjalanan (id_driver,id_penumpang,id_mobil,ids,pilih,kendaraan,tujuan,keperluan,lokasi,penumpang,unit_kerja,status,jam_update,jam_berangkat,tanggal,ttd,unit_head,unit_heads) VALUES ('${this.vdata.id_driver}','${this.vdata.id_penumpang}','${this.vdata.id_mobil}','${this.vdata.ids}','${this.vdata.pilih}','${this.vdata.kendaraan}','${this.vdata.tujuan}','${this.vdata.keperluan}','${this.vdata.lokasi}','${this.vdata.penumpang}','${this.vdata.unit_kerja}','${this.vdata.status}','${this.vdata.jam_update}','${this.vdata.jam_berangkat}','${this.vdata.tanggal}','${this.vdata.ttd}','${this.vdata.unit_head}','${this.vdata.unit_heads}')`);
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
      
      fd.append("data", `UPDATE driver_perjalanan SET id_driver='${this.vdata.id_driver}',id_penumpang='${this.vdata.id_penumpang}',id_mobil='${this.vdata.id_mobil}',ids='${this.vdata.ids}',pilih='${this.vdata.pilih}',kendaraan='${this.vdata.kendaraan}',tujuan='${this.vdata.tujuan}',keperluan='${this.vdata.keperluan}',lokasi='${this.vdata.lokasi}',penumpang='${this.vdata.penumpang}',unit_kerja='${this.vdata.unit_kerja}',status='${this.vdata.status}',jam_update='${this.vdata.jam_update}',jam_berangkat='${this.vdata.jam_berangkat}',tanggal='${this.vdata.tanggal}',ttd='${this.vdata.ttd}',unit_head='${this.vdata.unit_head}',unit_heads='${this.vdata.unit_heads}' Where id = '${this.vdata.id}'`);
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
          this.refreshData()
        }).catch(err => {
           
            this.refreshData()
          });
    },remove(){ let fd = new FormData();
      
      fd.append("data", `DELETE FROM driver_perjalanan WHERE  id =  '${this.vdata.id}'`);
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
      let fd2 = new FormData();
      fd2.append("data", "select id,id_driver,id_penumpang,id_mobil,ids,pilih,kendaraan,tujuan,keperluan,lokasi,penumpang,unit_kerja,status,jam_update,jam_berangkat,tanggal,ttd,unit_head,unit_heads from driver_perjalanan"); //if empty = *
      fd2.append('table', 'driver_perjalanan')
      fd2.append('database', "infolay3_test")
      fd2.append('aksi', 'select')
      axios
        .post("https://infolayanans.space" + "/api/mysql/auto.php", fd2, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          console.log("mysql auto", res);
          setTimeout(() => {
            (function() {
              var thElm;
              var startOffset;
              Array.prototype.forEach.call(
                document.querySelectorAll("table th"),
                function(th) {
                  th.style.position = "relative";
                  var grip = document.createElement("div");
                  grip.innerHTML = "&nbsp;";
                  grip.style.top = 0;
                  grip.style.right = 0;
                  grip.style.bottom = 0;
                  grip.style.width = "5px";
                  grip.style.position = "absolute";
                  grip.style.cursor = "col-resize";
                  grip.addEventListener("mousedown", function(e) {
                    thElm = th;
                    startOffset = th.offsetWidth - e.pageX;
                  });
                  th.appendChild(grip);
                }
              );
              document.addEventListener("mousemove", function(e) {
                if (thElm) {
                  thElm.style.width = startOffset + e.pageX + "px";
                }
              });
              document.addEventListener("mouseup", function() {
                thElm = undefined;
              });
            })();
            this.datanya = res.data;
            let keys = Object.keys(res.data[0]);
            keys = this.$_.difference(keys, this.unless);
            this.thnya = keys;
          }, 1000);
        });
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
      this.$store.state.print2 = this.td
      alert("print banyak");
    },
     linknya(hasil) {
      console.log('link', hasil)
      this.vdata.Gambars = hasil
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