<template>
  <section>
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-10 shadow-lg">
        <br />
        <div class="text-left">
          <span
            class="font-bold font-times uppercase text-blue btn btn-sm btn-outline-primary"
            @click="logout"
          >Logout</span>
          &nbsp;&nbsp;&nbsp;
        </div>
        <div class="text-center">
          <img
            src="@/static/icon/btn.png"
            class="kinoLightBox img-fluid rounded-top z-depth-1"
            style="border-radius: 20px;margin:auto;"
            alt="top"
          />
          <br />
          <hr class="style13" />
          <br />
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="sm-form">
              <input
                type="text"
                id="search"
                name="search"
                class="form-control form-control-sm"
                placeholder="search"
                v-model="search"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="sm-form">
              <select class="form-control font-times" style="font-weight:bold;" v-model="nip2">
                <option>CUSTOMER SERVICE</option>
                <option>TELLER</option>
                <option>LOAN SERVICE</option>
                <option>SECURITY</option>
              </select>
            </div>
          </div>
        </div>

        <hr class="style13" />
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-12">
              <p class="font-bold font-times">KESELURUHAN</p>
            </div>
            <div class="col-sm-3 font-bold font-times uppercase">Sangat Puas = {{ sangatpuas2 }}</div>
            <div class="col-sm-3 font-bold font-times uppercase">Puas = {{ puas2 }}</div>
            <div class="col-sm-3 font-bold font-times uppercase">Cukup Puas = {{ cukuppuas2 }}</div>
            <div class="col-sm-3 font-bold font-times uppercase">Tidak Puas = {{ tidakpuas2 }}</div>
            <div class="col-sm-12">
              <hr class="style10" />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3 font-bold font-times uppercase">Sangat Puas = {{ sangatpuas }}</div>
            <div class="col-sm-3 font-bold font-times uppercase">Puas = {{ puas }}</div>
            <div class="col-sm-3 font-bold font-times uppercase">Cukup Puas = {{ cukuppuas }}</div>
            <div class="col-sm-3 font-bold font-times uppercase">Tidak Puas = {{ tidakpuas }}</div>
          </div>
        </div>
        <hr class="style13" />
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
              :visible="item == 'id' ? false : true"
            >
              <span
                style="display:block;cursor:pointer;"
                @click="pilih(props.row)"
              >{{ props.row[item] }}</span>
            </b-table-column>
            <!-- <b-table-column field="tes" sortable label="test Name">
          <button type="button" @click="del(props.row)" class="btn btn-sm btn-primary">delete</button>
            </b-table-column>-->
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
      <div class="offset-sm-1 col-sm-10 bg-white shadow-lg">
        <br />
        <br />
        <hr class="style13" />
        <br />
        <br />
        <div class="col-sm-3">
          <select class="form-control" v-model="report">
            <option value="satu">REPORT PERLAYANAN</option>
            <option value="dua">REPORT PERJUMLAH TANGGAPAN</option>
            <option value="tiga">REPORT PERBULAN</option>
            <option value="empat">REPORT EXCEL</option>
          </select>
        </div>
        <p class="text-center font-bold font-times" style="font-size:25px;">REPORT</p>
        <hr class="style2" />
        <div v-if="report=='satu'">
          <div class="row">
            <div class="col-sm-6">
              <label for="bulan">Bulan</label>
              <select class="form-control font-times" style="font-weight:bold;" v-model="bulan">
                <option>Januari</option>
                <option>Februari</option>
                <option>Maret</option>
                <option>April</option>
                <option>Mei</option>
                <option>Juni</option>
                <option>Juli</option>
                <option>Agustus</option>
                <option>September</option>
                <option>Oktober</option>
                <option>November</option>
                <option>Desember</option>
              </select>
            </div>
            <div class="col-sm-6">
              <div class="sm-form">
                <label for="tahun">Tahun</label>
                <input
                  type="text"
                  id="tahun"
                  name="tahun"
                  class="form-control form-control-sm"
                  placeholder="tahun"
                  v-model="tahun"
                />
              </div>
              <br />
            </div>
          </div>
          <br />
          <div class="row bg-white">
            <div class="col-sm-3">
              <button
                type="button"
                @click="
                $router.push(
                  `/btn/admin/sangatpuas?bulan=${bulan}&tahun=${tahun}`
                )
              "
                class="btn btn-sm bg-green-light font-bold font-times text-black btn-block rounded-lg shadow-lg"
              >
                SANGAT PUAS
                <img
                  src="@/static/picture/sip2.png"
                  class="text-center"
                  style="height:20px;width:20px;margin:auto;"
                  alt
                />
              </button>
            </div>
            <div class="col-sm-3">
              <button
                type="button"
                @click="
                $router.push(`/btn/admin/puas?bulan=${bulan}&tahun=${tahun}`)
              "
                class="btn btn-sm bg-blue-light font-bold font-times text-black btn-block rounded-lg shadow-lg"
              >
                PUAS
                <img
                  src="@/static/picture/puas.png"
                  class="text-center"
                  style="height:20px;width:20px;margin:auto;"
                  alt
                />
              </button>
            </div>
            <div class="col-sm-3">
              <button
                type="button"
                @click="
                $router.push(
                  `/btn/admin/cukuppuas?bulan=${bulan}&tahun=${tahun}`
                )
              "
                class="btn btn-sm bg-orange-light font-bold font-times text-black btn-block rounded-lg shadow-lg"
              >
                CUKUP PUAS
                <img
                  src="@/static/picture/cukup.png"
                  class="text-center"
                  style="height:20px;width:20px;margin:auto;"
                  alt
                />
              </button>
            </div>
            <div class="col-sm-3">
              <button
                type="button"
                @click="
                $router.push(
                  `/btn/admin/tidakpuas?bulan=${bulan}&tahun=${tahun}`
                )
              "
                class="btn btn-sm bg-red-light font-bold font-times text-black btn-block rounded-lg shadow-lg"
              >
                TIDAK PUAS
                <img
                  src="@/static/picture/tidakpuas.png"
                  class="text-center"
                  style="height:20px;width:20px;margin:auto;"
                  alt
                />
              </button>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div v-else-if="report=='dua'">
          <br />
          <p class="font-times font-bold">REPORT PERLIMIT/JUMLAH</p>
          <div class="row">
            <div class="col-sm-4 text-center">
              <div class="sm-form">
                <label for="limit">Your limit</label>
                <input
                  type="number"
                  id="limit"
                  name="limit"
                  class="form-control form-control-sm"
                  placeholder="limit"
                  v-model="limit"
                />
              </div>
              <br />
              <br />
            </div>
          </div>
          <div class="row bg-white">
            <div class="col-sm-3">
              <button
                type="button"
                @click="
                $router.push(
                  `/btn/admin/laporan?penilaian=SANGAT PUAS&limit=${limit}`
                )
              "
                class="btn btn-sm bg-green-light font-bold font-times text-black btn-block rounded-lg shadow-lg"
              >
                SANGAT PUAS
                <img
                  src="@/static/picture/sip2.png"
                  class="text-center"
                  style="height:20px;width:20px;margin:auto;"
                  alt
                />
              </button>
            </div>
            <div class="col-sm-3">
              <button
                type="button"
                @click="
                $router.push(`/btn/admin/laporan?penilaian=PUAS&limit=${limit}`)
              "
                class="btn btn-sm bg-blue-light font-bold font-times text-black btn-block rounded-lg shadow-lg"
              >
                PUAS
                <img
                  src="@/static/picture/puas.png"
                  class="text-center"
                  style="height:20px;width:20px;margin:auto;"
                  alt
                />
              </button>
            </div>
            <div class="col-sm-3">
              <button
                type="button"
                @click="
                $router.push(
                  `/btn/admin/laporan?penilaian=CUKUP PUAS&limit=${limit}`
                )
              "
                class="btn btn-sm bg-orange-light font-bold font-times text-black btn-block rounded-lg shadow-lg"
              >
                CUKUP PUAS
                <img
                  src="@/static/picture/cukup.png"
                  class="text-center"
                  style="height:20px;width:20px;margin:auto;"
                  alt
                />
              </button>
            </div>
            <div class="col-sm-3">
              <button
                type="button"
                @click="
                $router.push(
                  `/btn/admin/laporan?penilaian=TIDAK PUAS&limit=${limit}`
                )
              "
                class="btn btn-sm bg-red-light font-bold font-times text-black btn-block rounded-lg shadow-lg"
              >
                TIDAK PUAS
                <img
                  src="@/static/picture/tidakpuas.png"
                  class="text-center"
                  style="height:20px;width:20px;margin:auto;"
                  alt
                />
              </button>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div v-else-if="report=='tiga'">
          <div class="row">
            <div class="col-sm-12">
              <br />
            </div>
            <div class="col-sm-4">
              <tr>
                <td>
                  REPORT PERBULAN:
                  <select
                    class="form-control font-times"
                    style="font-weight:bold;"
                    v-model="nip"
                  >
                    <option>CUSTOMER SERVICE</option>
                    <option>TELLER</option>
                    <option>LOAN SERVICE</option>
                    <option>SECURITY</option>
                  </select>
                </td>
                <td>
                  <br />&nbsp;&nbsp;
                  <button
                    type="button"
                    @click="prints"
                    class="btn btn-sm btn-primary"
                  >PRINT</button>
                </td>
              </tr>
              <br />
              <br />
              <br />
              <br />
            </div>

            <div class="offset-sm-7 col-sm-1">
              <br />
            </div>
            <div class="col-sm-12">
              <hr class="style3" />
            </div>
          </div>
        </div>
        <div v-else-if="report=='empat'">
          <br />
          <p>REPORT DATA EXCEL :</p>
          <excel />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12"></div>
      </div>
      <div class="col-sm-1">
        <br />
      </div>
    </div>

    <!-- NOTE
      default sort dipilih pada title id atau no
      b-table-column = td
      untuk mengakses item di data cukup akses melalui props.row = this.datanya[index]
      b-table-column label=penamaan th
      b-table-column field=id dari th
    -->
    <!-- MULAI -->
    <!-- SEARCH -->
  </section>
</template>

<script>
import excel from "@/components/btn/excel.vue";
import axios from "axios";
import Bar from "@/components/Chart/Bar";
export default {
  data() {
    return {
      report: "satu",
      data: [],
      bulan: "",
      tahun: "2020",
      karyawans: {},
      loading: true,
      sangatpuas: 0,
      puas: 0,
      cukuppuas: 0,
      tidakpuas: 0,
      sangatpuas2: 0,
      limit: 50,
      puas2: 0,
      cukuppuas2: 0,
      tidakpuas2: 0,
      nip: "",
      nip2: "",
      posisi: "",
      search: "",
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "green",
            data: [40, 20, 40, 50, 20, 60, 70, 40, 50, 60, 20, 10]
          }
        ]
      }
    };
  },
  components: {
    excel,
    Bar
  },
  beforeMount() {
    if (localStorage.getItem("logindata")) {
    } else {
      this.$router.push("/btn");
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("logindata");
      this.$router.push("/btn");
    },
    pilih(item) {},
    prints() {
      this.$router.push(`/btn/admin/print?posisi=${this.nip}`);
    },
    getData() {
      let fd = new FormData();
      fd.append("data", "select * from tbpenilaian");
      fd.append("database", " infolay3_test");
      axios.post("https://infolayanans.space/api/mysql/auto.php", fd).then(res => {
        console.log(res);
        this.karyawans = res.data;
        this.gambar = res.data.gambar;
      });
    },

    del(item) {},
    changeTH(item) {
      let data = item;
      data = data.replace("_", " ");
      data = data.charAt(0).toUpperCase() + data.slice(1);
      return data;
    },
    refresh() {
      let fd2 = new FormData();
      fd2.append("data", "select * from tbpenilaian"); // if empty = *
      fd2.append("database", " infolay3_test");
      fd2.append("aksi", "select");
      axios
        .post("https://infolayanans.space" + "/api/mysql/auto.php", fd2)
        .then(res => {
          this.data = res.data;
          this.loading = false;
        });
    }
  },
  mounted() {
    this.refresh();
    this.getData();
  },
  computed: {
    keys() {
      let data = this.data;
      return Object.keys(data[0]);
    },
    datanya() {
      let that = this;
      let data = this.data;
      let hasil = false;
      let keys = Object.keys(data[0]);
      data = data.filter((v, i, a) => {
        let hasil = false;
        keys.filter(key => {
          if (typeof v[key] === "string") {
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
      // KESELURUHAN
      let s1 = 0;
      let s2 = 0;
      let s3 = 0;
      let s4 = 0;
      let test2 = data.filter(e => {
        if (e.penilaian == "SANGAT PUAS") {
          s1++;
        } else if (e.penilaian == "PUAS") {
          s2++;
        } else if (e.penilaian == "CUKUP PUAS") {
          s3++;
        } else if (e.penilaian == "TIDAK PUAS") {
          s4++;
        }
      });
      this.sangatpuas2 = s1;
      this.puas2 = s2;
      this.cukuppuas2 = s3;
      this.tidakpuas2 = s4;
      if (that.nip2.length > 0) {
        data = data.filter(e => {
          if (e.posisi == that.nip2) {
            return e;
          }
        });
        console.log(data);
        let ss1 = 0;
        let ss2 = 0;
        let ss3 = 0;
        let ss4 = 0;
        let test2 = data.filter(e => {
          if (e.penilaian == "SANGAT PUAS") {
            ss1++;
          } else if (e.penilaian == "PUAS") {
            ss2++;
          } else if (e.penilaian == "CUKUP PUAS") {
            ss3++;
          } else if (e.penilaian == "TIDAK PUAS") {
            s4++;
          }
        });
        this.sangatpuas = ss1;
        this.puas = ss2;
        this.cukuppuas = ss3;
        this.tidakpuas = ss4;
      }
      return data;
    }
  }
};
</script>
