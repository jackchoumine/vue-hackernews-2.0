/*
 * @Description: 
 * @Date: 2020-08-11 01:26:13 +0800
 * @Author: JackChouMine
 * @LastEditTime: 2020-08-11 02:31:38 +0800
 * @LastEditors: JackChouMine
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
// NOTE 异步加载路由报错：Parsing error: Unexpected token import
// https://stackoverflow.com/questions/47815775/dynamic-imports-for-code-splitting-cause-eslint-parsing-error-import
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const ItemView = () => import('../views/ItemView.vue')
const UserView = () => import('../views/UserView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/top/:page(\\d+)?', component: createListView('top') },
      { path: '/new/:page(\\d+)?', component: createListView('new') },
      { path: '/show/:page(\\d+)?', component: createListView('show') },
      { path: '/ask/:page(\\d+)?', component: createListView('ask') },
      { path: '/job/:page(\\d+)?', component: createListView('job') },
      { path: '/item/:id(\\d+)', component: ItemView },
      { path: '/user/:id', component: UserView },
      { path: '/', redirect: '/top' }
    ]
  })
}
