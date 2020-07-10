<template>
  <div style="font-family:'Roboto Condensed', sans-serif;">
    <div class="container bg-white shadow-lg p-3">
      <p class="font-bold">Selamat Datang Di Aplikasi Overview</p>
      <br />
      <p>Menu Aplikasi kantor desa bamban, untuk dipergunakan mengakses data yang telah di buat</p>
      <hr class="style2" />
      <!-- MENU 1 -->
      <h2 class="font-bold">Data Desa</h2>
      <div class="container-fluid mt-1">
        <div class="row">
          <div
            class="col-sm-2 p-2"
            @click="$router.push(`${item.link}`)"
            v-for="(item, index) in menu1"
            :key="index+'menu1'"
          >
            <div class="p-2 bg-menu-dashboard1">
              <p style="padding-left:80%;">
                <span class="typcn" :class="[item.icon]" style="font-size:30px;color:white;"></span>
              </p>
              <p style="font-size:28px;color:White;font-weight:bold;padding-left:20%;">
                {{item.jumlah}}
                <span style="font-size:14px;">Records</span>
              </p>
              <p
                class
                style="font-size:18px;font-weight:bold;margin-top:4px;color:white;"
              >{{item.nama}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- MENU2 -->
      <div class="text-center" style="width:70%">
        <hr class="style1" />
      </div>
      <h2 class="font-bold">Administrasi Surat</h2>
      <div class="container-fluid mt-1">
        <div class="row">
          <div
            class="col-sm-2 p-2"
            @click="$router.push(`${item.link}`)"
            v-for="(item, index) in menu2"
            :key="index+'menu2'"
          >
            <div class="p-2 bg-menu-dashboard1">
              <p style="padding-left:80%;">
                <span class="typcn" :class="[item.icon]" style="font-size:30px;color:white;"></span>
              </p>
              <p style="font-size:28px;color:White;font-weight:bold;padding-left:20%;">
                {{item.jumlah}}
                <span style="font-size:14px;">Records</span>
              </p>
              <p
                class
                style="font-size:18px;font-weight:bold;margin-top:4px;color:white;"
              >{{item.nama}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- MENU3 -->
      <div class="text-center" style="width:70%">
        <hr class="style1" />
      </div>
      <h2 class="font-bold">Laporan</h2>
      <div class="container-fluid mt-1">
        <div class="row">
          <div
            class="col-sm-2 p-2"
            @click="$router.push(`${item.link}`)"
            v-for="(item, index) in menu3"
            :key="index+'menu3'"
          >
            <div class="p-2 bg-menu-dashboard2">
              <p style="padding-left:80%;">
                <span class="typcn" :class="[item.icon]" style="font-size:30px;color:white;"></span>
              </p>
              <br />
              <p style="font-size:28px;color:White;font-weight:bold;padding-left:20%;"></p>
              <p
                class
                style="font-size:18px;font-weight:bold;margin-top:4px;color:white;"
              >{{item.nama}}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- MENU 4 -->
      <div class="text-center" style="width:70%">
        <hr class="style1" />
      </div>
      <h2 class="font-bold">Interaktif</h2>
      <div class="container-fluid mt-1">
        <div class="row">
          <div
            class="col-sm-2 p-2"
            @click="$router.push(`${item.link}`)"
            v-for="(item, index) in menu4"
            :key="index+'menu4'"
          >
            <div class="p-2 bg-menu-dashboard3">
              <p style="padding-left:80%;">
                <span class="typcn" :class="[item.icon]" style="font-size:30px;color:white;"></span>
              </p>
              <br />
              <p style="font-size:28px;color:White;font-weight:bold;padding-left:20%;"></p>
              <p
                class
                style="font-size:18px;font-weight:bold;margin-top:4px;color:white;"
              >{{item.nama}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  layout: "desa",
  data() {
    return {
      menu1: [
        {
          nama: "Perangkat",
          link: "/bamban/dashboard/data-desa/perangkat-desa",
          jumlah: 0,
          icon: "typcn-book"
        },
        {
          nama: "RT/RW",
          link: "/bamban/dashboard/data-desa/aparatur-desa",
          jumlah: 0,
          icon: "typcn-document"
        },
        {
          nama: "Penduduk",
          link: "/bamban/dashboard/data-desa/penduduk",
          jumlah: 0,
          icon: "typcn-group"
        },
        {
          nama: "User",
          link: "/bamban/dashboard/data-desa/user",
          jumlah: 0,
          icon: "typcn-user"
        }
      ],
      menu2: [
        {
          nama: "Domisili",
          link: "/bamban/dashboard/administrasi-surat/domisili",
          jumlah: 0,
          icon: "typcn-arrow-shuffle"
        },
        {
          nama: "Lahir",
          link: "/bamban/dashboard/administrasi-surat/lahir",
          jumlah: 0,
          icon: "typcn-user-add-outline"
        },
        {
          nama: "Kematian",
          link: "/bamban/dashboard/administrasi-surat/kematian",
          jumlah: 0,
          icon: "typcn-user-delete-outline"
        },
        {
          nama: "Pindah",
          link: "/bamban/dashboard/administrasi-surat/pindah",
          jumlah: 0,
          icon: "typcn-compass"
        }
      ],
      menu3: [
        {
          nama: "Surat dan Mutasi",
          link: "/bamban/dashboard/laporan/surat-dan-mutasi",
          jumlah: 0,
          icon: "typcn-point-of-interest-outline"
        },
        {
          nama: "Jumlah Penduduk",
          link: "/bamban/dashboard/laporan/jumlah-penduduk",
          jumlah: 0,
          icon: "typcn-contacts"
        }
      ],
      menu4: [
        {
          nama: "Permintaan",
          link: "/bamban/dashboard/permintaan",
          jumlah: 0,
          icon: "typcn-business-card"
        },
        {
          nama: "Backup",
          link: "/bamban/dashboard/laporan/backup",
          jumlah: 0,
          icon: "typcn-arrow-repeat-outline"
        },
        {
          nama: "Import Data",
          link: "/bamban/dashboard/laporan/import-data",
          jumlah: 0,
          icon: "typcn-export"
        }
      ]
    };
  },
  methods: {
    getData(table, menu, index) {
      let data = [];
      let fd = new FormData();
      fd.append("data", "select * from " + table); // if empty = *
      axios
        .post("https://infolayanans.space" + "/api/mysql/auto.php", fd, {
          headers: {}
        })
        .then(res => {
          this[menu][index].jumlah = res.data.length;
        });
    }
  },
  mounted() {
    this.getData("bamban_tbperangkat", "menu1", 0);
    this.getData("bamban_tbrw", "menu1", 1);
    this.getData("bamban_tbpenduduk", "menu1", 2);
    this.getData("bamban_tbdomisili", "menu2", 0);
    this.getData("bamban_tblahir", "menu2", 1);
    this.getData("bamban_tbkematian", "menu2", 2);
    this.getData("bamban_tbpindah", "menu2", 3);
    axios.get(this.$store.state.url + "/api/data/alluser").then(res => {
      console.log(res.data.data.length);
      this.menu1[3].jumlah = res.data.data.length;
    });
  },
  head: {
    title: "Admin website Kantor Bamban",
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Cantata+One|Electrolize|Marck+Script|Rancho|Special+Elite|Tangerine|Roboto+Condensed&display=swap"
      }
    ]
  }
};
</script>
<style scoped>
.bg-menu-dashboard1 {
  border-radius: 5px;
  background: rgb(25, 183, 244);
  background: linear-gradient(
    90deg,
    rgba(25, 183, 244, 0.896796218487395) 0%,
    rgba(21, 177, 235, 0.8407738095238095) 58%,
    rgba(13, 140, 190, 0.8127626050420168) 100%
  );
  height: 130px;
}
.bg-menu-dashboard1:hover {
  cursor: pointer;
  background: rgb(22, 155, 207);
  background: linear-gradient(
    90deg,
    rgba(22, 155, 207, 0.896796218487395) 0%,
    rgba(14, 141, 189, 0.8407738095238095) 58%,
    rgba(11, 119, 161, 0.8127626050420168) 100%
  );
}
.bg-menu-dashboard2 {
  border-radius: 5px;
  background: rgb(244, 25, 25);
  background: linear-gradient(
    90deg,
    rgba(244, 25, 80, 0.897) 0%,
    rgba(235, 21, 49, 0.841) 58%,
    rgba(190, 13, 51, 0.813) 100%
  );
  height: 130px;
}
.bg-menu-dashboard2:hover {
  cursor: pointer;
  background: rgb(207, 22, 22);
  background: linear-gradient(
    90deg,
    rgba(207, 22, 22, 0.897) 0%,
    rgba(189, 14, 14, 0.841) 58%,
    rgba(161, 11, 11, 0.813) 100%
  );
}
.bg-menu-dashboard3 {
  border-radius: 5px;
  background: rgb(244, 124, 25);
  background: linear-gradient(
    90deg,
    rgba(244, 124, 25, 0.897) 0%,
    rgba(235, 124, 21, 0.841) 58%,
    rgba(190, 113, 13, 0.813) 100%
  );
  height: 130px;
}
.bg-menu-dashboard3:hover {
  cursor: pointer;
  background: rgb(207, 74, 22);
  background: linear-gradient(
    90deg,
    rgba(207, 74, 22, 0.897) 0%,
    rgba(189, 74, 14, 0.841) 58%,
    rgba(161, 74, 11, 0.813) 100%
  );
}
</style>
