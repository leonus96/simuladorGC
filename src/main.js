import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import './styles.scss'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD6WOuieDzcNIDL8XfmB2FrZSdFYL2XvKk",
  authDomain: "simuladorgc.firebaseapp.com",
  databaseURL: "https://simuladorgc.firebaseio.com",
  projectId: "simuladorgc",
  storageBucket: "simuladorgc.appspot.com",
  messagingSenderId: "491152791621"
};
firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
