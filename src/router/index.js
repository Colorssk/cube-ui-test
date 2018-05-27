import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const login = (resolve) => {

import('components/login/login').then((module) => {
    resolve(module)
  })
}

const Main = (resolve) => {

import('components/Main/Main').then((module) => {
    resolve(module)
  })
}


const App = (resolve) => {

import('../App').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
   
    {
    		path: '/', 
    		redirect: '/App'
    },
    {
	      path: '/App',
	      component: App
    },
    {
        path: '/login',
        component: login
    },
	{
		path: '/Main', 
		meta: {
			//meta元素
			 requireAuth: true,  
			},           
			component: Main,

	}
  ]
})
