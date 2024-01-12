// import {createApp} from 'vue'
// import App from './App.vue'
// import {createRouter } from 'vue-router';
// import {ContactUs} from './components/ContactUs';
// // import BootstrapVue from 'bootstrap-vue'
// // import 'bootstrap/dist/css/bootstrap.css'
// // import 'bootstrap-vue/dist/bootstrap-vue.css'

// // Vue.use(BootstrapVue)

// const router = createRouter({
//   // history:createWebHashHistory (),
//   routes:[
//     {path:'/contact-us', component:ContactUs}
//   ]
// })

// const app = createApp(App);
// app.use(router);
// app.mount('#app');
// // Vue.config.productionTip = false

// // new Vue({
// //   render: h => h(App),
// // }).$mount('#app')

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import ContactUs from './components/NavTools/ContactUs';

Vue.use(VueRouter);

const routes = [
  { path: '/contact-us', component: ContactUs }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
