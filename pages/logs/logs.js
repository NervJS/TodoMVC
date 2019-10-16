const { createPageConfig } = require('../../dist/index')
// const { root, hydrate } = require('../../dist/index')
const TARO_PAGE_ID = 'taro_page_id_1'
Page(createPageConfig(TARO_PAGE_ID, 'vue'))
