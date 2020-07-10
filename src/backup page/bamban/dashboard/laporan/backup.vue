<template>
  <div>
    <div class="bg-white rounded-lg mb-4 p-4" style="font-family:times new roman;">
      <span style="font-size:20px;text-transform:none;color:black;">
        <router-link to="/dashboard">Data Desa</router-link>&nbsp;>
        <router-link to="/dashboard/laporan/backup">Backup</router-link>
      </span>
      <br />
      <br />
      <JsonToExcel
        style="display:none;"
        :data="listData"
        :name="vdata.table"
        id="backExcel"
        class="cursor-pointer"
      />
      <!-- FORM PENDUDUK -->
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <h2 class="text-center">BACKUP</h2>
            <hr class="style13" />
            <select class="form-control" v-model="vdata.table">
              <option v-for="(item, index) in tables" :key="index+'tables'">{{item}}</option>
            </select>
            <div class="tips">
              <button type="button" @click="backup()" class="btn btn-sm btn-outline-dark">Backup</button>
              <span class="tipstextB">Klik untuk backup</span>
            </div>
          </div>
          <div class="col-sm-6">
            <h2 class="text-center">RESTORE</h2>
            <p style="font-size:12px;">Masukkan nama Tabel sesuai file !</p>
            <hr class="style13" />
            <div class="sm-form">
              <label for="nama_table">nama table :</label>
              <input
                type="text"
                id="nama_table"
                name="nama_table"
                class="form-control form-control-sm"
                placeholder="nama_table"
                v-model="vdata.nama_table"
              />
            </div>
            <p v-if="finis" class="text-center">BERHASIL UPLOAD !</p>
            <p v-else>Silahkan Upload!</p>
            <!-- <ExcelToJson /> -->
            <input
              type="file"
              multiple="false"
              id="sheets"
              accept="application/x-iwork-keynote-sffnumbers, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              @change="onchange"
            />
          </div>
        </div>
      </div>
      <hr class="style13" />
    </div>
  </div>
</template>
<script>
import { excel2json } from "js2excel";
import tables from "@/components/app/table/table_import.vue";
import JsonToExcel from "@/components/backup/convert/JsonToExcel.vue";
import ExcelToJson from "@/components/backup/convert/ExcelToJson.vue";
import axios from "axios";
// let xlsxj = require('xlsx-to-json')
export default {
  layout: "desa",
  data() {
    return {
      datanya: [],
      vdata: {},
      tables: [],
      namaTable: "",
      listData: [],
      restores: [],
      finis: false
    };
  },
  components: {
    tables,
    JsonToExcel,
    ExcelToJson
  },
  methods: {
    onchange(e) {
      let that = this;
      var reader = new FileReader();
      this.$nuxt.$emit("busy", false);
      reader.onload = function(event) {
        var data = event.target.result;
        var workbook = XLSX.read(data, { type: "binary" });
        workbook.SheetNames.forEach(function(sheetName) {
          var XL_row_object = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheetName]
          );
          var json_object = XL_row_object;
          console.log(json_object);
          let keys = Object.keys(json_object[0]);
          json_object.forEach(e => {
            let fd = new FormData();
            fd.append(
              "data[table]",
              that.vdata.nama_table ? that.vdata.nama_table : "kosong"
            );
            fd.append("data[database]", " infolay3_test");
            fd.append("data[aksi]", "insert");
            keys.forEach(kunci => {
              console.log(kunci, e[kunci]);
              fd.append(`data[${kunci}]`, e[kunci]);
            });
            if (that.vdata.nama_table.length > 0) {
              axios
                .post(
                  "https://infolayanans.000webhostapp.com/auto_withoutkey.php",
                  fd
                )
                .then(res => {
                  console.log(res.data);
                  that.$nuxt.$emit("busy", false);
                  // alert("proses berhasil !");
                  that.refreshData();
                  that.finis = true;
                })
                .catch(err => {
                  that.$nuxt.$emit("busy", false);
                  //   alert("proses gagal !");
                  that.finis = true;
                  console.log(err);
                });
            }
          });
        });
      };
      reader.onerror = function(event) {
        console.error("file gagal proses" + event.target.error.code);
      };
      reader.readAsBinaryString(e.target.files[0]);
    },
    getData(item) {
      axios
        .get("https://infolayanans.000webhostapp.com/getTable.php")
        .then(res => {
          console.log(res.data);
          let table = [];
          res.data.forEach(tab => {
            table.push(tab.table_name);
          });
          this.tables = table;
        });
    },
    backup() {
      let that = this;
      let fd = new FormData();
      fd.append("data[table]", this.vdata.table);
      axios
        .post("https://infolayanans.000webhostapp.com/getData.php", fd)
        .then(res => {
          console.log(res);
          this.listData = res.data;
          setTimeout(() => {
            that.$nuxt.$emit("backExcel", true);
          }, 1000);
        });
    },
    setData(data) {
      this.vdata = data;
    }
  },
  mounted() {
    let that = this;
    this.getData();
    this.$nuxt.$on("ExcelToJson", data => {
      console.log(data);
      let key = Object.keys(data);
      console.log(key);
      that.namaTable = key[0];
      that.restores = data[key[0]];
      let keys = Object.keys(that.restores[0]);
      //   SAVE
      console.log(keys);
      console.log(that.namaTable);
      alert("y");
      that.restores.forEach(field => {
        let fd = new FormData();
        fd.append(
          "data[table]",
          that.vdata.nama_table ? that.vdata.nama_table : key[0]
        );
        fd.append("data[database]", " infolay3_test");
        fd.append("data[aksi]", "insert");
        keys.forEach(kunci => {
          console.log(kunci, field[kunci]);
          fd.append(`data[${kunci}]`, field[kunci]);
        });
        this.$nuxt.$emit("busy", true);
        setTimeout(() => {
          axios
            .post(
              "https://infolayanans.000webhostapp.com/auto_withoutkey.php",
              fd
            )
            .then(res => {
              console.log(res.data);
              this.$nuxt.$emit("busy", false);
              // alert("proses berhasil !");
              this.refreshData();
            })
            .catch(err => {
              this.$nuxt.$emit("busy", false);
              //   alert("proses gagal !");
              console.log(err);
            });
        }, 5000);
      });
      // window.location.reload()
    });
  },
  head() {
    return {
      title: "Lightcode Login ",
      // link: [
      //   {
      //     rel: "stylesheet",
      //     href: "https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css"
      //   },
      //   {}
      // ],
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.13.5/xlsx.full.min.js"
        }
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Login/masuk ke Lightcode ..."
        },
        {
          name: "keywords",
          content: `login`
        }
      ]
    };
  }
};
</script>