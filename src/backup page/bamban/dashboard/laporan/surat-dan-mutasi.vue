<template>
  <div>
    <!-- {{pindah[0].tgl1}}
    {{lahir[0].tgl1}}
    {{domisili[0].tgl1}}-->
    <div class="bg-white rounded-lg mb-4 p-4" style="font-family:times new roman;">
      <span style="font-size:20px;text-transform:none;color:black;">
        <router-link to="/dashboard">Data Desa</router-link>&nbsp;>
        <router-link to="/dashboard/laporan/surat-dan-mutasi">Surat dan Mutasi</router-link>
      </span>
      <br />
      <br />

      <!-- FORM PENDUDUK -->

      <hr class="style13" />
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <p class="text-center">Silahkan Pilih Lap Surat & Mutasi :</p>
            <select class="form-control" style="width:80px" v-model="lap" @change="getData()">
              <option value="1">Surat Domisili & Data Pend. Datang</option>
              <option value="2">Surat Keterangan Lahir & Data Pend. Lahir</option>
              <option value="3">Surat Ket. Kematian & Data Pend. Meninggal</option>
              <option value="4">Surat Ket. Pindah & Data Pend. Pindah</option>
            </select>
            <br />
            <br />
            <div class="sm-form">
              <label for="tanggal1">Tanggal</label>
              <input
                type="date"
                id="tanggal1"
                name="tanggal1"
                class="form-control form-control-sm"
                placeholder="tanggal1"
                v-model="date1"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <br />
            <br />
            <br />
            <br />
            <div class="sm-form" style="padding-top:10px;">
              <label for="tanggal2">Sampai Dengan</label>
              <input
                type="date"
                id="tanggal2"
                name="tanggal2"
                class="form-control form-control-sm"
                placeholder="tanggal2"
                v-model="date2"
              />
            </div>
          </div>
          <div class="col-sm-12 p-4 text-center">
            <br />Mengetahui Perangkat Desa :
            <tr>
              <td>Perangkat ID</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <select
                    class="form-control"
                    @change="$store.dispatch('perangkat', $event.target.value)"
                  >
                    <option
                      :value="JSON.stringify({Jabatan:'Kepala Desa',Nama:'......................'})"
                    >-</option>
                    <option
                      v-for="(item, index) in listnya"
                      :key="index+'perangkat'"
                      :value="JSON.stringify(item)"
                    >{{item.Nama}}</option>
                  </select>
                </div>
              </td>
            </tr>
            <br />
            <br />
            <button
              type="button"
              @click="preview()"
              class="btn btn-sm btn-outline-dark text-center"
            >Preview</button>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>
<script>
import tables from "@/components/app/table/table_penduduk.vue";
import axios from "axios";
export default {
  layout: "desa",
  data() {
    return {
      datanya: [],
      date1: "",
      date2: new Date(),
      vdata: {},
      listnya: [],
      lap: "",
      periode: "",
      domisili: [],
      domisilis: [],
      pindah: [],
      pindahs: [],
      kematian: [],
      kematians: [],
      lahir: [],
      lahirs: []
    };
  },
  computed: {},
  components: {
    tables
  },
  methods: {
    perangkat() {
      let fd = new FormData();
      fd.append("data", "select * from bamban_tbperangkat"); // if empty = *
      axios
        .post(this.$store.state.database + "/api/mysql/auto.php", fd, {
          headers: {}
        })
        .then(res => {
          this.listnya = res.data;
        });
    },
    test() {
      if (this.date1 && this.date2) {
        let data = this.datanya;
        let that = this;
        this.vdata = data.filter(item => {
          return (
            new Date(item.tgl1).getTime() >= new Date(that.date1).getTime() &&
            new Date(item.tgl1).getTime() <= new Date(that.date2).getTime()
          );
        });
        this.vdata.date1 = that.date1;
        this.vdata.date2 = that.date2;
        console.log(this.vdata);
        this.$store.state.prints = this.vdata;
        if (this.lap == "1") {
          this.$router.push("/print/domisili2");
        } else if (this.lap == "2") {
          this.$router.push("/print/lahir2");
        } else if (this.lap == "3") {
          this.$router.push("/print/kematian2");
        } else {
          this.$router.push("/print/pindah3");
        }
      } else {
        alert("isi input tanggal terlebih dahulu !");
      }
    },
    preview() {
      this.test();
    },
    getData() {
      let fd = new FormData();
      if (this.lap == "1") {
        fd.append("data[table]", "bamban_tbdomisili");
        axios
          .post("https://infolayanans.000webhostapp.com/getData.php", fd)
          .then(res => {
            this.datanya = res.data;
          });
      } else if (this.lap == "2") {
        fd.append("data[table]", "bamban_tblahir");
        axios
          .post("https://infolayanans.000webhostapp.com/getData.php", fd)
          .then(res => {
            this.datanya = res.data;
          });
      } else if (this.lap == "3") {
        fd.append("data[table]", "bamban_tbkematian");
        axios
          .post("https://infolayanans.000webhostapp.com/getData.php", fd)
          .then(res => {
            this.datanya = res.data;
          });
      } else {
        fd.append("data[table]", "bamban_tbpindah");
        axios
          .post("https://infolayanans.000webhostapp.com/getData.php", fd)
          .then(res => {
            this.datanya = res.data;
          });
      }
    }
  },
  mounted() {
    this.perangkat();
    let that = this;
    // this.$nuxt.$on("editPenduduk", data => {
    //   console.log(data);
    //   this.$nextTick(() => {
    //     that.test = JSON.parse(localStorage.getItem("temp_table"));
    //   });
    // });
  }
};
</script>
