<template>
  <div>
    <div class="container bg-white shadow-lg">
      <router-link to="/dashboard" style="font-size:24px;font-weight:bold;">Home</router-link>>
      <router-link to="/dashboard/laporan" style="font-size:24px;font-weight:bold;">Laporan</router-link>
      <hr class="style13" />
      <div class="row p-5">
        <router-link
          tag="div"
          to="/dashboard/laporan/import-data"
          style="height:190px;background: rgb(2,0,36);
background: rgb(140,244,157);
background: linear-gradient(0deg, rgba(140,244,157,1) 0%, rgba(255,255,255,1) 100%);
box-shadow:1px 2px 4px 4px;
"
          class="col-sm-5 mt-3 sm:mt-0 cursor-pointer hover:bg-red-light outline shadow-lg rounded-lg"
        >
          <span class="typcn typcn-download-outline" style="font-size:60px;"></span>
          <br />
          <span
            class="font-times rounded-lg text-2xl sm:text-4xl"
            style="padding-left:10%;padding-right:10px;box-shadow:1px 2px 4px 5px;text-shadow:1px 2px 4px 4px;"
          >Import Data</span>
        </router-link>
        <router-link
          tag="div"
          to="/dashboard/laporan/surat-dan-mutasi"
          style="height:190px;background: rgb(2,0,36);
background: rgb(140,193,244);
background: linear-gradient(0deg, rgba(140,193,244,1) 0%, rgba(255,255,255,1) 100%);
box-shadow:1px 2px 4px 4px;
"
          class="col-sm-5 offset-sm-1 mt-3 sm:mt-0 cursor-pointer hover:bg-red-light outline shadow-lg rounded-lg"
        >
          <span class="typcn typcn-document-text" style="font-size:60px;"></span>
          <br />
          <span
            class="font-times rounded-lg text-2xl sm:text-4xl"
            style="padding-left:10%;padding-right:10px;box-shadow:1px 2px 4px 5px;text-shadow:1px 2px 4px 4px;"
          >Surat Dan Mutasi</span>
        </router-link>
        <router-link
          tag="div"
          to="/dashboard/laporan/jumlah-penduduk"
          style="height:190px;background: rgb(2,0,36);
background: rgb(242,244,140);
background: linear-gradient(0deg, rgba(242,244,140,1) 0%, rgba(255,255,255,1) 100%);
box-shadow:1px 2px 4px 4px;
"
          class="col-sm-5 mt-5 sm:mt-0 cursor-pointer hover:bg-red-light outline shadow-lg rounded-lg"
        >
          <span class="typcn typcn-group" style="font-size:60px;"></span>
          <br />
          <span
            class="font-times rounded-lg text-2xl sm:text-4xl"
            style="padding-left:10%;padding-right:10px;box-shadow:1px 2px 4px 5px;text-shadow:1px 2px 4px 4px;"
          >Jumlah Penduduk</span>
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
