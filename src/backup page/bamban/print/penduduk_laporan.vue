<template>
  <div style="font-family:times new roman;">
    <!-- {{$store.state.prints}} -->
    <button type="button" @click="back()" class="btn btn-sm btn-outline-dark no-print">Go Back!</button>
    <div style>
      <img
        src="@/static/photo/hulu sungai.png"
        class="kinoLightBox img-fluid rounded-top z-depth-2"
        style="height:100px;margin-left:10px;position:absolute;left:20px;"
        alt="no found"
      />
      <p class="pl-3 text-center" style="font-size:25px;line-height:1.0;line-spacing:3px;">
        PEMERINTAH KABUPATEN HULU SUNGAI SELATAN
        <br />KECAMATAN ANGKINANG
        <br />DESA BAMBAN
        <br />
      </p>
      <p
        class="pl-3 text-center"
        style="font-size:18px;"
      >Jl. A. Yani Km 11.2 Desa Bamban Kec. Angkinang Kab. HSS Kode Pos 71291</p>
      <img src="@/static/photo/line.jpg" class="img-fluid" style="width:100%;height:20px;" />
      <br />
      <p class="text-center underline" style="font-size:21px;font-weight:bold;">DATA PENDUDUK DESA</p>
      <br />
      <br />
      <div class="table-responsive-sm">
        <table border="1" style="border:1px solid black;">
          <!--Table head-->
          <thead class="mdb-color bg-white">
            <tr style="color:black;">
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">NO</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">NIK</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">Nama</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">JK</th>
              <th
                class="uppercase"
                style="font-size:13px;padding:2px;border:1px solid;"
              >Tempat, Tgl Lahir</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">Agama</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">Pekerjaan</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">Pendidikan</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">KET</th>
            </tr>
          </thead>
          <!--Table head-->
          <!--Table body-->
          <tbody>
            <tr
              style="font-size:13px;"
              v-for="(item, index) in $store.state.prints"
              :key="index+'print'"
            >
              <td style="font-size:13px;border:1px solid;padding:2px;">{{index+1}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{item.NIK}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{item.NAMA}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{item.JK}}</td>
              <td
                style="font-size:13px;border:1px solid;padding:2px;"
              >{{item.TMPT_LHR}}, {{item.TGL_LHR}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{item.AGAMA}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{item.PEKERJAAN}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{item.PDDK_AKHIR}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;width:20%;"></td>
            </tr>
          </tbody>
          <!--Table body-->
        </table>
        <!--Table-->
      </div>
      <br />
      <br />

      <div class="float-right" style="padding-right:70px;font-size:19px;">
        <p>Bamban, {{format(new Date())}}</p>
        <p>{{$store.state.print2.jabatan}}</p>
        <br />
        <br />
        <br />
        <br />
        <p class="underline font-bold" style="font-size:19px;">{{$store.state.print2.namaPerangkat}}</p>
      </div>
      <br />
    </div>
  </div>
</template>
<script>
var id = require('date-fns/locale/id')
export default {
  layout: 'print',
  data() {
    return {
      thnya: []
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    format(date) {
      return this.$datefns.format(date, 'DD MMMM YYYY', {
        locale: id
      })
    }
  },
  mounted() {
    // let keys = Object.keys(this.$store.state.prints[0]);
    // this.thnya = keys;
    setTimeout(() => {
      window.print()
    }, 2000)
  }
}
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
  margin: 2cm 2cm 3cm 3cm;
}

body {
  /* this affects the margin on the content before sending to printer */
  margin: 2cm 2cm 3cm 3cm;
  margin: 0px;
}
</style>