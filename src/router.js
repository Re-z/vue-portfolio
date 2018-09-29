import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import PortfolioOne from './views/PortfolioOne.vue'
import PortfolioTwo from './views/PortfolioTwo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
          path: '/portfolio/one',
          name: 'PortfolioOne',
          component: PortfolioOne
      },
      {
          path: '/portfolio/two',
          name: 'PortfolioTwo',
          component: PortfolioTwo
      },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
    mode: 'history'
})
