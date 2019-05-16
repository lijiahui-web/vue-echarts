<template>
	<div class="app-wrapper">
		<div class="main-container">
			<navbar/>
			<app-main/>
		</div>
	</div>
</template>

<script>
import { Navbar, AppMain } from './components'
export default {
	name: 'Layout',
	components: {
		Navbar,
		AppMain
	}
}
</script>
<style lang="scss" scoped>
.main-container{
	background: #192b41;
	min-height: 100vh
}
</style>

