import Vue from 'vue'
import Router from 'vue-router'
// 页面
import Layout from '@/components/layout'
// 启动页
import Boot from '@/components/boot'
// 引导页
import Guide from '@/components/guide'
// 登录注册页面
import Login from '@/pages/login'
// 页面底部路由页面
import Sport from '@/pages/sport/sport'
import Course from '@/pages/course/course'
import Mine from '@/pages/mine/mine'
import Share from '@/pages/share/share'
// 运动 
import SportTz from '@/pages/sport/sportTz'
import SportJl from '@/pages/sport/sportJl'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'boot',
		component: Boot
	}, {
		path: '/guide',
		name: 'guide',
		component: Guide
	}, {
		path: '/login',
		name: 'login',
		component: Login
	}, {
		path: '/layout',
		name: 'layout',
		component: Layout,
		redirect: '/layout/sport',
		children: [{
			path: "sport",
			name: 'sport',
			component: Sport,
		}, {
			path: "share",
			name: 'share',
			component: Share
		}, {
			path: "mine",
			name: 'mine',
			component: Mine,
		}, {
			path: "course",
			name: 'course',
			component: Course
		}]
	}, {
		path: '/layout/sport/sportJl',
		name: 'sportJl',
		component: SportJl
	}, {
		path: '/layout/sport/sportTz',
		name: 'sportTz',
		component: SportTz
	}]
})