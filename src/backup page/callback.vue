<template>
<div >
  <callback />
</div>
</template>
<script>
export default {
	components: {
		callback: () => import('@/components/backup/auth/Callback.vue')
	}
}
</script>