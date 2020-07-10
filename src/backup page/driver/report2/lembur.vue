<template>
  <div>
         <div class="bg-white" style="height:100vh;">
            <div class="rounded-br-lg"
                style="background: rgb(21,29,115);
                        background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                        <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                        @click="$router.go(-1)"></span>
                    <div class="p-3 text-center text-white font-times">
                            <p>REPORTS</p>
                    </div>
                </div>
            <div class="bg-white p-2 mt-2 rounded-lg shadow-inner " style="margin-top:-50px;">
              <p class="text-center font-bold font-times text-uppercase">{{datanya[0].nama}}</p>
                 <apexchart  type="bar" :options="options" :series="series" v-if="ready"></apexchart>
            </div>
          </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    layout:"driver",
  components: {
  },
  data() {
    return {
       options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [  "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember"]
        },
 
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
      datanya:{},
      ready:false,
      listbulan: [
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember"
        ],
      chartData: {
        labels: [
          "Januari",
          "Februari",
          "Maret",
          "April",
          "Mei",
          "Juni",
          "Juli",
          "Agustus",
          "September",
          "Oktober",
          "November",
          "Desember"
        ],
        datasets: [
          {
            label: "Data Aktivitas Lembur",
            backgroundColor: "blue",
            data: [40, 20, 40, 50, 20, 60, 70, 40, 50, 60, 20, 10]
          }
        ]
      }
    };
  },
  mounted() {
      let fd = new FormData()
      fd.append('data', `select tb1.nama,tb2.tanggal from tbuser tb1 left join driver_lembur tb2 on tb2.id_user=tb1.id where tb1.id='${this.$route.query.id}'`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          let tahun = []
          let bulan = []
          this.datanya=res.data
          tahun = this.datanya.filter(e=>{
            if(e.tanggal){
              if(e.tanggal.indexOf(this.$route.query.tahun)!=-1){
                return e
              }
            }
          })
        //   console.log('semua data 2020',tahun)
          this.listbulan.forEach((bulans,index)=>{
            bulan[index] = tahun.filter(e=>{
                if(e.tanggal.indexOf(bulans)!=-1){
                    return e
                }
            }).length 
          })
        //   console.log('semua data perbulan',bulan);
          this.chartData.datasets[0].data = bulan;
               this.series[0].data=bulan
          console.log(this.chartData.datasets[0].data)
          setTimeout(() => {
              this.ready=true
          console.log(this.chartData.datasets[0].data)
          }, 2000);
          this.$forceUpdate()
      })
  },
};
</script>