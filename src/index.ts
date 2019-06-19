import Vue from 'vue'
import Router from 'vue-router'

import App from 'app.vue'
import routes from 'routes'

Vue.use(Router)

new Vue({
  el: '#app',
  render: h => h(App),
  router: new Router({
    mode: 'history',
    routes,
  })
})
