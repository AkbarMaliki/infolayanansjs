<template>
  <div style="font-family:times new roman;">
    <button type="button" @click="back()" class="btn btn-sm btn-outline-dark no-print">Go Back!</button>
    <div class="text-center">
      <img
        src="@/static/photo/garuda.jpg"
        class="kinoLightBox img-fluid rounded-top z-depth-2"
        style="height:100px;"
        alt="no found"
      />
    </div>
    <div style>
      <br />
      <p class="pl-3 text-center" style="font-size:25px;line-height:1.0;line-spacing:3px;">
        BIODATA PENDUDUK WARGA NEGARA INDONESIA
        <br />
      </p>
      <br />
      <p style="font-size:19px;">DATA PERSONAL :</p>
      <div style="padding-left:60px;">
        <tr>
          <td>NIK</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.NIK}}</td>
        </tr>
        <tr>
          <td>Nama Lengkap</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Nm1}}</td>
        </tr>
        <tr>
          <td>Tempat Lahir</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.TmptLhr}}</td>
        </tr>
        <tr>
          <td>Tanggal Lahir</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.TglLhr}}</td>
        </tr>
        <tr>
          <td>Golongan Darah</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{datanya.GDR}}</td>
        </tr>
        <tr>
          <td>Jenis Kelamin</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.JenisKelamin}}</td>
        </tr>
        <tr>
          <td>Agama</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Agama}}</td>
        </tr>
        <tr>
          <td>Pendidikan terakhir</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Pendidikan}}</td>
        </tr>
        <tr>
          <td>Jenis Pekerjaan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Pekerjaan}}</td>
        </tr>
        <tr>
          <td>Penyandang Cacat</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{datanya.PENYANDANG_CACAT}}</td>
        </tr>
        <tr>
          <td>Status Perkawinan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Status}}</td>
        </tr>
        <tr>
          <td>Status Hub. Dalam Keluarga</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{datanya.SHDK}}</td>
        </tr>
        <tr>
          <td>NIK Ibu</td>
          <td>&nbsp;:&nbsp;</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Nama Lengkap Ibu</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{datanya.NAMA_IBU}}</td>
        </tr>
        <tr>
          <td>NIK Ayah</td>
          <td>&nbsp;:&nbsp;</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Nama Lengkap Ayah</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{datanya.NAMA_AYAH}}</td>
        </tr>
        <tr>
          <td>Alamat Sebelumnya</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.Alamat}}</td>
        </tr>
        <tr>
          <td>Alamat Sekarang</td>
          <td>&nbsp;:&nbsp;</td>
          <td>{{$store.state.prints.JlnPindah}}, Kec. {{$store.state.prints.KecPindah}}, Kab. {{$store.state.prints.KabPindah}}, Prov. {{$store.state.prints.ProvPindah}}</td>
        </tr>
      </div>
      <br />
      <p style="font-size:19px;" class="justify">DATA KEPEMILIKAN DOKUMEN</p>
      <div style="padding-left:60px;">
        <tr>
          <td>Nomor Kartu Keluarga</td>
          <td>&nbsp;:&nbsp;</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Nomor Passport</td>
          <td>&nbsp;:&nbsp;</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Tanggal berakhir Passport</td>
          <td>&nbsp;:&nbsp;</td>
          <td>-</td>
        </tr>
        <tr>
          <td>No. Akta/Surat Kenal Lahir</td>
          <td>&nbsp;:&nbsp;</td>
          <td>-</td>
        </tr>
        <tr>
          <td>No. Akta Buku Nikah</td>
          <td>&nbsp;:&nbsp;</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Tanggal perkawinan</td>
          <td>&nbsp;:&nbsp;</td>
          <td>-</td>
        </tr>
        <tr>
          <td>No. Akta Perceraian</td>
          <td>&nbsp;:&nbsp;</td>
          <td>-</td>
        </tr>
        <tr>
          <td>Tanggal perceraian</td>
          <td>&nbsp;:&nbsp;</td>
          <td>-</td>
        </tr>
      </div>
      <br />
      <br />
      <br />
      <div style="padding-left:70px;font-size:19px;position:absolute;">
        Yang Bersangkutan,
        <br />
        <br />
        <br />
        <br />
        {{$store.state.prints.Nm1}}
      </div>
      <div class="float-right" style="padding-right:70px;font-size:19px;">
        <p>CAMAT ANGKINANG</p>
        <br />
        <br />
        <br />
        <p
          class="underline font-bold"
          style="font-size:19px;"
        >..............................................</p>
      </div>
      <div style="page-break-after: always;"></div>
      <br />
    </div>
  </div>
</template>
<script>
import axios from "axios";
var id = require("date-fns/locale/id");
export default {
  layout: "print",
  data() {
    return {
      thnya: [],
      datanya: []
    };
  },
  methods: {
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
    let fd = new FormData();
    let that = this;
    fd.append("data[table]", "bamban_tbpenduduk");
    if (this.$store.state.prints) {
      axios.post("http://kantorbamban2.online/getData.php", fd).then(res => {
        // console.log(res);
        let data = res.data.filter(e => {
          if (e.URUTID == that.$store.state.prints.PendudukID) {
            return true;
          }
        });
        that.datanya = data[0];
      });
    }
    setTimeout(() => {
      window.print();
    }, 2000);
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
  margin: 2cm 2cm 3cm 3cm;
}

body {
  /* this affects the margin on the content before sending to printer */
  margin: 2cm 2cm 3cm 3cm;
  margin: 0px;
}
</style>