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
      <p class="font-bold" style="font-size:21px;">A. IDENTITAS PENDUDUK DESA</p>
      <div style="padding-left:40px;">
        <tr>
          <td>NIK</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.NIK}}</td>
        </tr>
        <tr>
          <td>Nama</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.NAMA}}</td>
        </tr>
        <tr>
          <td>Tempat, Tgl Lahir</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.TMPT_LHR}}, {{$store.state.prints.TGL_LHR}}</td>
        </tr>
        <tr>
          <td>Jenis Kelamin</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.JK}}</td>
        </tr>
        <tr>
          <td>Agama</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.AGAMA}}</td>
        </tr>
        <tr>
          <td>Golongan Darah</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.GDR}}</td>
        </tr>
      </div>
      <p class="font-bold" style="font-size:21px;">B. DATA PENDUDUK DESA</p>
      <div style="padding-left:40px;">
        <tr>
          <td>Status</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.STATUS}}</td>
        </tr>

        <tr>
          <td>Jabatan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.PEKERJAAN}}</td>
        </tr>
        <tr>
          <td>Pendidikan Terakhir</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.PDDK_AKHIR}}</td>
        </tr>
        <tr>
          <td>NO. KK</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.NO_KK}}</td>
        </tr>
        <tr>
          <td>ALAMAT</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.ALAMAT}} RT.{{$store.state.prints.RT}} RW.{{$store.state.prints.RW}}, Prov. {{$store.state.prints.NAMA_PROP}}, Kab. {{$store.state.prints.NAMA_KAB}}, Kel. {{$store.state.prints.NAMA_KEL}}</td>
        </tr>
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