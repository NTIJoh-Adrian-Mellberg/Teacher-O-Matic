import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReposView from '../views/ReposView.vue'



const routes =
[
    { name: 'home', path: '/', component: HomeView},
    { name: 'repos', path: '/repos', component: ReposView},
    { name: 'userRepos', path: '/repos/:userName', component: ReposView}
]

const router =
createRouter(
    {history: createWebHashHistory(), routes: routes}
)

export default router