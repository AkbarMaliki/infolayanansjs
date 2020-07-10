<template>
    <div>
        <div class="bg-white" style="height:100vh;">
            <div class="rounded-br-lg"
                style="background: rgb(21,29,115);
                        background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                        <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                        @click="$router.go(-1)"></span>
                    <div class="p-3 text-center text-white font-times">
                            <p>AKTIVITAS REPORTS</p>
                    </div>
                </div>
            <div class="bg-white p-2 mt-2 rounded-lg shadow-inner " style="margin-top:-50px;">
               <br>
               <div class="container">
                   <div class="row">
                       <div class="col-6 my-auto text-center ">
                           <button type="button" @click="pilih='driver'" class="btn btn-sm btn-warning  " :class="{'btn-outline-primary':pilih=='mobil'}">DRIVER <span class="typcn typcn-chart-line"></span></button>
                       </div>
                       <div class="col-6 my-auto text-center">
                           <button type="button" @click="pilih='mobil'" class="btn btn-sm btn-warning  "  :class="{'btn-outline-primary':pilih=='driver'}">MOBIL <span class="typcn typcn-chart-bar"></span></button>
                       </div>
                   </div>
               </div>
               <br>
                <!-- <p class="font-bold text-capitalize">
                per : 
                </p>
                <select class='form-control' v-model="per">
                    <option>hari</option>
                    <option>bulan</option>
                    <option>tahun</option>
                </select>
                <div v-if="per=='hari'" class="font-bold">
                    Tanggal : 
                    <select class='form-control' v-model="hari" >
                    <option v-for="(item) in 31" :key="item+'harinya'">{{item}}</option>
                    </select>
                </div>
                <div v-if="per=='bulan'" class="font-bold">
                    Bulan : 
                    <select class='form-control' v-model="bulan">
                    <option v-for="(item, index) in bulans" :key="index+'bulan'">{{item}}</option>
                    </select>
                </div> -->
                <div class="sm-form ">
                    <label for="tahun" class="font-bold ">Tahun : </label>
                    <input type="text" id="tahun" name="tahun" class="form-control form-control-sm" placeholder="tahun" v-model="tahun" >
                </div>
                <br>
                <select class='form-control' v-model="driver_id" v-if="pilih=='driver'">
                    <option v-for="(item, index) in drivers" :key="index+'driver'" :value='item.id'>{{item.nama}}</option>
                </select>
                <select class='form-control' v-model="mobil_id" v-if="pilih=='mobil'">
                    <option v-for="(item, index) in mobils" :key="index+'driver'" :value='item.id'>{{item.nama_mobil}}</option>
                </select>
                <hr class="style2">
                <button type="button" @click="klik_driver" class="btn btn-md btn-white border-1 border-black  btn-block" v-show="pilih=='driver'">PENGGUNAAN DRIVER</button>
                <br>
                <button type="button" @click="$router.push(`/driver/report/driver_semua?tahun=${tahun}`)" class="btn btn-md btn-outline-secondary border-1 border-black  btn-block" v-show="pilih=='driver'">SEMUA DRIVER</button>
                <br>
                <button type="button" @click="klik_mobil" class="btn btn-md btn-white border-1 border-black  btn-block" v-show="pilih=='mobil'">PENGGUNAAN MOBIL</button>
                <br>
                <button type="button" @click="$router.push(`/driver/report/mobil_semua?tahun=${tahun}`)" class="btn btn-md btn-outline-secondary border-1 border-black  btn-block" v-show="pilih=='mobil'">SEMUA MOBIL</button>
            </div>
          </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    layout:"driver",
    data(){
        return{
            per:"tahun",
            hari:"",
            bulan:"",
            tahun:"2020",
            driver_id:'1',
            drivers:[],
            mobils:[],
            mobil_id:'1',
            pilih:'driver',
            datanya:[],
            bulans:[
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
            ]
        }
    },
    methods: {
        klik_driver(){
            if(this.driver_id.length<0){
                alert('pilih Driver')
            }else{
                this.$router.push(`/driver/report/driver?id=${this.driver_id}&per=${this.per}&hari=${this.hari}&bulan=${this.bulan}&tahun=${this.tahun}`)
            }
        },
        klik_mobil(){
                 this.$router.push(`/driver/report/mobil?id=${this.mobil_id}&per=${this.per}&hari=${this.hari}&bulan=${this.bulan}&tahun=${this.tahun}`)
        }
    },
    mounted() {
        console.log('test')
        let fd = new FormData()
        fd.append('data', `select * from tbuser where posisi='DRIVER'`)
        fd.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            console.log(res)
            this.drivers=res.data
            this.driver_id=res.data[0].id
            this.$forceUpdate()
        })
        let fd2 = new FormData()
        fd2.append('data', `select id,nama_mobil from driver_mobil`)
        fd2.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            setTimeout(() => {
                console.log('mobil',res.data)
                this.mobils=res.data
                this.mobil_id=res.data[0].id
                this.$forceUpdate()
            }, 1000);
        })
    },
}
</script>