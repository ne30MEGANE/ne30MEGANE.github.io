import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'

import Home from '@/views/Home.vue'
import Otofuda from '@/views/Otofuda.vue'
import Mugimusha from '@/views/Mugimusha.vue'
import EDPSweb from '@/views/EDPSweb.vue'
import RoomEscape from '@/views/RoomEscape.vue'
import SimpleTyping from '@/views/SimpleTyping.vue'
import HobbyShop from '@/views/HobbyShop.vue'
import ESSC from '@/views/EnstSC.vue'
import ED from '@/views/EDediter.vue'
import Sunflower from '@/views/Sunflower.vue'
import GlassesFrame from '@/views/GlassesFrame.vue'
import Mokomei from '@/views/Mokomei.vue'
import PerfectUnderstand from '@/views/PerfectUnderstand.vue'

Vue.use(VueHead)
Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    { path: '/', component: Home },
    { path: '/otofuda', component: Otofuda },
    { path: '/mugimusya', component: Mugimusha },
    { path: '/edpsweb', component: EDPSweb },
    { path: '/roomescape', component: RoomEscape },
    { path: '/simpletyping', component: SimpleTyping },
    { path: '/hobbyshop', component: HobbyShop },
    { path: '/enstsc', component: ESSC },
    { path: '/edediter', component: ED },
    { path: '/sunflower', component: Sunflower },
    { path: '/glassesframe', component: GlassesFrame },
    { path: '/mokomei', component: Mokomei },
    { path: '/perfectunderstand', component:PerfectUnderstand },
    { path: '/MMCatch', component: MMCatch }
  ]
})

export default router