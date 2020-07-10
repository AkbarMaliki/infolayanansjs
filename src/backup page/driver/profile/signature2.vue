<template>
    <div>
    <div class="bg-white" style="height:100vh;">
        <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                 <span class="typcn typcn-arrow-left text-white font-bold absolute ml-2" style="font-size:31px;"
                @click="$router.go(-1)"></span>
            <div class="p-3 text-center text-white font-times">
                    <p>TANDA TANGAN</p>
            </div>
        </div>
    <div class="bg-white p-2 mt-2  shadow-inner" style="margin-top:-50px;" >
        <div class="text-center">
            <img :src="ttd" class="kinoLightBox img-fluid z-depth-1" style="height:200px;">
        </div>
        
        <VueSignaturePad width="100%" height="500px" ref="signaturePad" style="border:1px solid black;" />
        <br>
        <div class="row">
            <div class="col-6 text-center">
                <button class="btn btn-sm btn-danger" @click="undo">Undo</button>
            </div>
            <div class="col-6 text-center">
                <button class="btn btn-sm btn-primary" @click="save">Save</button>
            </div>
        </div>
    </div>        
    </div>        
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'MySignaturePad',
  data(){
      return{
          ttd:""
      }
  },
  methods: {
    undo() {
      this.$refs.signaturePad.undoSignature();
    },
    b64toBlob(b64Data, contentType, sliceSize) {
            contentType = contentType || '';
            sliceSize = sliceSize || 512;

            var byteCharacters = atob(b64Data);
            var byteArrays = [];

            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);

                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }

                var byteArray = new Uint8Array(byteNumbers);

                byteArrays.push(byteArray);
            }

        var blob = new Blob(byteArrays, {type: contentType});
        return blob;
    },
    save() {
      const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
      console.log(isEmpty);
      console.log(data);
        var ImageURL = data;
        var block = ImageURL.split(";");
        var contentType = block[0].split(":")[1];// In this case "image/gif"
        var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
        var blob = this.b64toBlob(realData, contentType);
        console.log(blob)
          this.$nuxt.$emit('busy',true)
          let fd = new FormData()
          fd.append('data', `update tbuser_ttd set ttd='${data}' where id_user='${this.$store.state.users.id}'`)
          fd.append('database', ' infolay3_test')
          axios.post('https://infolayanans.space/api/mysql/auto.php', fd
          , {
              headers: {
              Authorization: localStorage.getItem('auth._token.local')
              }
          }).then(res => {
              console.log(res)
                this.$nuxt.$emit('busy',false)
              alert('simpan ttd berhasil! silahkan login ulang');
              this.$store.dispatch('logout')
              this.$forceUpdate()
          }).catch(err=>{
              this.$store.dispatch('logout')
          })
    }
  },
  mounted() {
      let fd = new FormData()
      fd.append('data', `select * from tbuser_ttd tb1 left join tbuser tb2 on tb2.id=tb1.id_user where tb2.id='${this.$store.state.users.id}'`)
      fd.append('database', ' infolay3_test')
      axios.post('https://infolayanans.space/api/mysql/auto.php', fd
      , {
          headers: {
          Authorization: localStorage.getItem('auth._token.local')
          }
      }).then(res => {
          this.ttd = res.data[0].ttd
          this.$forceUpdate()
      })
  },
};
</script>