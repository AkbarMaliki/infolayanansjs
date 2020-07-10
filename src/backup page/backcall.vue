<template>
  <div>Loading ...
    <!-- backcall activeted -->
    <!-- {{bearer}} -->
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      bearer: ''
    }
  },
  mounted() {
    this.bearer = this.$route.query.xxx
    localStorage.setItem('auth._token.local', this.$route.query.xxx)
    localStorage.setItem('auth.local', this.$route.query.xxx)
    axios
      .get(this.$store.state.url + '/api/auth/user', {
        headers: {
          Authorization: this.bearer
        }
      })
      .then(res => {
        console.log(res.data)
        this.$store.commit('changeUser', res.data.user)
        console.log(this.$store.state.user)
        setTimeout(() => {
          this.$router.push('/')
        }, 500)
      })
  }
}
</script>