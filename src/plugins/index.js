import Vue from 'vue'

import Message from './message'
import Loading from './loading'

const install = () => {
  Vue.use(Loading.directive)

  Vue.prototype.$message = Message
}

export default {
  install
}