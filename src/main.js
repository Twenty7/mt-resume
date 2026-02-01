import { createApp } from 'vue';
import './main.scss';
import App from './App.vue';
import router from './router';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBars,
  faPhone,
  faEnvelope,
  faTimes,
  faCircle,
  faChevronRight,
  faHouse,
  faGlobe,
  faPrint,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faBars,
  faPhone,
  faEnvelope,
  faTimes,
  faCircle,
  faChevronRight,
  faHouse,
  faGlobe,
  faPrint,
  faCheckCircle,
);
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(
  faLinkedin
);

const app = createApp(App);

// Global Helpers
const getImageUrl = function(image) {
  return new URL('/images/' + image, import.meta.url).href
}
app.config.globalProperties.$getImageUrl = getImageUrl;

// Global Components
// import GlobalSomething from './components/GlobalSomething.vue';
// app.component('GlobalSomething', GlobalSomething);

app.use(router);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
