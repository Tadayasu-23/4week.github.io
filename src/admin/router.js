import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import header from './components/header'
import about from "./pages/about";
import login from "./pages/login";
import works from "./pages/works";
import reviews from "./pages/reviews";
import axios from "axios";



const routes = [
  {
    path: '/',
    components: {
      default: about,
      header: header
    },
  },
  {
    path: '/login',
    component: login,
    meta: {
      public: true
    }
  },
  {
    path: '/works',
    components: {
      default: works,
      header: header
    },
  },
  {
    path: '/reviews',
    components: {
      default: reviews,
      header: header
    },
  }
];

const baseURL = "https://webdev-api.loftschool.com";
const guard = axios.create({ baseURL });

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
   const isPublicRoute = to.path === '/login'
 
   if (isPublicRoute === false) {
     const token = localStorage.getItem('token');
     guard.defaults.headers['Authorization'] = `Bearer ${token}`;
 
     try {
       await guard.get('/user');
       next(); 
     } catch (error) {
       router.replace('/login');
       localStorage.removeItem('token');
     }
 
   } else {
     next();
   }
});

export default router
