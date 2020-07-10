<template>
  <div>
    <div style="height:160vw;width:100%;" class="bg-blue-dark p-2">
      <div class="bg-blue-lighter" style="height:100vw;width:100%;">
        <img
          src="@/static/web/loading.gif"
          style="position:absolute;top:46vw;height:55vw;width:97vw;opacity:0.4;"
          alt
        />
        <img
          src="@/static/icon/btn.png"
          class="p-2"
          style="height:16vw;width:35vw; position:absolute;left:6vw;top:3vw;opacity:0.6;"
          alt
        />

        <img
          src="@/static/web/rumah2.png"
          class="p-2"
          style="height:16vw;width:35vw;position:absolute;right:3%;top:3vw;opacity:0.6;"
          alt
        />
        <img
          src="@/static/web/logobtn.png"
          @click="$router.push('/tv/login')"
          class="p-2 cursor-pointer"
          style="height:50vw;width:40vw;z-index:10;opacity:0.3; position:absolute;top:35vw;left:30vw;"
          alt
        />
        <carousel
          :per-page="1"
          :autoplay="true"
          :mouse-drag="true"
          :loop="true"
          :centerMode="true"
          :adjustableHeight="true"
          :paginationActiveColor="'blue'"
          :paginationEnabled="false"
          :speed="1000"
        >
          <slide
            style="height:1000px;"
            v-for="(item, index) in datanya"
            :key="'tes' + index + 'item1'"
          >
            <div>
              <p
                class="text-center text-blue-dark font-bold font-times mt-3 text-uppercase"
                style="padding-top:20vw;font-size:5vw;"
              >{{ item.value[0].title }}</p>
              <div class="container-fluid" style="margin-top:10vw;">
                <div class="row">
                  <div class="offset-1 col-5">
                    <p
                      class="text-blue-dark font-bold font-times text-center text-uppercase"
                      style="top:40vw;font-size:3vw;left:10vw;"
                    >{{ item.value[0].sub_kiri }}</p>
                    <br />
                    <button
                      type="button"
                      name
                      id
                      class="btn btn-lg btn-warning rounded-lg mb-2 text-uppercase"
                      style="top:50vw;font-size:3vw;left:10vw;width:30vw;"
                      v-for="(item2, index2) in item.value"
                      :key="'tes1' + index + 'item2'"
                    >{{ item2.sub_1 }}</button>
                  </div>
                  <div class="col-5 text-center">
                    <p
                      class="text-blue-dark font-bold font-times text-center text-uppercase"
                      style="top:40vw;font-size:3vw;right:10vw;"
                    >{{ item.value[0].sub_kanan }}</p>
                    <br />
                    <span v-for="(item3, index3) in item.value" :key="'tes2' + index + 'item3'">
                      <button
                        type="button"
                        name
                        id
                        class="btn btn-lg bg-blue-dark shadow-lg rounded-lg text-white mb-2"
                        style="top:50vw;font-size:3vw;right:20vw;width:20vw;"
                      >{{ item3.sub_2 }}</button>
                      <button
                        type="button"
                        name
                        id
                        class="btn btn-lg btn-warning rounded-lg mb-2"
                        style="top:50vw;font-size:3vw;right:10vw;width:10vw;"
                      >%</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </slide>
          <!--  -->
        </carousel>
      </div>

      <video
        width="530"
        height="240"
        controls
        autoplay
        style="width:100vw;"
        id="myVideo"
        muted="muted"
      >
        <source :src="vids[0]" type="video/mp4" />
      </video>
      <marquee-text>
        <span
          class="p-1 bg-blue text-white text-2xl"
          style="font-size:21px;font-weight:bold;font-family:times new roman;"
        >{{ textnya }}</span>
      </marquee-text>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
import Slide1 from '@/components/tv/slide1.vue'
import Slide2 from '@/components/tv/slide2.vue'
import socket from '@/plugins/socket.io.js'
import axios from 'axios'
export default {
  components: {
    Slide1,
    Slide2
  },
  data () {
    return {
      test: 'taufik',
      datanya: {},
      textnya: '',
      vids: [
        require('@/static/video/btn.mp4'),
        require('@/static/video/btn2.mp4'),
        require('@/static/video/btn3.mp4')
      ],
      i: 0
    }
  },
  methods: {
    videoPlay (videoNum) {
      document
        .getElementById('myVideo')
        .setAttribute('src', this.vids[videoNum])
      document.getElementById('myVideo').load()
      document.getElementById('myVideo').play()
    }
  },
  mounted () {
    let that = this
    document.getElementById('myVideo').addEventListener('ended', function () {
      let videoCount = that.vids.length
      that.i++
      if (that.i == videoCount) {
        that.i = 0
        that.videoPlay(that.i)
      } else {
        that.videoPlay(that.i)
      }
    })
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
          .map((value, key) => ({ id: key, value: value }))
          .value()
        this.datanya = data
        console.log(data)
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
  },
  beforeMount () {
    let that = this
    socket.on('new-message', message => {
      if (message.no == 'refresh') {
        this.$router.go()
      }
    })
    socket.on('edit-message', data => {
      if (message.no == 'refresh') {
        this.$router.go()
      }
    })
  }
}
</script>
