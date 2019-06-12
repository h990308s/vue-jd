import Vue from 'vue'
import Router from 'vue-router'
// import Home from './components/Home.vue'
import denglu from './components/denglu.vue'
import left from './components/left.vue'
import footer from './components/footer.vue'
import daohang from './components/daohang.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	{
		path: '/',
		component: denglu
	},
	{
		path: '/left',
		component: left
	},
	{
		path: '/footer',
		component: footer
	},
	{
		path: '/daohang',
		component: daohang
	}
  ]
})
