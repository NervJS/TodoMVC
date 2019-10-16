import Vue from 'vue'
import TodoMVC from './app.vue';
import { document, createAppConfig, createPageConfig, connectVuePage } from '@tarojs/runtime'

export default () => {
  const app = new Vue({
    render: h => h(TodoMVC)
  })
  app.$mount(document.getElementById('app'))
  return app
}

export { createAppConfig, createPageConfig, connectVuePage }
