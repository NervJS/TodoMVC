const render = require('./dist/index').default
const { createAppConfig } = require('./dist/index')

App(createAppConfig(render, 'vue'))
