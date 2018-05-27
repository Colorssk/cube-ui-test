
import Main from '../components/Main/Main'
import Login from '../components/login/login'

export default [
		{
			path: '/login',
			component: Login
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