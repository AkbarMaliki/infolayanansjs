<template>
  <div>
    <button type="button" @click="inserts()" class="btn btn-sm btn-primary">INSERT</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  methods: {
    inserts(){
      let i =0;
      let text = ""
      for(i=57;i<200;i++){
        text = text + `('${i}'),`
      }
      console.log(text)
    }
  },
}
</script>