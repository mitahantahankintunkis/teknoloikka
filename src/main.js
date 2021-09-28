import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone,  faCommentAlt, faChevronDown } from "@fortawesome/free-solid-svg-icons";


library.add(faPhone);
library.add(faCommentAlt);
library.add(faChevronDown);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')