import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faRedo, faUserCircle, faCommentAlt, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { app as firebaseApp, db } from './firestore.js';


library.add(faPhone);
library.add(faCommentAlt);
library.add(faChevronDown);
library.add(faUserCircle);
library.add(faRedo);

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .provide('db', db)
    .mount('#app');

//app.config.globalProperties.$db = db;
//app.provide