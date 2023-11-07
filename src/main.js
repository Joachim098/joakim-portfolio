import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnHcJvsz8wFzpdg4-uLzly1VjE1m0sLeA",
  authDomain: "ajportfolio-5aef1.firebaseapp.com",
  projectId: "ajportfolio-5aef1",
  storageBucket: "ajportfolio-5aef1.appspot.com",
  messagingSenderId: "937541714577",
  appId: "1:937541714577:web:852d58a51bd258135ff530",
  measurementId: "G-DKE11MX0ET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
