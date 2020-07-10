<template>
  <div>
    <button
      type="button"
      @click="test2"
      class="btn btn-sm btn-primary"
    >ini button untuk melakukan test</button>

    <button
      type="button"
      @click="$router.push('/login/laravel')"
      class="btn btn-sm btn-primary"
    >login</button>
    {{vdata}}
    <br />
    <br />
    <div
      v-for="(item, index) in soal"
      :key="index+'soal'"
      class="bg-white pl-4 pt-3 pr-4 pb-3 rounded-lg"
    >
      <div style="min-height:10px;">
        <!-- menu ataus -->
        <span class="pl-2">{{index+1}}. {{item.pertanyaan}} ?</span>
        <div v-show="item.img.length>0" class="text-center">
          <br />
          <img
            :src="item.img"
            v-show="item.img.length>0"
            class="kinoLightBox img-fluid z-depth-1"
            style="height:180px;"
          />
        </div>
      </div>
      <hr class="style13" />
      <div>
        <!-- pertanyaan -->
      </div>
      <div>
        <!-- jawaban -->
        <!-- RADIO -->
        <div v-for="(item2, index2) in item.jawaban" :key="index2+'jawaban'">
          <span>{{index2|huruf}})</span>&nbsp;
          <span v-if="item.type=='radio'">
            <input
              type="radio"
              :id="index+'radio'+index2"
              :value="item2"
              v-model="vdata[`jawab${index+1}`]"
              @change="jawab(item.jawaban,`jawab${index+1}`,index)"
            />
            <label :for="index+'radio'+index2">
              {{item2.teks}}
              <br v-show="item2.img.length>0" />
              <img
                :src="item2.img"
                v-show="item2.img.length>0"
                class="kinoLightBox img-fluid z-depth-1"
                style="height:180px;"
              />
            </label>
            <br />
          </span>
          <span v-if="item.type=='checkbox'">
            <input
              type="checkbox"
              :id="index+'checkbox'+index2"
              v-initial="index"
              :value="item2"
              v-model="vdata[`jawab${index+1}`]"
              @change="jawab(item.jawaban,`jawab${index+1}`,index)"
            />
            <label :for="index+'checkbox'+index2">
              {{item2.teks}}
              <br v-show="item2.img.length>0" />
              <img
                :src="item2.img"
                v-show="item2.img.length>0"
                class="kinoLightBox img-fluid z-depth-1"
                style="height:180px;"
              />
            </label>
            <br />
          </span>
        </div>
        <!-- CHECKBOX -->
        <!-- note : checkedNames harus dalam bentuk array -->
      </div>
    </div>
    <button type="button" @click="selesai" class="btn btn-sm btn-primary">Selesai</button>
  </div>
</template>
<script>
export default {
  layout: "app",
  data() {
    return {
      benar: 0,
      salah: 0,
      soal: [
        {
          pertanyaan: "Siapa kah nama kendaraan Kino ?",
          img: "",
          jawaban: [
            {
              teks: "Kino",
              benar: "false",
              img:
                "https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png"
            },
            { teks: "Hermes", benar: "true", img: "" },
            { teks: "Tabi", benar: "false", img: "" },
            { teks: "No", benar: "false", img: "" },
            { teks: "Malik", benar: "false", img: "" }
          ],
          type: "radio",
          benar: 0,
          order: 0
        },
        {
          pertanyaan: "Siapa kah nama kendaraan Kino  asd?",
          img:
            "https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png",
          jawaban: [
            { teks: "Satu", benar: "false", img: "" },
            { teks: "Dua", benar: "true", img: "" },
            { teks: "Tiga", benar: "false", img: "" },
            { teks: "Empat", benar: "true", img: "" },
            { teks: "Lima", benar: "false", img: "" }
          ],
          type: "checkbox",
          benar: 0,
          order: 1
        }
      ],
      vdata: {}
    };
  },
  mounted() {
    let soal = this.soal;
    let randomSoal = soal.map(({ order }) => order);
    // console.log(randomSoal);
    // randomSoal.forEach(
    //   o =>
    //     (o.order = randomSoal.splice(Math.floor(0.4 * randomSoal.length), 1)[0])
    // );
    var arrTest = [
        {
          pertanyaan: "Siapa kah nama kendaraan Kino ?",
          img: "",
          jawaban: [
            {
              teks: "Kino",
              benar: "false",
              img: "http://st.cdjapan.co.jp/pictures/l/16/17/NEOBK-2283958.jpg"
            },
            { teks: "Hermes", benar: "true", img: "" },
            { teks: "Tabi", benar: "false", img: "" },
            { teks: "No", benar: "false", img: "" },
            { teks: "Malik", benar: "false", img: "" }
          ],
          type: "radio",
          benar: 0,
          order: 1
        },
        {
          pertanyaan: "Siapa kah nama kendaraan Kino  asd?",
          img: "http://st.cdjapan.co.jp/pictures/l/16/17/NEOBK-2283958.jpg",
          jawaban: [
            { teks: "Satu", benar: "false", img: "" },
            { teks: "Dua", benar: "true", img: "" },
            { teks: "Tiga", benar: "false", img: "" },
            { teks: "Empat", benar: "true", img: "" },
            { teks: "Lima", benar: "false", img: "" }
          ],
          type: "checkbox",
          benar: 0,
          order: 2
        }
      ],
      random = arrTest.map(({ pertanyaan }) => pertanyaan);
    arrTest.forEach(
      o => (o.pertanyaan = random.splice(Math.floor(0 * random.length), 1)[0])
    );
    console.log(arrTest);
    setTimeout(() => {
      this.vdata = {
        jawab1: { teks: "Hermes", benar: "true", img: "" },
        jawab2: [
          { teks: "Dua", benar: "true", img: "" },
          { teks: "Tiga", benar: "false", img: "" }
        ]
      };
      this.$forceUpdate();
    }, 1000);
    // console.log("asddsa");
    // setTimeout(() => {
    //   this.soal = this.$_.shuffle(this.soal);
    //   this.$forceUpdate();
    // }, 1000);
  },
  directives: {
    initial: {
      inserted: function(el, bind, vm) {
        let that = vm;
        // vdata[`jawab${index+1}`]
        // console.log(`jawab${bind.value + 1}`);
        that.context.vdata[`jawab${bind.value + 1}`] = [];
        // that.vdata[`jawab${bind.value + 1}`] = [];
      }
    }
  },
  methods: {
    test2() {
      let nilai1 = 10;
      let nilaiAkhir = 30;
      console.dir(this.$el.querySelectorAll("div"));
      if (nilai1 > nilaiAkhir) {
        //!maka akan menjadi kan
        alert("tinggi");
      } else {
        alert("rendah");
      }
    },
    selesai() {
      let jumlah_soal = 0;
      let benar = 0;
      this.soal.forEach(e => {
        jumlah_soal++;
        benar = benar + e.benar;
      });
      let hasil = 0;
      hasil = (benar / jumlah_soal) * 100;
      console.log(hasil);
    },
    jawab(item, jawab, index) {
      let score = 0;
      var bagi = 0;
      item.forEach(e => {
        if (e.benar == "true") {
          bagi++;
        }
      });
      if (Array.isArray(this.vdata[jawab])) {
        let nilai = 0;
        let salah = 0;
        this.vdata[jawab].forEach(e => {
          if (e.benar == "false") {
            salah = salah + 1;
          } else if (e.benar == "true") {
            nilai = nilai + 1;
          }
        });
        if (salah > 0) {
          score = -1;
          this.salah = this.salah + 1;
        } else {
          score = nilai / bagi;
        }
        // checkbox
      } else {
        // radio
        if (this.vdata[jawab].benar == "true") {
          score = 1 / bagi;
        } else {
          this.salah = this.salah + 1;
        }
      }
      this.soal[index].benar = this.benar + score;
      console.log(this.soal);
      console.log("score akhir", score);
      setTimeout(() => {
        this.$forceUpdate();
      }, 500);
    }
  },
  filters: {
    huruf(e) {
      let hasil = "";
      if (e == "0") {
        hasil = "A";
      } else if (e == "1") {
        hasil = "B";
      } else if (e == "2") {
        hasil = "C";
      } else if (e == "3") {
        hasil = "D";
      } else if (e == "4") {
        hasil = "E";
      }
      return hasil;
    },
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: function() {
      return {
        inner: "asd"
      };
    },
    meta: [{ name: "description", content: "My description", id: "desc" }]
  }
};
</script>