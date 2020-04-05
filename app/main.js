import Vue from 'nativescript-vue'
import App from './components/App'
import router from './index'
import store from './store'
import VueDevtools from 'nativescript-vue-devtools'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
  
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
// Prints Colored logs when --env.production is *NOT* set while building
Vue.config.debug = (TNS_ENV !== 'production')

Vue.prototype.$router = router;

Vue.prototype.$goto = function (to, options) {
  this.$navigateTo(this.$router[to], options)
}

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer,
)

new Vue({
  store,
  render: h => h('frame', [h(router['App'])])
}).$start()
