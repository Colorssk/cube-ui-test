
import Vue from 'vue'
import router from './router'


import store from './vuex/store'
import Login from './components/login/login'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './router/routes'
// By default we import all the components.
// Only reserve the components on demand and remove the rest.
// Style is always required.
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button,
  Loading,
  Tip,
  Popup,
  Toast,
  Picker,
  Scroll,
  Slide,
  createAPI
} from 'cube-ui'
import App from './App'
import SubscribeDialog from './components/subscribe-dialog/subscribe-dialog'

import VideoPlayer from 'vue-video-player'
import 'videojs-contrib-hls'


require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
//require('videojs-contrib-hls/dist/videojs-contrib-hls')

createAPI(Vue, SubscribeDialog, [], true)




Vue.use(Button)
Vue.use(Loading)
Vue.use(Popup)
Vue.use(Toast)
Vue.use(Picker)
Vue.use(Scroll)
Vue.use(Slide)
Vue.use(VideoPlayer)

Vue.config.productionTip = false


Vue.use(VueResource)
Vue.use(VueRouter)

const rout = new VueRouter({
	routes
})
 // 全局导航钩子
 rout.beforeEach((to, from, next) => {
 	
 	if (to.meta.requireAuth) {

 		// console.log(isEmptyObject(store.state.user)) 
 		if(!isEmptyObject(store.state.user)) {   
 			next();
 		}
 		else { 
 			next({
 				path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
 		}
 	}
 	else {
 		next();
 	}
 })


 function isEmptyObject(obj) {
 	for (var key in obj) {
 		return false;
 	}
 	return true;
 }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  rout,
  store,
  render: h => h(App)
})