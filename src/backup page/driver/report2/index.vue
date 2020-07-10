<template>
    <div>
        <div class="bg-white" style="height:100vh;">
            <div class="rounded-br-lg"
                style="background: rgb(21,29,115);
                        background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                        <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                        @click="$router.go(-1)"></span>
                    <div class="p-3 text-center text-white font-times">
                            <p>AKTIVITAS LEMBUR</p>
                    </div>
                </div>
            <div class="bg-white p-2 mt-2 rounded-lg shadow-inner " style="margin-top:-50px;">
              
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
                <select class='form-control' v-model="id_user">
                    <option v-for="(item, index) in users" :key="index+'driver'" :value='item.id'>{{item.nama}} - {{item.nip}}</option>
                </select>
                <hr class="style2">
                <button type="button" @click="klik_driver" class="btn btn-md btn-white border-1 border-black  btn-block" >DATA LEMBUR</button>
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
            id_user:'1',
            users:[],
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
                this.$router.push(`/driver/report2/lembur?id=${this.id_user}&per=${this.per}&hari=${this.hari}&bulan=${this.bulan}&tahun=${this.tahun}`)
        },
        klik_mobil(){
                 this.$router.push(`/driver/report/mobil?id=${this.mobil_id}&per=${this.per}&hari=${this.hari}&bulan=${this.bulan}&tahun=${this.tahun}`)
        }
    },
    mounted() {
        let fd = new FormData()
        fd.append('data', `select * from tbuser`)
        fd.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            console.log(res)
            this.users=res.data
            this.id_user=res.data[0].id
            this.$forceUpdate()
        })
    },
}
</script>