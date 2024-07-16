import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/LoginView.vue'),
			meta: {
				layout: 'Login'
			},
		},
		{
			path: '/userLorem',
			name: 'userLorem',
			component: () => import('../views/LoremIpsumView.vue'),
			props: true,
			meta: {
				layout: 'User'
			}
		},
		{
			path: '/lorem/:title',
			name: 'lorem',
			component: () => import('../views/LoremIpsumView.vue'),
			props: true,
		}
	]
})

export default router
