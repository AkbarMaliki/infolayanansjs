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
              <p class="text-center font-bold font-times text-uppercase">JUMLAH POIN BINTANG <span class="typcn typcn-star text-yellow-dark"></span></p>
                     <apexchart type="pie" :options="chartOptions" :series="series" v-if="ready"></apexchart>
                    <br>
                    <p class="font-bold">Pilih untuk melihat komen : </p>
                  <select class='form-control' v-model="driver_id" >
                    <option v-for="(item, index) in drivers" :key="index+'driver'" >{{item.nama}}</option>
                </select>
                <div class="text-center">
                </div>
                <div v-for="(item, index) in komens" :key="index">
                  <div class="p-2 shadow-md mt-2">
                       <p class="font-bold">
                                Driver : {{item.nama_penumpang}}
                        </p>
                        <p>Poin : {{item.nilai}}</p>
                        <p>Komentar : {{item.komentar}}</p>
                        <p class="float-right">{{item.nama_driver}}</p>
                        <br>
                        <p class="text-sm font-bold" style="font-size:10px;">{{item.tanggal}}</p>
                        <br>
                  </div>
                </div>
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
  computed: {
    komens(){
      let data = this.komentars 
      data = data.filter(e=>{
        if(e.nama_penumpang.indexOf(this.driver_id)!=-1){
          return e
        }
      })
      return data
    }
  },
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
      drivers:[],
      driver_id:'',
      komentars:[],
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
  methods: {
    pilih(){
      let fd = new FormData()
      fd.append('data', `select tb2.nama as nama_penumpang, tb3.nama as nama_driver, tb1.tanggal,tb1.nilai, tb1.tanggal,tb1.komentar from driver_star tb1 left join tbuser tb2 on tb1.id_outsource=tb2.id left join tbuser tb3 on tb1.id_penumpang=tb3.id`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
        this.komentars = res.data
          console.log(res)
          this.$forceUpdate()
      })
    }
  },
   mounted() {
     this.pilih()
       let fds = new FormData()
        fds.append('data', `select * from tbuser where posisi='DRIVER'`)
        fds.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fds
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            console.log('driver',res)
            this.drivers=res.data
            this.driver_id=res.data[0].nama
            this.$forceUpdate()
        })
       let fds2 = new FormData()
       fds2.append('data', `select nama from tbuser where posisi="DRIVER"`)
       fds2.append('database', ' infolay3_test')
       axios.post('https://infolayanans.space/api/mysql/auto.php', fds2
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
            fd.append('data', `select tb1.nama,tb2.tanggal,tb2.nilai from tbuser tb1 left join driver_star tb2 on tb2.id_outsource=tb1.id where tb1.posisi="DRIVER"`)
            fd.append('database', ' infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
              console.log('tes',res.data);
                let tahun = []
                let bulan = []
                this.datanya=res.data
                tahun = this.datanya.filter(e=>{
                  if(e.tanggal){
                    if(e.tanggal.indexOf('2020')!=-1){
                      return e
                    }
                  }
                })
                this.listbulan.forEach((bulans,index)=>{
                    bulan[bulans]=0;
                    tahun.filter((e,index)=>{
                        if(e.nama.indexOf(bulans)!=-1){
                            bulan[bulans] = bulan[bulans] + parseInt(e.nilai)
                        }
                    })
                })
                let hasil=[]
                this.listbulan.forEach((bulans,index)=>{
                    hasil[index] = bulan[bulans]
                })
                  this.chartData.datasets[0].data = hasil;
                  this.series=hasil
                setTimeout(() => {
                    this.ready=true
                }, 2000);
                this.$forceUpdate()
            })
       })
  },
};
</script>