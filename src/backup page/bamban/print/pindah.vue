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
      >SURAT KETERANGAN PINDAH</p>
      <p class="text-center">Nomor : {{$store.state.prints.NoSurat}}</p>
      <br />
      <p
        style="font-size:19px;"
      >Yang bertanda tangan dibawah ini Kepala Desa Bamban Kecamatan Angkinang Kabupaten Hulu Sungai Selatan menerangkan bahwa :</p>
      <div style="padding-left:60px;">
        <tr>
          <td>Nama</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Nm1}}</td>
        </tr>
        <tr>
          <td>Jenis Kelamin</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.JenisKelamin}}</td>
        </tr>
        <tr>
          <td>Tempat, Tgl Lahir</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.TmptLhr}}, {{$store.state.prints.TglLhr}}</td>
        </tr>
        <tr>
          <td>Kewarganegaraan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>Indonesia</td>
        </tr>
        <tr>
          <td>Agama</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Agama}}</td>
        </tr>
        <tr>
          <td>Status Perkawinan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Status}}</td>
        </tr>
        <tr>
          <td>Pekerjaan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Pekerjaan}}</td>
        </tr>
        <tr>
          <td>Pekerjaan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Pendidikan}}</td>
        </tr>
        <tr>
          <td>Alamat</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Alamat}} Kecamatan Angkinang Kabupaten Hulu Sungai Selatan</td>
        </tr>
        <tr>
          <td>NIK</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.NIK}}</td>
        </tr>
      </div>
      <br />
      <p
        style="font-size:19px;"
        class="justify"
      >Bahwa yang namanya tersebut diatas atas permintaan sendiri mau pindah ke :</p>
      <div style="padding-left:60px;">
        <tr>
          <td>Jalan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.JlnPindah}}</td>
        </tr>
        <tr>
          <td>Desa/Kelurahan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.DesaPindah}}</td>
        </tr>
        <tr>
          <td>Kecamatan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.KecPindah}}</td>
        </tr>
        <tr>
          <td>Kabupaten/Kota</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.KabPindah}}</td>
        </tr>
        <tr>
          <td>Provinsi</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.ProvPindah}}</td>
        </tr>
        <tr>
          <td>Pada Tanggal</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.TglPindah}}</td>
        </tr>
        <tr>
          <td>Alasan Pindah</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.AlasanPindah}}</td>
        </tr>
        <tr>
          <td>Pengikut</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Pengikut}}</td>
        </tr>
      </div>
      <br />
      <div class="table-responsive-sm">
        <table border="1" style="border:1px solid black;">
          <!--Table head-->
          <thead class="mdb-color bg-white">
            <tr style="color:black;">
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">NO</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">Nama</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">JK</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">Umur</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">SHDK</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">Pendidikan</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">NIK</th>
              <th class="uppercase" style="font-size:13px;padding:2px;border:1px solid;">KET</th>
            </tr>
          </thead>
          <!--Table head-->
          <!--Table body-->
          <tbody>
            <tr style="font-size:13px;">
              <td style="font-size:13px;border:1px solid;padding:2px;">1</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Nama1}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.JK1}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Umur1}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.SHDK1}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Pend1}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.NIK1}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;width:20%;"></td>
            </tr>
            <tr style="font-size:13px;">
              <td style="font-size:13px;border:1px solid;padding:2px;">2</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Nama2}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.JK2}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Umur2}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.SHDK2}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Pend2}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.NIK2}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;width:20%;"></td>
            </tr>
            <tr style="font-size:13px;">
              <td style="font-size:13px;border:1px solid;padding:2px;">3</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Nama3}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.JK3}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Umur3}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.SHDK3}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Pend3}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.NIK3}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;width:20%;"></td>
            </tr>
            <tr style="font-size:13px;">
              <td style="font-size:13px;border:1px solid;padding:2px;">4</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Nama4}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.JK4}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Umur4}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.SHDK4}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Pend4}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.NIK4}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;width:20%;"></td>
            </tr>
            <tr style="font-size:13px;">
              <td style="font-size:13px;border:1px solid;padding:2px;">5</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Nama5}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.JK5}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Umur5}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.SHDK5}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.Pend5}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;">{{$store.state.prints.NIK5}}</td>
              <td style="font-size:13px;border:1px solid;padding:2px;width:20%;"></td>
            </tr>
          </tbody>
          <!--Table body-->
        </table>
        <!--Table-->
      </div>
      <br />
      <p
        style="font-size:19px;"
        class="justify"
      >Demikian Surat Keterangan ini dibuat dan diberikan agar dapat dipergunakan sebagaimana mestinya</p>
      <br />
      <div class="float-right" style="padding-right:70px;font-size:19px;">
        <p>Di buat Di : Bamban</p>
        <p>Pada Tanggal : {{$store.state.prints.TglSurat}}</p>
        <p>{{$store.state.prints.jabatan}}</p>
        <br />
        <br />
        <br />
        <p class="underline font-bold" style="font-size:19px;">{{$store.state.prints.namaPerangkat}}</p>
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