import Vue from 'vue'

import Message from './message'

const install = () => {
  Vue.prototype.$message = Message
}

export default {
  install
}