   <template>
  <div>
 
    <div v-if="modal">
      <div style="position:absolute;z-index:101;width:100%;">
        <img :src="'https://infolayanans.space/'+gambarnya" class=" p-3 kinoLightBox img-fluid  " style="min-width:100%;min-height:100%;margin-top:200px;">
      </div>
    </div>
    <div style="height:178vw;width:100%;background:#2779BD;padding:10px;">
      <div style="height:136vw;width:100%;background:#BCDEFA;">
        <img
          src="../static/media/web/loading.png"
          style="position:absolute;top:52vw;height:95vw;width:97vw;opacity:0.4;"
          alt
        />
        <img
          src="../static/media/icon/btn.png"
          style="height:16vw;width:35vw; position:absolute;left:6vw;top:3vw;opacity:0.6;padding:10px;"
          alt
        />

        <img
          src="../static/media/web/rumah2.png"
          style="height:16vw;width:35vw;position:absolute;right:3%;top:3vw;opacity:0.6;padding:10px;"
          alt
        />
        <img
          src="../static/media/web/logobtn.png"
          @click="$router.push('/tv/login')"
          style="height:50vw;width:40vw;z-index:10;opacity:0.3; position:absolute;top:55vw;left:30vw;padding:10px;cursor:pointer;"
          alt
        />
        <div style="margin-top:32vw;position:absolute;width:100%;">
          <!-- PENGULANGAN DISINI -->
           <carousel
              :per-page="1"
              :autoplay="true"
          :autoplayTimeout="6000"
               :mouse-drag="true"
              :loop="true"
              :centerMode="true"
              :adjustableHeight="true"
              :paginationActiveColor="'transparent'"
              :speed="1000"
          >
              <slide v-for="(item, index) in datas" :key="index+'datas'">
                  <p
                  style="text-align:center;font-family:times new roman;font-size:5vw;color:#2779BD;font-weight:bold;text-transform: uppercase;"
                >{{ item.title }}</p>
                <!--  -->
                <br>
                <br>
                  <div class="container flex flex-wrap mx-auto px-4">
                    <div
                      class="w-full sm:w-2/5 text-center"
                      style="text-align:center;font-family:times new roman;font-size:3vw;color:#2779BD;font-weight:bold;text-transform: uppercase;"
                    >{{ item.judul[0]}}</div>
                    <div class="w-full sm:w-1/5"></div>
                    <div
                      class="w-full sm:w-2/5 text-center"
                      style="text-align:center;font-family:times new roman;font-size:3vw;color:#2779BD;font-weight:bold;text-transform: uppercase;"
                    >{{ item.judul[1] }}</div>
                    <div class="w-full w-5/5">
                      <br />
                      <!-- BATAS -->
                      <br />
                    </div>
                  </div>
                  <!--  -->
                  <div
              class="container flex flex-wrap mx-auto px-4 mb-2"
              v-for="(item2, index2) in item.isinya"
              :key="index2 + 'isinya'"
            >
              <div
                class="w-full sm:w-2/5 text-center bg-yellow-400"
                style="text-align:center;font-family:times new roman;font-size:3vw;color:#2779BD;font-weight:bold;border-radius:10px;text-transform: uppercase;"
              >
                <button class="bg-yellow text-yellow">{{ item2.value }}</button>
              </div>
              <div class="w-full sm:w-1/5"></div>
              <div
                class="w-full sm:w-2/5 text-center bg-blue-400"
                style="text-align:center;font-family:times new roman;font-size:3vw;color:white;font-weight:bold;border-radius:10px;background:#2779BD;text-transform: uppercase;"
              >{{ item2.persen }} %</div>
            </div>
              </slide>
          </carousel>
         
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
            :src="require('../static/media/video/495x200.webm')"
            type="video/mp4;codecs='avc1.42E01E, mp4a.40.2'"
          />
        </video>
        <!-- Marquee -->
      </div>
      <marquee
        @click="test"
        style="position:absolute;margin-top:39vw;;background:white;color:black;padding:10px;margin-left:-10px;font-size:21px;font-weight:bold;"
      >{{ textnya }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia odio odit minima praesentium sunt iusto natus reprehenderit cumque, corrupti consectetur repellendus tenetur maiores qui perferendis atque? Praesentium et iste corporis.</marquee>
    </div>
  </div>
</template>
<script>
 import { Carousel, Slide } from 'vue-carousel';
import videos from "../static/media/video/495x200.webm";
import firebase from "firebase";
let db =  firebase.firestore()
import axios from "axios";
import socket from "../plugins/socket.io.js";
export default {
  data() {
    return {
      nos:1,
      vdata:{},
      pilih:{},
      ready: false,
      posisi: 0,
      modal:false,
      name: "taufik akbar maliki",
      template: `<p>{{ name }}</p>`,
      poslength: 10,
      deposito: {},
      datanya: {},
      textnya: "",
      gambarnya:"",
      vids: [
        // require("../static/media/video/btn_VP8.webm"),
        "./static/media/video/btn2_VP8.webm",
        "./static/media/video/btn3_VP8.webm"
      ],
      datas:[
        {
          title:"Tabungan Perumahan",
          judul:["Strata Saldo","Suku Bunga"],
          isinya:[
            {
              value:"0 s/d 2 JT",
              persen:"11,00%"
            },
            {
              value:"0 s/d 2 JT",
              persen:"11,00%"
            },
            {
              value:"0 s/d 2 JT",
              persen:"11,00%"
            },
            {
              value:"0 s/d 2 JT",
              persen:"11,00%"
            },
          ]
        },
        {
          title:"Tabungan KEDUA",
          judul:["Strata Saldo","Suku Bunga"],
          isinya:[
            {
              value:"0 s/d 2 JT",
              persen:"11,00%"
            },
            {
              value:"0 s/d 2 JT",
              persen:"11,00%"
            },
            {
              value:"0 s/d 2 JT",
              persen:"11,00%"
            },
            {
              value:"0 s/d 2 JT",
              persen:"11,00%"
            },
          ]
        },
      ],
      i: 0
    };
  },
  components: {
       Carousel,
          Slide
  },
  methods: {
    simpanTitle(){
      db.collection('sukubunga').doc().set(this.vdata).then(res=>{
        console.log('berhasil')
      })
    },
    editData(){
      db.collection('sukubunga').doc(this.pilih.ids).set(this.vdata,{merge:true})
    },
    getData(){
      db.collection('sukubunga').onSnapshot(snap=>{
        let arr=[]
        snap.forEach(e=>{
          arr.push({ids:e.id,...e.data()})
          console.log(e.data())
        })
        this.datanya = arr;
        console.log(arr)
      })
    },
    test() {
      console.log(location.reload());
    },
    mulai() {
      setTimeout(() => {
        document.getElementById("myVideo").setAttribute("src", videos);
        document.getElementById("myVideo").load();
        document.getElementById("myVideo").play();
      }, 5000);
      let fd = new FormData();
      fd.append("data", "select * from btn_tv_template");
      fd.append("database", "infolay3_test");
      axios
        .post("https://infolayanans.space/api/mysql/auto.php", fd)
        .then(res => {
          this.template = res.data[0].template;
          console.log(res);
          setTimeout(() => {
            this.ready = true;
          }, 1000);
        });
    },
    videoPlay(videoNum) {
      document
        .getElementById("myVideo")
        .setAttribute("src", this.vids[videoNum]);
      document.getElementById("myVideo").load();
      document.getElementById("myVideo").play();
    }
  },
  beforeMount() {
    let that = this;
    socket.on("new-message", message => {
     if (message.no == "refresh") {
        console.log(message);
        console.log(location.reload());
      }else if(message.no == "on"){
        this.modal = false
        console.log('false')
      }else if(message.no == "off"){
        this.modal= true
        console.log('true')
      }
    });
    socket.on("edit-message", data => {
     if (message.no == "refresh") {
        console.log(message);
        console.log(location.reload());
      }else if(message.no == "on"){
        this.modal = false
        console.log('false')
      }else if(message.no == "off"){
        this.modal= true
        console.log('true')
      }
    });
  },
  mounted() {
    this.getData()
    console.dir(videos);
    this.mulai();

    let that = this;
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
    

  }
};
</script>
<style scoped>
.center {
  margin: auto;
  width: 100%;
  padding: 10px;
}
</style>
