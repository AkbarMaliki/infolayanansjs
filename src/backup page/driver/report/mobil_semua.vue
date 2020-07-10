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
              <p class="text-center font-bold font-times text-uppercase">JUMLAH AKTIFITAS</p>
                     <apexchart type="pie" :options="chartOptions" :series="series" v-if="ready"></apexchart>
            </div>
          </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  components: {
  },
  layout:'driver',
  data() {
    return {
        series: [44, 55, 13, 43, 22],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
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
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80, 10]
          }
        ]
      }
    };
  },
   mounted() {
       let fds = new FormData()
       fds.append('data', `select nama_mobil as nama from driver_mobil `)
       fds.append('database', ' infolay3_test')
       axios.post('https://infolayanans.space/api/mysql/auto.php', fds
       , {
           headers: {
           Authorization: localStorage.getItem('auth._token.local')
           }
       }).then(res => {
           console.log(res)
           let arr = []
            res.data.filter(e=>{
                arr.push(e.nama)
            })
           this.listbulan=arr
           this.chartData.labels=arr
     this.chartOptions.labels=arr
           this.$forceUpdate()
            let fd = new FormData()
            fd.append('data', `select tb1.nama_mobil as nama,tb2.tanggal from driver_mobil tb1 left join driver_perjalanan tb2 on tb2.id_mobil=tb1.id `)
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
                // console.log('semua data 2020',tahun)
                this.listbulan.forEach((bulans,index)=>{
                    bulan[index] = tahun.filter(e=>{
                        if(e.nama.indexOf(bulans)!=-1){
                            return e
                        }
                    }).length 
                })
                console.log('bulan',bulan)
                this.series=bulan
                  this.chartData.datasets[0].data = bulan;
                console.log(this.chartData.datasets[0].data)
                setTimeout(() => {
                    this.ready=true
                console.log(this.chartData.datasets[0].data)
                }, 2000);
                this.$forceUpdate()
            })
       })
  },
};
</script>