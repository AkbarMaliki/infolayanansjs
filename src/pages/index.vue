<template>
    <div>
        <button type="button" @click="$router.push('/googlelogin')" class="btn btn-sm btn-primary  ">test</button>
        <br>
        <br>
        <br>
        <br>
        <p class="text-center">REST API FRONT JS</p>
    </div>
</template>
<script>
export default {
    methods: {
        test(){
            alert('y')
            window.postMessage("Sending data from WebView");
        }
    },
}
</script>