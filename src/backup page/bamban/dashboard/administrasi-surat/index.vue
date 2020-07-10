<template>
  <div>
    <div class="container bg-white shadow-lg">
      <router-link to="/dashboard" style="font-size:24px;font-weight:bold;">Home</router-link>>
      <router-link
        to="/dashboard/administrasi-surat"
        style="font-size:24px;font-weight:bold;"
      >Administrasi Surat</router-link>
      <hr class="style13" />
      <div class="row p-5">
        <router-link
          tag="div"
          to="/dashboard/administrasi-surat/domisili"
          style="height:190px;background: rgb(2,0,36);
background: rgb(140,244,157);
background: linear-gradient(0deg, rgba(140,244,157,1) 0%, rgba(255,255,255,1) 100%);
box-shadow:1px 2px 4px 4px;
"
          class="col-sm-5 mt-3 sm:mt-0 cursor-pointer hover:bg-red-light outline shadow-lg rounded-lg"
        >
          <span class="typcn typcn-group-outline" style="font-size:60px;"></span>
          <br />
          <span
            class="font-times rounded-lg text-2xl sm:text-4xl"
            style="padding-left:10%;padding-right:10px;box-shadow:1px 2px 4px 5px;text-shadow:1px 2px 4px 4px;"
          >Data Domisili</span>
        </router-link>
        <router-link
          tag="div"
          to="/dashboard/administrasi-surat/lahir"
          style="height:190px;background: rgb(2,0,36);
background: rgb(140,193,244);
background: linear-gradient(0deg, rgba(140,193,244,1) 0%, rgba(255,255,255,1) 100%);
box-shadow:1px 2px 4px 4px;
"
          class="col-sm-5 offset-sm-1 mt-3 sm:mt-0 cursor-pointer hover:bg-red-light outline shadow-lg rounded-lg"
        >
          <span class="typcn typcn-chart-bar" style="font-size:60px;"></span>
          <br />
          <span
            class="font-times rounded-lg text-2xl sm:text-4xl"
            style="padding-left:10%;padding-right:10px;box-shadow:1px 2px 4px 5px;text-shadow:1px 2px 4px 4px;"
          >Data Lahir</span>
        </router-link>
        <router-link
          tag="div"
          to="/dashboard/administrasi-surat/kematian"
          style="height:190px;background: rgb(2,0,36);
background: rgb(242,244,140);
background: linear-gradient(0deg, rgba(242,244,140,1) 0%, rgba(255,255,255,1) 100%);
box-shadow:1px 2px 4px 4px;
"
          class="col-sm-5 mt-5 sm:mt-0 cursor-pointer hover:bg-red-light outline shadow-lg rounded-lg"
        >
          <span class="typcn typcn-chart-area-outline" style="font-size:60px;"></span>
          <br />
          <span
            class="font-times rounded-lg text-2xl sm:text-4xl"
            style="padding-left:10%;padding-right:10px;box-shadow:1px 2px 4px 5px;text-shadow:1px 2px 4px 4px;"
          >Kematian</span>
        </router-link>
        <router-link
          tag="div"
          to="/dashboard/administrasi-surat/pindah"
          style="height:190px;background: rgb(2,0,36);
background: rgb(244,140,144);
background: linear-gradient(0deg, rgba(244,140,144,1) 0%, rgba(255,255,255,1) 100%);
box-shadow:1px 2px 4px 4px;
"
          class="col-sm-5 offset-sm-1 mt-5 sm:mt-0 cursor-pointer hover:bg-red-light outline shadow-lg rounded-lg"
        >
          <span class="typcn typcn-chart-pie-outline" style="font-size:60px;"></span>
          <br />
          <span
            class="font-times rounded-lg text-2xl sm:text-4xl"
            style="padding-left:10%;padding-right:10px;box-shadow:1px 2px 4px 5px;text-shadow:1px 2px 4px 4px;"
          >Data Pindah</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "desa",
  data() {
    return {};
  }
};
</script>
