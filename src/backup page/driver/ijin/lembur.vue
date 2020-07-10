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
                        <button type="button" @click="pegawai--;pegawais.pop()" class="btn btn-sm btn-danger">-</button>
                    </div>
                    <div class="col-2">
                        <button type="button" @click="pegawai++;" class="btn btn-sm btn-primary  ">+</button>
                    </div>
                </div>
            </div>
            <form action="#" @submit.prevent="request">
                <div class="sm-form " v-for="(item, index) in pegawai" :key="index+'pegawai'">
                    <label for="pegawai" class="pl-2">pegawai {{index+1}}</label>
                    <input type="text" id="pegawai" name="pegawai" class="form-control form-control-sm" placeholder="pegawai"  required v-model="pegawais[index]" >
                </div>
                <br>
                <div class="sm-form ">
                    <label for="tujuan" class="pl-2">Tujuan</label>
                    <input type="text" id="tujuan" name="tujuan" class="form-control form-control-sm" placeholder="tujuan" required v-model="vdata.tujuan" >
                </div>
                <br>
                  <div class="sm-form ">
                    <label for="keperluan" class="pl-2">Keperluan</label>
                    <input type="text" id="keperluan" name="keperluan" class="form-control form-control-sm" placeholder="keperluan" required v-model="vdata.keperluan" >
                </div>
                <br>
                <div class="sm-form ">
                    <label for="jam" class="pl-2">Jam berangkat</label>
                    <input type="time" id="tujuan" name="jam" class="form-control form-control-sm" placeholder="Jam" required v-model="vdata.jam_berangkat" >
                </div>
                <br>
                <button class="btn btn-sm btn-outline-primary" type='submit'><span class="typcn typcn-news"></span> Request</button>
            </form>
            <br>
        </div>
    </div>
</template>
<script>
    var id = require("date-fns/locale/id");
export default{
    data(){
        return{
            vdata:{},
            pegawai:1,
            nip:1,
            pegawais:[],
            nips:[]
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
           this.vdata.pegawai = this.pegawais.toString()
           this.vdata.pegawai= this.pegawais.toString()
           this.$forceUpdate()
           console.log(this.vdata)
           this.vdata.kendaraan = 'pribadi'
           this.$store.commit('inputRequest',this.vdata)
           this.$router.push('/driver/req-driver?klik=1')
        }
    },
    mounted() {
        this.pegawais[0] = this.$store.state.users.nama ? this.$store.state.users.nama : ''
        this.vdata.jam_berangkat = this.format
        this.vdata.pilih = this.$route.query.pilih
        this.$forceUpdate()
    },
    layout:'driver'
}
</script>