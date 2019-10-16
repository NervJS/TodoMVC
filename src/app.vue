<template>
  <view>
    <index />
  </view>
</template>

<script>
import { connectVuePage } from '@tarojs/runtime'
import Index, { TARO_PAGE_ID } from './index.vue'
// import Second, { TARO_PAGE_ID as page1 } from './second.vue'

export default {
  components: {
    Index: connectVuePage(TARO_PAGE_ID)(Index),
  }
}
</script>
