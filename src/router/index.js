import { createRouter, createWebHistory } from 'vue-router'

import Beranda from '../components/beranda/Beranda'
import CaraKerja from '../components/cara-kerja/CaraKerja'
import Event from '../components/event/Event'

const routes = [{
        path: '/',
        component: Beranda,
    }, {
        path: '/cara-kerja',
        component: CaraKerja,
    }, {
        path: '/event',
        component: Event,
    }];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;