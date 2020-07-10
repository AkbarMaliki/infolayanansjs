<template>
  <div>
    <div class="pl-3 pt-3 font-times">
      <p style="font-size:26px;font-weight:bold;">Login</p>
    </div>
    <hr class="style2" />
    <div class="p-4">
      <form action @submit.prevent="test">
        <div class="sm-form">
          <label for="username" class="font-bold">Username :</label>
          <input
            type="text"
            id="username"
            name="username"
            class="form-control form-control-sm font-times"
            style="height:50px;font-size:21px;"
            placeholder="username"
            v-model="vdata.username"
          />
        </div>
        <div class="sm-form">
          <label for="password" class="font-bold">Password :</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control form-control-sm font-times"
            style="height:50px;font-size:21px;"
            placeholder="password"
            v-model="vdata.password"
          />
        </div>
        <hr class="style2" />
        <div class="text-center">
          <button type="submit" class="btn btn-sm btn-primary" style="width:90px;">LOGIN</button>
        </div>
      </form>
    </div>
    <hr class="style2" />
  </div>
</template>
<script>
export default {
  layout: "app",
  data() {
    return {
      nilai1: 100,
      nama: "taufik akbar maliki",
      vdata: {}
    };
  },
  methods: {
    test() {
      alert("test");
    }
  }
};
</script>