import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import firebase from 'firebase'
Vue.use(VueRouter)

const routes = [
  //Ruta comodin que redireccione a login
  {
    path:'*',
    redirect:'/login'
  },
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    //meta sirve para identificar que necesita autentificación
    meta:{
      autenticado:true,
    }
  },
  {
    path:'/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    meta:{
      autenticado:true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

let router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//guardias, comprueba cosas al iterar rutas 
router.beforeEach((to,from,next)=>{
  let user = firebase.auth().currentUser;
  
  let private_rute = to.matched.some((record)=>record.meta.autenticado)

  if(private_rute && !user){
    next({name:'Login'})
  }
  else if(!private_rute && user){
    next('/home')
  }
  else next()
});

export default router
