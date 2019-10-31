import Vue from 'vue'
import Index from './index.vue'
import Second from './second.vue'
import { createPageConfig, createVueApp } from '@tarojs/runtime'

const app = new Vue({
  onShow (options) {
    console.log('app onshow', options)
  },
  render(h) {
    return h('block', this.$slots.default)
  }
})

export default app

export { createPageConfig, createVueApp, Index, Second, Vue }
