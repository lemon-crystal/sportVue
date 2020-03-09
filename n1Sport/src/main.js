// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import VueCookie from "vue-cookie"
import qs from "qs"
import {
	Message
} from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.$message = Message
Vue.prototype.$axios = Axios
Vue.prototype.$cookie = VueCookie
Vue.prototype.HOST = "/api"
// 允许携带cookie
Axios.defaults.withCredentials=true
//添加请求头,下载文件的请求需要单独设置！！！！！
// Axios.defaults.headers.common['Authorization'] = '';
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//生产环境的打包的方式
Axios.defaults.baseURL=process.env.NODE_ENV == "production" ? '/' : "api";

// 添加请求拦截器
Axios.interceptors.request.use(function(config) {
	if (config.method == "post") {
		config.data = qs.stringify(config.data)
	}
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(function(response) {
	return response;
}, function(error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});


/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})