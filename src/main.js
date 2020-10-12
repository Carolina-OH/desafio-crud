import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAO5lsMHtiuQB1YeCm6xk3zScED7T5UqHI",
  authDomain: "vue-firebase-authentification.firebaseapp.com",
  databaseURL: "https://vue-firebase-authentification.firebaseio.com",
  projectId: "vue-firebase-authentification",
  storageBucket: "vue-firebase-authentification.appspot.com",
  messagingSenderId: "598666861168",
  appId: "1:598666861168:web:17fc57747b954657acf2b5",
  measurementId: "G-7J00VGCKZ2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(){
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})


