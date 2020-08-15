import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/join',
    name: 'Join',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "join" */ '../views/Join.vue'),
  },
  {
    path: '/debug',
    name: 'Debug',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "debug" */ '../views/Debug.vue'),
  },
  {
    path: '/room',
    name: '/room',
    component: () => import(/* webpackChunkName: "room" */ '../views/Room.vue'),
    children: [
      {
        path: 'queue',
        component: () => import(/* webpackChunkName: "room" */ '../components/Queue.vue'),
      },
      {
        path: 'request',
        component: () => import(/* webpackChunkName: "room" */ '../components/RequestSongs.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
