<template>
  <div>
    <div class="bg-white rounded-lg mb-4 p-4" style="font-family:times new roman;">
      <span style="font-size:20px;text-transform:none;color:black;">
        <router-link to="/dashboard">Data Desa</router-link>&nbsp;>
        <router-link to="/dashboard/data-desa/perangkat-desa">Perangkat Desa</router-link>
      </span>
      <br />
      <br />

      <!-- FORM PENDUDUK -->

      <hr class="style13" />
      <tables :datanya="datanya" :unless="['fname','lname']" @go="test" />
    </div>
  </div>
</template>
<script>
import tables from '@/components/app/table/table_perangkat.vue'
import axios from 'axios'
export default {
  layout: 'desa',
  data() {
    return {
      datanya: [],
      vdata: {}
    }
  },
  components: {
    tables
  },
  methods: {
    test(item) {
      console.log(item)
      this.vdata = item
    },
    setData(data) {
      this.vdata = data
    }
  },
  mounted() {
    let that = this
    // this.$nuxt.$on("editPenduduk", data => {
    //   console.log(data);
    //   this.$nextTick(() => {
    //     that.test = JSON.parse(localStorage.getItem("temp_table"));
    //   });
    // });
  }
}
</script>
