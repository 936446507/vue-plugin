import Vue from 'vue'
import Loading from './loading.vue'

const Mask = Vue.extend(Loading)

const loadingDirective = {}
let $vm = null

loadingDirective.install = Vue => {
  const toggleLoading = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(() => {
        if (binding.modifiers.fullscreen) {
        } else {
          if (binding.modifiers.body) {
          } else {
            insertDom(el)
          }
        }
      })
    }
  }

  const insertDom = (parent, el, binding) => {
    parent.appendChild($vm.$el)
    Vue.nextTick(() => {
      $vm.visible = true
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
    }
  })
}

export default loadingDirective;