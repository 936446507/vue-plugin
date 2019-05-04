import Vue from 'vue'

import Message from '../components/message/message'

const install = () => {
  Vue.prototype.$message = Message
}

export default {
  install
}