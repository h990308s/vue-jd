<template>
	<div>
		<div class="demo_list">
			<div class="demo_item" @click="toPath('/')" :class="this.$router.path === '/' ? 'cla' : ''">
				<span>首页</span>
			</div>
			<div class="demo_item" @click="toPath('/left')" :class="this.$router.path === '/left' ? 'cla' : ''">
				<span>分类</span>
			</div>
			<div class="demo_item" @click="toPath('/footer')" :class="this.$router.path === '/footer' ? 'cla' : ''">
				<span>购物车</span>
			</div>
			<div class="demo_item" @click="toPath('/daohang')" :class="this.$router.path === '/daohang' ? 'cla' : ''">
				<span>我的</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			toPath(path){
				this.$router.replace(path)
				console.log(this.$router)
			}
		}
	}
</script>

<style scoped lang="css">
	.demo_list{
		width: 100%;
		height: 50px;
		background: palevioletred;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
	}
	.demo_item{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cla{
		color: red;
	}
</style>