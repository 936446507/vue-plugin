/*
    @param message string        文字
    @param duration number 2000  显示时间，0时不自动关闭
*/

import Vue from 'vue';
import messageComponent from './main.vue';

let $vm = null

const MessagePlugin = (options = {}) =>  {
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  if(!$vm) {
    const Message = Vue.extend(messageComponent)

    $vm = new Message({
      el: document.createElement('div'),
      data: options
    })
    document.body.appendChild($vm.$el)
  }

  $vm.setState(true)
}


export default MessagePlugin
