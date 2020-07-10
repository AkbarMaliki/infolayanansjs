<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10 shadow-lg">
          <div class="text-left">
            <router-link class="font-bold font-times uppercase text-blue" to="/btn">Back</router-link>
          </div>
          <div class="text-center">
            <img
              src="@/static/icon/btn.png"
              class="kinoLightBox img-fluid rounded-top z-depth-1"
              style="border-radius: 20px;margin:auto;"
              alt="top"
            />
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10 shadow-lg">
          <div class="offset-sm-3 col-sm-6">
            <br />
            <br />
            <br />
            <p class="text-center font-times font-bold" style="font-size:23px;">LOGIN</p>
            <br />
            <p
              v-if="err"
              class="text-center text-red font-bold font-times"
            >USERNAME DAN PASSWORD SALAH</p>
            <form action @submit.prevent="logins" class="font-times">
              <div class="sm-form">
                <label for="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  class="form-control form-control-sm"
                  placeholder="username"
                  v-model="vdata.username"
                />
              </div>
              <div class="sm-form">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control form-control-sm"
                  placeholder="password"
                  v-model="vdata.password"
                />
              </div>
              <br />
              <br />
              <hr class="style10" />
              <br />

              <button class="btn btn-sm btn-outline-primary btn-block">LOGIN</button>
            </form>
            <br />
            <br />
            <br />
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
var id = require("date-fns/locale/id");
export default {
  data() {
    return {
      vdata: {},
      err: false
    };
  },
  methods: {
    logins() {
      if (this.vdata.username == "admin" && this.vdata.password == "adminbtn") {
        localStorage.setItem("logindata", "39012830ja09jsjd");
        this.$router.push("/btn/admin");
      } else {
        this.err = true;
      }
    }
  },
  mounted() {
    if (localStorage.getItem("logindata").length > 0) {
      this.$router.push("/btn/admin");
    }
  }
};
</script>
<style scoped>
.biggers {
  transition: all 0.2s ease-in 0s;
}
.biggers:hover {
  transition: all 0.2s ease-in 0s;
  transform: scale(1.1);
}
.biggerss {
  transition: all 0.2s ease-in 0s;
}
.biggerss:hover {
  transition: all 0.2s ease-in 0s;
  transform: scale(1.3);
}
</style>
