import Vue from 'vue';
import messageComponent from '../../../components/message/message';

let $vm = null

const MessagePlugin = (options = {}) =>  {
  if(!$vm) {
    const Message = Vue.extend(messageComponent)

    $vm = new Message({
      el: document.createElement('div'),
      data: options
    })
    document.body.appendChild($vm.$el)
  }

  if (typeof options === 'string') {
    options.message = options
  }

}

export default MessagePlugin
