<template>
  <div style="font-family:'Roboto Condensed', sans-serif;">
    <div
      class
      style="
          background: rgb(101,154,231);
background: linear-gradient(90deg, rgba(101,154,231,1) 0%, rgba(136,180,241,1) 33%, rgba(233,233,233,1) 100%);"
    >
      <div class="d-none d-sm-block"></div>
      <div class="d-block d-sm-none text-center"></div>
      <div style="height:16px;"></div>
      <span
        class="animated fadeIn d-none d-sm-block pl-4"
        style="font-size:26px;animation-delay:5s;"
      >APLIKASI DATA KEPENDUDUKAN DESA BAMBAN</span>
      <p
        class="animated fadeIn d-block d-sm-none pl-4"
        style="font-size:15px;animation-delay:5s;"
      >APLIKASI DATA KEPENDUDUKAN DESA BAMBAN</p>
      <p
        class="float-right pr-2 pt-1 d-none d-sm-block"
        style="font-size:13px;"
      >Jl.A. Yani Km 11,2 Desa Bamban Kec.Angkinang Kab.HSS Kode pos 71291</p>
      <hr class="style13" />
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <span style="

            font-size:25px;padding-left:20px;">SELAMAT DATANG</span>

          <hr class="style16" />

          <p class="text-center" style="font-size:25px;">
            LOGIN
            <span class="typcn typcn-group" style="font-size:28px;color:black;"></span>
          </p>
          <component :is="componentId"></component>
          <hr class="style13" />
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-4 order-1 text-center">
                <p style>Lokasi Kantor :</p>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Kantor+Desa+Bamban/@-2.708747,115.302145,17z/data=!4m5!3m4!1s0x2de5733ed9ae9519:0xbb5f9d2720ec4ec3!8m2!3d-2.7080129!4d115.3024347"
                >
                  <img
                    src="@/static/photo/map.jpg"
                    class="img-thumbnail anim zoomInS"
                    style="box-shadow:3px 4px 4px 4px black;"
                    alt
                  />
                </a>
              </div>
              <div class="col-sm-8">
                <img src="@/static/photo/bamban.jpg" class="img-thumbnail anim zoomInS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="style13" />
    <div class="col-sm-12">
      <hr class="style4" />
      <h2 style="font-weight:bold;">Fungsi :</h2>
      <p
        class="sm:pl-5 sm:pr-5 sm:pb-5 sm:pt-2 text-justify"
        style
      >Fungsi kantor desa diantaranya untuk menyajikan informasi kependudukan, informasi keuangan dan informasi pembangungann desa. Untuk pengelolaan data kependudukan di desa meliputi berbagai hal antara lain pengelolaan data penduduk kelahiran, kematian , pindah dan datang serta surat keterangan lahir, surat keterangan mati dan surat pengatar pindah</p>

      <hr class="style16" />
    </div>
    <div class="col-sm-12 bg-black text-white p-4">
      <p>Copyright &copy; 2019 By Desa Bamban Kec. Angkinang</p>
    </div>
  </div>
</template>
<script>
import login from "@/components/radio/login2.vue";

export default {
  data() {
    return {
      componentId: "login"
    };
  },
  components: {
    login
  },
  methods: {
    test() {
      alert("t");
    }
  },
  head: {
    title: "aplikasi pelayanan desa bamban",
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Cantata+One|Electrolize|Marck+Script|Rancho|Special+Elite|Tangerine&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/vue2-animate/dist/vue2-animate.min.css"
      }
    ]
  }
};
</script>
