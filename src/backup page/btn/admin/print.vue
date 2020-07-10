<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10 shadow-lg">
          <br />
          <router-link
            class="font-bold font-times uppercase text-blue btn btn-sm btn-outline-primary"
            to="/btn/admin"
          >Back</router-link>
          <div class="text-center">
            <img
              src="@/static/icon/btn.png"
              class="kinoLightBox img-fluid rounded-top z-depth-1"
              style="border-radius: 20px;margin:auto;"
              alt="top"
            />
            <br />
            <hr class="style13" />
            <br />
            <br />
            <br />
            <div class="sm-form">
              <label for="tahun">tahun</label>
              <input
                type="text"
                id="tahun"
                name="tahun"
                class="form-control form-control-sm"
                placeholder="tahun"
                v-model="tahun"
              />
            </div>
            <p class="text-center font-bold font-times uppercase">{{posisi}}</p>
            <div v-if="chart">
              <div class="Chart">
                <reactive-prop-example :chart-data="dataPoints" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Bar from "@/components/Chart/Bar";
export default {
  components: {
    Bar
  },
  data() {
    return {
      tahun: "2019",
      sp: [],
      p: [],
      cp: [],
      tp: [],
      chart: false,
      dataPoints: null,
      datanya: {},
      name: "",
      posisi: "",
      nilai: [10, 20, 30, 40, 50, 60, 70, 80, 90, 21, 30, 21]
    };
  },
  computed: {
    tahuns() {
      let data = this.tahun;
      this.fillData();
      this.$forceUpdate();
      return this.tahun;
    }
  },
  methods: {
    getData() {
      let fd = new FormData();
      fd.append(
        "data",
        `select * from tbpenilaian where posisi='${this.$route.query.posisi}'`
      );
      fd.append("database", " infolay3_test");
      axios.post("https://infolayanans.space/api/mysql/auto.php", fd).then(res => {
        console.log(res);
        this.datanya = res.data;
        let data = res.data;
        this.posisi = this.datanya[0].posisi;
        let sp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let cp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let tp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        let januari = [];
        let bulan = [
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
        ];
        for (let i = 0; i < 12; i++) {
          januari = data.filter((e, index, t) => {
            console.log(e.penilaian);
            if (e.created_at.indexOf(this.tahuns) != -1) {
              if (e.created_at.indexOf(bulan[i]) != -1) {
                if (e.penilaian == "SANGAT PUAS") {
                  sp[i] = sp[i] + 1;
                } else if (e.penilaian == "PUAS") {
                  p[i] = p[i] + 1;
                } else if (e.penilaian == "CUKUP PUAS") {
                  cp[i] = cp[i] + 1;
                } else {
                  tp[i] = tp[i] + 1;
                }
              }
            }
          });
        }
        this.sp = tp;
        this.p = cp;
        this.cp = p;
        this.tp = sp;
        this.nilai = [30, 40, 20, 10, 50, 60, 30, 40, 20, 30, 10, 40];
      });
    },
    fillData() {
      let that = this;
      this.dataPoints = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Tidak Puas",
            backgroundColor: "red",
            data: this.sp
          },
          {
            label: "Cukup Puas",
            backgroundColor: "orange",
            data: this.p
          },
          {
            label: "Puas",
            backgroundColor: "blue",
            data: this.cp
          },
          {
            label: "Sangat Puas",
            backgroundColor: "green",
            data: this.tp
          }
        ]
      };
    }
  },
  mounted() {
    this.getData();
    setTimeout(() => {
      this.chart = true;
      console.log(this.datanya[0].posisi);
    }, 2000);
    setInterval(() => {
      this.getData();
    }, 2000);
  }
};
</script>
