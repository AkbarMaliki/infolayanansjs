<template>
  <div style="font-family:times new roman;">
    <hr />
    <div class="text-center">
      <div class="alert alert-danger" v-if="error" role="alert">Username atau password salah</div>
    </div>
    <div class="alert alert-danger" role="alert" v-if="$auth.$state.redirect">
      You have to login before accessing to
      <strong>{{ $auth.$state.redirect }}</strong>
    </div>
    <hr class="style13" />
    <br />
    <div class="container flex flex-wrap mx-auto px-4">
      <div class="w-full sm:w-1/2 p-3 shadow-md">
        <form @keydown.enter="login">
          <div class="sm-form">
            <label for="username">Your username</label>
            <input
              type="text"
              id="username"
              name="username"
              class="form-control form-control-sm"
              placeholder="username"
              v-model="username"
            />
          </div>
          <div class="sm-form">
            <label for="password">Your password</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control form-control-sm"
              placeholder="password"
              v-model="password"
            />
          </div>
          <br />
          <hr />
          <div class="text-center">
            <button type="button" @click="login" class="btn btn-sm btn-primary">Login</button>
          </div>
        </form>
        <p class="text-center">
          Belum punya akun ?
          <router-link to="/register">Register</router-link>
        </p>
      </div>
      <div class="w-full sm:w-1/2 p-3 shadow-md">
        <login-strategy />
      </div>
    </div>
    <br />
    <hr class="style13" />

    <br />
    <div class="text-center">
      <h1 style="font-family:times new roman;font-size:14px;">HuluStore Toko online Login</h1>
    </div>
  </div>
</template>

<script>
var md5 = require("md5");
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "123",
      error: null
    };
  },
  components: {
    LoginStrategy: () => import("@/components/backup/auth/LoginStrategy.vue")
  },
  methods: {
    loginFail1x() {
      setTimeout(() => {
        if (!this.$auth.loggedIn) {
          setTimeout(() => {
            this.$auth
              .loginWith("local", {
                data: {
                  username: "askdjbaskdlbaskdjlbas",
                  password: "askdjbaskdlbaskdjlbas"
                }
              })
              .catch(e => {});
          }, 0);
        }
      }, 0);
    },
    async login() {
      this.error = null;
      let that = this;
      let now = new Date();
      localStorage.setItem("expireDate", new Date(now.getTime() + 3600 * 1000));
      let password = md5(this.password);
      console.log(password);
      return this.$auth
        .loginWith("local", {
          data: {
            username: this.username,
            password: password
          }
        })
        .then(res => {
          setTimeout(() => {
            that.$store.dispatch("refreshData");
            that.$store.dispatch("refreshUser");
          }, 500);
        })
        .catch(e => {
          this.error = e + "";
        });
    }
  },
  mounted() {
    this.loginFail1x();
  },
  head() {
    return {
      title: "Lightcode Login ",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Login/masuk ke Lightcode ..."
        },
        {
          name: "keywords",
          content: `login`
        }
      ]
    };
  }
};
</script>
