<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 " style="padding:0;margin:0;height:140px;background: rgb(201,206,231);
background: linear-gradient(0deg, rgba(201,206,231,1) 3%, rgba(32,110,210,0.5410539215686274) 36%, rgba(73,115,217,0.8603816526610644) 93%);">
          <!-- GARIS KIRI ATAS -->
          <img src="@/static/web/garis3.png" class="img-fluid z-depth-1  animated fadeInLeft" style="height:5vh;width:80vw;" />
          <span class="absolute" style="right:10px;;top:0;color:White;">
            <a href="#" style="margin-left:10px;" class="font-times" @click="$router.push('/sekolah/login')"> LOGIN <span class="typcn typcn-user"></span></a>
          </span>
          <!-- GARIS KIRI ATAS END -->
          <!-- LOGO -->
          <img
            src="@/static/logo/sd.png"
            class="img-fluid z-depth-1 absolute  animated fadeIn"
            style="width:60px;left:30px;top:45px;"
          />
          <span class="absolute font-times  sm:text-xl md:text-2xl xl:texl-2xl" style="left:110px;top:45px;color:white;">
            SMA Negeri 1 Tambang Ulang
            <br />Website Akademik
          </span>
          <!-- LOGO END-->
          <!-- MENU KANAN BAWAH -->
          <img
            src="@/static/web/garis1.png"
            class="absolute  z-depth-1 animated fadeInRight"
            style="top:110px;right:0;height:7vh;width:83vw;"
          />
          <nav role="navigation" class="absolute" style="z-index:10;right:1em;top:110px;">
            <ul>
              <!-- MENU 1 -->
              <li class="sm:mr-4 btn-outline-danger border-1 border-black" @click="menus='tentang'">
                <a href="#" style="color:black;"><span class="typcn typcn-brush"></span> Tentang</a>
              </li>
              <!-- MENU 2 -->
              <li class="sm:mr-4 btn-outline-danger border-1 border-black" @click="menus='pelajaran'">
                <a href="#" style="color:black;"><span class="typcn typcn-calendar"></span> Mata Pelajaran</a>
              </li>
              <!-- MENU 3 -->
               <li class="sm:mr-4 btn-outline-danger border-1 border-black" @click="menus='infrastuktur'">
                <a href="#" style="color:black;"><span class="typcn typcn-calendar"></span> Infrastruktur</a>
              </li>
              <!-- MENU 4 -->
              
            </ul>
          </nav>
          <!-- MENU KANAN BAWAH END -->
        </div>
        <div class="col-sm-12" style="padding:0;margin:0;">
          <hr class="style13" style="margin:0;padding:0;" />
          <div style="height:40px;background:#363B40;"></div>
        </div>
        <div class="col-sm-12 p-3">
          <!-- CONTENT -->
          <div class="container-fluid">
              <div class="row " v-if="menus=='tentang'">
                  <div class="col-sm-6">
                       <carousel
                          :per-page="1"
                          :autoplay="true"
                          :autoplayTimeout="6000" 
                          :mouse-drag="true"
                          :loop="true"
                          :centerMode="true"
                          :adjustableHeight="true"
                          :paginationActiveColor="'blue'"
                          :speed="1000"
                      >
                          <slide><img src="@/static/photo/sma1.jpg" class="kinoLightBox img-fluid  rounded-lg shadow-lg" style="height:300px;">
                          </slide>
                           <slide><img src="@/static/photo/sma2.jpg" class="kinoLightBox img-fluid rounded-lg shadow-lg " style="height:300px;">
                          </slide>
                           <slide><img src="@/static/photo/sma3.jpg" class="kinoLightBox img-fluid rounded-lg shadow-lg " style="height:300px;">
                          </slide>
                      </carousel>
                  </div>
                  <div class="col-sm-6">
                    <p class="text-center font-bold font-times text-uppercase">SMA Negeri 1 Tambang Ulang</p>
                    <br>
                    <p class="text-justify font-times">NPSN : 60702927 <br>
                       Status : Negeri<br>
                      Akreditasi : C <br>

                      Bentuk Pendidikan : SMA<br>

                      Status Kepemilikan : Pemerintah Daerah<br>

                      SK Pendirian Sekolah : 03/PPS/SK/V/2010<br>

                      Tanggal SK Pendirian : 1900-01-01<br>

                      SK Izin Operasional : 420.3/001.6/DISDIK/2012<br>
                      </p>
                      <br>
                      <p class="font-bold">Alamat: Tambang Ulang, Kabupaten Tanah Laut, Kalimantan Selatan 70854</p>
                  </div>
              </div>
              <div class="row" v-else-if="menus=='pelajaran'">
                <div class="offset-sm-2 col-sm-8">
                  <p class="text-center font-bold font-times">Mata Pelajaran</p>
                  <p v-for="(item, index) in pelajarans" :key="index" class="font-times text-capitalize">{{index+1}}. {{item.nama_pelajaran}}</p>
                </div>
              </div>
              <div class="row" v-else-if="menus=='infrastuktur'">
                <div class="offset-sm-2 col-sm-8">
                  <p class="text-center font-bold font-times">Infrastruktur</p>
                   <div class="table-responsive-sm">
                            <table class="table table-sm  table-striped table-hover">
                                <!--Table head-->
                                <thead class="mdb-color bg-black">
                                      <tr>
                                      <th>No</th>
                                      <th>Jenis Sarpas</th>
                                      <th>Jumlah</th>
                                    </tr>
                                </thead>
                                <!--Table head-->
                                <!--Table body-->
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Ruang Kelas</td>
                                    <td>8</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>Ruang Labolaturium</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>Ruang Perpustakaan</td>
                                    <td>1</td>
                                  </tr>
                                </tbody>
                                <!--Table body-->
                            </table>
                            <!--Table-->
                        </div>
                </div>
              </div>
          </div>
          
        
          <br />
         
        </div>
      </div>
    </div>
    <!-- FOOTER -->
    <div class="container-fluid" style="margin:0;padding:0;width:100%;">
      <div class="row" style="margin:0;padding:0;">
        <div class="col-sm-12 bg-black">
          <!-- footer -->
          <div class="row">
            <div
              class="col-sm-4 py-2 font-times"
            >Jl. A. YANI KM 49, Tambang Ulang, Kec. Tambang Ulang, Kab. Tanah Laut Prov. Kalimantan Selatan</div>
            <div
              class="col-sm-4 py-2 font-times"
            >
            <p class="text-center">
              
            </p>
            </div>
            <div
              class="col-sm-4 py-2 font-times text-center"
            >
            <br>
            <br>
            Created By Monalisa
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Carousel, Slide } from 'vue-carousel';
  import axios from 'axios'
export default {
  data() {
    return {
      menus:"tentang",
      vdata: {},
      pelajarans:[]
    };
  },
  components:{
     Carousel,
          Slide
  },
  mounted() {
    let fd = new FormData()
    fd.append('data', `select * from setup_pelajaran`)//database setting di server
    fd.append('database','infolay3_test')
    axios.post('https://infolayanans.space/api/mysql/auto.php', fd
    , {
        headers: {
        Authorization: localStorage.getItem('auth._token.local')
        }
    }).then(res => {
        console.log(res)
        this.pelajarans=res.data
        this.$forceUpdate()
    })
  },
};
</script>
<style scoped>
/* DROPDOWN */
a {
  text-decoration: none;
}

nav {
  font-family: "Times New Roman", Times, serif;
}

nav > ul {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

nav > ul > li {
  padding: 4px;
  color: black;
  display: block;
  float: left;
  z-index: 100;
  text-align: center;
  min-width: 60px;
  margin-left: 5px;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
}

nav > ul > li a {
  color: blue;
}

nav > ul > li:hover {
  background: lightblue;
  cursor: pointer;
}
nav > ul > li:hover a {
  color: black;
}

nav > ul li ul {
  background: orange;
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1px;
  left: 0;
  display: none;
}

nav > ul li:hover > ul,
nav > ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
}

nav > ul li ul li {
  margin-left: 1px;
  clear: both;
  width: 100%;
}
/* DROPDOWN */
</style>