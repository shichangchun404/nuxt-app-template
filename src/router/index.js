import Vue from 'vue'
import Router from 'vue-router'
import base from './modules/base';

Vue.use(Router)

export function createRouter() {
  const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    },
    routes: [
      ...base,
    ]
  })
  return router
}
