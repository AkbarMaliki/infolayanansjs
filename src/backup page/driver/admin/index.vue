<template>
    <div>
        <p class="text-center font-bold p-3">ADMIN</p>
        <div class="p-3">
            <button type="button" @click="$router.push('/driver/admin/user')" class="btn btn-sm btn-primary  btn-block"><span class="typcn typcn-user-add-outline"></span> USER</button>
            <br>
            <button type="button" @click="$router.push('/driver/admin/unit')" class="btn btn-sm btn-primary  btn-block"><span class="typcn typcn-waves-outline"></span> UNIT KERJA</button>
      <br>
            <button type="button" @click="$router.push('/driver/admin/mobil')" class="btn btn-sm btn-primary  btn-block"><span class="typcn typcn-compass"></span> MOBIL</button>
      <br>
            <button type="button" @click="$router.push('/driver/admin/perjalanan')" class="btn btn-sm btn-primary  btn-block"><span class="typcn typcn-document-text"></span> DATA PERJALANAN</button>
      <br>
            <button type="button" @click="$router.push('/driver/admin/lembur')" class="btn btn-sm btn-primary  btn-block"><span class="typcn typcn-dropbox"></span> DATA LEMBUR</button>
            <br>
            <button type="button" @click="$router.push('/driver/admin/no_hp')" class="btn btn-sm btn-primary  btn-block"><span class="typcn typcn-headphones"></span> DATA NO HP</button>
       
        </div>

    </div>
</template>
<script>
export default {
    layout:"admin",
    methods: {
        tes(){
            alert('y')
        }
    },
}
</script>