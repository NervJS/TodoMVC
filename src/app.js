import Vue from 'vue'

const app = new Vue({
  onShow (options) {
    console.log('app onshow', options)
  },
  render(h) {
    return h('block', this.$slots.default)
  }
})

export default app
