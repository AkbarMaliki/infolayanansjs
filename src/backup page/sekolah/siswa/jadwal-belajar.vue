<template>
    <div>
            <div class="row bg-white p-2">
               <div class="col-12">
                   <!-- <a class="text-green font-bold font-times btn btn-sm " :href="`https://infolayanans.space/api/mysql/sekolah/excel.php?data=select id_jadwal,mata_pelajaran,nama_guru,kelas,jam_masuk,hari,tanggal from sekolah_jadwal&database=infolay3_test`">EXCEL</a> -->
                   <div class="table-responsive">
                    <table style="width:100%;" class="table table-bordered table-sm text-center">
                        <tr>
                            <th class="text-center">SENIN</th>
                            <th class="text-center">SELASA</th>
                            <th class="text-center">RABU</th>
                            <th class="text-center">KAMIS</th>
                            <th class="text-center">JUM'AT</th>
                            <th class="text-center">SABTU</th>
                        </tr>
                        <tbody  v-for="(item, index) in lengths" :key="index+'jadwals'">
                            <tr>
                                <td @click="puts(senins[index])" v-show="senins[index]">
                                    <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:bg-grey-lighter" style="height:240px;">
                                      <div class="px-3 py-3">
                                        <div class="font-bold text-lg ">{{senins[index] ? senins[index].nama_pelajaran:""}}</div>
                                        <p class="text-grey-darker text-base font-bold">
                                         {{senins[index] ? senins[index].nama_guru:""}}
                                        </p>
                                      </div>
                                      <div class="px-3 py-3">
                                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">Kelas : {{senins[index] ? senins[index].nama_kelas:""}}</span>
                                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{{senins[index] ? senins[index].hari:""}} : {{senins[index] ? senins[index].jam_masuk:""}}</span>
                                      </div>
                                    </div>
                                </td>
                                <td @click="puts(selasas[index])" v-show="selasas[index]">
                                    <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:bg-grey-lighter" style="height:240px;">
                                      <div class="px-3 py-3">
                                        <div class="font-bold text-lg ">{{selasas[index] ? selasas[index].nama_pelajaran:""}}</div>
                                        <p class="text-grey-darker text-base font-bold">
                                         {{selasas[index] ? selasas[index].nama_guru:""}}
                                        </p>
                                      </div>
                                      <div class="px-3 py-3">
                                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">Kelas : {{selasas[index] ? selasas[index].nama_kelas:""}}</span>
                                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{{selasas[index] ? selasas[index].hari:""}} : {{selasas[index] ? selasas[index].jam_masuk:""}}</span>
                                      </div>
                                    </div> 
                                </td>
                                  <td @click="puts(rabus[index])" v-show="rabus[index]">
                                    <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:bg-grey-lighter" style="height:240px;">
                                      <div class="px-3 py-3">
                                        <div class="font-bold text-lg ">{{rabus[index] ? rabus[index].nama_pelajaran:""}}</div>
                                        <p class="text-grey-darker text-base font-bold">
                                         {{rabus[index] ? rabus[index].nama_guru:""}}
                                        </p>
                                      </div>
                                      <div class="px-3 py-3">
                                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">Kelas : {{rabus[index] ? rabus[index].nama_kelas:""}}</span>
                                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{{rabus[index] ? rabus[index].hari:""}} : {{rabus[index] ? rabus[index].jam_masuk:""}}</span>
                                      </div>
                                    </div>   </td>
                                  <td @click="puts(kamiss[index])" v-show="kamiss[index]">
                                    <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:bg-grey-lighter" style="height:240px;">
                                      <div class="px-3 py-3">
                                        <div class="font-bold text-lg ">{{kamiss[index] ? kamiss[index].nama_pelajaran:""}}</div>
                                        <p class="text-grey-darker text-base font-bold">
                                         {{kamiss[index] ? kamiss[index].nama_guru:""}}
                                        </p>
                                      </div>
                                      <div class="px-3 py-3">
                                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">Kelas : {{kamiss[index] ? kamiss[index].nama_kelas:""}}</span>
                                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{{kamiss[index] ? kamiss[index].hari:""}} : {{kamiss[index] ? kamiss[index].jam_masuk:""}}</span>
                                      </div>
                                    </div>  
                                   </td>
                                  <td @click="puts(jumats[index])" v-show="jumats[index]">
                                   <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:bg-grey-lighter" style="height:240px;">
                                      <div class="px-3 py-3">
                                        <div class="font-bold text-lg ">{{jumats[index] ? jumats[index].nama_pelajaran:""}}</div>
                                        <p class="text-grey-darker text-base font-bold">
                                         {{jumats[index] ? jumats[index].nama_guru:""}}
                                        </p>
                                      </div>
                                      <div class="px-3 py-3">
                                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">Kelas : {{jumats[index] ? jumats[index].nama_kelas:""}}</span>
                                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{{jumats[index] ? jumats[index].hari:""}} : {{jumats[index] ? jumats[index].jam_masuk:""}}</span>
                                      </div>
                                    </div>  
                                     </td>
                                  <td @click="puts(sabtus[index])" v-show="sabtus[index]">
                                    <div class="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:bg-grey-lighter" style="height:240px;">
                                      <div class="px-3 py-3">
                                        <div class="font-bold text-lg ">{{sabtus[index] ? sabtus[index].nama_pelajaran:""}}</div>
                                        <p class="text-grey-darker text-base font-bold">
                                         {{sabtus[index] ? sabtus[index].nama_guru:""}}
                                        </p>
                                      </div>
                                      <div class="px-3 py-3">
                                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">Kelas : {{sabtus[index] ? sabtus[index].nama_kelas:""}}</span>
                                        <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{{sabtus[index] ? sabtus[index].hari:""}} : {{sabtus[index] ? sabtus[index].jam_masuk:""}}</span>
                                      </div>
                                    </div>  </td>
                            </tr>
                        </tbody>
                    </table>
                   </div>
               </div>
               <div class="offset-2 col-8 d-none" id='forminput'>
                   <form action="" @submit.prevent="inputs == 'insert' ? inserts() : inputs == 'update' ? updates():deletes()">
                       <div class="sm-form d-none">
                           <label for="id">ID</label>
                           <input type="text" id="id" name="id" class="form-control form-control-sm" placeholder="id" required v-model="vdata.id_jadwal" disabled>
                       </div>
                       <p>Mata Pelajaran : </p>
                       <select class='form-control' required v-model="vdata.mata_pelajaran">
                            <option  v-for="(item, index) in pelajarans" :key="index+'mata_pelajaran'" >{{item.nama_pelajaran}}</option>
                       </select>
                       <br>
                       <p>Nama Guru : </p>
                       <select class='form-control' required v-model="vdata.nama_guru">
                            <option  v-for="(item, index) in gurus" :key="index+'guru'" >{{item.nama_guru}}</option>
                       </select>
                       <br>
                       <div class="sm-form ">
                           <label for="jam_masuk">Jam Masuk : </label>
                           <input type="text" id="jam_masuk" name="jam_masuk" class="form-control form-control-sm" placeholder="09:00" required v-model="vdata.jam_masuk" >
                       </div>
                       <p>Kelas : </p>
                       <select class='form-control'  required v-model="vdata.kelas">
                            <option v-for="(item, index) in kelass" :key="index+'kelas'" >{{item.nama_kelas}}</option>
                       </select> <br>
                       <div class="sm-form ">
                           <label for="tanggal">Tanggal : </label>
                           <input type="date" id="tanggal" name="tanggal" class="form-control form-control-sm" placeholder="09:00" required v-model="vdata.tanggal" >
                       </div>
                       <br>
                       <div class="text-center">
                           <button type="submit"  class="btn btn-md btn-outline-info text-uppercase "><span class="typcn typcn-filter"></span> {{inputs}}</button>
                       </div>
                       <br>
                   </form>
                       <div class="text-center">
                           <button type="button" @click="inputs='insert'" class="btn btn-sm btn-primary  "><span class="typcn typcn-plus"></span> Simpan</button>&nbsp;
                           <button type="button" @click="inputs='update'" class="btn btn-sm btn-success  "><span class="typcn typcn-edit"></span> Update</button>&nbsp;
                           <button type="button" @click="inputs='delete'" class="btn btn-sm btn-danger  "><span class="typcn typcn-delete"></span> Deletes</button>&nbsp;
                       </div>
               </div>
            </div>
    </div>
</template>
<script>
    var id = require("date-fns/locale/id");
import axios from 'axios'
export default {
    layout:'siswa',
    data(){
        return{
            vdata:{
                tanggal:new Date()
            },
            jadwals:[],
            senins:[],
            selasas:[],
            rabus:[],
            kamiss:[],
            jumats:[],
            sabtus:[],
            lengths:0,
            gurus:[],
            pelajarans:[],
            kelass:[],
            inputs:"insert"
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
            new Date(2014, 6, 2),
            "[di tanggal] dddd DD MMMM YYYY",
            {
              locale: id
            }
          );
        },
        tanggal(item) {
            let that = this
          return this.$datefns.format(
            item,
            "dddd DD MMMM YYYY",
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
         hari(item) {
            let that = this
          return this.$datefns.format(
            item,
            "dddd",
            {
              locale: id
            }
          );
        },
        inserts(){
            let fd = new FormData()
            fd.append('data', `insert into sekolah_jadwal (mata_pelajaran,nama_guru,kelas,jam_masuk,hari,tanggal) values ('${this.vdata.mata_pelajaran}','${this.vdata.nama_guru}','${this.vdata.kelas}','${this.vdata.jam_masuk}','${this.hari(this.vdata.tanggal)}','${this.vdata.tanggal}')`)//database setting di server
            fd.append('database','infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                alert('Simpan Data Berhasil!')
                this.vdata={}
                console.log(res)
                 this.jadwals=[]
                    this.lengths=0
                    this.senins=[]
                    this.selasas=[]
                    this.rabus=[]
                    this.kamiss=[]
                    this.jumats=[]
                    this.sabuts=[]
                this.$forceUpdate()
                this.getData()
            })
        },
        updates(){
            let fd = new FormData()
            fd.append('data', `update sekolah_jadwal set mata_pelajaran='${this.vdata.mata_pelajaran}', nama_guru='${this.vdata.nama_guru}', kelas='${this.vdata.kelas}',jam_masuk='${this.vdata.jam_masuk}',hari='${this.hari(this.vdata.tanggal)}',tanggal='${this.vdata.tanggal}' where id_jadwal='${this.vdata.id_jadwal}'`)//database setting di server
            fd.append('database','infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                alert('Update Data Berhasil!')
                this.vdata={}
                console.log(res)
                this.jadwals=[]
                this.lengths=0
                this.senins=[]
                this.selasas=[]
                this.rabus=[]
                this.kamiss=[]
                this.jumats=[]
                this.sabuts=[]
                this.$forceUpdate()
                this.getData()
            })
        },
        deletes(){
            if(confirm('Apakah anda yakin mendelete data ? ')){
                let fd = new FormData()
                fd.append('data', `delete from sekolah_jadwal where id_jadwal='${this.vdata.id_jadwal}'`)//database setting di server
                fd.append('database','infolay3_test')
                axios.post('https://infolayanans.space/api/mysql/auto.php', fd
                , {
                    headers: {
                    Authorization: localStorage.getItem('auth._token.local')
                    }
                }).then(res => {
                    alert('Delete Data Berhasil!')
                    this.vdata={}
                    console.log(res)
                     this.jadwals=[]
                    this.lengths=0
                    this.senins=[]
                    this.selasas=[]
                    this.rabus=[]
                    this.kamiss=[]
                    this.jumats=[]
                    this.sabuts=[]
                    this.$forceUpdate()
                this.getData()
                })
            }
        },
        puts(item){
            this.vdata=item
            this.$forceUpdate();
            this.inputs='update'
            this.$el.querySelector('#forminput').scrollIntoView({ block: 'end',  behavior: 'smooth' })
        },
        getData(){
            let fd = new FormData()
            fd.append('data', `select id_guru,nama_guru from sekolah_data_guru`)//database setting di server
            fd.append('database','infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                this.gurus=res.data
                console.log('guru',res.data)
                this.$forceUpdate()
            })
             let fd2 = new FormData()
            fd2.append('data', `select id_pelajaran,nama_pelajaran from setup_pelajaran`)//database setting di server
            fd2.append('database','infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                this.pelajarans=res.data
                this.$forceUpdate()
            })
             let fd3 = new FormData()
            fd3.append('data', `select id_kelas,nama_kelas from setup_kelas`)//database setting di server
            fd3.append('database','infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd3
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                this.kelass=res.data
                this.$forceUpdate()
            })
             let fd4 = new FormData()
            fd4.append('data', `select tb1.id_jadwal,tb2.nama_pelajaran,tb1.id_pelajaran,tb3.nama_guru,tb1.id_guru,tb4.nama_kelas,tb1.id_kelas,tb1.jam_masuk,tb1.hari,tb1.tanggal from sekolah_jadwal tb1 left join setup_pelajaran tb2 on tb2.id_pelajaran=tb1.id_pelajaran left join sekolah_data_guru tb3 on tb3.id_guru=tb1.id_guru left join setup_kelas tb4 on tb4.id_kelas=tb1.id_kelas where tb1.id_kelas='${this.$store.state.users.id_kelas}' order by tb1.jam_masuk`)//database setting di server
            fd4.append('database','infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd4
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                this.jadwals=res.data
                console.log(res.data)
                this.$forceUpdate()
                 let that = this
                let data = this.jadwals;
                data.filter(e=>{
                    console.log(e)
                    if(e.hari=='Senin'){
                        that.senins.push(e);
                    }else if(e.hari=='Selasa'){
                        that.selasas.push(e);
                    }else if(e.hari=='Rabu'){
                        that.rabus.push(e);
                    }else if(e.hari=='Kamis'){
                        that.kamiss.push(e);
                    }else if(e.hari=='Jumat'){
                        that.jumats.push(e);
                    }else if(e.hari=='Sabtu'){
                        that.sabtus.push(e);
                    }
                })
                let arrays=[]
                arrays=[that.senins,that.selasas,that.rabus,that.kamiss,that.jumats,that.sabtus]
                var lengths = arrays.map(function(a){return a.length;});
                lengths.indexOf(Math.max.apply(Math, lengths));
                let temp=0;
                lengths.forEach((e,i)=>{
                    if(temp<lengths[i]){
                        temp=lengths[i]
                    }
                })
                this.lengths=temp
                    })
                    this.$forceUpdate();
        }
    },
    mounted() {
        this.getData()
       
    },
}
</script>