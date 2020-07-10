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
      <p
        class="text-center underline"
        style="font-size:21px;font-weight:bold;"
      >LAPORAN SURAT KETERANGAN LAHIR</p>
      <br />
      <p>Laporan Tanggal : {{format($store.state.prints.date1)}} S/D {{format($store.state.prints.date2)}}</p>
      <p>Jumlah Data : {{$store.state.prints.length}} Records</p>
      <br />
      <div class="table-responsive-sm" style="width:100%;">
        <table border="1" style="border:1px solid black;widht:100%;margin:1em auto;">
          <!--Table head-->
          <thead class="mdb-color bg-white">
            <tr style="color:black;">
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">NO</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">No.Surat</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">Tgl.Surat</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">Nama</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">NIK</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">TTL</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">JK</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">Pekerjaan</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">Alamat</th>
            </tr>
          </thead>
          <!--Table head-->
          <!--Table body-->
          <tbody>
            <tr
              style="font-size:12px;"
              v-for="(item, index) in $store.state.prints"
              :key="index+'print'"
            >
              <td style="font-size:12px;border:1px solid;padding:2px;">{{index+1}}</td>
              <td style="font-size:12px;border:1px solid;padding:2px;">{{item.NoSurat}}</td>
              <td style="font-size:12px;border:1px solid;padding:2px;">{{item.TglSurat}}</td>
              <td style="font-size:12px;border:1px solid;padding:2px;">{{item.Nm1}}</td>
              <td style="font-size:12px;border:1px solid;padding:2px;">{{item.NIK}}</td>
              <td
                style="font-size:12px;border:1px solid;padding:2px;"
              >{{item.TempatLahir}}, {{item.TanggalLahir}}</td>
              <td style="font-size:12px;border:1px solid;padding:2px;">{{item.JenisKelamin}}</td>
              <td style="font-size:12px;border:1px solid;padding:2px;">{{item.Pekerjaan}}</td>
              <td style="font-size:12px;border:1px solid;padding:2px;">{{item.Alamat}}</td>
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
        <p class="underline font-bold" style="font-size:19px;">{{$store.state.print2.namaPerangkat}}</p>
      </div>
      <!-- BAGIAN 2 -->
      <!-- <div style="page-break-after: always;"></div>

      <br>
      <img
        src="@/static/photo/hulu sungai.png"
        class="kinoLightBox img-fluid rounded-top z-depth-2"
        style="height:100px;position:absolute;margin-left:40px;"
        alt="no found"
      >
      <p class="pl-3 text-center" style="font-size:25px;line-height:1.0;line-spacing:3px;">
        PEMERINTAH KABUPATEN HULU SUNGAI SELATAN
        <br>KECAMATAN ANGKINANG
        <br>DESA BAMBAN
        <br>
      </p>
      <p
        class="pl-3 text-center"
        style="font-size:18px;"
      >Jl. A. Yani Km 11.2 Desa Bamban Kec. Angkinang Kab. HSS Kode Pos 71291</p>
      <img src="@/static/photo/line.jpg" class="img-fluid" style="width:100%;height:20px;">
      <p
        class="text-center underline"
        style="font-size:21px;font-weight:bold;"
      >LAPORAN DATA PENDUDUK LAHIR</p>
      <br>
      <p>Laporan Tanggal : {{format($store.state.prints.date1)}} S/D {{format($store.state.prints.date2)}}</p>
      <p>Jumlah Data Penduduk yang lahir : {{$store.state.prints.length}} Records</p>
      <br>
      <div class="table-responsive-sm" style="width:100%;">
        <table border="1" style="border:1px solid black;widht:100%;margin:1em auto;">
          <thead class="mdb-color bg-white">
            <tr style="color:black;width:100%;">
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">NO</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">Nama</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">TTL</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">JK</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">Nama Ayah</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">Nama Ibu</th>
              <th class="uppercase" style="font-size:11px;padding:2px;border:1px solid;">Alamat</th>
            </tr>
          </thead>
          <tbody>
            <tr
              style="font-size:12px;width:100%;"
              v-for="(item, index) in $store.state.prints"
              :key="index+'print'"
            >
              <td style="font-size:12px;border:1px solid;padding:2px;">{{index+1}}</td>
              <td style="font-size:12px;border:1px solid;padding:2px;">{{item.Nm1}}</td>
              <td
                style="font-size:12px;border:1px solid;padding:2px;"
              >{{item.TempatLahir}}, {{item.TanggalLahir}}</td>
              <td style="font-size:12px;border:1px solid;padding:2px;">{{item.JenisKelamin}}</td>
              <td style="font-size:12px;border:1px solid;padding:2px;">{{item.NamaAyah}}</td>
              <td style="font-size:12px;border:1px solid;padding:2px;">{{item.NamaIbu}}</td>
              <td style="font-size:12px;border:1px solid;padding:2px;">{{item.Alamat}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br>
      <br>

      <div class="float-right" style="padding-right:70px;font-size:19px;">
        <p>Bamban, {{format(new Date())}}</p>
        <p>Kepala Desa Bamban</p>
        <br>
        <br>
        <p
          class="underline font-bold"
          style="font-size:19px;"
        >.................................................</p>
      </div>-->
    </div>
  </div>
</template>
<script>
var id = require('date-fns/locale/id')
export default {
  layout: 'print',
  data() {
    return {
      thnya: [],
      records: ''
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