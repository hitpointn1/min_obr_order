/* eslint-disable no-undef */
import Vue from 'nativescript-vue';
import VueDevtools from 'nativescript-vue-devtools';
import router from './index';
import store from './store';
import App from './components/App';

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');
// Prints Colored logs when --env.production is *NOT* set while building
Vue.config.debug = (TNS_ENV !== 'production');

Vue.prototype.$router = router;

// eslint-disable-next-line func-names
Vue.prototype.$goto = function (to, options) {
  this.$navigateTo(this.$router[to], options);
};

Vue.registerElement(
  'RadSideDrawer',
  // eslint-disable-next-line global-require
  () => require('nativescript-ui-sidedrawer').RadSideDrawer,
);

new Vue({
  store,
  render: (h) => h('frame', [h(App)]),
}).$start();
