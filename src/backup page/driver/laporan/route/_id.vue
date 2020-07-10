<template>
  <div>
      <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                 <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.go(-1)"></span>
            <div class="p-3 text-center text-white font-times">
                    <p>HISTORY ROUTE</p>
            </div>
            <br>
            <br>
        </div>
        <div class="bg-white ml-2 mr-2 p-2 rounded-lg shadow-lg" style="margin-top:-50px;" > 
         
          
            <div class="container">
            <h4 class="font-bold font-times">KANTOR</h4>
            <div class="row">
                <div class="col-md-12">
                    <div class="main-timeline">
                        <!-- <a href="#" class="timeline">
                            <div class="timeline-icon"><i class="fa fa-globe"></i></div>
                            <div class="timeline-content">
                                <h3 class="title">Web SAD</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon"><i class="fa fa-rocket"></i></div>
                            <div class="timeline-content">
                                <h3 class="title">Web Developer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a>
                        <a href="#" class="timeline">
                            <div class="timeline-icon"><i class="fa fa-briefcase"></i></div>
                            <div class="timeline-content">
                                <h3 class="title">Web Designer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                </p>
                            </div>
                        </a> -->
                        <a href="#" class="timeline" v-for="(item, index) in routes" :key="index+'routes'">
                            <div class="timeline-icon"><i class="fa fa-car"></i></div>
                            <div class="timeline-content">
                                <h3 class="title">{{item.route}}</h3>
                                <p class="description">
                                   Jam Berangkat : {{item.update_route}}
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
      
  </div>
</template>
<script>
import axios from 'axios'
    var id = require("date-fns/locale/id");
export default{
  layout:'driver',
  data(){
    return{
      infos:{},
      nilais:false,
      routes:[],
      routerbaru:''
    }
  },
  methods: {
    updates(){
     console.log(this.infos.id)
     let gps = ''
      navigator.geolocation.getCurrentPosition(pos => {
          let lat = pos.coords.latitude
          let long = pos.coords.longitude
          gps = `http://www.google.com/maps/place/${lat},${long}`;
          this.updates2(gps)
      }, err => {
          this.updates2(gps)
      })
     
    },
    updates2(gps){
       if (confirm("Yakin route di update ? ")) {
        let fd = new FormData()
        fd.append('data', `insert into driver_route (id_perjalanan,route,update_route,gps) VALUES ('${this.infos.id}','${this.routerbaru}','${this.jam}','${gps}')`)
        fd.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            console.log(res)
            this.refreshRoute()
            this.$forceUpdate()
        })
      }
    },
    selesais(){
      if (confirm("Yakin mengakhiri season perjalanan? ")) {

      let fd = new FormData()
      fd.append('data', `update driver_perjalanan set status='5' where id='${this.infos.id}'`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          console.log(res)
          let fd2 = new FormData()
          fd2.append('data', `update tbuser set status='available' where id='${this.$store.state.users.id}'`)
          fd2.append('database', ' infolay3_test')
          axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
          , {
              headers: {
              Authorization: localStorage.getItem('auth._token.local')
              }
          }).then(res => {
            let fd3 = new FormData()
            fd3.append('data', `update driver_mobil set status='available' where id='${this.infos.id_mobil}'`)
            fd3.append('database', ' infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd3
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
              setTimeout(() => {
                this.$router.push('/driver')
              }, 1000);
                this.$forceUpdate()
            })
          })
      })
      }
    },
    scrollTop(){
      window.scrollTo(0, 500)
    },
    star(str){
      console.log(str)
      let fd = new FormData()
      fd.append('data', `insert into driver_star (id_penumpang,id_outsource,nilai,tanggal) VALUES ('${this.$store.state.users.id}','${this.infos.id_driver}','${str}','${this.tanggal}')`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          this.$forceUpdate()
          let fd2 = new FormData()
          fd2.append('data', `update driver_perjalanan set status='4' where id='${this.infos.id}'`)
          fd2.append('database', ' infolay3_test')
          axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
          , {
              headers: {
              Authorization: localStorage.getItem('auth._token.local')
              }
          }).then(res => {
            this.$router.push('/driver')
          })
      })
    },
    batal(){
      var txt;
      var r = confirm("Yakin Membatalkan Request ?");
      if (r == true) {
        txt = "Request telah di delete";
        let fd = new FormData()
        fd.append('data', `delete from driver_perjalanan where id='${this.infos.id}'`)
        fd.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
          this.$router.push('/driver')
            this.$forceUpdate()
        })
      } else {
      }
    },
    refreshRoute(){
      let fd = new FormData()
      fd.append('data', `select * from driver_route where id_perjalanan='${this.$route.params.id}'`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          this.routes = res.data
          console.log('routes',this.routes)
          this.$forceUpdate()
      })
    },
    cek(){
      let fd = new FormData()
      fd.append('data', `SELECT tb1.id_driver as id_driver,tb1.id_mobil,tb1.ids,tb1.id,tb1.tujuan,tb1.keperluan,tb1.status,tb1.pilih,tb1.penumpang,tb2.nama,tb2.no_hp,tb1.jam_berangkat,tb3.nama_mobil,tb3.no_plate,tb3.gambar FROM driver_perjalanan tb1 left join tbuser tb2 ON tb1.id_driver=tb2.id left join driver_mobil tb3 on tb1.id_mobil=tb3.id where tb1.id_penumpang='${this.$store.state.users.id}' OR tb1.id_driver='${this.$store.state.users.id}' order by tb1.id desc`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          // alert('y')
          console.log('infos',res)
          this.infos=res.data[0]
          if(parseInt(this.infos.status)>4){
            this.infos.jam_berangkat=false
          }
          this.refreshRoute()
          // console.log('integer', parseInt(this.infos.status))
          this.$forceUpdate()
      })
    },
    request(){
      let fd = new FormData()
      fd.append('data', `insert into driver_perjalanan (id_penumpang,tujuan,keperluan,penumpang,status,pilih,kendaraan,jam_update,tanggal,jam_berangkat) VALUES ('${this.$store.state.users.id}',
      '${this.$store.state.drivers.request.tujuan}','${this.$store.state.drivers.request.keperluan}','${this.$store.state.drivers.request.penumpang}','1','${this.$store.state.drivers.request.pilih}','${this.$store.state.drivers.request.kendaraan}','${this.jam}','${this.tanggal}','${this.$store.state.drivers.request.jam_berangkat}')`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd, {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          console.log(res)
          this.cek()
          this.$forceUpdate()
      })
    }
  },
  computed: {
        distance() {
          return this.$datefns.distanceInWords(
            new Date("2018-12-25T03:21:12.941Z"),
            new Date(),
            {
              locale: id,
              includeSeconds: true
            }
          );
          return result;
        },
        tanggal() {
          return this.$datefns.format(
            new Date(),
            "DD MMMM YYYY",
            {
              locale: id
            }
          );
        },
         idnya() {
          return this.$datefns.format(
            new Date(),
            "DDMYY",
            {
              locale: id
            }
          );
        },
         jam() {
          return this.$datefns.format(
            new Date(),
            "HH:mm:ss",
            {
              locale: id
            }
          );
        },
        distanceToNow() {
          return this.$datefns.distanceInWordsToNow(
            new Date(2015, 0, 1, 0, 0, 15),
            {
              locale: id,
              includeSeconds: true
            }
          );
          //=> "3 days ago"
        }
      },
  mounted() {
    // this.cek()
    this.refreshRoute()
    console.log(this.idnya)
    if(this.$route.query.klik=='1'){
      this.request();
      }
    console.log(this.$store.state.drivers)
  },
}
</script>
<style>
a{text-decoration:none}
h4{text-align:center;margin:30px 0;color:#444}
.main-timeline{position:relative}
.main-timeline:before{content:"";width:5px;height:100%;border-radius:20px;margin:0 auto;background:#242922;position:absolute;top:0;left:0;right:0}
.main-timeline .timeline{display:inline-block;margin-bottom:50px;position:relative}
.main-timeline .timeline:before{content:"";width:20px;height:20px;border-radius:50%;border:4px solid #fff;background:#ec496e;position:absolute;top:50%;left:50%;z-index:1;transform:translate(-50%,-50%)}
.main-timeline .timeline-icon{display:inline-block;width:130px;height:130px;border-radius:50%;border:3px solid #ec496e;padding:13px;text-align:center;position:absolute;top:50%;left:30%;transform:translateY(-50%)}
.main-timeline .timeline-icon i{display:block;border-radius:50%;background:#ec496e;font-size:64px;color:#fff;line-height:100px;z-index:1;position:relative}
.main-timeline .timeline-icon:after,.main-timeline .timeline-icon:before{content:"";width:100px;height:4px;background:#ec496e;position:absolute;top:50%;right:-100px;transform:translateY(-50%)}
.main-timeline .timeline-icon:after{width:70px;height:50px;background:#fff;top:89px;right:-30px}
.main-timeline .timeline-content{width:50%;padding:0 50px;margin:52px 0 0;float:right;position:relative}
.main-timeline .timeline-content:before{content:"";width:70%;height:100%;border:3px solid #ec496e;border-top:none;border-right:none;position:absolute;bottom:-13px;left:35px}
.main-timeline .timeline-content:after{content:"";width:37px;height:3px;background:#ec496e;position:absolute;top:13px;left:0}
.main-timeline .title{font-size:20px;font-weight:600;color:#ec496e;text-transform:uppercase;margin:0 0 5px}
.main-timeline .description{display:inline-block;font-size:16px;color:#404040;line-height:20px;letter-spacing:1px;margin:0}
.main-timeline .timeline:nth-child(even) .timeline-icon{left:auto;right:30%}
.main-timeline .timeline:nth-child(even) .timeline-icon:before{right:auto;left:-100px}
.main-timeline .timeline:nth-child(even) .timeline-icon:after{right:auto;left:-30px}
.main-timeline .timeline:nth-child(even) .timeline-content{float:left}
.main-timeline .timeline:nth-child(even) .timeline-content:before{left:auto;right:35px;transform:rotateY(180deg)}
.main-timeline .timeline:nth-child(even) .timeline-content:after{left:auto;right:0}
.main-timeline .timeline:nth-child(2n) .timeline-content:after,.main-timeline .timeline:nth-child(2n) .timeline-icon i,.main-timeline .timeline:nth-child(2n) .timeline-icon:before,.main-timeline .timeline:nth-child(2n):before{background:#f9850f}
.main-timeline .timeline:nth-child(2n) .timeline-icon{border-color:#f9850f}
.main-timeline .timeline:nth-child(2n) .title{color:#f9850f}
.main-timeline .timeline:nth-child(2n) .timeline-content:before{border-left-color:#f9850f;border-bottom-color:#f9850f}
.main-timeline .timeline:nth-child(3n) .timeline-content:after,.main-timeline .timeline:nth-child(3n) .timeline-icon i,.main-timeline .timeline:nth-child(3n) .timeline-icon:before,.main-timeline .timeline:nth-child(3n):before{background:#8fb800}
.main-timeline .timeline:nth-child(3n) .timeline-icon{border-color:#8fb800}
.main-timeline .timeline:nth-child(3n) .title{color:#8fb800}
.main-timeline .timeline:nth-child(3n) .timeline-content:before{border-left-color:#8fb800;border-bottom-color:#8fb800}
.main-timeline .timeline:nth-child(4n) .timeline-content:after,.main-timeline .timeline:nth-child(4n) .timeline-icon i,.main-timeline .timeline:nth-child(4n) .timeline-icon:before,.main-timeline .timeline:nth-child(4n):before{background:#2fcea5}
.main-timeline .timeline:nth-child(4n) .timeline-icon{border-color:#2fcea5}
.main-timeline .timeline:nth-child(4n) .title{color:#2fcea5}
.main-timeline .timeline:nth-child(4n) .timeline-content:before{border-left-color:#2fcea5;border-bottom-color:#2fcea5}
@media only screen and (max-width:1200px){.main-timeline .timeline-icon:before{width:50px;right:-50px}
.main-timeline .timeline:nth-child(even) .timeline-icon:before{right:auto;left:-50px}
.main-timeline .timeline-content{margin-top:75px}
}
@media only screen and (max-width:990px){.main-timeline .timeline{margin:0 0 10px}
.main-timeline .timeline-icon{left:25%}
.main-timeline .timeline:nth-child(even) .timeline-icon{right:25%}
.main-timeline .timeline-content{margin-top:115px}
}
@media only screen and (max-width:767px){.main-timeline{padding-top:50px}
.main-timeline:before{left:80px;right:0;margin:0}
.main-timeline .timeline{margin-bottom:70px}
.main-timeline .timeline:before{top:0;left:83px;right:0;margin:0}
.main-timeline .timeline-icon{width:60px;height:60px;line-height:40px;padding:5px;top:0;left:0}
.main-timeline .timeline:nth-child(even) .timeline-icon{left:0;right:auto}
.main-timeline .timeline-icon:before,.main-timeline .timeline:nth-child(even) .timeline-icon:before{width:25px;left:auto;right:-25px}
.main-timeline .timeline-icon:after,.main-timeline .timeline:nth-child(even) .timeline-icon:after{width:25px;height:30px;top:44px;left:auto;right:-5px}
.main-timeline .timeline-icon i{font-size:30px;line-height:45px}
.main-timeline .timeline-content,.main-timeline .timeline:nth-child(even) .timeline-content{width:100%;margin-top:-15px;padding-left:130px;padding-right:5px}
.main-timeline .timeline:nth-child(even) .timeline-content{float:right}
.main-timeline .timeline-content:before,.main-timeline .timeline:nth-child(even) .timeline-content:before{width:50%;left:120px}
.main-timeline .timeline:nth-child(even) .timeline-content:before{right:auto;transform:rotateY(0)}
.main-timeline .timeline-content:after,.main-timeline .timeline:nth-child(even) .timeline-content:after{left:85px}
}
@media only screen and (max-width:479px){.main-timeline .timeline-content,.main-timeline .timeline:nth-child(2n) .timeline-content{padding-left:110px}
.main-timeline .timeline-content:before,.main-timeline .timeline:nth-child(2n) .timeline-content:before{left:99px}
.main-timeline .timeline-content:after,.main-timeline .timeline:nth-child(2n) .timeline-content:after{left:65px}
}

</style>