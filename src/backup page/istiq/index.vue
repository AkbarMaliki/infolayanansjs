<template>
  <div>
    <div class="container-fluid" style="margin:0;padding:0;">
      <div class="row">
        <div class="w-full" style="background:#F0EEEF;height:200px;">
          <div class="offset-sm-2 col-sm-8 text-center font-times" style="background:#F0EEEF;">
            <div class="row">
              <div class="col-4 mx-auto my-auto">
                <a href="#" style="font-size:21px;color:black;" @click="menu='about'">About</a> &nbsp;&nbsp;&nbsp;
                <a
                  href="#"
                  style="font-size:21px;color:black;"
                  @click="menu='catalog'"
                >Catalog</a>
              </div>
              <div class="col-4 text-center">
                <img
                  src="@/static/photo/istiq_logo.png"
                  class="kinoLightBox img-fluid shadow-lg rounded-top z-depth-1 mx-auto animated fadeInDown middle"
                  style="border-radius: 20px;height:60px;width:180px;position;absolute;"
                  alt="top"
                />
              </div>
              <div class="col-4 mx-auto my-auto">
                <a href="#" style="font-size:21px;color:black;" @click="menu='login'">Login</a> &nbsp;&nbsp;&nbsp;
                <a
                  href="#"
                  style="font-size:21px;color:black;"
                  @click="menu='help'"
                >Help</a>
              </div>
            </div>

            <hr class="style16" />
          </div>
          <div class="col-12">
            <img
              src="@/static/photo/istiq.png"
              class="img-fluid animated fadeIn mx-auto middle"
              style="border-radius: 20px;animation-duration:5s;height:150px;margin-top:-34px;"
              alt="top"
            />
          </div>
        </div>
        <!-- ABOUT -->
        <div
          class="offset-sm-3 col-sm-6 animated fadeIn"
          style="animation-duration:2s;padding:30px;"
          v-show="menu=='about'"
        >
          <br />
          <hr />Bagaimana cara berbelanja di ISTIQ ?
          <br />1. Pilih Model baju yang ada di Katalog
          <br />2. Pilih bahan yang ingin anda pakai
          <br />3. pilih warna sesuai dengan bahan kain yang sudah disediakan.
          <br />4. order !
          <br />Dengan berbelanja di ISTIQ anda dapat memiliki baju sendiri. tidak pasaran. Bahkan bisa membuat baju keluarga dengan berbagai model dengan warna dan bahan yang sama.
          note : untuk request pemilihan motif, bahan dan warna, mohon dikonfirmasikan terlebih dahulu ke admin ISTIQ
          <br />
          <br />
          <img
            src="@/static/photo/size-ukuran.jpg"
            class="kinoLightBox img-fluid z-depth-2 hoverzoom"
            style="border-radius: 20px"
          />
          <img
            src="@/static/photo/size-anak-anak.jpg"
            class="kinoLightBox img-fluid z-depth-2 hoverzoom"
            style="border-radius: 20px"
          />
          <br />
          <hr />
          <img
            src="@/static/photo/wolfis.jpg"
            class="kinoLightBox img-fluid z-depth-2 hoverzoom"
            style="border-radius: 20px"
          />
          <p class="font-bold">BAHAN WOOLPEACH (100% POLYESTER)</p>1. Jenis bahannya ada yang tebal dan ada yang tipis, namun ringan.
          <br />2. Tidak mudah kusut.
          <br />3. Memiliki sifat tidak tembus pandang.
          <br />4. Permukaan bahannya tidak licin.
          <br />5. Kainnya tidak panas dan nyaman untuk dipakai.
          <br />6. Memiliki serat bahan yang halus dan rapat.
          <br />7. Kainnya sangat mudah untuk disetrika.
          <br />
          <br />
          <hr />
          <img
            src="@/static/photo/oxford.jpg"
            class="kinoLightBox img-fluid z-depth-2 hoverzoom"
            style="border-radius: 20px"
          />
          <p class="font-bold">BAHAN OXFORD</p>Bahan Kain ini merupakan jenis kain yang diperoleh dari beberapa campuran cotton dan polyester, sehingga apabila dipakai bahan akan tetap terasa dingin. Kelebihan dari kain oxford ini adalah, bahan lembut apabila dipakai. Kain jenis ini terkenal halus sehingga nyaman apabila dipakai untuk sehari-hari maupun resmi. Di samping itu, bahannya pun tidak panas dan juga cukup kuat dan tidak mudah sobek. Sedangkan kekurangan dari kain oxford ini adalah, kain tidak terlalu tebal atau bisa dibilang kainnya tipis.
          <br />
          <hr />
          <img
            src="@/static/photo/poplin.jpg"
            class="kinoLightBox img-fluid z-depth-2 hoverzoom"
            style="border-radius: 20px"
          />
          <p>BAHAN KATUN POPLIN</p>Kain poplin merupakan sejenis bahan kain yang berasal dari keluarga kain katun. Teknik tenunan yang diterapkan untuk membuat kain poplin ini yaitu berupa teknik plain weave melintang. Itulah sebabnya kain katun poplin umumnya memiliki tingkat kelenturan yang tinggi dan bersifat stretch (melar)
          <br />
          <hr />
          <img
            src="@/static/photo/supernova.jpg"
            class="kinoLightBox img-fluid z-depth-2 hoverzoom"
            style="border-radius: 20px"
          />
          <p class="font-bold">BAHAN SUPERNOVA</p>bertekstur halus nan lembut menjadikan kain supernova ini menjadikan nyaman para pemakainya. Dibekali dengan serat organic maupun buatan. Membuat kain supernova ini sangat cocok dan nyaman digunakan digunakan dalam daerah tropis. Namun, yang sangat disayangkan, adalah kain supernova ini memiliki serat yang tipis sehingga perlu berhati – hati dalam menggunakannya.
          <br />
          <hr />
          <img
            src="@/static/photo/linen.jpg"
            class="kinoLightBox img-fluid z-depth-2 hoverzoom"
            style="border-radius: 20px"
          />
          <p class="font-bold">BAHAN LINEN</p>Kain linen untuk pakaian sangat cocok dipakai untuk wilayah dengan cuaca panas maupun cuaca dingin. Saat cuaca panas, kain linen bisa dengan baik menyerap keringat. Sedangkan pada cuaca dingin, kain linen menghangatkan tubuh, Perawatan kain linen cenderung mudah selama tidak menggunakaan bahan kimia. Kain linen untuk pakaian juga relatif awet dan tahan lama dibanding dengan kain katun.
          <br />
          <hr />
          <img
            src="@/static/photo/rayon.jpg"
            class="kinoLightBox img-fluid z-depth-2 hoverzoom"
            style="border-radius: 20px"
          />
          <p class="font-bold">KATUN RAYON</p>Memiliki kelebihan yang sangat nyaman dan cocok untuk digunakan dalam musim panas, dikarenakan karakterisitk dari kain rayon itu sendiri yang memang berbahan adem dan baik dalam menyerap keringat. kekurangan yang dimiliki kain rayon pun juga sangat mainstream yaitu mudah kusut.
        </div>
        <!-- LOGIN -->
        <div
          class="offset-sm-3 col-sm-6 animated fadeIn"
          style="animation-duration:2s;padding:30px;"
          v-show="menu=='login'"
        >
          <br />
          <p class="text-center font-times font-bold text-2xl">LOGIN</p>
          <br />
          <hr />
          <div class="sm-form">
            <label for="username" class="font-bold font-times">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              class="form-control form-control-sm"
              placeholder="username"
              v-model="vdata.username"
            />
          </div>
          <div class="sm-form">
            <label for="password" class="font-bold font-times">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control form-control-sm"
              placeholder="password"
              v-model="vdata.password"
            />
          </div>

          <br />
          <hr class="1" />
          <button
            type="button"
            @click="logins"
            class="btn btn-sm btn-outline-success btn-block"
          >LOGIN</button>
          <hr />
        </div>
        <!-- HELP -->
        <div
          class="offset-sm-3 col-sm-6 animated fadeIn"
          style="animation-duration:2s;padding:30px;"
          v-show="menu=='help'"
        >
          <br />
          <br />
          <hr />
          <p>
            Bagaimana cara berbelanja di ISTIQ ?
            <br />1. Pilih Model baju yang ada di Katalog
            <br />2. Pilih bahan yang ingin anda pakai
            <br />3. pilih warna sesuai dengan bahan kain yang sudah disediakan.
            <br />4. order !
            <br />Dengan berbelanja di ISTIQ anda dapat memiliki baju sendiri. tidak pasaran. Bahkan bisa membuat baju keluarga dengan berbagai model dengan warna dan bahan yang sama.
            note : untuk request pemilihan motif, bahan dan warna, mohon dikonfirmasikan terlebih dahulu ke admin ISTIQ
          </p>
          <hr />
          <br />
          <br />
        </div>
        <!-- CATALOG -->
        <div
          class="offset-sm-1 col-sm-10 animated fadeIn"
          style="animation-duration:2s;margin-top:-10px;"
          v-show="menu=='catalog'"
        >
          <!-- LIST CATALOG -->
          <br />

          <hr class="style15 d-none d-sm-block pb-2" style="margin-top:15px;" />
          <hr class="style15 d-block d-sm-none pt-3" style="margin-top:4px;" />
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6">
                <div class="mb-4">
                  <span class="font-times font-bold">
                    Cari
                    <span class="d-inline-block d-sm-none">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> :&nbsp;&nbsp;
                  </span>
                  <input
                    id="SearchItem"
                    placeholder="Search Item"
                    class="shadow appearance-none mx-auto border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    style="width:50%;"
                    v-model="searchItem"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <tr>
                  <td class="font-times font-bold">BAHAN :&nbsp;&nbsp;</td>
                  <td>
                    <select class="form-control" style="width:100%;" @change="testt($event)">
                      <option></option>
                      <option>woolpeach</option>
                      <option>oxford</option>
                      <option>poplin</option>
                      <option>supernova</option>
                      <option>linen</option>
                      <option>rayon</option>
                    </select>
                  </td>
                </tr>
                <br />
              </div>
            </div>
          </div>

          <!-- <button type="button" @click="orderBy='asc'" class="btn btn-sm btn-primary">ASC</button>
          <button type="button" @click="orderBy='desc'" class="btn btn-sm btn-primary">DESC</button>-->
          <div class="container-fluid">
            <div class="row">
              <div
                class="col-sm-4 cursor-pointer pb-4"
                v-for="(item, index) in filteredData"
                :key="index+'data'"
              >
                <img
                  :src="`https://infolayanans.space/${item.gambar}`"
                  class="kinoLightBox shadow-lg img-fluid z-depth-1 hoverzoom"
                  style="border-radius: 20px;"
                  alt="circle"
                />
                <p
                  class="font-times text-uppercase font-bold text-center p-2 shadow-lg rounded-lg"
                >{{item.name}}</p>

                <div class="p-2">
                  <tr class="ml-2">
                    <td class="text-sm font-times font-bold text-uppercase">S/M</td>
                    <td class="text-sm font-times font-bold text-uppercase">&nbsp;:&nbsp;</td>
                    <td class="text-sm font-times font-bold text-uppercase">Rp. {{rp(item.S_M)}}</td>
                  </tr>
                  <tr>
                    <td class="text-sm font-times font-bold text-uppercase">L/XL</td>
                    <td class="text-sm font-times font-bold text-uppercase">&nbsp;:&nbsp;</td>
                    <td class="text-sm font-times font-bold text-uppercase">Rp. {{rp(item.L_XL)}}</td>
                  </tr>
                  <tr>
                    <td class="text-sm font-times font-bold text-uppercase">XXL</td>
                    <td class="text-sm font-times font-bold text-uppercase">&nbsp;:&nbsp;</td>
                    <td class="text-sm font-times font-bold text-uppercase">Rp. {{rp(item.XXL)}}</td>
                  </tr>
                  <p class="font-times text-right rounded-lg pr-2">
                    Bahan :
                    <b>{{item.bahan}}</b>
                  </p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="float-right pt-4">
                  &nbsp;
                  <span v-for="(item, index) in tombolPagination">
                    <button
                      type="button"
                      @click="changePagination(item)"
                      :key="index+'pagination2'"
                      v-show="item<jumlahPagination+1"
                      class="btn btn-sm btn-primary rounded-circle"
                      :class="{'bg-blue hover:bg-warning border-blue cursor-not-allowed text-red':item==pagination}"
                      :disabled="item==pagination"
                    >{{item}}</button>&nbsp;
                  </span>
                </div>
              </div>
              <div class="col-sm-12">
                <hr class="style2" />
              </div>
            </div>
          </div>
        </div>
        <div class="offset-sm-1 col-sm-10">
          <div style="height:30px;"></div>
          <p class="text-center text-xl font-times text-uppercase">
            <b>Open Order 24 Jam</b>
            <br />Pengiriman dari Kota Bandung
            <br />
            <b>ISTIQ</b>
            <br />Jalan Lodaya No 32 bandung
            <br />W.A : +62 8789 6778 267
            <br />
            <br />

            <button type="button" class="btn btn-lg btn-success shadow-lg">TANYA WHATSAPP</button>
          </p>
          <div style="height:30px;"></div>
        </div>
        <!-- FOOTER -->
        <div class="col-sm-12 shadow-lg" style="background:#F0EEEF;min-height:180px;">
          <div class="row">
            <div class="col-sm-12">
              <br />
            </div>
            <div class="col-sm-4 text-center middle mb-2">
              <img
                src="@/static/icon/jne.jpg"
                class="kinoLightBox img-sm shadow-lg z-depth-1 mx-auto"
                style="border-radius: 20px;height:60px;"
                alt="primary"
              />
            </div>
            <div class="col-sm-4 text-center middle">
              <img
                src="@/static/icon/bukalapak.png"
                class="kinoLightBox img-sm shadow-lg z-depth-1 mx-auto"
                style="border-radius: 20px;height:60px;"
                alt="primary"
              />
            </div>
            <div class="col-sm-4 text-center middle">
              <img
                src="@/static/icon/shopee.png"
                class="kinoLightBox img-fluid shadow-lg z-depth-1 mx-auto"
                style="border-radius: 20px;height:60px;"
                alt="primary"
              />
            </div>
          </div>
          <div class="col-sm-12 text-center">
            <hr class="style2" />© 2020 Hak Cipta Terpelihara
            <b>ISTIQ</b>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      file: "",
      vdata: {},
      menu: "catalog",
      datanya: "",
      temp1: 0,
      temp2: 9,
      pagination: 1,
      pembagiannya: 9,
      orderBy: "",
      orderWith: true,
      searchItem: ""
    };
  },
  computed: {
    jumlahPagination() {
      let data = this.datanya;
      return data.length / 9;
    },
    tombolPagination() {
      let data = this.pagination;
      // v-if != (current > max ) button nya
      let btn1 = data - 2;
      let btn2 = data - 1;
      let btn3 = data;
      let btn4 = data + 1;
      let btn5 = data + 2;
      let array = [btn1, btn2, btn3, btn4, btn5];
      if (array.indexOf(-1) != -1) {
        array = [1, 2, 3, 4, 5];
      } else if (array.indexOf(0) != -1) {
        array = [1, 2, 3, 4, 5];
      }
      return array;
    },
    filteredData() {
      let that = this;
      let data = this.datanya;
      //! order fungsi
      if (this.orderBy.length > 0) {
        data = this.$_.orderBy(data, ["title"], [this.orderBy]);
      }
      //! search fungsi
      if (data[0] != undefined) {
        let keys = Object.keys(data[0]);
        data = data.filter((v, i, a) => {
          let hasil = false;
          keys.filter(key => {
            if (typeof v[key] === "string") {
              if (
                v[key].toLowerCase().indexOf(this.searchItem.toLowerCase()) !=
                -1
              ) {
                hasil = true;
              }
            } else {
              if (v[key].toString().indexOf(this.searchItem) != -1) {
                hasil = true;
              }
            }
          });
          if (hasil) return v;
        });
      }
      // data = data.map(e => {
      //   let obj = {};
      //   let kunci = Object.keys(e);
      //   kunci = that.$_.difference(kunci, that.unless);
      //   kunci.forEach((a, index) => {
      //     if (kunci.find(e => e == that.date[index])) {
      //     } else {
      //       // obj[a] = 'tanggal'
      //     }
      //     console.log(typeof e[a]);
      //     obj[a] =
      //       typeof e[a] != "string"
      //         ? e[a]
      //         : new Date(e[a]) !== "Invalid Date" && !isNaN(new Date(e[a]))
      //         ? that.format(e[a])
      //         : e[a];
      //   });
      //   return obj;
      // });
      data = data.slice(this.temp1, this.temp2);
      return data;
    }
  },
  methods: {
    tes(e) {},
    testt(e) {
      this.searchItem = e.target.value;
    },
    logins() {
      if (this.vdata.username == "admin" && this.vdata.password == "admin") {
        this.$router.push("/istiq/admin");
      } else {
        alert("username password salah");
      }
    },
    rp(bilangan) {
      var reverse = bilangan
        .toString()
        .split("")
        .reverse()
        .join("");
      var ribuan = reverse.match(/\d{1,3}/g);
      ribuan = ribuan
        .join(".")
        .split("")
        .reverse()
        .join("");

      // Cetak hasil
      return ribuan;
    },
    pagPrev() {
      this.pagination = this.pagination - 1;
      if (this.pagination == 0) {
        this.pagination = 1;
      }
      this.temp2 = this.pagination * this.pembagiannya;
      this.temp1 = this.temp2 - this.pembagiannya;
    },
    pagNext() {
      this.pagination = this.pagination + 1;
      if (this.pagination > this.jumlahPagination) {
        this.pagination = this.jumlahPagination;
      }
      this.temp2 = this.pagination * this.pembagiannya;
      this.temp1 = this.temp2 - this.pembagiannya;
    },
    changePagination(pag) {
      this.pagination = pag;
      this.temp2 = this.pagination * this.pembagiannya;
      this.temp1 = this.temp2 - this.pembagiannya;
    },
    onchangefile(e) {
      // $event
      this.file = e.target.files[0]; // tambahkan data set kosong file:""
      console.log(this.file);
    },
    inputfile() {
      let fd = new FormData();
      fd.append("file", this.file);
      axios
        .post("https://infolayanans.space" + "/api/mysql/upload.php", fd, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local"),
            "content-type": "multipart/form-data"
          }
        })
        .then(res => {
          console.log(res);
          alert("Simpan Data Berhasil!");
        });
    }
  },
  mounted() {
    let fd = new FormData();
    fd.append("data", "select * from istiq_baju");
    fd.append("database", " infolay3_test");
    axios.post("https://infolayanans.space/api/mysql/auto.php", fd).then(res => {
      this.datanya = res.data;
    });
  }
};
</script>
<style scoped>
.middle {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.hoverzoom {
  margin-left: auto;
  margin-right: auto;
  display: block;
  height: 300px; /* [1.1] Set it as per your need */
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}

/* [2] Transition property for smooth transformation of images */
.hoverzoom {
  transition: all 0.5s ease;
}

/* [3] Finally, transforming the image when container gets hovered */
.hoverzoom:hover {
  transform: scale(1.2);
}
</style>
