<template>
  <div>
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-10 shadow-lg">
        <div class="text-right">
          <!-- <router-link class="font-bold font-times uppercase text-blue" to="/btn/login">Login</router-link> -->
        </div>
        <div class="text-left"></div>
        <div class="text-center">
          <img
            src="@/static/icon/btn.png"
            class="kinoLightBox img-fluid rounded-top z-depth-1"
            style="border-radius: 20px;margin:auto;height:50px;"
            alt="top"
          />
          <br />
          <br />
        </div>
      </div>
    </div>
    <!-- ==================== -->
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-10 shadow-lg">
        <div style="font-size:20px;" class="text-center font-times font-bold">
          <br />
        </div>
        <!-- directive -->
        <p class="text-center text-xl font-bold font-times" v-if="menus == 'utama'">MENU UTAMA</p>
        <p class="text-center text-xl font-bold font-times" v-if="menus == 'setoran'">
          SETORAN TUNAI
          <i class="fas fa-donate text-right pl-2" style="font-size:21px;"></i>
        </p>
        <p class="text-center text-xl font-bold font-times" v-if="menus == 'jasa'">
          PEMBAYARAN JASA
          <i class="fas fa-address-card text-right pl-2" style="font-size:21px;"></i>
        </p>
        <p class="text-center text-xl font-bold font-times" v-if="menus == 'dana'">
          TRANSFER DANA
          <i class="fas fa-exchange-alt text-right pl-2" style="font-size:21px;"></i>
        </p>
        <p class="text-center text-xl font-bold font-times" v-if="menus == 'ukt'">
          PEMBAYARAN SPP UKT
          <i class="fas fa-university text-right pl-2" style="font-size:21px;"></i>
        </p>
        <p class="text-center text-xl font-bold font-times" v-if="menus == 'negara'">
          FORMULIR MODULE PENERIMAAN NEGARA
          <i
            class="fas fa-flag text-right pl-2"
            style="font-size:21px;"
          ></i>
        </p>
        <br />
        <br />
        <!-- ================================ -->
        <!-- UTAMA -->
        <!-- ================================ -->
        <div class="images row animated fadeInDown" v-viewer v-if="menus == 'utama'">
          <div
            class="col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn bg-blue-lighter"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="menus = 'setoran'"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              SETORAN TUNAI &nbsp;&nbsp;
              <i class="fas fa-donate text-right" style="font-size:21px;"></i>
            </p>
          </div>
          <div
            class="col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn bg-blue-light"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="menus = 'jasa'"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              PEMBAYARAN JASA
              <i class="fas fa-address-card text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
          <div
            class="col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn bg-green-lighter"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="menus = 'dana'"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              TRANSFER DANA
              <i class="fas fa-exchange-alt text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>

          <div
            class="col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn bg-green-light"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="menus = 'ukt'"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              PEMBAYARAN SPP UKT
              <i
                class="fas fa-university text-right pl-2"
                style="font-size:21px;"
              ></i>
            </p>
          </div>
          <div
            class="col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn bg-purple-lighter"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="menus = 'negara'"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              MODUL PENERIMAAN NEGARA
              <i class="fas fa-flag text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
        </div>
        <!-- ================================ -->
        <!-- SETORAN -->
        <!-- ================================ -->
        <div class="images row animated fadeInUpBig" v-viewer v-else-if="menus == 'setoran'">
          <div
            class="offset-sm-3 col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn bg-red-light hover:bg-red"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="$router.push('/')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >KEMBALI</p>
          </div>
          <div
            class="col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="klik('syariah')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              BTN SYARIAH
              <i class="fas fa-money-check text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
          <div
            class="col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="klik('pengadilan')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              PENGADILAN
              <i class="fas fa-gavel text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
        </div>
        <!-- ================================ -->
        <!-- JASA -->
        <!-- ================================ -->
        <div class="images row animated fadeInUpBig" v-viewer v-else-if="menus == 'jasa'">
          <div
            class="offset-sm-3 col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn bg-red-light hover:bg-red"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="$router.push('/')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >KEMBALI</p>
          </div>
          <div
            class="col-sm-4 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="klik('appraisal')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              APPRAISAL
              <i class="fas fa-file-contract text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
          <div
            class="col-sm-4 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="klik('bpjs')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              BPJS KESEHATAN
              <i class="fas fa-first-aid text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
          <div
            class="col-sm-4 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="klik('pdam')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              PDAM
              <i class="fas fa-tint text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
          <div
            class="col-sm-4 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="klik('telpon')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              TELPON
              <i class="fas fa-phone-square-alt text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
          <div
            class="col-sm-4 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="klik('universitas')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              UNIVERSITAS
              <i class="fas fa-university text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
          <div
            class="col-sm-4 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="klik('listrik')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              LISTRIK
              <i class="fas fa-bolt text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
        </div>
        <!-- ================================ -->
        <!-- dana -->
        <!-- ================================ -->
        <div class="images row animated fadeInUpBig" v-viewer v-else-if="menus == 'dana'">
          <div
            class="offset-sm-3 col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn bg-red-light hover:bg-red"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="$router.push('/')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >KEMBALI</p>
          </div>
          <div
            class="col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="klik('dana')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              TUNAI
              <i class="fas fa-money-bill text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
          <div
            class="col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="klik('debit')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              DEBIT REKENING
              <i
                class="fas fa-money-check-alt text-right pl-2"
                style="font-size:21px;"
              ></i>
            </p>
          </div>
        </div>
        <!-- ================================ -->
        <!-- UKT  -->
        <!-- ================================ -->
        <div class="images row animated fadeInUpBig" v-viewer v-else-if="menus == 'ukt'">
          <div
            class="offset-sm-3 col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn bg-red-light hover:bg-red"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="$router.push('/')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >KEMBALI</p>
          </div>
          <div
            class="col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="klik('unlam')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              UNLAM
              <i class="fas fa-university text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
          <div
            class="col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="klik('stkip')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              STKIP
              <i class="fas fa-university text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
        </div>
        <!-- ================================ -->
        <!-- NEGARA -->
        <!-- ================================ -->
        <div class="images row animated fadeInUpBig" v-viewer v-else-if="menus == 'negara'">
          <div
            class="offset-sm-3 col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn bg-red-light hover:bg-red"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="$router.push('/')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >KEMBALI</p>
          </div>
          <div
            class="col-sm-6 mb-5 rounded-lg shadow-lg cursor-pointer animated fadeIn"
            style="height:100px;box-shadow:1px 1px 3px 1px black;"
            @click="klik('modul')"
          >
            <p
              class="text-center font-times font-bold"
              style="text-align: center;
vertical-align: middle;
line-height: 90px;font-size:14px;"
            >
              KODE BILLING
              <i class="fas fa-flag-checkered text-right pl-2" style="font-size:21px;"></i>
            </p>
          </div>
        </div>
        <!-- component -->

        <div class="col-sm-12">
          <div class="text-center">
            <br />
            <span class="font-bold font-times" style="font-size:14px;">{{ format }}</span>
          </div>
        </div>
        <div class="col-sm-12">
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
    <div v-viewer>
      <img
        id="syariah"
        class="d-none"
        style="height:100%;width:100%;"
        src="@/static/photo/syariah.png"
      />
      <img id="bpjs" class="d-none" style="height:100%;width:100%;" src="@/static/photo/bpjs.png" />
      <img
        id="appraisal"
        class="d-none"
        style="height:100%;width:100%;"
        src="@/static/photo/apraisal.png"
      />
      <img id="stkip" class="d-none" style="height:100%;width:100%;" src="@/static/photo/stkip.png" />
      <img id="dana" class="d-none" style="height:100%;width:100%;" src="@/static/photo/tunai.png" />
      <img id="unlam" class="d-none" style="height:100%;width:100%;" src="@/static/photo/unlam.png" />
      <!-- ================= -->
      <img id="debit" class="d-none" style="height:100%;width:100%;" src="@/static/photo/debit.png" />
      <img id="listrik" class="d-none" style="height:100%;width:100%;" src="@/static/photo/pln.png" />
      <img
        id="modul"
        class="d-none"
        style="height:100%;width:100%;"
        src="@/static/photo/billing.png"
      />
      <img id="pdam" class="d-none" style="height:100%;width:100%;" src="@/static/photo/pdam.png" />
      <img
        id="universitas"
        class="d-none"
        style="height:100%;width:100%;"
        src="@/static/photo/universitas.png"
      />
      <img
        id="pengadilan"
        class="d-none"
        style="height:100%;width:100%;"
        src="@/static/photo/pengadilan.png"
      />
      <img
        id="telpon"
        class="d-none"
        style="height:100%;width:100%;"
        src="@/static/photo/telpon.png"
      />
    </div>
    <div class="container-fluid" style="position:fixed;bottom:0px;">
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10">
          <div style="height:50px;width:100%;" class="bg-blue text-center rounded-top-lg">
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
</template>
<script>
import axios from "axios";
var id = require("date-fns/locale/id");
export default {
  data() {
    return {
      pilihan: [],
      menus: "setoran"
    };
  },
  computed: {
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
    }
  },
  methods: {
    klik(el) {
      this.$el.querySelector(`#${el}`).click();
    },
    go() {
      let fd = new FormData();
      fd.append("data", "select * from tbpenilaian");
      fd.append(
        "data",
        "Insert into tbpenilaian (posisi,created_at, penilaian) VALUES ('SECURITY','5 Desember 2019', 'PUAS')"
      );
      fd.append("database", "id11038273_test");
      axios.post("https://infolayanans.space/api/mysql/auto.php", fd).then(res => {
        console.log(res);
      });
    },
    pilih(data) {
      alert("data");
      console.log(data);
    }
  },
  mounted() {},
  head: {
    title: function() {
      return {
        inner: "asd"
      };
    }
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
