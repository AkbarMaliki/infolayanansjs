<template>
    <div>
        <br>
        <br>
        <br>
        <br>
        <div class="row">
            <div class="offset-sm-2 col-sm-8">
                    <p class="text-center text-2xl font-bold font-courier">MOHON TUNGGU</p>
                    <hr class="style16">
                    <p class="text-sm font-bold animated bounce infinite text-center">Loading...</p>
                    <p>File anda sedang proses download ... apabila file tidak terdownload klik ini 
                    </p>
                    <div class="text-center">
                         <download-excel
                            :data='td'>
                            <button type='button' id="downloadcsv"  class='btn btn-sm btn-success  '><span class='typcn typcn-chart-bar'></span>Download</button>
                        </download-excel>
                    </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import downloadExcel from 'vue-json-excel'
export default{
    data(){
        return{
            td:[]
        }
    },
     components: {
    downloadExcel
  },
    mounted() {
        this.td=JSON.parse(this.$route.query.data)
        let that=this
        setTimeout(() => {
            that.$el.querySelector('#downloadcsv').click()
        }, 1000);
    },
}
</script>