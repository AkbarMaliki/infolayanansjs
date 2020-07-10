<template>
  <div>
    <div
      style="position:absolute;width:100%;height:1200px;z-index:10;"
      v-show="modal"
      @click="$router.push('/btn')"
    >
      <div
        class="rounded-lg shadow-lg animated fadeInDown"
        style="margin:0 auto;background:white;width:60%;height:400px;position:fixed;z-index:20;left:20%;top:2%;box-shadow:1px 1px 4px 1px black;"
      >
        <br />
        <br />
        <br />
        <br />
        <p
          class="text-center font-bold font-times"
          style="font-size:21px;"
        >TERIMA KASIH ATAS PARTISIPASI ANDA !</p>
        <br />
        <br />
        <br />
        <br />
        <div class="text-center">
          <button
            type="button"
            @click="$router.push('/btn')"
            class="btn btn-xl font-times btn-danger"
          >CLOSE !</button>
        </div>
      </div>
      <!-- <img
        :src="$route.params.id == 'teller' ? teller:$route.params.id=='security'?security:$route.params.id=='CUSTOMER SERVICE'?cs:ls"
        class="animated fadeInUp"
        style="position:fixed;bottom:0;z-index:30;right:20%;"
        alt
      />-->
      <img
        v-show="$route.params.id == 'customer service'"
        src="@/static/picture/cs3.png"
        class="animated fadeInUp"
        style="position:fixed;bottom:0;z-index:30;left:20%;height:350px;"
        alt
      />
      <!-- <img
        v-show="$route.params.id == 'customer service'"
        src="@/static/picture/customerservice.png"
        class="animated fadeInUp"
        style="position:fixed;bottom:0;z-index:30;right:20%;height:500px;"
        alt
      />-->
      <img
        v-show="$route.params.id == 'teller'"
        src="@/static/picture/teller2.png"
        class="animated fadeInUp"
        style="position:fixed;bottom:0;z-index:30;left:20%;height:450px;"
        alt
      />
      <img
        v-show="$route.params.id == 'LOAN SERVICE'"
        src="@/static/picture/ls2.png"
        class="animated fadeInUp"
        style="position:fixed;bottom:0;z-index:30;left:20%;height:430px;"
        alt
      />
      <img
        v-show="$route.params.id == 'security'"
        src="@/static/picture/security2.png"
        class="animated fadeInUp"
        style="position:fixed;bottom:0;z-index:30;left:20%;height:400px;"
        alt
      />
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10 shadow-lg">
          <p>
            <router-link class="font-bold font-times uppercase text-blue" to="/btn">Back</router-link>
            <router-link
              class="text-right font-bold font-times uppercase text-blue"
              style="position:absolute;right:20px;"
              to="/btn/login"
            >Login</router-link>
          </p>
          <div class="text-center">
            <img
              src="@/static/icon/btn.png"
              class="kinoLightBox img-fluid rounded-top z-depth-1"
              style="border-radius: 20px;margin:auto;height:60px;"
              alt="top"
            />
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10 shadow-lg">
          <br />
          <div style="font-size:16px;" class="text-center font-times font-bold p-2">
            MOHON PENILAIAN ANDA
            <br />TERHADAP PELAYANAN KAMI
            <hr class="style3" />
          </div>

          <div class="row">
            <div class="col-sm-3"></div>
            <div class="col-sm-6">
              <!-- <select class="form-control font-times" style="font-weight:bold;" v-model="nip">
                <option
                  v-for="(item, index) in karyawans"
                  :key="'karyawan'+index"
                  :value="item.nip"
                >{{item.name}} &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{{item.posisi}}</option>
              </select>
              <div v-show="!gambars">
                <p
                  class="text-center text-red font-bold font-times"
                  v-show="err.length>0"
                >Data Karyawan Tidak Boleh Kosong!</p>
              </div>-->
            </div>
            <div v-if="gambars">
              <!-- <img
                style="border-radius: 20px;z-index:1;top:30px;width:130px;height:170px;position:absolute;"
                src="gambar"
                class="kinoLightBox img-thumbnail rounded-top z-depth-1"
                alt="top"
              />-->
            </div>
          </div>
          <div class="row">
            <div
              class="col-sm-3 cursor-pointer order-4"
              @click.prevent="
                insert('1');
                playSound(
                  'https://infolayanans.now.sh/api/gambars/e084caaeec950ab3fecc27ac9d94eb55.mp3'
                );
              "
            >
              <div
                class="text-center biggers bg-green-light p-3 rounded-lg text-white font-bold font-times"
                style="font-size:29px;height:230px;"
              >
                SANGAT PUAS
                <br />
                <img
                  src="@/static/picture/sip2.png"
                  class="anim animated biggerss fadeIn"
                  style="margin:auto;height:110px;"
                  alt
                />
              </div>
            </div>
            <div
              class="col-sm-3 cursor-pointer order-3"
              @click.prevent="
                insert('2');
                playSound(
                  'https://infolayanans.now.sh/api/gambars/e084caaeec950ab3fecc27ac9d94eb55.mp3'
                );
              "
            >
              <div
                class="text-center biggers bg-blue-light p-3 rounded-lg text-white font-bold font-times"
                style="font-size:29px;height:230px;"
              >
                PUAS
                <br />
                <img
                  src="@/static/picture/puas.png"
                  class="anim animated biggerss fadeIn"
                  style="margin:auto;height:110px;"
                  alt
                />
              </div>
            </div>
            <div
              class="col-sm-3 cursor-pointer order-2"
              @click.prevent="
                insert('3');
                playSound(
                  'https://infolayanans.now.sh/api/gambars/e084caaeec950ab3fecc27ac9d94eb55.mp3'
                );
              "
            >
              <div
                class="text-center biggers bg-orange-light p-3 rounded-lg text-white font-bold font-times"
                style="font-size:29px;height:230px;"
              >
                CUKUP PUAS
                <br />
                <img
                  src="@/static/picture/cukup.png"
                  class="anim animated biggerss fadeIn"
                  style="margin:auto;height:110px;"
                  alt
                />
              </div>
            </div>
            <div
              class="col-sm-3 cursor-pointer order-1"
              @click.prevent="
                insert('4');
                playSound(
                  'https://infolayanans.now.sh/api/gambars/e084caaeec950ab3fecc27ac9d94eb55.mp3'
                );
              "
            >
              <div
                class="text-center biggers bg-red-light p-3 rounded-lg text-white font-bold font-times"
                style="font-size:29px;height:230px;"
              >
                TIDAK PUAS
                <br />
                <img
                  src="@/static/picture/tidakpuas.png"
                  class="anim animated biggerss fadeIn"
                  style="margin:auto;height:110px;"
                  alt
                />
              </div>
            </div>
            <div class="col-sm-12">
              <div class="text-center">
                <p
                  class="font-times font-bold text-center uppercase rounded-lg shadow-lg text-red"
                  style="font-size:21px;"
                >
                  {{
                  $route.params.id == "cs"
                  ? "CUSTOMER SERVICES"
                  : $route.params.id
                  }}
                </p>
                <span class="font-bold font-times" style="font-size:21px;">
                  {{
                  format
                  }}
                </span>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
        <div class="col-sm-1"></div>
      </div>
      <div class="container-fluid" style="position:fixed;bottom:0px;">
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <div style="height:50px;width:100%;" class="bg-blue text-center">
              <p
                class="text-white font-bold pt-2 font-times"
              >SELAMAT DATANG DI BANK BTN KANTOR CABANG BANJARBARU</p>
            </div>
          </div>
          <div class="col-sm-1"></div>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
import axios from "axios";
var id = require("date-fns/locale/id");
export default {
  data() {
    return {
      muncul: false,
      tests: "taufik",
      karyawans: {},
      karyawan: {},
      nip: "asd",
      gambar: "",
      err: "",
      cs:
        "https://infolayanans.space/api/gambars/fa21b2758bfda7ea0a3f101053a24c04.png",
      ls:
        "https://infolayanans.space/api/gambars/fa21b2758bfda7ea0a3f101053a24c04.png",
      teller:
        "https://infolayanans.space/api/gambars/fa21b2758bfda7ea0a3f101053a24c04.png",
      security:
        "https://infolayanans.space/api/gambars/fa21b2758bfda7ea0a3f101053a24c04.png",
      modal: false,
      gambars: false,
      tanggalSekarang: "RABU, Desember 5 2019"
    };
  },

  methods: {
    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
    getData() {
      console.log(this.nip);
      let fd = new FormData();
      fd.append("data", "select * from tkaryawan");
      fd.append("database", " infolay3_test");
      axios.post("https://infolayanans.space/api/mysql/auto.php", fd).then(res => {
        console.log(res);
        this.karyawans = res.data;
        this.gambar = res.data.gambar;
      });
    },
    getKaryawan() {
      let fd = new FormData();
      this.gambars = true;
      fd.append("data", `select * from tkaryawan where nip = '${this.nip}'`);
      fd.append("database", " infolay3_test");
      axios.post("https://infolayanans.space/api/mysql/auto.php", fd).then(res => {
        console.log(res.data[0]);
        this.karyawan = res.data[0];
      });
    },
    insert(data) {
      console.log(this.format);
      let param = this.$route.params.id.toUpperCase();
      if (param == "cs") {
        param = "CUSTOMER SERVICE";
      }
      let posisi = param;
      let fd = new FormData();

      if (data == "1") {
        console.log("sangat puas");
        fd.append(
          "data",
          `Insert into tbpenilaian (posisi,created_at, penilaian) VALUES ('${posisi}','${this.format}', 'SANGAT PUAS')`
        );
        fd.append("database", " infolay3_test");
        axios
          .post("https://infolayanans.space" + "/api/mysql/auto.php", fd)
          .then(res => {
            console.log(res);

            this.modal = true;
            this.refreshData();
          })
          .catch(err => {
            this.modal = true;
            this.refreshData();
          });
      } else if (data == "2") {
        console.log("puas");
        fd.append(
          "data",
          `Insert into tbpenilaian (posisi,created_at, penilaian) VALUES ('${posisi}','${this.format}', 'PUAS')`
        );
        fd.append("database", " infolay3_test");
        axios
          .post("https://infolayanans.space" + "/api/mysql/auto.php", fd)
          .then(res => {
            console.log(res);

            this.modal = true;
            this.refreshData();
          })
          .catch(err => {
            this.modal = true;
            this.refreshData();
          });
      } else if (data == "3") {
        console.log("cukup puas");
        fd.append(
          "data",
          `Insert into tbpenilaian (posisi,created_at, penilaian) VALUES ('${posisi}','${this.format}', 'CUKUP PUAS')`
        );
        fd.append("database", " infolay3_test");
        axios
          .post("https://infolayanans.space" + "/api/mysql/auto.php", fd)
          .then(res => {
            console.log(res);

            this.modal = true;
            this.refreshData();
          })
          .catch(err => {
            this.modal = true;
            this.refreshData();
          });
      } else {
        fd.append(
          "data",
          `Insert into tbpenilaian (posisi,created_at, penilaian) VALUES ('${posisi}','${this.format}', 'TIDAK PUAS')`
        );
        fd.append("database", " infolay3_test");
        axios
          .post("https://infolayanans.space" + "/api/mysql/auto.php", fd)
          .then(res => {
            console.log(res);

            this.modal = true;
            this.refreshData();
          })
          .catch(err => {
            this.modal = true;
            this.refreshData();
          });
        console.log("tidak puas");
      }
    }
  },
  watch: {
    nip() {
      this.getKaryawan();
    }
  },
  computed: {
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
      var today = new Date();
      var dd = String(today.getDate());
      var mm = String(today.getMonth()); // January is 0!
      var yyyy = today.getFullYear();
      return (
        `${dd} ` +
        this.$datefns.format(new Date(yyyy, mm, dd), "MMMM YYYY", {
          locale: id
        })
      );
    },
    format2() {
      return this.$datefns.format(new Date(), "MM/dd/yyyy", {
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
      //= > "3 days ago"
    }
  },
  mounted() {
    console.log(this.format);
    console.log(this.$route.params.id.toUpperCase());
    this.getData();
  }
};
</script>
<style scoped>
.biggers {
  transition: all 0.2s ease-in 0s;
}
.biggers:hover {
  transition: all 0.2s ease-in 0s;
  transform: scale(1.1);
}
.biggerss {
  transition: all 0.2s ease-in 0s;
}
.biggerss:hover {
  transition: all 0.2s ease-in 0s;
  transform: scale(1.3);
}
</style>
