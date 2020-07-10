<template>
  <div class="m-3">
    <form action="" @submit.prevent="registers">
      <div class="sm-form ">
          <label for="nip">Your nip</label>
          <input type="text" id="nip" name="nip" class="form-control form-control-sm" placeholder="nip" v-model="vdata.nip" >
      </div>
      <div class="sm-form ">
          <label for="nama">Your nama</label>
          <input type="text" id="nama" name="nama" class="form-control form-control-sm" placeholder="nama" v-model="vdata.nama" >
      </div>
       <div class="sm-form">
          <label for="posisi">Posisi Kerja/Unit Kerja</label>
          <select class='form-control' v-model="vdata.posisi" @change="items($event)">
          <option v-for="(item, index) in unit" :key="index" v-if="item.id!='1'" :value="{nama_unit:item.nama_unit,unit_kerja:item.id}">{{item.nama_unit}}</option>
          </select>
        </div>
         <div class="sm-form ">
          <label for="unit_kerja_head">Your unit_kerja_head</label>
          <input type="text" id="unit_kerja_head" name="unit_kerja_head" class="form-control form-control-sm" placeholder="unit_kerja_head" v-model="vdata.unit_kerja_head" >
      </div>
      <button type="submit" class="btn btn-sm btn-outline-primary  ">Simpan</button>
    </form>

    {{vdata}}
  </div>
</template>
<script>
import axios from 'axios'
import md5 from 'md5'
export default {
  data(){
    return{
      vdata:{
        unit_kerja_head:""
      },
      unit:[]
    }
  },
  mounted() {
     let fd = new FormData()
      fd.append('data', `select * from driver_unit`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          this.unit = res.data
          this.$forceUpdate()
      })
  },
  methods:{
    registers(){
      let fd = new FormData()
      fd.append('data', `insert into tbuser (username,password,nip,nama,status,posisi,unit_kerja,unit_kerja_head) values ('${this.vdata.nip}','${md5(this.vdata.nip)}','${this.vdata.nip}','${this.vdata.nama}','available','${this.vdata.posisi.nama_unit}','${this.vdata.posisi.unit_kerja}','${this.vdata.unit_kerja_head}')`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
        let fd2 = new FormData()
        fd2.append('data', `select * from tbuser order by id desc`)
        fd2.append('database', ' infolay3_test')
        axios.post('https://infolayanans.space/api/mysql/auto.php', fd2
        , {
            headers: {
            Authorization: localStorage.getItem('auth._token.local')
            }
        }).then(res => {
            let id = res.data[0].id
            let fd3 = new FormData()
            fd3.append('data', `insert into tbuser_ttd (id_user) values ('${id}')`)
            fd3.append('database', ' infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd3
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                console.log(res)
                this.$forceUpdate()
            })
             let fd4 = new FormData()
            fd4.append('data', `insert into tbuser_gambar (id_user) values ('${id}')`)
            fd4.append('database', ' infolay3_test')
            axios.post('https://infolayanans.space/api/mysql/auto.php', fd4
            , {
                headers: {
                Authorization: localStorage.getItem('auth._token.local')
                }
            }).then(res => {
                console.log(res)
                this.$forceUpdate()
            })
        })
      })
    }
  }
}
</script>