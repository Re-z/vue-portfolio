import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Read from './views/Read.vue'
import PictureOne from './views/PictureOne.vue'
import PictureTwo from './views/PictureTwo.vue'
import PictureThree from './views/PictureThree.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
          path: '/picture/one',
          name: 'PictureOne',
          component: PictureOne
      },
      {
          path: '/picture/two',
          name: 'PictureTwo',
          component: PictureTwo
      },
      {
          path: '/picture/three',
          name: 'PictureThree',
          component: PictureThree
      },
    {
      path: '/read',
      name: 'read',
      component: Read
    }
  ],
    mode: 'history'
})
