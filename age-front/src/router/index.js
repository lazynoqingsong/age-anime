import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/anime/Home.vue'
import Catalog from '@/views/anime/Catalog.vue'
import Ranking from '@/views/anime/Ranking.vue'
import Weekly from '@/views/anime/Weekly.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/catalog', name: 'catalog', component: Catalog },
        { path: '/ranking', name: 'ranking', component: Ranking },
        { path: '/weekly', name: 'weekly', component: Weekly },
    ]

})

export default router