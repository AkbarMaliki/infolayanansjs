<template>
  <div>
    <div class="container bg-white shadow-lg">
      <router-link to="/dashboard" style="font-size:24px;font-weight:bold;">Home</router-link>>
      <router-link to="/dashboard/data-desa" style="font-size:24px;font-weight:bold;">Data Desa</router-link>
      <hr class="style13" />
      <div class="row p-5">
        <router-link
          tag="div"
          to="/dashboard/data-desa/perangkat-desa"
          style="height:190px;background: rgb(2,0,36);
background: rgb(140,244,157);
background: linear-gradient(0deg, rgba(140,244,157,1) 0%, rgba(255,255,255,1) 100%);
box-shadow:1px 2px 4px 4px;
"
          class="col-sm-5 mt-3 sm:mt-0 cursor-pointer hover:bg-red-light outline shadow-lg rounded-lg"
        >
          <span class="typcn typcn-chart-bar" style="font-size:60px;"></span>
          <br />
          <span
            class="font-times rounded-lg text-2xl sm:text-4xl"
            style="padding-left:10%;padding-right:10px;box-shadow:1px 2px 4px 5px;text-shadow:1px 2px 4px 4px;"
          >Perangkat</span>
        </router-link>
        <router-link
          tag="div"
          to="/dashboard/data-desa/penduduk"
          style="height:190px;background: rgb(2,0,36);
background: rgb(140,193,244);
background: linear-gradient(0deg, rgba(140,193,244,1) 0%, rgba(255,255,255,1) 100%);
box-shadow:1px 2px 4px 4px;
"
          class="col-sm-5 offset-sm-1 mt-3 sm:mt-0 cursor-pointer hover:bg-red-light outline shadow-lg rounded-lg"
        >
          <span class="typcn typcn-group-outline" style="font-size:60px;"></span>
          <br />
          <span
            class="font-times rounded-lg text-2xl sm:text-4xl"
            style="padding-left:10%;padding-right:10px;box-shadow:1px 2px 4px 5px;text-shadow:1px 2px 4px 4px;"
          >Penduduk</span>
        </router-link>
        <router-link
          tag="div"
          to="/dashboard/data-desa/user"
          style="height:190px;background: rgb(2,0,36);
background: rgb(242,244,140);
background: linear-gradient(0deg, rgba(242,244,140,1) 0%, rgba(255,255,255,1) 100%);
box-shadow:1px 2px 4px 4px;
"
          class="col-sm-5 mt-5 sm:mt-0 cursor-pointer hover:bg-red-light outline shadow-lg rounded-lg"
        >
          <span class="typcn typcn-user-outline" style="font-size:60px;"></span>
          <br />
          <span
            class="font-times rounded-lg text-2xl sm:text-4xl"
            style="padding-left:10%;padding-right:10px;box-shadow:1px 2px 4px 5px;text-shadow:1px 2px 4px 4px;"
          >User</span>
        </router-link>
        <router-link
          tag="div"
          to="/dashboard/administrasi-surat/aparatur-desa"
          style="height:190px;background: rgb(2,0,36);
background: rgb(244,140,144);
background: linear-gradient(0deg, rgba(244,140,144,1) 0%, rgba(255,255,255,1) 100%);
box-shadow:1px 2px 4px 4px;
"
          class="col-sm-5 offset-sm-1 mt-5 sm:mt-0 cursor-pointer hover:bg-red-light outline shadow-lg rounded-lg"
        >
          <span class="typcn typcn-document" style="font-size:60px;"></span>
          <br />
          <span
            class="font-times rounded-lg text-2xl sm:text-4xl"
            style="padding-left:10%;padding-right:10px;box-shadow:1px 2px 4px 5px;text-shadow:1px 2px 4px 4px;"
          >RT/RW</span>
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
