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

            <p class="text-center font-bold font-times uppercase">{{ posisi }}</p>
            <div v-if="chart">
              <div class="Chart">
                <Doughnut :chart-data="dataPoints" />
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>
<script>
import axios from "axios";
import Doughnut from "@/components/Chart/Doughnut";
export default {
  components: {
    Doughnut
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
      nilai: [10, 20, 30, 40, 50, 60, 70, 80, 90, 21, 30, 21],
      dataPoints: {
        labels: ["CUSTOMER SERVICES", "TELLER", "LOAN SERVICE", "SECURITY"],
        datasets: [
          {
            backgroundColor: ["#41B883", "orange", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80]
          }
        ]
      }
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
        `select * from tbpenilaian where penilaian='${this.$route.query.penilaian}' AND posisi='CUSTOMER SERVICE' limit ${this.$route.query.limit}`
      );
      axios.post("https://infolayanans.space/api/mysql/auto.php", fd).then(res => {
        this.dataPoints.datasets[0].data[0] = res.data.length;
      });
      let fd2 = new FormData();
      fd2.append(
        "data",
        `select * from tbpenilaian where penilaian='${this.$route.query.penilaian}' AND posisi='LOAN SERVICE' limit ${this.$route.query.limit}`
      );
      axios.post("https://infolayanans.space/api/mysql/auto.php", fd2).then(res => {
        this.dataPoints.datasets[0].data[1] = res.data.length;
      });
      let fd3 = new FormData();
      fd3.append(
        "data",
        `select * from tbpenilaian where penilaian='${this.$route.query.penilaian}' AND posisi='TELLER' limit ${this.$route.query.limit}`
      );
      axios.post("https://infolayanans.space/api/mysql/auto.php", fd3).then(res => {
        this.dataPoints.datasets[0].data[2] = res.data.length;
      });
      let fd4 = new FormData();
      fd4.append(
        "data",
        `select * from tbpenilaian where penilaian='${this.$route.query.penilaian}' AND posisi='SECURITY' limit ${this.$route.query.limit}`
      );
      axios.post("https://infolayanans.space/api/mysql/auto.php", fd4).then(res => {
        this.dataPoints.datasets[0].data[3] = res.data.length;
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
            label: "Sangat Puas",
            backgroundColor: "green",
            data: this.sp
          },
          {
            label: "Puas",
            backgroundColor: "blue",
            data: this.p
          },
          {
            label: "Cukup Puas",
            backgroundColor: "orange",
            data: this.cp
          },
          {
            label: "Tidak Puas",
            backgroundColor: "red",
            data: this.tp
          }
        ]
      };
    }
  },
  mounted() {
    console.log(this.$route.query.tahun);
    console.log(this.$route.query.bulan);
    this.getData();
    setTimeout(() => {
      this.chart = true;
    }, 2000);
    // setInterval(() => {
    //   this.getData();
    //   console.log("==================================");
    // }, 4000);
  }
};
</script>
