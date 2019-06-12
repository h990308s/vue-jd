<template>
  <div id="app">
    <router-view/>
		<Home></Home>
  </div>
</template>

<script>
	import Home from "./components/Home.vue"
	export default{
		components:{
			Home
		}
	}
</script>

<style lang="scss">
#app {
 
}
</style>
