<template>
    <div>
    <div class="bg-white" style="height:100vh;">
        <div class="rounded-br-lg"
         style="background: rgb(21,29,115);
                background: linear-gradient(9deg, rgba(21,29,115,1) 0%, rgba(115,190,226,1) 100%);">
                 
            <div class="p-3 text-center text-white font-times">
                    <p>DIKETAHUI</p>
            </div>
        </div>
    <div class="bg-white p-2 mt-2  shadow-inner" style="margin-top:-50px;" >
        <VueSignaturePad width="100%" height="500px" ref="signaturePad" style="border:1px solid black;" />
        <br>
        <div class="row">
            <div class="col-6 text-center">
                <button class="btn btn-sm btn-danger" @click="undo">Undo</button>
            </div>
            <div class="col-6 text-center">
                <button class="btn btn-sm btn-primary" @click="save">Save</button>
            </div>
            <div class="col-12 text-center">
                <button class="btn btn-sm btn-warning" @click="$router.push('/driver')">Skip</button>
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
  layout:'driver',
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
      if(this.$route.query.type=='driver'){
          let fd = new FormData()
          fd.append('data', `update driver_perjalanan set ttd='${data}' where id='${this.$route.query.id}'`)
          fd.append('database', ' infolay3_test')
          axios.post('https://infolayanans.space/api/mysql/auto.php', fd
          , {
              headers: {
              Authorization: localStorage.getItem('auth._token.local')
              }
          }).then(res => {
              console.log(res)
              alert('Permintaan sedang diproses mohon tunggu!');
              this.$router.push('/driver/req-driver')
              this.$forceUpdate()
          }).catch(err=>{
              this.$router.push('/driver/req-driver')
          })
      }else{
          let fd = new FormData()
          fd.append('data', `update driver_lembur set ttd='${data}' where id='${this.$route.query.id}'`)
          fd.append('database', ' infolay3_test')
          axios.post('https://infolayanans.space/api/mysql/auto.php', fd
          , {
              headers: {
              Authorization: localStorage.getItem('auth._token.local')
              }
          }).then(res => {
              console.log(res)
              alert('Permintaan sedang diproses mohon tunggu!');
              this.$router.push('/driver/lembur/req-lembur')
              this.$forceUpdate()
          }).catch(err=>{
              this.$router.push('/driver/lembur/req-lembur')
          })
      }
    }
  }
};
</script>