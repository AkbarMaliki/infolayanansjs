
      <template>
  <div style="font-family:times new roman;">
    <div class="no-print bg-black" style="color:White;">
      <hr />
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            <button
              type="button"
              @click="back()"
              class="btn btn-sm btn-outline-danger no-print"
            ><span class="typcn typcn-arrow-left"></span></button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" @click="print()" class="btn btn-sm btn-primary ">Print</button>
            <br />
          </div>
          <!-- <div class="col-sm-6">
            <br />Mengetahui Perangkat Desa :
            <tr>
              <td>Perangkat ID</td>
              <td>&nbsp;:&nbsp;</td>
              <td>
                <div class="sm-form">
                  <select class="form-control" @change="ganti($event.target.value)">
                    <option
                      :value="JSON.stringify({Nama:'......................',Jabatan:'Kepala Desa'})"
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
          </div> -->
        </div>
      </div>
      <hr class="style13" />
    </div>
    <!--  -->
    <!-- DIMULAI DARI SINI PRINT PAGE -->
    <!--  -->
    <div style>
     <div class="row">
        <div class="col-3">
            <img
        src="@/static/icon/btn.png"
        class="kinoLightBox img-fluid rounded-top z-depth-2"
        style="margin-left:10px;position:absolute;left:20px;height:80px;"
        alt="no found"
      />
        </div>
        <div class="col-9">
         <p class="pl-3 text-center" style="font-size:25px;line-height:1.5;line-spacing:3px;">
            PT. BANK TABUNGAN NEGARA (PERSERO) Tbk
            <br />KANTOR CABANG BANJARBARU
            <br />
          </p>
          <p
            class="pl-3 text-center"
            style="font-size:18px;"
          ></p>
        </div>
      </div>
      <img src="@/static/photo/line.jpg" class="img-fluid" style="width:100%;height:20px;" />
      <p
        class="text-center underline"
        style="font-size:21px;font-weight:bold;"
      >PERMOHONAN IJIN KELUAR KANTOR</p>
      <br />
        <p style="position:absolute;right:0;">{{datanya.pilih}}</p>
      <br />
      <!--  -->
      <!-- TABLE -->
      <!--  -->
      <div class="pl-5">
      <tr v-for="(item,key, index) in datanya" :key="index" v-if="key!='pilih'">
        <td class="text-uppercase">{{key}}</td>
        <td>&nbsp;:&nbsp;</td>
        <td>{{item}}</td>
      </tr>
      </div>
      <!-- TABLE END -->
      <!-- TABLE END -->
      <!-- TABLE END -->
      <br />
      <br />
      <!-- TTD -->
      <!-- TTD -->
      <!-- TTD -->
      <div class="row">
        <div class="col-4">
          <br>
        <p class="font-bold">BM / DBM / HCS</p>
        <br />
        <br />
        <p class="underline font-bold" style="font-size:19px;">{{ttd.Nama}}</p>
        </div>
        <div class="col-4">
          <br>
        <p class="font-bold">UNIT HEAD</p>
        <br />
        <br />
        <p class="underline font-bold" style="font-size:19px;">{{ttd.Nama}}</p>
        </div>
        <div class="col-4">
        <p>Banjarbaru, {{format(new Date())}}</p>
        <p class="font-bold">Pemohon</p>
        <br />
        <br />
        <p class="underline font-bold" style="font-size:19px;">{{ttd.Nama}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
var id = require("date-fns/locale/id");
export default {
  data() {
    return {
      less: ["UrutID","Gambar",'_id'],
      thnya: [],
      records: "",
      key: [],
      datanya: [],
      listnya: [
        { Nama: "Taufik", Jabatan: "Programmer" },
        { Nama: "Akbar", Jabatan: "Desainer" },
        { Nama: "Maliki", Jabatan: "Web Master" },
        { Nama: "Kino", Jabatan: "Traveller" }
      ],
      ttd: {
        Nama: ".................................",
        Jabatan: "Kepala"
      }
    };
  },
  methods: {
    refresh(){
      let fd = new FormData()
      fd.append('data', `Select tb1.penumpang,tb1.unit_kerja,tb1.pilih,tb1.kendaraan,tb1.tujuan,tb1.keperluan,tb1.tanggal,tb2.nama as driver,tb3.nama_mobil,tb3.no_plate FROM driver_perjalanan tb1 LEFT JOIN tbuser tb2 ON tb1.id_driver= tb2.id LEFT JOIN driver_mobil tb3 ON tb1.id_mobil= tb3.id where tb1.id='${this.$route.params.id}'`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          console.log(res)
          this.key = Object.keys(res.data[0])
          this.datanya = res.data[0]
      })
    },
    getKeys() {
      let data = this.$store.state.print2[0];
      data = Object.keys(data);
      this.key = data;
    },
    ganti(e) {
      console.log(e);
      this.ttd.Nama = JSON.parse(e).Nama;
      this.ttd.Jabatan = JSON.parse(e).Jabatan;
      this.$forceUpdate();
    },
    print() {
      document.addEventListener('deviceready', function () {
        // cordova.plugins.printer is now available
        cordova.plugins.printer.print();
    }, false);
      window.print();
    },
    back() {
      this.$router.go(-1);
    },
    format(date) {
      return this.$datefns.format(date, "DD MMMM YYYY", {
        locale: id
      });
    }
  },
  mounted() {
    this.refresh()
    setTimeout(() => {
      this.getKeys();
    }, 500);
  }
};
</script>
<style scoped>
.setting {
  padding: 10px;
  line-heigth: 1.5;
}
td {
  font-size: 19px;
  line-heigth: 1.5;
}
@page {
  size: auto; /* auto is the initial value */

  /* this affects the margin in the printer settings */
  /* margin: 2cm 2cm 3cm 3cm; */
  margin:10%;
}

body {
  /* this affects the margin on the content before sending to printer */
  margin: 2cm 2cm 3cm 3cm;
  margin: 0px;
}
@media print {

    .no-print,
    .no-print * {
        display: none !important;
    }

    .table-print {
        border: 1px solid black;
    }
}
</style>