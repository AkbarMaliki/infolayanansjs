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
      <p class="text-center underline" style="font-size:21px;font-weight:bold;">DATA PERANGKAT DESA</p>
      <br />
      <br />
      <p class="font-bold" style="font-size:21px;">A. IDENTITAS PERANGKAT DESA</p>
      <div style="padding-left:40px;">
        <tr>
          <td>Nama</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Nama}}</td>
        </tr>
        <tr>
          <td>Tempat, Tgl Lahir</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.TempatLahir}}, {{$store.state.prints.TglLahir}}</td>
        </tr>
        <tr>
          <td>Jenis Kelamin</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.JK}}</td>
        </tr>
        <tr>
          <td>Agama</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Agama}}</td>
        </tr>
      </div>
      <p class="font-bold" style="font-size:21px;">B. DATA PERANGKAT DESA</p>
      <div style="padding-left:40px;">
        <tr>
          <td>Jabatan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Jabatan}}</td>
        </tr>
        <tr>
          <td>Pendidikan Terakhir</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.PendTerakhir}}</td>
        </tr>
        <tr>
          <td>No Pengangkatan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.NoPengangkatan}}</td>
        </tr>
        <tr>
          <td>Tanggal Pengangkatan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.TglPengangkatan}}</td>
        </tr>
      </div>
      <br />
      <br />
      <img
        :src="$store.state.url+$store.state.prints.Gambar"
        class="kinoLightBox img-fluid"
        style="width:120px;margin-left:70px;position:absolute;"
      />

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
      // cordova.plugins.printer.print();
      document.addEventListener(
        'deviceready',
        function() {
          cordova.plugins.printer.print()
        },
        false
      )
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
  size: potrait; /* auto is the initial value */

  /* this affects the margin in the printer settings */
}

body {
  /* this affects the margin on the content before sending to printer */
}
</style>