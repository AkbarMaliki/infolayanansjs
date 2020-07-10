   <template>
  <div>
    <div v-if="modal">
      <div style="position:absolute;z-index:101;width:100%;">
        <img :src="'https://infolayanans.space/'+gambarnya" class=" p-3 kinoLightBox img-fluid  " style="min-width:100%;min-height:100vw;margin-top:200px;">
      </div>
    </div>
    <div style="height:178vw;width:100%;background:#2779BD;padding:10px;">
      <div style="height:136vw;width:100%;background:#BCDEFA;">
        <img
          src="@/static/media/web/loading.png"
          style="position:absolute;top:52vw;height:95vw;width:97vw;opacity:0.4;"
          alt
        />
        <img
          src="@/static/media/icon/btn.png"
          style="height:16vw;width:35vw; position:absolute;left:6vw;top:3vw;opacity:0.6;padding:10px;"
          alt
        />

        <img
          src="@/static/media/web/rumah2.png"
          style="height:16vw;width:35vw;position:absolute;right:3%;top:3vw;opacity:0.6;padding:10px;"
          alt
        />
        <img
          src="@/static/media/web/logobtn.png"
          @click="$router.push('/tv/login')"
          style="height:50vw;width:40vw;z-index:10;opacity:0.3; position:absolute;top:55vw;left:30vw;padding:10px;cursor:pointer;"
          alt
        />
        <div style="margin-top:32vw;position:absolute;width:100%;">
          <!-- PENGULANGAN DISINI -->
          <div
            v-for="(item, index) in datanya"
            :key="index + 'asd'"
            v-if="index == posisi"
            class="center animated slideInRight"
          >
            <p
              style="text-align:center;font-family:times new roman;font-size:5vw;color:#2779BD;font-weight:bold;text-transform: uppercase;"
            >{{ item.value[0].title }}</p>
            <br />
            <br />
            <div class="container flex flex-wrap mx-auto px-4">
              <div
                class="w-full sm:w-2/5 text-center"
                style="text-align:center;font-family:times new roman;font-size:3vw;color:#2779BD;font-weight:bold;text-transform: uppercase;"
              >{{ item.value[0].sub_kiri }}</div>
              <div class="w-full sm:w-1/5"></div>
              <div
                class="w-full sm:w-2/5 text-center"
                style="text-align:center;font-family:times new roman;font-size:3vw;color:#2779BD;font-weight:bold;text-transform: uppercase;"
              >{{ item.value[0].sub_kanan }}</div>
              <div class="w-full w-5/5">
                <br />
                <!-- BATAS -->
                <br />
              </div>
            </div>
            <div
              class="container flex flex-wrap mx-auto px-4 mb-2"
              v-for="(item2, index2) in item.value"
              :key="index + 'ind2'"
            >
              <div
                class="w-full sm:w-2/5 text-center bg-yellow-400"
                style="text-align:center;font-family:times new roman;font-size:3vw;color:#2779BD;font-weight:bold;border-radius:10px;text-transform: uppercase;"
              >
                <button class="text-black">{{ item2.sub_1 }}</button>
              </div>
              <div class="w-full sm:w-1/5"></div>
              <div
                class="w-full sm:w-2/5 text-center bg-blue-400"
                style="text-align:center;font-family:times new roman;font-size:3vw;color:white;font-weight:bold;border-radius:10px;background:#2779BD;text-transform: uppercase;"
              >{{ item2.sub_2 }} %</div>
            </div>
          </div>
          <div v-if="posisi == poslength" class="center animated slideInRight">
            <p
              style="text-align:center;font-family:times new roman;font-size:5vw;color:#2779BD;font-weight:bold;text-transform: uppercase;"
            >{{ deposito.title }}</p>
            <br />
            <br />
            <div class="container-fluid flex flex-wrap">
              <div
                class="w-full sm:w-5/5 text-center"
                style="text-align:center;font-family:times new roman;font-size:2.5vw;color:#2779BD;font-weight:bold;text-transform: uppercase;"
              >
                <table
                  style="width:100%;border-collapse:separate;
                border-spacing:0 15px; "
                >
                  <tr>
                    <td style="font-weight:bold;font-size:2.5vw;">JANGKA WAKTU</td>
                    <td style="font-weight:bold;font-size:2.5vw;">< 100 JT</td>
                    <td style="font-weight:bold;font-size:2.5vw;">> 100 JT < 500 JT</td>
                    <td style="font-weight:bold;font-size:2.5vw;">> 500 JT s/d < 2M</td>
                    <td style="font-weight:bold;font-size:2.5vw;">> 2 M</td>
                  </tr>
                  <tr>
                    <td>
                      <p
                        class="bg-yellow-400 p-3 mr-2"
                        style="text-align:center;font-family:times new roman;font-size:2.5vw;color:#2779BD;font-weight:bold;border-radius:10px;text-transform: uppercase;"
                      >1 BULAN</p>
                    </td>
                    <td v-for="(item, index) in 4" :key="index + '1b'">
                      <p
                        class="bg-blue-500 p-3 mr-2"
                        style="text-align:center;font-family:times new roman;font-size:2.5vw;color:white;font-weight:bold;border-radius:10px;text-transform: uppercase;"
                      >{{ deposito[1 + "bn" + (index + 1)] }} %</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p
                        class="bg-yellow-400 p-3 mr-2"
                        style="text-align:center;font-family:times new roman;font-size:2.5vw;color:#2779BD;font-weight:bold;border-radius:10px;text-transform: uppercase;"
                      >2 BULAN</p>
                    </td>
                    <td v-for="(item, index) in 4" :key="index + '2b'">
                      <p
                        class="bg-blue-500 p-3 mr-2"
                        style="text-align:center;font-family:times new roman;font-size:2.5vw;color:white;font-weight:bold;border-radius:10px;text-transform: uppercase;"
                      >{{ deposito[2 + "bn" + (index + 1)] }} %</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p
                        class="bg-yellow-400 p-3 mr-2"
                        style="text-align:center;font-family:times new roman;font-size:2.5vw;color:#2779BD;font-weight:bold;border-radius:10px;text-transform: uppercase;"
                      >3 BULAN</p>
                    </td>
                    <td v-for="(item, index) in 4" :key="index + '3b'">
                      <p
                        class="bg-blue-500 p-3 mr-2"
                        style="text-align:center;font-family:times new roman;font-size:2.5vw;color:white;font-weight:bold;border-radius:10px;text-transform: uppercase;"
                      >{{ deposito[3 + "bn" + (index + 1)] }} %</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p
                        class="bg-yellow-400 p-3 mr-2"
                        style="text-align:center;font-family:times new roman;font-size:2.5vw;color:#2779BD;font-weight:bold;border-radius:10px;text-transform: uppercase;"
                      >6 BULAN</p>
                    </td>
                    <td v-for="(item, index) in 4" :key="index + '6b'">
                      <p
                        class="bg-blue-500 p-3 mr-2"
                        style="text-align:center;font-family:times new roman;font-size:2.5vw;color:white;font-weight:bold;border-radius:10px;text-transform: uppercase;"
                      >{{ deposito[6 + "bn" + (index + 1)] }} %</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p
                        class="bg-yellow-400 p-3 mr-2"
                        style="text-align:center;font-family:times new roman;font-size:2.5vw;color:#2779BD;font-weight:bold;border-radius:10px;text-transform: uppercase;"
                      >12 BULAN</p>
                    </td>
                    <td v-for="(item, index) in 4" :key="index + '12b'">
                      <p
                        class="bg-blue-500 p-3 mr-2"
                        style="text-align:center;font-family:times new roman;font-size:2.5vw;color:white;font-weight:bold;border-radius:10px;text-transform: uppercase;"
                      >{{ deposito[12 + "bn" + (index + 1)] }} %</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p
                        class="bg-yellow-400 p-3 mr-2"
                        style="text-align:center;font-family:times new roman;font-size:2.5vw;color:#2779BD;font-weight:bold;border-radius:10px;text-transform: uppercase;"
                      >24 BULAN</p>
                    </td>
                    <td v-for="(item, index) in 4" :key="index + '24b'">
                      <p
                        class="bg-blue-500 p-3 mr-2"
                        style="text-align:center;font-family:times new roman;font-size:2.5vw;color:white;font-weight:bold;border-radius:10px;text-transform: uppercase;"
                      >{{ deposito[24 + "bn" + (index + 1)] }} %</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- video -->
        <video
          width="530"
          height="240"
          controls
          autoplay
          loop
          style="width:97vw;position:absolute;margin-top:137vw;"
          id="myVideo"
          muted="muted"
        >
          <source
            :src="require('@/static/media/video/495x200.webm')"
            type="video/mp4;codecs='avc1.42E01E, mp4a.40.2'"
          />
        </video>
        <!-- Marquee -->
      </div>
      <marquee
        @click="test"
        style="position:absolute;margin-top:39vw;;background:white;color:black;padding:10px;margin-left:-10px;font-size:21px;font-weight:bold;"
      >A {{ textnya }}</marquee>
    </div>
  </div>
</template>
<script>
import VRuntimeTemplate from 'v-runtime-template'
import videos from '@/static/media/video/495x200.webm'
import axios from 'axios'
import socket from '@/plugins/socket.io.js'
export default {
  data () {
    return {
      ready: false,
      posisi: 0,
      modal: false,
      name: 'taufik akbar maliki',
      template: `<p>{{ name }}</p>`,
      poslength: 10,
      deposito: {},
      datanya: {},
      textnya: '',
      gambarnya: '',
      vids: [
        // require("@/static/media/video/btn_VP8.webm"),
        './static/media/video/btn2_VP8.webm',
        './static/media/video/btn3_VP8.webm'
      ],
      i: 0
    }
  },
  components: {
    VRuntimeTemplate
  },
  methods: {
    test () {
      console.log(location.reload())
    },
    mulai () {
      setTimeout(() => {
        document.getElementById('myVideo').setAttribute('src', videos)
        document.getElementById('myVideo').load()
        document.getElementById('myVideo').play()
      }, 5000)
      let fd = new FormData()
      fd.append('data', 'select * from btn_tv_template')
      fd.append('database', ' infolay3_test')
      axios
        .post('https://infolayanans.space/api/mysql/auto.php', fd)
        .then(res => {
          this.template = res.data[0].template
          console.log(res)
          setTimeout(() => {
            this.ready = true
          }, 1000)
        })
    },
    videoPlay (videoNum) {
      document
        .getElementById('myVideo')
        .setAttribute('src', this.vids[videoNum])
      document.getElementById('myVideo').load()
      document.getElementById('myVideo').play()
    }
  },
  beforeMount () {
    let that = this
    socket.on('new-message', message => {
      if (message.no == 'refresh') {
        console.log(message)
        console.log(location.reload())
      } else if (message.no == 'on') {
        this.modal = false
        console.log('false')
      } else if (message.no == 'off') {
        this.modal = true
        console.log('true')
      }
    })
    socket.on('edit-message', data => {
      if (message.no == 'refresh') {
        console.log(message)
        console.log(location.reload())
      } else if (message.no == 'on') {
        this.modal = false
        console.log('false')
      } else if (message.no == 'off') {
        this.modal = true
        console.log('true')
      }
    })
  },
  mounted () {
    console.dir(videos)
    this.mulai()

    let that = this
    // document.getElementById("myVideo").addEventListener("ended", function() {
    //   console.log("ended");
    //   let videoCount = that.vids.length;
    //   that.i++;
    //   if (that.i == videoCount) {
    //     that.i = 0;
    //     that.videoPlay(that.i);
    //   } else {
    //     that.videoPlay(that.i);
    //   }
    // });
    setInterval(() => {
      if (this.posisi >= this.poslength + 1) {
        // + disini berapa banyak custom tambahan yang ada
        this.posisi = -1
      }
      this.posisi++
      // this.posisi = 11;
      console.log(this.posisi)
    }, 20000)

    // GET DATA
    let fd = new FormData()
    fd.append(
      'data',
      `Select * FROM btn_tv tb1 LEFT JOIN btn_tv2 tb2 ON tb1.id= tb2.id_tv ORDER BY tb1.id ASC`
    )
    fd.append('database', ' infolay3_test')
    axios
      .post('https://infolayanans.space' + '/api/mysql/auto.php', fd, {
        headers: {
          Authorization: localStorage.getItem('auth._token.local')
        }
      })
      .then(res => {
        let data = _.chain(res.data)
          // Group the elements of Array based on `id yang sama` property
          .groupBy('id_tv')
          // `key` is group's name (id), `value` is the array of objects
          .map((value, key) => ({
            id: key,
            value: value
          }))
          .value()
        this.datanya = data
        this.poslength = data.length
        console.log(data)
        console.log('posisi length', this.poslength)
      })
    let fd2 = new FormData()
    fd2.append('data', `Select * FROM btn_tv_text`)
    fd2.append('database', ' infolay3_test')
    axios
      .post('https://infolayanans.space' + '/api/mysql/auto.php', fd2, {
        headers: {
          Authorization: localStorage.getItem('auth._token.local')
        }
      })
      .then(res => {
        console.log(res)
        this.textnya = res.data[0].text
      })
    let fd3 = new FormData()
    fd3.append('data', `Select * FROM btn_tv_deposito`)
    fd3.append('database', ' infolay3_test')
    axios
      .post('https://infolayanans.space' + '/api/mysql/auto.php', fd3, {
        headers: {
          Authorization: localStorage.getItem('auth._token.local')
        }
      })
      .then(res => {
        console.log(res)
        this.deposito = res.data[0]
      })
    let fd4 = new FormData()
    fd4.append('data', `Select * FROM btn_tv_iklan`)
    fd4.append('database', ' infolay3_test')
    axios
      .post('https://infolayanans.space' + '/api/mysql/auto.php', fd4, {
        headers: {
          Authorization: localStorage.getItem('auth._token.local')
        }
      })
      .then(res => {
        this.gambarnya = res.data[0].text
      })
  }
}
</script>
<style scoped>
.center {
  margin: auto;
  width: 100%;
  padding: 10px;
}
</style>
