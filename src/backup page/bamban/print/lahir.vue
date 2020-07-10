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
      >SURAT KETERANGAN LAHIR</p>
      <p class="text-center">Nomor : {{$store.state.prints.NoSurat}}</p>
      <br />
      <br />
      <p
        style="font-size:19px;"
      >Yang bertanda tangan dibawah ini Kepala Desa Bamban Kecamatan Angkinang Kabupaten Hulu Sungai Selatan menerangkan bahwa :</p>
      <br />
      <br />
      <div style="padding-left:60px;">
        <tr>
          <td>Nama</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Nm1}}</td>
        </tr>
        <tr>
          <td>NIK</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.NIK}}</td>
        </tr>
        <tr>
          <td>Tempat, Tgl Lahir</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.TempatLahir}}, {{$store.state.prints.TglLahir}}</td>
        </tr>
        <tr>
          <td>Jenis Kelamin</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.JenisKelamin =='L'? 'Laki - Laki' : 'Perempuan' }}</td>
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
          <td>Alamat</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Alamat}}</td>
        </tr>
      </div>
      <br />
      <p
        style="font-size:19px;"
        class="justify"
      >Yang namanya tersebut diatas adalah benar-benar lahir di BAMBAN dan sekarang tetap bertempat tinggal/berdomisili {{$store.state.prints.Alamat}} , Nama tersebut diatas lahir dari pasangan suami istri yang bernama :</p>
      <br />
      <div style="padding-left:60px;">
        <tr>
          <td>Nama Ayah</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.NamaAyah}}</td>
        </tr>
        <tr>
          <td>Nama Ibu</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.NamaIbu}}</td>
        </tr>
      </div>
      <br />
      <p
        style="font-size:19px;"
        class="justify"
      >Demikian Surat Keterangan Lahir ini dibuat dan diberikan agar dapat dipergunakan sebagaimana mestinya</p>
      <br />
      <br />
      <div class="float-right" style="padding-right:70px;font-size:19px;">
        <p>Di buat Di : Bamban</p>
        <p>Pada Tanggal : {{format($store.state.prints.TglSurat)}}</p>
        <p>Kepala Desa Bamban</p>
        <p>{{$store.state.prints.jabatan}}</p>
        <br />
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
