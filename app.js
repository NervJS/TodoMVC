const app = require('./dist/index').default
const { createVueApp, Vue } = require('./dist/index')

App(createVueApp(Vue, app))
