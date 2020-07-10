<template>
  <div>
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-10 shadow-lg">
        <div class="text-right">
          <router-link class="font-bold font-times uppercase text-blue" to="/btn/login">Login</router-link>
        </div>
        <div class="text-left"></div>
        <div class="text-center">
          <img
            src="@/static/icon/btn.png"
            class="kinoLightBox img-fluid rounded-top z-depth-1"
            style="border-radius: 20px;margin:auto;height:60px;"
            alt="top"
          />
          <br />
          <hr class="style13" />
          <br />
        </div>
      </div>
    </div>
    <!-- ==================== -->
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-10 shadow-lg">
        <br />
        <br />
        <div style="font-size:21px;" class="text-center font-times font-bold">
          MOHON PENILAIAN ANDA
          <br />TERHADAP PELAYANAN KAMI
          <br />
          <br />
        </div>

        <div class="row">
          <div class="col-sm-3 cursor-pointer" @click="$router.push('/btn/customer service')">
            <div
              class="text-center biggers shadow-lg p-3 rounded-lg font-bold font-times text-black"
              style="font-size:21px;box-shadow: 1px 1px 4px 1px black;height:240px;"
            >
              CUSTOMER SERVICE
              <br />
              <img
                src="@/static/picture/cs.png"
                class="anim animated biggerss fadeIn"
                style="margin:auto;height:140px;"
                alt
              />
            </div>
          </div>
          <div class="col-sm-3 cursor-pointer" @click="$router.push('/btn/teller')">
            <div
              class="text-center biggers bg-blue-light shadow-lg p-3 rounded-lg font-bold font-times text-black"
              style="font-size:21px;box-shadow: 1px 1px 4px 1px black;height:240px;"
            >
              TELLER
              <br />
              <img
                src="@/static/picture/teller.png"
                class="anim animated biggerss fadeIn"
                style="margin:auto;height:140px;"
                alt
              />
            </div>
          </div>
          <div class="col-sm-3 cursor-pointer" @click="$router.push('/btn/LOAN SERVICE')">
            <div
              class="text-center biggers shadow-lg p-3 bg-brown rounded-lg font-bold font-times text-black"
              style="font-size:21px;box-shadow: 1px 1px 4px 1px black;height:240px;"
            >
              LOAN SERVICE
              <br />
              <img
                src="@/static/picture/ls.png"
                class="anim animated biggerss fadeIn"
                style="margin:auto;height:140px;"
                alt
              />
            </div>
          </div>
          <div class="col-sm-3 cursor-pointer" @click="$router.push('/btn/security')">
            <div
              class="text-center biggers bg-red-light shadow-lg p-3 rounded-lg font-bold font-times text-black"
              style="font-size:21px;box-shadow: 1px 1px 4px 1px black;height:240px;"
            >
              SECURITY
              <br />
              <img
                src="@/static/picture/satpam.png"
                class="anim animated biggerss fadeIn"
                style="margin:auto;height:140px;"
                alt
              />
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <div class="text-center">
            <br />
            <span class="font-bold font-times" style="font-size:29px;">{{ format }}</span>
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
      pilihan: []
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
