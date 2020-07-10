<template>
  <div class="font-times">
    <!-- FORM -->
      <p class="text-center text-uppercase pb-1 font-times font-bold">sdd_laporan</p>
      <div class="row">
        <div class="offset-sm-2 col-sm-8">
    <form
      action
      @submit.prevent="aksi == 'insert' ? insert() : aksi == 'update' ? update() : remove() "
    >
      <!-- FORM --> 
     <p class="d-none">ID LAPORAN : </p>
       <div class="sm-form d-none">
            <input
            type="text"
            placeholder="id_laporan"
            id="id_laporan"
            name="id_laporan"
            class="form-control form-control-sm"
            v-model="vdata.id_laporan"
              disabled
            >
        </div>
         <br><p>Jenis Pelaporan : </p>
        <select class='form-control' required v-model="vdata.type">
            <option>INCIDENT</option>
            <option>REQUEST</option>
        </select>
        <div class="d-none">
         <br><p>Wilayah : </p>
         <div class="sm-form">
                <input
                type="text"
                placeholder="wilayah"
                id="wilayah"
                name="wilayah"
                class="form-control form-control-sm"
                v-model="vdata.wilayah"
                >
            </div>
        </div>
            
         <br><p>Cabang : </p>
           <select class='form-control' v-model="vdata.cabang">
                  <option v-for="(item, index) in cabangs" :key="index+'cabang'">{{item.cabang}}</option>
            </select>
         <br><p>Nama Requestor : </p>
          <div class="sm-form">
                  <input
                    type="text"
                    placeholder="nama requestor ..."
                    id="nama_requestor"
                    name="nama_requestor"
                    class="form-control form-control-sm"
                    v-model="vdata.nama_requestor"
              required
                  >
        </div>
         <br><p>Deskripsi request : </p>
        <div class="sm-form">
            <textarea
            type="text"
            id="deskripsi"
            name="deskripsi"
            rows="2"
            placeholder="deskripsi request..."
            class="form-control md-textarea"
            v-model="vdata.deksripsi_request"
            >{{vdata.deksripsi_request}}</textarea>
        </div>
         <br><p>Tanggal Request : </p>
         <div class="sm-form">
            <input
            type="date"
            placeholder="tanggal_request"
            id="tanggal_request"
            name="tanggal_request"
            class="form-control form-control-sm"
            v-model="vdata.tanggal_request"
                required
            >
        </div>
         <br><p>Waktu Request : </p>
           <div class="sm-form">
                <input
                type="time"
                placeholder="waktu_request"
                id="waktu_request"
                name="waktu_request"
                class="form-control form-control-sm"
                v-model="vdata.waktu_request"
                required
                >
            </div>
         <br><p>Waktu Mulai Mengerjakan : </p>
         <div class="sm-form">
                  <input
                    type="time"
                    placeholder="waktu_mulai_pengerjaan"
                    id="waktu_mulai_pengerjaan"
                    name="waktu_mulai_pengerjaan"
                    class="form-control form-control-sm"
                    v-model="vdata.waktu_mulai_pengerjaan"
                     required
                  >
                </div>
         <br><p>Severity Level : </p>
         <select class='form-control' required v-model="vdata.severity_level">
            <option>P4</option>
            <option>P3</option>
            <option>P2</option>
            <option>P1</option>
         </select>
         <br><p>Tanggal Penyelesaian : </p>
          <div class="sm-form">
                  <input
                    type="date"
                    placeholder="tanggal_penyelesaian"
                    id="tanggal_penyelesaian"
                    name="tanggal_penyelesaian"
                    class="form-control form-control-sm"
                    v-model="vdata.tanggal_penyelesaian"
              required
                  >
            </div>
             <br><p>Waktu Penyelesaian : </p>
         <div class="sm-form">
                  <input
                    type="time"
                    placeholder="waktu_penyelesaian"
                    id="waktu_penyelesaian"
                    name="waktu_penyelesaian"
                    class="form-control form-control-sm"
                    v-model="vdata.waktu_penyelesaian"
                    @input="kalkulasi"
                     required
                  >
                </div>
         <br><p>Sifat Problem : </p>
         <select class='form-control' required v-model="vdata.sifat_problem">
         <option>Software</option>
         <option>Hardware</option>
         <option>Jaringan</option>
         <option>Pinpad</option>
         <option>Printer</option>
         <option>Virus</option>
         <option>Windows</option>
         <option>Openbooth</option>
         </select>
         <div class="d-none">
         <br><p>Technical Support : </p>
            <div class="sm-form">
                  <input
                    type="text"
                    placeholder="technical support ..."
                    id="technical_support"
                    name="technical_support"
                    class="form-control form-control-sm"
                    v-model="vdata.technical_support"
                  >
            </div>
         </div>
         <br><p>Dekskripsi support : </p>
            <div class="sm-form">
            <textarea
            type="text"
            id="deskripsi_support"
            name="deskripsi_support"
            rows="2"
            placeholder="deskripsi_support..."
            class="form-control md-textarea"
            v-model="vdata.deskripsi_support"
            >{{vdata.deskripsi_support}}</textarea>
            </div>
         <br><p>Durasi Jam : </p>
             <div class="sm-form">
                  <input
                    type="text"
                    placeholder="durasi jam..."
                    id="durasi_jam"
                    name="durasi_jam"
                    class="form-control form-control-sm"
                    v-model="vdata.durasi_jam"
              required
                  >
            </div>
         <br><p>Status Akhir : </p>
            <select class='form-control' required v-model="vdata.status_akhir">
                <option>SELESAI</option>
                <option>TERTUNDA</option>
            <option>BELUM SELESAI</option>
            </select>
            <!-- FORM -->
      <!-- SUBMIT -->
      <br />
      <div class="text-center">
      <button
        type="submit"
        class="btn btn-sm btn-outline-primary ml-2  font-times text-uppercase"
      ><span class="typcn typcn-edit"></span> {{aksi == 'insert' ? 'Simpan' : aksi == 'update' ? 'update' : 'remove'}}</button>
      </div>
      <!-- SUBMIT -->
    </form>
     <hr class="style13" />
     <div class="row">
       <div class="col-4">
        <button type="button" @click="aksi='insert';clearInput();refreshs()" class="text-uppercase font-times btn btn-sm btn-success"><span class="typcn typcn-plus"></span>Insert</button> &nbsp;
       </div>
       <div class="col-4 text-center">
        <button type="button" @click="aksi='update'" class="text-uppercase font-times btn btn-sm btn-warning"><span class="typcn typcn-edit"></span>Update</button>&nbsp;
       </div>
       <div class="col-4 text-center">
        <button type="button" @click="aksi='remove'" class="text-uppercase font-times btn btn-sm btn-danger"><span class="typcn typcn-delete"></span>Delete</button>&nbsp;
        </div>
     </div>
      </div>
      </div>
      <br>
      <hr class="style2">
      <br>
    
     <!-- <tables :datatable="datanya" :unless="['fname','lname']" /> -->
    <div style="overflow-x:auto;width:100%;" v-if="ready">
      <!-- MODAL -->
      <!-- ======================================================= -->
      <!-- DATATABLE MULAI DISINI -->
      <!-- SEARCH INPUT -->
      <div class="row">
          <div class="col-6">
               <select class='form-control' v-model="vdata.bulan">
                <option value="01">Januari</option>
                <option value="02">Februari</option>
                <option value="03">Maret</option>
                <option value="04">April</option>
                <option value="05">Mei</option>
                <option value="06">Juni</option>
                <option value="07">Juli</option>
                <option value="08">Agustus</option>
                <option value="09">September</option>
                <option value="10">Oktober</option>
                <option value="11">November</option>
                <option value="12">Desember</option>
              </select>
          </div>
          <div class="col-6">
               <div class="sm-form ">
                  <input type="text" id="tahun" name="tahun" class="form-control form-control-sm py-2"  placeholder="tahun" v-model="vdata.tahun" >
              </div>
          </div>
      </div>
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
            <div class="col-4 order-2">
                <a :href="`https://infolayanans.space/api/mysql/sdd/request.php?data=select wilayah,cabang,nama_requestor,deksripsi_request,tanggal_request,waktu_request,waktu_mulai_pengerjaan,severity_level,tanggal_penyelesaian,waktu_penyelesaian,sifat_problem,technical_support,deskripsi_support,durasi_jam,status_akhir from sdd_laporan where type='REQUEST' AND RO='${this.$store.state.users.RO}' AND tanggal_request LIKE '${this.tanggals}%' AND id_user='${this.$store.state.users.id}' order by tanggal_request&database=infolay3_test`" class="text-green btn btn-sm btn-dark "><span class="typcn typcn-chart-bar"></span> Request</a>
             
            </div>
            <div class="col-4 order-3">
                <a :href="`https://infolayanans.space/api/mysql/sdd/incident.php?data=select wilayah,cabang,nama_requestor,deksripsi_request,tanggal_request,waktu_request,waktu_mulai_pengerjaan,severity_level,tanggal_penyelesaian,waktu_penyelesaian,sifat_problem,technical_support,deskripsi_support,durasi_jam,status_akhir from sdd_laporan where type='INCIDENT' AND RO='${this.$store.state.users.RO}' AND tanggal_request LIKE '${this.tanggals}%' AND id_user='${this.$store.state.users.id}' order by tanggal_request&database=infolay3_test`" class="text-green btn btn-sm btn-dark "><span class="typcn typcn-chart-line"></span> Incident</a>
            </div>
            <div class="col-4 order-1">
              <select class="form-control" style="width:80px" v-model="selected">
                <option>10</option>
                <option>20</option>
                <option>50</option>
                <option>100</option>
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
  layout:"sdd",
  data() {
    return {
        cabangs:[],
        tanggals:"",
      // style
      thbackground: "initial",
      thcolor: "asd",
      // Data datable
      datanya: [],
      vdata: {
        type:"REQUEST",
        severity_level:"P4",
        status_akhir:"SELESAI",
        sifat_problem:"Software",
        tahun:2020,
        bulan:10
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
      refreshs(){
           this.vdata.tanggal_request=this.format
        this.vdata.tanggal_penyelesaian=this.format
        this.vdata.waktu_request=this.format2
        this.vdata.waktu_mulai_pengerjaan=this.format2
        this.vdata.cabang = this.cabangs[0].cabang
        this.vdata.type="REQUEST";
        this.vdata.severity_level="P4";
        this.vdata.sifat_problem="Software";
        this.vdata.status_akhir="SELESAI";
         let fd = new FormData()
      fd.append('data', `select * from sdd_cabang where id_user='${this.$store.state.users.id}'`)//database setting di server
      fd.append('database','infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          console.log(res)
          this.cabangs=res.data
          this.vdata.cabang=res.data[0].cabang
          this.$forceUpdate()
      })
    let fd2 = new FormData()
      fd2.append('data', `select * from sdd_tbuser where id='${this.$store.state.users.id}'`)//database setting di server
      fd2.append('database','infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          console.log(res)
          this.vdata.wilayah=res.data[0].wilayah
          this.vdata.technical_support=res.data[0].technical_support
          this.$forceUpdate()
      })
        this.$forceUpdate()
      },
    kalkulasi(){
        let waktu_akhir = this.vdata.waktu_penyelesaian.split(':');
        let waktu_awal = this.vdata.waktu_mulai_pengerjaan.split(':');
        waktu_akhir[0]=parseInt(waktu_akhir[0])
        waktu_akhir[1]=parseInt(waktu_akhir[1])
        waktu_awal[0]=parseInt(waktu_awal[0])
        waktu_awal[1]=parseInt(waktu_awal[1])
        let hasil=[]
        hasil[0]=waktu_akhir[0]-waktu_awal[0]
        hasil[1]=waktu_akhir[1]-waktu_awal[1]
        hasil[0]=hasil[1] < 0 ? hasil[0]-1 : hasil[0]
        hasil[1]=hasil[1] < 0 ? 60+hasil[1] : hasil[1]
        hasil = hasil.join(':');
        // let hasil = this.diff(waktu_awal,waktu_akhir);
        this.vdata.durasi_jam=hasil
    },
    diff(start, end) {
        start = this.vdata.waktu_mulai_pengerjaan; //to update time value in each input bar
        end = this.vdata.waktu_penyelesaian; //to update time value in each input bar
        start = start.split(":");
        end = end.split(":");
        var startDate = new Date(0, 0, 0, start[0], start[1], 0);
        var endDate = new Date(0, 0, 0, end[0], end[1], 0);
        var diff = endDate.getTime() - startDate.getTime();
        var hours = Math.floor(diff / 1000 / 60 / 60);
        diff = hours * 1000 * 60 * 60;
        var minutes = Math.floor(diff / 1000 / 60);
        return (hours < 9 ? "0" : "") + hours + ":" + (minutes < 9 ? "0" : "") + minutes;
    },
      insert(){ let fd = new FormData();
      
      fd.append("data", `Insert into sdd_laporan (id_user,RO,wilayah,cabang,nama_requestor,deksripsi_request,tanggal_request,t_request,waktu_request,waktu_mulai_pengerjaan,severity_level,tanggal_penyelesaian,t_penyelesaian,waktu_penyelesaian,sifat_problem,technical_support,deskripsi_support,durasi_jam,status_akhir,type) VALUES ('${this.$store.state.users.id}','${this.$store.state.users.RO}','${this.vdata.wilayah}','${this.vdata.cabang}','${this.vdata.nama_requestor}','${this.vdata.deksripsi_request}','${this.vdata.tanggal_request}','${this.format3(this.vdata.tanggal_request)}','${this.vdata.waktu_request}','${this.vdata.waktu_mulai_pengerjaan}','${this.vdata.severity_level}','${this.vdata.tanggal_penyelesaian}','${this.format3(this.vdata.tanggal_penyelesaian)}','${this.vdata.waktu_penyelesaian}','${this.vdata.sifat_problem}','${this.vdata.technical_support}','${this.vdata.deskripsi_support}','${this.vdata.durasi_jam}','${this.vdata.status_akhir}','${this.vdata.type}')`);
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
      
      fd.append("data", `UPDATE sdd_laporan SET wilayah='${this.vdata.wilayah}',RO='${this.$store.state.users.RO}',id_user='${this.$store.state.users.id}',cabang='${this.vdata.cabang}',nama_requestor='${this.vdata.nama_requestor}',deksripsi_request='${this.vdata.deksripsi_request}',tanggal_request='${this.vdata.tanggal_request}',t_request='${this.format3(this.vdata.t_request)}',waktu_request='${this.vdata.waktu_request}',waktu_mulai_pengerjaan='${this.vdata.waktu_mulai_pengerjaan}',severity_level='${this.vdata.severity_level}',tanggal_penyelesaian='${this.vdata.tanggal_penyelesaian}',t_penyelesaian='${this.vdata.t_penyelesaian}',waktu_penyelesaian='${this.vdata.waktu_penyelesaian}',sifat_problem='${this.vdata.sifat_problem}',technical_support='${this.vdata.technical_support}',deskripsi_support='${this.vdata.deskripsi_support}',durasi_jam='${this.vdata.durasi_jam}',status_akhir='${this.vdata.status_akhir}',type='${this.vdata.type}' Where id_laporan = '${this.vdata.id_laporan}'`);
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
          this.vdata.tahun=this.getTahun()
          this.vdata.bulan=this.getBulan()
          this.refreshData()
        }).catch(err => {
           
            this.refreshData()
          });
    },remove(){ let fd = new FormData();
      
      fd.append("data", `DELETE FROM sdd_laporan WHERE  id_laporan =  '${this.vdata.id_laporan}'`);
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
          this.vdata.bulan=this.getBulan()
      this.vdata.tahun=this.getTahun()
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
       this.vdata.bulan=this.getBulan()
      this.vdata.tahun=this.getTahun()
      this.pilih = item;
    },
     clearInput() {
      this.formOn = true;
      let keys = Object.keys(this.vdata);
      keys.forEach(key => {
          if(key=='bulan' || key=="tahun"){

          }else{
              this.vdata[key] = "";
          }
      });
    },
     refreshData() {
      let fd2 = new FormData();
      fd2.append("data", `select id_laporan,wilayah,cabang,nama_requestor,deksripsi_request,tanggal_request,waktu_request,waktu_mulai_pengerjaan,severity_level,tanggal_penyelesaian,waktu_penyelesaian,sifat_problem,technical_support,deskripsi_support,durasi_jam,status_akhir,type from sdd_laporan where id_user='${this.$store.state.users.id}' AND RO='${this.$store.state.users.RO}'`); //if empty = *
      fd2.append('table', 'sdd_laporan')
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
      this.$store.state.print2 = this.datanya
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
     format3(date) {
      return this.$datefns.format(date, "MM/DD/YYYY", {
        locale: id
      });
    },
      getBulan(date) {
      return this.$datefns.format(new Date(), "MM", {
        locale: id
      });
    },
      getTahun(date) {
      return this.$datefns.format(new Date(), "YYYY", {
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
          format() {
            return this.$datefns.format(
              new Date(),
              "YYYY-MM-DD",
              {
                locale: id
              }
            );
          },
           format2() {
               var today = new Date();
               let minutes = today.getMinutes().toString().length == 2 ? today.getMinutes() : '0'+today.getMinutes();
               console.log(minutes)
            return today.getHours() + ":" + minutes
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
      let searchs = this.vdata.tahun + "-" + this.vdata.bulan
      this.tanggals = searchs

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
    //   search bulan tahun
        data = data.filter((v, i, a) => {
        let hasil = false;
        keys.filter(key => {
          if (typeof v[key] == "string") {
            if (v[key].toLowerCase().indexOf(searchs.toLowerCase()) != -1) {
              hasil = true;
            }
          } else {
            if (v[key] != null) {
              if (v[key].toString().indexOf(searchs) != -1) {
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
      this.vdata.bulan=this.getBulan()
      this.vdata.tahun=this.getTahun()
      let searchs = this.vdata.tahun + "-" + this.getBulan()
      this.tanggals = searchs
      console.log('search',searchs)
      this.vdata.tanggal_request=this.format
      this.vdata.tanggal_penyelesaian=this.format
      this.vdata.waktu_request=this.format2
      this.vdata.waktu_mulai_pengerjaan=this.format2
      let fd = new FormData()
      fd.append('data', `select * from sdd_cabang where id_user='${this.$store.state.users.id}'`)//database setting di server
      fd.append('database','infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          console.log(res)
          this.cabangs=res.data
          this.vdata.cabang=res.data[0].cabang
          this.$forceUpdate()
      })
    let fd2 = new FormData()
      fd2.append('data', `select * from sdd_tbuser where id='${this.$store.state.users.id}'`)//database setting di server
      fd2.append('database','infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          console.log(res)
          this.vdata.wilayah=res.data[0].wilayah
          this.vdata.technical_support=res.data[0].technical_support
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