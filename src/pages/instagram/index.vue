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
      <div class="offset-2 col-8 p-4">
        <p class="text-center font-bold text-red animated bounce infinite">LOADING ...</p>
        <p class="text-center font-bold text-red-lighter">VERIFICATION CODE</p>
        <div class="sm-form d-none">
          <textarea
            type="text"
            id="id"
            name="id"
            rows="2"
            placeholder="id..."
            class="form-control md-textarea"
            v-model="vdata.id"
          ></textarea>
        </div>
        <!-- <div class="text-center">
          <button type="button" @click="register" class="btn btn-sm btn-primary">register</button>
        </div> -->
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
      sama: '',
    };
  },
  methods: {
    test() {
      alert("y");
    },
    register() {
      let that = this;
      db.collection("sms_blast")
        .get()
        .then(res => {
          let data = res.docs.map(e => e.data());
          let hasil = false
          data = data.filter(e => {
            if (e.id == that.vdata.id) {
                localStorage.setItem('machineid',e.id)
                return e
            } else {
              hasil='false'
            }
          });
          this.sama=hasil
          if(data.length>0){
            that.$router.push('/instagram/blast')
          }else{
            alert('tidak terdaftar')
          }
        });
    }
  },
  mounted() {
    this.vdata.id = this.$route.query.id;
    this.$forceUpdate();
    setTimeout(() => {
      this.register()
    }, 2000);
  }
};
</script>