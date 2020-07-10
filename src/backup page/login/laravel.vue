<template>
  <div>
    <Login />
  </div>
</template>
<script>
import Login from "@/components/radio/loginlaravel.vue";
export default {
  data() {
    return {
      test: ""
    };
  },
  components: {
    Login
  }
};
</script>