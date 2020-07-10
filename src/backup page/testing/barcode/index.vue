<template>
    <div>
        <VueQrcode value="https://www.google.com" :options="{ width: 200 }"></VueQrcode>
    </div>
</template>
<script>
import VueQrcode from '@chenfengyuan/vue-qrcode';
export default{
    data(){
        return{}
    },
    components:{
        VueQrcode
    }
}
</script>