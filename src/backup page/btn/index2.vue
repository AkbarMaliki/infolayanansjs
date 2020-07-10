<template>
  <div>
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-10 shadow-lg">
        <div class="text-left"></div>
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
        </div>
      </div>
    </div>
    <!-- ==================== -->
    <div class="row">
      <div class="col-sm-1"></div>
      <div class="col-sm-10 shadow-lg">
        <br />
        <br />
        <div style="font-size:30px;" class="text-center font-times font-bold">
          MOHON PENILAIAN ANDA
          <br />TERHADAP PELAYANAN KAMI
          <br />
          <br />
        </div>

        <div class="row">
          <div class="col-sm-4 cursor-pointer" @click="$router.push('/btn/cs')">
            <div
              class="text-center biggers shadow-lg p-3 rounded-lg font-bold font-times text-black"
              style="font-size:29px;box-shadow: 1px 1px 4px 1px black;"
            >
              CUSTOMER SERVICE
              <br />
              <img
                src="@/static/picture/cs.png"
                class="anim animated biggerss fadeIn"
                style="margin:auto;height:140px;"
                alt
              />
            </div>
          </div>
          <div class="col-sm-4 cursor-pointer" @click="$router.push('/btn/teller')">
            <div
              class="text-center biggers bg-blue-light shadow-lg p-3 rounded-lg font-bold font-times text-black"
              style="font-size:29px;box-shadow: 1px 1px 4px 1px black;"
            >
              TELLER
              <br />
              <img
                src="@/static/picture/teller.png"
                class="anim animated biggerss fadeIn"
                style="margin:auto;height:140px;"
                alt
              />
            </div>
          </div>
          <div class="col-sm-4 cursor-pointer" @click="$router.push('/btn/')">
            <div
              class="text-center biggers bg-red-light shadow-lg p-3 rounded-lg font-bold font-times text-black"
              style="font-size:29px;box-shadow: 1px 1px 4px 1px black;"
            >
              SECURITY
              <br />
              <img
                src="@/static/picture/satpam.png"
                class="anim animated biggerss fadeIn"
                style="margin:auto;height:140px;"
                alt
              />
            </div>
          </div>
        </div>
        <div class="col-sm-12">
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
    <div class="container-fluid" style="position:fixed;bottom:0px;">
      <div class="row">
        <div class="col-sm-1"></div>
        <div class="col-sm-10">
          <div style="height:50px;width:100%;" class="bg-blue text-center rounded-top-lg">
            <p
              class="text-white font-bold pt-2 font-times"
            >SELAMAT DATANG DI BANK BTN KANTOR CABANG BANJARBARU</p>
          </div>
        </div>
        <div class="col-sm-1"></div>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      pilihan: []
    };
  },
  methods: {
    pilih(data) {
      alert("data");
      console.log(data);
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
