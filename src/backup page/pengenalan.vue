<template>
    <div class="animated fadeInLeftBig">
      <div class="bg-blue-light rounded-b-lg" style="height:20px;"></div>
      <p class="text-center font-bold font-times text-2xl">NOTE!</p>
      <p class="font-times p-1 text-xl">Lock aplikasi agar mendapatkan notifikasi dari server! Optional</p>
      <div style="height:100vh;">
        <img
          src="@/static/gif/lock.png"
          alt
          style="height:80vh;width:100vw;"
        />
<button type="button" style="width:100%;z-index:100;" class="btn btn-sm btn-warning shadow-mg rounded-t-lg" @click="$router.push('/driver')">Lanjutkan <span class="typcn typcn-arrow-right"></span></button>
      </div>
      
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
    components:{
        Carousel,Slide
    },
    mounted() {
        setTimeout(() => {
        this.$router.push('/driver/')
        }, 1000);
    },
    methods: {
        carouselNav($event, direction) {
            // const ref = $event.target.closest('[data-ref]').dataset.ref;
            // const carousel = this.$refs[ref];
            // console.dir(carousel)
            console.dir(this.$el.querySelector('#tes').advancePage)

            // carousel.advancePage(direction);
        }
    },
}
</script>