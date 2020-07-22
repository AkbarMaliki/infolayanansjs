<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#0099ff"
        fill-opacity="1"
        d="M0,192L16,202.7C32,213,64,235,96,213.3C128,192,160,128,192,101.3C224,75,256,85,288,85.3C320,85,352,75,384,85.3C416,96,448,128,480,165.3C512,203,544,245,576,250.7C608,256,640,224,672,181.3C704,139,736,85,768,69.3C800,53,832,75,864,106.7C896,139,928,181,960,176C992,171,1024,117,1056,122.7C1088,128,1120,192,1152,208C1184,224,1216,192,1248,176C1280,160,1312,160,1344,186.7C1376,213,1408,267,1424,293.3L1440,320L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
      />
    </svg>
    <div class="row">
      <div class="offset-2 col-8 p-4 animated fadeInDown">
        <p class="text-center font-bold text-red-lighter">KIRIM Whatsapp</p>
        <div class="sm-form">
          <textarea
            type="text"
            id="message"
            name="message"
            rows="2"
            placeholder="message..."
            class="form-control md-textarea"
            v-model="message"
          ></textarea>
          <br />
          <wysiwyg v-model="message" />
          <br />
          <div class="text-center">
            <button type="button" @click="kirim" class="btn btn-sm btn-success">
              <span class="typcn typcn-message-typing"></span> Kirim
            </button>
          </div>
          <!-- <input type="file" name="file" @change="compress($event)" />
          <br>
          <button type="button" @click="gambar=''" class="btn btn-sm btn-danger  " v-if="gambar.length>0">Hapus Gambar</button>
          <br />
          <img :src="gambar" v-if="gambar.length>0" class="kinoLightBox img-fluid " style="height:400px;width:300px;;" alt="top">-->
        </div>
      </div>
      <div class="offset-2 col-8 p-4">
        <div v-text="hasil" id="txtnya" v-if="mulai"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import firebase from "firebase";

let db = firebase.firestore();
// let rdb = firebase.database()
// import autophp from '@/plugins/autophp';
// let sdb = new autophp();
export default {
  data() {
    return {
      vdata: {},
      file: "",
      imgs: [],
      ready: false,
      mulai: false,
      gambar: "",
      message: ""
    };
  },
  computed: {
    hasil() {
      let txt = this.message;
      txt = encodeURI(txt);
      return txt;
    }
  },
  methods: {
    test() {
      alert("y");
    },
    kirim() {
      this.mulai = !this.mulai;
      // window.location = 'https://api.whatsapp.com/send?phone=6282251970006&text='+encodeURIComponent(this.gambar)
      //   window.location = `https://api.whatsapp.com/send?phone=6282251970006&text=${this.txt}`
      // "https://akbarmaliki.github.io/infolayanansjs/#/sms_blast_on";
    },
    getFile(e) {
      this.file = e.target.files[0];
    },
    compress(event) {
      // this.imgList=e.target.files;
      if (event.target.files[0].size > 10000000) {
        alert("File yang di upload tidak sesuai kriteria");
      } else {
        if (event.target.files.length > 0) {
          let img = [];
          let hasil = [];
          let compress = "null";
          let filenya;
          for (let i = 0; i < event.target.files.length; i++) {
            this.imgs.push(event.target.files[i]);
            var selectedFile = event.target.files[i];
            var reader = new FileReader();
            reader.onload = function(event) {
              //   img.push(event.target.result)
            };
            reader.readAsDataURL(selectedFile);
            filenya = event.target.files[i];
            compress =
              filenya.size < 1000000
                ? 30
                : filenya.size < 2000000
                ? 25
                : filenya.size < 3000000
                ? 20
                : filenya.size < 4000000
                ? 15
                : 10;
            this.$daycaca.compress(filenya, compress, data => {
              this.gambar = data;
              img.push(data);
              this.$urltofile(data, filenya.name, filenya.type).then(res => {
                hasil.push(res);
              });
            });
          }
          console.log("base64", img);
          this.gambar = img;
          setTimeout(() => {
            console.log("file", hasil[0]);
            this.file = hasil[0];
            this.ready = true;
          }, 1000);
          //   this.$emit('upload', hasil)
        }
      }
    },
    inputfile() {
      let fd = new FormData();
      fd.append("file", this.file);
      fd.append("id", this.$store.state.users.id);
      axios
        .post("https://infolayanans.space/api/mysql/upload.php", fd, {
          headers: {
            "content-type": "multipart/form-data"
          }
        })
        .then(res => {
          console.log(res); // get /api/gambar/url.jpg
        });
    }
  },
  beforeMount() {
    let that = this;
    db.collection("sms_blast")
      .get()
      .then(res => {
        let data = res.docs.map(e => e.data());
        let hasil = false;
        data = data.filter(e => {
          if (e.id == localStorage.getItem("machineid")) {
            localStorage.setItem("machineid", e.id);
            return e;
          } else {
            hasil = "false";
          }
        });
        this.sama = hasil;
        console.log(data);
        if (data.length > 0) {
        } else {
          this.$router.push("/");
        }
      });
  }
};
</script>
