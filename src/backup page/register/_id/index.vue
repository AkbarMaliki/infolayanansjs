<template>
    <div>
        <Loadingku v-if="loading" />
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12" style="margin-top:30px;">
                    Email Anda Sudah di verifikasi 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default{
	data(){
		return{
			loading:false
		}
	},
	mounted(){
		let that = this;
		let paramsId = this.$route.params.id;
		paramsId = paramsId.split('&')[0];
		axios.post('/api/auth/verification',{
			data:{ id : paramsId }
		}).then(res=>{console.log(res.data)})
		setTimeout(()=>{
			that.loading = true;
			setTimeout(()=>{
				that.loading = false;
				that.$store.commit('auth/cleanData');
				this.$auth.loginWith('local',{
					data:{
						...this.$auth.user,
						oAuth:true
					}
				})
				that.$router.push('/login');
			},5000)
		},1000)
	}
}
</script>
