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
      <p
        class="text-center underline"
        style="font-size:21px;font-weight:bold;"
      >LAPORAN JUMLAH PENDUDUK DAN PEMBUATAN SURAT</p>
      <br />
      <br />
      <p
        style="font-size:19px;"
      >Pada Tanggal {{format($store.state.prints.date1)}} s/d {{format($store.state.prints.date2)}} :</p>
      <br />
      <br />
      <div class="table-responsive-sm">
        <table border="1" style="border:1px solid black;margin:1em auto;">
          <!--Table head-->
          <thead class="mdb-color bg-brown">
            <tr class="text-black" style="color:black;">
              <th
                class="uppercase text-center"
                style="font-size:12px;padding:2px;border:1px solid;"
                rowspan="2"
              >Nama Desa</th>
              <th
                class="uppercase text-center"
                style="font-size:12px;padding:2px;border:1px solid;"
                colspan="2"
              >Jumlah Penduduk</th>
              <th
                class="uppercase text-center"
                style="font-size:12px;padding:2px;border:1px solid;"
                rowspan="2"
              >Jlh Kepala Keluarga</th>
              <th
                class="uppercase text-center"
                style="font-size:12px;padding:2px;border:1px solid;"
                rowspan="2"
              >Surat Ket.Domisili</th>
              <th
                class="uppercase text-center"
                style="font-size:12px;padding:2px;border:1px solid;"
                rowspan="2"
              >Surat Ket.Lahir</th>
              <th
                class="uppercase text-center"
                style="font-size:12px;padding:2px;border:1px solid;"
                rowspan="2"
              >Surat Ket.Kematian</th>
              <th
                class="uppercase text-center"
                style="font-size:12px;padding:2px;border:1px solid;"
                rowspan="2"
              >Surat Ket.Pindah</th>
            </tr>
            <tr>
              <td class="text-center" style="font-size:12px;padding:2px;border:1px solid;">L</td>
              <td class="text-center" style="font-size:12px;padding:2px;border:1px solid;">P</td>
            </tr>
          </thead>
          <!--Table head-->
          <!--Table body-->
          <tbody>
            <tr>
              <th
                class="text-center"
                scope="row"
                style="font-size:12px;border:1px solid;padding:2px;"
              >BAMBAN</th>
              <td
                class="text-center"
                style="font-size:12px;border:1px solid;padding:2px;"
              >{{$store.state.prints.pendudukLaki}}</td>
              <td
                class="text-center"
                style="font-size:12px;border:1px solid;padding:2px;"
              >{{$store.state.prints.pendudukPerempuan}}</td>
              <td
                class="text-center"
                style="font-size:12px;border:1px solid;padding:2px;"
              >{{$store.state.prints.kepalaKeluarga}}</td>
              <td
                class="text-center"
                style="font-size:12px;border:1px solid;padding:2px;"
              >{{$store.state.prints.suratDomisili}}</td>
              <td
                class="text-center"
                style="font-size:12px;border:1px solid;padding:2px;"
              >{{$store.state.prints.suratLahir}}</td>
              <td
                class="text-center"
                style="font-size:12px;border:1px solid;padding:2px;"
              >{{$store.state.prints.suratKematian}}</td>
              <td
                class="text-center"
                style="font-size:12px;border:1px solid;padding:2px;"
              >{{$store.state.prints.suratPindah}}</td>
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