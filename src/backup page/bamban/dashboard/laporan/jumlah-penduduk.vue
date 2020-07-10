<template>
  <div>
    <!-- {{pindah[0].tgl1}}
    {{lahir[0].tgl1}}
    {{domisili[0].tgl1}}-->
    <div class="bg-white rounded-lg mb-4 p-4" style="font-family:times new roman;">
      <span style="font-size:20px;text-transform:none;color:black;">
        <router-link to="/dashboard">Data Desa</router-link>&nbsp;>
        <router-link to="/dashboard/laporan/jumlah-penduduk">Jumlah Penduduk</router-link>
      </span>
      <br />
      <br />

      <!-- FORM PENDUDUK -->

      <hr class="style13" />
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
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
              @click="getData()"
              class="btn btn-sm btn-outline-primary text-center"
            >cek Data</button>
            <button
              type="button"
              @click="preview()"
              class="btn btn-sm btn-outline-dark text-center"
            >
              Print
              <span class="typcn typcn-document"></span>
            </button>
          </div>
          <div class="col-sm-6 p-3">
            <p class="font-bold">Data Penduduk</p>
            <tr>
              <td>Jumlah Penduduk Laki laki</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder=" - "
                    id="pendudukLaki"
                    name="pendudukLaki"
                    class="form-control form-control-sm"
                    v-model="vdata.pendudukLaki"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Jumlah Penduduk Perempuan</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder=" - "
                    id="pendudukPerempuan"
                    name="pendudukPerempuan"
                    class="form-control form-control-sm"
                    v-model="vdata.pendudukPerempuan"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Jumlah Kepala Keluarga</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder=" - "
                    id="KepalaKeluarga"
                    name="KepalaKeluarga"
                    class="form-control form-control-sm"
                    v-model="vdata.kepalaKeluarga"
                  />
                </div>
              </td>
            </tr>
          </div>
          <div class="col-sm-6 p-3">
            <p class="font-bold">Data Laporan Pembuatan Surat</p>
            <tr>
              <td>Surat Keterangan Domisili</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder=" - "
                    id="suratDomisili"
                    name="suratDomisili"
                    class="form-control form-control-sm"
                    v-model="vdata.suratDomisili"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Surat Keterangan Lahir</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder=" - "
                    id="suratLahir"
                    name="suratLahir"
                    class="form-control form-control-sm"
                    v-model="vdata.suratLahir"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Surat Keterangan Kematian</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder=" - "
                    id="suratKematian"
                    name="suratKematian"
                    class="form-control form-control-sm"
                    v-model="vdata.suratKematian"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Surat Keterangan Pindah</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <input
                    type="text"
                    placeholder=" - "
                    id="suratPindah"
                    name="suratPindah"
                    class="form-control form-control-sm"
                    v-model="vdata.suratPindah"
                  />
                </div>
              </td>
            </tr>
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
      listnya: [],
      date2: new Date(),
      vdata: {},
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
    preview() {
      if (this.date1 && this.date2) {
        this.$store.state.prints = this.vdata;
        console.log(this.vdata.suratLahir == undefined);
        if (
          this.vdata.suratLahir == undefined &&
          this.vdata.suratDomisili == undefined
        ) {
          alert("Klik Cek data terlebih dahulu baru preview laporan!");
        } else {
          this.$router.push("/print/jumlah");
        }
      } else {
        alert("isi input tanggal terlebih dahulu !");
      }
    },
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
    getData() {
      let that = this;
      if (this.date1 && this.date2) {
        this.vdata.date1 = that.date1;
        this.vdata.date2 = that.date2;
        let fd = new FormData();
        fd.append("data[table]", "bamban_tbpenduduk");
        axios
          .post("https://infolayanans.000webhostapp.com/getData.php", fd)
          .then(res => {
            console.log(res.data);
            let data = res.data;
            let laki = data.filter(e => {
              if (e.JK.indexOf("L") != -1) {
                return true;
              }
            });
            // laki = this.sliceIt(laki);
            this.vdata.pendudukLaki = laki.length;
            let perempuan = data.filter(e => {
              if (e.JK.indexOf("P") != -1) {
                return true;
              }
            });
            // perempuan = this.sliceIt(perempuan);
            this.vdata.pendudukPerempuan = perempuan.length;
            let kepalaKeluarga = data.filter(e => {
              if (e.SHDK.indexOf("Kepala Keluarga") != -1) {
                return true;
              }
            });
            // kepalaKeluarga = this.sliceIt(kepalaKeluarga);
            this.vdata.kepalaKeluarga = kepalaKeluarga.length;
            console.log("vdata", this.vdata);
            // domisili
          });
        let fd2 = new FormData();
        fd2.append("data[table]", "bamban_tbdomisili");
        axios
          .post("https://infolayanans.000webhostapp.com/getData.php", fd2)
          .then(res => {
            let data = res.data;
            data = this.sliceIt(data);
            this.vdata.suratDomisili = data.length;
          });
        let fd3 = new FormData();
        fd3.append("data[table]", "bamban_tblahir");
        axios
          .post("https://infolayanans.000webhostapp.com/getData.php", fd3)
          .then(res => {
            let data = res.data;
            data = this.sliceIt(data);
            this.vdata.suratLahir = data.length;
          });
        let fd4 = new FormData();
        fd4.append("data[table]", "bamban_tbkematian");
        axios
          .post("https://infolayanans.000webhostapp.com/getData.php", fd4)
          .then(res => {
            let data = res.data;
            data = this.sliceIt(data);
            this.vdata.suratKematian = data.length;
          });
        let fd5 = new FormData();
        fd5.append("data[table]", "bamban_tbpindah");
        axios
          .post("https://infolayanans.000webhostapp.com/getData.php", fd5)
          .then(res => {
            let data = res.data;
            data = this.sliceIt(data);
            this.vdata.suratPindah = data.length;
          });
        setTimeout(() => {
          this.$forceUpdate();
        }, 2000);
      } else {
        alert("isi input tanggal terlebih dahulu !");
      }
    },
    sliceIt(e) {
      let that = this;
      let data = e.filter(item => {
        return (
          new Date(item.tgl1).getTime() >= new Date(that.date1).getTime() &&
          new Date(item.tgl1).getTime() <= new Date(that.date2).getTime()
        );
      });
      return data;
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
