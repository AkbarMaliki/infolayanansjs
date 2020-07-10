<template>
  <div style="font-family:times new roman;">
    <hr class="style13" />
    <div class="container-fluid">
      <div class="row">
        <div class="offset-sm-1 col-sm-3 text-center">
          <p style="font-size:20px;">REGISTER</p>
          <br />
          <br />
          <hr />
          <p
            style="color:gray;"
          >Registrasi Hanya bisa dilakukan menggunakan email yang belum terdaftar sebelumnya</p>
          <p style="color:gray;">Sudah memiliki Akun ?</p>
          <hr />
          <nuxt-link to="login" class="btn-block waves-effect">Login</nuxt-link>
          <hr />
        </div>
        <div class="offset-sm-2 col-sm-5">
          <Callback
            v-if="callB"
            style="position: absolute;z-index: 100;background: rgba(226, 226, 226, 0.281);"
          />
          <div v-if="error" :class="['alert','alert-danger']" role="alert">{{ error }}</div>
          <!-- gunakan ?_method=PUT/DELETE di akhir action untuk mengoverride METHOD HTML FORM -->
          <form id="form-id" action="#" @submit.prevent="register">
            <!-- inputan -->
            <div class="sm-form">
              <label class="label1" for="email">Your email</label>
              <input
                id="email"
                :class="['form-control form-control-sm',{emailCls:emailErr}]"
                type="email"
                name="email"
                v-model="vdata.email"
                placeholder="email"
                @click="resetEmail"
              />
            </div>
            <div class="sm-form">
              <label class="label1" for="username">Your username</label>
              <input
                id="username"
                :class="['form-control form-control-sm',{emailCls:usernameErr}]"
                type="username"
                name="username"
                v-model="vdata.username"
                placeholder="username"
                @click="resetUsername"
              />
            </div>
            <div class="sm-form">
              <label class="label1" for="password">Your password</label>
              <input
                id="password"
                :class="['form-control form-control-sm']"
                v-model="vdata.password"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
            <div class="sm-form">
              <label class="label1" for="password2">Your password</label>
              <input
                id="password2"
                :class="['form-control form-control-sm']"
                v-model="vdata.password2"
                type="password"
                name="password2"
                placeholder="password"
              />
            </div>
            <p
              v-if="vdata.password!=vdata.password2"
              style="color:red;font-family:times new roman;font-size:18px;"
            >Password Tidak Sama</p>
            <!-- end inputan -->
            <hr />
            <div class="sm-form">
              <input
                id="submiter"
                type="submit"
                name="REGISTER"
                value="REGISTER"
                class="form-control"
                placeholder="REGISTER"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <hr class="style13" />
    <br />
    <div class="text-center">
      <h1 style="font-family:times new roman;font-size:14px;">HuluStore Toko online Registrasi</h1>
    </div>
  </div>
</template>
<script>
var md5 = require("md5");

import axios from "axios";
// import '../../assets/hr.css'
import Callback from "@/components/backup/auth/Callback.vue";
export default {
  mixins: [], //! men set data default dengan source yang bisa di import
  data() {
    //! set data
    return {
      vdata: {},
      callB: false,
      emailErr: false,
      usernameErr: false,
      error: null
    };
  },
  component: {
    Callback
  },
  methods: {
    //! custom method/function, membuat function yang bisa diakses di dom
    register() {
      let vm = this;
      axios
        .post(this.$store.state.database + "/api/auth/register", this.vdata)
        .then(res => {
          console.log(res);
          if (res.data.email) {
            this.emailErr = true;
          } else {
            vm.$router.push("/login");
          }
          // this.$router.push("/");
        })
        .catch(e => {
          vm.$router.push("/login");
        });
    },
    resetEmail() {
      this.emailErr = false;
    },
    resetUsername() {
      this.usernameErr = false;
    }
  },
  head() {
    return {
      title: "HuluStore Register/Daftar",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Daftar/Registrasi ke Hulu Store ..."
        }
      ]
    };
  }
};
</script>
