<template>
    <div>
      <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                 <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.go(-1)"></span>
            <div class="p-3 text-center text-white font-times">
                    <p>REQUEST MOBIL</p>
            </div>
            <br>
            <br>
        </div>
        <div class="bg-white ml-2 mr-2 p-2 rounded-lg shadow-inner" style="margin-top:-50px;"> 

        <br>
         <div class="mb-4">
      <input
        id="SearchItem"
        placeholder="Search Mobil"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        v-model="searchItem"
      />
    </div>
   <div class="container-fluid">
            <div class="row">
              <div
                class="col-sm-4 cursor-pointer pb-4"
                v-for="(item, index) in filteredData"
                :key="index+'data'"
              >
                <img
                    @click="shows=index"
                  :src="'https://infolayanans.space/'+item.gambar"
                  class="kinoLightBox shadow-lg img-fluid z-depth-1 hoverzoom rounded-t-lg"
                  alt="circle"
                />
                <p
                  class="font-times text-uppercase font-bold text-center p-2  bg-white"
                >{{item.nama}}</p>
                <div v-show="shows==index"
                  class="font-times text-uppercase  pl-3 pr-3  bg-white animated fadeIn"
                >{{item.nama}}
                <br>
                <p>{{item.warna}}</p>
                <p>{{item.keterangan}}</p>
                <br>
                <button type="button"  class="btn btn-sm btn-outline-info btn-block">Request</button>
                </div>
                <div class="p-2 bg-white shadow-inner rounded-b-lg">

                  <p class="font-times text-right rounded-b-lg pr-2">
                    <b>{{item.no_plate}}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
              <div class="col-6">
                 <button type="button" @click="pagPrev" class="btn btn-sm btn-primary btn-block">Previous</button>
              </div>
              <div class="col-6">
                    <button type="button" @click="pagNext" class="btn btn-sm btn-primary btn-block">Next</button>
              </div>
          </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datanya: '',
      temp1: 0,
      temp2: 10,
      pagination: 1,
      pembagiannya: 10,
      orderBy: '',
      orderWith: true,
      searchItem: '',
      mobils: {},
      shows: 100
    }
  },
  layout: 'driver',
  computed: {
    jumlahPagination () {
      let data = this.datanya
      return data.length / 10
    },
    tombolPagination () {
      let data = this.pagination
      // v-if != (current > max ) button nya
      let btn1 = data - 2
      let btn2 = data - 1
      let btn3 = data
      let btn4 = data + 1
      let btn5 = data + 2
      let array = [btn1, btn2, btn3, btn4, btn5]
      if (array.indexOf(-1) != -1) {
        array = [1, 2, 3, 4, 5]
      } else if (array.indexOf(0) != -1) {
        array = [1, 2, 3, 4, 5]
      }
      return array
    },
    filteredData () {
      let that = this
      let data = this.datanya
      //! order fungsi
      if (this.orderBy.length > 0) {
        data = this.$_.orderBy(data, ['title'], [this.orderBy])
      }
      //! search fungsi
      if (data[0] != undefined) {
        let keys = Object.keys(data[0])
        data = data.filter((v, i, a) => {
          let hasil = false
          keys.filter(key => {
            if (typeof v[key] === 'string') {
              if (
                v[key].toLowerCase().indexOf(this.searchItem.toLowerCase()) !=
                -1
              ) {
                hasil = true
              }
            } else {
              if (v[key].toString().indexOf(this.searchItem) != -1) {
                hasil = true
              }
            }
          })
          if (hasil) return v
        })
      }
      // data = data.map(e => {
      //   let obj = {};
      //   let kunci = Object.keys(e);
      //   kunci = that.$_.difference(kunci, that.unless);
      //   kunci.forEach((a, index) => {
      //     if (kunci.find(e => e == that.date[index])) {
      //     } else {
      //       // obj[a] = 'tanggal'
      //     }
      //     console.log(typeof e[a]);
      //     obj[a] =
      //       typeof e[a] != "string"
      //         ? e[a]
      //         : new Date(e[a]) !== "Invalid Date" && !isNaN(new Date(e[a]))
      //         ? that.format(e[a])
      //         : e[a];
      //   });
      //   return obj;
      // });
      data = data.slice(this.temp1, this.temp2)
      return data
    }
  },
  methods: {
    pagPrev () {
      this.pagination = this.pagination - 1
      if (this.pagination == 0) {
        this.pagination = 1
      }
      this.temp2 = this.pagination * this.pembagiannya
      this.temp1 = Math.round(this.temp2) - this.pembagiannya
    },
    pagNext () {
      this.pagination = this.pagination + 1
      if (this.pagination > this.jumlahPagination) {
        this.pagination = Math.round(this.jumlahPagination)
      }
      this.temp2 = this.pagination * this.pembagiannya
      this.temp1 = Math.round(this.temp2) - this.pembagiannya
    },
    changePagination (pag) {
      this.pagination = pag
      this.temp2 = this.pagination * this.pembagiannya
      this.temp2 = Math.round(this.temp2)
      this.temp1 = this.temp2 - this.pembagiannya
      this.temp1 = Math.round(this.temp1)
    },
    refrsh () {
      let fd = new FormData()
      fd.append('data', 'select id,nama_mobil,no_plate from driver_mobil')
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto2.php', fd
        , {
          headers: {
            Authorization: localStorage.getItem('auth._token.local')
          }
        }).then(res => {
        this.datanya = res.data
        console.log(res)
      })
    },
    lol () {
      alert('lol')
    }
  },
  mounted () {
    this.refrsh()
  }
}
</script>
<style scoped>
.hoverzoom {
  margin-left: auto;
  margin-right: auto;
  display: block;
  height: 300px; /* [1.1] Set it as per your need */
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}
.hoverzoom {
  transition: all 0.5s ease;
}

/* [3] Finally, transforming the image when container gets hovered */
.hoverzoom:hover {
  transform: scale(1.2);
}
</style>
