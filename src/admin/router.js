import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import header from './components/header'
import about from "./pages/about";
import login from "./pages/login";

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
  }
];

const baseURL = "https://webdev-api.loftschool.com";
const loginPage = axios.create({ baseURL });

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
   const isPublicRoute = to.path === '/login'
 
   if (isPublicRoute === false) {
     const token = localStorage.getItem('token');
     loginPage.defaults.headers['Authorization'] = `Bearer ${token}`;
 
     try {
       await loginPage.get('/user');
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
