<template>
    <div>
         <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                 <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.go(-1)"></span>
            <div class="p-3 text-center text-white font-times">
                    <p>FORM IJIN</p>
            </div>
            <br>
            <br>
        </div>
        <div class="bg-white ml-2 mr-2 p-2 rounded-lg shadow-lg" style="margin-top:-50px;"> 
            <div class="container-fluid">
                <div class="row">
                    <div class="col-8"></div>
                    <div class="col-2">
                        <button type="button" @click="penumpang--;penumpangs.pop()" class="btn btn-sm btn-danger">-</button>
                    </div>
                    <div class="col-2">
                        <button type="button" @click="penumpang++;" class="btn btn-sm btn-primary  ">+</button>
                    </div>
                </div>
            </div>
            <form action="#" @submit.prevent="request">
                <div class="sm-form " v-for="(item, index) in penumpang" :key="index+'penumpang'">
                    <label for="penumpang" class="pl-2">Penumpang {{index+1}}</label>
                    <input type="text" id="penumpang" name="penumpang" class="form-control form-control-sm" placeholder="nama" required v-model="penumpangs[index]" >
                </div>
                <br>
                <label for="tujuan" class="pl-2">Tujuan</label>
                <!-- <div class="sm-form ">
                    <input type="text" id="tujuan" name="tujuan" class="form-control form-control-sm" placeholder="tujuan" required v-model="vdata.tujuan" >
                </div> -->
                <select class='form-control' v-model="vdata.tujuan">
                  <option>Marketing</option>
                  <option>Penagihan</option>
                  <option>Operational</option>
                  <option>Lain - lain</option>
                </select>
                <br>
                  <div class="sm-form ">
                    <label for="keperluan" class="pl-2">Rincian Pekerjaan</label>
                    <input type="text" id="keperluan" name="keperluan" class="form-control form-control-sm" placeholder="keperluan" required v-model="vdata.keperluan" >
                </div>
                <br>
                  <div class="sm-form ">
                    <label for="lokasi" class="pl-2">Lokasi Tujuan</label>
                    <input type="text" id="lokasi" name="lokasi" class="form-control form-control-sm" placeholder="lokasi" required v-model="vdata.lokasi" >
                </div>
                <br>
                <div class="sm-form ">
                    <label for="jam" class="pl-2">Jam berangkat</label>
                    <input type="time" id="tujuan" name="jam" class="form-control form-control-sm" placeholder="Jam" required v-model="vdata.jam_berangkat" >
                </div>
                <br>
                 <div class="sm-form ">
                    <label class="pl-2">Unit Head</label>
                    <select class='form-control' v-model="vdata.unit_head" required>
                    <option v-for="(item, index) in unit_heads" :key="index+'unit_heads'" :value="item.id" v-show="item.id!=1">{{item.nama}}, {{item.posisi}}</option>
                    </select>
                </div>
                <br>
                <button class="btn btn-sm btn-outline-primary" type='submit'><span class="typcn typcn-news"></span> Request</button>
            </form>
            <br>
         
        </div>
           <br>
            <br>
            <br>
            <br>
            <br>   <br>
            <br>
            <br>
            <br>
            <br>
    </div>
</template>
<script>
import axios from 'axios'
    var id = require("date-fns/locale/id");
export default{
    data(){
        return{
            vdata:{
              tujuan:"Marketing"
            },
            penumpang:1,
            penumpangs:[],
              unit_head:0,
            unit_heads:[]
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
        format() {
          return this.$datefns.format(
            new Date(),
            "HH:mm",
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
    methods: {
       request(){
           this.vdata.penumpang = this.penumpangs.toString()
           this.$forceUpdate()
           console.log(this.vdata)
           this.vdata.kendaraan = 'pribadi'
           this.vdata.unit_kerja = this.$store.state.users.posisi
           this.$store.commit('inputRequest',this.vdata)
           this.$router.push('/driver/req-driver?klik=1')
        }
    },
    mounted() {
        let fd2 = new FormData()
        fd2.append('data', `select * from tbuser where unit_kerja_head='head'`)
        fd2.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
          this.unit_heads=res.data
            this.$forceUpdate()
        })
        this.penumpangs[0] = this.$store.state.users.nama ? this.$store.state.users.nama : ''
        this.vdata.jam_berangkat = this.format
        this.vdata.pilih = this.$route.query.pilih
        this.$forceUpdate()
    },
    layout:'driver'
}
</script>