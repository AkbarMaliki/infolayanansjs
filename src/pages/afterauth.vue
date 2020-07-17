<template>
  <div>
    after auth
    {{$store.state.users}}
    <button type="button" @click="test" class="btn btn-sm btn-primary  ">send data to react native</button>
  </div>
</template>
<script>
import axios from 'axios'
import firebase from 'firebase'
let db = firebase.firestore()
// let rdb = firebase.database()
// import autophp from '../plugins/autophp';
// let sdb = new autophp();
export default{
  data(){
    return{

    }
  },
  methods:{
      test(){
          alert('y')
          window.postMessage("Sending data from WebView");
      }

  },
  mounted() {
    
  },
}
</script>