import Vue from 'vue'
import Loading from './loading.vue'

import { addClass, removeClass } from '../../dom'

const Mask = Vue.extend(Loading)
const loadingParentClassName = 'loading-parent--relative'

const loadingDirective = {}
let $vm = null
let domInserted = false

loadingDirective.install = Vue => {
  const toggleLoading = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(() => {
        if (binding.modifiers.fullscreen) {
          insertDom(document.body)
        } else {
          if (binding.modifiers.body) {
            insertDom(document.body)
          } else {
            addClass(el, loadingParentClassName)
            insertDom(el)
          }
        }
      })
    } else {
      removeClass(el, loadingParentClassName)
      $vm.visible = false
    }
  }

  const insertDom = (parent, binding) => {
    parent.appendChild($vm.$el)
    Vue.nextTick(() => {
      $vm.visible = true
      domInserted = true
    })
  }

  Vue.directive('loading', {
    bind(el, binding, vnode) {
      const text = el.getAttribute('element-loading-text')
      $vm = new Mask({
        el: document.createElement('div'),
        data: {
          text,
          fullscreen: !!binding.modifiers.fullscreen
        }
      })

      binding.value && toggleLoading(el, binding)
    },
    update(el, binding) {
      $vm.setText(el.getAttribute('element-loading-text'))
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },
    unbind(el, binding) {
      if (domInserted) {
        $vm.$el &&
        $vm.$el.parentNode &&
        $vm.$el.parentNode.removeChild($vm.$el)
        toggleLoading(el, {value: false, modifiers: binding.modifiers})
      }
      $vm && $vm.$destory()
    }
  })
}

export default loadingDirective;