<template>
  <div>
  <div class="container-fluid " style="">
    <div class="row">
        <div class="col-sm-12 " style="height:100vh;background:rgba(225, 233, 236, 0.911);">
          <div class="row">
              <div style=" margin: auto;margin-top:20vh;
              background:#FEFEFE;
                " class="rounded-lg shadow-lg border-2 p-3 col-10 col-sm-6">
                <div class="text-center">
              <img src="@/static/media/icon/btn.png" class="kinoLightBox img-fluid  z-depth-1 mx-auto" style="border-radius: 20px;height:60px;">
              <hr class="style7 pt-2 mt-1">
              <br>
                </div>
                  <form action="#" @submit.prevent="logins">
                    <div class="sm-form">
                      <label for="username">User ID</label>
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
                    <hr class="style13" />
                    <br />

                    <button type="submit" class="btn btn-sm bg-blue-darker text-white float-right">Login</button>
                    <br />
                    <br />
                  </form>
              </div>
          </div>

            <br>
            <br>
        </div>
        <div class="col-sm-6">

        </div>
    </div>
</div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      vdata: {}
    }
  },
  methods: {
    logins () {
      if (
        this.vdata.username == 'admin' &&
        this.vdata.password == 'btnkcbanjarbaru'
      ) {
        localStorage.setItem('login', 'true')
        this.$router.push('/tv/edit1')
      } else {
        alert('username dan password salah')
      }
    }
  }
}
</script>
