<template>
  <div>
    <div class="bg-white p-1 mt-1" style="height:800px;">
      <div class="p-3 font-times">
        <p style="font-size:26px;font-weight:bold;">Dashboard</p>
      </div>
      <hr class="style13" />
      <div class="p-3">
        <button
          type="button"
          style="height:100px;font-size:24px;"
          class="btn btn-xl font-times text-black btn-primary font-bold uppercase shadow-lg rounded-lg btn-block"
        >hello there</button>
        <br />
        <button
          type="button"
          style="height:100px;font-size:24px;"
          class="btn btn-xl font-times text-black btn-danger font-bold uppercase shadow-lg rounded-lg btn-block"
        >hello there</button>
        <br />
        <button
          type="button"
          style="height:100px;font-size:24px;"
          class="btn btn-xl font-times text-black btn-warning font-bold uppercase shadow-lg rounded-lg btn-block"
        >hello there</button>
        <br />
        <button
          type="button"
          style="height:100px;font-size:24px;"
          class="btn btn-xl font-times text-black btn-info font-bold uppercase shadow-lg rounded-lg btn-block"
        >hello there</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "app",
  data() {
    return {};
  },
  methods: {
    tests() {
      alert("y");
    }
  }
};
</script>