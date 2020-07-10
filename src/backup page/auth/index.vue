<template>
    <div>
        {{$route.query.auth}}
        <LoginStrategy />
    </div>
</template>
<script>
export default {
	components: {
		LoginStrategy: () => import('@/components/backup/auth/LoginStrategy.vue')
	},
	mounted() {
		setTimeout(() => {
			console.log(this.$el.querySelector(`#${this.$route.query.auth}`).click())
		}, 1000)
	}
}
</script>