
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
    <div style='font-family:times new roman;'>
      <p class="pl-3 text-center font-times font-bold" style="font-size:18px;line-height:1.0;line-spacing:3px;">
        FORM KERJA LEMBUR
        <br>
      Unit Kerja {{datanya.posisi}} 
      </p>
      <br>
      <br>
      <br>
      <br>
      <p>Kepada Yth.
        <br>
        Deputy Service Manager BTN KC Banjarbaru <br>
        Di <br>
        </p>   
      <p class="pl-5">Tempat</p>
      <br />
      <br />
      <p class="pr-4">Sehubungan dengan adanya tugas yang harus cepat diselesaikan/dikerjakan dimana memerlukan waktu lembur di luar jam/hari
         kerja normal, maka dengan ini kami mengajukan permohonan lembur pada hari : <span class="font-bold">
          {{datanya.tanggal}}
          </span> 
          , dengan rincian pekerjaan
        sebagai berikut : 
      </p>
      <br />
      <!--  -->
      <!-- TABLE -->
      <!--  -->
      <div class="table-responsive">

      <table class="table-responsive-lg table-sm table-bordered w-full" >
        <tr>
          <th class="p-2">Disposisi <span class="text-uppercase">
            </span>
            </th>
          <th class="p-2">Keterangan Kerja Lembur</th>
        </tr>
        <tr>
          <td>
            <p class="font-bold font-times text-uppercase">
              {{datanya.head}}
            </p>
            <p class="p-1">
            {{datanya.disposisi2}}
            </p>
            <br>
             <p class="font-bold font-times text-uppercase">
              {{datanya.unit_head}}
            </p>
            <p class="p-1">
            {{datanya.disposisi1}}
            </p>
            <br>
            
          </td>
          <td style="width:70%;">
            A. Jenis Pekerjaan yang perlu dilemburkan :
            <br>
            <span class="pl-4">
            - {{datanya.jenis_pekerjaan}}
            </span>
             <br>
            B. Rincian tugas kerja lembur :
            <br>
            <span class="pl-4">
            - {{datanya.rincian_kerja}}
            </span>
             <br>
            C. Jumlah & daftar nama Pegawai yang diperlukan untuk kerja lembur : &nbsp;
            <br>
            <div class="pl-4">
                - Jumlah Pegawai
                &nbsp;:&nbsp;
                1 Orang <br>
                - Nama Pegawai
                &nbsp;:&nbsp;
                {{datanya.nama}} / NIP {{datanya.nip}}<br>
               - Waktu / Jama Lembur 
               &nbsp;:&nbsp;
               {{datanya.jam_lama}}
            </div>
          </td>
        </tr>
      </table>
      </div>
      <br>
      <p>Demikian permohonan ini kami ajukan, atas perhatiannya kami ucapkan terima kasih.</p>
     
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
        </div>
        <div class="col-4">
        </div>
        <div class="col-4">
        <p>Banjarbaru, {{format(new Date())}}</p>
        <p class="font-bold">Hormat Kami</p>
        <br />
        <br />
        <img :src="ttds1" class="kinoLightBox img-fluid " style="height:120px;width:100px;">
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
      ttds1:'',
      ttds2:'',
      ttds3:'',
      ttd: {
        Nama: ".................................",
        Jabatan: "Kepala"
      }
    };
  },
  methods: {
    refresh(){
      let fd = new FormData()
      fd.append('data', `SELECT  tb1.disposisi1,tb1.disposisi2,tb2.nama,tb3.posisi as head, tb4.posisi as unit_head,tb2.posisi,tb2.nip,tb1.jenis_pekerjaan,tb1.jam_lembur,tb1.jam_lama,tb1.rincian_kerja,tb1.tanggal,tb1.status,tb1.id FROM driver_lembur tb1 LEFT JOIN tbuser tb2 ON tb1.id_user= tb2.id left join tbuser tb3 on tb3.id=tb1.head left join tbuser tb4 on tb4.id=tb1.unit_head where  tb1.id='${this.$route.params.id}' `)
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
    let fd = new FormData()
    fd.append('data', `select * from driver_lembur where id='${this.$route.params.id}'`)
    fd.append('database', ' infolay3_test')
    axios.post('https://infolayanans.space/api/mysql/auto.php', fd
    , {
        headers: {
        Authorization: localStorage.getItem('auth._token.local')
        }
    }).then(res => {
        if(res.data[0].unit_head==0){
          // unit head
            let fd2 = new FormData()
            fd2.append('data', `select * from tbuser_ttd where id_user='${res.data[0].id_user}'`)
            fd2.append('database', ' infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                this.ttds1 = res.data[0].ttd
          })
        }else{
            //karyawan
              let fd3 = new FormData()
              fd3.append('data', `select * from tbuser_ttd where id_user='${res.data[0].unit_head}'`)
              fd3.append('database', ' infolay3_test')
              axios.post('https://infolayanans.space/api/mysql/auto.php', fd3
              , {
                  headers: {
                  Authorization: localStorage.getItem('auth._token.local')
                  }
              }).then(res => {
                  this.ttds1 = res.data[0].ttd
            })
        }
    })
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
}
@media print {

    .no-print,
    .no-print * {
        display: none !important;
    }

    .table-print {
        border: 1px solid black;
    }
    .border-none-print{
      border:none;
    }
}
</style>