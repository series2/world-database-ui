import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Axios from './views/Axios.vue'
import Login from './views/Login.vue'
import City from './views/City.vue'
import Country from './views/Country.vue'
import Search from './views/Search.vue'

import axios from 'axios'
import TokyoTest from './views/Tokyo.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    // ページを追加したいときはここにオブジェクトを追加
    // ここでのpath:はurl
    // name:は特に意味なし。devtoolなどで見やすくなる
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        isPublic: true,
      },
    },
    {
      path: '/axios',
      name: 'axios',
      component: Axios,
      meta: {
        isPublic: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        isPublic: true,
      },
    },
    {
      path: '/city/:cityName',
      name: 'City',
      component: City,
      // 以下のmetaはtest のちにけす
      // meta: {
      // isPublic: true,
      // },
    },

    {
      path: '/search',
      name: 'Search',
      component: Search,
      // 以下のmetaはtest のちにけす
      // meta: {
      // isPublic: true,
      // },
    },
    {
      path: '/country/:countryName',
      name: 'Country',
      component: Country,
      // 以下のmetaはtest のちにけす
      // meta: {
      // isPublic: true,
      // },
    },

    {
      path: '/Tokyotest',
      name: 'Tokyotest',
      component: TokyoTest,
      meta: {
        isPublic: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      // import(/* webpackChunkName: "about" */ './views/About.vue'),
      // 上２行は必要なので後で//をけす
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  try {
    await axios.get('/api/whoami')
  } catch (_) {
    if (to.meta.isPublic) {
      return next(true)
    }
    return next('/login')
  }
  next(true)
})

export default router
