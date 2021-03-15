import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'

import Home from '@/views/Home.vue'
import Otofuda from '@/views/Otofuda.vue'
import Mugimusha from '@/views/Mugimusha.vue'

Vue.use(VueHead)
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    { path: '/', component: Home },
    { path: '/otofuda', component: Otofuda },
    { path: '/mugimusya', component: Mugimusha }
  ]
})

export default router